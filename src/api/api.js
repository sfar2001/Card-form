import axios from 'axios';
 
const API_URL = '/db.json'; 
export const fetchskip = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching skips:", error);
    return []; // Return an empty array if the fetch fails
  }
};
