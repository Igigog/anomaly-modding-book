# Main Folders And Files

___

## Root folder

### fsgame.ltx

```admonish info
Contains paths to folders with the necessary files
```

___

## appdata

### logs

```admonish info
This is where the game logs are created and stored (log of loading objects, textures, etc.)
```

### savedgames

```admonish info
This is where game saves are created and stored. Inside are files with the extensions .scop and .scoc.
```

### screenshoots

```admonish info
This is where game screenshots are created and stored
```

### shaders_cache

```admonish info
This is where the game shader cache is created and stored
```

### "username".ltx

```admonish info
This file describes the game settings
```

___

## bin

```admonish info
Contains the *.exe files of the game renders, the configuration for OpenAL and *.dll libraries
```

___

## db

```admonish info
Contains packaged game files
```

```admonish
This folder has a higher priority of files, which means that if there is no file in the gamedata folder, the game will look for it here
```

___

## gamedata

```admonish info
Folder with game files
```

### <center>Folders</center>

#### ai

```admonish info
Contains the [*.efd](file-formats/ai/efd.md) files needed for the AI
```

#### anims

```admonish info
Contains [*.anm](file-formats/animations/anm.md) files for camera animation and [*.ppe](file-formats/particles/pe.md) files for postprocessing
```

#### configs

```admonish info
Contains [*.ltx](file-formats/conf-script/ltx.md) for configuration files and [*.xml](file-formats/conf-script/xml.md) for text
```

#### levels

```admonish info
Contains necessary files for levels
```

#### meshes

```admonish info
Contains [*.ogf](file-formats/models/ogf.md), [*.dm](file-formats/models/dm.md), [*.omf](file-formats/animations/omf.md) file needed for models and skeleton animation
```

#### scripts

```admonish info
Contains [*.script](file-formats/conf-script/script.md) files for game scripts
```

#### shaders

```admonish info
Contains various files for shaders
```

#### sounds

```admonish info
Contains [*.ogg](file-formats/audio-video/ogg.md) files for various music, sounds, ambient, etc.
```

#### spawns

```admonish info
Contains a file `all.spawn` - it store all spawn spots on locations
```

#### textures

```admonish info
Contains [*.dds](file-formats/textures/dds.md) textures
```

### <center>Files</center>

#### gamemtl.xr

```admonish info
Contains [game materials](../materials/materials-list.md)
```

#### lanims.xr

```admonish info
Contains animations of lights
```

#### particles.xr

```admonish info
Contains Particles
```

#### senvironment.xr

```admonish info
Contains settings for [sound environment zones](../sound/sound-environments-list.md)
```

#### shaders.xr

```admonish info
Database of the [shaders used by the graphics engine](../shaders/shaders-list/shaders-list.md)
```

#### shaders_xrlc.xr

```admonish info
Database of [shaders used by the level compiler](../shaders/shaders-list/compiler-shaders-list.md)
```

___

## tools

```admonish info
Contains some resources for modding, like a version icon for addons, a resource converter and .bat files for unpacking [*.db](file-formats/archives-resource-packs/db.md) files
```
