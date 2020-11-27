/*
attribs (based on loaded game.js)
Bord2D cells[3]
current
*/
/* const CellState = {
  Player: {
    PLAYER1: 0,
    PLAYER2: 1,
  },
  FREE: 2,
};
*/

class Board3D {
  constructor() {
	  /*
	 let c=new Board();
	 let b=new Board();
	 let b1=JSON.stringify(new Board());
	 let b1Obj=JSON.parse(b1);
	 let b2=JSON.stringify(new Board());
	 let b3=JSON.stringify(new Board());
	 let cStr='['+b1+','+b2+','+b3+']';
	 let cObj=JSON.parse(cStr);//kills indiv. prototyp-functions
	 */
	 let b0=new Board();
	 this.cells3D=new Array();
	 for(var i=0;i<b0.cells[0].length;i++){
		this.cells3D.push(b0);
		this.cells3D.push(new Board());
		this.cells3D.push(new Board());
	 }
    this.current = CellState.Player.PLAYER1;
  }


  isFull3D() {
	let check=false;
	check =this.cells3D[0].isFull();
	check &=this.cells3D[1].isFull();
	check &=this.cells3D[2].isFull();
	return check;
  }

  setPlayer3D(T, x, y) {
    if (this.cells3D[T].cells[y][x] != CellState.FREE) {
      throw new Error("Cell is not Free"+T+"/"+x+"/"+y);
    }
    this.cells3D[T].cells[y][x] = this.current;
  }

  togglePlayer3D() {
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
  hasWinner3D() {
    let hasWinner = false;
	//top-view-LEVELS
	//horizontal slice
    for (let T = 0; T < this.cells3D.length; T++) { 
      hasWinner |= this.cells3D[T].hasWinner() //this.checkRow(i);
    }
	
	//vertical slice
 /*   for (let i = 0; i < this.cells.length; i++) { //side-view-boards
      hasWinner |= this.checkCol(i);
    }
    // it makes only sense to check the diagonals only if gameBoard is a square
    if (this.cells.length == this.cells[0].length) { // diag-boards
      hasWinner |=
        this.checkDiagLeftToRightDown() || this.checkDiagLeftToRightUp();
    } */
    return hasWinner;
  }

  /**
	   checks each row for winner
	   example :: (0,0) (0,1) (0,2)
	*/
/*  checkRow(row) {
    const first = this.cells[row][0];
    if (first == CellState.FREE) return false;
    return !this.cells[row].some((elem) => {
      return first != elem;
    });
  }
*/
  /**
	   checks each column for winner
	   example :: (2,0) (2,1) (2,2)
	*/
/*  checkCol(col) {
    const first = this.cells[0][col];
    if (first == CellState.FREE) return false;
    for (let i = 0; i < this.cells.length; i++) {
      if (first != this.cells[i][col]) {
        return false;
      }
    }
    return true;
  }
*/
  /**
	   check diagonal from top left to bottom right
	   example :: (0,0) (1,1) (2,2)
	*/
/*  checkDiagLeftToRightDown() {
    const first = this.cells[0][0];
    if (first == CellState.FREE) return false;
    for (let i = 0; i < this.cells.length; i++) {
      if (first != this.cells[i][i]) {
        return false;
      }
    }
    return true;
  }
*/
  /**
	   check diagonal from bottom left to top right
	   example :: (2,0) (1,1) (0,2)
	*/
/*  checkDiagLeftToRightUp() {
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
*/
/*  static cellStateToString(cellState) {
    switch (cellState) {
      case CellState.FREE:
        return "#";
      case CellState.Player.PLAYER1:
        return "X";
      case CellState.Player.PLAYER2:
        return "0";
    }
  } */
}