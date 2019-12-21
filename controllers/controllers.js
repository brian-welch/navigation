const Board      = require('../models/board.js');
const Player     = require('../models/player.js');
const constant  = require('../helpers/constants/constants.js');

/*
 * Split validated header matrix values into relevant arrays
 */
function extractArray(string, type){
  let x = constant.headerComponant[type][0];
  let y = constant.headerComponant[type][1];
  let arr = [];
  string.replace(/,/g, '').trim().substr(x,y).split('').forEach(function(v, i){
    arr.push(parseInt(v));
  });

  return arr;
}

/*
 * Instantantiate the boardObj
 */
function createBoard(string){
  let arr = extractArray(string, 'board');
  return new Board(arr);
}

/*
 * Instantantiate the playerObj
 */
function createPlayer(string){
  let arr = extractArray(string, 'player');
  return new Player(arr);
}



/*
 * Command handler
 */
function runCommands(string, boardObj, playerObj){
  let commands      = string.replace(/,/g, '').trim().split('');
  let finalPosition = [];

  for (let i = 0; i < commands.length; i++) {
    let command = parseInt(commands[i]);
    switch(command) {
      case 3:
        playerObj.turnRight();
        break;
      case 4:
        playerObj.turnLeft();
        break;
      case 1:
      case 2:
        playerObj.move(constant.moveMap[playerObj.direction][command - 1]);
        break;
    }

    if (playerObj.x == -1 || playerObj.y == -1) {
      finalPosition = [-1,-1];
      break;
    } else if (playerObj.x > boardObj.maxX || playerObj.y > boardObj.maxY) {
      finalPosition = [-1,-1];
      break;
    }

    finalPosition = [playerObj.x,playerObj.y];

    if (command == 0) {
      outputResult(finalPosition);
    }
  }
  outputResult(finalPosition);
}


function outputResult (array) {
  if (array[0] < 0) {
    process.stdout.write('\n\nPlayer fell off the board.\n');
    process.stdout.write(`\n[${array}]\n`);
    process.exit();
  } else {
    process.stdout.write(`\n\n[${array}]\n`);
    process.stdout.write('\nPlayer remains on the board\n  >>> ');
  }
}


module.exports = {
  createBoard   : createBoard,
  createPlayer  : createPlayer,
  runCommands   : runCommands,
}
