import { NextResponse } from "next/server";
import complaint from "@/models/complaint";
import connectMongo from "@/db/db";
connectMongo();

export const GET = async () => {
  try {
    const getAllComplains = await complaint.find({});
    return NextResponse.json({ getAllComplains }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error fetching complains" },
      { status: 500 }
    );
  }
};
