import axios from "axios";

export const getGames = () => {
  return axios.get("https://denny2023.azurewebsites.net/api/juegos");
};

export const getCellphones = () => {
  return axios.get("https://denny2023.azurewebsites.net/api/celulares");
};
