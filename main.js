let imie = prompt('Podaj Swoje Imie/Nick');
let nick = document.getElementById('nick').value = imie;
let polewynikow = document.getElementById('ktowygral');
let typ = document.getElementById('polegracz');
let ai = document.getElementById('poleai');
let gracz = document.getElementById('gracz').value = imie;

let wygrane = document.getElementById('wygrane');
let przegrane = document.getElementById('przegrane');

let wygraneAI = document.getElementById('wygraneAI');
let przegraneAI = document.getElementById('przegraneAI');

polewynikow.value = '';

let tab = Array(1, 2, 3);

let papierek = false;
let kamyczek = false;
let nozyczki = false;

let papierekai = false;
let kamyczekai = false;
let nozyczkiai = false;

function papier(){
    let typ = document.getElementById('polegracz');
    typ.style.backgroundImage = 'url(img/papier.png)';
    typ.style.backgroundRepeat = 'no-repeat';
    typ.style.backgroundSize = 'cover';
    papierek = true;
    AIRANDOM();
}
function kamien(){
    let typ = document.getElementById('polegracz');
    typ.style.backgroundImage = 'url(img/kamien.png)';
    typ.style.backgroundRepeat = 'no-repeat';
    typ.style.backgroundSize = 'cover';
    kamyczek = true;
    AIRANDOM();
}
function nozyce(){
    let typ = document.getElementById('polegracz');
    typ.style.backgroundImage = 'url(img/nozyce.png)';
    typ.style.backgroundRepeat = 'no-repeat';
    typ.style.backgroundSize = 'cover';
    nozyczki = true;
    AIRANDOM();
}

function AIRANDOM(){
    polewynikow.value = '';
    let wynik = tab[Math.floor(Math.random()*tab.length)];
       switch(wynik){
        case 1:
            ai.style.backgroundImage = 'url(img/papier.png)';
            ai.style.backgroundRepeat = 'no-repeat';
            ai.style.backgroundSize = 'cover';
            papierekai = true;
            wyniki();
            break;
        case 2:
            ai.style.backgroundImage = 'url(img/kamien.png)';
            ai.style.backgroundRepeat = 'no-repeat';
            ai.style.backgroundSize = 'cover';
            kamyczekai = true;
            wyniki();
            break;
        case 3:
            ai.style.backgroundImage = 'url(img/nozyce.png)';
            ai.style.backgroundRepeat = 'no-repeat';
            ai.style.backgroundSize = 'cover';
            nozyczkiai = true;
            wyniki();
            break;
        default:
            break;
       }
    }    


function wyniki(){
    if(papierek == true && papierekai == true){
        polewynikow.value = 'REMIS!';
        papierek = false;
        papierekai = false

    }
    else if(papierek == true && kamyczekai == true){
        polewynikow.value = nick + ' zdobywa punkt!';
        papierek = false;
        kamyczekai = false;
        wygrane.value++;
        przegraneAI.value++;
    }
    else if(papierek == true && nozyczkiai == true){
        polewynikow.value = 'AI zdobywa punkt!';
        papierek = false;
        nozyczkiai = false;
        wygraneAI.value++;
        przegrane.value++;
    }
    else if(kamyczek == true && kamyczekai == true){
        polewynikow.value = 'REMIS!';
        kamyczek = false;
        kamyczekai = false;
    }
    else if(kamyczek == true && papierekai == true){
        polewynikow.value = 'AI zdobywa punkt!';
        papierekai = false
        kamyczek = false;
        wygraneAI.value++;
        przegrane.value++;
    }
    else if(kamyczek == true && nozyczkiai == true){
        polewynikow.value = nick + ' zdobywa punkt!';
        kamyczek = false;
        nozyczkiai = false;
        wygrane.value++;
        przegraneAI.value++;
    }
    else if(nozyczki == true && nozyczkiai == true){
        polewynikow.value = 'REMIS!';
        nozyczki = false;
        nozyczkiai = false;
    }
    else if(nozyczki == true && kamyczekai == true){
        polewynikow.value = 'AI zdobywa punkt!';
        kamyczekai = false;
        nozyczki = false;
        wygraneAI.value++;
        przegrane.value++;
    }
    else if(nozyczki == true && papierekai == true){
        polewynikow.value = nick + ' zdobywa punkt!';
        papierekai = false
        nozyczki = false;
        wygrane.value++;
        przegraneAI.value++;
    }
}


