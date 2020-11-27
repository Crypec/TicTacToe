
function render3D(aktParent, childId, newContent,depth){
	let erg=false;
	if(depth >100){
		alert("view:render3D: killed");
		erg=false;
		return erg;
	}
	
    if(aktParent==null){
		erg=false;
		return erg;
	}
	
	if ((aktParent.hasAttribute("id")) ){
		if (aktParent.id==childId ) {
			aktParent.innerHTML=newContent;
			//console.log("updated:"+childId+"\n"+newContent+"\n"+depth);
			erg=true;
			return erg;
		}
	}

	let l=aktParent.children.length;	
	for(let i=0; i<l;i++){//<TR>...<TD id="00#00"
		//console.log(i+"\n"+aktParent.tagName+":"+childId+":"+depth);
		if( render3D(aktParent.children[i],childId, newContent,depth+1)){
		 erg=true;
		 break;
		};	 
	 }
	 if(aktParent==null) erg=false; 
	 //console.log("finished "+aktParent.tagName);
	 return erg;
}
function renderAll3D(){
	let newContent=Board.cellStateToString(CellState.FREE);
	let b=new Board();
	let size=b.cells[0].length;
	for(var T=0;T<size;T++){
		TStr="T"+("00"+(T+1)).slice(-2);
		for(var y=0;y<size;y++){
			yStr=("00"+y).slice(-2);
			for(var x=0;x<size;x++){
				xStr=("00"+x).slice(-2);
				aktP=document.getElementById(TStr);
				render3D(aktP, yStr+"#"+xStr, newContent,0)
			}
		}
	}
	
}


