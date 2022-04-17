import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Recommended = () => {
    return (
        <div className='recommended-sider'>
            <Swiper
                style={{ width: '490px', height: '260px', boxShadow: '-1px -1px 16px 0px rgb(50 50 50 / 15%)' ,borderRadius:'10px'}}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                lazy
                pagination={{ clickable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <img src='https://www.luncode.com/usr/uploads/2021/12/3501473378.png' alt='' width={"490px"} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://www.luncode.com/usr/uploads/2021/12/3501473378.png' alt='' width={"490px"} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Recommended