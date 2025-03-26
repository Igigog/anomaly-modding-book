# Modified OGF Editor by ValeroK

___

## Info

|  |  |
|---|---|
| Program Developer | Mortany (Original Author)<br>ValeroK |
| Described Version | [4.1](https://github.com/VaIeroK/OGF-tool/releases/tag/4.1) |
|  | [Ap-pro forum topic](https://ap-pro.ru/forums/topic/3549-ogfdmdetailsobj-editor-v41/) |

___

## About

Tool for working with [*.ogf](../../reference/file-formats/models/ogf.md) and [*.dm](../../reference/file-formats/models/dm.md) format

![ogf-editor centered](images/ogf-editor-by-valerok.png)

## Features

- Ability to work with all *.ogf parameters
- Ability to work with meshes in *.ogf
- Viewport
- Integration with OGF Viewer and [OMF Editor](../../modding-tools/animations/omf-editor-by-valerok.md)
- Saving *.ogf in [*.object](../../reference/file-formats/models/object.md), [*.skl](../../reference/file-formats/animations/skl-skls.md), [*.skls](../../reference/file-formats/animations/skl-skls.md), [*.bones](../../reference/file-formats/models/bones.md) formats
- Hotkeys
- Fix Gunslinger models (models are fixed automatically when you save them)

## Functionality

### Hotkeys

- F4 - Load file
- Ctrl+S - Save file
- F6 - Save as
- F3 - Reload file

### Buttons

- #### File Button

| Button | Description |
|---|---|
| Load | Loads the selected *.ogf |
| Save | Save *.ogf |
| Save As | Save as *.ogf |
| Export | Export as<br> *.object<br> \*.bones<br> \*.obj<br> \*.omf<br> \*.skl<br> \*.skls<br> |
| Reload | Reloads the program |
| Exit | Exits the program |

- #### Tools Button

| Button | Description |
|---|---|
| Open in Object Editor | Open  in Object Editor |
| Import OGF Params | Imports parameters of another .ogf with selectable parameters |
| Recalc Normals | Recalculates the normals of the selected mesh |
| Recalc Bounding Box | Recalculates Bounding Box |
| Remove Progressive Meshes | Remove Progressive Meshes |
| Move/Rotate Model | Move/Rotate Model |
| Converter | NPC CoP to SoC<br> NPC SoC to CoP<br> |

- #### OGF Info Button

Display information about the loaded OGF

| Field | Description |
|---|---|
| OGF Version | The .ogf version |
| Model Type | Model type |
| Motions Refs | Motions Refs |
| Motions | Motions |
| Links | Links |
| Verts | Verts |
| Faces | Faces |

| Field | Description |
|---|---|
| Source File | Source file |
| Converter | Converter |
| Creator | Creator |
| Editor | Editor |
| Export Time | Export Time |
| Creation Time | Creation Time |
| Modified Time | Modified Time |

| Button |
|---|
| Repair timers |

- #### Settings Button

| Field |
|---|
| Image path |
| FS Ltx path |
| Textures path |
| Game Mtl path |
| OMF Editor path |
| Object Editor path |

| Button |
|---|
| Load textures alpha channel in Viewport - slow loading |

- #### Model Format Button

Changes the format of motion references for the model

### Checkboxes

| Field | Description |
|---|---|
| Create Backup | Creates a backup file |

### Sections

- #### Textures

Section with texture and shader path editing. Also here can delete or move meshes of the model (If there is only one mesh, you cannot delete it)

##### Mesh: \[Mesh number]

| Field | Description |
|---|---|
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
|---|---|
| Edit | Opens the OMF Editor (first, you need to specify the path to it in the settings) |
| Load | Loads selected *.omf files as an embedded movement |
| Delete | Deletes all downloaded animations |

- #### Bone Names

Displays a list of bones and their number

- #### Bone Params

Editing the bone parameter

##### Bone id: \[Bone number]

| Field | Description |
|---|---|
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
