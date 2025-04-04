# Actor Editor - Item Properties - Object

___

![alt text](../../images/ae-ip-object.png)

## Object

| Name | Description |
|---|---|
| Object Type | [Static](../../../../glossary/models/static-object.md)<br> [Dynamic](../../../../glossary/models/dynamic-object.md)<br> [HOM](../../../../glossary/optimization/hom.md)<br> [Multiply Usage](../../../../glossary/models/multiply-usage.md)<br> [Sound Occluder](../../../../reference/file-formats/game-levels/som.md) |

### Flags

| Name | Description | Note |
|---|---|---|
| Make Progressive |  | Only for Dynamic Object Type |
| Disable Mesh Oprimization | If not disabled, it optimizes the mesh by removing unnecessary edges and vertices, reallocating memory and updating linked data structures | Only for Dynamic Object Type |
| HQ Geometry |  | Only for Dynamic Object Type |
| Using LOD |  | Only for Multiply Usage Object Type |

### Transform

| Name | Description |
|---|---|
| Position | Object position |
| Rotation | Object rotation |
| Scale | Object scale |
| BBox Min | Object [Bounding Box](https://en.wikipedia.org/wiki/Minimum_bounding_box) Min |
| BBox Max | Object [Bounding Box](https://en.wikipedia.org/wiki/Minimum_bounding_box) Max |

### LOD

| Name | Description | Note |
|---|---|---|
| Reference | LOD reference | - |
| Action | Make HQ<br> Make LQ | Only for Multiply Usage Object Type |

### Summary

#### Geometry

| Name | Description |
|---|---|
| Objects | Objects vertex and face count |
| Meshes | Meshes vertex and face count |

#### Game Options

| Name | Description |
|---|---|
| User Data | User data |
