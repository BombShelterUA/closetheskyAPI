import Router from "express";
import SheltersController from "../controllers/SheltersController.js";

const router = Router();

router.get("/shelters", SheltersController.getAllShelters);
router.get("/shelters/:id", SheltersController.getShelterById);

export default router;
