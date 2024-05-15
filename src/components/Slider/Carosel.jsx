// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import p1 from '../../assets/images/slider-1.jpg';
import p2 from '../../assets/images/slider-2.jpg';
import p3 from '../../assets/images/image-1.jpg';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

export default function Carosel() {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <Slider image={p1} text={'Book libraries have been essential institutions for centuries, serving as repositories of knowledge, centers of learning, and hubs of community engagement.'}></Slider></SwiperSlide>
                <SwiperSlide> <Slider image={p2} text={'Book libraries have been essential institutions for centuries, serving as repositories of knowledge, centers of learning, and hubs of community engagement.'}></Slider></SwiperSlide>
                <SwiperSlide> <Slider image={p3} text={'Book libraries have been essential institutions for centuries, serving as repositories of knowledge, centers of learning, and hubs of community engagement.'}></Slider></SwiperSlide>
                 

            </Swiper>
        </div>
    );
}