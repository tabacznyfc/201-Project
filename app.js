var currentTurn = 'X';

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
  total += position[0];
  total += position[1];
  total += position[2];
  total += position[3];
  total += position[4];
  total += position[5];
  total += position[6];
  total += position[7];
  total += position[8];
  return total;
}

function isTie() {
  var total = addUp();
  console.log('total = ' + total);
  if (total >= 13) {
    alert('It\'s a tie!');
    reset();
  }
}

function handleTurn(event) {
  console.log(currentTurn + '\'s turn.');
  if (position[event.target.id] === 1 ||
      position[event.target.id] === 2) {
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
    window.setTimeout(alert('X wins!'), 100);
    reset();
  }

  if (checkWin(2)) {
    window.setTimeout(alert('O wins!'), 100);
    reset();
  }

  isTie();
}

function reset() {
  position = [];
  player = 'X';
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
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

function handleHover(event) {
  var navmenu = document.getElementById('navMenu');
  navmenu.setAttribute('display', 'block');

}
