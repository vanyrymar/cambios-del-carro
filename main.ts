basic.showString("CAMBIOS DEL CARRO")
basic.pause(100)
basic.showString("1")
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # # . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.pause(5000)
basic.showString("2")
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    # . . . .
    # . . . .
    # . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.pause(5000)
basic.showString("3")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # . . .
    # . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.pause(5000)
basic.showString("4")
basic.showLeds(`
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.pause(5000)
basic.showString("5")
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # # .
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # # #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . # # #
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . #
    . . . . #
    . . # # #
    . . . . .
    . . . . .
    `)
basic.pause(500)
basic.showString("REVERSA")
basic.showLeds(`
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . #
    . . . . #
    . . . . #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # #
    . . . . #
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . . . . #
    . . . . #
    `)
basic.pause(100)
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 55)
})
