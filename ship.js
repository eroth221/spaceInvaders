function Ship() {
  const self = this

  self.x = width / 2;
  self.y = self.height = height
  self.xDir = 0

  Object.assign(self, {
    show, setDir, move
  })

  function show() {
    fill(255)
    rectMode(CENTER)
    rect(self.x, height - 20, 20, 60)
  }

  function setDir(dir) {
    self.xDir = dir
  }

  function move() {
    self.x += self.xDir;
  }

}