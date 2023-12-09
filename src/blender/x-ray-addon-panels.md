# Panels

## Object Properties

### X-Ray Engine: Object

![Alt text](blender-images/panels/Object.png)

#### Object

<table>
<thead>
  <tr>
    <th>Params</th>
    <th>Description</th>
    <th>Extra Params</th>
    <th>Description</th>
    <th>Type</th>
    <th>Species</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="11">Type</td>
    <td rowspan="11">Object Type</td>
    <td rowspan="5">Custom</td>
    <td rowspan="5">Custom Type Object</td>
    <td rowspan="5">Static<br>Dynamic</td>
    <td>Progressive</td>
  </tr>
  <tr>
    <td>LOD</td>
  </tr>
  <tr>
    <td>HOM</td>
  </tr>
  <tr>
    <td>Multiply Usage</td>
  </tr>
  <tr>
    <td>Sound Occluder</td>
  </tr>
  <tr>
    <td>Sound Occluder</td>
    <td>Sound Occlusion Model</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Multiply Usage</td>
    <td>Needed for automatic creation of LOD at compilation stage</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>HOM</td>
    <td>Hierarchical Occlusion Mapping</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Progressive Dynamic</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Dynamic</td>
    <td>Any movable object with bones</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Static</td>
    <td>Any static object at the level</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>HQ Export</td>
    <td>HQ Export</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>LOD Reference</td>
    <td>LOD Reference</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Export Path</td>
    <td>Export Path</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td>User Data</td>
    <td>User Data</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
</tbody>
</table>

##### Motions

| Button/Name | Description | Extra Params | Description |
---|---|---|---|
| Play Active Motion | Play Active Motion | - | - |
| Custom Names | Enable Custom Names for Export | - | - |
| Show | Show | Action<br> Export<br> Both | - |
| Dependency | On what skeleton do actions rest | - | - |

##### Revision

| Name | Description |
---|---|
| Owner Name | Owner Name |
| Created Time | Created Time |
| Moder Name | Moder Name |
| Modified Time | Modified Time |

#### Details

| Button/Name | Description |
---|---|
| No Waving | ? |
| Min Scale |  |
| Max Scale |  |
| Detail Index | ? |
| *Color* | ? |

#### Level

<table>
<thead>
  <tr>
    <th></th>
    <th>Type</th>
    <th>Description</th>
    <th></th>
    <th>Description</th>
    <th></th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="39">Type</td>
    <td>CForm</td>
    <td></td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="16">Light</td>
    <td rowspan="16"></td>
    <td rowspan="3">Controller</td>
    <td></td>
    <td>Static</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Hemi</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Sun</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">Light Type</td>
    <td></td>
    <td>Point</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Spot</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Directional</td>
    <td></td>
  </tr>
  <tr>
    <td>Diffuse</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Specular</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Ambient</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Cutoff Range</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Falloff</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Constant Attenuation</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Linear Attenuation</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Quadric Attenuation</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Inner Angle Theta</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Outer Angle Phi</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="2">Portal</td>
    <td rowspan="2"></td>
    <td>Sector Front</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Sector Back</td>
    <td></td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="16">Visual</td>
    <td rowspan="16"></td>
    <td>Normal</td>
    <td></td>
    <td>Use Fastpath Geometry</td>
    <td></td>
  </tr>
  <tr>
    <td>Hierrarhy</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Progressive</td>
    <td></td>
    <td>Use Fastpath Geometry</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="6">Tree Static</td>
    <td></td>
    <td>Light</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Hemi</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Sun</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Light</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Hemi</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Sun</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="6">Tree Progressive</td>
    <td></td>
    <td>Light</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Hemi</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Sun</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Light</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Hemi</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>Sun</td>
    <td></td>
  </tr>
  <tr>
    <td>LOD</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="4">Level</td>
    <td rowspan="4"></td>
    <td>Sectors Object</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Portals Object</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Lights Object</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Glows Object</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
</tbody>
</table>

___

## Object Data Properties

### X-Ray Engine: Mesh

![Alt text](blender-images/panels/Mesh.png)

| Button | Desctiption |
---|---|
| Visible |  |
| Locked |  |
| SGMask |  |

### X-Ray Engine: Armature

![Alt text](blender-images/panels/Skeleton.png)

| Button | Desctiption | Extra | Extra Desc |
---|---|---|---|
| Display Bone Shapes |  | - | - |
| Display Bone Mass Centers |  | Cross Size |  |
| Display Bone Limits |  | Gizmo Radius |  |
| Use Limits |  | IK<br> X-Ray |  |

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
| Joint Type | Joint type for [ODE](../../terminology/terminology.md#ode) | None<br> Rigid<br> Cloth<br> Joint<br> Wheel<br> Slider<br> Custom |
| Breakable |  |  |
| Mass | Bone mass | - |
| Center of Mass | Center of Mass | - |
| Edit Center | Edit Center of Mass | - |

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
| Suppress Shadows |  |
| Suppress Wallmarks |  |
| Texture UV |  |
| Light Map UV |  |
| Light Map 1 |  |
| Light Map 2 |  |
| Light Vertex Color |  |
| Sun Vertex Color |  |
| Hemi Vertex Color |  |
