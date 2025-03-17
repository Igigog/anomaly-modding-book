# File Formats

___

This section describes the extensions that are found in the game files and the SDK.

___

## General

| Extension | Description |
|---|---|
| [*.log](../main-folders-and-files/file-formats/general/log.md) | Event log. It contains records of program start, operation and termination |
| [*.pdb](../main-folders-and-files/file-formats/general/pdb.md) |  |
| [*.scop](../main-folders-and-files/file-formats/general/scop.md) | Save file |
| [*.scoc](../main-folders-and-files/file-formats/general/scoc.md) | Save file |
| [*.xrdemo](../main-folders-and-files/file-formats/general/xrdemo.md) | Recording camera flyover (demo). Created in the game with a [console command](../engine/console-commands/general-game-console-commands.md). |
| [*.ogm](../main-folders-and-files/file-formats/audio-video/ogm.md) | The video format used by the game engine. |
| [*.ogg](../main-folders-and-files/file-formats/audio-video/ogg.md) | The sound format used by the game engine. |

___

## Configuration and script files

| Extension | Description |
|---|---|
| [*.ltx](../main-folders-and-files/file-formats/conf-script/ltx.md) | Configuration file, custom ini-like format |
| [*.script](../main-folders-and-files/file-formats/conf-script/script.md) | Game script |
| [*.xml](../main-folders-and-files/file-formats/conf-script/xml.md) | Carry in text format data related to in-game text, UI element placement, and characters and information within the game world |
| [*.seq](../main-folders-and-files/file-formats/textures/seq.md) | Text file containing a description of the frame sequence in the 2D animation |

___

## AI

| Extension | Description |
|---|---|
| [*.efd](../main-folders-and-files/file-formats/ai/efd.md) | Table of AI heuristic parameters, contains constants for fine-tuning A-Life. They are used as input parameters in scripts |
| [*.dat](../main-folders-and-files/file-formats/ai/dat.md) |  |

___

## Textures

