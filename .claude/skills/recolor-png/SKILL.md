---
description: Recolor a PNG file (single color on transparent background) to a new hex color
---

Recolor a PNG by replacing all non-transparent pixels with the given hex color, preserving alpha.

## Usage

User will say something like:
- "recolor hero-bottom.png to #9440dd"
- "перекрась картинку в #561269"
- "change the color of X.png to #rrggbb"

## Steps

1. Parse the target file path and hex color from the user's message.
2. Run this Python snippet via Bash:

```python
from PIL import Image

img = Image.open('PATH_TO_FILE').convert('RGBA')
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a > 0:
            pixels[x, y] = (0xRR, 0xGG, 0xBB, a)

img.save('PATH_TO_FILE')
print('done')
```

Replace `0xRR, 0xGG, 0xBB` with the hex components of the target color (e.g. `#9440dd` → `0x94, 0x40, 0xdd`).

3. If Pillow is not installed, run `pip3 install pillow -q` first, then retry.
4. Confirm to the user with the new color value.
