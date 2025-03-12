# Engine Shader Parametres

___

## About

[Shader List Here](../shaders/shaders-list/shaders-list.md)

### Shader Types

| Name | Description |
|---|---|
| \<none> |  |
| EDITOR: selection | Designed to display object selection in the SDK |
| EDITOR: wire | Wireframe shader |
| INTERNAL: blur | Blur effect (dx8) |
| INTERNAL: gray-scale effect | Discoloration effect (dx8) |
| INTERNAL: lighting projecting | Lightening effect (dx8) |
| INTERNAL: shadow projecting | General shadow projection (dx8) |
| LEVEL: (lmap+env\*const)*base | A type of shader with a wide range of functions. Through it you can transform ID0 textures, assign Environment map to them and customize them, with changing RGBA constants |
| LEVEL: Implicit | Designed to apply illuminance information to model geometry from light sources such as the sun (Outdated) |
| LEVEL: Implicit**detail | Designed to replace the outdated LEVEL: implicit. Allows to apply several types of detail map to the main texture, supports mask technology |
| LEVEL: detail objects | Designed for detailed objects like grass. Supports alpha channel dissolution |
| LEVEL: diffuse*base | A shader designed to apply vertex lighting to the geometry that will use it |
| LEVEL: diffuse*base.aref | A shader designed to apply vertex lighting to geometry to which alpha channel textures are assigned |
| LEVEL: lmap*(env^base) | Lightmap type of shader with a feature set such as Environment map and Alpha-Blend |
| LEVEL: lmap*base (default) | Default Lightmap shader type. This shader type is used in most of the geometry in the game. It can use tessellation |
| LEVEL: lmap*base.aref | A shader designed to apply lightmap lighting to geometry to which alpha channel textures are assigned |
| LEVEL: trees/bushes | A type of shader for flora and LOD.  Supports alpha channel dissolution |
| MODEL: Default | Default shader for dynamic geometry. Supports alpha channel and tessellation |
| MODEL: env^base | Similar to LEVEL: lmap*(env^base), only for dynamic objects |
| basic (simple) | A basic shader, with a wide range of features. Supports transformation, different types of blending, adjusting the effect of lighting on it and Z-buffering. Used for most effects, such as glow |
| particles | Practically identical to basic (simple), except that it does not support a certain set of functions that are needed only for static geometry |

### General

| Parameter | Description |
|---|---|
| Priority |  |
| Strict Sorting |  |

### Base Texture

| Parameter | Description |
|---|---|
| Name |  |
| Transform |  |

### Envinronment Map

| Parameter | Description |
|---|---|
|  |  |
|  |  |
