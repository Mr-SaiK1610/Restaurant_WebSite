import mongoose from "mongoose";

let isConnected = false;

export const dbConnection = async () => {
  if (isConnected) return; // prevents duplicate connections

  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) throw new Error("MONGO_URI is not defined");

    await mongoose.connect(mongoUri, { dbName: "RESERVATIONS" });
    console.log("Database connected");
    isConnected = true;
  } catch (error) {
    console.log("Database connection error:", error.message);
  }
};
