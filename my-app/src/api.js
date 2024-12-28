// src/api.js

import axios from "axios";

// Base URL for the API (adjust according to your backend URL)
const API_URL = "http://localhost/CodeIgniter-CRUD/application/controllers/api/user_api/";

export const getUsers = async () => {
  return axios.get(`${API_URL}users`);
};

export const getUser = async (id) => {
  return axios.get(`${API_URL}users/${id}`);
};

export const createUser = async (user) => {
  return axios.post(`${API_URL}users/create`, user);
};

export const updateUser = async (id, user) => {
  return axios.put(`${API_URL}users/update/${id}`, user);
};

export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}users/delete/${id}`);
};
