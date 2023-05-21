import axios from "axios";

const API_URL = "http://localhost:8080";

const register = async (usuarioData) => {
  const res = await axios.post(API_URL + "/usuarios/create", usuarioData);
  return res.data;
};

const authService = {
  register,
};

export default authService;
