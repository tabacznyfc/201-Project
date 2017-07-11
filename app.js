var currentTurn = 'O';

var position = [];
for (var i = 0; i < 9; i++) {
  position.push(0);
}

function checkWinX(x) {
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

// function checkWinO(position) {
//   if (position[0] == 2 &&
//       position[1] == 2 &&
//       position[2] == 2 |
//
//       position[3] == 2 &&
//       position[4] == 2 &&
//       position[5] == 2 ||
//
//       position[6] == 2 &&
//       position[7] == 2 &&
//       position[8] == 2 ||
//
//       position[0] == 2 &&
//       position[3] == 2 &&
//       position[6] == 2 ||
//
//       position[1] == 2 &&
//       position[4] == 2 &&
//       position[7] == 2 ||
//
//       position[2] == 2 &&
//       position[5] == 2 &&
//       position[8] == 2 ||
//
//       position[0] == 2 &&
//       position[4] == 2 &&
//       position[8] == 2 ||
//
//       position[2] == 2 &&
//       position[4] == 2 &&
//       position[6] == 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

for (var i = 0; i < 9; i++) {
  var imgIds = [];
  imgIds[i] = document.getElementById(i);
  imgIds[i].addEventListener('click', handleTurn);
}

function hadleTurn(event) {
  if (currentTurn == 'X') {
    position[event.target.id] = 1;
    var move = document.getElementById(event.target.id);
    move.setAttribute('src', 'img/x.jpeg');
    currentTurn = 'O';

    if (checkWin()) {
      alert('X wins!');
      reset();
    }

    if (checkWinO()) {
      alert('O wins!');
      reset();
    }
  }

  if (currentTurn == 'O') {
    position[event.target.id] = 2;
    move = document.getElementById(event.target.id);
    move.setAttribute('src', 'img/o.jpeg');
    currentTurn = 'X';

    if (checkWin(2)) {
      alert('O wins!');
      reset();
    }

    if (checkWin(1)) {
      alert('X wins!');
      reset();
    }
  }
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
hamburger.setAttribute('content', 'hidden');
hamburger.addEventListener('hover', handleHover);

function handleHover(event) {
  var navmenu = document.getElementById('navMenu');
  navmenu.setAttribute('display', 'block');
}
