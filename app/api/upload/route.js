// import { NextResponse } from "next/server";
// import { v2 as cloudinary } from "cloudinary";
// import { requireAdmin } from "@/lib/auth";

// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET,
// });
// export const runtime = "nodejs";

// // export async function POST(req) {
// // 	const admin = await requireAdmin();
// // 	if (!admin) {
// // 		return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
// // 	}
// // 	const formData = await req.formData();
// // 	const file = formData.get("file");
// // 	if (!file) {
// // 		return NextResponse.json({ error: "No file" }, { status: 400 });
// // 	}
// // 	const arrayBuffer = await file.arrayBuffer();
// // 	const buffer = Buffer.from(arrayBuffer);

// // 	try {
// // 		const result = await new Promise((resolve, reject) => {
// // 			const stream = cloudinary.uploader.upload_stream(
// // 				{ folder: "ladwa" },
// // 				(err, res) => {
// // 					if (err) return reject(err);
// // 					resolve(res);
// // 				}
// // 			);
// // 			stream.end(buffer);
// // 		});
// // 		return NextResponse.json({ url: result.secure_url });
// // 	} catch (err) {
// // 		console.error("Upload error:", err);
// // 		return NextResponse.json(
// // 			{ error: "Upload failed", details: err, message: err.message },
// // 			{ status: 500 }
// // 		);
// // 	}
// // }

// export async function POST(req) {
// 	try {
// 		const admin = await requireAdmin();
// 		if (!admin) {
// 			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
// 		}

// 		const formData = await req.formData();
// 		const file = formData.get("file");
// 		if (!file) {
// 			return NextResponse.json({ error: "No file" }, { status: 400 });
// 		}

// 		const arrayBuffer = await file.arrayBuffer();
// 		const buffer = Buffer.from(arrayBuffer);

// 		const result = await new Promise((resolve, reject) => {
// 			const stream = cloudinary.uploader.upload_stream(
// 				{ folder: "ladwa" },
// 				(err, res) => {
// 					if (err) return reject(err);
// 					resolve(res);
// 				}
// 			);
// 			stream.end(buffer);
// 		});

// 		return NextResponse.json({ url: result.secure_url });
// 	} catch (err) {
// 		console.error("Upload error:", err);
// 		return NextResponse.json(
// 			{ message: "Upload failed", details: err.message, error: err },
// 			{ status: 500 }
// 		);
// 	}
// }

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
	try {
		// Check if environment variables are set
		if (
			!process.env.CLOUDINARY_CLOUD_NAME ||
			!process.env.CLOUDINARY_API_KEY ||
			!process.env.CLOUDINARY_API_SECRET
		) {
			console.error("Missing Cloudinary environment variables");
			return NextResponse.json(
				{
					message:
						"Server configuration error - missing Cloudinary environment variables",
				},
				{ status: 500 }
			);
		}

		const admin = await requireAdmin();
		if (!admin) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		const formData = await req.formData();
		const file = formData.get("file");
		if (!file) {
			return NextResponse.json({ error: "No file" }, { status: 400 });
		}

		// Validate file
		if (!file.type.startsWith("image/")) {
			return NextResponse.json(
				{ error: "File must be an image" },
				{ status: 400 }
			);
		}

		// Check file size (10MB limit)
		if (file.size > 10 * 1024 * 1024) {
			return NextResponse.json({ error: "File too large" }, { status: 400 });
		}

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const result = await new Promise((resolve, reject) => {
			const stream = cloudinary.uploader.upload_stream(
				{
					folder: "ladwa",
					resource_type: "auto", // Let Cloudinary auto-detect
					timeout: 60000, // 60 second timeout
				},
				(err, res) => {
					if (err) {
						console.error("Cloudinary error:", err);
						return reject(err);
					}
					resolve(res);
				}
			);
			stream.end(buffer);
		});

		return NextResponse.json({ url: result.secure_url });
	} catch (err) {
		console.error("Upload error:", err);

		// More detailed error logging
		console.error("Error details:", {
			message: err.message,
			name: err.name,
			http_code: err.http_code,
			stack: err.stack,
		});

		return NextResponse.json(
			{
				message: "Upload failed",
				details: err.message,
				error: err,
				// Don't expose sensitive error details in production
				// ...(process.env.NODE_ENV === "development" && { error: err }),
			},
			{ status: 500 }
		);
	}
}
