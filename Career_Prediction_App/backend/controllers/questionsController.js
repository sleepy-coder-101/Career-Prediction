const Questions = require("../models/Questions");
const data = require("../data/data");

module.exports.addQuestion = async (req, res) => {
  const allQuestions = await Questions.insertMany(data);

  if (!allQuestions) {
    console.log("Error in saving question to database");
    return res.status(501).json({
      message: "Internal Server Error",
    });
  }

  return res.status(200).json({
    message: "Question were saved to DB",
  });
};

module.exports.fetchQuestion = async (req, res) => {
  let allQuestions = await Questions.find({});

  return res.status(200).json({
    message: "Question were fetched to DB",
    data: allQuestions,
  });
};
