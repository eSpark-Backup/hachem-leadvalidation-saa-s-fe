import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const AppSlider = ({ data, slideStyle, card, isDisplay, spaceBetween }) => {
  const renderCard = (item) => {
    return card(item);
  };

  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        display: { xs: isDisplay || 'none', md: 'none' },
        justifyContent: 'center',
      }}
    >
      <Swiper
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        grabCursor={true}
        spaceBetween={spaceBetween}
        slidesPerView="auto"
        speed={3000}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '10px 0px 10px 0px',
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              mx: 'auto',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ...slideStyle,
            }}
          >
            {renderCard(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

AppSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes?.object),
  slideStyle: PropTypes.object,
  card: PropTypes.func,
  isDisplay: PropTypes?.bool,
  spaceBetween: PropTypes?.number,
};

export default AppSlider;
