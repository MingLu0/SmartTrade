const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout);

module.exports = router;
