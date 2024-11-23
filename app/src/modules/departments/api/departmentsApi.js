import axios from "../../../http-common";

export const getDepartments = () => axios.get("/department");
export const createDepartment = (data) => axios.post("/department", data);
export const updateDepartment = (id, data) =>
  axios.put(`/department/${id}`, data);
export const deleteDepartment = (id) => axios.delete(`/department/${id}`);
