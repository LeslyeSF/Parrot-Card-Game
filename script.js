let options = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let cards = [];
let name_cards_selected= [];
let num_card = 0, plays = 0;

function gamestart(){
    let test = true;
    while(test){
        num_card = parseInt(prompt("Com quantas cartas você quer jogar?"));
        if(num_card >= 4 && num_card <= 14 && num_card%2 === 0){
            test = false;
        }
    }

    create_shuffle_cards();

    let areacards = document.querySelector("main");
    for(let i = 0; i<num_card; i++){
        areacards.innerHTML += `
        <div class="card" data-identifier="card" onclick="selectedcard(this,${i})">
            <div class="front-face" data-identifier="front-face">
                <img src="Imagens/${cards[i]}.gif" />
            </div>
            <div class="back-face" data-identifier="back-face">
                <img src="Imagens/front.png" />
            </div>
        </div>
        `;
    }  
}

function create_shuffle_cards(){
    let counter = 0;
    for(let i = 0; i < num_card; i+=2){
        cards[i] = options[counter];
        cards[i + 1] = options[counter];
        counter++;
    }

    cards.sort(comparator);
}

function comparator() { 
	return Math.random() - 0.5; 
}

function selectedcard(selected_card, num){
        if(document.querySelectorAll(".selected").length < 2){
            selected_card.classList.add("selected");
            let c_selected = document.querySelectorAll(".selected");
            if(c_selected.length == 1){
                name_cards_selected[0] = cards[num];
            }else if(c_selected.length == 2){
                name_cards_selected[1] = cards[num];
                setTimeout(verifymatch, 1000, c_selected);
            }
        }
}

function verifymatch(c_selected){
   if(name_cards_selected[0] == name_cards_selected[1]){
        c_selected[0].classList.remove("selected");
        c_selected[1].classList.remove("selected");
        c_selected[0].classList.add("match");
        c_selected[1].classList.add("match");
   } else{
        c_selected[0].classList.remove("selected");
        c_selected[1].classList.remove("selected");
   }
   plays++;
   endgame();
}

function endgame(){
    if(document.querySelectorAll(".match").length === num_card){
        alert("Você ganhou em "+plays+" jogadas!");
    }
}
gamestart();
