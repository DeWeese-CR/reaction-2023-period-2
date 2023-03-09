input.onButtonPressed(Button.A, function () {
    if (ball.get(LedSpriteProperty.X) == 2 && ball.get(LedSpriteProperty.Y) == 2) {
        game.addScore(1)
        hits += 1
        if (hits == 5) {
            speed = 2
        }
        if (hits == 10) {
            game.addLife(1)
            speed = 1
            hits = 0
        }
    } else {
        game.removeLife(1)
        if (game.isGameOver()) {
            game.gameOver()
        }
    }
})
let speed = 0
let hits = 0
let ball: game.LedSprite = null
ball = game.createSprite(2, 2)
hits = 0
speed = 5
game.setLife(3)
basic.forever(function () {
    ball.move(1)
    if (ball.get(LedSpriteProperty.X) == 2 && ball.get(LedSpriteProperty.Y) == 2) {
        if (randint(0, 1) == 0) {
            ball.turn(Direction.Right, 90)
        }
    }
    ball.ifOnEdgeBounce()
    if (speed == 1) {
        basic.pause(100)
    } else if (speed == 2) {
        basic.pause(200)
    } else {
        basic.pause(500)
    }
})
