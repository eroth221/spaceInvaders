let ship
let missiles = []
let invaders = []

function setup() {
  createCanvas(300, 300)
  ship = new Ship()

  invaders = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ]
  invaders = _.map(
    invaders, function(row, rowIndex) {
      return _.map(row, function(item, colIndex) {
        return new Invader(colIndex * 40 + 40, 40 + rowIndex * 40)
      })
    });
}

function draw() {
  background(51)

  ship.show();
  ship.move();

  missiles.forEach(function(missile) {
    missile.show()
    missile.move()
    invaders.forEach(function(row) {
      row.forEach(function(invader){
        if (missile.hits(invader)) {
          invaders.forEach(function(row){
            _.pull(row, invader);
          })
          _.pull(missiles, missile);
        }
      })
    })
  })

  invaders.forEach(function(row) {
    row.forEach(function(invader) {

      invader.show();
      invader.move();
    })
  });

  checkForWin()
  checkForLose()

  invaders.forEach(function(row){
    if (row.length &&
      _.last(row) && _.last(row).x > width ||
      _.first(row) && _.first(row).x < 0) {
      shiftInvadersDown()
    }
  })
}

function checkForWin() {
  if (!_.every(invaders, 'length')){
    alert('winner winner chicken dinner', console.log('hi'))
    window.location.reload()
  }
  // invaders.forEach(function (row){
  //   if (!invaders.length) {
  //     alert('winner winner chicken dinner', console.log('hi'))
  //     window.location.reload()
  //   }
  // })
}


function checkForLose() {
  invaders.forEach(function(row) {
    row.forEach(function(invader) {
      if (invader.hits(ship)) {
        alert('lose')
        window.location.reload()
      }
    })
  })
}


function shiftInvadersDown() {
  invaders.forEach(function(row) {
    row.forEach(function(invader){
      invader.shiftDown()
    })
  })
}


/* EVENT LISTENERS ****************************************/
function keyPressed() {
  if (keyCode === 32/*space*/) {

    missiles.push(new Missile(ship.x, ship.y - 55))
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);

  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}


function keyReleased() {
  if (keyCode !== 32) {
    ship.setDir(0)
  }
}