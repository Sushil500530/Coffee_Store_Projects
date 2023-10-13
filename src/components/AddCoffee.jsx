
const AddCoffee = () => {
    return (
        <div className="container mx-auto">
            <div className="w-full h-screen bg-[#F4F3F0] px-12">
                    <div className="space-y-5 pb-5">
                    <h1 className="text-3xl font-bold text-center pt-12">
                    Add New Coffee </h1>
                    <p className="text-center font-medium">
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                    </div>
                    <div className="bg-[#F4F3F0]">
                        <form className="card-body  text-xl font-semibold">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className=" w-full space-y-4 py-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Enter Cofee Name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Supplier</span>
                                        </label>
                                        <input type="text" name="Supplier" placeholder="Enter Cofee Supplier" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" name="Category" placeholder="Enter Cofee Category" className="input input-bordered" required />
                                    </div>
                                </div>
                                <div className=" w-full space-y-4 py-3">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Chef</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Enter Cofee Chef" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Taste</span>
                                        </label>
                                        <input type="text" name="Taste" placeholder="Enter Cofee Taste" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <input type="text" name="Details" placeholder="Enter Cofee Details" className="input input-bordered" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="url" name="Photo" placeholder="Photo URL" className="input input-bordered" required />
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