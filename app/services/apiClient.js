const baseURL = 'http://localhost:8080';

export const fetchAPI = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${baseURL}${endpoint}`, options);
    if (!response.ok) {
      throw new Error('Erro na requisição à API');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao fazer a requisição:', error);
    throw error;
  }
};