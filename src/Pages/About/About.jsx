import about1 from '../../assets/images/about_us/person.jpg'
import about2 from '../../assets/images/about_us/parts.jpg'
 
 const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={about1} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={about2} className="absolute w-1/2 right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>

                <div className='w-1/2 space-y-6'>
                    <h1 className="font-bold text-red-500">About Us</h1>
                    <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
                    <p className="py-6 max-w-md">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="py-4 px-6 bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
 };
 
 export default About;