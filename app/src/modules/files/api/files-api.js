import axios from "@/http-common";

export const getFiles = () => {
  return axios.get("/files");
};

export const getFilesById = (id) => {
  return axios.get(`/files/${id}`);
};
export const createFilesFiles = (organization) => {
  return axios.post("/files", organization);
};

export const updateFiles = (id, data) => {
  return axios.put(`/files/${id}`, data);
};

export const deleteFiles = (id) => {
  return axios.delete(`/files/${id}`);
};
