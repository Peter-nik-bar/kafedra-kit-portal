import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    API.get('/api/news')
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-4">
      <h2>Усі новини</h2>
      <div className="list-group">
        {news.map(item => (
          <Link to={`/news/${item._id}`} key={item._id} className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{item.title}</h5>
              <small>{new Date(item.date).toLocaleDateString('uk-UA')}</small>
            </div>
            <p className="mb-1">{item.text.substring(0, 150)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;