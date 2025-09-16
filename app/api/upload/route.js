// import { NextResponse } from "next/server";
// import { v2 as cloudinary } from "cloudinary";
// import { requireAdmin } from "@/lib/auth";

// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const runtime = "nodejs";

// export async function POST(req) {
// 	try {
// 		// Check if environment variables are set
// 		if (
// 			!process.env.CLOUDINARY_CLOUD_NAME ||
// 			!process.env.CLOUDINARY_API_KEY ||
// 			!process.env.CLOUDINARY_API_SECRET
// 		) {
// 			console.error("Missing Cloudinary environment variables");
// 			return NextResponse.json(
// 				{
// 					message:
// 						"Server configuration error - missing Cloudinary environment variables",
// 				},
// 				{ status: 500 }
// 			);
// 		}

// 		const admin = await requireAdmin();
// 		if (!admin) {
// 			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
// 		}

// 		const formData = await req.formData();
// 		const file = formData.get("file");
// 		if (!file) {
// 			return NextResponse.json({ error: "No file" }, { status: 400 });
// 		}

// 		// Validate file
// 		if (!file.type.startsWith("image/")) {
// 			return NextResponse.json(
// 				{ error: "File must be an image" },
// 				{ status: 400 }
// 			);
// 		}

// 		// Check file size (10MB limit)
// 		if (file.size > 10 * 1024 * 1024) {
// 			return NextResponse.json({ error: "File too large" }, { status: 400 });
// 		}

// 		const arrayBuffer = await file.arrayBuffer();
// 		const buffer = Buffer.from(arrayBuffer);

// 		const result = await new Promise((resolve, reject) => {
// 			const stream = cloudinary.uploader.upload_stream(
// 				{
// 					folder: "ladwa",
// 					resource_type: "auto",
// 					timeout: 60000, // 60 second timeout
// 				},
// 				(err, res) => {
// 					if (err) {
// 						console.error("Cloudinary error:", err);
// 						return reject(err);
// 					}
// 					resolve(res);
// 				}
// 			);
// 			stream.end(buffer);
// 		});

// 		return NextResponse.json({ url: result.secure_url });
// 	} catch (err) {
// 		console.error("Upload error:", err);

// 		// More detailed error logging
// 		console.error("Error details:", {
// 			message: err.message,
// 			name: err.name,
// 			http_code: err.http_code,
// 			stack: err.stack,
// 		});

// 		return NextResponse.json(
// 			{
// 				message: "Upload failed",
// 				details: err.message,
// 				error: err,
// 				// Don't expose sensitive error details in production
// 				// ...(process.env.NODE_ENV === "development" && { error: err }),
// 			},
// 			{ status: 500 }
// 		);
// 	}
// }

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { requireAdmin } from "@/lib/auth";

// Configure Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const runtime = "nodejs";

export async function POST(req) {
	try {
		// Detailed environment variable check
		if (
			!process.env.CLOUDINARY_CLOUD_NAME ||
			!process.env.CLOUDINARY_API_KEY ||
			!process.env.CLOUDINARY_API_SECRET
		) {
			console.error("Missing Cloudinary environment variables:", {
				cloud_name: !!process.env.CLOUDINARY_CLOUD_NAME,
				api_key: !!process.env.CLOUDINARY_API_KEY,
				api_secret: !!process.env.CLOUDINARY_API_SECRET,
			});
			return NextResponse.json(
				{
					message:
						"Server configuration error - missing Cloudinary environment variables",
				},
				{ status: 500 }
			);
		}

		// Check admin authentication
		const admin = await requireAdmin();
		if (!admin) {
			return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
		}

		// Get and validate file
		const formData = await req.formData();
		const file = formData.get("file");
		if (!file) {
			return NextResponse.json({ error: "No file provided" }, { status: 400 });
		}

		// Validate file type
		if (!file.type.startsWith("image/")) {
			return NextResponse.json(
				{ error: `Invalid file type: ${file.type}. Only images are allowed.` },
				{ status: 400 }
			);
		}

		// Check file size (5MB limit for better reliability)
		const maxSize = 5 * 1024 * 1024; // 5MB
		if (file.size > maxSize) {
			return NextResponse.json(
				{
					error: `File too large: ${(file.size / 1024 / 1024).toFixed(
						2
					)}MB. Maximum size is ${maxSize / 1024 / 1024}MB.`,
				},
				{ status: 400 }
			);
		}

		console.log(
			`Processing upload: ${file.name}, Size: ${(file.size / 1024).toFixed(
				2
			)}KB, Type: ${file.type}`
		);

		// Convert file to buffer
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		// Upload to Cloudinary with enhanced options
		const result = await new Promise((resolve, reject) => {
			const uploadStream = cloudinary.uploader.upload_stream(
				{
					folder: "ladwa",
					resource_type: "auto",
					timeout: 120000, // 2 minutes timeout
					chunk_size: 6000000, // 6MB chunks for better reliability
					use_filename: true,
					unique_filename: true,
				},
				(error, result) => {
					if (error) {
						console.error("Cloudinary upload error:", {
							message: error.message,
							name: error.name,
							http_code: error.http_code,
							api_error_code: error.error?.code,
						});
						reject(error);
					} else {
						console.log("Upload successful:", result.public_id);
						resolve(result);
					}
				}
			);

			// Handle stream errors
			uploadStream.on("error", (streamError) => {
				console.error("Upload stream error:", streamError);
				reject(streamError);
			});

			// End the stream with buffer
			uploadStream.end(buffer);
		});

		return NextResponse.json({
			url: result.secure_url,
			public_id: result.public_id,
			format: result.format,
			size: result.bytes,
		});
	} catch (error) {
		console.error("Upload error:", {
			message: error.message,
			name: error.name,
			http_code: error.http_code,
			stack: error.stack?.split("\n").slice(0, 5).join("\n"), // Limit stack trace
		});

		// Determine error type and provide appropriate response
		let errorMessage = "Upload failed";
		let statusCode = 500;

		if (error.message?.includes("Invalid JSON response")) {
			errorMessage = "Cloudinary service error - please check configuration";
		} else if (error.http_code === 401) {
			errorMessage = "Cloudinary authentication failed";
			statusCode = 502;
		} else if (error.http_code === 400) {
			errorMessage = "Invalid file or upload parameters";
			statusCode = 400;
		} else if (error.message?.includes("timeout")) {
			errorMessage = "Upload timeout - file may be too large";
			statusCode = 408;
		}

		return NextResponse.json(
			{
				message: errorMessage,
				details: error.message,
				// Only include full error details in development
				// ...(process.env.NODE_ENV === "development" && {
				// 	debug: {
				// 		name: error.name,
				// 		http_code: error.http_code,
				// 	},
				// }),
				debug: {
					name: error.name,
					http_code: error.http_code,
				},
				error: error,
			},
			{ status: statusCode }
		);
	}
}
