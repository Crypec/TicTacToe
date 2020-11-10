document.addEventListener('DOMContentLoaded',function(){
        document.querySelector('#spielfeld').addEventListener('click', feldMarkiert); // Überprüft ob die Buttons gedrückt werden und schickt es der Funktion feldMarkiert

        // Variablen
        var momentanerSpieler=0, 
        spieler = [ 'x', 'o'],
        gewinner,
        fertig, 
        felder = document.querySelectorAll('#spielfeld button'), 
        text = document.querySelector('#Text');

        function feldMarkiert(e){ // Funktion überprüft ob das feld markiert ist
            var feld = e.target;
            feld.setAttribute('aria-label', spieler[momentanerSpieler]);
            feld.setAttribute('disabled','disabled');
            momentanerSpieler = 1 - momentanerSpieler;
            text.innerText = 'Spieler ' + spieler[momentanerSpieler] + ' ist am Zug.';
            ueberpruefeObFertig();
        }
        // Funktion überprüft ob die Runde zu ende ist
        function ueberpruefeObFertig(){
            var felder = document.querySelectorAll('#spielfeld button'), voll = true;
            // Überprüft ob das Spielfeld voll ist
            for (var i = 0; i < felder.length; i++){
                if (!felder[i].hasAttribute('disabled')){
                    voll = false;
                }
            }

            // Überprüft ob jemand gewonnen hat
            for(i=0;i<3;i++){
                // 3 senkrecht
                if(felder[0+i].getAttribute('aria-label') !=""
                    && felder[0+i].getAttribute('aria-label') == felder [3+i].getAttribute('aria-label') 
                    && felder[3+i].getAttribute('aria-label') == felder [6+i].getAttribute('aria-label')
                )   {
                        gewinner = felder[0+i].getAttribute('aria-label');
                        highlighted([felder[i], felder[3+i], felder[6+i]]);
                    }
                // 3 waagrecht
                if (felder[i*3].getAttribute('aria-label')!= ""
                    && felder[i*3].getAttribute('aria-label') == felder[i*3+1].getAttribute('aria-label')
                    && felder[i*3+1].getAttribute('aria-label') == felder[i*3+2].getAttribute('aria-label')
                )   {
                        gewinner = felder[i*3].getAttribute('aria-label');
                        highlighted([felder[i*3], felder[i*3+1], felder[i*3+2]]);
                    }
                
                // Diagonal links oben nach rechts unten
                if (felder[0].getAttribute('aria-label')!= ""
                && felder[0].getAttribute('aria-label') == felder[4].getAttribute('aria-label')
                && felder[4].getAttribute('aria-label') == felder[8].getAttribute('aria-label')
                )   {
                        gewinner = felder[0].getAttribute('aria-label');
                        highlighted([felder[0], felder[4], felder[8]]);
                    }

                // Diagonal rechts oben nach links unten
                if (felder[2].getAttribute('aria-label')!= ""
                && felder[2].getAttribute('aria-label') == felder[4].getAttribute('aria-label')
                && felder[4].getAttribute('aria-label') == felder[6].getAttribute('aria-label')
                )   {
                        gewinner = felder[2].getAttribute('aria-label');
                        highlighted([felder[2], felder[4], felder[6]]);
                    }  
                
                // Spiel fertig?
                if(voll || gewinner){
                        fertig = true;
                        if(gewinner == 'x' || gewinner == 'o'){
                            text.innerText = "Das Spiel ist zu Ende, weil der Spieler " + gewinner + " gewonnen hat!";
                            text.className = "erfolg";  
                        }
                        else{
                            // Spiel zu Ende da alle Felder belegt sind
                            text.innerText="Unentschieden";
                            text.className = "warnung";
                        }
                        //Neues Spiel?
                        var neuesSpiel = confirm("Neues Spiel?","");
                        if (neuesSpiel == true){
                            location.reload();
                            return false;
                        }
                    }
            }

            function highlighted(zellen){
                for (var i=0; i < 3; i++){
                    zellen[i].classList.add("highlighted")
                }
            }
        }
    }
    );