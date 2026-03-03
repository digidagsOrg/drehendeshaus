basic.showIcon(IconNames.Heart)
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P0, index)
        basic.pause(500)
    }
    basic.pause(500)
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P0, 180 - index)
        basic.pause(500)
    }
    basic.pause(500)
})
