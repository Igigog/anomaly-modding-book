# Main Folders And Files

___

## Root folder

**fsgame.ltx**

> Contains paths to folders with the necessary files

___

## appdata

**logs**

> This is where the game logs are created and stored (log of loading objects, textures, etc.)

**savedgames**

> This is where game saves are created and stored. Inside are files with the extensions .scop and .scoc.

**screenshoots**

> This is where game screenshots are created and stored

**shaders_cache**

> This is where the game shader cache is created and stored

**"username".ltx**

> This file describes the game settings.

___

## bin

> Contains the .exe files of the game renders, the configuration for OpenAL and .dll libraries

___

## db

> Contains packaged game files. **This folder has a higher priority of files, which means that if there is no file in the gamedata folder, the game will look for it here**

___

## gamedata

> Folder with game files

### <center>Folders</center>

**ai**

> Contains the [.efd](file-formats/efd.md) files needed for the AI

**anims**

> Contains [.anm](file-formats/anm.md), [.anms](file-formats/anm.md) files for camera animation and .ppe files for postprocessing

**configs**

> Contains [.ltx](file-formats/ltx.md) for configuration files and [.xml](file-formats/xml.md) for text

**levels**

> Contains the [necessary files for the levels](file-formats/index.html#game-level)

**meshes**

> Contains .ogf, [.dm](file-formats/dm.md), [.omf](file-formats/omf.md) file needed for models and skeleton animation

**scripts**

> Contains .script files for game scripts

**shaders**

> Contains [various files for shaders](file-formats/index.html#shaders)

**sounds**

> Contains [.ogg](file-formats/ogg.md) files for various music, sounds, ambient, etc.

**spawns**

> Contains a file `all.spawn` - it describes all spawn spots on locations

**textures**

> Contains [.dds](file-formats/dds.md) textures

### <center>Files</center>

**gamemtl.xr**

> Contains [game materials](../shaders/shaders-list/materials-list.md)

**lanims.xr**

> Contains animations of lights

**particles.xr**

> Contains Particles

**senvironment.xr**

> Contains settings for [sound environment zones](../sound/sound-environments-list.md)

**shaders.xr**

> Database of the [shaders used by the graphics engine](../shaders/shaders-list/shaders-list.md)

**shaders_xrlc.xr**

> Database of [shaders used by the level compiler](../shaders/shaders-list/compiler-shaders-list.md)

**textures.ltx**

> Contains pathes to all textures

___

## tools

> Contains some resources for modding, like a version icon for addons, a resource converter and .bat files for unpacking .db files
