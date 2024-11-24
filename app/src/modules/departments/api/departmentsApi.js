import axios from "@/http-common";

export const getDepartments = () => {
  return axios.get("/department");
};

export const getDepartmentById = (id) => {
  return axios.get(`/department/${id}`);
};
export const createDepartment = (department) => {
  return axios.post("/department", department);
};

export const updateDepartment = (id, data) => {
  return axios.put(`/department/${id}`, data);
};

export const deleteDepartment = (id) => {
  return axios.delete(`/department/${id}`);
};
