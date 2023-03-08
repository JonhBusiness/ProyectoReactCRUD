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
/*import { getGames, getCellphones } from "../services/axiosCRUDservices";

export function obtainAllGames(setGames) {
  getGames()
    .then((response) => {
      if (response.data.data && response.status === 200) {
        setGames(response.data.data);
      } else {
        throw new Error(`No users found`);
      }
    })
    .catch((error) => alert(`Something went wrong: ${error}`));
}
export function obtainAllCellphones(setCellphones) {
  getCellphones()
    .then((response) => {
      if (response.data.data && response.status === 200) {
        setCellphones(response.data.data);
      } else {
        throw new Error(`No Cellphone found`);
      }
    })
    .catch((error) => alert(`Something went wrong: ${error}`));
}*/
