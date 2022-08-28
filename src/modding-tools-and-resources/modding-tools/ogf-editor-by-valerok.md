# Modified OGF Editor by ValeroK
- Program Developers: Mortany (Original Author), ValeroK
- The version described in the article: 2.4
- [Ap-pro forum topic](https://ap-pro.ru/forums/topic/3549-ogfdm-editor-v24)

___

## About:

Tool for working with .ogf and .dm format

![ogf-editor centered](modding-tools-images/ogf-editor-by-valerok.png)

## Features

- Editing textures and model shaders
- Editing Userdata
- Editing Motion Refs
- Editing Bone Names
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

- F3 - Reload file
- F4 - Open file
- F5 or Ctrl+S - Save file
- F6 - Save as

### Buttons

- #### File Button

| Button | Description |
---|---|
| Load | Loads the selected .ogf |
| Save | Save .ogf |
| Save As | Save as .ogf |
| Export | Export as .object, .bones, .omf, .skl, .skls |
| Reload | Reloads the program |
| Exit | Exits the program |

- #### Tools Button

| Button | Description |
---|---|
| Open Skeleton in Object Editor |  |
| Motion Tools |  |
| Import data from same model |  |

- ##### Motion Tools Button

Becomes active only after switching to the Motions section.

| Button | Description |
---|---|
| Delete Motions | Deletes the list of animations |
| Edit in OMF Editor | Editing Animations via OMF Editor (First, you must specify the path to the OMF Editor .exe) |
| Replace Motions | Replaces the list of animations with another |

- #### OGF Info Button

Display information about the loaded OGF 

| Field | Description |
---|---|
| OGF Version | The .ogf version |
| Model Type | Model type |
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

- #### View Button

Opens the OGF View with the selected model

### Checkboxes

| Field | Description |
---|---|
| Create Backup | Creates a backup file |

### Sections

- #### Textures

Section with texture and shader path editing

##### Set: [Texture number]

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

## Sources
[Source Code of Original OGF Editor by Mortany](https://github.com/mortany/OGF-tool)

[Source Code of Modified OGF Editor by ValeroK](https://github.com/VaIeroK/OGF-tool)