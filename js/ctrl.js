const GAME_STATE_TAG = "GAMEBOARD";

function init() {
  const board = new Board();
  document.getElementById(GAME_STATE_TAG).value = JSON.stringify(board);
}

function ctrl(evnt) {
  const game = loadGameState();

  const { x, y } = parseEventID(evnt.id);
	// FIXME(Simon): Throws exception if cell is not free.
	// FIXME(Simon): This should not fail silently!
	game.setPlayer(x, y);
	render(game);
  if (game.hasWinner()) {
	const winner = Board.cellStateToString(game.current);
	alert(`Game has Winner ${winner}`);
	reset();
	return;
  } else if (game.isFull()) {
	alert("Board is full :c!");
	return;
  }

  // TODO(Simon): Toggle current Player Field in HTML
  game.togglePlayer();
  saveGameState(game);
}

function parseEventID(idStr) {
  const xStr = idStr.substring(0, 2);
  const yStr = idStr.substring(3, 5);
  return {
	x: parseInt(xStr),
	y: parseInt(yStr),
  };
}

function loadGameState() {
  const gameStr = document.getElementById(GAME_STATE_TAG).value;
  return Object.assign(new Board(), JSON.parse(gameStr));
}

function saveGameState(game) {
  document.getElementById(GAME_STATE_TAG).value = JSON.stringify(game);
}

function reset() {
  init();
  render(loadGameState());
}
