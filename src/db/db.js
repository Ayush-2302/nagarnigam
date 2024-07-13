import mongoose from "mongoose";
const uri =
  "mongodb+srv://ayush132:TsH23wA1V1xbBBzE@cluster0.ivszlkf.mongodb.net/noorpur";
const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || uri);
    console.log("Connected to MongoDB", conn.connection.host);
    return conn;
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
