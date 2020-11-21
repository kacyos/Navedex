import api from '../api';

export async function deleteUser(id) {
  const key = `Bearer ${localStorage.getItem('token')}`;
  try {    
    const config = {
      method: 'DELETE',
      headers: {
        Authorization: key,
      },
      redirect: 'follow'
    };
    const response = await api(`/navers/${id}`, config);
    return response.data;
  } catch (error) {
    return error;
  }
}