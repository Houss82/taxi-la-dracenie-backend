var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.json({ ok: true, service: "Taxis La Dracénie API" });
});

module.exports = router;
