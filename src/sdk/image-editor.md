# Image Editor

___

![image-editor centered](sdk-image/image-editor.png)

## About

Allows you to edit texture parameters

| Type | Description |
---|---|
| 2D Texture | Just a texture |
| [Cube Map](https://en.wikipedia.org/wiki/Cube_mapping) | Is a method of environment mapping that uses the six faces of a cube as the map shape |
| Bump Map | [Bump](../main-folders-and-files/file-formats/index.html#bumpdds-1) |
| Normal Map | Normal Map |
| Terrain |  |

Source

Shows the characteristics of the texture. Width, height and alpha channel.

| Format | Description |
---|---|
| [DXT1](https://www.fsdeveloper.com/wiki/index.php?title=DXT_compression_explained#DXT1) | Compression without alpha channel support |
| [DXT1 Alpha](https://www.fsdeveloper.com/wiki/index.php?title=DXT_compression_explained#DXT1_with_alpha) | Compression with alpha channel support |
| DXT3 |  |
| [DXT5](https://www.fsdeveloper.com/wiki/index.php?title=DXT_compression_explained#DXT5) | Compression with alpha channel support |
| 16 bit (1:5:5:5) |  |
| 16 bit (5:6:5) |  |
| 32 bit (8:8:8:8) |  |
| [8 bit (alpha)](https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dformat) | 8-bit alpha only DirectX Format |
| [8 bit (luminance)](https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dformat) | 8-bit luminance only DirectX Format |
| [16 bit (alpha:luminance)](https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dformat) | 16-bit using 8 bits each for alpha and luminance DirectX Format |

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
