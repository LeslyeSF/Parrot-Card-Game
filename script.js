let options = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let cards = [];

function gamestart(){

    let num_card = 0;
    let test = true;
    while(test){
        num_card = parseInt(prompt("Com quantas cartas você quer jogar?"));
        if(num_card >= 4 && num_card <= 14 && num_card%2 === 0){
            test = false;
        }
    }

    create_shuffle_cards(num_card);

    let areacards = document.querySelector("main");
    for(let i = 0; i<num_card; i++){
        areacards.innerHTML += `
        <div class="card" data-identifier="card">
        <div class="front-face" data-identifier="front-face">
            <img src="Imagens/front.png" />
        </div>
        <div class="back-face" data-identifier="back-face">
            <img src="Imagens/${cards[i]}.gif" />
        </div>
        </div>
        `;
    }
    
}

function create_shuffle_cards(num_card){
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















gamestart();
