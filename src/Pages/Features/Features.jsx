import feat1 from '../../assets/icons/group.svg'
import feat2 from '../../assets/icons/Groups.svg'
import feat3 from '../../assets/icons/person.svg'
import feat4 from '../../assets/icons/Wrench.svg'
import feat5 from '../../assets/icons/check.svg'
import feat6 from '../../assets/icons/deliveryt.svg'

const Features = () => {
    return (
        <div className='mt-20'>
            <div className='text-center space-y-4'>
                <h2 className='text-xl text-red-500 font-bold'>Core Features</h2>
                <h2 className='text-5xl font-bold'>Why Choose Us</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-6 mt-10 mb-10'>
                <div className='border w-44 h-36 text-center rounded-lg'>
                    <div className='flex justify-center mt-8'>
                        <img src={feat1} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Expert Team</h2>
                </div>

                <div className='bg-red-500 border w-44 h-36 text-center rounded-lg'>
                    <div className='flex justify-center mt-8'>
                        <img src={feat2} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Timely Delivery</h2>
                </div>

                <div className='border w-44 h-36 text-center rounded-lg'>
                    <div className='flex justify-center mt-8'>
                        <img src={feat3} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>24/7 Support</h2>
                </div>
                <div className='border w-44 h-36 text-center rounded-lg'>
                    <div className='flex justify-center mt-8'>
                        <img src={feat4} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Best Equipment</h2>
                </div>

                <div className='border w-44 h-36 text-center rounded-lg'>
                    <div className='flex justify-center mt-8'>
                        <img src={feat5} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>100% Guaruntee</h2>
                </div>

                <div className='border w-44 h-36 text-center rounded-lg'>
                    <div className='flex justify-center mt-8'>
                        <img src={feat6} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Timely Delivery</h2>
                </div>
            </div>
        </div>
    );
};

export default Features;