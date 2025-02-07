import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        if (mongoose.connection.readyState === 1) return;

        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string, { dbName: process.env.DB_NAME });
        console.log("Database connected");
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log("Cannot connect to database");
        }
    }
};
