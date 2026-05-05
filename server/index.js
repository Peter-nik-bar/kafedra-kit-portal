require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const newsRoutes = require('./routes/news');
const galleryRoutes = require('./routes/gallery');
const contactsRoutes = require('./routes/contacts');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// Базовий маршрут
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Підключення роутів
app.use('/api/news', newsRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/contacts', contactsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});