
import { FaEye } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
const CoffeeCard = ({ coffee }) => {
    const { _id, name, photo, details, supplier, chef, category } = coffee || {};
    return (
        <div>
            <div className=" bg-[#F5F4F1] my-1 flex items-center justify-between px-6 py-3">
                <div>
                    <figure><img src={photo} alt="image" /></figure>
                </div>
                <div className="">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Chef: {chef}</h2>
                    <h2 className="card-title">Price: {supplier}</h2>
                </div>
                <div className="card-actions justify-end items-center">
                    <div className=" flex flex-col gap-2">
                        <button className="btn bg-[#d2a973] hover:bg-[#825316]"><FaEye className='text-white text-xl'></FaEye></button>
                        <button className="btn bg-[#3C393B] hover:bg-[#732358]"><FiEdit2 className='text-white text-xl'></FiEdit2></button>
                        <button className="btn bg-[#EA4744] hover:bg-[#930a07]"><AiFillDelete className='text-white text-xl'></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CoffeeCard;