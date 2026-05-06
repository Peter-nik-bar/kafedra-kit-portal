import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsCard = ({ news }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 d-flex flex-column">
        <img src={news.imageUrl} className="card-img-top" alt={news.title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body flex-grow-1">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.text.substring(0, 120)}...</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small style={{ color: '#cbd5e1' }}>
            {new Date(news.date).toLocaleDateString(lang === 'uk' ? 'uk-UA' : 'en-US')}
          </small>
          <Link to={`/news/${news._id}`} className="btn btn-outline-primary btn-sm">
            {t('news.readMore')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;