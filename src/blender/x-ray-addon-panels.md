# Panels

## Scene Properties

### X-Ray Engine: Project

![project centered](/src/blender/blender-images/panels/Project.png)

| Button | Description |
---|---|
| Export Root | The root folder for export |
| Texture Names from Image Paths | Generate Texture Names from image paths:<br> gamedata/textures/**texture_name**.*extension* |

___

## Material Properties

### X-Ray Engine: Material

![material centered](/src/blender/blender-images/panels/Meterial.png)

| Button | Note |
---|---|
| Two Sided | The model will be drawn from the outside and inside. The number of polygons in the model is doubled. |
| Shader | [list of shaders](../../shaders/shaders-list/shaders-list.md) |
| Compile | [list of compile shaders](../../shaders/shaders-list/compiler-shaders-list.md) |
| Material | [list of materials](../../shaders/shaders-list/materials-list.md) |

___

## Bone Properties

### X-Ray Engine: Bone

![bone centered](/src/blender/blender-images/panels/Bone.png)

| Button | Description | Note |
---|---|---|
| Exportable | Will the bone be exported | - |
| Lenght |  |  |
| Material | Material | [list of materials](../../shaders/shaders-list/materials-list.md) |
| Shape Type | Shape type for [ODE](../../terminology/terminology.md#ode) | None<br> Box<br> Sphere<br> Cylinder |
| Edit Shape | Edit Shape | - |
| No Pickable | <acronym title="Simply put, a beam of light (read DXR for more)">Ray Query Rays</acronym>, hit wallmarks will skip this element |  |
| No Physics | The engine ignores shape physics | - |
| Remove After Break | When activated, all dice will start a "remove_time" timer from the config, after which the object will be removed | Example: wooden box |
| No Fog Collider | Volumetric Fog will ignore this element | - |
| Joint Type | Joint type for [ODE](../../terminology/terminology.md#ode) | None<br> Rigid<br> Cloth<br> Joint<br> Wheel<br> Slider |
| Breakable |  |  |
| Mass | Bone mass | - |
| Center of Mass | Center of Mass | - |
| Edit Center | Edit Center of Mass | - |
