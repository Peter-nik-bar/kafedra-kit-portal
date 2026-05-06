import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import API from '../api';

const translations = {
  'Лабораторія кафедри': {
    uk: { title: 'Лабораторія кафедри', desc: 'Сучасна комп\'ютерна лабораторія' },
    en: { title: 'Department Laboratory', desc: 'Modern computer laboratory' }
  },
  'Студенти на парі': {
    uk: { title: 'Студенти на парі', desc: 'Заняття з веб-програмування' },
    en: { title: 'Students in Class', desc: 'Web programming class' }
  },
  'Конференц-зала': {
    uk: { title: 'Конференц-зала', desc: 'Захист курсових робіт' },
    en: { title: 'Conference Hall', desc: 'Coursework defense' }
  },
  'Команда переможців': {
    uk: { title: 'Команда переможців', desc: 'Наші чемпіони з DevChallenge' },
    en: { title: 'Winning Team', desc: 'Our DevChallenge champions' }
  },
  'Нова лабораторія ШІ': {
    uk: { title: 'Нова лабораторія ШІ', desc: 'Відкриття лабораторії штучного інтелекту' },
    en: { title: 'New AI Lab', desc: 'Opening of the artificial intelligence lab' }
  },
  'Бібліотека': {
    uk: { title: 'Бібліотека', desc: 'Робочий простір для студентів' },
    en: { title: 'Library', desc: 'Student workspace' }
  }
};

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const [images, setImages] = useState([]);

  useEffect(() => {
    API.get('/api/gallery')
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);

  const getLocalized = (item) => {
    const lang = i18n.language;
    const entry = translations[item.title];
    if (entry && entry[lang]) {
      return {
        title: entry[lang].title,
        description: entry[lang].desc
      };
    }
    return {
      title: item.title,
      description: item.description
    };
  };

  return (
    <div className="container my-4">
      <h2 className="fw-bold mb-4">{t('gallery.title')}</h2>
      <div className="row">
        {images.map(img => {
          const localized = getLocalized(img);
          return (
            <div className="col-md-6 col-lg-4 mb-4" key={img._id}>
              <div className="gallery-card">
                <img src={img.imageUrl} alt={localized.title} className="w-100" />
                <div className="p-3">
                  <h5>{localized.title}</h5>
                  <p className="mb-0">{localized.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;