const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    no: {
      type: Number,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    trait: {
      type: String,
      required: true,
    },

    reversed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
