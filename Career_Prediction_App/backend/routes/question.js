const express = require("express");
const questionController = require("../controllers/questionsController");

const router = express.Router();

router.post("/add-question", questionController.addQuestion);
router.get("/fetch-question", questionController.fetchQuestion);

module.exports = router;
