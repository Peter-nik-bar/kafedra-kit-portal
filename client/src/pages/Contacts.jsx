import { useState, useEffect } from 'react';
import API from '../api';

const Contacts = () => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    API.get('/api/contacts')
      .then(res => setContact(res.data[0])) // беремо перший документ
      .catch(err => console.error(err));
  }, []);

  if (!contact) return <div className="container my-4">Завантаження...</div>;

  return (
    <div className="container my-4">
      <h2>Контакти</h2>
      <div className="row">
        <div className="col-md-6">
          <p><strong>Адреса:</strong> {contact.address}</p>
          <p><strong>Телефон:</strong> {contact.phone}</p>
          <p><strong>Email:</strong> {contact.email}</p>
        </div>
        <div className="col-md-6">
          <div className="ratio ratio-16x9">
            <iframe
              src={contact.mapEmbedUrl}
              title="Google Map"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;