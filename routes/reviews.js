const express = require('express');
const router = express.Router();
const {createReview} = require ('../controllers/reviews');
const { requireSignin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.post('/review/:userId/:productId', createReview);

router.param('userId', userById);
// router.param('productId', p/roductById);

module.exports = router;
