class Player {

  constructor (_startPosition) {
    this.x  = _startPosition[0];
    this.y = _startPosition[1];
  }

  getPosition () {
    return [this.x,this.y];
  }

  setPosition (array) {
    this.x = array[0];
    this.y = array[1];
  }

}

module.exports = Player;
