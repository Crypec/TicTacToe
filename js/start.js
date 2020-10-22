function isValid(b){
	 var x1=document.getElementById("symbolX").value;
	 var x2=document.getElementById("symbol0").value;
	 if((b==x1 )|| (b ==x2 ) ){
		return true;
	}else{
		return false;
	}
}

// init game
function startTTT(){
	//TEST alert("#Spiel gestartet");
	// Variablen (guter Stil)
	var err=false;
	var x1="";
	var x2="";
	var a1="";
	
	// Reset
	document.getElementById("errMsg").innerHTML="";
	document.getElementById("Msg").innerHTML="";
	// Spielfeld
	// kein Reset, evtl. angefangene Spiele bleibenn bestehen"
	

	if(err==false){
	 // Test, ob unterschiedliche Spielsteine
	 x1=document.getElementById("symbolX").value;
	 x2=document.getElementById("symbol0").value;
	 if(x1.toLowerCase() == x2.toLowerCase()){
		document.getElementById("errMsg").innerHTML="Bitte w&auml;hlen Sie unterschiedliche Symbole für die Spieler";
		err=true;
		return;
	 }
	}

	a1=document.getElementById("aktuell").value;
	if(!err){
		 if(a1==""){
			 document.getElementById("aktuell").value=x1;
			 document.getElementById("Msg").innerHTML=x1+" ist am Zug";
			 err=true;
			 return;
		 }
	}
	if(!err){
		 //if((a1!=x1 )&& (a1!=x2 )){
		 if(! isValid(a1)){
			 document.getElementById("errMsg").innerHTML=" aktueller Spielstein "+a1+" ist ung&uuml;ltig!";
			 err=true;
			 return;
		 }
	}
	//ggf. pruefen, ob Anzahldifferenz der Spielsteine max 1
	
	// Abschluss
	if(err){
		 document.getElementById("errMsg").innerHTML=" unbekannter Fehler !";
		 err=true;
		 return;
	}else{
		document.getElementById("Msg").innerHTML=
		document.getElementById("aktuell").value+" ist am Zug";
	}
}

function resetTTT(){
	alert("#pending/wip");
}

