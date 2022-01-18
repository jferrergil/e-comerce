const Cart = require('../models/cart.model');
const User = require('../models/user.model');

const {
  getAllUsers, deleteUser, addUser, updateUser, getUserById,
} = require('./users.controllers');

jest.mock('../models/user.model.js');
jest.mock('../models/cart.model.js');

describe('Given the user controller', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { params: { } };
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });
  describe('When the getAllUser is called', () => {
    test('the user.res', async () => {
      User.find.mockReturnValue([]);

      await getAllUsers(req, res, next);

      expect(User.find).toHaveBeenCalled();
      expect(res.send).toHaveBeenCalled();
    });
    test('the user.res', async () => {
      User.find.mockRejectedValue();

      await getAllUsers(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe('When the deleteUser is called', () => {
    test('the deleteUser function', async () => {
      User.findByIdAndDelete.mockResolvedValue({});
      Cart.deleteMany.mockResolvedValue({});

      await deleteUser(req, res, next);

      expect(User.findByIdAndDelete).toHaveBeenCalled();
      expect(Cart.deleteMany).toHaveBeenCalled();

      expect(res.status).toHaveBeenCalledWith(202);
    });
    test('the deleteUser function', async () => {
      User.findByIdAndDelete.mockRejectedValue({});

      await deleteUser(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
  describe('When the addUser is called', () => {
    test('Then user.create and rest.json should be called', async () => {
      req.body = {
        name: 'test',
        passwd: 'test',
      };
      User.create.mockResolvedValue({
        save: jest.fn(),
      });
      Cart.create.mockResolvedValue({
        save: jest.fn(),
      });
      await addUser(req, res, next);

      expect(User.create).toHaveBeenCalled();
      expect(Cart.create).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });
    test('Then next should be called', async () => {
      req.body = {

      };
      User.create.mockResolvedValue({
        save: jest.fn(),
      });
      Cart.create.mockResolvedValue({
        save: jest.fn(),
      });
      await addUser(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
  describe('When the addUser is called', () => {
    beforeEach(() => {
      req = { params: { id: '123' } };
    });
    test('Then user.create and rest.json should be called', async () => {
      User.findByIdAndUpdate.mockResolvedValue({});

      await updateUser(req, res, next);

      expect(User.findByIdAndUpdate).toHaveBeenCalled();
    });
  });
  describe('When the addUser is called', () => {
    test('Then user.create and next should be called', async () => {
      User.findByIdAndUpdate.mockRejectedValue();

      await updateUser(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });
  describe('When the addUser is called', () => {
    beforeEach(() => {
      req = { params: { id: '123' } };
    });
    test('Then user.create and rest.json should be called', async () => {
      User.findByIdAndUpdate.mockResolvedValue({});

      await updateUser(req, res, next);

      expect(User.findByIdAndUpdate).toHaveBeenCalled();
    });
  });
  describe('When the getUserById is called', () => {
    beforeEach(() => {
      req = { params: { id: '123' } };
    });
    test('Then  rest.json should be called', async () => {
      User.findById.mockResolvedValue();
      await getUserById(req, res, next);
      expect(User.findById).toHaveBeenCalled();
    });
  });
  describe('When the getUserById is called', () => {
    beforeEach(() => {
      req = { params: { } };
    });
    test('Then  rest.json should be called', async () => {
      User.findById.mockRejectedValue();
      await getUserById(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
  describe('When the getUserById is called', () => {
    beforeEach(() => {
      req = { params: { id: '123' } };
    });
    test('Then  next should be called', async () => {
      User.findById.mockRejectedValue({});
      await getUserById(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
});
describe('Given the user controller', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = {};
    res = {};
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    next = jest.fn();
  });

  describe('When the getUserById is called', () => {
    beforeEach(() => {
      req = { params: { id: '123' } };
    });
    test('Then  next should be called', async () => {
      User.findById.mockRejectedValue();
      await getUserById(req, res, next);
      expect(next).toHaveBeenCalled();
    });
  });
});
