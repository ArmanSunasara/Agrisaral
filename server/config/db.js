// Database configuration
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    
    // Provide helpful error messages for common issues
    if (error.code === 'ENOTFOUND') {
      console.error("\n⚠️  DNS lookup failed. Possible causes:");
      console.error("   - MongoDB Atlas cluster is paused (check your Atlas dashboard)");
      console.error("   - Incorrect connection string in .env file");
      console.error("   - Network connectivity issues");
    }
    
    process.exit(1);
  }
};

module.exports = connectDB;
