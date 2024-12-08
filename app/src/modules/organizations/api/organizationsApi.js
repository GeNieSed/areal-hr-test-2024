import axios from "@/http-common";

export const getOrganizations = () => {
  return axios.get("/organization");
};

export const getOrganizationById = (id) => {
  return axios.get(`/organization/${id}`);
};
export const createOrganization = (organization) => {
  return axios.post("/organization", organization);
};

export const updateOrganization = (id, data) => {
  return axios.put(`/organization/${id}`, data);
};

export const deleteOrganization = (id) => {
  return axios.delete(`/organization/${id}`);
};
