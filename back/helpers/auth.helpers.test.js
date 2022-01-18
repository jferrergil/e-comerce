import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { checkPasswd, createJWT } from './auth.helpers';

jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

test('should ... checkPasswd ', async () => {
  const password = '';
  const user = { passwd: '1234' };
  await checkPasswd(password, user);
  expect(bcrypt.compare).toHaveBeenCalled();
});

test('should ... checkPasswd ', async () => {
  const password = '';
  const user = { password: '' };
  const result = await checkPasswd(password, user);
  expect(result).toBe(false);
});

test('should ... createJWT ', () => {
  const user = { name: '', cart: '', id: '' };
  createJWT(user);
  expect(jwt.sign).toHaveBeenCalled();
});
