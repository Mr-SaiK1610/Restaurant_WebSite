import mongoose from "mongoose";

let isConnected = false;

export const dbConnection = async () => {
  if (isConnected) return;

  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined");
    }

    await mongoose.connect(mongoUri);

    console.log("DB Connected ✅");

    isConnected = true;
  } catch (error) {
    console.log("DB ERROR ❌:", error.message);
  }
};
