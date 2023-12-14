
import express from 'express';
import {AdminController, Aryan,hardkaur,kuchikuchi} from'../controller/controller.js';

const router = express.Router();
router.get('/update',AdminController);
router.get('/Keshav', Aryan);
router.post('/kaur/:number', hardkaur);
router.post('/aaru',kuchikuchi)


export default router;

