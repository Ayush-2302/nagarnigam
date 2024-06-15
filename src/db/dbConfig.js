import mongoose from "mongoose";
const uri =
  "mongodb+srv://ayush132:TsH23wA1V1xbBBzE@cluster0.ivszlkf.mongodb.net/noorpur";
const connectMongo = async () => {
  try {
    if (mongoose.connection.readyState >= 1) return;
    const connection = await mongoose.connect(process.env.MONGODB_URI || uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database");

    console.log(`Database Name: ${connection.connection.name}`);
  
    return connection;
  } catch (error) {
    console.log(error);
  }
};

export default connectMongo;
