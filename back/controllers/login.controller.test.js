const controller = require('./login.controller');
const auth = require('../helpers/auth.helpers');
const User = require('../models/user.model');

jest.mock('../models/user.model.js');
jest.mock('../helpers/auth.helpers');

describe('Given the Login controller', () => {
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

  describe('When a user try to log (logUser is triggered)', () => {
    describe('And user and password are valid (promise is resolved)', () => {
      beforeEach(() => {
        User.findOne.mockResolvedValue({});
        auth.checkPasswd = jest.fn().mockResolvedValue(true);
        auth.createJWT = jest.fn().mockImplementation(() => 'token');
        req.body = {};
      });

      test('Then user model exists and have a method "findOne"', () => {
        expect(User.findOne).toBeTruthy();
      });

      test('Then user should be logged', async () => {
        await controller.logUser(req, res, next);
        expect(res.json).toHaveBeenCalled();
        expect(next).not.toHaveBeenCalled();
        expect(res.status).not.toHaveBeenCalled();
      });
    });
    describe('When a user can not be found', () => {
      beforeEach(() => {
        User.findOne.mockResolvedValue({});
        auth.checkPasswd = jest.fn().mockResolvedValue(true);
        auth.createJWT = jest.fn().mockImplementation(() => 'token');
        req.body = {};
      });
      test('res.status to be 500', async () => {
        User.findOne.mockRejectedValue();
        await controller.logUser(req, res, next);
        expect(res.status).toHaveBeenCalledWith(500);
      });
    });
  });
  describe('And user and password are not valid', () => {
    beforeEach(() => {
      User.findOne.mockResolvedValue({});
      auth.checkPasswd = jest.fn().mockResolvedValue(false);
      req.body = {};
    });

    test('Then user should not be logged', async () => {
      await controller.logUser(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(next).not.toHaveBeenCalled();
      expect(res.status).toHaveBeenCalled();
    });
  });
  describe('And user is not valid', () => {
    beforeEach(() => {
      User.findOne.mockResolvedValue({});
      auth.checkPasswd = jest.fn().mockResolvedValue(false);
      req.body = {};
    });
    test('Then user should not be logged', async () => {
      await controller.logUser(req, res, next);
      expect(res.json).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalled();
    });
  });
});
