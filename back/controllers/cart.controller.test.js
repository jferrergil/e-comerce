/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken');

const Cart = require('../models/cart.model');
const Product = require('../models/product.model');
const {
  getCartById, makeBuyOperation, addProductShopCart, deleteOneProductById, updateOneProductById,
} = require('./car.controller');

jest.mock('../models/product.model');
jest.mock('../models/cart.model');
jest.mock('jsonwebtoken');

describe('Given the cart controller', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { params: { id: '123' }, body: { items: [{ name: 'jorge', stock: 12 }] } };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });

  describe('When the getCart is called', () => {
    test('The cart.findById and res.json should be called', async () => {
      Cart.find.mockReturnValue({
        populate: jest.fn(),
      });
      await getCartById(req, res);

      expect(Cart.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the makeBuyOperation is funtion', () => {
    beforeEach(() => {
      jwt.verify = jest.fn().mockReturnValue('hola');
      Cart.create.mockReturnValue({});
    });
    test('the token is ok', async () => {
      req.get = jest.fn().mockReturnValue('Bearer Token');
      Product.findByIdAndUpdate.mockResolvedValue({});
      await makeBuyOperation(req, res);

      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
    test('the token is not ok ', async () => {
      req.get = jest.fn().mockReturnValue(null);
      await makeBuyOperation(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the makeBuyOperation is funtion', () => {
    beforeEach(() => {
      jwt.verify = jest.fn().mockReturnValue('hola');
    });
    test('the token is ok', async () => {
      req.get = jest.fn().mockReturnValue('Bearer Token');
      await makeBuyOperation(req, res);

      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
    test('the token is not ok ', async () => {
      req.get = jest.fn().mockReturnValue(null);
      await makeBuyOperation(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the addProductShopCart is funtion', () => {
    beforeEach(() => {
      jwt.verify = jest.fn().mockReturnValue('hola');
    });
    test('res.json to have been called', async () => {
      req.get = jest.fn().mockReturnValue('Bearer Token');
      Cart.findById.mockReturnValue({
        save: jest.fn(),
        products: [{
          product: {
            shoes: { _id: '123' },
          },
        }],
      });
      Product.findById.mockReturnValue({ save: jest.fn(), _id: '123' });

      await addProductShopCart(req, res);

      expect(res.json).toHaveBeenCalled();
    });
    test(' res.status to have been called', async () => {
      req.get = jest.fn().mockRejectedValue();
      await addProductShopCart(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
    });
  });
  describe('When the deleteOneProductById is funcion', () => {
    beforeEach(() => {
      jwt.verify = jest.fn().mockReturnValue('hola');
    });
    test('authorization is function', async () => {
      req.get = jest.fn().mockReturnValue('Bearer Token');
      Cart.findById.mockReturnValue({
        save: jest.fn(),
        products: [{
          amount: 1,
          product: '123',
        },
        {
          amount: 2,
          product: '123',
        }],
      });
      Product.findById.mockReturnValue({ save: jest.fn(), _id: '123' });
      await deleteOneProductById(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('When the getCart is called', () => {
    test('The cart.findById and res.json should be called', async () => {
      Cart.find.mockReturnValue({
        populate: jest.fn(),
      });
      await deleteOneProductById(req, res);

      expect(Cart.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When the makeBuyOperation is funtion', () => {
    beforeEach(() => {
      jwt.verify = jest.fn().mockReturnValue('hola');
      Cart.create.mockReturnValue({});
    });
    test('the token is ok', async () => {
      req.get = jest.fn().mockReturnValue('Bearer Token');
      Product.findByIdAndUpdate.mockResolvedValue({});
      await updateOneProductById(req, res);

      expect(res.status).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
    test('the token is not ok ', async () => {
      req.get = jest.fn().mockReturnValue(null);
      await updateOneProductById(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
