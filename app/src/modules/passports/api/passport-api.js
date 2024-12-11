import axios from "@/http-common";

export const getPassport = () => {
  return axios.get("/passports");
};

export const getPassportById = (id) => {
  return axios.get(`/passports/${id}`);
};
export const createPassport = (organization) => {
  return axios.post("/passports", organization);
};

export const updatePassport = (id, data) => {
  return axios.put(`/passports/${id}`, data);
};

export const deletePassport = (id) => {
  return axios.delete(`/passports/${id}`);
};
