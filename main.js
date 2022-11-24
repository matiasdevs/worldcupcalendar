function createGame(player1, hour, player2, finished){
  let finalizado = document.querySelectorAll('.finalizado');
  let valorFinalizado = finalizado.typeof;
  if (valorFinalizado == undefined) {
    finalizado = '';
  }
  return `
    <div class="finalizado">
    <h3><span>${finished}</span></h3>
    </div>
    <li>
        <img src="assets/icon-${player1}.svg" alt="Imagem da bandeira de ${player1}">
        <strong>${hour}</strong>
        <img src="assets/icon-${player2}.svg" alt="Imagem da bandeira de ${player2}">
    </li>
    <div class='names'>
      <h1>${player1}</h1>
      <h1>${player2}</h1>
    </div>

  `
};

let delay = -0.1;
function createCard(date, day, games) {
  delay = delay + 0.1;
return `   
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
      </div>
    `
};

document.querySelector('#cards').innerHTML =
      createCard('20/11', 'domingo',
        createGame('qatar', '0 x 2', 'ecuador', 'fim do jogo')
        ) +
        createCard('21/11', 'segunda',
        createGame('england', '6 x 2', 'iran', 'fim do jogo') + 
        createGame('senegal', '0 x 2', 'netherlands', 'fim do jogo') +
        createGame('united states', '1 x 1', 'wales', 'fim do jogo')
        ) +
      createCard('22/11', 'terça',
        createGame('argentina', '1 x 2', 'saudi arabia', 'fim do jogo') +
        createGame('denmark', '0 x 0', 'tunisia', 'fim do jogo') +
        createGame('mexico', '0 x 0', 'poland', 'fim do jogo') +
        createGame('france', '4 x 1', 'australia', 'fim do jogo')
        ) +
      createCard('23/11', 'quarta',
        createGame('morocco', '0 x 0', 'croatia', 'fim do jogo') +
        createGame('germany', '1 x 2', 'japan', 'fim do jogo') +
        createGame('spain', '7 x 0', 'costa rica', 'fim do jogo') +
        createGame('belgium', '1 x 0', 'canada', 'fim do jogo')
        ) +
      createCard('24/11', 'quinta',
        createGame('switzerland', '07:00', 'cameroon', 'a jogar') +
        createGame('uruguay', '10:00', 'south korea', 'a jogar') +
        createGame('portugal', '13:00', 'ghana', 'a jogar') +
        createGame('brazil', '16:00', 'serbia', 'a jogar')
        ) +
      createCard('25/11', 'sexta',
        createGame('wales', '07:00', 'iran', 'a jogar') +
        createGame('qatar', '10:00', 'senegal', 'a jogar') +
        createGame('netherlands', '13:00', 'ecuador', 'a jogar') +
        createGame('england', '16:00', 'united states', 'a jogar')
        ) +
      createCard('26/11', 'sabado',
        createGame('tunisia', '07:00', 'australia', 'a jogar') +
        createGame('poland', '10:00', 'saudi arabia', 'a jogar') +
        createGame('france', '13:00', 'denmark', 'a jogar') +
        createGame('argentina', '16:00', 'mexico', 'a jogar')
        ) +
      createCard('27/11', 'domingo',
        createGame('japan', '07:00', 'costa rica', 'a jogar') +
        createGame('belgium', '10:00', 'morocco', 'a jogar') +
        createGame('croatia', '13:00', 'canada', 'a jogar') +
        createGame('spain', '16:00', 'germany', 'a jogar')
        ) +
      createCard('28/11', 'segunda',
        createGame('cameroon', '07:00', 'serbia', 'a jogar') +
        createGame('south korea', '10:00', 'ghana', 'a jogar') +
        createGame('brazil', '13:00', 'switzerland', 'a jogar') +
        createGame('portugal', '16:00', 'uruguay', 'a jogar')
        ) +
      createCard('29/11', 'terça',
        createGame('ecuador', '07:00', 'senegal', 'a jogar') +
        createGame('netherlands', '10:00', 'qatar', 'a jogar') +
        createGame('iran', '13:00', 'united states', 'a jogar') +
        createGame('wales', '16:00', 'england', 'a jogar')
        ) +
      createCard('30/11', 'quarta',    
        createGame('tunisia', '07:00', 'france', 'a jogar') +
        createGame('australia', '10:00', 'denmark', 'a jogar') +
        createGame('poland', '13:00', 'argentina', 'a jogar') +
        createGame('saudi arabia', '16:00', 'mexico', 'a jogar')
        ) +      
        createCard('01/12', 'quinta',    
        createGame('croatia', '07:00', 'belgium', 'a jogar') +
        createGame('canada', '10:00', 'morocco', 'a jogar') +
        createGame('japan', '13:00', 'spain', 'a jogar') +
        createGame('costa rica', '16:00', 'germany', 'a jogar')
        ) +
      createCard('02/12', 'sexta',
        createGame('south korea', '07:00', 'portugal', 'a jogar') +
        createGame('ghana', '10:00', 'uruguay', 'a jogar') +
        createGame('serbia', '13:00', 'switzerland', 'a jogar') +
        createGame('cameroon', '16:00', 'brazil', 'a jogar')
        )
  ;


let changeColor = document.querySelector('body');

function removeColor(color){
  changeColor.classList.remove(color)
}

function addColor(color){
  changeColor.classList.add(color)
}

  document.querySelector('#yellow').addEventListener('click', function(){
    removeColor('green');
    removeColor('blue');
  })
  document.querySelector('#blue').addEventListener('click', function(){
    removeColor('green');
    addColor('blue');
  })
  document.querySelector('#green').addEventListener('click', function(){
    addColor('green');
    })
