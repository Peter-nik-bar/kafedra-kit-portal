import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'uk' ? 'en' : 'uk';
    i18n.changeLanguage(newLang);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          {t('departmentName')}
        </Link>
        <button 
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={closeMenu}>{t('header.home')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeMenu}>{t('header.about')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/staff" onClick={closeMenu}>{t('header.staff')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admissions" onClick={closeMenu}>{t('header.admissions')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/gallery" onClick={closeMenu}>{t('header.gallery')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/news" onClick={closeMenu}>{t('header.news')}</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contacts" onClick={closeMenu}>{t('header.contacts')}</Link></li>
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