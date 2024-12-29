// src/api.js

import axios from "axios";

// Base URL for the API (adjust according to your backend URL)
//const API_URL = "http://localhost/CodeIgniter-CRUD/application/controllers/api/user_api/";


const API_BASE_URL = "http://crud.demo/api/Users"; // Update if needed

export const getUsers = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch users:", error);
        throw error;
    }
};



export const getUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  return response.json();
};

export const addUser = async (user) => {
  const response = await fetch(`${API_BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const updateUser = async (id, user) => {
  const response = await fetch(`${API_BASE_URL}/update/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/delete/${id}`, {
    method: "POST",
  });
  return response.json();
};

