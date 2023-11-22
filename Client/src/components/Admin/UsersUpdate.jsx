import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import UrlHelper from "./../../UrlHelper";


export default function UsersUpdate() {
    const [userId, setUserId] = useState(""); // Assuming you get the user ID from somewhere
    const [userDetails, setUserDetails] = useState({
        id: '', // assuming you might want to display or track the ID in the form
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        gender: '',
        aadharNumber: '',
        panNumber: '',
        mpin: '',
        imagePath: null, // Assuming you might want to upload an image
        signaturePath: null, // Assuming you might want to upload a signature
        role: 'customer',
        isVerified: false,
        bankAccounts: [] // Assuming it's a list of bank accounts
    });


    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            // Assuming you have a function .get that returns a promise
            const response = await UrlHelper.get(`/admin/users/${userId}`);
            const userData = response.data;
            console.log(userData)
    
            // Set the state with the fetched user details
            setUserDetails(userData);
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        };
    
        if (userId) {
          fetchUserDetails();
        }
      }, [userId]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({ ...prevState, [name]: value }));
    };

    const handleUpdateUser = async () => {
        try {
          // Assuming you have a function .put that returns a promise
          await UrlHelper.put(`/admin/users/${userId}`, userDetails);
          // Handle success or redirect as needed
          console.log("data updated")
        } catch (error) {
          console.error('Error updating user details:', error);
        }
      };
    return (
        <div>
            <h2>Update User Details</h2>
            <form>
                <label>ID:
                    <input type="text" name="id" value={userDetails.id} onChange={handleInputChange} disabled />
                </label>
                <label>First Name:
                    <input type="text" name="firstName" value={userDetails.firstName} onChange={handleInputChange} />
                </label>
                <label>Last Name:
                    <input type="text" name="lastName" value={userDetails.lastName} onChange={handleInputChange} />
                </label>
                <label>Email:
                    <input type="text" name="email" value={userDetails.email} onChange={handleInputChange} />
                </label>
                <label>Phone:
                    <input type="text" name="phone" value={userDetails.phone} onChange={handleInputChange} />
                </label>
                <label>Password:
                    <input type="password" name="password" value={userDetails.password} onChange={handleInputChange} />
                </label>
                <label>Gender:
                    <input type="text" name="gender" value={userDetails.gender} onChange={handleInputChange} />
                </label>
                <label>Aadhar Number:
                    <input type="text" name="aadharNumber" value={userDetails.aadharNumber} onChange={handleInputChange} />
                </label>
                <label>PAN Number:
                    <input type="text" name="panNumber" value={userDetails.panNumber} onChange={handleInputChange} />
                </label>
                <label>MPIN:
                    <input type="password" name="mpin" value={userDetails.mpin} onChange={handleInputChange} />
                </label>
                <label>Role:
                    <input type="text" name="role" value={userDetails.role} onChange={handleInputChange} />
                </label>
                <label>Is Verified:
                    <input type="checkbox" name="isVerified" checked={userDetails.isVerified} onChange={handleInputChange} />
                </label>
                {/* Add similar input elements for other fields */}
                <button type="button" onClick={handleUpdateUser}>Update User</button>
            </form>
        </div>
    )
}
