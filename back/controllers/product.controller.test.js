const Product = require('../models/product.model');
const {
  getAll, addProduct, deleteProduct, updateProduct,
} = require('./product.controller');

jest.mock('../models/product.model.js');

describe('Given the cart controller', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { params: {} };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });

  describe('When the getAlProducts is called', () => {
    test(' The products.find and res.json should be called', async () => {
      Product.find.mockReturnValue([]);
      await getAll(req, res);

      expect(Product.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });

    test(' The products.find and res.send should be called', async () => {
      Product.find.mockRejectedValue();
      await getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  describe('when the addProduct is called', () => {
    test('The product.create and res.json should be called', async () => {
      Product.create.mockReturnValue({});
      await addProduct(req, res, next);

      expect(Product.create).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
    test(' The products.find and res.send should be called', async () => {
      Product.create.mockRejectedValue();
      await addProduct(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
  describe('When delete is called', () => {
    test(' Then product.findByIdAndDelete should be called', async () => {
      Product.findByIdAndDelete.mockResolvedValue({});
      await deleteProduct(req, res, next);

      expect(Product.findByIdAndDelete).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(202);
    });
    test(' Then product.findByIdAndDelete should not be called', async () => {
      Product.findByIdAndDelete.mockRejectedValue();
      await deleteProduct(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
  describe('When update is called', () => {
    test('The product.findByIdAndUpdate', async () => {
      Product.findByIdAndUpdate.mockResolvedValue();
      await updateProduct(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
  describe('When update is called', () => {
    beforeEach(() => {
      req = { params: { id: '123' } };
    });
    test('The product.findByIdAndUpdate', async () => {
      Product.findByIdAndUpdate.mockResolvedValue();
      await updateProduct(req, res, next);

      expect(Product.findByIdAndUpdate).toHaveBeenCalled();
    });
    test('The product.findByIdAndUpdate', async () => {
      Product.findByIdAndUpdate.mockRejectedValue();
      await updateProduct(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
