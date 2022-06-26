# THM Editor by Valerok
## Program Developer: Valerok

## About:
[THM Editor by Valerok](https://github.com/VaIeroK/THM-Editor) - The THM Editor from i-love-kfc was taken as the basis, finalized and fixed. Allows you to work with [.thm](../../main-folders-and-files/file-formats/thm.md) files.

<div style="text-align: center;">

![thm-editor](modding-tools-images/thm-editor-by-valerok.png)

</div>

## Features

- Supports 99% of thm parameters

## Functionality

### Hotkeys

- F4 - Open file
- F5 and Ctrl+S - Save file
- F6 - Save as

### Buttons

- #### File Button

| Button | Description |
---|---|
| Load | Loads the selected .thm |
| Save | Save .thm |
| Save As | Save as .thm |

- #### Tools Button

| Button | Description |
---|---|
| Import DDS Params | Adjust .thm to the texture format (texture format can be set incorrectly, so sometimes it is worth adjusting it manually) |
| Generate THM for texture | When you select a basic texture, the program creates a thm with basic properties for it (if a texture with the prefix _bump is found, the thm will set all the necessary flags for using bumps) |

- #### Edit Flags Button

| Button | Description |
---|---|
| Generate Mip Maps |  |
| Has Alpha |  |
| Binary Alpha |  |
| Alpha Border |  |
| Color Border |  |
| Fade To Color |  |
| Fade To Alpha |  |
| Dither Color |  |
| Dither Each MIP Level |  |
| Diffuse Detail |  |
| Implicit Lighted |  |
| Detail Bump |  |

- ### Chechboxes

- Shoc format - 

### Fields

- #### Texture type

| Field | Description |
---|---|
| Image |  |
| Cube Map |  |
| Bump Map |  |
| Normal Map |  |
| Terrain |  |

- #### Texture format

| Field | Description |
---|---|
| DXT1 |  |
| ADXT1 |  |
| DXT5 |  |
| 4444 |  |
| 1555 |  |
| 565 |  |
| RGB |  |
| RGBA |  |
| NVHS |  |
| NVHU |  |
| A8 |  |
| L8 |  |
| A8L8 |  |

- #### Bump Mode

| Field | Description |
---|---|
| None |  |
| Use |  |
| Use Parallax |  |

- #### MIP Filter

| Field | Description |
---|---|
| Box |  |
| Cubic |  |
| Point |  |
| Triangle |  |
| Quadratic |  |
| Advanced |  |
| Catrom |  |
| Mitchell |  |
| Gaussian |  |
| Sinc |  |
| Bessel |  |
| Hanning |  |
| Hamming |  |
| Blackman |  |
| Kaiser |  |

- #### Material

| Field | Description |
---|---|
| OrenNayar Blin |  |
| Phong |  |
| Phong Metal |  |
| Metal OrenNayar |  |

- #### Border Color


- #### Fade Color


- #### Fade Amout


- #### Material Weight


- #### Detail Scale


- #### Texture Width


- #### Texture Height


- #### Fade Delay


- #### Bump Height

- #### Detail

- #### Bump

- #### Normal Map

## Sources
[Source Code](https://github.com/VaIeroK/THM-Editor)