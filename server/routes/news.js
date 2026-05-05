const router = require('express').Router();
const News = require('../models/News');

// Отримати всі новини (з фільтром для головної)
router.get('/', async (req, res) => {
  try {
    const { main, limit } = req.query;
    let filter = {};
    if (main === 'true') filter.isMainNews = true;
    const news = await News.find(filter)
      .sort({ date: -1 })
      .limit(Number(limit) || 20);
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Отримати одну новину за ID
router.get('/:id', async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ message: 'Новину не знайдено' });
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;