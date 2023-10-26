import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const CartDetails = () => {
    const [services, setServices] = useState([]);
    const [noData, setNoData] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    useEffect(() =>{
        const serviceType = JSON.parse(localStorage.getItem('cartdetails'));
        

        if(serviceType){
            setServices(serviceType);
        }
        else{
            setNoData('No data found!!')
        }
    },[])
    return (
        <div>
            {
                noData ? <p className="h-[70vh] flex justify-center items-center text-2xl font-bold">{noData}</p> : 
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        {
                            isShowing ? 
                            services?.map(service => <Cart service={service}></Cart>)
                            :
                            services?.slice(0,4).map(service => <Cart key={service.id} service={service}></Cart>)
                        }
                    </div>

                    {/* <div className="flex gap-5 justify-center items-center">
                        <div className="flex justify-center items-center">
                            {
                                services.length > 3 && <button className="btn btn-primary" onClick={() => setIsShowing(!isShowing)}>
                                {isShowing ? "see less" : "see all"}
                                </button>
                            }
                        </div>
                        <div>
                            {
                                services.length > 0 && <button onClick={handleRemove} className="btn btn-primary">Delete All</button>
                                
                            }
                            
                        </div>
                        <div>
                        <Link to={"/"}>
                        <button className="btn btn-primary">Go Back to Homepage</button>
                        </Link>
                        
                    </div>
                    </div> */}

                  
                    
                </div>
            }
        </div>
    );
};

export default CartDetails;