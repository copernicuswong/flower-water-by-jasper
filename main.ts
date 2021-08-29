let i = 0
basic.showIcon(IconNames.Heart)
basic.forever(function on_forever() {
    
    i = PlanetX_Basic.soilHumidity(PlanetX_Basic.AnalogRJPin.J2)
    if (i < 30) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J4, false)
    } else {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J4, true)
    }
    
})
