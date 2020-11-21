import api from '../api';

export async function editNaver(method, id, jobRole, admissionDate, birthDate, name, project, url) {
  const key = `Bearer ${localStorage.getItem('token')}`;
  try {
    const config = {
      method: method,
      headers: {
        Authorization: key,
      },
      data:{
        job_role: jobRole,
        admission_date: admissionDate,
        birthdate: birthDate,
        name,
        project,
        url,
      }
      
    };
    

    const response = await api(`/navers/${id}`, config);
    return response.data;
  } catch (error) {
    const message = error.response.data;
    if(message.statusCode === 404){
      return 404;
    }
    return message
  }
}
