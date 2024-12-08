import axios from "@/http-common";

export const getEmployees = () => {
  return axios.get("/employees");
};

export const getEmployeesById = (id) => {
  return axios.get(`/employees/${id}`);
};
export const createEmployees = (department) => {
  return axios.post("/employees", department);
};

export const updateEmployees = (id, data) => {
  return axios.put(`/employees/${id}`, data);
};

export const deleteEmployees = (id) => {
  return axios.delete(`/employees/${id}`);
};
