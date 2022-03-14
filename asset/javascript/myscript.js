//quanti chilometri vuole percorrere?
// //quanti anni ha?
// //L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo


let nome= document.getElementById("nomeCognome");
console.log(nome);

let chilometri=document.getElementById("chilometri");
console.log(chilometri);

let eta=document.getElementById("eta");
console.log(eta);

let bottoneGenera=document.getElementById("bottoneShow");
console.log(bottoneGenera);

let tabella=document.getElementById("notaSelect");

let nomeTabella= document.getElementById("nomePasseggero")

let sconto=document.getElementById("offerta")

let prezzoScontato=document.getElementById("prezzoScontato");

bottoneGenera.addEventListener("click",
    function(){
        console.log(nome.value, chilometri.value, eta.value);

        nomeTabella.innerHTML=nome.value;

        if(eta.value ==`Meno-di-18`){
            sconto.innerHTML=`sconto del 20% `;
            prezzoScontato.innerHTML=`${(chilometri.value * 0.21) * 0.80} €`
        }else if(eta.value ==`Over-65`){
            sconto.innerHTML=`sconto del 40% `;
            prezzoScontato.innerHTML=`${(chilometri.value * 0.21) * 0.60} €`
        }else{
            sconto.innerHTML=`nessuno sconto `;
            prezzoScontato.innerHTML=`${chilometri.value * 0.21} €`
        }

        
        tabella.classList.remove("d-none");
    }
)