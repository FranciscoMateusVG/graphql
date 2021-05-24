import express from 'express';
const router = express.Router();

import {
   testandoController
} from "../controllers/controllerTeste";

router.get("/teste", testandoController);

export default router;