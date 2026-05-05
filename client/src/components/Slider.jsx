import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slides = [
  { image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200', title: 'Ласкаво просимо на кафедру КІТ' },
  { image: 'https://images.unsplash.com/photo-1523050854058-8df90910f4af?w=1200', title: 'Інноваційні технології навчання' },
  { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200', title: 'Наші випускники – наша гордість' },
];

const Slider = () => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 4000 }}
  >
    {slides.map((slide, idx) => (
      <SwiperSlide key={idx}>
        <div className="position-relative" style={{ height: '60vh' }}>
          <img src={slide.image} className="d-block w-100 h-100" style={{ objectFit: 'cover' }} alt={slide.title} />
          <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
            <h2>{slide.title}</h2>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Slider;