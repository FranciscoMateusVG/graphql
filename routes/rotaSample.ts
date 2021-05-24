import express from 'express';
const router = express.Router();

import {
   sampleController
} from "../controllers/controllerSample";

router.get("/sample", sampleController);

export default router;