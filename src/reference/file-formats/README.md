# File Formats

___

This section describes the extensions that are found in the game files and the SDK.

___

## General

| Extension | Description |
|---|---|
| [*.log](../file-formats/general/log.md) | Event log. It contains records of program start, operation and termination |
| [*.pdb](../file-formats/general/pdb.md) |  |
| [*.scop](../file-formats/general/scop.md) | Save file |
| [*.scoc](../file-formats/general/scoc.md) | Save file |
| [*.xrdemo](../file-formats/general/xrdemo.md) | Recording camera flyover (demo). Created in the game with a [console command](../console-commands/general-game-console-commands.md). |
| [*.ogm](../file-formats/audio-video/ogm.md) | The video format used by the game engine. |
| [*.ogg](../file-formats/audio-video/ogg.md) | The sound format used by the game engine. |

___

## Configuration and script files

| Extension | Description |
|---|---|
| [*.ltx](../file-formats/conf-script/ltx.md) | Configuration file, custom ini-like format |
| [*.script](../file-formats/conf-script/script.md) | Game script |
| [*.xml](../file-formats/conf-script/xml.md) | Carry in text format data related to in-game text, UI element placement, and characters and information within the game world |
| [*.seq](../file-formats/textures/seq.md) | Text file containing a description of the frame sequence in the 2D animation |

___

## AI

| Extension | Description |
|---|---|
| [*.efd](../file-formats/ai/efd.md) | Table of AI heuristic parameters, contains constants for fine-tuning A-Life. They are used as input parameters in scripts |

___

## Textures

