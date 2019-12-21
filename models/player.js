class Player {

  constructor (_startPosition) {
    this.x          = _startPosition[0];
    this.y          = _startPosition[1];
    this.direction  = 'n';
    this.directions = ['n','e','s','w'];
  }

  move (array) {
    this.x = this.x + array[0];
    this.y = this.y + array[1];
  }

  turnRight () {
    let temp   = this.directions.shift();
    this.directions.push(temp);
    this.direction = this.directions[0];
  }

  turnLeft () {
    let temp   = this.directions.pop();
    this.directions.unshift(temp);
    this.direction = this.directions[0];
  }

}

module.exports = Player;
