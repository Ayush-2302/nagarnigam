import User from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "jwtTarunWebToken";

export const GET = async (req) => {
  try {
    const cookiesHeader = cookies();
    const authToken = cookiesHeader.get("authToken")?.value;

    if (!authToken) {
      return NextResponse.json(
        { error: "No token found", success: false },
        { status: 401 }
      );
    }

    const data = jwt.verify(authToken, JWT_SECRET);
    const user = await User.findById(data.id).select("-password");

    if (!user) {
      return NextResponse.json(
        { error: "User not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ user, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { error: "Invalid token or server error", success: false },
      { status: 500 }
    );
  }
};
