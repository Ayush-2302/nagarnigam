import connectToMongoDb from "@/db/dbConfig";
import Complaint from "@/models/complaint";
import { NextResponse } from "next/server";
connectToMongoDb();
export const POST = async (req) => {
  try {
    const {
      complainSub,
      complainDesc,
      complainZone,
      complainAddress,
      complainLandmark,
      complainerName,
      complainerMobile,
      complainerEmail,
    } = await req.json();

    const newComplaint = await new Complaint({
      complainSub,
      complainDesc,
      complainZone,
      complainAddress,
      complainLandmark,
      complainerName,
      complainerMobile,
      complainerEmail,
    });

    await newComplaint.save();

    console.log(newComplaint);
    return NextResponse.json({ newComplaint: newComplaint }, { status: 200 });
  } catch (error) {
    console.error("Create complaint error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const Complaints = await Complaint.find();
    return NextResponse.json({ Complaints }, { status: 200 });
  } catch (error) {
    console.error("Get complaint error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
