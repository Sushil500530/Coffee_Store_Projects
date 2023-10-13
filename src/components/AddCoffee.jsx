import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,supplier,chef,taste,details,photo,category};
        

        fetch('http://localhost:5000/coffee', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
               Swal.fire({
                title: 'Success!',
                text: 'Coffee Added Successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
              }) 
            }
        })
        
    }
    return (
        <div className="container mx-auto">
            <div className="w-full lg:h-screen h-[1200px] bg-[#F4F3F0] px-12">
                    <div className="space-y-5 pb-5">
                    <h1 className="text-3xl font-bold text-center pt-5 lg:pt-12">
                    Add New Coffee </h1>
                    <p className="text-center font-medium">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                    </div>
                    <div className="bg-[#F4F3F0]">
                        <form onSubmit={handleAddCoffee} className="card-body  text-xl font-semibold">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className=" w-full space-y-4 py-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Coffee Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Enter Cofee Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name="supplier" placeholder="Enter Cofee Price" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" name="category" placeholder="Enter Cofee Category" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className=" w-full space-y-4 py-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Chef</span>
                                        </label>
                                        <input type="text" name="chef" placeholder="Enter Cofee Chef" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Taste</span>
                                        </label>
                                        <input type="text" name="taste" placeholder="Enter Cofee Taste" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <input type="text" name="details" placeholder="Enter Cofee Details" className="input input-bordered" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D2B48C]">Add Coffee</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default AddCoffee;