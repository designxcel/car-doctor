

const ServiceCategory = ({item}) => {
    const {name, details} = item;
    return (
        <div className="bg-gray-100 h-52 space-y-3 p-10 rounded-lg border-t-4 border-red-500">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-400">{details}</p>
        </div>
    );
};

export default ServiceCategory;