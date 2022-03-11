//quanti chilometri vuole percorrere?
let chilometri=prompt("quanta distanza in numero vuole percorrere?");
console .log (chilometri);
document.getElementById("chilometri").innerHTML=chilometri;

//quanti anni ha?
const eta=prompt("quanti anni ha?");
console .log (eta);
document.getElementById("eta").innerHTML=eta;
//calcolo del prezzo in base ai km (0.21 € al km)
prezzoAlKm=(0.21)
var prezzo=(chilometri) * (prezzoAlKm).toFixed(2);
console .log (prezzo); 
document.getElementById("prezzo").innerHTML=`<h4> Biglietto standart ${prezzo.toFixed(2)} € </h4>`;
//sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65
sconto1=("20")
let prezzoScontato1 = `<h4> ${(prezzo / 100).toFixed(2) * (sconto1) - (prezzo.toFixed(2))}  € </h4>`;
sconto2=("40")
let prezzoScontato2 = `<h4>${(prezzo / 100).toFixed(2)  * (sconto2)- (prezzo.toFixed(2))}  € </h4>`;

if(eta < 18){
    prezzoScontato1
    console .log (prezzoScontato1);
    document.getElementById("prezzoScontato1").innerHTML=prezzoScontato1;
}else if (eta => 65){
    prezzoScontato2
    console .log (prezzoScontato2);
    document.getElementById("prezzoScontato2").innerHTML=prezzoScontato2;
}else (eta > 18);{
    prezzo
}
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo

let bottone= document.getElementById("bottoneShow");
let nota= document.getElementById("notaSelect");


bottone.addEventListener ("click",
    
    function() {
    nota.classList.add("d_none");
    }
);