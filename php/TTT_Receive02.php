<?	include("globalValues.php");
	$doc_msg=$_POST["GAMEBOARD"];
	$doc_msg=stripslashes($doc_msg);// unescape "
	$fp=fopen("../data/".$GAMEBOARDDATAFILE,"w");
	fwrite($fp,$doc_msg);
	fclose($fp);
	$extra = '../index.php';
	
	//PHP Umleitung 
	// es darf zuvor NICHTS ausgegeben werden
	// auch kein Leerzeichen vor <?php !!
	header("Location: $extra");
	exit;
?>