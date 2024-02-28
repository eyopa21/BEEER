const express = require('express');
const router = express.Router();
const {
   initialize
} = require('../controllers/events/InitializeUserDetail')


router.route('/events/addprofiledetail').post(initialize)



module.exports = router;