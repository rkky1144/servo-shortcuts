SuperBit.Servo(0, 90)
SuperBit.Servo(SuperBit.enServo.S1, 0)
SuperBit.Servo(2, 90)
SuperBit.Servo(3, 10)
namespace servoCalculation {

    //%block = "clamp open $open $t3"
    export function clampOpen(open: boolean, t3: number) {
        if (open) {
            SuperBit.Servo(3, 135 + t3)
        } else {
            SuperBit.Servo(3, 10 + t3)
        }
    }

    //%block = "clamp at $first_x $first_y" "$forward $t1 $t2"
    export function clampAt(first_x: number, first_y: number, forward: boolean, t1: number, t2: number) {
        if (forward) {
            for (let index = 0; index <= 100; index++) {
                let x = Math.map(index, 0, 100, 80, first_x)
                let y = Math.map(index, 0, 100, 80, first_y)
                SuperBit.Servo(SuperBit.enServo.S1, 90 - (Math.atan2(y, x) * 180 / 3.14159) - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) * 180 / 3.14159) + t1)
                SuperBit.Servo(2, 90 + (Math.atan2(y, x) * 180 / 3.14159) - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) * 180 / 3.14159) + t2)
                basic.pause(5)
            }
        } else {
            for (let index2 = 100; index2 >= 0; index2--) {
                let x2 = Math.map(index2, 0, 100, 80, first_x)
                let y2 = Math.map(index2, 0, 100, 80, first_y)
                SuperBit.Servo(SuperBit.enServo.S1, 90 - (Math.atan2(y2, x2) * 180 / 3.14159) - (Math.acos(Math.sqrt(x2 ** 2 + y2 ** 2) / 160) * 180 / 3.14159) + t1)
                SuperBit.Servo(2, 90 + (Math.atan2(y2, x2) * 180 / 3.14159) - (Math.acos(Math.sqrt(x2 ** 2 + y2 ** 2) / 160) * 180 / 3.14159) + t2)
                basic.pause(5)
            }
        }
    }

    //%block = "servo2 at $x $y"
    export function servo2At(x: number, y: number) {
        x |= 0
        y |= 0
        return 90 + (Math.atan2(y, x) * 180 / 3.14159) - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) * 180 / 3.14159)
    }

    //%block = "servo1 at $x $y"
    export function servo1At(x: number, y: number) {
        x |= 0
        y |= 0
        return 90 - (Math.atan2(y, x) * 180 / 3.14159) - (Math.acos(Math.sqrt(x ** 2 + y ** 2) / 160) * 180 / 3.14159)
    }

}
