const helper     = require('./helpers/helpers.js');
const controller = require('./controllers/controllers.js');

// check varaible
let initCheck = false;

helper.enterHeaderMessage();

async function runNavigation(data) {
  // kill command
  let input = data.toString();
  if (parseInt(input) === 0) {
    process.exit();
  }

  // If objects have been instanstantiated, skip to 'else'
  if (initCheck == false) {
    if (!helper.isValidMatrix(input)) {
      await helper.invalidMessage('header');

    } else {
      initCheck = true;
      global.boardObj  = await controller.createBoard(input);
      global.playerObj = await controller.createPlayer(input);

      await helper.boardSetMessage(boardObj, playerObj);

    }
  // If objects have been instanstantiated, do this
  } else {
    if (!helper.isValidCommand(input)) {
      await helper.invalidMessage('command');

    } else {
      await controller.runCommands(input, boardObj, playerObj);
    }
  }


}

// Initiate input listener
process.stdin.on('data', runNavigation);


















