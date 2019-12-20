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

// process.stdin.setEncoding('utf8');
// process.stdin.resume();



// function runNavigation() {

//   helper.getBoardInputs(0);

//   process.stdin.on('data', function(data){
//     boardDimensions.push(data.toString().trim());
//     if (boardDimensions.length < 2) {
//       helper.getBoardInputs(boardDimensions.length);
//     } else {
//       process.exit();
//     }
//   });

//   if (boardDimensions.length == 2){
//     helper.getPlayerInputs(0);
//   }

//   process.stdin.on('data', function(data){
//     startPosition.push(data.toString().trim());
//     if (startPosition.length < 2) {
//       helper.getPlayerInputs(startPosition.length);
//     } else {
//       process.exit();
//     }
//   });

// }


// runNavigation();




// let newBoard = new Board([3,4]);
// let newPlayer = new Player([1,1]);




// process.stdout.write(newBoard.width.toString().trim() + "\n\n");
// process.stdout.write(newPlayer.getPosition().toString() + "\n\n");


// newPlayer.setPosition([2,2]);

// process.stdout.write(newPlayer.getPosition().toString() + "\n\n");

