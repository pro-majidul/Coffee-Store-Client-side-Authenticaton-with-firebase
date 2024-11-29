import React from 'react';
import { IoEye } from 'react-icons/io5';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee , setCoffees,Coffees}) => {


    const handeldelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffee/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingCoffee = Coffees.filter(cofe => cofe._id !== id);
                        setCoffees(remainingCoffee);
                    })

            }
        });
    }

    return (
        <div className='bg-[#F5F4F1] p-3   opacity-100 md:flex items-center justify-between'>
            <div>
                <img src={coffee.photo} alt={coffee.name} />
            </div>
            <div>
                <p>Name : {coffee.name}</p>
                <p>Chef : {coffee.suplier}</p>
                <p>Price : {coffee.chef}</p>
            </div>
            <div className=' join join-vertical space-y-1'>
                <Link><button className='bg-blue-500  btn-sm rounded-lg'><IoEye size={24} color='white' /> </button></Link>
                <Link to={`updateCoffee/${coffee._id}`}> <button className="bg-black  btn-sm rounded-lg"><MdEdit size={24} color='white' /></button></Link>
                <button onClick={() => handeldelete(coffee._id)} className="bg-red-500  btn-sm rounded-lg"> <MdDelete size={24} color='white' /></button>
            </div>
        </div>
    );
};

export default CoffeeCard;