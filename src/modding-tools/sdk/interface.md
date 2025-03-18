# Interface

___

Depending on the different versions of the SDK and the editors in it, the interface may be different

SDK 0.7
![sdk-0-7 centered](./images/sdk-0-7.png)

SDK 0.8 by RedPanda
![sdk-0-8 centered](./images/sdk-0-8.png)

But the basic buttons and their functionality remain in place

## Editing Toolbar

Hotkeys in the table are standard (they can be set under Preference > Keyboard > Hotkeys)

| Image | Name | Description | Note |
|:---:|---|---|---|
| ![undo](./icons/undo.bmp) | Undo | Undo | - |
| ![redo](./icons/redo.bmp) | Redo | Redo | - |
| ![select](./icons/select.bmp) | Select | Used to select objects | Before the object can be moved, it must be selected with this button |
| ![add](./icons/add.bmp) | Add | Adds objects | To add an object, select it in the object panel |
| ![move](./icons/move.bmp) | Move | Allows to move objects | - |
| ![rotate](./icons/rotate.bmp) | Rotate | Allows to rotate objects | - |
| ![scale](./icons/scale.bmp) | Uniform Scale | Allows to scale objects | Scale object on all axes |
| ![lock-to-x](./icons/lock-to-x.bmp) | Restrict to X | Locks the object to the X-Axis | allowing movement/rotation only on that axis |
| ![lock-to-y](./icons/lock-to-y.bmp) | Restrict to Y | Locks the object to the Y-Axis | allowing movement/rotation only on that axis |
| ![lock-to-z](./icons/lock-to-z.bmp) | Restrict to Z | Locks the object to the Z-Axis | allowing movement/rotation only on that axis |
| ![lock-to-zx](./icons/lock-to-zx.bmp) | Restrict to Z/X | Locks the object to the Z and X Axis | allowing movement/rotation only on that axis |
| ![parent-cs-toggle](./icons/parent-cs-toggle.bmp) | Parent CS Toggle |  |  |
| ![non-uniform-scale](./icons/non-uniform-scale.bmp) | Non-Uniform Scale | Ignores proportions when scaling | Scale object along the selected axis only |
| ![grid-snap-toggle](./icons/grid-snap-toggle.bmp) | Grid Snap Toggle | Snap the object to the grid when creating or when Move + Ctrl + LMB | - |
| ![object-snap-toggle](./icons/object-snap-toggle.bmp) | Object Snap Toggle | Snap an object to an object when creating or with Move + Ctrl + LMB | - |
| ![moving-snap-to-object-toggle](./icons/moving-snap-to-object-toggle.bmp) | Moving Snap To Object Toggle | Snap an object to an object in Move mode | - |
| ![normal-aligment](./icons/normal-aligment.bmp) | Normal Aligment | Take into account the normal during object snapping | - |
| ![vertex-snap-toggle](./icons/vertex-snap-toggle.bmp) | Vertex Snap Toggle | Snap the object to the object vertices when creating or when Move + Ctrl + LMB | - |
| ![angle-snap-toggle](./icons/angle-snap-toggle.bmp) | Angle Snap Toggle | Discrete rotation | Works when the Rotate button is pressed |
| ![moving-snap-toggle](./icons/moving-snap-toggle.bmp) | Moving Snap Toggle | Discrete motion | Works when the Move button is pressed |
| ![zoom-extent](./icons/zoom-extent.bmp) | Zoom Extent | Standard zoom of the entire scene | - |
| ![zoom-extent-selected](./icons/zoom-extent-selected.bmp) | Zoom Extents Selected | Standard zoom of the selected object | - |
| **F** | Front View | Front View | - |
| **B** | Back View | Back View | - |
| **L** | Left View | Left View | - |
| **R** | Right View | Right View | - |
| **T** | Top View | Top View | - |
| **B** | Bottom View | Bottom View | - |
| **X** | Reset View | Reset View | - |
| P | Zoom Extents | Free Camera Mode | - |
| A | Zoom Extents Selected | Centers the camera view on the origin of coordinates | - |
| F | Zoom Extents Selected | Camera Flight Mode | - |
| Simulate | Simulate | Enables physics simulation | Only in [Actor](../../reference/modding-tools/sdk/actor-editor/actor-editor.md) & [Level Editor](./level-editor/level-editor.md) |
| UseSimulatePositions | UseSimulatePositions |  | Only in [Level Editor](./level-editor/level-editor.md) |

___

## Scene Properties

### Options Button

| Render | Description |
|---|:---:|
| Quality | Render quality |
| Fill Mode | Draw or Fill mode<br> Point<br> Wireframe<br> Solid |
| Shade Mode | Shading mode selection<br> [Flat](https://en.wikipedia.org/wiki/Shading#Flat_shading)<br> [Gouraud](https://en.wikipedia.org/wiki/Gouraud_shading) |
| Edged Face | Enables displaying edges at polygons |
| HW Render | Enables Hardware Rendering |
| Linear Filter | Enables linear filtering |
| Textures | Enables texture display |

| Options | Description |
|---|---|
| Draw Safe React |  |
| Draw Grid | Draw Grid |
| Weather |  |
| Fog |  |
| Mute Sounds | Mutes sounds from objects that have sound in the SDK |
| Light Scene | Light Scene |
| Real Time | Real Time |

### Macro Button

### Log Button

Outputs log

### Stat Button

Displays scene statistics

### Break Button

Break operation

### Status Button

Show operation status
