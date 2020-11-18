const CellState = {
  Player: {
	PLAYER1: 0,
	PLAYER2: 1,
  },
  FREE: 2,
};

class Board {
  constructor() {
	this.cells = [
	  [CellState.FREE, CellState.FREE, CellState.FREE],
	  [CellState.FREE, CellState.FREE, CellState.FREE],
	  [CellState.FREE, CellState.FREE, CellState.FREE],
	];
	this.current = CellState.Player.PLAYER1;
  }

  isFull() {
	return !this.cells.flat().includes(CellState.FREE);
  }

  setPlayer(x, y) {
	if (this.cells[y][x] != CellState.FREE) {
	  throw new Error("Cell is not Free");
	}
	this.cells[y][x] = this.current;
  }

  togglePlayer() {
	switch (this.current) {
	  case CellState.Player.PLAYER1:
		this.current = CellState.Player.PLAYER2;
		return;
	  case CellState.Player.PLAYER2:
		this.current = CellState.Player.PLAYER1;
		return;
	}
  }
  /*
	With cords: (x,y)
	x -Axis --->
	+-----------------+
	|(0,0)|(0,1)|(0,2)| |
	+-----------------+ | y-Axis
	|(1,0)|(1,1)|(1,2)| |
	+-----------------+ v
	|(2,0)|(2,1)|(2,2)|
	+-----------------+
	Implementation:
	downRight: checks the diagonal rows exmp :: (0,0) (1,1) (2, 2)
	downLeft: checks the diagonal rows exmp :: (0,2) (1,1) (2, 0)
  */
  hasWinner() {
	let hasWinner = false;
	for (let i = 0; i < this.cells.length; i++) {
	  hasWinner |= this.checkRow(i);
	}
	for (let i = 0; i < this.cells.length; i++) {
	  hasWinner |= this.checkCol(i);
	}
	// it makes only sense to check the diagonals only if gameBoard is a square
	if (this.cells.length == this.cells[0].length) {
	  hasWinner |=
		this.checkDiagLeftToRightDown() || this.checkDiagLeftToRightUp();
	}
	return hasWinner;
  }

	/**
	   checks each row for winner
	   example :: (0,0) (0,1) (0,2)
	*/
  checkRow(row) {
	const first = this.cells[row][0];
	if (first == CellState.FREE) return false;
	return !this.cells[row].some((elem) => {
	  return first != elem;
	});
  }

	/**
	   checks each column for winner
	   example :: (2,0) (2,1) (2,2)
	*/
  checkCol(col) {
	const first = this.cells[0][col];
	if (first == CellState.FREE) return false;
	for (let i = 0; i < this.cells.length; i++) {
	  if (first != this.cells[i][col]) {
		return false;
	  }
	}
	return true;
  }

	/**
	   check diagonal from top left to bottom right
	   example :: (0,0) (1,1) (2,2)
	*/
  checkDiagLeftToRightDown() {
	const first = this.cells[0][0];
	if (first == CellState.FREE) return false;
	for (let i = 0; i < this.cells.length; i++) {
	  if (first != this.cells[i][i]) {
		return false;
	  }
	}
	return true;
  }

	/**
	   check diagonal from bottom left to top right
	   example :: (2,0) (1,1) (0,2)
	*/
  checkDiagLeftToRightUp() {
	const len = this.cells.length;
	const first = this.cells[len - 1][0];

	if (first == CellState.FREE) return false;

	for (let i = len - 1; i > 0; i--) {
	  if (first != this.cells[i][i]) {
		return false;
	  }
	}
	return true;
  }

  static cellStateToString(cellState) {
	switch (cellState) {
	  case CellState.FREE:
		return "#";
	  case CellState.Player.PLAYER1:
		return "X";
	  case CellState.Player.PLAYER2:
		return "0";
	}
  }
}
