import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    return console.log("Missing Mongodb Uri");
  }
  if (isConnected) {
    return console.log("Mongodb already connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Ecomm-Project",
    });
    isConnected = true;
    console.log("Mongodb Connected");
    return mongoose.connection.getClient();
  } catch (error) {
    console.log("MongoDB connection failed:- ", error);
  }
};
