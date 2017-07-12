var currentTurn = 'X';
var player1 = ['player1', 0, 'X'];
var player2 = ['player2', 0, 'O'];

var position = [];
for (var i = 0; i < 9; i++) {
  position.push(0);
}

function checkWin(x) {
  if (position[0] == x &&
      position[1] == x &&
      position[2] == x ||

      position[3] == x &&
      position[4] == x &&
      position[5] == x ||

      position[6] == x &&
      position[7] == x &&
      position[8] == x ||

      position[0] == x &&
      position[3] == x &&
      position[6] == x ||

      position[1] == x &&
      position[4] == x &&
      position[7] == x ||

      position[2] == x &&
      position[5] == x &&
      position[8] == x ||

      position[0] == x &&
      position[4] == x &&
      position[8] == x ||

      position[2] == x &&
      position[4] == x &&
      position[6] == x) {
    return true;
  } else {
    return false;
  }
}

for (var i = 0; i < 9; i++) {
  var imgIds = [];
  imgIds[i] = document.getElementById(i);
  imgIds[i].addEventListener('click', handleTurn);
}

function addUp() {
  var total = 0;
  for (var i = 0; i < 9; i++) {
    total += position[i];
  }

  return total;
}

function isTie() {
  var total = addUp();
  console.log('total = ' + total);
  if (total >= 13) {
    alert('It\'s a tie!');
    switchSides();
    reset();
  }
}

function handleTurn(event) {
  console.log(currentTurn + '\'s turn.');
  if (position[event.target.id] == true) {
    return;

  } else if (currentTurn === 'X') {
    position[event.target.id] = 1;
    var moveX = document.getElementById(event.target.id);
    moveX.setAttribute('src', 'images/x.png');
    console.log(moveX);
    currentTurn = 'O';

  } else if (currentTurn === 'O') {
    position[event.target.id] = 2;
    var moveO = document.getElementById(event.target.id);
    moveO.setAttribute('src', 'images/o.png');
    currentTurn = 'X';
  }

  if (checkWin(1)) {
    if (player1[2] === 'X') {
      player1[1]++;
      alert(player1[2] + ' wins!');
    } else {
      player2[1]++;
      alert(player1[2] + ' wins!');
    }

    switchSides();
    reset();
  }

  if (checkWin(2)) {
    if (player1[2] === 'O') {
      player1[1]++;
      alert(player1[2] + ' wins!');
    } else {
      player2[1]++;
      alert(player2[2] + ' wins!');
    }

    switchSides();
    reset();
  }

  var score1 = document.getElementById('player1Score');
  var score2 = document.getElementById('player2Score');
  score1.textContent(player1[1]);
  score2.textContent(player2[1]);
  console.log(player1[0] + '\'s score: ' + player1[1]);
  console.log(player2[0] + '\'s score: ' + player2[1]);

  isTie();
}

function reset() {
  position = [];
  for (var i = 0; i < 9; i++) {
    position.push(0);
  }

  for (i = 0; i < 9; i++) {
    var imgIds = [];
    imgIds[i] = document.getElementById(i);
    imgIds[i].setAttribute('src', '');
  }
}
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function switchSides() {
  if (player1[2] == 'X') {
    player1[2] = 'O';
    player2[2] = 'X';
  }  else {
    player1[2] = 'X';
    player2[2] = 'O';
  }

  var player1Side = document.getElementById('player2Side');
  var player2Side = document.getElementById('player2Side');
  player1Side.textContent(player1[2]);
  player2Side.textContent(player2[2]);
}

var box = [];
box[0] = document.getElementById('player1Box');
box[1] = document.getElementById('player2Box');
box[0].addEventListener('click', handlePlayerName(player1[0], 'player1Name'));
box[1].addEventListener('click', handlePlayerName(player2[0], 'player2Name'));

function handlePlayerName(player, id) {
  player = prompt('Type your name!');
  var name = document.getElementById(id);
  name.textContent(player);
}

function openNav() {
  document.getElementById('myNav').style.height = ' 100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

function handleHover(event) {
  var navmenu = document.getElementById('navMenu');
  navmenu.setAttribute('display', 'block');
}
