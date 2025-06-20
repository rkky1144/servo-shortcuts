// tests go here; this will not be compiled when this package is used as an extension.
basic.showNumber(servoCalculation.servo1At(0, 0))
basic.showNumber(servoCalculation.servo2At(0, 0))
servoCalculation.clampAt(0, 0, false, 0, 0)
SuperBit.Servo(SuperBit.enServo.S1, servoCalculation.servo1At(0, 0))
SuperBit.Servo(SuperBit.enServo.S2, servoCalculation.servo2At(0, 0))
servoCalculation.clampOpen(false)