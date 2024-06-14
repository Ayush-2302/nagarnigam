import mongoose from "mongoose";
const uri =
  "mongodb+srv://ayush132:TsH23wA1V1xbBBzE@cluster0.ivszlkf.mongodb.net/noorpur";
const connectMongo = async () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.MONGODB_URI || uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectMongo;
