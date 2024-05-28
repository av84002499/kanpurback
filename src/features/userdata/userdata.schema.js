import mongoose from "mongoose";

export const userdataschema = new mongoose.Schema({
  shopname: { type: String, required: true },
  address: { type: String, required: true },
  gstnumber: { type: String }, // GST number might be better as a string
  userId: { type: String, unique: true, required: true },
});