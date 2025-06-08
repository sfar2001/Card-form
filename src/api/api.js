import axios from 'axios';
 
const API_URL = 'http://localhost:3001/skips';
 
export const fetchskip = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching skips:", error);
    return []; // Return an empty array if the fetch fails
  }
};
export const fetchskipById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
 
export const createskip = async (prop) => {
  const response = await axios.post(API_URL, prop);
  return response.data;
};
 
export const updateskip = async (id, prop) => {
  const response = await axios.put(`${API_URL}/${id}`, prop);
  return response.data;
};
 
export const deleteskip = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};