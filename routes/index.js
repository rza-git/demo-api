const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/movieController.js")


router.get("/movies", MovieController.findAll);
router.get("/movies/:id", MovieController.findOne);
router.post("/movies", MovieController.create);

module.exports = router;