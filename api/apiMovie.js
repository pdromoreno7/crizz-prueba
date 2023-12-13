import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "b9e96f7c36ab0fe96750967e738c2fa1",
    language: "es-ES",
  },
});

export default movieDB;
