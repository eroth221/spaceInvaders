function Missile(x, y) {
  const self = this

  /* PUBLIC VARIABLES ******************/
  self.x = x
  self.y = y

  self.radius = 9
  self.diameter = self.radius * 2

  self.source = undefined;

  /* PUBLIC METHODS ********************/
  self.hits = hits
  self.show = show
  self.move = move;

  /* BINDED METHODS ********************/
  function show() {
    noStroke()
    fill(222)
    rect(self.x, self.y, self.diameter, self.diameter)
  }


  function hits(invader) {
    let d = dist(self.x, self.y, invader.x, invader.y)
    return d < self.radius + invader.radius;
  }


  function move() {
    self.y-=5;
  }

}