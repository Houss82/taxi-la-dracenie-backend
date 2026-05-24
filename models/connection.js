const mongoose = require("mongoose");

/** Cache connexion pour Vercel / serverless (réutilise entre invocations). */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  const connectionString = process.env.MONGODB_URI;

  if (!connectionString) {
    throw new Error(
      "MONGODB_URI manquant. Ajoutez la variable dans Vercel → Settings → Environment Variables."
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(connectionString, {
        serverSelectionTimeoutMS: 10000,
        bufferCommands: false,
      })
      .then((mongooseInstance) => {
        console.log("MongoDB connecté — Taxis La Dracénie");
        return mongooseInstance;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = connectDB;
