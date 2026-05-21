const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  indicatifPays: { type: String, required: true, default: "+33" },
  telephone: { type: String, required: true },
  email: { type: String, required: false },
  date: { type: Date, required: true },
  heure: { type: String, required: true },
  adresseDepart: { type: String, required: true },
  adresseArrivee: { type: String, required: true },
  nombreBagages: { type: String, required: true },
  nombrePassagers: { type: String, required: true },
  vehicule: { type: String, required: false, default: null },
  commentaires: { type: String, required: false },
});

reservationSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Reservation", reservationSchema);
