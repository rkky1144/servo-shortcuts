> Open this page at [https://rkky1144.github.io/servo-shortcuts/](https://rkky1144.github.io/servo-shortcuts/)

## Usage

### Import Extension

Add this repository as an **extension** in MakeCode:

1. Open [https://makecode.microbit.org/](https://makecode.microbit.org/)
2. Click **New Project** or open an existing project
3. Go to **Extensions** under the gearwheel menu
4. Search for `https://github.com/rkky1144/servo-shortcuts` and import

### Initialization
On program start, the extension initializes servo angles to:
- Servo 1: 0°
- Servo 2: 90°
- Servo 3: 10°
- Servo 4: 0°

**Note:** These defaults depend on your robot arm's initial assembly configuration and may need adjustment.

---

### Calculation Blocks

#### `servo1 at` and `servo2 at`
Display calculated servo angles based on coordinates:

```blocks
basic.showNumber(servoCalculation.servo1At(80, 80))
basic.showNumber(servoCalculation.servo2At(80, 80))
```

**Parameters**: 
- First value: Horizontal distance (mm)
- Second value: Vertical distance (mm)

**Output**: Calculated angle for Servo 1 or Servo 2

To drive servos directly (if pins S1/S2 are unresponsive):
```blocks
SuperBit.Servo(SuperBit.enServo.S1, servoCalculation.servo1At(80, 80))
SuperBit.Servo(SuperBit.enServo.S2, servoCalculation.servo2At(80, 80))
```

---

### Action Blocks

#### `clamp at`
Moves clamp to specified coordinates with optional offsets:
```blocks
servoCalculation.clampAt(0, 0, false, 0, 0)
```

**Parameters**:
- `horizontal`: X-coordinate (mm)
- `vertical`: Y-coordinate (mm)
- `direction`:  
   - `true` → Move forward  
   - `false` → Move backward
- `servo1_offset`: Angle adjustment for Servo 1:
   - `> 0` → Forward correction
   - `< 0` → Backward correction
- `servo2_offset`: Angle adjustment for Servo 2:
   - `> 0` → Backward correction
   - `< 0` → Forward correction

#### `clamp open`
Controls clamp state:
```blocks
servoCalculation.clampOpen(false)
```
- `true` → Open clamp  
- `false` → Close clamp

## Edit This Project
To modify this repository in MakeCode:
1. Open [https://makecode.microbit.org/](https://makecode.microbit.org/)
2. Click **Import** → **Import URL**
3. Paste `https://github.com/rkky1144/servo-shortcuts`

---

#### Metadata (used for search and rendering)
* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
```
