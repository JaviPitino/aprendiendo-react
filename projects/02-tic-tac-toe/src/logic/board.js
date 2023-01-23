import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;

    if (
      boardToCheck[a] && // Mira si en el 0 hay una X
      boardToCheck[a] === boardToCheck[b] && // Mira si la posición 0 y 1 son iguales
      boardToCheck[a] === boardToCheck[c] // Si posición 0 y 2 son iguales
    ) {
      return boardToCheck[a];
    }
  }
  // SI no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
