import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const Coffee = useLoaderData();

    const handelupdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const suplier = form.suplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        // console.log(name, chef, suplier, test, category, details, photo);
        const Updateproducts = {
            name, chef, suplier, test, category, details, photo
        }

        fetch(`http://localhost:3000/coffee/${Coffee._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(Updateproducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated Success',
                        icon: 'success',
                    });
                    form.reset();
                }
            })
    }
    return (
        <div className="bg-addCoffee bg-no-repeat bg-cover bg-center p-10">
            <Link to='/' className="flex items-center  py-4"> <FaLongArrowAltLeft />Back To Home </Link>
            <div className="bg-[#F4F3F0] p-10">
                <h3 className="text-xl md:text-3xl font-bold text-[#374151] text-center">Update Existing Coffee Details</h3>
                <p className="w-8/12 text-[#374151] mx-auto text-center py-4">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handelupdateCoffee} >
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={Coffee.name} name="name" placeholder="Enter Coffee Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input defaultValue={Coffee.chef} name="chef" type="text" placeholder="Enter Coffee Chef" className="input input-bordered" required />
                        </div> <div className="form-control">
                            <label className="label">
                                <span className="label-text">Suplier</span>
                            </label>
                            <input defaultValue={Coffee.suplier} name="suplier" type="text" placeholder="Enter Coffee suplier" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Test</span>
                            </label>
                            <input defaultValue={Coffee.test} name="test" type="text" placeholder="Enter Coffee Test" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input name="category" defaultValue={Coffee.category} type="text" placeholder="Enter Coffee Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input defaultValue={Coffee.details} name="details" type="text" placeholder="Enter Coffee Details" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-url</span>
                        </label>
                        <input defaultValue={Coffee.photo} name="photo" type="text" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C]">Updated Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
