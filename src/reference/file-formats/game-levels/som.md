# *.som (Sound Occluder Mesh)

___

## About

Geometry for calculating sound propagation. Used to allow sound to pass through walls, ceilings, floors, etc. with varying strength.

___

## Technical information

- Format version: 0

### Blocks

It consists of two blocks:

| Block ID | Size (bytes) | Description |
|---|---|---|
| 0x0 | 4 | header (contains information about the format version) |
| 0x1 | polygon count * 44 | vertex coordinates and polygon properties |

The structure of the file is similar to .hom

#### Block 0x0 (header)

| Type | Description |
|---|---|
| I | format version |

#### Block 0x1 (mesh data)

| Type | Description | Note | Note 2 |
|---|---|---|---|
| fff | 3D coordinates of the first vertex of the triangle | - | - |
| fff | 3D coordinates of the second vertex of the triangle | - | - |
| fff | 3D coordinates of the third vertex of the triangle | - | - |
| I | "two sided" option | Possible values of the "two sided" option: 0x0, 0x1 | If 0x1, the polygon will cut off sound from both sides, and if 0x0, it will only cut off sound from the front side |
| f | "Sound Occlusion" parameter | The "Sound Occlusion" parameter specifies how much of the sound volume will be heard. The value depends on the material of the SOM object before compilation. | The value of this parameter is prescribed in the materials and can be found in Shader Editor>Material>Item Properties>Factors>Sound Occlusion (Possible values are 0.0 - 1.0) |

Polygon indices are not saved, but they can be easily generated, because all vertices are saved so that polygon indices are in ascending order.

The first triangle will be: 0, 1, 2, second: 3, 4, 5, third: 6, 7, 8, etc.

___

## Programs editing this file

- [Blender (X-Ray Addon)](../../../modding-tools/blender/blender-x-ray-addon-summary.md)
- [SDK](../../../modding-tools/sdk/README.md)

___

## Sources

[Source](http://stalkerin.gameru.net/wiki/index.php?title=Level.som)
