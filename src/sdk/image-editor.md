# Image Editor

___

![image-editor centered](sdk-image/image-editor.png)

## About

Allows you to edit texture parameters

| Type | Description |
---|---|
| 2D Texture |  |
| Cube Map |  |
| Bump Map |  |
| Normal Map |  |
| Terrain |  |

Source

Shows the characteristics of the texture. Width, height and alpha channel.

| Format | Description |
---|---|
| DXT1 |  |
| DXT1 Alpha |  |
| DXT3 |  |
| DXT5 |  |
| 16 bit (1:5:5:5) |  |
| 16 bit (5:6:5) |  |
| 32 bit (8:8:8:8) |  |
| 8 bit (alpha) |  |
| 8 bit (luminance) |  |
| 16 bit (alpha:luminance) |  |

| MipMaps | Description |
---|---|
| Enabled |  |
| Filter | Advanced<br> Point<br> Box<br> Triangle<br> Quadratic<br> Cubic<br> Catrom<br> Michell<br> Gaussian<br> Sinc<br> Bessel<br> Hanning<br> Hamming<br> Blackman<br> Kaiser |

| Bump | Description |
---|---|
| Mode | None<br> Use<br> Use parallax |
| Texture | Path to Bump Textures |

| Details | Description |
---|---|
| Use As Diffuse |  |
| Use As Bump (R2) |  |
| Texture |  |
| Scale |  |

| Material | Description |
---|:---:|
| Base | OrenNayar <-> Blin<br> Blin <-> Phong<br> Phong <-> Metal<br> Metal <-> OrenNayar |
| Weight |  |

| Flags | Description |
---|---|
| Dither |  |
| Dither Each MIP |  |
| Implicit Lighted |  |

| Fade | Description |
---|---|
| Enable Color |  |
| Enable Alpha |  |
| Delay 'n' MIP |  |
| % of colot to fade in  |  |
| Color |  |
| Alpha |  |

| Border | Description |
---|---|
| Enable Color |  |
| Enable Alpha |  |
| Color |  |
