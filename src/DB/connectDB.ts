import mongoose from "mongoose";

const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("database connected ");
  } catch (error) {
    console.error("database connection error", error);
  }
};

export default connectDB;
