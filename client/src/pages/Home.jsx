import { useState, useEffect } from 'react';
import API from '../api';
import Slider from '../components/Slider';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const [mainNews, setMainNews] = useState([]);

  useEffect(() => {
    API.get('/api/news?main=true&limit=10')
      .then(res => setMainNews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Slider />
      <div className="container my-4">
        <h2 className="mb-4">Головні новини кафедри</h2>
        <div className="row">
          {mainNews.map(item => (
            <div className="col-md-6 col-lg-4 mb-4" key={item._id}>
              <NewsCard news={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;