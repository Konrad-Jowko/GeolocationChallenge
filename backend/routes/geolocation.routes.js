const express = require('express');
const router = express.Router();
const UserIpController = require('../controllers/userIp.controller');
const SearchDataController = require('../controllers/searchData.controller');

/* ROUTES TO API CONTROLLERS */
router.get('/user', UserIpController.get);
router.get('/search/:adress', SearchDataController.get);

module.exports = router;
