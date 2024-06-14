import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/user";
import connectMongo from "@/db/dbConfig";
connectMongo();

export const POST = async (req) => {
  try {
    const { name, email, password, role } = await req.json();
    console.log(name);

    // Ensure that the request has all the required fields
    if (!name || !email || !password || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const genSalt = 10;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, genSalt);

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      role,
    });
    await newUser.save();

    console.log(User);
    return NextResponse.json({ User: newUser }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
