# OGF Editor by Valerok

## About
Modified tool for working with [.ogf](../../main-folders-and-files/file-formats/README.md) format

![ogf-editor](modding-tools-images/ogf-editor-by-valerok.png)

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
- Saving [.ogf](../../main-folders-and-files/file-formats/README.md) in [.object](../../main-folders-and-files/file-formats/object.md), [.skl](../../main-folders-and-files/file-formats/README.md), [.skls](../../main-folders-and-files/file-formats/README.md), [.bones](../../main-folders-and-files/file-formats/README.md) formats
- Viewing the list of embedded animations
- Hotkeys
- Ability to write UserData and MotionRefs chunks (even if the model did not have them before)
- Editing the position and rotation of the bones
- Ability to remove unneeded Motion refs and Userdata chunks
- Fix Gunslinger models (models are fixed automatically when you save them)

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
| Save As | Save as .object, .skls, .skl or .bones |
| Reload | Reloads the program |
| Exit | Exits the program |

- #### OGF Info Button

Display information about the loaded OGF 

| Field | Description |
---|---|
| OGF Version | The .ogf version |
| Model Type | Model type |
| Source File | Source file |
| Converter |  |
| Creator | Creator |
| Editor | Editor |
| Export Time | Export Time |
| Creation Time | Creation Time |
| Modified Time | Modified Time |

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

## Sources
[Source Code](https://github.com/VaIeroK/OGF-tool)