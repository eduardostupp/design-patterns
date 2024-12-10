const express = require('express');
const router = express.Router();
const UserRegistry = require('../models/UserRegistry');

const userRegistry = new UserRegistry();

router.get('/', (req, res) => {
    res.json(userRegistry.getUsers());
});

router.post('/', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Nome e e-mail são obrigatórios' });
    }
    userRegistry.addUser({ name, email });
    res.json({ success: true, users: userRegistry.getUsers() });
});

module.exports = router;
