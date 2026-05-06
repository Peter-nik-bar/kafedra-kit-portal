import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const AdmissionBlock = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-5">
      <div className="p-5 rounded-4 shadow" style={{ background: '#212636', color: '#e2e8f0' }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h2 className="fw-bold mb-3">{t('admissionBlock.title')}</h2>
            <p className="lead mb-4" style={{ color: '#b0bec5' }}>
              {t('admissionBlock.description')}
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2"><span style={{ color: '#5a6c82' }}>✓</span> {t('admissionBlock.item1')}</li>
              <li className="mb-2"><span style={{ color: '#5a6c82' }}>✓</span> {t('admissionBlock.item2')}</li>
              <li className="mb-2"><span style={{ color: '#5a6c82' }}>✓</span> {t('admissionBlock.item3')}</li>
              <li className="mb-2"><span style={{ color: '#5a6c82' }}>✓</span> {t('admissionBlock.item4')}</li>
            </ul>
            <Link to="/admissions" className="btn btn-dark-custom px-4 py-2">
              {t('admissionBlock.button')}
            </Link>
          </div>
          <div className="col-lg-5 text-center mt-4 mt-lg-0">
            <div style={{ fontSize: '6rem' }}>🎓</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionBlock;