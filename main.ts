namespace SpriteKind {
    export const upgradelife = SpriteKind.create()
    export const upgrademap = SpriteKind.create()
    export const health = SpriteKind.create()
    export const helper = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const pyro = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e d 6 6 6 6 e . . . . . 
        . . . e 7 6 6 6 6 7 e . . . . . 
        . . . . e e e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e 6 6 6 6 6 e . . . . . 
        . . . e 7 6 6 6 6 6 7 e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e 6 6 6 6 d e . . . . . 
        . . . . e 7 6 6 6 6 7 e . . . . 
        . . . . . e e e e e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e 6 6 6 6 6 e . . . . . 
        . . . . e 7 6 6 6 7 e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . 5 . 1 1 . 5 . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.upgradelife, SpriteKind.Player, function (sprite, otherSprite) {
    info.setLife(20)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e d d d 7 7 7 7 e . . . . 
        . . . e d 7 d d 7 7 7 e . . . . 
        . . . e d d d d d 7 7 e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e d 7 f f d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e 6 6 6 6 6 e . . . . . 
        . . . e 7 7 6 6 6 6 7 e . . . . 
        . . . . e e e e e e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e d d d 7 7 7 7 e . . . . 
        . . . e d 7 d d 7 7 7 e . . . . 
        . . . e d d d d d 7 7 e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . . e 7 f 7 e . . . . . . 
        . . . . . e 7 f 7 e . . . . . . 
        . . . . e 6 6 d 6 6 e . . . . . 
        . . . . e 6 7 7 6 6 e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e d d d 7 7 7 7 e . . . . 
        . . . e d 7 d d 7 7 7 e . . . . 
        . . . e d d d d d 7 7 e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e d f f 7 d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e 6 6 6 6 6 e . . . . . 
        . . . e 7 6 6 6 6 7 7 e . . . . 
        . . . . e e e e e e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e d d d 7 7 7 7 e . . . . 
        . . . e d 7 d d 7 7 7 e . . . . 
        . . . e d d d d d 7 7 e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . . e 7 f 7 e . . . . . . 
        . . . . . e 7 f 7 e . . . . . . 
        . . . . e 6 6 d 6 6 e . . . . . 
        . . . . e 6 6 7 7 6 e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . 5 . . 
        . . . . . 1 1 1 1 1 1 1 1 5 e 5 
        . . . . . 1 1 1 1 1 1 1 1 5 e 5 
        . . . . . . . . . . . . . 5 . . 
        . . . . . . . . . . . . 5 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.upgrademap, SpriteKind.Player, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level0`)
    sprites.destroy(mySprite5, effects.fire, 500)
    mySprite7 = sprites.create(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 5 b b 5 b c b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.helper)
    tiles.placeOnRandomTile(mySprite7, sprites.dungeon.hazardWater)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(mySprite3)
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(mySprite3, sprites.castle.tileGrass2)
    info.changeScoreBy(1)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e 7 7 7 7 7 e . . . . 
        . . . . e 7 7 7 7 7 7 7 e . . . 
        . . . . e 7 7 7 7 7 7 7 e . . . 
        . . . . e 7 7 7 7 d d d e . . . 
        . . . . e 7 7 7 d d 7 d e . . . 
        . . . . e 7 7 d d d d d e . . . 
        . . . . . e d d d d d e . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . e d f f 7 d e . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . e 6 6 6 6 6 e . . . . 
        . . . . e 7 6 6 6 6 7 7 e . . . 
        . . . . . e e e e e e e . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e 7 7 7 7 7 e . . . . 
        . . . . e 7 7 7 7 7 7 7 e . . . 
        . . . . e 7 7 7 7 7 7 7 e . . . 
        . . . . e 7 7 7 7 d d d e . . . 
        . . . . e 7 7 7 d d 7 d e . . . 
        . . . . e 7 7 d d d d d e . . . 
        . . . . . e d d d d d e . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . . e 7 f 7 e . . . . . 
        . . . . . . e 7 f 7 e . . . . . 
        . . . . . e 6 6 d 6 6 e . . . . 
        . . . . . e 6 6 7 7 6 e . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e 7 7 7 7 7 e . . . . 
        . . . . e 7 7 7 7 7 7 7 e . . . 
        . . . . e 7 7 7 7 7 7 7 e . . . 
        . . . . e 7 7 7 7 d d d e . . . 
        . . . . e 7 7 7 d d 7 d e . . . 
        . . . . e 7 7 d d d d d e . . . 
        . . . . . e d d d d d e . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . e d 7 f f d e . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . e 6 6 6 6 6 e . . . . 
        . . . . e 7 7 6 6 6 6 7 e . . . 
        . . . . . e e e e e e e . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . e 7 7 7 7 7 e . . . . 
        . . . . e 7 7 7 7 7 7 7 e . . . 
        . . . . e 7 7 7 7 7 7 7 e . . . 
        . . . . e 7 7 7 7 d d d e . . . 
        . . . . e 7 7 7 d d 7 d e . . . 
        . . . . e 7 7 d d d d d e . . . 
        . . . . . e d d d d d e . . . . 
        . . . . . . e 7 7 7 e . . . . . 
        . . . . . . e 7 f 7 e . . . . . 
        . . . . . . e 7 f 7 e . . . . . 
        . . . . . e 6 6 d 6 6 e . . . . 
        . . . . . e 6 7 7 6 6 e . . . . 
        . . . . . . e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . 5 . . . . . . . . . . . . . 
        5 e 5 1 1 1 1 1 1 1 1 . . . . . 
        5 e 5 1 1 1 1 1 1 1 1 . . . . . 
        . . 5 . . . . . . . . . . . . . 
        . . . 5 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.helper, SpriteKind.Player, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level0`)
    sprites.destroy(mySprite7, effects.halo, 500)
    myEnemy = sprites.create(img`
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . . . 2 5 5 2 5 5 2 5 2 . . . . 
        . . 2 5 5 5 2 5 5 2 5 5 2 . . . 
        . . 2 5 5 5 5 5 5 5 5 5 2 . . . 
        . . 2 5 5 5 5 5 5 5 5 5 2 . . . 
        . . 2 5 5 f f 5 f f 5 2 2 . . . 
        . . 2 5 5 f f 5 f f 5 2 2 . . . 
        . . 2 2 5 5 5 5 5 5 5 5 2 . . . 
        . . 2 2 5 5 f f f 5 5 5 2 . . . 
        . . . 2 5 f 3 3 3 f 5 2 2 . . . 
        . . 2 e 2 2 2 2 2 2 2 e e 2 . . 
        . . 2 e 2 8 8 8 8 8 2 e e 2 . . 
        . 2 e e e 2 8 8 8 2 e e e e 2 . 
        . 2 2 2 2 2 2 8 2 2 2 2 2 2 2 . 
        2 f f f f 2 5 5 5 2 f f f f f 2 
        2 f f f 2 5 5 5 5 5 2 f f f f 2 
        `, SpriteKind.Boss)
    myEnemy.setScale(3, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(myEnemy, sprites.dungeon.hazardLava1)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.max = 200
    statusbar.attachToSprite(myEnemy)
    myEnemy.setBounceOnWall(true)
    myEnemy.setVelocity(-50, 0)
    sprites.destroy(mySprite3)
    info.changeLifeBy(5)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.pyro, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 d d d d d 7 e . . . . 
        . . . e 7 d 7 d 7 d 7 e . . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e d 6 6 6 6 e . . . . . 
        . . . e 7 6 6 6 6 7 e . . . . . 
        . . . . e e e e e e . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 d d d d d 7 e . . . . 
        . . . e 7 d 7 d 7 d 7 e . . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e 6 6 6 6 6 e . . . . . 
        . . . e 7 6 6 6 6 6 7 e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 d d d d d 7 e . . . . 
        . . . e 7 d 7 d 7 d 7 e . . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e 6 6 6 6 d e . . . . . 
        . . . . e 7 6 6 6 6 7 e . . . . 
        . . . . . e e e e e e . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . e 7 7 7 7 7 e . . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . e 7 d d d d d 7 e . . . . 
        . . . e 7 d 7 d 7 d 7 e . . . . 
        . . . e d d d d d d d e . . . . 
        . . . . e d d d d d e . . . . . 
        . . . . . e 7 7 7 e . . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e f 7 7 7 f e . . . . . 
        . . . . e 6 6 6 6 6 e . . . . . 
        . . . . e 7 6 6 6 7 e . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 . 1 1 . 5 . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    statusbar.value += -1
})
let mySprite8: Sprite = null
let statusbar: StatusBarSprite = null
let myEnemy: Sprite = null
let mySprite7: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.setDialogTextColor(7)
game.setDialogFrame(img`
    777777777777777777777777777777
    777777777777777777777777777777
    777777777777777777777777777777
    777777777777777777777777777777
    777777777777777777777777777777
    777777777777777777777777777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777ffffffffffffffffff777777
    777777777777777777777777777777
    777777777777777777777777777777
    777777777777777777777777777777
    777777777777777777777777777777
    777777777777777777777777777777
    777777777777777777777777777777
    `)
