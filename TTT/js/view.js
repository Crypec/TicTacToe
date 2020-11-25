function render(game) {
  for (let x = 0; x < game.cells.length; x++) {
    for (let y = 0; y < game.cells[0].length; y++) {
      const idTag = `0${x}#0${y}`;
      document.getElementById(idTag).innerHTML = Board.cellStateToString(
        game.cells[y][x]
      );
    }
  }
}
