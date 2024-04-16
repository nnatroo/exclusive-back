import { mongoose } from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://DavitTcharbadze:12345@cluster0.e5hbong.mongodb.net/?appName=mongosh+2.2.3");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

export { connectDB };
