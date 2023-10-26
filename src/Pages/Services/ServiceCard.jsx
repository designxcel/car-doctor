import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    const {_id,title, img, price} = service
    
    return (
        <div className="card w-96 shadow-lg mt-10">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                
                <div className="card-actions flex justify-center items-center">
                    <p className='text-red-500 font-semibold'>Price: $ {price}</p>
                    <Link to={`/servicedetails/${_id}`}>
                        <FaArrowRight></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;