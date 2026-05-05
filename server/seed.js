require('dotenv').config();
const mongoose = require('mongoose');
const News = require('./models/News');
const Gallery = require('./models/Gallery');
const Contact = require('./models/Contact');

const MONGO_URI = process.env.MONGO_URI;

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Підключено до MongoDB для наповнення');

    // Очищаємо старі дані (обережно!)
    await News.deleteMany({});
    await Gallery.deleteMany({});
    await Contact.deleteMany({});
    console.log('🗑️ Старі дані видалено');

    // === НОВИНИ (10 головних + ще 5 звичайних) ===
    const news = [
      {
        title: 'Захист дипломних робіт на кафедрі КІТ',
        text: 'Студенти групи 401-ТН успішно захистили дипломні проєкти. Комісія відзначила високий рівень підготовки.',
        imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90910f4af?w=600',
        isMainNews: true
      },
      {
        title: 'День відкритих дверей онлайн',
        text: 'Запрошуємо абітурієнтів на онлайн-презентацію кафедри комп\'ютерних інформаційних технологій 20 травня.',
        imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600',
        isMainNews: true
      },
      {
        title: 'Перемога в хакатоні “DevChallenge”',
        text: 'Команда студентів кафедри КІТ посіла перше місце у всеукраїнському хакатоні з розробки веб-застосунків.',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600',
        isMainNews: true
      },
      {
        title: 'Нова лабораторія штучного інтелекту',
        text: 'На кафедрі відкрито сучасну лабораторію з ШІ та машинного навчання, оснащену потужними GPU-станціями.',
        imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600',
        isMainNews: true
      },
      {
        title: 'Співпраця з IT-компаніями',
        text: 'Підписано угоди про стажування студентів у провідних IT-компаніях: SoftServe, EPAM, GlobalLogic.',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
        isMainNews: true
      },
      {
        title: 'Курси підвищення кваліфікації для викладачів',
        text: 'Викладачі кафедри пройшли міжнародне стажування за програмою Erasmus+ у Варшавській політехніці.',
        imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600',
        isMainNews: true
      },
      {
        title: 'Випуск бакалаврів 2026',
        text: 'Цього року кафедра випускає рекордну кількість бакалаврів — 85 студентів отримають дипломи з відзнакою.',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
        isMainNews: true
      },
      {
        title: 'Вебінар з React для початківців',
        text: 'Студентське наукове товариство проводить безкоштовний вебінар «React за 2 години» 25 травня.',
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
        isMainNews: true
      },
      {
        title: 'Оновлення навчальних планів',
        text: 'З нового навчального року впроваджуються курси з DevOps, Cloud Computing та Cybersecurity.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600',
        isMainNews: true
      },
      {
        title: 'Студентська конференція «IT-перспективи»',
        text: 'Запрошуємо до участі у щорічній конференції. Приймаються тези доповідей до 1 червня.',
        imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600',
        isMainNews: true
      },
      // Звичайні новини
      {
        title: 'Екскурсія в офіс Google Україна',
        text: 'Студенти кафедри відвідали київський офіс Google, де познайомились із роботою інженерів.',
        imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
        isMainNews: false
      },
      {
        title: 'Олімпіада з програмування',
        text: 'Відбувся перший етап олімпіади з програмування. 12 студентів кафедри вийшли до фіналу.',
        imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910auj8?w=600',
        isMainNews: false
      },
      {
        title: 'Майстер-клас з кібербезпеки',
        text: 'Запрошений експерт провів практичний майстер-клас з етичного хакінгу та захисту веб-додатків.',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600',
        isMainNews: false
      },
      {
        title: 'Новий гуртожиток для студентів',
        text: 'Університет відкрив оновлений гуртожиток з покращеними умовами проживання для студентів IT-спеціальностей.',
        imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600',
        isMainNews: false
      },
      {
        title: 'Благодійний IT-марафон',
        text: 'Студенти кафедри організували благодійний марафон з написання коду на підтримку ЗСУ.',
        imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600',
        isMainNews: false
      }
    ];

    await News.insertMany(news);
    console.log(`📰 Додано ${news.length} новин`);

    // === ГАЛЕРЕЯ ===
    const galleryItems = [
      {
        title: 'Лабораторія кафедри',
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
        description: 'Сучасна комп\'ютерна лабораторія'
      },
      {
        title: 'Студенти на парі',
        imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600',
        description: 'Заняття з веб-програмування'
      },
      {
        title: 'Конференц-зала',
        imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600',
        description: 'Захист курсових робіт'
      },
      {
        title: 'Команда переможців хакатону',
        imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600',
        description: 'Наші чемпіони з DevChallenge'
      },
      {
        title: 'Нова лабораторія ШІ',
        imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600',
        description: 'Відкриття лабораторії штучного інтелекту'
      },
      {
        title: 'Бібліотека університету',
        imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600',
        description: 'Робочий простір для студентів'
      }
    ];

    await Gallery.insertMany(galleryItems);
    console.log(`🖼️ Додано ${galleryItems.length} зображень до галереї`);

    // === КОНТАКТИ ===
    const contacts = [
      {
        address: 'вул. Університетська, 1, м. Київ, 02000',
        phone: '+380 (44) 123-45-67',
        email: 'kit@university.edu.ua',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.685039058!2d30.472216315731!3d50.450091479475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce4b6f1e7aab%3A0x5987c6e6b6b6b6b6!2z0JrQuNC10LLQviDQv9C-0LvQuNGC0LXRhdC90ZbRh9C90LjQuQ!5e0!3m2!1suk!2sua!4v1650000000000'
      }
    ];

    await Contact.insertMany(contacts);
    console.log('📞 Контакти додано');

    console.log('🎉 Наповнення бази завершено успішно!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Помилка наповнення:', error.message);
    process.exit(1);
  }
};

seedData();