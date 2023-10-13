import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";


const Root = () => {
    const coffees = useLoaderData();
    // console.log(coffee);
    return (
        <div className="lg:m-20 m-5">
            <h1 className="text-3xl font-bold text-center my-5">Our Popular Products </h1>
            <h1 className="text-3xl font-bold text-center my-5">Hot Hot Coffee Data: {coffees.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-8">
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} />)
                }
            </div>
        </div>
    );
};

export default Root;