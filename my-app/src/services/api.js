import axios from 'axios';

const API_URL = 'http://localhost/CodeIgniter-CRUD/application/controllers/api/user_api/';

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addUser = async (user) => {
  await axios.post(API_URL, user);
};

export const updateUser = async (id, user) => {
  await axios.put(`${API_URL}?id=${id}`, user);
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}?id=${id}`);
};
