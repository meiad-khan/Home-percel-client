import React, { use } from 'react';
import customerTop from '../../../assets/customer-top.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewPromise }) => {

  const reviews = use(reviewPromise);
  // console.log('reviews are', reviews);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-64 h-40 flex items-center justify-start">
          <img src={customerTop} alt="" />
        </div>
        <div>
          <h2 className="text-5xl text-center font-bold mb-4">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-sm text-center mb-8 font-normal text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            quia inventore voluptate ducimus necessitatibus corrupti saepe,
            <br></br> labore quibusdam reiciendis accusamus!
          </p>
        </div>
      </div>

      {/* swiper */}
      <div className='px-4 pb-25'>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: "50%",
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;