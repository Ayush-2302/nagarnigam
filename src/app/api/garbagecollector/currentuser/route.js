import User from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
const JWT_SECRET = "jwtTarunWebToken";

export const GET = async (req) => {
  try {
    const authToken = req.cookies.get("authToken")?.value;
    const data = jwt.verify(authToken, JWT_SECRET);
    const user = await User.findById(data.id).select("-password");
    return NextResponse.json({ user, success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, success: false }, { status: 200 });
  }
};
