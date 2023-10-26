import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const PopularProducts = () => {
    const [loadedProducts, setLoadedProducts] = useState([])

    useEffect(() => {
        fetch('/popularproducts.json')
        .then(res => res.json())
        .then(data => setLoadedProducts(data))
    },[])
    return (
        <div className="mt-20">
            <div className="text-center space-y-4">
                <h2 className="text-xl text-red-500 font-bold">Popular Products</h2>
                <h2 className="text-5xl font-bold">Browse Our Products</h2>

                <p className='text-gray-400'>
                the majority have suffered alteration in some form, by injected
                humour, or randomised <br /> words which don't look even slightly
                believable.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    loadedProducts.map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>
            <div className="flex justify-center mt-10">
                    <Link>
                        <button className="btn btn-outline btn-error text-red-500 font-semibold">More Products</button>
                    </Link>
            </div>
        </div>
    );
};

export default PopularProducts;