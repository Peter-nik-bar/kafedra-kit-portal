import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const staffMembers = [
  {
    name: 'Барановський Петро Миколайович',
    name_en: 'Baranovskyi Petro Mykolaiovych',
    role: 'Завідувач кафедри, доктор технічних наук, професор',
    role_en: 'Head of Department, Doctor of Technical Sciences, Professor',
    description: 'Фахівець у галузі інформаційних систем та веб-технологій',
    description_en: 'Specialist in information systems and web technologies',
    email: 'baranovskii@kit.edu.ua',
    phone: '+380 (44) 123-45-67',
    imageUrl: '/staff/6.png',
  },
  {
    name: 'Олексунь Володимир Олексійович',
    name_en: 'Oleksun Volodymyr Oleksiyovych',
    role: 'Доцент, кандидат технічних наук',
    role_en: 'Associate Professor, Candidate of Technical Sciences',
    description: 'Фахівець у галузі інформаційних систем та веб-технологій. Автор понад 100 наукових праць.',
    description_en: 'Specialist in information systems and web technologies. Author of over 100 scientific papers.',
    email: 'oleksun@kit.edu.ua',
    phone: '+380 (44) 123-45-67',
    imageUrl: '/staff/5.png',
  },
  {
    name: 'Слюсар Максим Вікторович',
    name_en: 'Sliusar Maksym Viktorovych',
    role: 'Професор, доктор фізико-математичних наук',
    role_en: 'Professor, Doctor of Physical and Mathematical Sciences',
    description: 'Спеціаліст з машинного навчання та аналізу даних. Керівник лабораторії штучного інтелекту.',
    description_en: 'Specialist in machine learning and data analysis. Head of the Artificial Intelligence lab.',
    email: 'slusar@kit.edu.ua',
    phone: '+380 (44) 123-45-68',
    imageUrl: '/staff/4.png',
  },
  {
    name: 'Коваль Кирило Іванович',
    name_en: 'Koval Kyrylo Ivanovych',
    role: 'Доцент, кандидат технічних наук',
    role_en: 'Associate Professor, Candidate of Technical Sciences',
    description: 'Викладає курси з веб-програмування, JavaScript, React. Ментор студентських проєктів.',
    description_en: 'Teaches web development, JavaScript, React. Mentor of student projects.',
    email: 'koval@kit.edu.ua',
    phone: '+380 (44) 123-45-69',
    imageUrl: '/staff/1.png',
  },
  {
    name: 'Сидоренко Ілля Олександрович',
    name_en: 'Sydorenko Illia Oleksandrovych',
    role: 'Доцент, кандидат технічних наук',
    role_en: 'Associate Professor, Candidate of Technical Sciences',
    description: 'Відповідає за напрям кібербезпеки та DevOps. Сертифікований спеціаліст Cisco.',
    description_en: 'Responsible for cybersecurity and DevOps. Cisco certified specialist.',
    email: 'sidorenko@kit.edu.ua',
    phone: '+380 (44) 123-45-70',
    imageUrl: '/staff/2.png',
  },
  {
    name: 'Бурба Назар Сергійович',
    name_en: 'Burba Nazar Serhiyovych',
    role: 'Старший викладач',
    role_en: 'Senior Lecturer',
    description: 'Веде курси з баз даних та Python. Координатор програм Erasmus+ на кафедрі.',
    description_en: 'Teaches database and Python courses. Erasmus+ program coordinator at the department.',
    email: 'burba@kit.edu.ua',
    phone: '+380 (44) 123-45-71',
    imageUrl: '/staff/3.png',
  },
  {
    name: 'Сніцаренко Андрій Володимирович',
    name_en: 'Snitsarenko Andrii Volodymyrovych',
    role: 'Асистент, аспірант',
    role_en: 'Assistant, PhD student',
    description: 'Досліджує хмарні технології та контейнеризацію. Проводить практичні заняття з DevOps.',
    description_en: 'Researches cloud technologies and containerization. Conducts practical classes on DevOps.',
    email: 'snizarenko@kit.edu.ua',
    phone: '+380 (44) 123-45-72',
    imageUrl: '/staff/7.png',
  },
];

const Staff = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const localizedName = (member) => (lang === 'en' ? member.name_en : member.name);
  const localizedRole = (member) => (lang === 'en' ? member.role_en : member.role);
  const localizedDesc = (member) => (lang === 'en' ? member.description_en : member.description);

  return (
    <div className="container my-5">
      <h1 className="fw-bold text-center mb-5">{t('staff.title')}</h1>

      <div className="row g-4">
        {staffMembers.map((member, idx) => (
          <div className="col-md-6 col-lg-4" key={idx}>
            <div
              className="card shadow-sm h-100 p-4"
              style={{
                background: '#1e2532',
                border: '1px solid #334155',
                transition: '0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#475569';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#334155';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
              }}
            >
              <div className="text-center mb-3">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={localizedName(member)}
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #475569',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'inline-flex';
                    }}
                  />
                ) : null}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#334155',
                    display: member.imageUrl ? 'none' : 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    color: '#cbd5e1',
                    border: '2px solid #475569',
                  }}
                >
                  {member.name.split(' ').map((n, i) => (i === 0 || i === 2 ? n[0] : '')).join('')}
                </div>
              </div>
              <h5 className="fw-bold" style={{ color: '#f1f5f9' }}>{localizedName(member)}</h5>
              <p className="mb-2" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{localizedRole(member)}</p>
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{localizedDesc(member)}</p>
              <hr style={{ borderColor: '#334155' }} />
              <p className="mb-1" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                <span style={{ color: '#cbd5e1' }}>✉️</span> {member.email}
              </p>
              <p className="mb-0" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                <span style={{ color: '#cbd5e1' }}>📞</span> {member.phone}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/about" className="btn btn-dark-custom px-4 py-2">
 		 {t('staff.backToAbout')}
	</Link>
      </div>
    </div>
  );
};

export default Staff;