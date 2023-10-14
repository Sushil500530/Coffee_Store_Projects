/* eslint-disable react/prop-types */

import { FaEye } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    // eslint-disable-next-line no-unused-vars
    const { _id, name, photo, details, supplier, chef, category } = coffee || {};

    const handleDelete = _id => {
        console.log('delete selecet',_id);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                   if(data.deletedCount > 0){
                    console.log(data);
                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                      )
                      const remaining = coffees.filter(coff => coff._id !== _id);
                      setCoffees(remaining);
                   }
                })
                }
              })
    }
    return (
        <div>
            <div className=" bg-[#F5F4F1] my-1 flex flex-col md:flex-row lg:flex-row items-center justify-between md:p-0 gap-4 lg:pr-3 pb-3">
                <div className='lg:w-[300px] w-full '>
                    <figure><img className='w-full' src={photo} alt="image" /></figure>
                </div>
                <div className="">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Chef: {chef}</h2>
                    <h2 className="card-title">Price:$$ {supplier}</h2>
                </div>
                <div className="card-actions justify-end items-center">
                    <div className=" flex lg:flex-col md:flex-col flex-row  gap-2">
                        <button className="btn bg-[#d2a973] hover:bg-[#825316]"><FaEye className='text-white text-xl'></FaEye></button>
                       <Link to={`/updatecoffee/${_id}`}><button className="btn bg-[#3C393B] hover:bg-[#732358]"><FiEdit2 className='text-white text-xl'></FiEdit2></button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744] hover:bg-[#930a07]"><AiFillDelete className='text-white text-xl'></AiFillDelete></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CoffeeCard;