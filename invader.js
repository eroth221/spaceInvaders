function Invader(x, y) {
  const self = this

  self.x = x
  self.y = y

  self.xSpeed = 1
  self.ySpeed = 0

  self.radius = 18
  self.diameter = self.radius * 2

  Object.assign(self, {
    show, move, shiftDown, hits
  })

  function show() {
    fill(255, 0, 200)
    ellipse(self.x, self.y, self.diameter, self.diameter)
  }


  function move() {
    self.x += self.xSpeed
//    self.y += self.ySpeed
  }

  function shiftDown() {
    self.xSpeed *= -1
    self.y += self.radius
  }

  function hits(ship) {
    return (self.y + self.radius) - (ship.y - 60) > 0
  }

}