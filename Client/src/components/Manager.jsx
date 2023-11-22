import React, { useEffect, useState } from 'react'
import { useAuth } from "./../AuthContext";

import UrlHelper from "./../UrlHelper";


export default function Manager() {
  const auth = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await UrlHelper.get('/getallusers'); // Replace with your actual API endpoint

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

  const handleAccept = async (phone) => {
    try {
      await UrlHelper.post(`/acceptUser/${phone}`); // Replace with your actual backend endpoint
      // Refresh the list of unverified users after accepting
      fetchUsers();
    } catch (error) {
      console.error('Error accepting user:', error);
    }
  };

  const handleReject = async (phone) => {
    try {
      await UrlHelper.post(`/rejectUser/${phone}`); // Replace with your actual backend endpoint
      // Refresh the list of unverified users after rejecting
      fetchUsers();
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  const unverifiedUsers = users.filter((user) => !user.isVerified);

  const customerUsers = users.filter((user) => user.role === 'customer');

  return (
    <>
      <div className='admin'>
        <h1>Unverified Users</h1>
        {unverifiedUsers.length && customerUsers.length === 0 ? (
          <p>No unverified users found.</p>
        ) : (
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
                <th>Accept</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {unverifiedUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.gender}</td>
                  <td>{user.aadharNumber}</td>
                  <td>{user.panNumber}</td>
                  <td>
                    <img src={user.imageURL} alt="User" />
                  </td>
                  <td>
                    <img src={user.signatureURL} alt="Signature" />
                  </td>
                  <td>{user.role}</td>
                  <td>{user.isVerified ? 'Yes' : 'No'}</td>
                  <td>
                    <a onClick={() => handleAccept(user.phone)}><i class="fa-solid fa-check"></i></a></td>
                  <td><a onClick={() => handleReject(user.phone)}><i class="fa-solid fa-x"></i></a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </>
  )
}
