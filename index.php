<!DOCTYPE html>
<html>
  <head>
   <link rel="stylesheet" id="style01" href="css/Goldau3D.css" /> 
   <link rel="stylesheet" id="style01" href="css/Goldau3DGrid01.css" /> 
   <link rel="stylesheet" id="style01" href="css/Goldau3DColors01.css" /> 
   <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
   -->
    <script language="javascript" src="js/game.js"></script>
	    <script language="javascript" src="js/game3D.js"></script>
    <script language="javascript" src="js/ctrl3D.js"></script>
    <script language="javascript" src="js/view.js"></script>
	    <script language="javascript" src="js/view3D.js"></script>

    <!-- <script language="javascript" src="js/Goldau01.js"></script> -->
  </head>
 <body id="background" ><!-- onload="init()"  init after loading finished, see below -->
  <FORM method=POST action="php/TTT_Receive02.php">
   <!-- ## keine freie Symbolwahl durch Spieler -->
   <input type="xhidden" id="GAMEBOARD" name="GAMEBOARD" 
   <?php include("php/globalValues.php");
   $datei=file("data/".$GAMEBOARDDATAFILE);  
   $TTTstatus=$datei[0];
   echo "value='".$TTTstatus."'"; 
   ?> 
   size=80 /><!-- ##disabled Gr -->

   <BR>
   <input type="button" onClick="reset();" id="resetButton" value="reset" /><BR>

   <div id="all">
    <table class="T01" id="T01">
      <tr >
        <td class="Sp01 Z01 D01" id="00#00" onClick="ctrl(this)">T</td>
        <td class="Sp02 Z01" id="00#01" onClick="ctrl(this)">I</td>
        <td class="Sp03 Z01 D02" id="00#02" onClick="ctrl(this)">C</td>
      </tr>
      <tr>
        <td class="Sp01 Z02" id="01#00" onClick="ctrl(this)">t</td>
        <td class="Sp02 Z02 D01 D02" id="01#01" onClick="ctrl(this)">a</td>
        <td class="Sp03 Z02" id="01#02" onClick="ctrl(this)">c</td>
      </tr>
      <tr>
        <td class="Sp01 Z03 D02" id="02#00" onClick="ctrl(this)">T</td>
        <td class="Sp02 Z03" id="02#01" onClick="ctrl(this)">O</td>
        <td class="Sp03 Z03 D01" id="02#02" onClick="ctrl(this)">E</td>
      </tr>
    </table>
	<table class="T02" id="T02">
      <tr>
        <td class="Sp01 Z01 D01" id="00#00" onClick="ctrl(this)">T</td>
        <td class="Sp02 Z01" id="00#01" onClick="ctrl(this)">I</td>
        <td class="Sp03 Z01 D02" id="00#02" onClick="ctrl(this)">C</td>
      </tr>
      <tr>
        <td class="Sp01 Z02" id="01#00" onClick="ctrl(this)">t</td>
        <td class="Sp02 Z02 D01 D02" id="01#01" onClick="ctrl(this)">a</td>
        <td class="Sp03 Z02" id="01#02" onClick="ctrl(this)">c</td>
      </tr>

      <tr>
        <td class="Sp01 Z03 D02" id="02#00" onClick="ctrl(this)">T</td>
        <td class="Sp02 Z03" id="02#01" onClick="ctrl(this)">O</td>
        <td class="Sp03 Z03 D01" id="02#02" onClick="ctrl(this)">E</td>
      </tr>
    </table>
	<table class="T03" id="T03">
      <tr>
        <td class="Sp01 Z01 D01" id="00#00" onClick="ctrl(this)">T</td>
        <td class="Sp02 Z01" id="00#01" onClick="ctrl(this)">I</td>
        <td class="Sp03 Z01 D02" id="00#02" onClick="ctrl(this)">C</td>
      </tr>

      <tr>
        <td class="Sp01 Z02" id="01#00" onClick="ctrl(this)">t</td>
        <td class="Sp02 Z02 D01 D02" id="01#01" onClick="ctrl(this)">a</td>
        <td class="Sp03 Z02" id="01#02" onClick="ctrl(this)">c</td>
      </tr>

      <tr>
        <td class="Sp01 Z03 D02" id="02#00" onClick="ctrl(this)">T</td>
        <td class="Sp02 Z03" id="02#01" onClick="ctrl(this)">O</td>
        <td class="Sp03 Z03 D01" id="02#02" onClick="ctrl(this)">E</td>
      </tr>
    </table>
   </DIV>
   <input type="submit" id="button01" value="senden..." />
  </FORM>
  <script>
   // init after loading-process finished
   init();
  </script>
 </body>
</html>
