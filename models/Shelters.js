import mongoose from "mongoose";

const Shelters = new mongoose.Schema({
  shelter_id: { type: Number, required: true, unique: true },
  shelter_number: { type: String, required: true },
  adress: { type: String, required: true },
  shelter_limit: { type: String, required: true },
  shelter_year: { type: String, required: true },
  status: { type: String, required: true },
  type_shelter: { type: String, required: true },
});

export default mongoose.model("Shelters", Shelters);
