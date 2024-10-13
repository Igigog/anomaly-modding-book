# Modding Tools

___

## In-game editors

- [Item Spawner](in-game-editors/item-spawner.md) - Spawn menu for items (Weapons, Outfits, etc)
- [Object Spawner](in-game-editors/object-spawner.md) - Spawn menu for objects (NPCs, Squads, Anomalys, etc)
- [Weather Editor](in-game-editors/weather-editor.md) - Editor for setting, saving weather
- [Lighting Editor](in-game-editors/lightning-editor.md) - Weather Lighting Editor
- [Weapon HUD Editor](in-game-editors/weapon-hud-editor.md) - Allows you to customize the HUD of the weapon (position, location of the shot, etc.)
- [Outfits/Weapon Stats Editor](in-game-editors/outfits-weapon-stats-editor.md) - Allows you to customize the configuration of the outfits or weapons
- Pocket Workshop - Not an editor, but allows you to check the scheme of improvements.
- NPC Logic/Execute - Allows you to edit NPC logic

___

## QoL Tools

- [Stalker Modding Helper](https://github.com/Thial/StalkerModdingHelper) - Small utility that allows you to copy the mods you are working on into your dev S.T.A.L.K.E.R. dev installation. Anomaly and either run the game in a non-launched state + automatically load a save, or simply send a command to the game to reload a test save. The utility copies only those files that have been modified using MD5 hash check.

___

## Toolsets

- [AXRToolset](https://github.com/revolucas/AXRToolset) - AXRToolset is an AutoHotkey & Lua-based scripting engine that utilizes a Graphical User Interface to display scripted plugins that do various automated tasks. Although the current plugins are designed to aid in the development of S.T.A.L.K.E.R.: Call of Chernobyl, the engine itself can be used to create macros, scripts and other utilities for any application or purpose.

- [Stalker Studio V.0.7 Beta](stalker-studio.md) - Different tools in one place

___

## Gamedata Extractors

Software to unpack gamedata

- [Universal Extractor 2.0](https://disk.yandex.ru/d/GbgDm-JT2JtfNQ) - Unzips the gamedata from the original trilogy
- db_unpacker.bat (tools/) - Anomaly's internal gamedata extractor, which extracts the scripts and configs files from the .db
- db_unpacker_all.bat (tools/) - An internal gamedata extractor from Anomaly, which extracts all files from .db

___

## Converters

- converter.exe (tools/) - Converts files from one format to another.
- [X-Ray Export Tool](https://github.com/VaIeroK/XrayExportTool) - Tool for fast editing and exporting raw stalker formats
  - [More](xray-export-tool.md)

___

## SDK's

Official SDK with community enhancements:

- [SDK 0.4 (Shadows of Chernobyl)](https://sharedby.blomp.com/gI0i4B)
  - [SDK 0.4 by Yara](https://bitbucket.org/Yar0s1av/xray_stalker_sdk_04_fixed/src/master/) - This is a compiled from source SDK 0.4, which has dozens of fixes and improvements.
  - [SDK 0.4 by YUSHAT](http://files.xray-engine.org/yurshat/repack/xray_sdk_yurshat_repack.rar)
  - [SDK 0.4 by Political](https://disk.yandex.ru/d/KmVOitON3GnyuU)

- [SDK 0.5 (Clear Sky)](https://sharedby.blomp.com/AWr3Vs)
  - [SDK B.O.R.S.C.H.T for CS by Lightning in a vacuum](https://bitbucket.org/stalker/xray-csky_borscht_sdk/src/master/)

```admonish warning
These versions (SDK 0.4 and SDK 0.5/0.6) are not compatible with Anomaly!
```

- [SDK 0.7 (Call of Pripyat)](https://www.moddb.com/games/stalker-call-of-pripyat/downloads/x-ray-16-engine-sdk-v07)
  - [SDK 0.7 (Call of Pripyat)(RePack by DaaGuda V2)](https://mega.nz/folder/zFBiWSAJ#5_MSuGpVPb7QqcPH00nC7w) - Official SDK 0.7 repack with customized components and various fixes ([More About](../sdk/index.html))

    - SDK 0.7 Easy:
      - The easiest version, but gamedata and rawdata are excluded from its composition, there are no add-ons.
      - For full functionality you will need to unpack gamedata from CoP 1.6.02.
      - Weight: 22 MB

    - SDK 0.7 Medium(Win32/Win64):
      - The same as Easy, but with rawdata and some additions.
      - Just to work fully need to unpack gamedata from CoP 1.6.02.
      - Weight: 192.4 MB/190.2 MB

    - SDK 0.7 Full(Win32/Win64):
      - The heaviest version, it includes unpacked gamedata, rawdata with sources of CS, CoP objects (excluded objects from rawdata\objects\scenes folder because of its weight)
      - Preinstalled add-ons from other suites.
      - Weight: 2.64 GB/2.64

- [GUI for X-Ray SDK](https://github.com/Graff46/GUI_for_X-Ray_SDK) - A graphical shell for quickly calling the Actor Editor, Level Editor, and compilers for selected locations.

- [SDK 0.7 by Range](https://disk.yandex.ru/d/wnzjuQkcti1CNw)

- [Call of Chernobyl SDK](https://sharedby.blomp.com/zIpxWK) - Contains the basic editors and tools that were used to create Call of Chernobyl

- [SDK 0.8 by Red Panda](https://github.com/RedPandaProjects/XRayEngine/releases) - This is a port and a small upgrade of the classic 0.7 editor set. A lot of problems with the classic editor were related to the outdated development environment, which did not allow to upgrade it. Imgui was taken as a UI shell, as the easiest ui allowing to create simple forms with one line of code. All 4 editors were taken over.
  - [HybridXRay](https://github.com/Roman-n/HybridXRay) - Further improvements to the SDK and X-Ray Engine from RedPanda.

- [IX Ray SDK]

- [SDK 2.6 beta (Lost Alpha)](https://www.moddb.com/mods/lost-alpha/downloads/stalker-lostalpha-sdk-v26-beta) - Contains the basic editors and tools that were used to create Lost Alpha

### SDK tools

```admonish info
Versions of the SDK tools may differ depending on the version of the SDK itself
```

- [Actor Editor](../sdk/actor-editor.md)
- Dialog Editor
- [Level Editor](../sdk/level-editor.md)
- [Particle Editor](../sdk/particle-editor.md)
- [Postprocess Editor](../sdk/postprocess-editor.md)
- [ShaderEditor](../sdk/level-editor.md)
- xrLC_net - Level compiler by machines connected to a local network

___

## Coding

- Notepad
- [Notepad++](https://notepad-plus-plus.org/downloads/)
- [Visual Studio Code](https://code.visualstudio.com/) or [VSCodium](https://vscodium.com/)
  - [LTX Support Extension by AziatkaVictor](https://marketplace.visualstudio.com/items?itemName=AziatkaVictor.ltx-support) - adds support for the logic syntax from S.T.A.L.K.E.R. CoP

___

## 3D packages

3D Packages that have compatibility/addons to work with X-Ray:

- [Blender (With X-Ray Addon)](../../blender/index.html)

- 3Ds Max with scripts
  - [Den Stash's Scripts](https://github.com/X-Ray-Engine-STALKER/xray_3ds_max_tools)
  - [Mortan's Scrips (Need access to BaS Discord)](https://discord.com/channels/896909601323237406/1179650202580287508/1179652450618183732)
- 3ds Maya with scripts
  - [X-Ray Maya Tools](https://xray-engine.org/index.php?title=X-Ray_Maya_tools)

- MilkShape ([With Stalker Plugin](https://disk.yandex.ru/d/q04vZyXIgRA9U))

___

## Textures

- [OXR Texture Tool](https://github.com/revolucas/OXR-Texture-Tool) - This tools purpose is to unpack ui_icon_equipment.dds into separate individual icons so that they can be manipulated individually or merged more easily. This tool is capable of creating a new sprite sheet using the unpacked icons and writing the new geometry values (w,h,x,y) into the system configs. It also allows you to merge up to 4 existing unpacked ui_icon_equipment directories into a single sheet.

- [BumpGenerator](https://sharedby.blomp.com/MT4WEx) - Intended for DXT compression of bumps together with simultaneous generation of bump#maps (the purpose of which is to correct errors introduced by compression). It works similarly to a similar function in KFK. As input textures, both standard ("blue") bump textures and bump textures used directly in the game with rearranged channels are supported.
  - [Source Code](https://github.com/gunslingermod/BumpGenerator)

- [Bump Generator by i-love-kfc](https://gitlab.com/i-love-kfc/bump-generator) - A simple bump and bump# texture generator from normal maps with the ability to use gloss maps, also, is capable of generating bump# for ready-made "green" bumps.
  - [More](bump-generator.md)

- [BumpX_GUI](https://github.com/PiratBuildov/BumpX_GUI) - WinForms GUI for BumpX v07

- [THM Editor](https://gitlab.com/i-love-kfc/thm-editor/) - Utility for editing [.thm](../main-folders-and-files/file-formats/index.html#thm) files without the need to use the SDK
  - [More](thm-editor-by-i-love-kfc.md)

- [THM Editor by Valerok](https://github.com/VaIeroK/THM-Editor) - ValeroK's version of the original THM Editor
  - [More](thm-editor-by-valerok.md)

- [ThmValidator](https://sharedby.blomp.com/tnT8vj) - Allows you to check the [.thm](../main-folders-and-files/file-formats/index.html#thm) files in the selected directory and automatically fix the most common bugs that occur during manual editing.

- [xrAutoUI](https://cdn.discordapp.com/attachments/978593574893535274/1083798175896326206/xrAutoUI.exe) - Auto-transfer UI from 4:3 to 16:9

- Any program capable of creating textures or opening [.dds](../main-folders-and-files/file-formats/index.html#dds-directdraw-surface) files (e.g. [Paint.net](https://www.getpaint.net/))

___

## Dialogs | XML

- [S.T.A.L.K.E.R. Dialog Editor Extended](https://www.moddb.com/mods/call-of-chernobyl/addons/stalker-dialog-editor-extended-german) - Allows you to edit and create dialogs.

- [Dialog Editor](https://github.com/rayofhope-dev/dialog-editor) - Completely new dialog editor (not compatible with Anomaly)

- [STALKER TRANSLATION XML TOOL](https://www.moddb.com/mods/stalker-anomaly/addons/stalker-translation-xml-tool) - Python-based tool that automatically translates your mod's XML files using “googletrans” or "DeepL".

___

## Parameters | LTX

- [STLKObjectMan](https://drive.google.com/file/d/1OM2gZtj_Ubg7H03iI-Z_z3EAkwn1_S2R/view) - Universal parameters editor. Modifies \*[.ltx](../main-folders-and-files/file-formats/index.html#ltx-files) and \*[.xml](../main-folders-and-files/file-formats/index.html#xml-files) files. **not compatible with Anomaly due to modified config files**

- [StalkerElementFinder](https://disk.yandex.ru/d/Rv-Mt1IAXyTihA%D0%B0) - A program for finding elements and resources

- [DLTXIFY BY RIGHT CLICK](https://www.moddb.com/mods/stalker-anomaly/addons/dltxify-by-right-click-for-modders-tool) - This bundle allows to create DLTX version of the mod by simple right click on the folder of the mod and choosing "DLTXify mod" in context menu

___

## Sounds

- [Audacity](https://www.audacityteam.org/)

- [Sound Attribute Viewer And Tweaker](https://www.metacognix.com/files/stlkrsoc/index.html#:~:text=Sound%20Attribute%20Viewer%20and%20Tweaker,of%20NPCs%20to%20the%20sounds.) - Simple program that can reduce the work needed to view and/or edit STALKER sound file attributes used by all three STALKER games to determine initial volume, volume drop-off, and sensitivity of NPCs to the sounds
  - [More](savandt.md)

- [OGG Editor](https://disk.yandex.ru/d/Dcyo0Nt3A3b5g) - This utility is designed to quickly view and edit audio comments

- [StkOggCommentViewer](https://cdn.discordapp.com/attachments/978593574893535274/979058737270644776/StkOggCommentViewer.exe) - Allows viewing comments in an [.ogg](../main-folders-and-files/file-formats/index.html#ogg) file

- [OggCommentDecompiler](https://ap-pro.ru/applications/core/interface/file/attachment.php?id=22581) - Saves comments in a [.ltx](../main-folders-and-files/file-formats/index.html#ltx-files) file, whose name and path are equivalent to the sound file

___

## Animations

- [OMF Editor](https://github.com/mortany/omf_editor) - Tool for working with [.omf](../main-folders-and-files/file-formats/index.html#omf-open-motions-format) format.
- [OMF Editor by Valerok](https://github.com/VaIeroK/Omf-Editor) - Modified tool for working with [.omf](../main-folders-and-files/file-formats/index.html#omf-open-motions-format) format.
  - [More](omf-editor-by-valerok.md)

- OmfSpisok - utility for one-click output .txt list of connected *.omf files from *.ogf file

___

## Models

- [OGF Editor](https://github.com/mortany/OGF-tool) - Tool for working with .ogf format
- [OGF Editor by Valerok](https://github.com/VaIeroK/OGF-tool) - Tool for working with .ogf and [.dm](../main-folders-and-files/file-formats/index.html#dm-detail-model) format
  - [More](ogf-editor-by-valerok.md)

- [MeshToolz](https://github.com/gunslingermod/MeshToolz) - Swiss knife for low-level editing of OGF models. Want to copy a piece of one model to another? Easy. Change texture paths and bindings? No problem. Move and scale an item by snapping it to another bone? No problem. Can work both interactively and in script processing mode.
  - [Scripts For MeshToolz](https://github.com/gunslingermod/additional_scopes)

- [OGFViewer](https://github.com/mrnotbadguy/OGFViewer) - legacy model viewer for .ogf format.

- [ObjectParamsCopier](https://github.com/gunslingermod/compiled_toolz) -  Allows you to quickly copy surface settings with the same name from one object file to another

- [OgfRefEditor](https://github.com/gunslingermod/compiled_toolz) - Editor of the list of OMFs connected to the model. It is intended primarily for changing the list of OMFs used in hand models, for this purpose it is possible to apply the OMF list to all OGFs in the selected folder

- [StalkerWeaponToolKit](https://disk.yandex.ru/d/x3771W3btrwtFw) - Tool for working with weapons

- [StalkerObjectVisual](https://disk.yandex.ru/d/ydy1eMOagGf80Q) - Viewer for .ogf models

___

## Upgrades

- [Upgrades Editor](https://github.com/gunslingermod/compiled_toolz) - A visual editor that makes it relatively quick and easy to create weapon upgrade schemes
  - [More](upgrade-editor.md)

___

## Postprocess

- [ppeEditor](http://www.big-games.do.am/load/mod/tools/s_t_a_l_k_e_r_ppe_editor_1_2_0/7-1-0-34) - Software for creating and editing files of the postprocessing .ppe files

___

## NPC's

- [NPC creator](https://disk.yandex.ru/d/kQnkCrVdtW8clQ) - Program designed to create NPC's

- [NPC Editor](https://github.com/rayofhope-dev/npc-editor) - NPC editing tool (Currently not working for Anomaly!)

- [NpcStalkerToolKit](https://disk.yandex.ru/d/QyDQTHHInCjDGg) - This program creates NPC in the game (but does not spawn them)

___

## AI

- [Decompressor of .efd files](https://cdn.discordapp.com/attachments/385903500581928969/590555274079633408/EFD_Reader.7z)

- [Game Graph Editor](https://cdn.discordapp.com/attachments/978593574893535274/979059136467726356/Game_Graph_Editor.rar)

___

## Spawn

- [XrSpawner](http://sdk.stalker-game.com/ru/images/0/06/XrSpawner_v0.13.1Beta.rar) - A program that allows you to edit the .spawn file of the game containing the initial location and some properties of all dynamic objects

___

## Decompilers | Compilers

- [X-Ray Converter](https://disk.yandex.ru/d/nivUmGybuCXSC) - Multifunctional utility for working with game file formats and X-Ray SDK
  - [X-Ray Converter Extra](https://disk.yandex.ru/d/7137tI653PRnrU) - Improved components for the converter
    - [GUI for Converter](https://modsfire.com/download/Fzg5Q2L2pcEHA8m/e9f70) - GUI for converter
  - [More](https://modfaq.ru/X-Ray_Converter)

- [Particle Editor Tools](https://cdn.discordapp.com/attachments/978593574893535274/979057726623735828/Particle_Editor_Tools.rar) - Decompiling/compiling particle.xr file

- [Universal ACDC](https://disk.yandex.ru/d/-GBYa8DxQv8MF) - Perl script, to unpack and pack all.spawn
- [gamemtl_xr_cdc](https://disk.yandex.ru/d/hR79KfSn3PLtSK) - To decompile [gamemtl.xr](../main-folders-and-files/README.md#files)
- [lanims_xr_cdc](https://disk.yandex.ru/d/qKhybMU-3PLtTj) - To decompile [lanims.xr](../main-folders-and-files/README.md#files)
- [shaders_xr_cdc](https://disk.yandex.ru/d/RcMprj9W3PLtdj) - To decompile [shaders.xr](../main-folders-and-files/README.md#files)
- [shaders_xrlc_xr_cdc](https://disk.yandex.ru/d/FoQnY1VV3PLteX) - To decompile [shaders.xrlc](../main-folders-and-files/README.md#files)
- [senvironment_xr_cdc](https://disk.yandex.ru/d/jBnrr3Xg3PLtcc) - To decompile [senvironment.xrlc](../main-folders-and-files/README.md#files)
- [particles_xr_cdc (Unpacking to binary files only)](https://disk.yandex.ru/d/LCkINfLw3PLtV5) - To decompile [particles.xrlc](../main-folders-and-files/README.md#files)
- [converter-level](https://disk.yandex.ru/d/czZSLCzT3UrDa5)
  - The program requires Old Version Active Perl **(at least version 5 and up to about version 5.24)** to be installed.
  - You also need [stkutils](https://disk.yandex.ru/d/nnjntzYZQv8sD) (put it in the folder with the script or in C:\Perl\lib)

___

## Level Compilers

- [Universal x64 level compilers](https://drive.google.com/file/d/1_sllfHcPL0pwsStf2x4lpPusbb6EZK8_/view) - Universal level compiler that supports the compilation format for games of all series and has many keys to compile
  - [More](universal-x64-level-compilers.md)

___

## .db | .xdb archivers

- [DB_Compressor by d_μaμ](https://cdn.discordapp.com/attachments/616764067670917131/846799604438532107/DB_Compressor.rar)
- [xrCompress by i-love-kfc](https://ap-pro.ru/forums/topic/3500-obnovlyonnyy-xrcompress/) - .db/.xdb archiver
  - [More](xrcompress-by-i-love-kfc.md)

___

## Mod Creating

- [FOMOD Creation Tool](https://www.nexusmods.com/fallout4/mods/6821)

___

## Formats

- [ChunckTool](https://github.com/gunslingermod/compiled_toolz) - The utility is intended for low-level work with chunks in files and allows to read, replace and add data.
