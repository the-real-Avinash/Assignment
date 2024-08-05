import axios from 'axios';

const API_URL = 'https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/';

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};
