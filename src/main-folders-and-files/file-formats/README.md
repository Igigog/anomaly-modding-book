# File Formats

___

This section describes the extensions that are found in the game files and the SDK.

___

## General

| Extension | Description |
---|---|
| .log | Event log. It contains records of program start, operation and termination |
| .pdb |  |
| .scop | Save file |
| .scoc | Save file |
| .xrdemo | Recording camera flyover (demo). Created in the game with a [console command](../../engine/console-commands.md). |
| .ogm | The video format used by the game engine. |
| [.ogg](#ogg) | The sound format used by the game engine. |

___

## Configuration and script files

| Extension | Description |
---|---|
| [.ltx](#ltx-files) | Configuration file, custom ini-like format |
| .script | Game script |
| [.xml](#xml-files) | Carry in text format data related to in-game text, UI element placement, and characters and information within the game world |
| [.seq](#seq-sequence) | Text file containing a description of the frame sequence in the 2D animation |
| [.efd](#efd-evaluation-function-data) | Table of AI heuristic parameters, contains constants for fine-tuning A-Life. They are used as input parameters in scripts. |

___

## Textures

| Extension | Description |
---|---|
| [.bump](#bumpdds-1) | Normal map in A(BGR) format |
| [.bump#](#bumpdds) | File that fixes DXT compression errors in [.bump](#bumpdds) |
| [.dds](#dds-directdraw-surface) | Graphic file used by DirectX to store textures |
| [detail_map.dds](#detail_map_name_with-bump-or-bumpdds) | Same as a regular .dds texture, needed as an extra map in a .thm |
| .tga | A bitmap graphics format with support for color depth of 1-32 bits per pixel, alpha channels, and RLE compression. Used as a source format. |
| [.thm](#thm) | They are used to set the parameters of textures - bump, detail, and more. |

___

## Shaders

| Extension | Description |
---|---|
| .cs | Compute shader |
| .gs | Geometry shader |
| .vs | Vertex shader |
| .ps | Pixel shader |
| .s | Script shader. LUA version of engine blenders |
| .ppe | Postprocess file format. Color-noise effects of the actor's screen |

___

## Models

| Extension | Description |
---|---|
| [.dm](#dm-detail-model) |  Effect of a dynamic weather environment (e.g., rain or lightning) |
| [.object](#object) | These files are intended for the X-Ray SDK to store 3D content in its original, uncompressed, lossless form. They are source files that store information before compilation into other game compressed formats.  |
| .ogf | Compiled objects |
| .bones | Skeleton bone data files |
| *bone_parts*.* | Bone part description file for an object/NPC |

___

## Animations

| Extension | Description |
---|---|
| [.anm](#anm-animated-paths) | A set of coordinates, which works as an animation of the actor's camera movement. It is also used for anomalies, which need to be given a path. |
| .skl | Skeletal animation |
| .skls | Skeletal animations(.skl) in a container |
| [.omf](#omf-open-motions-format) | A specialized S.T.A.L.K.E.R. game format containing animations. This is a separate dedicated file used in conjunction with .ogf models. Was created in order to optimize process when some different models use the same list of animations. |

___

## Archives and Resource Packages

| Extension | Description |
---|---|
| .db | archive of game resources. Used in late builds and the final version of the game, has several options (db."number", db."letter"). |
| .xr | resource library. Contains resources such as particles, [shaders](../../shaders/shaders-list/shaders-list.md), etc. in a packed format. |

___

## Game level

| Extension | Description |
---|---|
| [.err](#err) | Contains information about geometry errors during level compilation |
| [level](#level) | File with general information about the game location (light sources, object names, texture and shader names, sectors and portals). Created by xrLC during compilation. Opened only by the game. |
| .prj | Level precompilation file |
| .ai | AI location grid. Created by xrAI when compiling. Opened only by the game. |
| [.cform](#cform-collision-form) | Geometry for calculating collisions. Calculated by the level compiler. Contains a solid map structure. All tangible objects with materials live here. Because of this, the game knows with what sound and property objects should react when they are hit by bullets or walked on |
| [.details](#details) | Detailed objects (grass, cigarette butts, construction debris) on the level. Created through LevelEditor SDK at compile time. |
| .env_mod | local environment modifiers (environment), set areas on the location with lighting different from the main weather cycle. |
| .fog_vol | Volumetric fog |
| .game | Coordinates of the player's spawn in the multiplayer game. Outdated file. |
| [.geom](#geom) | Contains vertices (position, normals, texture coordinates, etc.), indices, and information for smooth geometry detail. |
| .geomx | It contains only geometry. In the renderer it is used in the shadow rendering passes, due to the fact that there is less information - loading data into the buffers - faster. |
| .gtc | Cross table of correspondence between the location graph and the AI grid. It is created when compiling the map in LE KFK (xrAI). |
| [.hom](#hom-hierarchical-occlusion-mapping) | Mapping of hierarchical cutoffs |
| .level | List of SDK scene objects |
| .lights | Light sources for xrLC |
| .ps_static | Particle systems. Flies, steam from pipes, etc. |
| .graph | Global graph of AI navigation. Used, among other things, for moving AI objects outside the active level. |
| .spawn | A file storing spawn data. |
| .snd_env | Volumetric sound sources. |
| .snd_static | Static point sources of sound. Sound of flies, etc. |
| [.som](#som-sound-occluder-mesh) | Geometry for calculating sound propagation. |
| .wallmarks | Decals. Bloodstains, faction emblems on walls, etc. Used for the compiled level. |

___

## Binary files

___

### About

This article is an introduction to binary files.

Before reading the other articles in the "[File Formats](index.html)" category, you should read this one first.

### Structure

In binary files, bytes are represented in reverse order.

For example, the number 0x12345678 in a file would look like this: 78 56 34 12.

### Data types

Let's introduce the notation of data types.

These notations will be used in other articles.

| Designation | Type | Range | Size (bytes) |
---|---|---|---|
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
---|---|
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
