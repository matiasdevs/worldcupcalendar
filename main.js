function createGame(player1, hour, player2){
  return `
    <li>
        <img src="assets/icon-${player1}.svg" alt="Imagem da bandeira de ${player1}">
        <strong>${hour}</strong>
        <img src="assets/icon-${player2}.svg" alt="Imagem da bandeira de ${player2}">
    </li>
  `
};

function createCard(date, day, games) {
return `   
      <div class="card">
        <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
      </div>
    `
};

document.querySelector('#app').innerHTML = `
<header> 
  <img src="assets/logo.svg" alt="Logo do NLW Copa"></header>
    <main id="cards">
      ${createCard('22/11', 'terça',
        createGame('argentina', '16:00', 'saudi arabia'),
        )}
      ${createCard('24/11', 'quinta',
        createGame('brazil', '16:00', 'serbia'),
        )}
      ${createCard('26/11', 'sabado',
        createGame('argentina', '16:00', 'mexico'),
        )}
      ${createCard('28/11', 'segunda',
      createGame('brazil', '13:00', 'switzerland')
        )}
      ${createCard('30/11', 'quarta',    
      createGame('poland', '16:00', 'argentina')
        )}
      ${createCard('02/12', 'sexta',
      createGame('cameroon', '16:00', 'brazil')
        )}
      )}
    </main>
  `;