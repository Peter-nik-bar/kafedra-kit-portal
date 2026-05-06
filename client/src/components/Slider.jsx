import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

const Slider = () => {
  const { t } = useTranslation();

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&fit=crop',
      titleKey: 'slider.slide1',
    },
    {
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&fit=crop',
      titleKey: 'slider.slide2',
    },
    {
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&fit=crop',
      titleKey: 'slider.slide3',
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
    >
      {slides.map((s, i) => (
        <SwiperSlide key={i} style={{ position: 'relative', height: '420px' }}>
          <img
            src={s.image}
            alt={t(s.titleKey)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div className="slide-caption">{t(s.titleKey)}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;