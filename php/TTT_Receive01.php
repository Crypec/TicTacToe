<?php
    $newline="\n";
    echo "<HTML>".$newline;
    echo " <BODY>".$newline;
    echo "  <TABLE border=1  >".$newline;
    echo "   <TR>".$newline;
    echo "    <TH >".$newline;
    echo "     Variable".$newline;
    echo "    </TH>".$newline;
    echo "    <TH >".$newline;
    echo "     Wert".$newline;
	echo "    </TH>".$newline;
    echo "   </TR>".$newline;

      // Bem: an diese Stelle später kommt auf jeden Fall einer Sicherheitsüberprüfung
      // z.B. ob die übergebene Variable überhaut erwartet wird
      // und ob versteckte Sonderzechen "<" oder "SELECT *" mitgegeben wurden

    foreach ($_POST as $k=>$v) {
       // echo $_POST["XName01"];
     echo "   <TR>".$newline;
	 echo "    <TD bgcolor=#C0C0C0>".$newline;
     echo "     ".$k.$newline;
     echo "    </TD>".$newline;

	 echo "    <TD bgcolor=#909090>".$newline;
     
	 if( is_array($v)){
	    foreach ($v as $ka=>$va){
			echo "     ".$ka.":".$va;			
		}
	 }else{
	  echo "     ".$v.$newline;
	 }
	 echo "    </TD>".$newline;
     echo "   </TR>".$newline;
    }


    echo "  </Table>".$newline;
    echo " </BODY>".$newline;
    echo "</HTML>".$newline;
?>
