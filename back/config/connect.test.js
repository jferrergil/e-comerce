import { mongoConnect } from './connect';

const dotenv = require('dotenv');

dotenv.config();

describe('Given connection with MongoDB', () => {
  const dataBase = process.env.DB_NAME;
  test('Then should exist our deb', async () => {
    const connect = await mongoConnect();
    expect(connect).toBeTruthy();

    expect(connect.connections[0].name).toBe(dataBase);
  });
});
