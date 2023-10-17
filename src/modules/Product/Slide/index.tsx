import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

export const Slider: React.FC = () => {
    return (
        <Swiper
            style={{
                paddingTop: "40px"
            }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper_News"
        >
            <SwiperSlide>
                <img src='assets/img/Rectangle 1464 (4).png' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='assets/img/Rectangle 1464 (4).png' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='assets/img/Rectangle 1464 (4).png' />
            </SwiperSlide>
            <SwiperSlide>
                <img src='assets/img/Rectangle 1464 (4).png' />
            </SwiperSlide>
        </Swiper>
    )
}