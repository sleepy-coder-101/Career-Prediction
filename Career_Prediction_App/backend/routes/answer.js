const express = require("express");
const answerController = require("../controllers/answerController");

const router = express.Router();

router.post("/submit-response", answerController.submitResponse);
// router.get("/fetch-question", questionController.fetchQuestion);

module.exports = router;
