import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loaderUser = useLoaderData();

    const [users, setUsers] = useState(loaderUser)
    return (
        <div className='w-11/12 mx-auto my-5 py-5'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Create Time</th>
                            <th>Last Sign In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users && users.map(user => <tr key={user._id} className="bg-base-200">
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createTime}</td>
                                <td>{user.lastSignInTime}</td>
                                <td className='gap-1 flex'>
                                    <button className='btn btn-success'>edit</button>
                                    <button className='btn btn-warning'>X</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;