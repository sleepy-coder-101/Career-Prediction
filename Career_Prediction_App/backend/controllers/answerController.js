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

module.exports.submitResponse = async (req, res) => {
  const EXT = [];
  const AGR = [];
  const CNS = [];
  const NRT = [];
  const OPN = [];
  const { answerArray } = req.body;

  if (answerArray.length !== 10) {
    return res.status(301).json({
      message: "Bhai field chahiye! Khali mat choro!!",
    });
    getPersonality;
  }

  // console.log(answerArray);
  // console.log(questionArray);

  answerArray.map((answer, index) => {
    let value = parseInt(answer.value);

    if (questionArray[index].reversed) {
      value = parseInt(6 - value);
    }

    console.log(value);

    if (questionArray[index].trait === "Extraversion") {
      EXT.push(value);
    }
    if (questionArray[index].trait === "Agreeableness") {
      AGR.push(value);
    }
    if (questionArray[index].trait === "Conscientiousness") {
      CNS.push(value);
    }
    if (questionArray[index].trait === "Neuroticism") {
      NRT.push(value);
    }
    if (questionArray[index].trait === "Openness") {
      OPN.push(value);
    }
  });

  console.log("Extraversion", EXT);
  console.log("Agreeableness", AGR);
  console.log("Conscientiousness", CNS);
  console.log("Neuroticism", NRT);
  console.log("Openness", OPN);

  const ext = {
    percentage: calculateAverage(EXT),
    trait: "Extraversion",
  };
  const agr = {
    percentage: calculateAverage(AGR),
    trait: "Agreeableness",
  };
  const cns = {
    percentage: calculateAverage(CNS),
    trait: "Conscientiousness",
  };
  const nrt = {
    percentage: calculateAverage(NRT),
    trait: "Neuroticism",
  };
  const opn = {
    percentage: calculateAverage(OPN),
    trait: "Openness",
  };

  results = [ext, agr, cns, nrt, opn];
  console.log(results);

  const newResponse = await Answers.create({
    userResponse: answerArray,
    personalityScore: results,
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
  });
};
