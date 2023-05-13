const Answers = require("../models/Answers");
const questionArray = require("../data/data");

function calculateAverage(array) {
  var total = 0;
  var count = 0;

  array.forEach(function (item, index) {
    total += item;
    count++;
  });

  return (total / count) * 20;
}

let results = [];
let mbti = "";

module.exports.submitResponse = async (req, res) => {
  results = [];
  const percentages = [];
  const { answerArray } = req.body;

  if (answerArray.length !== 10) {
    return res.status(301).json({
      message: "Bhai field chahiye! Khali mat choro!!",
    });
  }

  console.log(answerArray);

  // Reverse Score the array
  answerArray.map((answer, index) => {
    if (index < 5) {
      answer.value = parseInt(6 - answer.value);
    } else {
      answer.value = parseInt(answer.value);
    }
  });
  console.log(answerArray);

  // Find FFM percentages
  for (let i = 0; i < 5; i++) {
    // console.log(answerArray[i].value);
    // console.log(answerArray[i].value);
    let sum = answerArray[i].value + answerArray[i + 5].value;
    let value = sum * 10;
    percentages.push(value);
  }

  console.log(percentages);

  const ffmTraits = [
    "Openness",
    "Conscientiousness",
    "Extraversion",
    "Agreeableness",
    "Neuroticism",
  ];

  for (let i = 0; i < 5; i++) {
    let resObj = {
      percentage: percentages[i],
      trait: ffmTraits[i],
    };
    results.push(resObj);
  }

  // Find MBTI types
  mbti = "";

  if (answerArray[2].value > answerArray[7].value) mbti += "E";
  else mbti += "I";

  if (answerArray[0].value > answerArray[5].value) mbti += "N";
  else mbti += "S";

  if (answerArray[3].value > answerArray[8].value) mbti += "F";
  else mbti += "T";

  if (answerArray[1].value > answerArray[6].value) mbti += "J";
  else mbti += "P";

  console.log(mbti);

  const newResponse = await Answers.create({
    userResponse: answerArray,
    personalityScore: results,
    mbtiType: mbti,
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

module.exports.getPersonality = async (req, res) => {
  return res.status(200).json({
    message: "Personality were fetched",
    data: results,
    personalityType: mbti,
  });
};
