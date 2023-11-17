import React, { useEffect, useState } from 'react'

import UrlHelper from "./../../UrlHelper";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await UrlHelper.get('/admin/users'); // Replace with your actual API endpoint

            if (response.status === 200) {
                const userData = response.data;
                // For each user, fetch their image and signature
                for (let user of userData) {
                    const imgResponse = await UrlHelper.get(`/images/${user.phone}/photo`, { responseType: 'arraybuffer' });
                    const signResponse = await UrlHelper.get(`/images/${user.phone}/signature`, { responseType: 'arraybuffer' });

                    const blobImg = new Blob([imgResponse.data], { type: 'image/png' });
                    const blobSign = new Blob([signResponse.data], { type: 'image/png' });

                    user.imageURL = URL.createObjectURL(blobImg);
                    user.signatureURL = URL.createObjectURL(blobSign);
                }
                setUsers(userData);
                console.log(userData);
            } else {
                console.error(
                    'Failed to fetch users. Server responded with status code: ' +
                    response.status
                );
            }
        } catch (error) {
            console.error('Error while fetching users:', error);
        }
    };
    return (
        <div className='admin'>
            <h1>Admin Panel</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        {/* <th>Password</th> */}
                        <th>Gender</th>
                        <th>Aadhar Number</th>
                        <th>PAN Number</th>
                        <th>MPIN</th>
                        <th>Image</th>
                        <th>SIGNATURE</th>
                        <th>Role</th>
                        <th>Is Verified</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className='content'>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            {/* <td>{user.password}</td> */}
                            <td>{user.gender}</td>
                            <td>{user.aadharNumber}</td>
                            <td>{user.panNumber}</td>
                            <td>{user.mpin}</td>
                            <td>
                                <img src={user.imageURL} alt="User"/>
                            </td>
                            <td>
                                <img src={user.signatureURL} alt="Signature" />
                            </td>
                            <td>{user.role}</td>
                            <td>{user.isVerified ? 'Yes' : 'No'}</td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
