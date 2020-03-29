import mongoose from "mongoose";

export const personSchema = new mongoose.Schema({
  name: String,
  birthday: Date,
  sex: String
});

modules.export = mongoose.model("Person", personSchema);
