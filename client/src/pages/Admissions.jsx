import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Admissions = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-5" style={{ color: '#f1f5f9' }}>
      <h1 className="fw-bold text-center mb-5">{t('admissions.title')}</h1>

      <div className="row g-4 mb-5">
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm h-100 text-center p-4"
            style={{ background: '#1e2532', border: '1px solid #334155', transition: '0.3s' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#475569';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#334155';
              e.currentTarget.style.transform = 'none';
            }}>
            <div className="mb-3" style={{ fontSize: '2.8rem' }}>💻</div>
            <h5 className="fw-bold">{t('admissions.modernEducation')}</h5>
            <p style={{ color: '#cbd5e1' }}>{t('admissions.modernEducationDesc')}</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm h-100 text-center p-4"
            style={{ background: '#1e2532', border: '1px solid #334155', transition: '0.3s' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#475569';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#334155';
              e.currentTarget.style.transform = 'none';
            }}>
            <div className="mb-3" style={{ fontSize: '2.8rem' }}>🤝</div>
            <h5 className="fw-bold">{t('admissions.practice')}</h5>
            <p style={{ color: '#cbd5e1' }}>{t('admissions.practiceDesc')}</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm h-100 text-center p-4"
            style={{ background: '#1e2532', border: '1px solid #334155', transition: '0.3s' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#475569';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#334155';
              e.currentTarget.style.transform = 'none';
            }}>
            <div className="mb-3" style={{ fontSize: '2.8rem' }}>🏫</div>
            <h5 className="fw-bold">{t('admissions.dormitory')}</h5>
            <p style={{ color: '#cbd5e1' }}>{t('admissions.dormitoryDesc')}</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card shadow-sm h-100 text-center p-4"
            style={{ background: '#1e2532', border: '1px solid #334155', transition: '0.3s' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#475569';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#334155';
              e.currentTarget.style.transform = 'none';
            }}>
            <div className="mb-3" style={{ fontSize: '2.8rem' }}>🌍</div>
            <h5 className="fw-bold">{t('admissions.international')}</h5>
            <p style={{ color: '#cbd5e1' }}>{t('admissions.internationalDesc')}</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mb-5" style={{ background: '#1e2532', border: '1px solid #334155', borderRadius: '20px', color: '#f1f5f9' }}>
        <div className="card-body p-4 p-lg-5">
          <h3 className="fw-bold mb-4">{t('admissions.conditions')}</h3>
          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-3"><span style={{ color: '#64748b' }}>✔</span> {t('admissions.budget')} <strong>50</strong></li>
                <li className="mb-3"><span style={{ color: '#64748b' }}>✔</span> {t('admissions.contract')} <strong>25</strong></li>
                <li className="mb-3"><span style={{ color: '#64748b' }}>✔</span> {t('admissions.specialty')}</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-3"><span style={{ color: '#64748b' }}>✔</span> {t('admissions.subjects')}</li>
                <li className="mb-3"><span style={{ color: '#64748b' }}>✔</span> {t('admissions.documents')}</li>
                <li className="mb-3"><span style={{ color: '#64748b' }}>✔</span> {t('admissions.courses')}</li>
              </ul>
            </div>
          </div>
          <Link to="/contacts" className="btn btn-dark-custom px-4 py-2 mt-3">
 		 {t('admissions.contactButton')}
	  </Link>
        </div>
      </div>

      <div className="card shadow-sm mb-5" style={{ background: '#1e2532', border: '1px solid #475569', borderRadius: '20px', color: '#f1f5f9' }}>
        <div className="card-body p-4 p-lg-5">
          <h3 className="fw-bold mb-4">{t('admissions.faq')}</h3>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item" style={{ background: '#1e2532', border: '1px solid #475569', borderRadius: '12px', marginBottom: '0.5rem' }}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1"
                  style={{ background: '#1e2532', color: '#f1f5f9', fontWeight: 600, boxShadow: 'none', border: 'none' }}>
                  {t('admissions.faq1q')}
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body" style={{ background: '#151a23', color: '#cbd5e1', borderTop: '1px solid #475569' }}>
                  {t('admissions.faq1a')}
                </div>
              </div>
            </div>
            <div className="accordion-item" style={{ background: '#1e2532', border: '1px solid #475569', borderRadius: '12px', marginBottom: '0.5rem' }}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2"
                  style={{ background: '#1e2532', color: '#f1f5f9', fontWeight: 600, boxShadow: 'none', border: 'none' }}>
                  {t('admissions.faq2q')}
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body" style={{ background: '#151a23', color: '#cbd5e1', borderTop: '1px solid #475569' }}>
                  {t('admissions.faq2a')}
                </div>
              </div>
            </div>
            <div className="accordion-item" style={{ background: '#1e2532', border: '1px solid #475569', borderRadius: '12px' }}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3"
                  style={{ background: '#1e2532', color: '#f1f5f9', fontWeight: 600, boxShadow: 'none', border: 'none' }}>
                  {t('admissions.faq3q')}
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body" style={{ background: '#151a23', color: '#cbd5e1', borderTop: '1px solid #475569' }}>
                  {t('admissions.faq3a')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;