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
  clearScreen();
  process.stdout.write("\n\t----------\n\t NAVIGATE\n\t----------\n");
  process.stdout.write("\t(enter 0 at any time to quit)\n\n\n");
}


/*
 * Cue to enter header, start of game
 */
function enterHeaderMessage(){
  clearScreen();
  welcome();
  process.stdout.write('Enter navigation header matrix\n  >>> ');
};


/*
 * Display error message
 */
function invalidMessage(errorType){
  clearScreen();
  welcome();
  process.stdout.write(`The ${errorType} your entered is not valid, `);
  // if (errorType == 'header') {
  //   process.stdout.write(`\nnote that the first 2 numbers build the board,\n`);
  //   process.stdout.write(`and the second 2 number determine the starting position,\n`);
  // }
  process.stdout.write('please try again\n  >>> ');
};


/*
 * Displays valid movement commands possible
 */
function commandDictMessage(){

}

/*
 * Display board and player values
 */
function boardSetMessage(boardObj, playerObj){
  welcome();
  process.stdout.write(`The board is a [${boardObj.width} X ${boardObj.height}] grid.\n`);
  process.stdout.write(`The player begins at coordinate [${playerObj.x},${playerObj.y}].\n\n`);
  process.stdout.write('Enter command integers\n  >>> ');
}

module.exports = {
  enterHeaderMessage  : enterHeaderMessage,
  invalidMessage      : invalidMessage,
  commandDictMessage  : commandDictMessage,
  boardSetMessage     : boardSetMessage,
}
