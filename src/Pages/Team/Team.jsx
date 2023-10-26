
import Swiper from '../Swiper/Swiper';
const Team = () => {
  return (
    <div className='mt-20'>
      <div className="text-center space-y-4">
        <h2 className="text-xl text-red-500 font-bold">Team</h2>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>

        <p className='text-gray-400'>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className='mt-10'>
        <Swiper></Swiper>
      </div>
    </div>
  );
};

export default Team;
