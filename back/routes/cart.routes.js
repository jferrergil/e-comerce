const express = require('express');

const router = express.Router();

const {
  getCartById,
  addProductShopCart,
  makeBuyOperation,
  updateOneProductById,
  updateOneById,
  deleteOneProductById,
} = require('../controllers/car.controller');

router.route('/').post(addProductShopCart);
router.route('/buy').post(makeBuyOperation);
router.route('/:id').patch(updateOneById).delete(deleteOneProductById).get(getCartById);
router.route('/:id').patch(updateOneProductById);
module.exports = router;
