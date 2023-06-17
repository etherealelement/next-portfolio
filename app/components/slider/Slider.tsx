"use client"
import {FC} from "react";
import  "./Slider.css";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export const Slider:FC = ():JSX.Element => {
    return (
        <>
            <div className="Container">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    <SwiperSlide>
                        <img src="/himo.png" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src="/react-pizza.png" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src="/safari.png" alt="slide_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img   src="/react-sneakers.png" alt="slide_image" />
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </>
    )
}