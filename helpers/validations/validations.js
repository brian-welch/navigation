/*
 * Validates header matrix input, allows for missing commas
 * Assumption: must ahere to the convention:
 * boardWidth - boardHeight - playerCoordX - playerCoordY
 */
function isValidMatrix(string){
  let verdict = true;
  // remove commas and create array of values
  let arr = string.replace(/,/g, '').trim().split('');

  // validate each value is an integer
  for (let i = 0; i < arr.length; i++) {
    if (!parseInt(arr[i])) {
      verdict = false;
      break;
    }
  }

  // validate that there are only 4 entered values
  if (arr.length < 4 || arr.length > 4) {
    verdict = false;
  }

  // validate that player's position doesn't exceed the board's dimensions
  if (arr[2] > (arr[0] - 1) || arr[3] > (arr[1] - 1)) {
    verdict = false;
  }

  return verdict;

}

/*
 * Validates command inputs, allows for missing commas & strings of any length
 */
function isValidCommand(string){

  let verdict = true;
  // remove commas and create array of values
  let arr = string.replace(/,/g, '').trim().split('');

  // validate each value is an integer
  for (let i = 0; i < arr.length; i++) {
    if ((!parseInt(arr[i]) && parseInt(arr[i]) != 0) || arr[i] > 4) {
      verdict = false;
      break;
    }
  }

  return verdict;

}

module.exports = {
  isValidMatrix   : isValidMatrix,
  isValidCommand  : isValidCommand,
}