game.showLongText("/////////ZER0\\\\\\\\\\\\\\\\\\\\", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . e 7 7 7 7 7 e . . . . . 
    . . . e 7 7 7 7 7 7 7 e . . . . 
    . . . e 7 7 7 7 7 7 7 e . . . . 
    . . . e 7 7 7 7 7 7 7 e . . . . 
    . . . e 7 7 7 7 7 7 7 e . . . . 
    . . . . e d d d d d e . . . . . 
    . . . . . e 7 7 7 e . . . . . . 
    . . . . e f 7 7 7 f e . . . . . 
    . . . . e f 7 7 7 f e . . . . . 
    . . . . e 6 6 6 6 6 e . . . . . 
    . . . . e 7 6 6 6 7 e . . . . . 
    . . . . . e e e e e . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . 5 . 1 1 . 5 . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    `, SpriteKind.Projectile)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite3 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(mySprite3, sprites.castle.tileGrass2)
info.setScore(0)
info.setLife(10)
let mySprite4 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.upgradelife)
mySprite5 = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.upgrademap)
tiles.placeOnRandomTile(mySprite4, sprites.dungeon.chestClosed)
tiles.placeOnRandomTile(mySprite5, sprites.dungeon.chestOpen)
game.onUpdateInterval(1000, function () {
    mySprite8 = sprites.create(img`
        .......2222222222222222.........
        .......2222222222222222.........
        ...22222222222222222222222222...
        ..222222444444444444444444222222
        ..222224444444444444444444422222
        ..222224444444444444455554422222
        22222224444444444455555554222222
        22222224455555555555555554222222
        22222244555555555555555544222222
        22222445555555555555444444222222
        22224455555555555555544444222222
        22244555555555555555555544222222
        22244555555555555555555544222222
        22244555555555555555555544422222
        22244555555555555555555554422222
        22244555555555555555555554442222
        22244555555555555555555554444222
        22244555555555555555555555554222
        22244555555555555555555555554222
        22244555555555555555555555554222
        22244455555555555555555555544222
        22224445555555555555555544444222
        22222444555555555554444444442222
        22222224455555555544444444422222
        ..222222444444444444442222222222
        ..222222224444444442222222222222
        ..222222222222222222222222222222
        ..222222222222222222222222222222
        ..222222222222222222222222222222
        ...222222222222222222222222.....
        .....2222222222222222222........
        ................................
        `, SpriteKind.pyro)
    tiles.placeOnRandomTile(mySprite8, sprites.dungeon.purpleOuterEast2)
    mySprite8.setVelocity(-70, 0)
    mySprite8.setScale(0.5, ScaleAnchor.Middle)
})
game.onUpdateInterval(500, function () {
    scene.followPath(mySprite2, scene.aStar(tiles.locationOfSprite(mySprite2), tiles.locationOfSprite(mySprite)), 100)
    scene.followPath(mySprite3, scene.aStar(tiles.locationOfSprite(mySprite3), tiles.locationOfSprite(mySprite)), 80)
})
