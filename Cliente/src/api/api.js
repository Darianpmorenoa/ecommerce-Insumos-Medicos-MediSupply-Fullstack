import axios from 'axios';

// 1.URL base usando la variable de entorno de Render
const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api';

// 2. Instancia personalizada de axios
const clienteAxios = axios.create({
  baseURL: API_URL
});

export default clienteAxios;