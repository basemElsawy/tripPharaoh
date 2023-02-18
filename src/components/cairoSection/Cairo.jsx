import React from 'react'
import './cairo.css'
import GizaTripData from './CairoTripData'
import TripCards from './TripCards';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Cairo = (props) => {
    return (
        <section className='cairo-sect' id='cairo'>
            <div className="cairo-container">
                <div className='Giza-header'>
                    <h1 className='giza-section-header'>A walk of cairo</h1>
                    <h3 className='giza-section-subheader'>A wide collection of desired trips in Cairo</h3>
                    <span className='page-swipe'>

                    </span>
                </div>

                <i class="fa-sharp fa-solid fa-comment"></i>

                <Swiper className='swiper-container'
                    modules={[Navigation, Scrollbar]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}



                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {

                        GizaTripData.map((val, i) => {
                            return (
                                <SwiperSlide className='slide'>

                                    <TripCards key={val.id} TourName={val.TourName} TourImage={val.TourImage} Price={val.Price} />
                                </SwiperSlide>

                            )
                        })
                    }

                </Swiper>




                <div>
                    <a href="#" className='btn more-trips'> More trips in giza</a>
                </div>
            </div>
        </section>
    )
}

export default Cairo;
