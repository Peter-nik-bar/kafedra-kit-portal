import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import API from '../api';
import Slider from '../components/Slider';
import NewsCard from '../components/NewsCard';
import AdmissionBlock from '../components/AdmissionBlock';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [mainNews, setMainNews] = useState([]);

  useEffect(() => {
    API.get(`/api/news?main=true&limit=10&lang=${i18n.language}`)
      .then(res => setMainNews(res.data))
      .catch(err => console.error(err));
  }, [i18n.language]);

  return (
    <>
      <Slider />
      <div className="container mt-5">
        <h2 className="fw-bold mb-4">{t('home.mainNews')}</h2>
        <div className="row">
          {mainNews.map(item => (
            <NewsCard key={item._id} news={item} />
          ))}
        </div>
      </div>
      <AdmissionBlock />
    </>
  );
};

export default Home;