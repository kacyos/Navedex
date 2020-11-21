import api from '../api';

export default async function login(email, password) {
  try {
    const config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      data: {
        email: email,
        password: password,
      },
    };
    const response = await api('/users/login', config);

    localStorage.setItem('token', response.data.token);

    return response.data;
  } catch (error) {
    const code = await error.response.data.statusCode;
      return code;
        
  }
}
