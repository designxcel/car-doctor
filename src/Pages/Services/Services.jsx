import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const loadedServices = useLoaderData()
    const {title, img, price} = loadedServices
    return (
        <div className="mt-20">
            <div className="text-center space-y-4">
                <h2 className="text-xl text-red-500 font-bold">Service</h2>
                <h2 className="text-5xl font-bold">Our Service Area</h2>

                <p className='text-gray-400'>
                the majority have suffered alteration in some form, by injected
                humour, or randomised <br /> words which don't look even slightly
                believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    loadedServices.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center mt-10">
                    <Link>
                        <button className="btn btn-outline btn-error text-red-500 font-semibold">More Services</button>
                    </Link>
            </div>
        </div>
    );
};

export default Services;