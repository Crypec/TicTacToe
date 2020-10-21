   function changeCSS(){
    var css_files=["Torben_TTT_Pad.css", 
	"TTT_Pad_Andrey.css",	
	"TTT_Pad_Can.css",	
	"TTT_Pad_Laurin.css",	
	"TTT_Pad_Style_Daniel.css",	
	"Goldau01.css"];
	
	for (var i = 0; i < css_files.length; i++) {
		//    document.getElementById("style01").href="css/"+"TTT_Pad_Can.css";

		document.getElementById("style01").href="css\/"+css_files[i];
		alert(css_files[i]+" \n weiter ...");//PAUSE
	}
   }