/*
 * Clear terminal window
 * https://gist.github.com/timneutkens/f2933558b8739bbf09104fb27c5c9664
 */
function clearScreen() {
  const readline = require('readline');
  const blank = '\n'.repeat(process.stdout.rows);
  console.log(blank);
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
}

/*
 * Display welcome message
 */
function welcome() {
  process.stdout.write("\n----------\n NAVIGATE\n----------\n\n");
}

const initialBoardInputs = [
  " Enter the width of your navigation board",
  "Enter the height of your navigation board",
]

const initialPlayerInputs = [
  "Enter the player's starting coordinate on the 'x' axis",
  "Enter the player's starting coordinate on the 'y' axis",
]

const initialInputs = [
  "              Enter the width of your navigation board",
  "             Enter the height of your navigation board",
  "Enter the player's starting coordinate on the 'x' axis",
  "Enter the player's starting coordinate on the 'y' axis",
]

function getBoardInputs(index) {
  process.stdout.write(`${initialBoardInputs[index]}`);
  process.stdout.write("  >>>  ");
}

function getPlayerInputs(index) {
  process.stdout.write(`${initialPlayerInputs[index]}`);
  process.stdout.write("  >>>  ");
}

function getInputs(index) {
  process.stdout.write(`${initialInputs[index]}`);
  process.stdout.write("  >>>  ");
}

module.exports = {
  clearScreen     : clearScreen,
  welcome         : welcome,
  // initialInputs   : initialInputs,
  getInputs       : getInputs,
  getBoardInputs  : getBoardInputs,
  getPlayerInputs : getPlayerInputs,
}
