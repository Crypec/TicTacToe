<?php
//INDEX.PHP
// INDEX.* wird automatisch vom Webserver bei Betreten des Verzeichnises angezeigt
$nl="<BR>\n";//STD-Newline

echo "<H2>Verzeichnisinhalt:</H2>";
$me=basename(__FILE__);// diese Datei hier

echo "<HR>".$nl;
$dir=".";
if (is_dir($dir)) {
    if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== false) {
			//Verzeichniseintrag
			
			if(preg_match ( "/.*\.htm/i" , $file) ){
				//HTML-Datei als Link
				echo'<a href="'.$file.'">'.$file."</a>".$nl;
			}else{
			 if(is_dir($file) ){
				 //Verzeichnisname
				 if($file!=="."){
					// aktuelles Verzeichnis ignorieren
					echo'<a href="'.$file.'">'.$file."/</a>".$nl; 
				 }
			 }else{
				 if($me==$file){
					 //aktuelle Datei - z.B. index.php ignorieren
					 // NOP
				 }else{
				  // nur Textinformation
				  echo $file.$nl;
				 }
			 }
			}

        }
        closedir($dh);
    }
}



?>