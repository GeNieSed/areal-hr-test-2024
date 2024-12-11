import axios from "@/http-common";

export const getPosition = () => {
  return axios.get("/positions");
};

export const getPositionById = (id) => {
  return axios.get(`/positions/${id}`);
};
export const createPosition = (organization) => {
  return axios.post("/positions", organization);
};

export const updatePosition = (id, data) => {
  return axios.put(`/positions/${id}`, data);
};

export const deletePosition = (id) => {
  return axios.delete(`/positions/${id}`);
};
