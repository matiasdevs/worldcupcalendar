function createGame(player1, hour, player2){
  return `
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
      createCard('22/11', 'terça',
        createGame('argentina', '16:00', 'saudi arabia')
        ) +
      createCard('24/11', 'quinta',
        createGame('brazil', '16:00', 'serbia')
        ) +
      createCard('26/11', 'sabado',
        createGame('argentina', '16:00', 'mexico')
        ) +
      createCard('28/11', 'segunda',
        createGame('brazil', '13:00', 'switzerland')
        ) +
      createCard('30/11', 'quarta',    
        createGame('poland', '16:00', 'argentina')
        ) +
      createCard('02/12', 'sexta',
        createGame('cameroon', '16:00', 'brazil')
        )
  ;

let isBlue = true;
let isYellow = false;
let changeColor = document.querySelector('body');

  document.querySelector('#yellow').addEventListener('click', function(){
    changeColor.classList.remove('green');
    changeColor.classList.remove('blue');
    isBlue = !isBlue;
  })
  document.querySelector('#blue').addEventListener('click', function(){
    changeColor.classList.remove('green');
    changeColor.classList.add('blue');
    isYellow = !isYellow;
  })
  document.querySelector('#green').addEventListener('click', function(){
    changeColor.classList.add('green');
    isBlue = !isBlue;
    })
  

