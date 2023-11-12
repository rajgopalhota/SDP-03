import React, { useEffect, useState } from 'react'
import { useAuth } from "./../AuthContext";

import UrlHelper from "./../UrlHelper";


export default function Manager() {
    const auth  = useAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        const response = await UrlHelper.get('/getallusers'); // Replace with your actual API endpoint
  
        if (response.status === 200) {
          const userData = response.data;
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
       <h1>Unverified Users</h1>
      {unverifiedUsers.length && customerUsers.length === 0 ? (
        <p>No unverified users found.</p>
      ) : (
        <ul>
          {unverifiedUsers.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} - Email: {user.email}
              <button onClick={() => handleAccept(user.phone)}>Accept</button>
              <button onClick={() => handleReject(user.phone)}>Reject</button>
            </li>
          ))}
        </ul>
      )}
      
     
    </>
  )
}
