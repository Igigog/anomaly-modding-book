# Compiling Maps

___

To compile, you need to make a location build. To do this, open or [create](../blender/creating-a-location-in-blender-and-compiling-it-with-the-sdk.md) a location in the Level Editor in the SDK.

For location build this is the minimum set:

- 1 light source
- 1 spawn element
- 1 glow

If the location will have stalkers, you need to create ai grid

## Location building

Created a folder with the name, which was specified in the scene properties.
It contains all the data about the location.

## Compiling the location

In order to compile a location, you need to put it in the:

- game_maps_single.ltx
- game_levels.ltx

After that you can use compilers that are included directly in SDK, or use third party compilers (such as [Universal x64 level compilers](../modding-tools/universal-x64-level-compilers.md)).
