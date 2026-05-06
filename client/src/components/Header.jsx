import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'uk' ? 'en' : 'uk';
    i18n.changeLanguage(newLang);
  };

  console.log('DEBUG departmentName:', t('departmentName'));

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.svg" alt="logo" width="36" height="36" />
          {t('departmentName')}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">{t('header.home')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">{t('header.about')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/staff">{t('header.staff')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admissions">{t('header.admissions')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/gallery">{t('header.gallery')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/news">{t('header.news')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacts">{t('header.contacts')}</Link></li>
          </ul>
          <button
            onClick={toggleLanguage}
            className="btn btn-outline-light ms-3"
            style={{ borderRadius: '20px', fontWeight: 600 }}
          >
            {i18n.language === 'uk' ? 'EN' : 'UA'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;