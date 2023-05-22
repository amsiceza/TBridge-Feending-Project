import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async () => {
  const res = await axios.get(API_URL + "/usuarios/getAllUsers");

  return res.data;
};

const asistentesService = {
  getAll,
};

export default asistentesService;
