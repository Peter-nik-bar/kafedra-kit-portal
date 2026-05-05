import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => (
  <div className="card h-100">
    <img src={news.imageUrl} className="card-img-top" alt={news.title} style={{ height: '200px', objectFit: 'cover' }} />
    <div className="card-body">
      <h5 className="card-title">{news.title}</h5>
      <p className="card-text">{news.text.substring(0, 100)}...</p>
    </div>
    <div className="card-footer bg-white">
      <small className="text-muted">{new Date(news.date).toLocaleDateString('uk-UA')}</small>
      <Link to={`/news/${news._id}`} className="btn btn-sm btn-outline-primary float-end">Читати</Link>
    </div>
  </div>
);

export default NewsCard;