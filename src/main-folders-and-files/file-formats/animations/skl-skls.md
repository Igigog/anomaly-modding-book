# .skl/.skls

___

## About

These files store skeleton animations. The format for storing animations in .skl/.skls is similar to the format of animations embedded in [.object](#object) files. Animations are stored in uncompressed form. Bone motion data are stored losslessly when exported from a 3D editor. These formats are designed for X-Ray SDK. They are used as source files that are compiled into compressed formats for the game.

## Technical information

- Animations are stored as 3 animation curves for position and 3 curves for rotation in [Euler angles](https://en.wikipedia.org/wiki/Euler_angles) with ZXY axis order.
- A skls file can store one or more animations
- A skl file can store only one animation
- Each animation has [game parameters](/src/modding-tools/omf-editor-by-valerok.md#animation-options).
- Skeletal animations do not support Scale keys
- Animation keys support different types of interpolations: Stepped, Linear, Bezier 1D, Bezier 2D, Hermite, TCB.
