import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">{t('about.title')}</h1>
        <p className="lead" style={{ color: '#cbd5e1' }}>{t('about.subtitle')}</p>
        <hr className="w-25 mx-auto" style={{ borderColor: '#334155' }} />
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="p-4 rounded-3 shadow-sm h-100"
            style={{ background: '#1e2532', border: '1px solid #334155', transition: '0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#475569'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#334155'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <h3 className="h5 fw-bold mb-3" style={{ color: '#f1f5f9' }}>🎯 {t('about.missionTitle')}</h3>
            <p style={{ color: '#cbd5e1' }}>{t('about.missionText')}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded-3 shadow-sm h-100"
            style={{ background: '#1e2532', border: '1px solid #334155', transition: '0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#475569'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#334155'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <h3 className="h5 fw-bold mb-3" style={{ color: '#f1f5f9' }}>💡 {t('about.subjectsTitle')}</h3>
            <ul className="list-unstyled" style={{ color: '#cbd5e1' }}>
              {t('about.subjectsList', { returnObjects: true }).map((item, i) => (
                <li key={i}>✔️ {item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 rounded-3 shadow-sm h-100"
            style={{ background: '#1e2532', border: '1px solid #334155', transition: '0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#475569'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#334155'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <h3 className="h5 fw-bold mb-3" style={{ color: '#f1f5f9' }}>🏆 {t('about.achievementsTitle')}</h3>
            <p style={{ color: '#cbd5e1' }}>{t('about.achievementsText')}</p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <div className="p-4 rounded-3 hover-effect" style={{ background: '#1e2532', color: '#cbd5e1' }}>
 		 <h3 className="fw-bold mb-3" style={{ color: '#f1f5f9' }}>{t('about.whyUsTitle')}</h3>
 		 <p>{t('about.whyUsText1')}</p>
 		 <p className="mb-0">{t('about.whyUsText2')}</p>
	  </div>
        </div>
      </div>

      <div className="text-center">
        <p className="fw-bold mb-1" style={{ color: '#f1f5f9' }}>{t('about.moreInfo')}</p>
        <p style={{ color: '#cbd5e1' }}>
          <Trans
            i18nKey="about.moreInfoText"
            components={{
              contacts: <Link to="/contacts" className="link-info" />,
              staff: <Link to="/staff" className="link-info" />,
              news: <Link to="/news" className="link-info" />,
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default About;