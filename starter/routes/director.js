
import express from 'express';
import { AdminController, Aryan, getCoinGechoPrices, getContractDAta, hardkaur, kuchikuchi, returnJsonResponse, spitPublicKey, useDB } from '../controller/controller.js';
// import  ApiController from "../controller/controller.js";

const router = express.Router();
router.get('/update', AdminController);
router.get('/Keshav', Aryan);
router.post('/kaur/:number', hardkaur);
router.post('/aaru', kuchikuchi)
router.get('/getCoinPrice', getCoinGechoPrices);
// router.get('/getContractData', getContractData);
// router.get('/getPublicKey/:string', spitPublicKey);
// router.get('/getJSONResponse', returnJsonResponse);
// router.post('/postToDB', useDB);


export default router;

