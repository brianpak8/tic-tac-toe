const prompt = require('prompt');

const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tracker = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: ''
}

const winningCombos = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8],
[3, 6, 9], [3, 5, 7], [4, 5, 6], [7, 8, 9]];

const isWinner = (player) => {
  for (let i = 0; i < winningCombos.length; i++) {
    if (tracker[winningCombos[i][0]] === tracker[winningCombos[i][1]] && tracker[winningCombos[i][0]] === tracker[winningCombos[i][2]]) {
      return true;
    }
  }
  return false;
}
