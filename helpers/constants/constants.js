/*
 * Used in extractArray()
 */
const headerComponant = {
  'board'  : [0,2],
  'player' : [2,2],
}

const moveMap = {
  'n' : [
    [0,-1],
    [0,1],
  ],
  'e' : [
    [1,0],
    [-1,0],
  ],
  's' : [
    [0,1],
    [0,-1],
  ],
  'w' : [
    [-1,0],
    [1,0],
  ],
}

module.exports = {
  headerComponant : headerComponant,
  moveMap         : moveMap,
}
