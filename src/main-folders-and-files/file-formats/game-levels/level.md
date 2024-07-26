# level

___

## About

Contains all the essentials. This contains light sources, object descriptions, names of their corresponding textures and shaders, portals, and sectors.

## Technical information

- Format version: 14

### General structure - file blocks

|  | Block code |
---|---|
| Map compiler version | 1 |
| Description of portals | 4 |
| Light sources | 6 |
| Coronas of light sources | 7 |
| Objects | 3 |
| Textures | 2 |
| Sectors | 8 |

### Map compiler version (the block is the same for all maps)

|  | Value | Size |
---|---|---|
| Block code | 1 | Word(2) |
| Data compression (0 - no, 32768 - yes) | 0 | Word(2) |
| Block size (bytes) | 4 | DWord(4) |
| Version number (the same for all) | 13 | DWord(4) |

### Description of portals (the block for all maps is the same and contains no data)

|  | Value | Size |
---|---|---|
| Block code | 4 | Word(2) |
| Data compression (0 - no, 32768 - yes) | 0 | Word(2) |
| Block size (bytes) | 0 | DWord(4) |

### Light sources

|  | Value | Size |
---|---|---|
| Block code | 6 | Word(2) |
| Data compression (0 - no, 32768 - yes) | 0 | Word(2) |
| Block size (bytes) | - | DWord(4) |
| Light Source | - | (108*х) |

#### Light Source

|  | Offset | Size |
---|---|---|
| Type of light source (only 1 or 2 were encountered) | 0 | DWord(4) |
| (only 1 or 3 were encountered) | 4 | DWord(4) |
| Color Red | 8 | Single(4) |
| Color Green | 12 | Single(4) |
| Color Blue | 16 | Single(4) |
|  | 20 | DWord(4) |
|  | 24 | DWord(4) |
|  | 28 | DWord(4) |
|  | 32 | DWord(4) |
|  | 36 | DWord(4) |
|  | 40 | DWord(4) |
|  | 44 | DWord(4) |
|  | 48 | DWord(4) |
|  | 52 | DWord(4) |
| Coordinate X | 56 | Single(4) |
| Coordinate Z | 60 | Single(4) |
| Coordinate Y | 64 | Single(4) |
| Angle of rotation by X | 68 | Single(4) |
| Angle of rotation by Z | 72 | Single(4) |
| Angle of rotation by Y | 76 | Single(4) |
|  | 80 | DWord(4) |
|  | 84 | DWord(4) |
|  | 88 | Single(4) |
|  | 92 | Single(4) |
|  | 96 | Single(4) |
|  | 100 | DWord(4) |
|  | 104 | Single(4) |

### Coronas of light sources

|  | Value | Size |
---|---|---|
| Block code | 7 | Word(2) |
| Data compression (0 - no, 32768 - yes) | 0 | Word(2) |
| Block size (bytes) | - | DWord(4) |
| Corona of the light source | - | (18*х) |

#### Corona of the light source

|  | Value | Size |
---|---|---|
| Coordinate X | 0 | Single(4) |
| Coordinate Z | 4 | Single(4) |
| Coordinate Y | 8 | Single(4) |
| ??? | 12 | Single(4) |
| ??? | 16 | Word(2) |

### Textures

|  | Value | Size |
---|---|---|
| Block code | 2 | Word(2) |
| Data compression (0 - no, 32768 - yes) | 0 | Word(2) |
| Block size (bytes) | - | DWord(4) |
| Number of textures | - | DWord(4) |
| Textures | - | - |

#### Texture

<table>
 <tbody>
  <tr bgcolor="grey">
   <td></td>
   <td>Value</td>
   <td>Size</td>
  </tr>
  <tr>
   <td>Shader (with path)</td>
   <td>-</td>
   <td>String</td>
  </tr>
  <tr>
   <td>Separator</td>
   <td>"/"</td>
   <td>Byte(1)</td>
  </tr>
  <tr>
   <td>Texture (with path)</td>
   <td>-</td>
   <td>String</td>
  </tr>
  <tr>
   <td colspan="3">Beginning of the optional part</td>
  </tr>
  <tr>
   <td>Separator</td>
   <td>","</td>
   <td>Byte(1)</td>
  </tr>
  <tr>
   <td>Lightmap 1</td>
   <td>-</td>
   <td>String</td>
  </tr>
  <tr>
   <td>Separator</td>
   <td>","</td>
   <td>Byte(1)</td>
  </tr>
  <tr>
   <td>Lightmap 2</td>
   <td>-</td>
   <td>String</td>
  </tr>
  <tr>
   <td colspan="3">End of the optional part</td>
  </tr>
  <tr>
   <td>The zero symbol is the end of the texture name</td>
   <td>#0</td>
   <td>Byte(1)</td>
  </tr>
 </tbody>
</table>

**Note:** the zero texture is specified without the file name and consists only of the symbol #0. So, after the field "number of textures" right after the symbol #0, do not be alarmed :)

### Sectors

|  | Value | Size |
---|---|---|
| Block code | 8 | Word(2) |
| Data compression (0 - no, 32768 - yes) | 32768 | Word(2) |
| Block size (bytes) | - | DWord(4) |
| Uncompressed block size (in bytes) | - | DWord(4) |
| Description of Sectors | - | ???? |

___

## Programs editing this file

- [Blender (X-Ray Addon)](../../blender/index.html)
- [SDK 0.7](../../sdk/index.html)

## Sources

[Source](http://stalkerin.gameru.net/wiki/index.php?title=Level)
