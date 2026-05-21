const mongoose = require("mongoose");

const connectionString =
  process.env.MONGODB_URI ||
  "mongodb+srv://mansourhoussem1982:0LshwJSY0rc7rFQ1@cluster0.5lywams.mongodb.net/la-dracenie";

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB connecté — Taxis La Dracénie (la-dracenie)");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
