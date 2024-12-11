import axios from "@/http-common";

export const getAddresses = () => {
  return axios.get("/addresses");
};

export const getAddressesById = (id) => {
  return axios.get(`/addresses/${id}`);
};
export const createAddresses = (department) => {
  return axios.post("/addresses", department);
};

export const updateAddresses = (id, data) => {
  return axios.put(`/addresses/${id}`, data);
};

export const deleteAddresses = (id) => {
  return axios.delete(`/addresses/${id}`);
};
