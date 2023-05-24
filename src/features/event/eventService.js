import axios from "axios";

const API_URL = "http://localhost:8080";

const createEvent= async (data) => {
  const res = await axios.post(API_URL + "/eventos/create", data);
  console.log(res.data.message)
  return res.data;
};

const eventService = {
  createEvent,
};

export default eventService;