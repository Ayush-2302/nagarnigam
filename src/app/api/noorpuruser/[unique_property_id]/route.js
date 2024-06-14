import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongo from "@/db/dbConfig";
import moongoose from "moongoose";
connectMongo();

export const GET = async (req, { params }) => {
  try {
    const { unique_property_id } = params;
    console.log(unique_property_id);

    if (!unique_property_id) {
      return NextResponse.json(
        { error: "Missing unique_property_id parameter" },
        { status: 400 }
      );
    }

    const fetch_data = mongoose.connection.db.collection("user_details");

    const result = await fetch_data.findOne({
      Unique_Property_ID: unique_property_id,
    });

    if (!result) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }

    return NextResponse.json({ result, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

// export const PUT = async (req, { params }) => {
//   try {
//     const { unique_property_id } = params;
//     if (!unique_property_id) {
//       return NextResponse.json(
//         { error: "Missing unique_property_id parameter" },
//         { status: 400 }
//       );
//     }
//     const {
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

//     const update_user = {};
//     if (Name_of_Localaty) update_user.Name_of_Localaty = Name_of_Localaty;
//     if (Name_of_Household_Owner)
//       update_user.Name_of_Household_Owner = Name_of_Household_Owner;
//     if (Name_of_Household_Owner_Father_Husband)
//       update_user.Name_of_Household_Owner_Father_Husband = Name_of_Household_Owner_Father_Husband;
//     if (House_Type) update_user.House_Type = House_Type;
//     if (No_of_Stories) update_user.No_of_Stories = No_of_Stories;
//     if (No_of_Rooms) update_user.No_of_Rooms = No_of_Rooms;
//     if (Source_of_Water_Supply)
//       update_user.Source_of_Water_Supply = Source_of_Water_Supply;
//     if (Objective_of_use) update_user.Objective_of_use = Objective_of_use;
//     if (Use_Self_Rent) update_user.Use_Self_Rent = Use_Self_Rent;
//     if (Total_Area_Sq_Ft) update_user.Total_Area_Sq_Ft = Total_Area_Sq_Ft;
//     if (Coverd_Area_Sq_Ft_Residential)
//       update_user.Coverd_Area_Sq_Ft_Residential = Coverd_Area_Sq_Ft_Residential;
//     if (Coverd_Area_Sq_Ft_Commercial)
//       update_user.Coverd_Area_Sq_Ft_Commercial = Coverd_Area_Sq_Ft_Commercial;
//     if (Uncoverd_Area_Sq_Ft)
//       update_user.Uncoverd_Area_Sq_Ft = Uncoverd_Area_Sq_Ft;
//     if (Mobile_No) update_user.Mobile_No = Mobile_No;
//     if (Front_Road_Type_Width_in_Feet)
//       update_user.Front_Road_Type_Width_in_Feet = Front_Road_Type_Width_in_Feet;
//     if (Remarks) update_user.Remarks = Remarks;
//     if (Status) update_user.Status = Status;

//     const fetch_data = mongoose.connection.db.collection("user_details");

//     let result = await fetch_data.findOne({
//       Unique_Property_ID: unique_property_id,
//     });

//     if (!result) {
//       return NextResponse.json({ error: "Data not found" }, { status: 404 });
//     }
//     result = await fetch_data.findOneAndUpdate(
//       { Unique_Property_ID: unique_property_id },
//       { $set: update_user },
//       { new: true }
//     );
//     console.log(result);

//     return NextResponse.json({ update_user, success: true }, { status: 200 });
//   } catch (error) {
//     console.error("Error updating property:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// };

export const PUT = async (req, { params }) => {
  try {
    const { unique_property_id } = params;
    if (!unique_property_id) {
      return NextResponse.json(
        { error: "Missing unique_property_id parameter" },
        { status: 400 }
      );
    }
    const { Remarks, Garbage_Collected, House_Type } = await req.json();
    const update_user = {};
    if (Remarks) update_user.Remarks = Remarks;
    if (Garbage_Collected!==undefined) update_user.Garbage_Collected = Garbage_Collected;
    if (House_Type) update_user.House_Type = House_Type;

    const fetch_data = mongoose.connection.db.collection("user_details");

    let result = await fetch_data.findOne({
      Unique_Property_ID: unique_property_id,
    });
    console.log(result, "beforeupdating");

    if (!result) {
      return NextResponse.json({ error: "Data not found" }, { status: 404 });
    }
    result = await fetch_data.findOneAndUpdate(
      { Unique_Property_ID: unique_property_id },
      { $set: update_user },
      { returnDocument: "after" }
    );
    console.log(result, "afterUpdating");

    return NextResponse.json({ result, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
