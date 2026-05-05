import { useState, useEffect } from 'react';
import API from '../api';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    API.get('/api/gallery')
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-4">
      <h2>Галерея</h2>
      <div className="row">
        {images.map(img => (
          <div className="col-md-4 mb-4" key={img._id}>
            <div className="card">
              <img src={img.imageUrl} className="card-img-top" alt={img.title} />
              <div className="card-body">
                <h5 className="card-title">{img.title}</h5>
                <p className="card-text">{img.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;