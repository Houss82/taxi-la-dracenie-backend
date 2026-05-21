var express = require("express");
var router = express.Router();
const Reservation = require("../models/reservation");

router.post("/reservation", async (req, res) => {
  try {
    const saved = await new Reservation({
      nom: req.body.nom,
      indicatifPays: req.body.indicatifPays || "+33",
      telephone: req.body.telephone,
      email: req.body.email,
      date: req.body.date,
      heure: req.body.heure,
      adresseDepart: req.body.adresseDepart,
      adresseArrivee: req.body.adresseArrivee,
      nombreBagages: req.body.nombreBagages,
      nombrePassagers: req.body.nombrePassagers,
      vehicule: req.body.vehicule,
      commentaires: req.body.commentaires,
    }).save();

    res.status(201).json({
      result: true,
      message: "Réservation créée avec succès",
      reservation: saved.toObject(),
    });
  } catch (error) {
    res.status(400).json({ result: false, error: error.message });
  }
});

router.get("/reservations", async (req, res) => {
  try {
    const items = await Reservation.find();
    res.json({ result: true, count: items.length, reservations: items });
  } catch (error) {
    res.status(500).json({ result: false, error: error.message });
  }
});

module.exports = router;
