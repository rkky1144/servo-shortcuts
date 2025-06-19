SuperBit.Servo(SuperBit.enServo.S4, 90)
SuperBit.Servo(SuperBit.enServo.S1, 0.68)
SuperBit.Servo(SuperBit.enServo.S2, 90.72)
SuperBit.Servo(SuperBit.enServo.S3, 10)
namespace servoCalculation {

    //%block = "clamp open $open"
    export function clampOpen(open: boolean) {
        if (open) {
            SuperBit.Servo(SuperBit.enServo.S3, 135)
        } else {
            SuperBit.Servo(SuperBit.enServo.S3, 10)
        }
    }

    //%block = "clamp at $first_x $first_y" "$forward $t1 $t2"
    export function clampAt(first_x: number, first_y: number, forward: boolean, t1: number, t2: number) {
        if (forward) {
            for (let index = 0; index <= 100; index++) {
                let x = Math.map(index, 0, 100, 81, first_x)
                let y = Math.map(index, 0, 100, 81, first_y)
                if (0 <= y) {
                    SuperBit.Servo(SuperBit.enServo.S1, (90 - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) + Math.atan2(y, x)) * (180 / 3.14)) + t1)
                    SuperBit.Servo(SuperBit.enServo.S2, (180 - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) * 2 * (180 / 3.14)) - (90 - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) + Math.atan2(y, x)) * (180 / 3.14))) + t2)
                } else {
                    SuperBit.Servo(SuperBit.enServo.S1, (180 - Math.atan2(x, y) * (180 / 3.14)))
                    SuperBit.Servo(SuperBit.enServo.S2, (180 - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) * 2 * (180 / 3.14) - ((180 - Math.atan2(x, y) * (180 / 3.14)) - 90))))
                }
                basic.pause(5)
            }
        } else {
            for (let index2 = 100; index2 >= 0; index2--) {
                let x2 = Math.map(index2, 0, 100, 81, first_x)
                let y2 = Math.map(index2, 0, 100, 81, first_y)
                if (0 <= y2) {
                    SuperBit.Servo(SuperBit.enServo.S1, (90 - (Math.acos(Math.sqrt(x2 ** 2 + y2 ** 2) / 160) + Math.atan2(y2, x2)) * (180 / 3.14)) + t1)
                    SuperBit.Servo(SuperBit.enServo.S2, (180 - (Math.acos(Math.sqrt(x2 ** 2 + y2 ** 2) / 160) * 2 * (180 / 3.14)) - (90 - (Math.acos(Math.sqrt(x2 ** 2 + y2 ** 2) / 160) + Math.atan2(y2, x2)) * (180 / 3.14))) + t2)
                } else {
                    SuperBit.Servo(SuperBit.enServo.S1, (180 - Math.atan2(x2, y2) * (180 / 3.14)))
                    SuperBit.Servo(SuperBit.enServo.S2, (180 - (Math.acos(Math.sqrt(x2 ** 2 + y2 ** 2) / 160) * 2 * (180 / 3.14) - ((180 - Math.atan2(x2, y2) * (180 / 3.14)) - 90))))
                }
                basic.pause(5)
            }
        }

    }

    //%block = "servo2 at $x $y"
    export function servo2At(x: number, y: number) {
        x |= 0
        y |= 0
        if (0 <= y) {
            return (180 - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) * 2 * (180 / 3.14)) - (90 - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) + Math.atan2(y, x)) * (180 / 3.14)))
        } else {
            return 180 - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) * 2 * (180 / 3.14) - ((180 - Math.atan2(x, y) * (180 / 3.14)) - 90))
        }
    }

    //%block = "servo1 at $x $y"
    export function servo1At(x: number, y: number) {
        x |= 0
        y |= 0
        if (0 <= y) {
            return (90 - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) + Math.atan2(y, x)) * (180 / 3.14))
        } else {
            return (180 - Math.atan2(x, y) * (180 / 3.14))
        }
    }

}
