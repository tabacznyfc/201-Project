var currentTurn = 'X';

var position = [];
for (var i = 0; i < 9; i++) {
  position.push(0);
}

function checkWinX(position) {
  if (position[0] == 1 &&
      position[1] == 1 &&
      position[2] == 1 ||

      position[3] == 1 &&
      position[4] == 1 &&
      position[5] == 1 ||

      position[6] == 1 &&
      position[7] == 1 &&
      position[8] == 1 ||

      position[0] == 1 &&
      position[3] == 1 &&
      position[6] == 1 ||

      position[1] == 1 &&
      position[4] == 1 &&
      position[7] == 1 ||

      position[2] == 1 &&
      position[5] == 1 &&
      position[8] == 1 ||

      position[0] == 1 &&
      position[4] == 1 &&
      position[8] == 1 ||

      position[2] == 1 &&
      position[4] == 1 &&
      position[6] == 1) {
    return true;
  } else {
    return false;
  }
}

function checkWinO(position) {
  if (position[0] == 2 &&
      position[1] == 2 &&
      position[2] == 2 |

      position[3] == 2 &&
      position[4] == 2 &&
      position[5] == 2 ||

      position[6] == 2 &&
      position[7] == 2 &&
      position[8] == 2 ||

      position[0] == 2 &&
      position[3] == 2 &&
      position[6] == 2 ||

      position[1] == 2 &&
      position[4] == 2 &&
      position[7] == 2 ||

      position[2] == 2 &&
      position[5] == 2 &&
      position[8] == 2 ||

      position[0] == 2 &&
      position[4] == 2 &&
      position[8] == 2 ||

      position[2] == 2 &&
      position[4] == 2 &&
      position[6] == 2) {
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

function handleTurn(event) {
  console.log(currentTurn + '\'s turn.');
  if (position[event.target.id] === 1 ||
      position[event.target.id] === 2) {
    return;
  } else if (currentTurn === 'X') {
    position[event.target.id] = 1;
    console.log('event.target.id = ' + event.target.id);
    console.log('value of move = ' + position[event.target.id]);
    var moveX = document.getElementById(event.target.id);
    moveX.setAttribute('src', 'images/x.png');
    console.log(moveX);

    currentTurn = 'O';
  } else if (currentTurn === 'O') {
    position[event.target.id] = 2;
    var moveO = document.getElementById(event.target.id);
    moveO.setAttribute('src', 'images/o.png');
    console.log(moveO);
    currentTurn = 'X';
  }

  if (checkWinX(position)) {
    window.setTimeout(alert('X wins!'), 100);
    reset();
  }

  if (checkWinO(position)) {
    window.setTimeout(alert('O wins!'), 100);
    reset();
  }
  
  console.log(position);
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

var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', handleHover);

function handleHover(event) {
  var navmenu = document.getElementById('navMenu');
  navmenu.setAttribute('display', 'block');

  //visibility hidden?
}
