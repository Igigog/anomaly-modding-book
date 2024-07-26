# Creating a location in Blender

___

## Beginning

- download the SDK (A list of SDKs can be found [here](../modding-tools/modding-tools.md))
- Familiarize yourself with the formats for levels (.lights, level, .ai, .cform, .details, .env_mod, .fog_vol, .game, .geom, .geomx, [.hom](../main-folders-and-files/file-formats/index.html#hom-hierarchical-occlusion-mapping), .ltx, .ps_static, .spawn, .wallmarks, .som ([List here](../main-folders-and-files/file-formats/index.html)))

At the moment in the addon for Blender it is not possible to create a full-fledged location (no compiler, creating ai-nodes, etc.), so you need to use it with the SDK.

## Creating Level

Simply create a level. To do this, you can use, for example, [Stalker Asset Library](../resources/models-objects-locations.md) (all objects from the trilogy).

Then you can assign certain flags to objects, such as

- Sectors
- Portals
- HOM
- SOM

And so on.

Those objects that were created by yourself need to be exported in .obj format to the object folder in your SDK and put export path to that file in the model properties.

Next you need to export the scene in the format .level

[Next, you need to build and compile the location](../mapping/index.html)
