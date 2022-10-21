# Modified OGF Editor by ValeroK

- Program Developers:
  - Mortany (Original Author)
  - ValeroK
- The version described in the article: [3.3](https://github.com/VaIeroK/OGF-tool/releases/tag/3.3)
- [Ap-pro forum topic](https://ap-pro.ru/forums/topic/3549-ogfdm-editor-v24)

___

## About

Tool for working with .ogf and [.dm](../../main-folders-and-files/file-formats/dm.md) format

![ogf-editor centered](modding-tools-images/ogf-editor-by-valerok.png)

## Features

- Editing textures and model shaders
- Editing Userdata
- Editing Motion Refs
- Editing Bone Names
- Ability to change the position of meshes
- Viewport
- Ability to delete mesh models
- Bone materials editing
- Editing Bone weights
- Editing center of mass of bones
- Editing model description
- View complete list of bones
- Integration with OGF Viewer (WIP)
- Saving .ogf in .object, .skl, .skls, .bones formats ([list of formats here](../../main-folders-and-files/file-formats/index.html))
- Viewing the list of embedded animations
- Hotkeys
- Ability to write UserData and MotionRefs chunks (even if the model did not have them before)
- Editing the position and rotation of the bones
- Ability to remove unneeded Motion refs and Userdata chunks
- Fix Gunslinger models (models are fixed automatically when you save them)
- Tools for working with embedded animations
- Integration with [OMF Editor](omf-editor-by-valerok.md) for editing parameters of embedded animations

## Functionality

### Hotkeys

- F4 - Load file
- Ctrl+S - Save file
- F6 - Save as
- F3 - Reload file

### Buttons

- #### File Button

| Button | Description |
---|---|
| Load | Loads the selected .ogf |
| Save | Save .ogf |
| Save As | Save as .ogf |
| Export | Export as .object<br> .bones<br> .obj<br> .omf<br> .skl<br> .skls<br> |
| Reload | Reloads the program |
| Exit | Exits the program |

- #### Tools Button

| Button | Description |
---|---|
| Open in Object Editor | Open  in Object Editor |
| Import OGF Params | Imports parameters of another .ogf with selectable parameters |
| Recalc Normals | Пересчитывает нормали у выбранного меша |
| Converter | NPC CoP to SoC<br> NPC SoC to CoP<br> |

- #### OGF Info Button

Display information about the loaded OGF

| Field | Description |
---|---|
| OGF Version | The .ogf version |
| Model Type | Model type |
| Motions Refs |  |
| Motions |  |
| Links |  |
| Verts |  |
| Faces |  |

| Field | Description |
---|---|
| Source File | Source file |
| Converter | Converter |
| Creator | Creator |
| Editor | Editor |
| Export Time | Export Time |
| Creation Time | Creation Time |
| Modified Time | Modified Time |

| Button | Description |
---|---|
| Repair timers |  |

- #### Settings Button

| Field | Description |
---|---|
| Image path |  |
| FS Ltx path |  |
| Textures path |  |
| Game Mtl path |  |
| OMF Editor path |  |
| Object Editor path |  |

| Button | Description |
---|---|
| Load textures alpha channel in Viewport - slow loading |  |

- #### Model Format Button

Changes the format of motion references for the model

### Checkboxes

| Field | Description |
---|---|
| Create Backup | Creates a backup file |

### Sections

- #### Textures

Section with texture and shader path editing. Also here can delete or move meshes of the model (If there is only one mesh, you cannot delete it)

##### Mesh: [Mesh number]

| Field | Description |
---|---|
| Texture Path: | Path to texture |
| Shader Name: | Shader |

- #### User Data

File with userdata

- #### Motion Refs

A field with paths for animation

- #### Motions

Displays animations that are built into the model

If you right-click on this field, then the context menu will pop up where you can:

| Button | Description |
---|---|
| Edit | Opens the OMF Editor (first, you need to specify the path to it in the settings) |
| Load | Loads selected .omf files as an embedded movement |
| Delete | Deletes all downloaded animations |

- #### Bone Names

Displays a list of bones and their number

- #### Bone Params

Editing the bone parameter

##### Bone id: [Bone number]

| Field | Description |
---|---|
| Bone Name | Bone Name |
| Parent Bone | Parent Bone |
| Material | Material |
| Mass | Mass |
| Center Of Mass | Center of mass |
| Position | Bone position |
| Rotation | Bone rotation |

- #### Lod

Specifies the path to the Lod model

- #### View Port

Viewport

___

## Sources

[Source Code of Original OGF Editor by Mortany](https://github.com/mortany/OGF-tool)

[Source Code of Modified OGF Editor by ValeroK](https://github.com/VaIeroK/OGF-tool)