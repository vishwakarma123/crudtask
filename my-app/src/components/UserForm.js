import React, { useState } from 'react';
import { addUser, updateUser } from '../services/api';

const UserForm = ({ editingUser, fetchUsers, setEditingUser }) => {
  const [form, setForm] = useState({
    name: editingUser?.name || '',
    email: editingUser?.email || '',
    password: '',
    dob: editingUser?.dob || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingUser) {
      await updateUser(editingUser.id, form);
      setEditingUser(null);
    } else {
      await addUser(form);
    }
    fetchUsers();
    setForm({ name: '', email: '', password: '', dob: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleInputChange}
      />
      <button type="submit">{editingUser ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;
