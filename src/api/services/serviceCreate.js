import api from '../api';

export async function createNaver(
  jobRole,
  admissionDate,
  birthDate,
  name,
  project,
  url
) {
  const key = `Bearer ${localStorage.getItem('token')}`;
  try {
    const config = {
      method: 'POST',
      headers: {
        Authorization: key,
      },
      data: {
        job_role: jobRole,
        admission_date: admissionDate,
        birthdate: birthDate,
        project: project,
        name: name,
        url: url,
      },
    };

    const response = await api(`/navers`, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
