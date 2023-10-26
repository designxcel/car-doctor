
import team1 from '../../assets/images/team/1.jpg'
import team2 from '../../assets/images/team/2.jpg'
import team3 from '../../assets/images/team/3.jpg'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
    modules={[Navigation, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
       <div className='border rounded-lg text-center space-y-2 p-10'>
            <div className='flex justify-center'>
                <img className='w-80 h-64 rounded-lg' src={team1} alt="" />
            </div>
                <h2 className='text-2xl font-semibold'>Car Engine Plug</h2>
                <p className='text-xl'>Engine Expert</p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='border rounded-lg text-center space-y-2 p-10'>
            <div className='flex justify-center'>
                <img className='w-80 h-64 rounded-lg' src={team2} alt="" />
            </div>
                <h2 className='text-2xl font-semibold'>Car Engine Plug</h2>
                <p className='text-xl'>Engine Expert</p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='border rounded-lg text-center space-y-2 p-10'>
            <div className='flex justify-center'>
                <img className='w-80 h-64 rounded-lg' src={team3} alt="" />
            </div>
                <h2 className='text-2xl font-semibold'>Car Engine Plug</h2>
                <p className='text-xl'>Engine Expert</p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='border rounded-lg text-center space-y-2 p-10'>
            <div className='flex justify-center'>
                <img className='w-80 h-64 rounded-lg' src={team2} alt="" />
            </div>
                <h2 className='text-2xl font-semibold'>Car Engine Plug</h2>
                <p className='text-xl'>Engine Expert</p>
       </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='border rounded-lg text-center space-y-2 p-10'>
            <div className='flex justify-center'>
                <img className='w-80 h-64 rounded-lg' src={team1} alt="" />
            </div>
                <h2 className='text-2xl font-semibold'>Car Engine Plug</h2>
                <p className='text-xl'>Engine Expert</p>
       </div>
      </SwiperSlide>

    </Swiper>
  );
};

