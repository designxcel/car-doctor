import React, { useEffect, useState } from 'react';
import ShortSection from './ShortSection';

const ShortService = () => {
    const [serviceCaption, setServiceCaption] = useState([])
    useEffect(() =>  {
        fetch('/services.json')
        .then(res=>res.json())
        .then(data => setServiceCaption(data))
    },[])

    return (
        <div className='space-y-5'>
            {
                serviceCaption.map(item =><ShortSection item={item}></ShortSection>)
            }
        </div>
    );
};

export default ShortService;