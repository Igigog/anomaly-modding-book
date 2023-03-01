# Actor Editor

___

The Actor editor is usually needed to customize objects (NPCs, Objects, etc.)

___

## Interface

### Toolbar

![toolbar centered](sdk-image/toolbar.png)

___

#### Scene

File Button

| Button | Description | Note |
---|---|---|
| Clear | Clears scene | - |
| Load | Loads an object into a new scene | - |
| Save | Saves object | - |
| Save As | Saves the object as | .object<br> .lwo</br> |
| Make Trumbnail | Creates trumbnail | Creates a thumbnail from the camera view |
| Open Recent | Opens recent | - |
| Import | Imports the model into the scene | - |
| Optimize Motions |  |  |
| Batch Convert |  |  |
| Export | Exports the model to formats  | .ogf<br> [.omf](../main-folders-and-files/file-formats/index.html#omf-open-motions-format)<br> [.obj](../main-folders-and-files/file-formats/index.html#object)<br> [.dm](../main-folders-and-files/file-formats/index.html#dm-detail-model)<br>C++ |
| Quit | Exiting the program | - |

___

Preview Object Button

| Button | Description | Note |
---|---|---|
| Custom | After selecting an object in the library it loads the model | It cannot be edited |
| Clear | Clears the scene of objects that were loaded via Preview Object | - |
| Preference | Preference | - |

___

Images Button

| Button | Description |
---|---|
| Image Editor | Open [Image Editor](image-editor.md) |
| Synchronize Textures |  |
| Check New Textures |  |

___

Sounds Button

| Button | Description |
---|---|
| Sound Editor |  |
| Synchronize Sounds |  |

___

Preferences Button

Opens a window with preferences

![preferences centered](sdk-image/actor-editor-preferences.png)

___

##### Model

Bone Parts Button

Shows the Bone Parts of the object's skeleton

![bone-parts centered](sdk-image/actor-editor-bone-parts.png)

Example Bone Parts object shooting_target_1.object
___

Render Style

| Render Style | Description |
---|---|
| Editor | Editor Render Style |
| Engine | Engine (X-Ray 1.6) Render Style |
| Clip Maker |  |

___

##### Object Items

Shows available items at the object (Surface, Object, Motions, Bones, etc.)
___

##### Item Properties

Shows parameters of the selected element of the model object

**For the object**

| Flags | Description |
---|---|
| Make Progressive |  |
| HQ Geometry |  |

| Transform | Description |
---|---|
| Position |  |
| Rotation |  |
| BBox Min |  |
| BBox Max |  |

| LOD | Description |
---|---|
| Reference | LOD Reference |

**Summary**

Displays information about the object

| Game options | Description |
---|---|
| User Data |  |

**For surface**

| Surface | Description |
---|---|
| Name | Texture Name |
| Texture | Path to texture |
| Shader | Shader |
| Compile | Compile Shader |
| Game Mtl | Game Mtl Shader |
| 2 Sided | Double-sided texture |
| Face Count | Face Count |
