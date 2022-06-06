# Main Folders And Files

This section describes the main files and folders for the game

## Folders

### Appdata

#### Logs
This is where the game logs are created and stored (log of loading objects, textures, etc.)

#### Savedgames
This is where game saves are created and stored. Inside are files with the extensions .scop and .scoc.

#### Screenshoots
This is where game screenshots are created and stored

#### Shaders_cache
This is where the game shader cache is created and stored

### Gamedata

Folder with files from any game in the S.T.A.L.K.E.R. series. Initially it does not exist explicitly, all game data is "embedded" in the game, but when you install modifications and even patches the directory will be created. Gamedata overrides standard game files: if there are no files in it, often their base versions are used.

### Textures Folder

This folder usually contains textures.

### Objects Folder

Path to the folder with the original 3D objects and animations. Usually found in the X-Ray SDK in the rawdata\objects folder.

## Files

### fs.ltx

This file is in the X-Ray SDK and stores the directory paths.

### gamemtl.xr File

This file stores surface materials.

### lanims.xr

Library of light animations.

### particles.xr

Particle Systems.

### senvironment.xr

Sound Environment.

### shaders.xr

Database of the shaders used by the graphics engine.

### shaders_xrlc.xr

Database of shaders used by the layer compiler

### Textures.ltx

Contains paths to all textures

### EShader File

This file contains descriptions of the shader settings. EShader is the engine shader, which is responsible for the appearance of the surface.

### CShader File

This file contains descriptions of the settings used by the level geometry compiler (xrLC.exe). CShader is a compilation shader, specifying to the level compiler the properties of the final (game) level geometry. The source geometry, depending on the compiler shader, may have no visible or tangible (for collisions) geometry, have a different way of storing lighting, etc.