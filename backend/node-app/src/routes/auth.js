const express = require('express');
const router = express.Router();
const {
    signUp,
    verify
} = require('../controllers/auth/author')


router.route('/author/signup').post(signUp)
router.route('/author/verify').post(verify)


module.exports = router;