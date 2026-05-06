import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import API from '../api';

const News = () => {
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.get(`/api/news?lang=${i18n.language}`)
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, [i18n.language]);

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">{t('news.title')}</h2>
      <div className="list-group">
        {news.map(item => (
          <Link to={`/news/${item._id}`} key={item._id} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.title}</h5>
              <small>{new Date(item.date).toLocaleDateString(i18n.language === 'uk' ? 'uk-UA' : 'en-US')}</small>
            </div>
            <p className="mb-1">{item.text.substring(0, 150)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;