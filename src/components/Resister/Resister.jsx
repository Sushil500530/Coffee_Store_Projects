import { useContext } from "react";
import { AuthContex } from "../../provider/AuthProvider";


const Resister = () => {
const {createUser} = useContext(AuthContex)

    const handleResister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
       

        createUser(email,password)
        .then(result => {
            console.log(result.user);
            //new user has been ceated
            const createdAt = result.user?.metadata?.creationTime;
            const user = {email, createdAt};
            fetch('http://localhost:5000/user', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('user resister successfully!')
                }
            })
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <div className="min-h-screen bg-base-200 w-full p-5 lg:p-10">
                <div className=" flex-col space-y-5">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Resister now!</h1>
                       
                    </div>
                    <div className="card md:w-[450px] lg:w-[560px] mx-auto flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleResister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Resister</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resister;