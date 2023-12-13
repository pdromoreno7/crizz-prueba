import axios from "axios";

const API = "https://api.themoviedb.org/3";

export function get(path) {
  return axios
    .get(API + path, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOWU5NmY3YzM2YWIwZmU5Njc1MDk2N2U3MzhjMmZhMSIsInN1YiI6IjY1N2EwOGNmMjBlY2FmMDBjNjlhNTc2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2gRpeBexGJEmqy-yTvRmxqBEqi9VZfSrGqiGFLSKLj4",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((response) => response.data);
}
