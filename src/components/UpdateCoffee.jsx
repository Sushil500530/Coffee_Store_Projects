import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const navigate = useNavigate();
    const coffee = useLoaderData();
    const { _id, name, photo, details, supplier, chef, category,taste} = coffee || {};

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = {name,supplier,chef,taste,details,photo,category};
        // console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
               Swal.fire({
                title: 'Success!',
                text: 'Coffee Updated Added Successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
              }) 
              return navigate(-1);
            }
        })
    }
    return (
        <div className="container mx-auto bg-[#F4F3F0]">
            <div className="w-full lg:h-screen h-[1200px] px-12">
                <div className="space-y-5 pb-5">
                    <h1 className="text-3xl font-bold text-center lg:pt-12 pt-5">
                        Update Coffe of <span className="text-violet-600">{name}</span> </h1>
                    <p className="text-center font-medium">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <div className="bg-[#F4F3F0]">
                    <form onSubmit={handleUpdate} className="card-body  text-xl font-semibold">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className=" w-full space-y-4 py-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Coffee Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter Cofee Name" defaultValue={name} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="supplier" placeholder="Enter Cofee Price" defaultValue={supplier} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder="Enter Cofee Category" className="input input-bordered" required />
                                </div>
                            </div>
                            <div className=" w-full space-y-4 py-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Chef</span>
                                    </label>
                                    <input type="text" name="chef" defaultValue={chef} placeholder="Enter Cofee Chef" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="text" name="taste" defaultValue={taste} placeholder="Enter Cofee Taste" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" name="details" defaultValue={details} placeholder="Enter Cofee Details" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D2B48C]">Updated Coffee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;