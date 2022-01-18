const router = require('express').Router();

const {
  getAllUsers,
  addUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/users.controllers');

router.get('/', getAllUsers);
router.post('/', addUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