| Extension | Description |
|---|---|
| [*.bump](../main-folders-and-files/file-formats/textures/bump.md) | Normal map in A(BGR) format |
| [*.bump#](../main-folders-and-files/file-formats/textures/bump#.md) | File that fixes DXT compression errors in [.bump](../main-folders-and-files/file-formats/textures/bump.md) |
| [*.dds](../main-folders-and-files/file-formats/textures/dds.md) | Graphic file used by DirectX to store textures |
| [detail_map.dds](../main-folders-and-files/file-formats/textures/detail-map.md) | Same as a regular [.dds](../main-folders-and-files/file-formats/textures/dds.md) texture, needed as an extra map in a [.thm](../main-folders-and-files/file-formats/textures/thm.md) |
| [*.tga](../main-folders-and-files/file-formats/textures/thm.md) | A bitmap graphics format with support for color depth of 1-32 bits per pixel, alpha channels, and RLE compression. Used as a source format. |
| [*.thm](../main-folders-and-files/file-formats/textures/thm.md) | They are used to set the parameters of textures - bump, detail, and more. |

___

## Shaders

| Extension | Description |
|---|---|
| [*.cs](../main-folders-and-files/file-formats/shaders/cs.md) | Compute shader |
| [*.gs](../main-folders-and-files/file-formats/shaders/gs.md) | Geometry shader |
| [*.ds](../main-folders-and-files/file-formats/shaders/ds.md) | Domain shader |
| [*.h](../main-folders-and-files/file-formats/engine/h.md) | Header file |
| [*.hs](../main-folders-and-files/file-formats/shaders/hs.md) | Hull shader |
| [*.vs](../main-folders-and-files/file-formats/shaders/vs.md) | Vertex shader |
| [*.ps](../main-folders-and-files/file-formats/shaders/ps.md) | Pixel shader |
| [*.s](../main-folders-and-files/file-formats/shaders/s.md) | Script shader. LUA version of engine blenders |

___

## Postprocess

| Extension | Description |
|---|---|
| [*.ppe](../main-folders-and-files/file-formats/postprocceses/ppe.md) | Postprocess file format. Color-noise effects of the actor's screen |

___

## Models

| Extension | Description |
|---|---|
| [*.dm](../main-folders-and-files/file-formats/models/dm.md) |  Effect of a dynamic weather environment (e.g., rain or lightning) |
| [*.dti](../main-folders-and-files/file-formats/models/dti.md) |  |
| [*.object](../main-folders-and-files/file-formats/models/object.md) | These files are intended for the X-Ray SDK to store 3D content in its original, uncompressed, lossless form. They are source files that store information before compilation into other game compressed formats.  |
| [*.ogf](../main-folders-and-files/file-formats/models/ogf.md) | Compiled object |
| [*.bones](../main-folders-and-files/file-formats/models/bones.md) | Skeleton bone data files |
| [*bone_parts*.*](../main-folders-and-files/file-formats/models/bone-parts.md) | Bone part description file for an object/NPC |
| [*.group](../main-folders-and-files/file-formats/models/group.md) | Object groups |

___

## Animations

| Extension | Description |
|---|---|
| [*.anm](../main-folders-and-files/file-formats/animations/anm.md) | A set of coordinates, which works as an animation of the actor's camera movement. It is also used for anomalies, which need to be given a path. |
| [*.skl](../main-folders-and-files/file-formats/animations/skl-skls.md) | Skeletal animation |
| [*.skls](../main-folders-and-files/file-formats/animations/skl-skls.md) | Skeletal animations(.skl) in a container |
| [*.omf](../main-folders-and-files/file-formats/animations/omf.md) | A specialized S.T.A.L.K.E.R. game format containing animations. This is a separate dedicated file used in conjunction with [*.ogf](../main-folders-and-files/file-formats/models/ogf.md) models. Was created in order to optimize process when some different models use the same list of animations. |

___

## Archives and Resource Packages

| Extension | Description |
|---|---|
| [*.db](../main-folders-and-files/file-formats/archives-resource-packs/db.md) | archive of game resources. Used in late builds and the final version of the game, has several options (db."number", db."letter"). |
| [*.xr](../main-folders-and-files/file-formats/archives-resource-packs/xr.md) | resource library. Contains resources such as particles, [shaders](../shaders/shaders-list/shaders-list.md), etc. in a packed format. |

___

## Game level

| Extension | Description |
|---|---|
| [*.err](../main-folders-and-files/file-formats/game-levels/err.md) | Contains information about geometry errors during level compilation |
| [level](../main-folders-and-files/file-formats/game-levels/level.md) | File with general information about the game location (light sources, object names, texture and shader names, sectors and portals). Created during compilation |
| [*.prj](../main-folders-and-files/file-formats/game-levels/prj.md) | Level precompilation file |
| [*.ai](../main-folders-and-files/file-formats/game-levels/ai.md) | AI location grid. Created during compilation |
| [*.cform](../main-folders-and-files/file-formats/game-levels/cform.md) | Geometry for calculating collisions. Calculated by the level compiler. Contains a solid map structure. All tangible objects with materials live here. Because of this, the game knows with what sound and property objects should react when they are hit by bullets or walked on |
| [*.details](../main-folders-and-files/file-formats/game-levels/details.md) | Detailed objects (grass, cigarette butts, construction debris) on the level. Created through LevelEditor SDK at compile time. |
| [*.env_mod](../main-folders-and-files/file-formats/game-levels/env_mod.md) | local environment modifiers (environment), set areas on the location with lighting different from the main weather cycle. |
| [*.fog_vol](../main-folders-and-files/file-formats/game-levels/fog_vol.md) | Volumetric fog |
| [*.game](../main-folders-and-files/file-formats/game-levels/game.md) | Coordinates of the player's spawn in the multiplayer game. Outdated file. |
| [*.geom](../main-folders-and-files/file-formats/game-levels/geom.md) | Contains vertices (position, normals, texture coordinates, etc.), indices, and information for smooth geometry detail. |
| [*.geomx](../main-folders-and-files/file-formats/game-levels/geomx.md) | It contains only geometry. In the renderer it is used in the shadow rendering passes, due to the fact that there is less information - loading data into the buffers - faster. |
| [*.gtc](../main-folders-and-files/file-formats/game-levels/gtc.md) | Cross table of correspondence between the location graph and the AI grid. Created during compilation |
| [*.hom](../main-folders-and-files/file-formats/game-levels/hom.md) | Mapping of hierarchical cutoffs |
| [*.level](../main-folders-and-files/file-formats/game-levels/dot-level.md) | List of SDK scene objects |
| [*.lights](../main-folders-and-files/file-formats/game-levels/lights.md) | Light sources for xrLC |
| [*.ps_static](../main-folders-and-files/file-formats/game-levels/ps_static.md) | Particle systems. Flies, steam from pipes, etc. |
| [*.graph](../main-folders-and-files/file-formats/game-levels/graph.md) | Global graph of AI navigation. Used, among other things, for moving AI objects outside the active level. |
| [*.spawn](../main-folders-and-files/file-formats/game-levels/spawn.md) | A file storing spawn data. |
| [*.snd_env](../main-folders-and-files/file-formats/game-levels/snd_env.md) | Volumetric sound sources. |
| [*.snd_static](../main-folders-and-files/file-formats/game-levels/snd_static.md) | Static point sources of sound. Sound of flies, etc. |
| [*.som](../main-folders-and-files/file-formats/game-levels/som.md) | Geometry for calculating sound propagation. |
| [*.wallmarks](../main-folders-and-files/file-formats/game-levels/wallmarks.md) | Decals. Bloodstains, faction emblems on walls, etc. Used for the compiled level. |
| [*.part](../main-folders-and-files/file-formats/game-levels/part.md) | Scene objects |

___

## Binary files

___

### About

This article is an introduction to binary files.

Before reading the other articles in the "File Formats" category, you should read this one first.

### Structure

In binary files, bytes are represented in reverse order.

For example, the number 0x12345678 in a file would look like this: 78 56 34 12.

### Data types

Let's introduce the notation of data types.

These notations will be used in other articles.

| Designation | Type | Range | Size (bytes) |
|---|---|---|---|
| B | Integer | 0 ... 255 | 1 |
| H | Integer | 0 ... 65535 | 2 |
| I | Integer | 0 ... 4294967295 | 4 |
| i | Integer | -2147483648 ... 2147483647 | 4 |
| f | Fractional number | - | 4 |
| s | String | - | - |

In some files a value may not be stored in the whole byte, but only part of it (e.g. 4 bits).

As a result, one byte will store two values.

In articles about binary files, sizes will be specified either in bits or in bytes.

Strings necessarily have a null byte at the end, which indicates that the string has ended. For example: "test_string0x0".

As a result, the length of the string is equal to the number of characters in it + 1 (null byte).

### Blocks

In X-Ray, some binary files are in [RIFF](https://en.wikipedia.org/wiki/Resource_Interchange_File_Format) format.

Such files have blocks (also called chunks or sections).

A block is binary data with a header.

Block structure

| Data | Type |
|---|---|
| Identifier | H |
| Compression | H |
| Content size (bytes) | I |
| Content | Binary data |

You can see from the identifier what is stored in a particular block.

If the compression is set to 0x0000, the block is uncompressed, and if it is set to 0x8000, the block is compressed by the [Huffman method](https://en.wikipedia.org/wiki/Huffman_coding).

You can use a program from xray_re_tools (trunk\garbage\lzhuf\lzhuf.c) to decompress compressed blocks.

In the files of the final version of the game most blocks are uncompressed.

The size of the block content indicates only the number of bytes of data (not including identifier, compression and size bytes).

Binary block data can be represented by nested blocks.

___

## Sources

[Source](http://stalkerin.gameru.net/wiki/index.php?title=%D0%91%D0%B8%D0%BD%D0%B0%D1%80%D0%BD%D1%8B%D0%B5_%D1%84%D0%B0%D0%B9%D0%BB%D1%8B)
