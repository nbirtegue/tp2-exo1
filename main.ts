function Mouvement () {
    y0 = y1
    y1 = y2
    y2 = y3
    y3 = y4
    y4 += dir
    if (y4 == 4) {
        dir = -1
    }
    if (y4 == 0) {
        dir = 1
    }
}
let y0 = 0
let y1 = 0
let y2 = 0
let y3 = 0
let y4 = 0
let dir = 0
let liste = [0, 1, 2, 3, 4]
dir = -1
y4 = liste.pop()
y3 = liste.pop()
y2 = liste.pop()
y1 = liste.pop()
y0 = liste.pop()
basic.forever(function () {
    led.unplot(0, y0)
    led.unplot(1, y1)
    led.unplot(2, y2)
    led.unplot(3, y3)
    led.unplot(4, y4)
    Mouvement()
    led.plot(0, y0)
    led.plot(1, y1)
    led.plot(2, y2)
    led.plot(3, y3)
    led.plot(4, y4)
    basic.pause(100)
})
