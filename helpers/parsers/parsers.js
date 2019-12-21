const constants = require('../constants/constants.js');

/*
 * Split validated header matrix values into relevant arrays
 */
function extractArray(string, type){
  let x = constants.headerComponant[type][0];
  let y = constants.headerComponant[type][1];
  let arr = [];
  string.replace(/,/g, '').trim().substr(x,y).split('').forEach(function(v, i){
    arr.push(parseInt(v));
  });

  return arr;
}

module.exports = {
  extractArray : extractArray,
}
