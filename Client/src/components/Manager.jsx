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

    const unverifiedUsers = users.filter((user) => !user.isVerified);

  return (
    <>
       <h1>Unverified Users</h1>
      {unverifiedUsers.length === 0 ? (
        <p>No unverified users found.</p>
      ) : (
        <ul>
          {unverifiedUsers.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} - Email: {user.email}
            </li>
          ))}
        </ul>
      )}
      
     
    </>
  )
}
