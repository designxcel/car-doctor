import slider1 from '../../assets/images/homeCarousel/1.jpg'
import slider2 from '../../assets/images/homeCarousel/2.jpg'
import slider3 from '../../assets/images/homeCarousel/3.jpg'
import slider4 from '../../assets/images/homeCarousel/4.jpg'

const Slider = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={slider1} className="w-full rounded-xl" />
    <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='ml-20 text-white space-y-7 w-[460px] mt-48'>
        <h2 className='text-7xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
            <button className='py-4 px-6 bg-[#FF3811] mr-5 rounded-lg'>Discover More</button>
            <button className='py-4 px-6 border-2 border-white rounded-lg'>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end left-5 right-5 bottom-8 mr-4">
      <a href="#slide4" className="mr-4 btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={slider2} className="w-full" />
    <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='ml-20 text-white space-y-7 w-[460px] mt-48'>
        <h2 className='text-7xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
            <button className='py-4 px-6 bg-[#FF3811] mr-5 rounded-lg'>Discover More</button>
            <button className='py-4 px-6 border-2 border-white rounded-lg'>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end left-5 right-5 bottom-8 mr-4">
      <a href="#slide1" className="mr-4 btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={slider3} className="w-full" />
    <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='ml-20 text-white space-y-7 w-[460px] mt-48'>
        <h2 className='text-7xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
            <button className='py-4 px-6 bg-[#FF3811] mr-5 rounded-lg'>Discover More</button>
            <button className='py-4 px-6 border-2 border-white rounded-lg'>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end left-5 right-5 bottom-8 mr-4">
      <a href="#slide2" className="mr-4 btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={slider4} className="w-full" />
    <div className="absolute rounded-xl h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
      <div className='ml-20 text-white space-y-7 w-[460px] mt-48'>
        <h2 className='text-7xl font-bold'>Affordable Price For Car Servicing</h2>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div>
            <button className='py-4 px-6 bg-[#FF3811] mr-5 rounded-lg'>Discover More</button>
            <button className='py-4 px-6 border-2 border-white rounded-lg'>Latest Project</button>
        </div>
      </div>
    </div>
    <div className="absolute flex justify-end left-5 right-5 bottom-8 mr-4">
      <a href="#slide3" className="mr-4 btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;