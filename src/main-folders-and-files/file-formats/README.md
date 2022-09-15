# File Formats

___

This section describes the extensions that are found in the game files and the SDK.

___

## General
| Extension | Description |
---|---|
| .log | Event log. It contains records of program start, operation and termination |
| .scop | Save file. |
| .scoc | Save file. |
| .xrdemo | Recording camera flyover (demo). Created in the game with a [console command](../../engine/console-commands.md). |

___

## Configuration and script files
| Extension | Description |
---|---|
| [.ltx](../../configs/ltx-files.md/) | Configuration file, custom ini-like format |
| .script | Game script. |
| [.xml](../../configs/xml-files.md) | Carry in text format data related to in-game text, UI element placement, and characters and information within the game world. |
| [.seq](seq.md) | Text file containing a description of the frame sequence in the 2D animation |

___

## Textures
| Extension | Description |
---|---|
| [.bump](bump.md) | Normal map in A(BGR) format |
| [.bump#](bump_hash.md) | File that fixes DXT compression errors in [.bump](bump.md) |
| [.dds](dds.md) | Graphic file used by DirectX to store textures |
| .tga | A bitmap graphics format with support for color depth of 1-32 bits per pixel, alpha channels, and RLE compression. Used as a source format. |
| [.thm](thm.md) | They are used to set the parameters of textures - bump, detail, and more. |

___

## AI
| Extension | Description |
---|---|
| [.efd](efd.md) | Table of AI heuristic parameters, contains constants for fine-tuning A-Life. They are used as input parameters in scripts. |

___

## Video
| Extension | Description |
---|---|
| .ogm | The video format used by the game engine. |

___

## Sound
| Extension | Description |
---|---|
| [.ogg](ogg.md) | The sound format used by the game engine. |

___

## Shaders
| Extension | Description |
---|---|
| .cs | Compute shader |
| .gs | Geometry shader |
| .vs | Vertex shader |
| .ps | Pixel shader |
| .s | Script shader. LUA version of engine blenders |

___

## Models
| Extension | Description |
---|---|
| [.dm](dm.md) |  Effect of a dynamic weather environment (e.g., rain or lightning) |
| [.object](object.md) | These files are intended for the X-Ray SDK to store 3D content in its original, uncompressed, lossless form. They are source files that store information before compilation into other game compressed formats.  |
| .ogf | Compiled objects |
| .err | Geometry errors |

___

## Animations
| Extension | Description |
---|---|
| [.anm](anm.md) | A set of coordinates, which works as an animation of the actor's camera movement. It is also used for anomalies, which need to be given a path. |
| .skl | Skeletal animation |
| .skls | Skeletal animations(.skl) in a container |
| [.omf](omf.md) | A specialized S.T.A.L.K.E.R. game format containing animations. This is a separate dedicated file used in conjunction with .ogf models. Was created in order to optimize process when some different models use the same list of animations. |

___

## Archives and Resource Packages
| Extension | Description |
---|---|
| .db | archive of game resources. Used in late builds and the final version of the game, has several options (db."number", db."letter"). |
| .xr | resource library. Contains resources such as partials, shaders, etc. in a packed format. |

___

## Game level
| Extension | Description |
---|---|
| [level](../file-formats/level.md) | File with general information about the game location (light sources, object names, texture and shader names, sectors and portals). Created by xrLC during compilation. Opened only by the game. |
| .prj | Level precompilation file |
| .ai | AI location grid. Created by xrAI when compiling. Opened only by the game. |
| [.cform](../file-formats/cform.md) | Geometry for calculating collisions. Calculated by the level compiler. Contains a solid map structure. All tangible objects with materials live here. Because of this, the game knows with what sound and property objects should react when they are hit by bullets or walked on |
| [.details](../file-formats/detals.md) | Detailed objects (grass, cigarette butts, construction debris) on the level. Created through LevelEditor SDK at compile time. |
| .env_mod | local environment modifiers (environment), set areas on the location with lighting different from the main weather cycle. |
| .fog_vol | Volumetric fog |
| .game | Coordinates of the player's spawn in the multiplayer game. Outdated file. |
| .geom | Contains vertices (position, normals, texture coordinates, etc.), indices, and information for smooth geometry detail. |
| .geomx | It contains only geometry. In the renderer it is used in the shadow rendering passes, due to the fact that there is less information - loading data into the buffers - faster. |
| .gtc | Cross table of correspondence between the location graph and the AI grid. It is created when compiling the map in LE KFK (xrAI). |
| [.hom](../file-formats/hom.md) | Mapping of hierarchical cutoffs |
| .level | List of SDK scene objects |
| .lights | Light sources for xrLC |
| .ps_static | Particle systems. Flies, steam from pipes, etc. |
| .graph | Global graph of AI navigation. Used, among other things, for moving AI objects outside the active level. |
| .spawn | A file storing spawn data. |
| .snd_env | Volumetric sound sources. |
| .snd_static | Static point sources of sound. Sound of flies, etc. |
| [.som](../file-formats/som.md) | Geometry for calculating sound propagation. |
| .wallmarks | Decals. Bloodstains, faction emblems on walls, etc. Used for the compiled level. |

___

## Postprocess
| Extension | Description |
---|---|
| .ppe | Postprocess file format. |