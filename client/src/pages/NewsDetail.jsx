import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import API from '../api';

const NewsDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    API.get(`/api/news/${id}?lang=${i18n.language}`)
      .then(res => {
        setNews(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Не вдалося завантажити новину');
        setLoading(false);
      });
  }, [id, i18n.language]);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Завантаження...</span>
        </div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="container my-5 text-center">
        <h3 className="text-danger">{error || 'Новину не знайдено'}</h3>
        <Link to="/news" className="btn btn-outline-primary mt-3">{t('news.back')}</Link>
      </div>
    );
  }

  const lang = i18n.language;

  return (
    <div className="container my-5">
      <Link to="/news" className="btn btn-outline-secondary mb-3">{t('news.back')}</Link>

      <div className="card shadow-sm border-0">
        <img
          src={news.imageUrl}
          className="card-img-top"
          alt={news.title}
          style={{ maxHeight: '450px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h1 className="card-title fw-bold">{news.title}</h1>
          {/* Вот здесь дата с явным цветом */}
          <p className="mb-4" style={{ color: '#cbd5e1' }}>
            {new Date(news.date).toLocaleDateString(lang === 'uk' ? 'uk-UA' : 'en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <div className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            {news.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;