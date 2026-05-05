const router = require('express').Router();
const Gallery = require('../models/Gallery');

router.get('/', async (req, res) => {
  try {
    const items = await Gallery.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;