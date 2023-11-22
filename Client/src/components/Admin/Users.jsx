import React, { useEffect, useState } from 'react'

import UrlHelper from "./../../UrlHelper";
import UsersUpdate from './UsersUpdate';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);

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

    const userDelete = async (phone) => {
        try {
            await UrlHelper.post(`/delete/${phone}`); // Replace with your actual backend endpoint
            // Refresh the list of unverified users after rejecting
            fetchUsers();
        } catch (error) {
            console.error('Error rejecting user:', error);
        }
    };

    const handleUpdateClick = (userId) => {
        setSelectedUserId(userId);
    };

    const handleUpdateClose = () => {
        setSelectedUserId(null);
        fetchUsers(); // Refresh the user list after closing the update form
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
                        <th>Image</th>
                        <th>SIGNATURE</th>
                        <th>Role</th>
                        <th>Is Verified</th>
                        <th>Update</th>
                        <th>Delete</th>
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
                            <td>{user.gender}</td>
                            <td>{user.aadharNumber}</td>
                            <td>{user.panNumber}</td>
                            <td>
                                <img src={user.imageURL} alt="User"/>
                            </td>
                            <td>
                                <img src={user.signatureURL} alt="Signature" />
                            </td>
                            <td>{user.role}</td>
                            <td>{user.isVerified ? 'Yes' : 'No'}</td>
                            <td>
                                <a onClick={() => handleUpdateClick(user.id)}><i class="fa-solid fa-pen"></i></a>
                            </td>
                            <td>
                                <a onClick={() => userDelete(user.phone)}><i class="fa-solid fa-trash"></i></a>
                            </td>
                            {/* Add more cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedUserId && (
                <UsersUpdate userId={selectedUserId} onClose={handleUpdateClose} />
            )}
        </div>
    )
}
