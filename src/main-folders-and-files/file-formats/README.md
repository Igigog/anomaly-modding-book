# File Formats

This section describes the extensions that are found in the game files and the SDK.

| Extension | Description |
---|---|
| .ai | AI location grid. Created by xrAI when compiling. Opened only by the game. |
| .anm | A set of coordinates, which works as an animation of the actor's camera movement. It is also used for anomalies, which need to be given a path. |
| .avi | Video file |
| .bones | Skeleton data in SDK format |
| .cform | Geometry for calculating collisions. Calculated by the level compiler. Contains a solid map structure. All tangible objects with materials live here. Thanks to it, the game knows with what sound and property the objects should react when they are hit by bullets or walked on. |
| .db | archive of game resources. Used in late builds and the final version of the game, has several options (db."number", db."letter"). |
| .dds | Graphic file used by DirectX to store textures |
| .details | Detailed objects (grass, cigarette butts, construction debris) on the level. Created through LevelEditor SDK at compile time. |
| .dm | Detail Model - the effect of a dynamic weather environment (e.g., rain or lightning) |
| [.efd](efd.md) | Table of AI heuristic parameters, contains constants for fine-tuning A-Life. They are used as input parameters in scripts. |
| .env_mod | local environment modifiers (environment), set areas on the location with lighting different from the main weather cycle. |
| .err | Geometry errors |
| .fog_vol | Volumetric fog |
| .geom | Contains vertices (position, normals, texture coordinates, etc.), indices, and information for smooth geometry detail. |
| .graph |  |
| [.hom](hom.md) | Mapping of hierarchical cutoffs |
| .level | List of SDK scene objects |
| .lights |  |
| [.ltx](/anomaly-modding-book/src/configs/ltx-files.md/) | Configuration file, custom ini-like format |
| [.object](object.md) | These files are intended for the X-Ray SDK to store 3D content in its original, uncompressed, lossless form. They are source files that store information before compilation into other game compressed formats.  |
| .ogf | Compiled objects |
| .ogg | The sound format used by the game engine. |
| .ogm | The video format used by the game engine. |
| [.omf](omf.md) | A specialized S.T.A.L.K.E.R. game format containing animations. This is a separate dedicated file used in conjunction with .ogf models. Was created in order to optimize process when some different models use the same list of animations. |
| .ppe | Postprocess file format. |
| .ps_static | Particle systems. Flies, steam from pipes, etc. |
| .script | Game script. |
| .seq | Text file containing a description of the frame sequence in the 2D animation |
| .skl | Skeletal animation |
| .skls | Skeletal animations(.skl) in a container |
| .snd_env | Volumetric sound sources. |
| .snd_static | Static point sources of sound. Sound of flies, etc. |
| .som | Geometry for calculating sound propagation. |
| .spawn | A file storing spawn data. |
| .tga | A bitmap graphics format with support for color depth of 1-32 bits per pixel, alpha channels, and RLE compression. Used as a source format. |
| .thm | The file contains a description of the texture/sound. |
| .wallmarks | Decals. Bloodstains, faction emblems on walls, etc. Used for the compiled level? |
| .wav | Source audio format for later setup and conversion to .ogg |
| [.xml](/anomaly-modding-book/src/configs/xml-files.md) | Carry in text format data related to in-game text, UI element placement, and characters and information within the game world. |
| level | File with general information about the game location (light sources, object names, texture and shader names, sectors and portals). Created by xrLC during compilation. Opened only by the game. |