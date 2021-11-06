function gamestart(){
    let num_card = 0;
    let test = true;

    while(test){
        num_card = parseInt(prompt("Com quantas cartas você quer jogar?"));
        if(num_card >= 4 && num_card <= 14 && num_card%2 === 0){
            test = false;
        }
    }
    let cards = document.querySelector("main");
    for(let i = 0; i<num_card; i++){
        cards.innerHTML += `
        <div class="card" data-identifier="card">
        <div class="front-face" data-identifier="front-face">
            <img src="Imagens/front.png" />
        </div>
        <div class="back-face" data-identifier="back-face">
        </div>
        </div>
        `;
    }
}
gamestart();
