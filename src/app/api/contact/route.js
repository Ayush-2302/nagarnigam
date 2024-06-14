import connectMongo from "@/db/dbConfig";
import Contact from "@/models/contactModels";
import { NextResponse } from "next/server";
connectMongo();

export const POST = async (req) => {
  try {
    const { name, email, phone, subject, message } = await req.json();
    const contact = new Contact({ name, email, phone, subject, message });
    const savedContact = await contact.save();
    console.log(savedContact);

    return NextResponse.json(
      { message: "Contact saved in database", savedContact, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message, sucess: false },
      { status: 500 }
    );
  }
};
