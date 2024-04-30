import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2NiYjM4NWRjNWYzMTJjM2YxZjhjMTE1NjIzMzljMiIsInN1YiI6IjY1Y2YyNmUwOGVmZTczMDE3Yjc2MGQ2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r3LBdLXOajCvn_E07Zu9dn3Ka0rKWE2xlA4RvBY_xRM",
  },
});

export default instance;