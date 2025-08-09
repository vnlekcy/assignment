import { Router } from "express";
import { shorturl,visit,visitall} from "../controllers/urlcontroller.js";
const router = Router();

router.post("/shorten",shorturl);
router.get("/:shortCode",visit);
router.get("/admin/visitall",visitall);
export default router;