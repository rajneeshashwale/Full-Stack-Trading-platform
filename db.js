// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/zerodha_clone", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB se connection successful");
  } catch (error) {
    console.error("❌ MongoDB se connection failed:", error.message);
  }
};

module.exports = connectDB;
