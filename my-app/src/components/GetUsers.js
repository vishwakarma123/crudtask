import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/CodeIgniter-CRUD/application/controllers/api/user_api/')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetUsers;
