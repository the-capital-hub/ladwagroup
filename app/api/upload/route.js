import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { requireAdmin } from "@/lib/auth";

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const runtime = "nodejs";
export async function POST(req) {
	const admin = await requireAdmin();
	if (!admin) {
		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
	}
	const formData = await req.formData();
	const file = formData.get("file");
	if (!file) {
		return NextResponse.json({ error: "No file" }, { status: 400 });
	}
	const arrayBuffer = await file.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);

	try {
		const result = await new Promise((resolve, reject) => {
			const stream = cloudinary.uploader.upload_stream(
				{ folder: "ladwa" },
				(err, res) => {
					if (err) return reject(err);
					resolve(res);
				}
			);
			stream.end(buffer);
		});
		return NextResponse.json({ url: result.secure_url });
	} catch (err) {
		console.error("Upload error:", err);
		return NextResponse.json(
			{ error: "Upload failed", details: err, message: err.message },
			{ status: 500 }
		);
	}
}
