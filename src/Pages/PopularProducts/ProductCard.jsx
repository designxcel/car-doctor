

const ProductCard = ({product}) => {
    const{title, img, price} = product
    return (
        <div className="w-96 border-2 border-gray p-5 rounded-xl">
            <figure className="px-10 pt-10 bg-gray-200 rounded-xl">
                <img src={img} alt="Shoes" className="p-5 h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-xl font-bold card-title">{title}</h2>
                <p className="text-red-500 font-semibold">$ {price}</p>
                
            </div>
        </div>
    );
};

export default ProductCard;