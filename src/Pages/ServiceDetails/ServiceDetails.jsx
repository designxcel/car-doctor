import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import banner from '../../assets/images/banner/service.jpg'
import banner1 from '../../assets/images/banner/2.jpg'
import Navbar from "../Navbar/Navbar";
import ServiceCategory from "./ServiceCategory";
import Footer from "../Footer/Footer";
import ShortService from "./ShortService";
import { FaFileAlt } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import logo from '../../assets/logo.svg'
import swal from "sweetalert";


const ServiceDetails = () => {
    // const details = useLoaderData()
    const { id } = useParams();
    const [detailService, setDetailService] = useState(null)

    useEffect(() => {
        fetch('/services.json')
        .then(res=>res.json())
        .then(data =>{
            const foundService = data.find((item) =>item._id === id);
                    setDetailService(foundService)
        })
    },[id])

    if(!detailService){
        return <p>Loading...</p>
    }

    const { _id, img, title, description,facility, price } = detailService;
    
    // const handleService = () => {
    //     const addedService = [];
    //     const serviceType = JSON.parse(localStorage.getItem('cartdetails'))
    //     if(!serviceType){
    //         addedService.push(foundService);
    //         localStorage.setItem('cartdetails', JSON.stringify(addedService))
    //         swal("Good job!", "Have successfully Purchased!", "success"); 
    //     }
    //     else{

    //         const isExist = serviceType.find((card) => card._id ===id);
    //         if(!isExist){
    //             addedService.push(...serviceType,foundService);
    //         localStorage.setItem('cartdetails', JSON.stringify(addedService))
    //         swal("Good job!", "Have successfully Purchased!", "success");  
    //         }
    //         else{
    //             swal("Oops!", "You already purchased this! Try another service!", "error"); 
    //         }
            
    //     }
    // }

    return (
        <div>
            <Navbar></Navbar>
            <div className="relative bg-clip-content">
                <img className="h-72 w-full rounded-lg" src={banner} alt="" />
                <div className="">
                     <h2 className="absolute top-32 ml-20 text-3xl font-bold text-white">Service Details</h2>
                </div>
            </div>
            <div className="flex gap-5 mt-20 mb-10">
                <div className="w-3/4 space-y-6">
                    <div>
                        <img className="w-full rounded-lg" src={img} alt="" />
                    </div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p>{description}</p>
                    <div className="grid md:grid-cols-2 gap-5">
                        {
                            facility.map((item, index) =><ServiceCategory key={index} item={item}></ServiceCategory>)
                        }
                    </div>

                    <div className="mt-10">
                        <h2 className="text-3xl font-bold mb-5">3 Simple Steps to Process</h2>
                        <p className="text-gray-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>

                        <div className="flex justify-center items-center gap-5 mt-14">
                            <div className="text-center space-y-4">
                                <h2 className="bg-red-500 rounded-full w-14 mx-auto p-4 text-white font-bold">01</h2>
                                <h2 className="font-bold">STEP ONE</h2>
                                <p className="text-gray-400 w-40">It uses a dictionary of over 200</p>
                            </div>

                            <div className="text-center space-y-4">
                                <h2 className="bg-red-500 rounded-full w-14 mx-auto p-4 text-white font-bold">02</h2>
                                <h2 className="font-bold">STEP TWO</h2>
                                <p className="text-gray-400 w-40">It uses a dictionary of over 200</p>
                            </div>

                            <div className="text-center space-y-4">
                                <h2 className="bg-red-500 rounded-full w-14 mx-auto p-4 text-white font-bold">03</h2>
                                <h2 className="font-bold">STEP THREE</h2>
                                <p className="text-gray-400 w-40">It uses a dictionary of over 200</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img className="w-full rounded-lg" src={banner1} alt="" />
                    </div>
                </div>

                <div className="w-1/4">
                    <h2 className="text-4xl font-bold mb-5">Services</h2>
                   <ShortService></ShortService>

                   <div className="bg-[#151515] text-white rounded-lg mt-10">
                        <h1 className="text-2xl font-bold p-5">Download</h1>
                        <div className="flex justify-between items-center p-5">
                            <div className="flex items-center gap-5">
                                <FaFileAlt></FaFileAlt>
                                <div>
                                    <h2 className="text-lg font-bold">Our Brochure</h2>
                                    <p>Download</p>                 
                                </div>
                            </div>
                            <div className="bg-[#FF3811] p-5 rounded-lg">
                                 <FaArrowRight></FaArrowRight>
                            </div>
                        </div>

                        <div className="flex justify-between items-center p-5">
                            <div className="flex items-center gap-5">
                                <FaFileAlt></FaFileAlt>
                                <div>
                                    <h2 className="text-lg font-bold">Company Details</h2>
                                    <p>Download</p>                 
                                </div>
                            </div>
                            <div className="bg-[#FF3811] p-5 rounded-lg">
                                 <FaArrowRight></FaArrowRight>
                            </div>
                        </div>
                   </div>

                   <div className="bg-[#151515] text-white rounded-lg mt-10 p-10 text-center">
                        <div className="flex justify-center mb-8">
                            <img src={logo} alt="" />
                        </div>
                        <p>Need Help? We Are Here To Help You</p>
                        <div className="bg-white h-auto p-5 rounded-lg text-gray-900 mt-5">
                            <h2 className="font-bold text-xl"><span className="text-red-600">Car Doctor</span> Special</h2>
                            <p className="font-bold text-xl">Save up to <span className="text-red-600">60% off</span></p>
                        </div>
                        <button className="bg-[#FF3811] py-3 px-4 rounded-lg mt-10">Get A Quote</button>
                   </div>

                   <div>
                    <h2 className="mt-10 text-2xl font-bold">Price: $ {price}</h2>
                    <button className="bg-[#FF3811] text-white w-full py-3 mt-10 rounded-lg">Proceed Checkout</button>
                   </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;