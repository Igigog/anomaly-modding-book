# Modified THM Editor by ValeroK

___

- Program Developers:
  - i-love-kfc (Original Author)
  - ValeroK
- Described Version: [1.1](https://github.com/VaIeroK/THM-Editor/releases/tag/1.1)
- [Ap-pro forum topic](https://ap-pro.ru/forums/topic/3551-thm-editor-v10)

___

## About

The [THM Editor](thm-editor-by-i-love-kfc.md) from i-love-kfc was taken as the basis, finalized and fixed. Allows you to work with [.thm](../../file-formats/textures/thm.md) files.

![thm-editor-by-valerok centered](images/thm-editor-by-valerok.png)

## Features

- Supports 99% of thm parameters

## Functionality

### Hotkeys

- `F4` - Open file
- `F5` or `Ctrl+S` - Save file
- `F6` - Save as

### Buttons

- #### File Button

| Button | Description |
|---|---|
| Load | Loads the selected .thm |
| Save | Save .thm |
| Save As | Save as .thm |
| Exit | Exit |

- #### Tools Button

| Button | Description |
|---|---|
| Import DDS Params | Adjust .thm to the texture format (texture format can be set incorrectly, so sometimes it is worth adjusting it manually) |
| Generate THM for texture | When you select a basic texture, the program creates a thm with basic properties for it (if a texture with the prefix _bump is found, the thm will set all the necessary flags for using bumps) |

### Edit flags

| Checkbox | Description | Extra |
|---|---|---|
| Generate Mip Maps | Enables [MIP-map](https://en.wikipedia.org/wiki/Mipmap) generation |  |
| Has Alpha | Takes into account the alpha channel of the map |  |
| Binary Alpha | Alpha map will use 1 bit |  |
| Alpha Border |  |  |
| Color Border | In this mode, a color arbitrarily specified by the user is used for the area outside the texture coordinate range |  |
| Fade To Color | Fade to choosed color |  |
| Fade To Alpha | Fade to alpha |  |
| Dither Color | Enables [Dither](https://en.wikipedia.org/wiki/Dither) Coloring |  |
| Dither Each MIP Level | Enables [Dither](https://en.wikipedia.org/wiki/Dither) Coloring on each MIP level |  |
| Diffuse Detail | [Detail Map](../../file-formats/textures/detail-map.md) texture will be used |  |
| Implicit Lighted |  |  |
| Detail Bump | [Detail Map](../../file-formats/textures/detail-map.md) will use its own [Bump Map](../../file-formats/textures/bump.md) |  |

### Texture type

| Field | Description |
|---|---|
| Image | [2D texture](https://learn.microsoft.com/en-us/windows/win32/direct3d10/d3d10-graphics-programming-guide-resources-types#2d-texture-and-2d-texture-array) |
| [Cube Map](https://en.wikipedia.org/wiki/Cube_mapping) | Is a method of environment mapping that uses the six faces of a cube as the map shape |
| Bump Map | [Bump](https://en.wikipedia.org/wiki/Bump_mapping) Map |
| [Normal Map](https://en.wikipedia.org/wiki/Normal_mapping) | Normal Map |
| Terrain | Terrain Map |

### Texture compression formats

| Field | Description |
|---|---|
| [DXT1](https://www.fsdeveloper.com/wiki/index.php?title=DXT_compression_explained#DXT1) | Compression without alpha channel support |
| [ADXT1](https://www.fsdeveloper.com/wiki/index.php?title=DXT_compression_explained#DXT1_with_alpha) | Compression with alpha channel support |
| DXT3 |  |
| [DXT5](https://www.fsdeveloper.com/wiki/index.php?title=DXT_compression_explained#DXT5) | Compression with alpha channel support |
| [4444](https://docs.unity3d.com/ScriptReference/TextureFormat.RGBA4444.html) | aka `D3DFMT_A4R4G4B4`<br> Color and alpha texture format, 4 bit per channel |
| 1555 | aka `D3DFMT_A1R5G5B5`<br>A pixel occupies 16 bits (2 bytes) and contains color and transparency information in the following format:<br> 5 bits for the red channel (R)<br> 5 bits for the green channel (G)<br> 5 bits for the blue channel (B)<br> 1 bit for the alpha channel (A) |
| 565 | aka `D3DFMT_R5G6B5`<br> Each pixel occupies 16 bits (or 2 bytes) and contains color information in the following distribution:<br> 5 bits for the red channel (R)<br> 6 bits for the green channel (G)<br> 5 bits for the blue channel (B) |
| RGB | Compression without alpha channel support |
| RGBA | Compression with alpha channel support |
| NVHS | NVIDIA High Compression (NVidia Texture Format (GEForce 3)) |
| NVHU | NVIDIA High-Quality Texture Compression (NVidia Texture Format)|
| [A8](https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dformat) | 8-bit alpha only DirectX Format |
| [L8](https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dformat) | 8-bit luminance only DirectX Format |
| [A8L8](https://learn.microsoft.com/en-us/windows/win32/direct3d9/d3dformat) | 16-bit using 8 bits each for alpha and luminance DirectX Format |

### Bump Mode

| Field | Description |
|---|---|
| None | None |
| Use | Use [Bump](https://en.wikipedia.org/wiki/Bump_mapping) mapping method |
| Use Parallax | Use [Parallax](https://en.wikipedia.org/wiki/Parallax_mapping) mapping method |

### MIP Filter

```admonish tip
Different algorithms of MIP-map filtering
```

| Field | Description | Preview |
|---|---|---|
| Box | Simplest MIP-map generation algorithm.<br> However, the box filter has a number of limitations that can be quite noticeable with certain textures. For example, if a texture contains very narrow features (e.g., lines), then aliasing artifacts may be very pronounced |  |
| Cubic | Generation with weighted sum of eight pixels.<br> The advantage of the cubic filter over the box is that it can have negative side lobes (weights) which help maintain sharpness while reducing the image. This can help reduce some of the blurring effect of filtering with mipmaps |  |
| Point | (aka Nearest-neighbor interpolation)<br> Uses only one pixel from the mipmap<br> This is a simple and fast texture filtering method that works well in some cases, but can create visual artifacts and reduce image quality in more complex scenes. |  |
| Triangle |  |  |
| Quadratic | This method offers a balance between quality and performance<br> It uses an interpolation method that is based on quadratic equations. Instead of just selecting one pixel (as in Point), this method considers three pixels - one from the selected mipmap level and the two closest to it - to greatly improve the smoothness of the transition of color values. |  |
| Advanced |  |  |
| Catrom |  |  |
| Mitchell |  |  |
| Gaussian |  |  |
| Sinc |  |  |
| Bessel |  |  |
| Hanning |  |  |
| Hamming |  |  |
| Blackman |  |  |
| Kaiser | Increase readability of textures by increasing sharpness and contrast |  |

### Material

```admonish tip
Different shading algorithms
```

| Field | Description |
|---|---|
| OrenNayar Blin | `Oren-Nayar shading` is a lighting model used in computer graphics to render matte (rough) surfaces with respect to their microgeometry.<br> `Blinn shading` uses a combination of diffuse and specular light reflection to achieve a more realistic image of shiny objects. |
| Blinn Phong | `Blinn shading` uses a combination of diffuse and specular light reflection to achieve a more realistic image of shiny objects.<br> `Phong shading` model can achieve good visual results, making objects appear more three-dimensional and realistic, but at the same time it cannot always accurately reproduce lighting effects on more complex or uneven surfaces. |
| Phong Metal | `Phong shading` model can achieve good visual results, making objects appear more three-dimensional and realistic, but at the same time it cannot always accurately reproduce lighting effects on more complex or uneven surfaces.<br> `Metal shading` is focuses on the realization of materials imitating metallic surfaces. |
| Metal OrenNayar | `Metal shading` is focuses on the realization of materials imitating metallic surfaces.<br> `Oren-Nayar shading` is a lighting model used in computer graphics to render matte (rough) surfaces with respect to their microgeometry. |

### Chechboxes

- [ ] SOC format - SoC format of .thm

### Fields

| Field | Description |
|---|---|
| Border Color |  |
| Fade Color |  |
| Fade Amout |  |
| Material Weight | Shading model weight (0.0 - 1.0) |
| Detail Scale | [Detail Map](../../file-formats/textures/detail-map.md) Scale |
| Texture Width | Texture Width |
| Texture Height | Texture Height |
| Fade Delay |  |
| Bump Height | [Bump Map](../../file-formats/textures/bump.md) Height |
| Detail name | Path to [Detail Map](../../file-formats/textures/detail-map.md) |
| Bump name | Path to [Bump Map](../../file-formats/textures/bump.md) |
| Normal Map name | Path to Normal Map |

___

## Sources

[Source Code of Original THM Editor by i-love-kfc](https://gitlab.com/i-love-kfc/thm-editor/)

[Source Code of Modified THM Editor by ValeroK](https://github.com/VaIeroK/THM-Editor)
