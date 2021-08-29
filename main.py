i = 0
basic.show_icon(IconNames.HEART)

def on_forever():
    global i
    i = PlanetX_Basic.soil_humidity(PlanetX_Basic.AnalogRJPin.J2)
    if i < 30:
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J3, True)
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J4, False)
    else:
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J3, False)
        PlanetX_Display.led_brightness(PlanetX_Display.DigitalRJPin.J4, True)
basic.forever(on_forever)
