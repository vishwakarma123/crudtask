import React, { useState } from "react";
import { updateUser } from "../api/api";

const EditUser = ({ user, onUserUpdated }) => {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user.id, formData);
    onUserUpdated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;
