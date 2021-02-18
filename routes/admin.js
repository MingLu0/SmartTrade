const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const adminController = require("../controllers/admin");

// /admin/add-product => GET
router.get('/admin/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/admin/add-product', adminController.postAddProduct);


module.exports = router;
