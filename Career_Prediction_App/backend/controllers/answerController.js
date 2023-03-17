const Answers = require("../models/Answers");

module.exports.submitResponse = async (req, res) => {
  const { answerArray } = req.body;

  if (answerArray.length !== 10) {
    return res.status(301).json({
      message: "Bhai field chahiye! Khali mat choro!!",
    });
  }

  const newResponse = await Answers.create({
    userResponse: answerArray,
  });

  if (!newResponse) {
    console.log("Error in saving the answer to backend");
    return res.status(501).json({
      message: "Internal server error",
    });
  }

  //   console.log(newResponse);

  return res.status(200).json({
    message: "Answer were added to DB",
  });
};
