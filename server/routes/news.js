const router = require('express').Router();
const News = require('../models/News');

// GET /api/news?main=true&limit=10&lang=en
router.get('/', async (req, res) => {
  try {
    const { main, limit, lang } = req.query;
    let filter = {};
    if (main === 'true') filter.isMainNews = true;

    const news = await News.find(filter)
      .sort({ date: -1 })
      .limit(Number(limit) || 20)
      .lean();

    // заміна полів на англійську версію, якщо lang=en
    if (lang === 'en') {
      for (let item of news) {
        if (item.title_en) item.title = item.title_en;
        if (item.text_en) item.text = item.text_en;
      }
    }

    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/news/:id?lang=en
router.get('/:id', async (req, res) => {
  try {
    const { lang } = req.query;
    let news = await News.findById(req.params.id).lean();
    if (!news) return res.status(404).json({ message: 'Новину не знайдено' });

    if (lang === 'en') {
      if (news.title_en) news.title = news.title_en;
      if (news.text_en) news.text = news.text_en;
    }

    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;