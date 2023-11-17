import React, { useState, useEffect } from 'react';
import AuthService from '../auth/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/auth', {
          headers: {
            Authorization: `Bearer ${AuthService.getAccessToken()}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUsers(userData);
          console.log('User data:', userData);
        } else {
          console.error('Failed to fetch user data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
