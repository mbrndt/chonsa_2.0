const mongoose = require("mongoose");

const connectDB = async () => {
  // const conn = await mongoose.connect(process.env.MONGO_URI);
  const conn = await mongoose.connect(
    "mongodb+srv://mbot:iNvF0VHxpCRLJsXp@cluster0.ych2b.mongodb.net/mgmt_db?retryWrites=true&w=majority"
  );
  console.log(
    `MongoDB Connected: ${conn.connection.host}`.yellow.underline.bold
  );
};

module.exports = connectDB;
