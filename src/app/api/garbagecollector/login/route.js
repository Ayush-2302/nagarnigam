import connectMongo from "@/db/dbConfig";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
connectMongo();

const JWT_SECRET = "jwtTarunWebToken";

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json("user not found with this email", { status: 500 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json("password not mathed", { status: 500 });
    }

    const authToken = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);

    const response = NextResponse.json(
      { authToken, success: true },
      { status: 200 }
    );
    response.cookies.set("authToken", authToken, {
      expiresIn: "1d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 }
    );
  }
};
