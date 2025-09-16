import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function requireAdmin() {
	const token = await cookies().get("token")?.value;
	if (!token) return null;
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		return decoded.role === "admin" ? decoded : null;
	} catch (err) {
		return null;
	}
}
