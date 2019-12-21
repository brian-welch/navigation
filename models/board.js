class Board {

  constructor (_dimensions) {
    this.width  = _dimensions[0];
    this.height = _dimensions[1];
    this.maxX   = _dimensions[0] - 1;
    this.maxY   = _dimensions[1] - 1;
  }

}

module.exports = Board;
