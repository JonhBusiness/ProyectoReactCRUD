import { getGames, getCellphones } from "../services/axiosCRUDservices";

export async function obtainAllGames(setGames) {
  try {
    const response = await getGames();
    if (response.data && response.status === 200) {
      setGames(response.data);
    } else {
      throw new Error(`No game found`);
    }
  } catch (error) {
    alert(`Something went wrong: ${error}`);
  }
}

export function obtainAllCellphones(setCellphones) {
  getCellphones()
    .then((response) => {
      if (response.data && response.status === 200) {
        setCellphones(response.data);
      } else {
        throw new Error(`No Cellphone found`);
      }
    })
    .catch((error) => alert(`Something went wrong: ${error}`));
}
