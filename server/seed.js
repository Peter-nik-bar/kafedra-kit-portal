require('dotenv').config();
const mongoose = require('mongoose');
const News = require('./models/News');
const Gallery = require('./models/Gallery');
const Contact = require('./models/Contact');

const MONGO_URI = process.env.MONGO_URI;

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');

    await News.deleteMany({});
    await Gallery.deleteMany({});
    await Contact.deleteMany({});
    console.log('🗑️ Old data removed');

    const news = [
      {
        title: 'Захист дипломних робіт на кафедрі КІТ',
        title_en: 'Diploma Defense at the CIT Department',
        text: 'Студенти групи 401-ТН успішно захистили дипломні проєкти перед державною комісією. Усі роботи були виконані на актуальні теми: від розробки веб-порталів до систем машинного навчання. Комісія відзначила високий рівень теоретичної підготовки та практичної реалізації. Кращі проєкти рекомендовані до впровадження у навчальний процес. Випускники отримали пропозиції стажування від ІТ-компаній-партнерів.',
        text_en: 'Students of group 401-TN successfully defended their diploma projects before the state commission. All works focused on relevant topics: from web portals to machine learning systems. The commission noted the high level of theoretical preparation and practical implementation. The best projects were recommended for implementation in the educational process. Graduates received internship offers from partner IT companies.',
        imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600',
        isMainNews: true
      },
      {
        title: 'День відкритих дверей онлайн',
        title_en: 'Online Open Day',
        text: '20 травня відбудеться онлайн-презентація кафедри компʼютерних інформаційних технологій для абітурієнтів. У програмі: знайомство з викладачами, огляд лабораторій, демонстрація студентських проєктів. Учасники зможуть поставити запитання в прямому ефірі. Для отримання посилання потрібно зареєструватися на сайті університету. Чекаємо на всіх, хто мріє стати ІТ-фахівцем!',
        text_en: 'On May 20, an online presentation of the Department of Computer Information Technologies for prospective students will take place. The program includes: meeting the faculty, lab tours, and demonstration of student projects. Participants will be able to ask questions live. Registration is required to receive the link. We welcome everyone who dreams of becoming an IT specialist!',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600',
        isMainNews: true
      },
      {
        title: 'Перемога в хакатоні “DevChallenge”',
        title_en: 'Victory in the DevChallenge Hackathon',
        text: 'Команда студентів кафедри КІТ виборола перше місце у всеукраїнському хакатоні “DevChallenge”. За 48 годин вони створили веб-застосунок для моніторингу якості повітря. Журі відзначило інноваційний підхід та зручний інтерфейс. Переможці отримали грошовий приз та запрошення на стажування у провідних ІТ-компаніях. Пишаємось нашими студентами!',
        text_en: 'A team of CIT students won first place in the nationwide hackathon "DevChallenge". In 48 hours, they created a web application for air quality monitoring. The jury noted the innovative approach and user-friendly interface. The winners received a cash prize and internship invitations from leading IT companies. We are proud of our students!',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600',
        isMainNews: true
      },
      {
        title: 'Нова лабораторія штучного інтелекту',
        title_en: 'New Artificial Intelligence Lab',
        text: 'На кафедрі відкрито сучасну лабораторію штучного інтелекту та машинного навчання. Вона оснащена потужними GPU-станціями, що дозволяють виконувати складні обчислення. Лабораторія використовуватиметься для навчання студентів та проведення наукових досліджень. Відкриття супроводжувалось майстер-класом від експертів з Data Science. Запрошуємо всіх охочих приєднатись до проєктів.',
        text_en: 'A modern lab of artificial intelligence and machine learning has been opened at the department. It is equipped with powerful GPU stations that allow complex computations. The lab will be used for student training and scientific research. The opening was accompanied by a workshop from Data Science experts. We invite everyone to join the projects.',
        imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600',
        isMainNews: true
      },
      {
        title: 'Співпраця з IT-компаніями',
        title_en: 'Cooperation with IT Companies',
        text: 'Підписано тристоронні угоди про стажування студентів у компаніях SoftServe, EPAM та GlobalLogic. Програма передбачає оплачуване стажування тривалістю до 6 місяців. Студенти зможуть працювати над реальними проєктами під керівництвом менторів. Найкращі стажери отримають пропозиції постійної роботи. Це ще один крок до інтеграції освіти та бізнесу.',
        text_en: 'Tripartite internship agreements have been signed with SoftServe, EPAM, and GlobalLogic. The program provides paid internships lasting up to 6 months. Students will work on real projects under the guidance of mentors. The best interns will receive permanent job offers. This is another step towards integrating education and business.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
        isMainNews: true
      },
      {
        title: 'Курси підвищення кваліфікації для викладачів',
        title_en: 'Advanced Training for Faculty',
        text: 'Професорсько-викладацький склад кафедри пройшов міжнародне стажування за програмою Erasmus+ у Варшавській політехніці. Викладачі ознайомились з новітніми методиками викладання ІТ-дисциплін. Отримані знання будуть впроваджені у навчальні курси вже з наступного семестру. Це сприятиме підвищенню якості освіти та міжнародній співпраці.',
        text_en: 'The academic staff of the department completed an international internship under the Erasmus+ program at Warsaw Polytechnic. Teachers learned about the latest methods of teaching IT disciplines. The acquired knowledge will be introduced into courses from the next semester. This will enhance education quality and international cooperation.',
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
        isMainNews: true
      },
      {
        title: 'Випуск бакалаврів 2026',
        title_en: 'Bachelor Graduation 2026',
        text: 'Цього року кафедра випускає рекордну кількість бакалаврів — 85 студентів отримають дипломи з відзнакою. Випускники продемонстрували відмінні знання у галузях програмування, баз даних та веб-технологій. Багато з них уже працевлаштовані в ІТ-компаніях. Урочиста церемонія вручення дипломів відбудеться 30 червня. Бажаємо успіхів нашим випускникам!',
        text_en: 'This year the department graduates a record number of bachelors — 85 students will receive honors diplomas. The graduates demonstrated excellent knowledge in programming, databases, and web technologies. Many of them are already employed in IT companies. The diploma ceremony will take place on June 30. We wish our graduates success!',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
        isMainNews: true
      },
      {
        title: 'Вебінар з React для початківців',
        title_en: 'React Webinar for Beginners',
        text: 'Студентське наукове товариство кафедри проводить безкоштовний вебінар «React за 2 години» 25 травня. Учасники познайомляться з основами бібліотеки, створять перший компонент та дізнаються про хуки. Вебінар розрахований на студентів 1–2 курсів, але долучитись можуть усі охочі. Реєстрація обовʼязкова, кількість місць обмежена.',
        text_en: 'The student scientific society of the department is holding a free webinar "React in 2 hours" on May 25. Participants will learn the basics of the library, create their first component, and discover hooks. The webinar is aimed at 1st-2nd year students, but everyone is welcome. Registration is required, places are limited.',
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
        isMainNews: true
      },
      {
        title: 'Оновлення навчальних планів',
        title_en: 'Updated Curriculum',
        text: 'З нового навчального року в навчальні плани вводяться курси з DevOps, Cloud Computing та Cybersecurity. Оновлення враховують сучасні вимоги ІТ-ринку та рекомендації роботодавців. Студенти вивчатимуть хмарні платформи AWS/Azure, інструменти CI/CD та основи кібербезпеки. Також збільшено кількість практичних годин. Кафедра продовжує модернізувати освітній процес.',
        text_en: 'From the new academic year, courses in DevOps, Cloud Computing, and Cybersecurity are being introduced into the curriculum. The updates take into account current IT market demands and employer recommendations. Students will learn AWS/Azure cloud platforms, CI/CD tools, and cybersecurity basics. The number of practical hours has also been increased. The department continues to modernize the educational process.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
        isMainNews: true
      },
      {
        title: 'Студентська конференція «IT-перспективи»',
        title_en: 'Student Conference "IT Perspectives"',
        text: 'Щорічна студентська науково-практична конференція «IT-перспективи» відбудеться 1–2 червня. До участі запрошуються студенти всіх курсів з доповідями або тезами. Тематичні секції охоплюють веб-розробку, штучний інтелект, кібербезпеку та управління проєктами. Кращі роботи будуть опубліковані у збірнику тез. Дедлайн подання матеріалів — 25 травня.',
        text_en: 'The annual student scientific-practical conference "IT Perspectives" will be held on June 1–2. Students of all courses are invited to participate with papers or theses. Thematic sections cover web development, artificial intelligence, cybersecurity, and project management. The best works will be published in a collection of abstracts. Submission deadline: May 25.',
        imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600',
        isMainNews: true
      },
      // звичайні новини
      {
        title: 'Екскурсія в офіс Google Україна',
        title_en: 'Excursion to Google Ukraine Office',
        text: 'Студенти кафедри відвідали київський офіс компанії Google. Вони познайомились з роботою інженерів, побачили сучасні робочі простори та взяли участь у Q&A-сесії. Екскурсія була організована за сприяння випускників, які працюють у компанії. Враження незабутні, багато студентів зацікавились можливістю стажування.',
        text_en: 'Students of the department visited the Kyiv office of Google. They got acquainted with the work of engineers, saw modern workspaces, and participated in a Q&A session. The excursion was organized with the help of alumni working at the company. The impressions were unforgettable, and many students became interested in internship opportunities.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
        isMainNews: false
      },
      {
        title: 'Олімпіада з програмування',
        title_en: 'Programming Olympiad',
        text: 'Відбувся перший етап університетської олімпіади з програмування. 12 студентів кафедри КІТ вийшли до фіналу, показавши високі результати у розвʼязанні алгоритмічних задач. Фінал відбудеться наступного тижня. Переможці представлятимуть університет на всеукраїнському етапі. Бажаємо успіхів нашим фіналістам!',
        text_en: 'The first stage of the university programming olympiad took place. 12 students of the CIT department advanced to the final, showing high results in solving algorithmic problems. The final will be held next week. The winners will represent the university at the national stage. Good luck to our finalists!',
        imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910auj8?w=600',
        isMainNews: false
      },
      {
        title: 'Майстер-клас з кібербезпеки',
        title_en: 'Cybersecurity Workshop',
        text: 'Запрошений експерт з кібербезпеки провів практичний майстер-клас для студентів кафедри. Учасники дізнались про актуальні загрози, методи захисту веб-додатків та спробували себе в ролі етичних хакерів. Майстер-клас відбувся в новій лабораторії з використанням віртуальних стендів. Подібні заходи планується проводити регулярно.',
        text_en: 'An invited cybersecurity expert conducted a practical workshop for students of the department. Participants learned about current threats, methods of protecting web applications, and tried themselves as ethical hackers. The workshop took place in the new lab using virtual stands. Similar events are planned to be held regularly.',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600',
        isMainNews: false
      },
      {
        title: 'Новий гуртожиток для студентів',
        title_en: 'New Dormitory for Students',
        text: 'Університет відкрив оновлений гуртожиток для студентів IT-спеціальностей. У кімнатах — сучасний ремонт, швидкісний інтернет та зони для самостійної роботи. Поселення розпочнеться з нового навчального року. Студенти кафедри КІТ матимуть пріоритет при розподілі місць. Це значне покращення умов проживання.',
        text_en: 'The university has opened a renovated dormitory for students of IT specialties. The rooms have modern renovations, high-speed internet, and areas for independent work. Check-in starts from the new academic year. CIT department students will have priority in the allocation of places. This is a significant improvement in living conditions.',
        imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600',
        isMainNews: false
      },
      {
        title: 'Благодійний IT-марафон',
        title_en: 'Charity IT Marathon',
        text: 'Студенти кафедри організували благодійний марафон з написання коду на підтримку ЗСУ. За 24 години вони створили кілька корисних веб-інструментів для волонтерів. До марафону долучились не лише студенти, а й викладачі та випускники. Зібрані кошти будуть передані на потреби захисників. Дякуємо всім учасникам за небайдужість!',
        text_en: 'Department students organized a charity coding marathon to support the Armed Forces of Ukraine. In 24 hours, they created several useful web tools for volunteers. Not only students but also teachers and alumni joined the marathon. The collected funds will be transferred to the needs of defenders. We thank all participants for their indifference!',
        imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
        isMainNews: false
      }
    ];

    await News.insertMany(news);
    console.log(`📰 Added ${news.length} news`);

    // Галерея (Unsplash)
    const galleryItems = [
      { title: 'Лабораторія кафедри', imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600', description: 'Сучасна компʼютерна лабораторія' },
      { title: 'Студенти на парі', imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600', description: 'Заняття з веб-програмування' },
      { title: 'Конференц-зала', imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600', description: 'Захист курсових робіт' },
      { title: 'Команда переможців', imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600', description: 'Наші чемпіони з DevChallenge' },
      { title: 'Нова лабораторія ШІ', imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600', description: 'Відкриття лабораторії штучного інтелекту' },
      { title: 'Бібліотека', imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600', description: 'Робочий простір для студентів' },
    ];
    await Gallery.insertMany(galleryItems);
    console.log(`🖼️ Added ${galleryItems.length} gallery items`);

    // Контакти
    const contacts = [
      {
        address: 'вул. Університетська, 1, м. Київ, 02000',
        phone: '+380 (44) 123-45-67',
        email: 'kit@university.edu.ua',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.685039058!2d30.472216315731!3d50.450091479475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce4b6f1e7aab%3A0x5987c6e6b6b6b6b6!2z0JrQuNC10LLQviDQv9C-0LvQuNGC0LXRhdC90ZbRh9C90LjQuQ!5e0!3m2!1suk!2sua!4v1650000000000'
      }
    ];
    await Contact.insertMany(contacts);
    console.log('📞 Contacts added');

    console.log('🎉 Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seed error:', error.message);
    process.exit(1);
  }
};

seedData();