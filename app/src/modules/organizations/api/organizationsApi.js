import axios from "@/http-common";

export const getOrganizations = () => axios.get("/organization");
