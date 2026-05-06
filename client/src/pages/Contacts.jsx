import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import API from '../api';

const Contacts = () => {
  const { t } = useTranslation();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    API.get('/api/contacts')
      .then(res => setContact(res.data[0]))
      .catch(err => console.error(err));
  }, []);

  if (!contact) return (
    <div className="container my-5 text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Завантаження...</span>
      </div>
    </div>
  );

  return (
    <div className="container my-5">
      <h1 className="fw-bold mb-4 text-center">{t('contacts.title')}</h1>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100" style={{ background: '#1e2532', border: '1px solid #334155' }}>
            <div className="card-body text-center">
              <div className="mb-3" style={{ fontSize: '2.5rem' }}>📍</div>
              <h5 className="card-title fw-bold" style={{ color: '#f1f5f9' }}>{t('contacts.addressLabel')}</h5>
              <p className="card-text" style={{ color: '#cbd5e1' }}>{contact.address}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100" style={{ background: '#1e2532', border: '1px solid #334155' }}>
            <div className="card-body text-center">
              <div className="mb-3" style={{ fontSize: '2.5rem' }}>📞</div>
              <h5 className="card-title fw-bold" style={{ color: '#f1f5f9' }}>{t('contacts.phoneLabel')}</h5>
              <p className="card-text" style={{ color: '#cbd5e1' }}>{contact.phone}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100" style={{ background: '#1e2532', border: '1px solid #334155' }}>
            <div className="card-body text-center">
              <div className="mb-3" style={{ fontSize: '2.5rem' }}>✉️</div>
              <h5 className="card-title fw-bold" style={{ color: '#f1f5f9' }}>{t('contacts.emailLabel')}</h5>
              <p className="card-text" style={{ color: '#cbd5e1' }}>{contact.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm overflow-hidden" style={{ background: '#1e2532', border: '1px solid #334155', borderRadius: '20px' }}>
        <div className="ratio ratio-16x9">
          <iframe
            src={contact.mapEmbedUrl}
            title="Google Map"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;