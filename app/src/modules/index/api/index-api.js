import axios from "@/http-common";

export const getIndex = () => {
  return axios.get("/");
};

export const getIndexById = (id) => {
  return axios.get(`/index/${id}`);
};
export const createIndex = (department) => {
  return axios.post("/index", department);
};

export const updateIndex = (id, data) => {
  return axios.put(`/index/${id}`, data);
};

export const deleteIndex = (id) => {
  return axios.delete(`/index/${id}`);
};
