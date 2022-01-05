const express = require('express');

const {getAllDetails, createDetails,} = require('../controllers/detailsControllers');

const router = express.Router();

router.get('/getAllDetails', getAllDetails);

router.post('/createDetails', createDetails );


module.exports = router;
