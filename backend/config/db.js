const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://root:Nickroot@cluster0.7yrwhjq.mongodb.net/king-clothing?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
  );
}

module.exports = connectDB;

