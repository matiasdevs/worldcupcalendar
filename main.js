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
        createGame('switzerland', '1 x 0', 'cameroon', 'fim do jogo') +
        createGame('uruguay', '0 x 0', 'south korea', 'fim do jogo') +
        createGame('portugal', '3 x 2', 'ghana', 'fim do jogo') +
        createGame('brazil', '2 x 0', 'serbia', 'fim do jogo')
        ) +
      createCard('25/11', 'sexta',
        createGame('wales', '0 x 2', 'iran', 'fim do jogo') +
        createGame('qatar', '1 x 3', 'senegal', 'fim do jogo') +
        createGame('netherlands', '1 x 1', 'ecuador', 'fim do jogo') +
        createGame('england', '0 x 0', 'united states', 'fim do jogo')
        ) +
      createCard('26/11', 'sabado',
        createGame('tunisia', '0 x 1', 'australia', 'fim do jogo') +
        createGame('poland', '2 x 0', 'saudi arabia', 'fim do jogo') +
        createGame('france', '2 x 1', 'denmark', 'fim do jogo') +
        createGame('argentina', '2 x 0', 'mexico', 'fim do jogo')
        ) +
      createCard('27/11', 'domingo',
        createGame('japan', '0 x 1', 'costa rica', 'fim do jogo') +
        createGame('belgium', '0 x 2', 'morocco', 'fim do jogo') +
        createGame('croatia', '4 x 1', 'canada', 'fim do jogo') +
        createGame('spain', '1 x 1', 'germany', 'fim do jogo')
        ) +
      createCard('28/11', 'segunda',
        createGame('cameroon', '3 x 3', 'serbia', 'fim do jogo') +
        createGame('south korea', '2 x 3', 'ghana', 'fim do jogo') +
        createGame('brazil', '1 x 0', 'switzerland', 'fim do jogo') +
        createGame('portugal', '2 x 0', 'uruguay', 'fim do jogo')
        ) +
      createCard('29/11', 'terça',
        createGame('ecuador', '1 x 2', 'senegal', 'fim do jogo') +
        createGame('netherlands', '2 x 0', 'qatar', 'fim do jogo') +
        createGame('iran', '0 x 1', 'united states', 'fim do jogo') +
        createGame('wales', '0 x 3', 'england', 'fim do jogo')
        ) +
      createCard('30/11', 'quarta',    
        createGame('tunisia', '1 x 0', 'france', 'fim do jogo') +
        createGame('australia', '1 x 0', 'denmark', 'fim do jogo') +
        createGame('poland', '0 x 2', 'argentina', 'fim do jogo') +
        createGame('saudi arabia', '1 x 2', 'mexico', 'fim do jogo')
        ) +      
        createCard('01/12', 'quinta',    
        createGame('croatia', '0 x 0', 'belgium', 'fim do jogo') +
        createGame('canada', '1 x 2', 'morocco', 'fim do jogo') +
        createGame('japan', '2 x 1', 'spain', 'fim do jogo') +
        createGame('costa rica', '2 x 4', 'germany', 'fim do jogo')
        ) +
      createCard('02/12', 'sexta',
        createGame('south korea', '2 x 1', 'portugal', 'fim do jogo') +
        createGame('ghana', '0 x 2', 'uruguay', 'fim do jogo') +
        createGame('serbia', '2 x 3', 'switzerland', 'fim do jogo') +
        createGame('cameroon', '1 x 0', 'brazil', 'fim do jogo')
        ) +
      createCard('04/12', 'sabado',
        createGame('netherlands', '3 x 1', 'united states', 'fim do jogo') +
        createGame('argentina', '2 x 1', 'australia', 'fim do jogo')
        ) +
      createCard('05/12', 'domingo',
        createGame('france', '12:00', 'poland', 'oitavas de final') +
        createGame('england', '16:00', 'senegal', 'Oitavas de Final')
        ) +
      createCard('06/12', 'segunda',
        createGame('morocco', '12:00', 'spain', 'oitavas de final') +
        createGame('portugal', '16:00', 'switzerland', 'Oitavas de Final')
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
