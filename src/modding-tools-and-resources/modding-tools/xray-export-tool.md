# THM Editor by Valerok
## Program Developer: Valerok

## About:

Tool for fast editing and exporting raw stalker formats

## Features

- Uncompressed ogf export (HQ Geometry+)
- HQ Geometry with patches, exports better than SDK
- Save and load .bones settings
- Load, save, delete skls animations
- Export animations in 8 bit, 16 bit and uncompressed
- Optimization of meshes with the same textures and shaders is disabled by default (they will not merge into one when exported so you can edit them in the OGF Editor)
- Tuning and collision generation
- Ability to resize models and animations when exporting, keeping the modifier in .object
- Ability to assign to .object format
- Editing Userdata
- Editing LOD
- Editing Motion refs
- Export models with original normals without X-Ray anti-aliasing groups
- Generating boat models

## Functionality

### Hotkeys

- F3 - Export
- F4 - Load
- F5 - Quick Save .object
- F6 - Save

### Buttons

- #### File Button

| Button | Description |
---|---|
| Load | Imports the selected .object, .skl/.skls, .bones, Bone Parts file |
| Save | Saves the file as a .object, .skl, .skls, .bones, Bone Parts file |
| Export | Exports the file as an .ogf, .omf, .object, .dm |
| Delete | Deletes skls/ Make bone parts to default |
| Exit | Exit | Exit program

- #### Tools

| Button | Description |
---|---|
| Surface Params | Enable all 2 sided/Disable all 2 sided |
| Shape Params | Generate Shapes/Type Helper (All None - All Box - All Sphere - All Cylinder) |
| Generate LOD | Open the LOD generation tab |

- #### Help

Outputs helpful information

### Sections

- #### Flags

##### Edit Export Flags

###### Motion Export

| Checkboxes | Description |
---|---|
| 8 bit | Compression animation for the SoC format |
| 16 bit | Compression animation for CoP format |

| Field | Description |
---|---|
| Object Scale | Changes the size of the object when exporting, affecting the size of the model and the size of animations |

| Checkboxes | Description |
---|---|
| Scale Center of Mass | If you export with a resized object, the collision centers of mass will be recalculated to the new size |

###### Model Export

| Checkboxes | Description |
---|---|
| HQ Geometry |  |
| HQ Geometry + | Exports the model without optimization of vertices and faces |
| Make Progressive Meshes | Creates progressive meshes when exporting OGF |
| Make Stripify Meshes | Includes optimized vertices and faces on meshes (Optimize meshes for old DirectX and video cards) |
| Optimize Surfaces | Combines meshes with the same texture and shader names |

- #### Surfaces

Texture Name

| Field | Description |
---|---|
| Texture | Texture path |
| Shader | Shader path |

| Checkboxes | Description |
---|---|
| 2 Sided | After exporting the .ogf the model will be rendered from the outside and inside. Increases the number of polygons in the model by a factor of 2. |

- #### Bones

##### Bone Name: Bone name

| Checkboxes | Description |
---|---|
| No Pickable | When activated, Ray Querry and hit wallmarks will skip this element |
| No Physics | When activated, the engine ignores the physics of the shape |
| Remove After Break | When activated, all bones, after spawning an object, will start a timer "remove_time" from the config, after which the object will be removed |
| No Fog Collider | When activated Volumetric Fog will ignore this element |

| Checkboxes | Description |
---|---|
| Shape Type: | None - Box - Sphere - Cylinder |

- #### Motions

Shows the animations that are contained in the file

- #### Motions Refs

Shows the Motion Reference that is contained in the file

- #### UserData

Shows Used Data file

- #### LOD

| Checkboxes | Description |
---|---|
| LOD Path | Path to LOD |

## Sources

[Source Code](https://github.com/VaIeroK/XrayExportTool)