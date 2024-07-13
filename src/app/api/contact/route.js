import connectMongo from "@/db/db";
import Contact from "@/models/contactModels";
import { NextResponse } from "next/server";
connectMongo();

export const POST = async (req) => {
  try {
    const { name, email, phone, subject, message } = await req.json();
    const contact = new Contact({ name, email, phone, subject, message });
    const savedContact = await contact.save();
    return NextResponse.json({ savedContact, success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Issue", success: false },
      { status: 500 }
    );
  }
};
