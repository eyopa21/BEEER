const express = require('express');
const router = express.Router();
const {
    signUp,
    verify,
    changePassword
} = require('../controllers/auth/author')


router.route('/author/signup').post(signUp)
router.route('/author/verify').post(verify)
router.route('/author/changepassword').post(changePassword)


module.exports = router;