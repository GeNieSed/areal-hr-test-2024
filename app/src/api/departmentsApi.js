
import axios from 'axios';

export const getDepartments = () => axios.get('/api/departments');
export const createDepartment = (data) => axios.post('/api/departments', data);
export const updateDepartment = (id, data) => axios.put(`/api/departments/${id}`, data);
export const deleteDepartment = (id) => axios.delete(`/api/departments/${id}`);
