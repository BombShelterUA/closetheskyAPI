import Shelters from "../models/Shelters.js";

class SheltersController {
  async getAllShelters(req, res) {
    try {
      const allShelters = await Shelters.find();
      return res.json(allShelters);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  async getShelterById(req, res) {
    try {
      const oneShelter = await Shelters.findOne({ shelter_id: req.params.id });
      return res.json(oneShelter);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new SheltersController();
