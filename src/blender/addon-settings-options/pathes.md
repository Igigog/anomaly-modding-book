# Paths

___

These settings specify paths to external files or directories of X-Ray Engine or X-Ray SDK.It is possible to set paths automatically, based on one parameter. For example, if you specify the gamedata folder in the Gamedata Folder parameter, empty paths (except, fs.ltx File) will be filled in automatically. Automatically filled paths have text (auto) at the end of the name. To change the path manually, you have to click on the button with a wrench (![wrench-icon](../blender-images/blender-images-icons/wrench.svg)). The wrench button will disappear and the folder icon button will be displayed instead. You can then open the file browser using the folder button. In the browser, select the desired folder or file. Or you can change the path in the text box by typing it in from the keyboard. If the path is set manually, its value will not be changed automatically by the addon. To return the automatic path indication, you need to clear the path input field.
The addon automatically sets these values:

| Parameter | Value |
---|---|
| fs.ltx File | - |
| Gamedata Folder | . |
| Textures Folder | .textures\ |
| GameMtl File | .gamemtl.xr |
| EShader File | .shaders.xr |
| CShader File | .shaders_xrlc.xr |
| Objects Folder | ..rawdata\objects |

"-" - means that automatic path setting does not work for this parameter. The automatic path setting will work if you specify any parameter other than Objects Folder first.

- ## - fs.ltx File
Path to the fs.ltx file. This file is in the X-Ray SDK and stores directory paths. Addon uses fs.ltx file only to automatically set the following paths: Gamedata Folder, Textures Folder, GameMtl File, EShader File, CShader File, Objects Folder. Only these variables from the file are used: $game_data$, $game_textures$, $objects$. The files gamemtl.xr, shaders.xr, shaders_xrlc.xr are searched in the directory that is specified in $game_data$. If parameters Gamedata Folder, Textures Folder, GameMtl File, EShader File, CShader File, Objects Folder are already configured, it is not necessary to specify fs.ltx File.
Examples of use: this parameter is needed to set paths correctly automatically if fs.ltx file was edited and X-Ray SDK uses paths that are different from gamedata, gamedata\textures, rawdata\objects.

- ## Gamedata Folder
The path that must refer to the gamedata folder (or to the folder specified in $game_data$ if fs.ltx has been changed). This path is used only for automatic installation of the following parameters: Textures Folder, GameMtl File, EShader File, CShader File, Objects Folder. The paths are automatically set by adding Gamedata Folder and preset values. The values are set as follows: Textures Folder - textures, GameMtl File - gamemtl.xr, EShader File - shaders.xr, CShader File - shaders_xrlc.xr, Objects Folder - ..rawdata\objects, where .. in the beginning Objects Folder means go one folder back in path. That is, the path to the Objects Folder will look like this: c:\programs\xray_sdk\rawdata\objects\, if Gamedata Folder has the following value: c:\programs\xray_sdk\gamedata\.

- ## - Textures Folder
The path that should refer to $game_textures$. This is usually the gamedata\textures folder which contains the textures. Only the dds format is supported for loading. This path is only used by plugins that import/export formats that support textures (such as *.object, *.dm, *.ogf...). Some plugins do not use this path (for example, *.err, *.skls...). When importing some formats, the addon looks for dds textures at this path and loads them into blender.

- ## - GameMtl File
Path to the gamemtl.xr file. Normally stored in gamedata\gamemtl.xr. This file stores surface materials. In the X-Ray Engine a material is a physical property of the surface, and does not affect the visual presentation (not to be confused with blender materials, which affect visual appearance). X-Ray Engine uses shaders to change the appearance of the surface. The material determines the sounds of footsteps, wallmark textures from shots, friction, particle effects when bullets hit, the ability to get cast shadows from dynamic objects... If this path refers to a gamemtl.xr file, then the list of the parameter GameMtl for materials and dice will be filled with the material names from the gamemtl.xr file and from this list you can click on any material name. If this path does not reference the gamemtl.xr file, then the GameMtl list of materials and bones will be empty. Only the names, text descriptions and integer material IDs are read from the gamemtl.xr file.
- [Meterials list](../../shaders/shaders-list/materials-list.md)

- ## - EShader File
The path to the shaders.xr file. Usually stored in gamedata\shaders.xr. This file contains descriptions of shader settings. EShader is an engine shader that is responsible for surface appearance. If this path refers to the shaders.xr file, the EShader list in blender material settings will be filled in with shader names from this file and you will be able to specify any engine shader name from this list. If this path doesn't reference the shaders.xr file, the EShader list of materials will be empty. Only shader names are read from the shaders.xr file.
- [Shaders list](../../shaders/shaders-list/shaders-list.md)

- ## - CShader File
Path to the shaders_xrlc.xr file. Usually stored in gamedata\shaders_xrlc.xr. This file contains descriptions of the settings that are used by the level geometry compiler (xrLC.exe). CShader - compile shader (compiler shader) specifying properties of the final (game) level geometry to the level compiler. The source geometry, depending on the compiler shader, may have no visible or tangible (for collisions) geometry, have a different way of storing lighting, etc. If this path refers to the shaders_xrlc.xr file, the CShader list in blender materials will fill with shader names from that file and you can specify any compiler shader name from the list. Only shader names are read from shaders_xrlc.xr file.
- [Compiler Shaders List](../../shaders/shaders-list/compiler-shaders-list.md)

- ## - Objects Folder
Path to the folder with the original 3D objects and animations. Usually located in the X-Ray SDK in the rawdata\objects folder. From this folder, the addon can only read *.object and *.skls files. Not all plugins use this folder. Only the object plugin for source objects and the .level plugin for the list of scene objects use it. Also this parameter is used by some operators, for example, Skls File Browser (if you run it from the Motion Refs scroll, Load Active Motion Refs mode). This folder contains the source models and animations in formats that store data without loss of information (without compression).

## Sources
[Source](https://github.com/PavelBlend/blender-xray/wiki/Preferences)