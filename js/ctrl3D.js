const GAME_STATE_TAG = "GAMEBOARD";

function init() {

  const board = new Board3D();
  saveGameState3D(board);//  document.getElementById(GAME_STATE_TAG).value = JSON.stringify(board);

}

function ctrl(evnt) {

  const game = loadGameState3D();

  const {T, x, y } = parseEventID(evnt);//.id);
  // FIXME(Simon): Throws exception if cell is not free.
  // FIXME(Simon): This should not fail silently!
  game.setPlayer3D(T,x, y);

  // TODO(Simon): Toggle current Player Field in HTML
  let _parent=document.getElementById("T0"+(T+1));//##leadin ZERO: ok <100
  render3D(_parent,("00"+y).slice(-2)+"#"+("00"+x).slice(-2),Board.cellStateToString(game.current),0);//##leadin ZERO !
  
  if (game.hasWinner3D()) {
    const winner = Board.cellStateToString(game.current);
    alert(`Game has Winner ${winner}`);// als msg=>html, ohne alert()
    reset3D();
    return;
  } else if (game.isFull3D()) {
    alert("Board is full :c!");
    return;
  }
  
  game.togglePlayer3D();
  saveGameState3D(game);
}
function getOuterParentID(obj){
	if(obj.tagName.toUpper=="BODY") return -1;
	if(obj.parentNode.hasAttribute("id")){
		return obj.parentNode.id;
	}else{
		return getOuterParentID(obj.parentNode);
	}
}
function parseEventID(obj) {
  idStr=obj.id;	
  const xStr = idStr.substring(3, 5);
  const yStr = idStr.substring(0, 2);
  //const TStr=obj.parentNode.parentNode.parentNode.id.substring(1,2);//upper Table ID
  const TStr=getOuterParentID(obj).substr(1,2)-1;"01"-1

  return {
	T: parseInt(TStr),
    x: parseInt(xStr),
    y: parseInt(yStr),	
  };
}
function getType(obj){
	return ( (Array.isArray(obj) ?"[]":"")+(typeof obj) );
}

function loopThrough(obj){
  for(var key in obj){
    // skip loop if the property is from prototype
    if(!obj.hasOwnProperty(key)) continue;
    
    if(typeof obj[key] !== 'object'){
    	//your code
      console.log(key+" = "+obj[key]);
    } else {
		console.log("dive:"+key);
      loopThrough(obj[key]);
    }
  }
}

function deepCopyValues(struct,data){
	//loopThrough(struct);
	for(var key in struct){
	  if(!struct.hasOwnProperty(key)) continue;//skip
	  if(typeof struct[key] !== 'object'){
    	//your code
       //console.log(key+" <= "+data[key]);
	   struct[key]=data[key];
     } else {
		//console.log("...dive:"+key);
        deepCopyValues(struct[key],data[key]);
     }  
	}
	return;
}
function loadGameState3D() {
  const gameStr = document.getElementById(GAME_STATE_TAG).value;
  let board = new Board3D();
  let tmp = new Board3D();

  tmp=Object.assign(new Board3D(), JSON.parse(gameStr));

  deepCopyValues(board,tmp);

  return board;
}

function saveGameState3D(game) {

  document.getElementById(GAME_STATE_TAG).value = JSON.stringify(game);
}

function reset3D() { 
  init();//reset data
  // UI
  renderAll3D();
 //## render(loadGameState());
}
