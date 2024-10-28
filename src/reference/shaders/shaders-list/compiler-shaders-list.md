# Compiler Shaders List (shaders_xrlc.xr)

___

## About

This section contains a list and description of the shaders that are available in the shaders_xrlc.xr file. This file contains descriptions of the settings that are used by the level geometry compiler.

## List

| Shader name and path | Description | Shader Properties |
|---|---|---|
| default | basic lightmap shader | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| default_smooth |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\def_ghost | lightmap shader without collision | Translucency = 0.50<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 0<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\def_ghost_vertex | [geometry shader](https://en.wikipedia.org/wiki/Shader#Geometry_shaders) without collision | Translucency = 0.50<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 0<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 1<br> Cast shadow = 1 |
| def_shaders\def_kolizion | [geometry shader](https://en.wikipedia.org/wiki/Shader#Geometry_shaders) with collision | Translucency = 0.01<br> Ambient = 0.00<br> LM Density = 0.01<br> Collision = 1<br> Rendering = 0<br> OptimizeUV = 0<br> Vertex light = 1<br> Cast shadow = 0 |
| def_shaders\def_kolizion_lm |  | Translucency = 0.01<br> Ambient = 0.00<br> LM Density = 0.01<br> Collision = 1<br> Rendering = 0<br> OptimizeUV = 0<br> Vertex light = 0<br> Cast shadow = 0 |
| def_shaders\def_kolizion_vertex | invisible [geometry shader](https://en.wikipedia.org/wiki/Shader#Geometry_shaders) with collision | Translucency = 0.01<br> Ambient = 0.00<br> LM Density = 0.01<br> Collision = 1<br> Rendering = 0<br> OptimizeUV = 0<br> Vertex light = 1<br> Cast shadow = 0 |
| def_shaders\def_normals |  | Translucency = 0.50<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\def_noshadow |  | Translucency = 0.50<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 0 |
| def_shaders\def_noshadow_pol |  | Translucency = 0.70<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 0 |
| def_shaders\def_object_lod |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 1<br> Cast shadow = 1 |
| def_shaders\def_object_lod_collision |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 1<br> Rendering = 0<br> OptimizeUV = 0<br> Vertex light = 1<br> Cast shadow = 0 |
| def_shaders\def_object_lod_visual |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 0<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 1<br> Cast shadow = 1 |
| def_shaders\def_selflight |  | Translucency = 0.00<br> Ambient = 1.00<br> LM Density = 1.00<br> Collision = 0<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 1<br> Cast shadow = 0 |
| def_shaders\def_translucensy | [geometry shader](https://en.wikipedia.org/wiki/Shader#Geometry_shaders) with transparency | Translucency = 0.30<br> Ambient = 0.00<br> LM Density = 0.50<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\def_vertex | basic [vertex shader](https://en.wikipedia.org/wiki/Shader#Vertex_shaders) | Translucency = 0.50<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 1<br> Cast shadow = 1 |
| def_shaders\def_vertex_ghost |  | Translucency = 0.50<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 0<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 1<br> Cast shadow = 1 |
| def_shaders\def_vertex_ghost_no_shadow |  | Translucency = 0.50<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 0<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 1<br> Cast shadow = 0 |
| def_shaders\def_vertex_invisible_castshadow |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 0<br> Rendering = 0<br> OptimizeUV = 1<br> Vertex light = 1<br> Cast shadow = 1 |
| def_shaders\def_vertex_no_shadow |  | Translucency = 0.50<br> Ambient = 0.00<br> LM Density = 1.00<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 1<br> Cast shadow = 0 |
| def_shaders\default_lm01 |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 0.10<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\default_lm01_ghost |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 0.10<br> Collision = 0<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\default_lm03 |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 0.30<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\default_lm03_ghost |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 0.30<br> Collision = 0<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\default_lm03_smooth |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 0.30<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\default_lm05 |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 0.50<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\default_lm05_ghost |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 0.50<br> Collision = 0<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
| def_shaders\default_lm_hq |  | Translucency = 0.00<br> Ambient = 0.00<br> LM Density = 2.00<br> Collision = 1<br> Rendering = 1<br> OptimizeUV = 1<br> Vertex light = 0<br> Cast shadow = 1 |
