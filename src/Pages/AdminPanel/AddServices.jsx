import Navbar from "../Navbar/Navbar";
import banner from '../../assets/images/banner/4.jpg'

const AddServices = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="relative bg-clip-content">
                <img className="h-72 w-full rounded-lg" src={banner} alt="" />
                <div className="">
                     <h2 className="absolute top-32 ml-20 text-3xl font-bold text-white">Add New Service</h2>
                </div>
            </div>
            <div className="space-y-5 bg-gray-200 p-20 rounded-lg mt-20">
                <div className="flex gap-5">
                    <div className="form-control w-full"> 
                        <input type="text" name="serviceName" placeholder="Service Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full"> 
                        <input type="text" name="servicePrice" placeholder="Service Name" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="form-control w-full"> 
                        <input type="text" name="text" placeholder="Text Here" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full"> 
                        <input type="text" name="serviceType" placeholder="Service Type" className="input input-bordered" required />
                    </div>
                </div>

                <div>
                <textarea placeholder="Product Description" className="textarea textarea-bordered textarea-lg h-56 w-full" ></textarea> 
                </div>

                <div>
                    <button className="btn bg-red-600 text-white w-full">
                        <h2>Submit</h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddServices;