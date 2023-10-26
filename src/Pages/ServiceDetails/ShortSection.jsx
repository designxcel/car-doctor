import { FaArrowRight } from 'react-icons/fa';

const ShortSection = ({item}) => {
    const {title} = item
    return (
        <div className='bg-[#FF3811] text-white flex justify-between items-center py-4 rounded-lg px-3'>
            <h2>{title}</h2>
            <FaArrowRight></FaArrowRight>
        </div>
    );
};

export default ShortSection;