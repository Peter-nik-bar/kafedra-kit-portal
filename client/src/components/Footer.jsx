import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-center">
      <div className="container">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;