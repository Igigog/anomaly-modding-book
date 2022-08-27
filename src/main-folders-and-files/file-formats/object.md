# .obj

## About:

These files are intended for the X-Ray SDK to store 3D content in its original, uncompressed, lossless form. They are source files that store information before compilation into other game compressed formats. 

## Technical information:

### The format can store the following basic data (the list is not complete):

- meshes
- materials
- bones
- skeleton animations

### Possibilities and limitations of the .object format

One *.object file can store:

- one or more meshes if it has no skeleton and only one meshes if it has a skeleton
- one or more materials
- a skeleton can be absent, or it can hold at least one
- a skeleton can store a minimum of 1, a maximum of 64 bones (for X-Ray SDK 0.4)
- skeleton animations may not be present, or one or more animations may be stored
- skeleton animations do not support Scale keys
- each mesh can have one or more materials
- each mesh must have one UV scan
- each material can store only one texture

## Sources
[Source](https://github.com/PavelBlend/blender-xray/wiki/Plugin-.object)