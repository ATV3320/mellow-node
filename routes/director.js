
import express from 'express';
// import {AdminController, Aryan,getCoinGechoPrices,getContractDAta,hardkaur,kuchikuchi, returnJsonResponse, spitPublicKey, useDB} from'../controller/controller.js';
import  ApiController from "../controller/controller.js";

const router = express.Router();
router.get('/update', ApiController.adminController);
router.get('/Keshav', ApiController.aryan);
router.post('/kaur/:number', ApiController.hardkaur);
router.post('/aaru', ApiController.kuchikuchi)
// router.get('/getCoinPrice', ApiController.getCoinGechoPrices);
// router.get('/getContractData', ApiController.getContractData);
// router.get('/getPublicKey/:string', ApiController.spitPublicKey);
// router.get('/getJSONResponse', ApiController.returnJsonResponse);
// router.post('/postToDB', ApiController.useDB);


export default router;

