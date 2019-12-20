const Board      = require('./models/board.js');
const Player     = require('./models/player.js');
const helper     = require('./helpers/helpers.js');
const controller = require('./controllers/controllers.js');

/*
 * Clear terminal window
 */
helper.clearScreen();

/*
 * Display welcome message
 */
helper.welcome();

let boardDimensions = [];
let startPosition   = [];


  process.stdin.on('data', function(data){

    boardDimensions.push(data.toString().trim());

    if (boardDimensions.length < 2) {
      helper.getBoardInputs(boardDimensions.length);
    } else {
    }
  });

helper.getBoardInputs(0);
