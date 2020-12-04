const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeSchema = new Schema(
  {
    id_place: { type: Schema.Types.ObjectId, ref: "Place" },
    id_user: { type: Schema.Types.ObjectId, ref: "User" },
    grade: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamp: true }
);

const Grade = mongoose.model("Grade", gradeSchema);
module.exports = Grade;
