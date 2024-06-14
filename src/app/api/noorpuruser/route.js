import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongo from "@/db/dbConfig";
import UserDetails from "@/models/userDetailsSchema ";

connectMongo();
export const GET = async () => {
  try {
    const fetch_data = mongoose.connection.db.collection("user_details");
    const result = await fetch_data.find({}).toArray();

    return NextResponse.json({ result, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
// export const POST = async (req) => {
//   try {
//     const {
//       Unique_Property_ID,
//       Name_of_Localaty,
//       Name_of_Household_Owner,
//       Name_of_Household_Owner_Father_Husband,
//       House_Type,
//       No_of_Stories,
//       No_of_Rooms,
//       Source_of_Water_Supply,
//       Objective_of_use,
//       Use_Self_Rent,
//       Total_Area_Sq_Ft,
//       Coverd_Area_Sq_Ft_Residential,
//       Coverd_Area_Sq_Ft_Commercial,
//       Uncoverd_Area_Sq_Ft,
//       Mobile_No,
//       Front_Road_Type_Width_in_Feet,
//       Remarks,
//       Status,
//     } = await req.json();
//     const userDetails = await new UserDetails({
//       Unique_Property_ID,
//       Name_of_Localaty,
//       Name_of_Household_Owner,
//       Name_of_Household_Owner_Father_Husband,
//       House_Type,
//       No_of_Stories,
//       No_of_Rooms,
//       Source_of_Water_Supply,
//       Objective_of_use,
//       Use_Self_Rent,
//       Total_Area_Sq_Ft,
//       Coverd_Area_Sq_Ft_Residential,
//       Coverd_Area_Sq_Ft_Commercial,
//       Uncoverd_Area_Sq_Ft,
//       Mobile_No,
//       Front_Road_Type_Width_in_Feet,
//       Remarks,
//       Status,
//     }).save();
//     return NextResponse.json({ userDetails, success: true }, { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// };
