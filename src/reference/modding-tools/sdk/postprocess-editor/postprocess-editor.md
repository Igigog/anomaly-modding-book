# Postprocess Editor

___

Needed to create postprocess files ([.ppe](../../../file-formats/postprocceses/ppe.md))

___

![Alt text centered](./images/ppe-editor.png)

___

## Interface

### File Button

| Button | Description | HotKey |
|:---:|---|---|
| ![ppe-new](../icons/ppe-new.bmp) | New ppe file | Ctrl+N |
| ![ppe-open](../icons/ppe-open.bmp) | Load ppe file | Ctrl+O |
| ![ppe-save](../icons/ppe-save.bmp) | Save ppe file | Ctrl+S |

### Add Color

> Fills the picture with opaque RGB color on top of everything

| Unit | Description | Buttons |
|---|---|---|
| Point List | Places points on the timeline | `+` - Adds a point<br> `-` - Removes a point<br> `Clear` - Clears the list of points<br> `CopyForm` - Copies points from another selected tab |
| Color | Edits the color of a selected point | `Key Time(sec)` - the time of the point on the timeline<br> `R` - Red<br> `G` - Green<br> `B` - Blue<br> ![Alt text](../icons/ppe-palette.png) - Palette |

### Base Color

> Fills the picture with a semi-transparent base color

| Unit | Description | Buttons |
|---|---|---|
| Point List | Places points on the timeline | `+` - Adds a point<br> `-` - Removes a point<br> `Clear` - Clears the list of points<br> `CopyForm` - Copies points from another selected tab |
| Color | Edits the color of a selected point | `Key Time(sec)` - the time of the point on the timeline<br> `R` - Red<br> `G` - Green<br> `B` - Blue<br> ![Alt text](../icons/ppe-palette.png) - Palette |

### Grey Color

> Controls the amount of inverse saturation, that is, the more gray the less saturated the image

| Unit | Description | Buttons |
|---|---|---|
| Point List | Places points on the timeline | `+` - Adds a point<br> `-` - Removes a point<br> `Clear` - Clears the list of points<br> `CopyForm` - Copies points from another selected tab |
| Color | Edits the color of a selected point | `Key Time(sec)` - the time of the point on the timeline<br> `R` - Red<br> `G` - Green<br> `B` - Blue<br> `Inensity` - Gray intensity parameter<br> ![Alt text](../icons/ppe-palette.png) - Palette |

### Duality

> Doubled screen tab

| Unit | Description | Buttons |
|---|---|---|
| Point List | Places points on the timeline | `+` - Adds a point<br> `-` - Removes a point<br> `Clear` - Clears the list of points<br> `CopyForm` - Copies points from another selected tab |
| Node Data | Edits the selected point | `Key Time(sec)` - the time of the point on the timeline<br> `Duality-H` - Vertical image doubling<br> `Duality-V` - Horizontal image doubling |

### Noise

> Noise parameters tab

| Unit | Description | Buttons |
|---|---|---|
| Point List | Places points on the timeline | `+` - Adds a point<br> `-` - Removes a point<br> `Clear` - Clears the list of points<br> `CopyForm` - Copies points from another selected tab |
| Node Data | Edits the selected point | `Key Time(sec)` - the time of the point on the timeline<br> `Noise Intensity` - Noise intensity<br> `Noise Grain` - Noise granularity<br> `Noise FPS` - FPS in noise |

### Blur

> Blurring

| Unit | Description | Buttons |
|---|---|---|
| Point List | Places points on the timeline | `+` - Adds a point<br> `-` - Removes a point<br> `Clear` - Clears the list of points<br> `CopyForm` - Copies points from another selected tab |
| Color | Edits the color of a selected point | `Key Time(sec)` - the time of the point on the timeline<br> `R` - Red<br> `G` - Green<br> `B` - Blue<br> `Inensity` - Intensity<br> ![Alt text](../icons/ppe-palette.png) - Palette |

### Color Mapper

> Tab for postprocess gradient

| Unit | Description | Buttons |
|---|---|---|
| Point List | Places points on the timeline | `+` - Adds a point<br> `-` - Removes a point<br> `Clear` - Clears the list of points<br> `CopyForm` - Copies points from another selected tab |
| Node Data | Edits the selected point | `Key Time(sec)` - the time of the point on the timeline<br> `Influence` - Opacity ("influence") of the gradient<br> `String` - Gradient texture name input field (usually grad/grad_texture)  |
