import { FaCalendarAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMapMarked } from 'react-icons/fa';
const Contact = () => {
    return (
        <div className='flex justify-center bg-[#151515] rounded-xl mt-10'>
            <div className='h-52 grid grid-cols-1 md:grid-cols-3 text-white '>
                <div className='flex items-center mr-20'>
                    <FaCalendarAlt></FaCalendarAlt>
                    <div className='ml-5'>
                        <p>We are open monday-friday</p>
                        <h2 className='text-xl font-bold'>7:00 am - 9:00 pm</h2>
                    </div>
                </div>

                <div className='flex items-center'>
                    <FaPhoneAlt></FaPhoneAlt>
                    <div className='ml-5'>
                        <p>Have a question?</p>
                        <h2 className='text-xl font-bold'>+2546 251 2658</h2>
                    </div>
                </div>

                <div className='flex items-center'>
                    <FaMapMarked></FaMapMarked>
                    <div className='ml-5'>
                        <p>Need a repair? our address</p>
                        <h2 className='text-xl font-bold'>Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;