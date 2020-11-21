import api from '../api';

export async function loadHome() {
  const key = `Bearer ${localStorage.getItem('token')}`;
  try {    
    const config = {
      method: 'GET',
      headers: {
        Authorization: key,
      },
    };
    const response = await api('/navers', config);
    return response.data;
  } catch (error) {
    return error;
  }
}
