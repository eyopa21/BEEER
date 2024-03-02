const express = require('express');
const router = express.Router();
const {
   upload
} = require('../controllers/uploadImage')


router.route('/upload').post(upload)



module.exports = router;