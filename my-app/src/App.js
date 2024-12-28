import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const apiUrl = 'http://localhost/CodeIgniter-CRUD/api/user_api.php';  // Update to your PHP API URL
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    dob: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch all users when the component loads
  useEffect(() => {
    setLoading(true);
    axios.get(apiUrl)
      .then((response) => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Create or update user (Add/Edit)
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, dob } = formData;

    if (!name || !email || !password || !dob) {
      setError("Please fill out all fields!");
      return;
    }

    setLoading(true);

    if (formData.id) {
      // Update user if `id` is present
      axios.put(`${apiUrl}?id=${formData.id}`, { name, email, password, dob })
        .then(() => {
          setLoading(false);
          window.location.reload();
        })
        .catch(() => {
          setError("Error updating user");
          setLoading(false);
        });
    } else {
      // Create new user
      axios.post(apiUrl, { name, email, password, dob })
        .then(() => {
          setLoading(false);
          window.location.reload();  // Reload to show the new user list
        })
        .catch(() => {
          setError("Error creating user");
          setLoading(false);
        });
    }
  };

  // Edit user (set data in the form)
  const handleEdit = (user) => {
    setFormData(user);
  };

  // Delete user
  const handleDelete = (id) => {
    setLoading(true);
    axios.delete(`${apiUrl}?id=${id}`)
      .then(() => {
        setLoading(false);
        window.location.reload();  // Reload to reflect the change
      })
      .catch(() => {
        setError("Error deleting user");
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h1>User Management</h1>

      {/* Show error if any */}
      {error && <div className="error">{error}</div>}

      {/* User Form (Add/Edit) */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {formData.id ? "Update" : "Add"} User
        </button>
      </form>

      {/* Display Loading Spinner */}
      {loading && <div>Loading...</div>}

      {/* User List */}
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>{user.name} - {user.email} - {user.dob}</span>
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
