import axios from "axios";

const API_URL = "http://localhost:8080";

const createRecinto = async (recintoData) => {
  const res = await axios.post(API_URL + "/recintos/create", recintoData);
  console.log(res.data.message)
  return res.data;
};

const recintoService = {
    createRecinto,
};

export default recintoService;