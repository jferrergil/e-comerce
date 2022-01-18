const express = require('express');
const {
  getAll, addProduct, deleteProduct, updateProduct, getOneProduct,
} = require('../controllers/product.controller');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getOneProduct);
router.post('/', addProduct);

router.delete('/:id', deleteProduct);
router.patch('/:id', updateProduct);
module.exports = router;
