const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema(
  {
    userResponse: [
      {
        no: {
          type: Number,
          required: true,
        },

        value: {
          type: Number,
          required: true,
        },
      },
    ],
    personalityScore: [
      {
        percentage: {
          type: Number,
          required: true,
        },

        trait: {
          type: String,
          required: true,
        },
      },
    ],
    mbtiType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// const AnswerSchema = new mongoose.Schema(
//   {
//     no: {
//       type: Number,
//       required: true,
//     },

//     value: {
//       type: Number,
//       required: true,
//     },
//   },

//   { timestamps: true }
// );

const Answer = mongoose.model("Answer", AnswerSchema);
module.exports = Answer;
