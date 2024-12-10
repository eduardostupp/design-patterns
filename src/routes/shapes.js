const express = require('express');
const router = express.Router();
const ShapeFactory = require('../models/ShapeFactory');

router.post('/', (req, res) => {
    const { type, params } = req.body;
    try {
        const shape = ShapeFactory.createShape(type, ...params);
        res.json({ success: true, area: shape.getArea() });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
