const express = require('express');
const router = express.Router();

let users = []; // In-memory "database"
let userId = 1;

// CREATE - POST /api/users
router.post('/', (req, res) => {
  const user = { id: userId++, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

// READ ALL - GET /api/users
router.get('/', (req, res) => {
  res.json(users);
});

// READ ONE - GET /api/users/:id
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// UPDATE - PUT /api/users/:id
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  Object.assign(user, req.body);
  res.json(user);
});

// DELETE - DELETE /api/users/:id
router.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  users.splice(index, 1);
  res.json({ message: 'User deleted' });
});

module.exports = router;
