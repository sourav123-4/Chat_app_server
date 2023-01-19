const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://${process.env.ID}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DB}?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error44: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
