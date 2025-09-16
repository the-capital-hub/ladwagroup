import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { requireAdmin } from "@/lib/auth";

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const runtime = "nodejs"; // Force Node runtime

export async function POST(req) {
  console.log("➡️ Upload API called");

  try {
    // ✅ Verify Cloudinary env vars
    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return NextResponse.json(
        { message: "Missing Cloudinary configuration" },
        { status: 500 }
      );
    }

    // ✅ Check admin auth
    let admin;
    try {
      admin = await requireAdmin();
    } catch (authError) {
      console.error("Auth error:", authError);
      return NextResponse.json(
        { message: "Authentication failed" },
        { status: 401 }
      );
    }

    if (!admin) {
      return NextResponse.json(
        { message: "Unauthorized: Admin only" },
        { status: 403 }
      );
    }

    // ✅ Parse incoming file
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: `Invalid file type: ${file.type}` },
        { status: 400 }
      );
    }

    const maxSize = 4 * 1024 * 1024; // 4MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: `File too large: ${(file.size / 1024 / 1024).toFixed(2)} MB` },
        { status: 400 }
      );
    }

    console.log(
      `Uploading file: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`
    );

    // ✅ Convert file into buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // ✅ Upload to Cloudinary (promise wrapper)
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "ladwa",
          resource_type: "auto",
          use_filename: true,
          unique_filename: true,
          timeout: 60000,
          chunk_size: 6_000_000,
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      uploadStream.end(buffer);
    });

    // ✅ Success response
    return NextResponse.json({
      url: result.secure_url,
      public_id: result.public_id,
      format: result.format,
      size: result.bytes,
    });
  } catch (error) {
    console.error("Upload failed:", error);

    let status = 500;
    let message = "Upload failed";

    if (error.http_code === 401) {
      message = "Cloudinary authentication failed";
      status = 502;
    } else if (error.http_code === 400) {
      message = "Invalid file or upload parameters";
      status = 400;
    } else if (error.message?.includes("timeout")) {
      message = "Upload timeout - file may be too large";
      status = 408;
    }

    return NextResponse.json(
      {
        message,
        details: error.message,
      },
      { status }
    );
  }
}