| Extension | Description |
|---|---|
| [*.bump](../file-formats/textures/bump.md) | Normal map in A(BGR) format |
| [*.bump#](../file-formats/textures/bump_hash.md) | File that fixes DXT compression errors in [.bump](../file-formats/textures/bump.md) |
| [*.dds](../file-formats/textures/dds.md) | Graphic file used by DirectX to store textures |
| [detail_map.dds](../file-formats/textures/detail-map.md) | Same as a regular [.dds](../file-formats/textures/dds.md) texture, needed as an extra map in a [.thm](../file-formats/textures/thm.md) |
| [*.tga](../file-formats/textures/thm.md) | A bitmap graphics format with support for color depth of 1-32 bits per pixel, alpha channels, and RLE compression. Used as a source format. |
| [*.thm](../file-formats/textures/thm.md) | They are used to set the parameters of textures - bump, detail, and more. |

___

## Shaders

| Extension | Description |
|---|---|
| [*.cs](../file-formats/shaders/cs.md) | Compute shader |
| [*.gs](../file-formats/shaders/gs.md) | Geometry shader |
| [*.ds](../file-formats/shaders/ds.md) | Domain shader |
| [*.hs](../file-formats/shaders/hs.md) | Hull shader |
| [*.vs](../file-formats/shaders/vs.md) | Vertex shader |
| [*.ps](../file-formats/shaders/ps.md) | Pixel shader |
| [*.s](../file-formats/shaders/s.md) | Script shader. LUA version of engine blenders |

___

## Postprocess

| Extension | Description |
|---|---|
| [*.ppe](../file-formats/postprocceses/ppe.md) | Postprocess file format. Color-noise effects of the actor's screen |

___

## Models

| Extension | Description |
|---|---|
| [*.dm](../file-formats/models/dm.md) |  Effect of a dynamic weather environment (e.g., rain or lightning) |
| [*.object](../file-formats/models/object.md) | These files are intended for the X-Ray SDK to store 3D content in its original, uncompressed, lossless form. They are source files that store information before compilation into other game compressed formats.  |
| [*.ogf](../file-formats/models/ogf.md) | Compiled object |
| [*.bones](../file-formats/models/bones.md) | Skeleton bone data files |
| [*bone_parts*.*](../file-formats/models/bone-parts.md) | Bone part description file for an object/NPC |
| [*.group](../file-formats/models/group.md) | Object groups |

___

## Animations

| Extension | Description |
|---|---|
| [*.anm](../file-formats/animations/anm.md) | A set of coordinates, which works as an animation of the actor's camera movement. It is also used for anomalies, which need to be given a path. |
| [*.skl](../file-formats/animations/skl-skls.md) | Skeletal animation |
| [*.skls](../file-formats/animations/skl-skls.md) | Skeletal animations(.skl) in a container |
| [*.omf](../file-formats/animations/omf.md) | A specialized S.T.A.L.K.E.R. game format containing animations. This is a separate dedicated file used in conjunction with [*.ogf](../file-formats/models/ogf.md) models. Was created in order to optimize process when some different models use the same list of animations. |

___

## Archives and Resource Packages

| Extension | Description |
|---|---|
| [*.db](../file-formats/archives-resource-packs/db.md) | archive of game resources. Used in late builds and the final version of the game, has several options (db."number", db."letter"). |
| [*.xr](../file-formats/archives-resource-packs/xr.md) | resource library. Contains resources such as particles, [shaders](../shaders/shaders-list/shaders-list.md), etc. in a packed format. |

___

## Game level

| Extension | Description |
|---|---|
| [*.err](../file-formats/game-levels/err.md) | Contains information about geometry errors during level compilation |
| [level](../file-formats/game-levels/level.md) | File with general information about the game location (light sources, object names, texture and shader names, sectors and portals). Created during compilation |
| [*.prj](../file-formats/game-levels/prj.md) | Level precompilation file |
| [*.ai](../file-formats/game-levels/ai.md) | AI location grid. Created during compilation |
| [*.cform](../file-formats/game-levels/cform.md) | Geometry for calculating collisions. Calculated by the level compiler. Contains a solid map structure. All tangible objects with materials live here. Because of this, the game knows with what sound and property objects should react when they are hit by bullets or walked on |
| [*.details](../file-formats/game-levels/details.md) | Detailed objects (grass, cigarette butts, construction debris) on the level. Created through LevelEditor SDK at compile time. |
| [*.env_mod](../file-formats/game-levels/env_mod.md) | local environment modifiers (environment), set areas on the location with lighting different from the main weather cycle. |
| [*.fog_vol](../file-formats/game-levels/fog_vol.md) | Volumetric fog |
| [*.game](../file-formats/game-levels/game.md) | Coordinates of the player's spawn in the multiplayer game. Outdated file. |
| [*.geom](../file-formats/game-levels/geom.md) | Contains vertices (position, normals, texture coordinates, etc.), indices, and information for smooth geometry detail. |
| [*.geomx](../file-formats/game-levels/geomx.md) | It contains only geometry. In the renderer it is used in the shadow rendering passes, due to the fact that there is less information - loading data into the buffers - faster. |
| [*.gtc](../file-formats/game-levels/gtc.md) | Cross table of correspondence between the location graph and the AI grid. Created during compilation |
| [*.hom](../file-formats/game-levels/hom.md) | Mapping of hierarchical cutoffs |
| [*.level](../file-formats/game-levels/dot-level.md) | List of SDK scene objects |
| [*.lights](../file-formats/game-levels/lights.md) | Light sources for xrLC |
| [*.ps_static](../file-formats/game-levels/ps_static.md) | Particle systems. Flies, steam from pipes, etc. |
| [*.graph](../file-formats/game-levels/graph.md) | Global graph of AI navigation. Used, among other things, for moving AI objects outside the active level. |
| [*.spawn](../file-formats/game-levels/spawn.md) | A file storing spawn data. |
| [*.snd_env](../file-formats/game-levels/snd_env.md) | Volumetric sound sources. |
| [*.snd_static](../file-formats/game-levels/snd_static.md) | Static point sources of sound. Sound of flies, etc. |
| [*.som](../file-formats/game-levels/som.md) | Geometry for calculating sound propagation. |
| [*.wallmarks](../file-formats/game-levels/wallmarks.md) | Decals. Bloodstains, faction emblems on walls, etc. Used for the compiled level. |
| [*.part](../file-formats/game-levels/part.md) | Scene objects |

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
