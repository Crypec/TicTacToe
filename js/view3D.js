function allDescendants(node) {
  for (var i = 0; i < node.childNodes.length; i++) {
    var child = node.childNodes[i];
    allDescendants(child);
    removeTest(child);
  }
}
//WIP toDO rekursive 
function render3D(parentId,childId,newContent) {

	//update only givven child.id
	// inner parentID-area
	p=document.getElementById(parentId);// "T01"
	for(i=0; i<p.children.length;i++){//<TR>...<TD id="00#00"
	 if (! (p.children[i].hasAttribute("id")) ) continue;//skip{
	 if (!(p.children[i].id==childId ) ) continue;//skip 
	 p.children[i].innerHTML=newContent;	 
	}
	alert(parentId+"\n"+childId+"\n not found");
	

}

