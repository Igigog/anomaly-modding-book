# .cform (Collision Form)

___

## About

Contains a solid map structure. All tangible objects with materials live here. Because of this, the game knows with what sound and property objects should react when they are hit by bullets or walked on

## Technical information

- Format version: 4

The file consists of one block, which contains the following

|  | Value | Size |
---|---|---|
| Version | 4 for build 1537 and higher | DWord(4) |
| Number of vertices | - | DWord(4) |
| Number of triangles | - | DWord(4) |
| BBox diagonal | - | 24 bytes |
| vertices | - | - |
| triangles | - | - |

### BBox

BBox describes the entire map, including absolutely all static objects.
The BBox diagonal is represented by two vertices that have the same format as the others:

| Coordinates | Offset | Size |
---|---|---|
| X coordinate | 0 | Single(4) |
| Z coordinate | 4 | Single(4) |
| Y coordinate | 8 | Single(4) |

### Triangle

|  | Offset | Size |
---|---|---|
| First Index | 0 | DWord(4) |
| Second index | 4 | DWord(4) |
| Third index | 8 | DWord(4) |
| Material ID (14 bits) and flags in the two highest bits | 12 | Word(2) |
| Sector number | 14 | Word(2) |

___

## Programs editing this file

- [Blender (X-Ray Addon)](../../blender/index.html)
- [SDK 0.7](../../sdk/index.html)

## Sources

[Source](http://stalkerin.gameru.net/wiki/index.php?title=Level.cform)
