# Modding Tools

## In-game editors

- Item Spawner - Spawn menu for items (Weapons, Outfits, etc)
- Object Spawner - Spawn menu for objects (NPCs, Squads, Anomalys, etc)
- Weather Editor - Editor for setting, saving weather
- Lighting Editor - Weather Lighting Editor
- Weapon HUD Editor - Allows you to customize the HUD of the weapon (position, location of the shot, etc.)
- Weapon Stats Editor - Allows you to adjust the configuration of the weapon (bullet speed, aiming, etc.)
- Outfits Stats Editor - Allows you to customize the configuration of the outfits (protection from different types of damage, etc.)
- Pocket Workshop - Not an editor, but allows you to check the scheme of improvements.
- NPC Logic/Execute - Allows you to edit NPC logic

## Toolsets

- [AXRToolset](https://github.com/revolucas/AXRToolset) - AXRToolset is an AutoHotkey & Lua-based scripting engine that utilizes a Graphical User Interface to display scripted plugins that do various automated tasks. Although the current plugins are designed to aid in the development of S.T.A.L.K.E.R.: Call of Chernobyl, the engine itself can be used to create macros, scripts and other utilities for any application or purpose.

## Gamedata Extractors

Software to unpack gamedata

- [Universal Extractor 2.0](https://disk.yandex.ru/d/GbgDm-JT2JtfNQ) - Unzips the gamedata from the original trilogy
- db_unpacker.bat (tools/) - Anomaly's internal gamedata extractor, which extracts the scripts and configs files from the .db
- db_unpacker_all.bat (tools/) - An internal gamedata extractor from Anomaly, which extracts all files from .db

## Converters

- converter.exe (tools/) - Converts files from one format to another.

## SDK's

Official SDK with community enhancements:

- [SDK 0.4 (Shadows of Chernobyl)](http://files.gsc-game.com/st/xray-sdk-setup-v0.4.exe)
    - [SDK 0.4 by Yara](https://bitbucket.org/Yar0s1av/xray_stalker_sdk_04_fixed/src/master/) - This is a compiled from source SDK 0.4, which has dozens of fixes and improvements.
    - [SDK 0.4 by YUSHAT](http://files.xray-engine.org/yurshat/repack/xray_sdk_yurshat_repack.rar)
    - [SDK 0.4 by Political](https://disk.yandex.ru/d/KmVOitON3GnyuU)

- [SDK 0.5 (Clear Sky)](http://xfiles.gsc-game.com/st/xray-cs-sdk-setup.exe)
    - [SDK B.O.R.S.C.H.T for CS by Lightning in a vacuum](https://bitbucket.org/stalker/xray-csky_borscht_sdk/src/master/)

- [SDK 0.7 (Call of Pripyat)](https://www.moddb.com/games/stalker-call-of-pripyat/downloads/x-ray-16-engine-sdk-v07)
    - [SDK 0.7 (Call of Pripyat)(RePack by DaaGuda V2)](https://mega.nz/folder/zFBiWSAJ#5_MSuGpVPb7QqcPH00nC7w)

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

    - [SDK 0.7 by Range](https://disk.yandex.ru/d/wnzjuQkcti1CNw)

- [SDK 0.8 by Red Panda](https://github.com/RedPandaProjects/XRayEngine/releases) - This is a port and a small upgrade of the classic 0.7 editor set. A lot of problems with the classic editor were related to the outdated development environment, which did not allow to upgrade it. Imgui was taken as a UI shell, as the easiest ui allowing to create simple forms with one line of code. All 4 editors were taken over.

- [SDK 2.6 beta (Lost Alpha)](https://www.moddb.com/mods/lost-alpha/downloads/stalker-lostalpha-sdk-v26-beta) - Contains the basic editors and tools that were used to create Lost Alpha.

## 3D packages

3D Packages that have compatibility/addons to work with X-Ray:

- [Blender (With X-Ray Addon)](../blender/index.html)

- 3Ds Max

- MilkShape

## Textures

- [OXR Texture Tool](https://github.com/revolucas/OXR-Texture-Tool) - This tools purpose is to unpack ui_icon_equipment.dds into separate individual icons so that they can be manipulated individually or merged more easily. This tool is capable of creating a new sprite sheet using the unpacked icons and writing the new geometry values (w,h,x,y) into the system configs. It also allows you to merge up to 4 existing unpacked ui_icon_equipment directories into a single sheet.

- [THM Editor](https://gitlab.com/i-love-kfc/thm-editor/) - Utility for editing [.thm](../main-folders-and-files/file-formats/thm.md) files without the need to use the SDK
- [THM Editor by Valerok](https://github.com/VaIeroK/THM-Editor) - The THM Editor from i-love-kfc was taken as the basis, finalized and fixed.
    - [More](thm-editor-by-valerok.md)

- [ThmValidator](https://github.com/gunslingermod/ThmValidator) - Allows you to check the [.thm](../main-folders-and-files/file-formats/thm.md) files in the selected directory and automatically fix the most common bugs that occur during manual editing.

- [Substance 3D Painter](https://store.steampowered.com/app/1775390/Substance_3D_Painter_2022/)

- [Paint.net](https://www.getpaint.net/) - Most often used to properly compress textures.

## Animations

- [OMF Editor](https://github.com/mortany/omf_editor) - Tool for working with [.omf](../main-folders-and-files/file-formats/omf.md) format.
- [OMF Editor by Valerok](https://github.com/VaIeroK/Omf-Editor) - Modified tool for working with [.omf](../main-folders-and-files/file-formats/omf.md) format.
    - [More](omf-editor-by-valerok.md)

## Models

- [OGF Editor](https://github.com/mortany/OGF-tool) - Tool for working with ogf format
- [OGF Editor by Valerok](https://github.com/VaIeroK/OGF-tool) - Modified tool for working with ogf format

- [MeshToolz](https://github.com/gunslingermod/MeshToolz) - Swiss knife for low-level editing of OGF models. Want to copy a piece of one model to another? Easy. Change texture paths and bindings? No problem. Move and scale an item by snapping it to another bone? No problem. Can work both interactively and in script processing mode.
    - [Scripts For MeshToolz](https://github.com/gunslingermod/additional_scopes)

- [OGFViewer](https://github.com/mrnotbadguy/OGFViewer) - legacy model viewer for [.ogf](../main-folders-and-files/file-formats/README.md) format.

- [ObjectParamsCopier](https://github.com/gunslingermod/ObjectParamsCopier) -  Allows you to quickly copy surface settings with the same name from one object file to another

- [OgfRefEditor](https://github.com/gunslingermod/OgfRefEditor) - Editor of the list of OMFs connected to the model. It is intended primarily for changing the list of OMFs used in hand models, for this purpose it is possible to apply the OMF list to all OGFs in the selected folder

- [BumpGenerator](https://github.com/gunslingermod/BumpGenerator) - Intended for DXT compression of bumps together with simultaneous generation of bump#maps (the purpose of which is to correct errors introduced by compression). It works similarly to a similar function in KFK. As input textures, both standard ("blue") bump textures and bump textures used directly in the game with rearranged channels are supported.

- [StalkerWeaponToolKit](https://disk.yandex.ru/d/x3771W3btrwtFw) - Tool for working with weapons

## Upgrades

- [Upgrades Editor](https://github.com/gunslingermod/upgrades_editor) - A visual editor that makes it relatively quick and easy to create weapon upgrade schemes

## NPC's

- [NPC creator](https://disk.yandex.ru/d/kQnkCrVdtW8clQ)

- [NPC Editor](https://github.com/rayofhope-dev/npc-editor) - NPC editing tool

## AI

- [Decompressor of .efd files](https://cdn.discordapp.com/attachments/385903500581928969/590555274079633408/EFD_Reader.7z)

## Decompilers

- [ACDC](https://disk.yandex.ru/d/4BEMg9aicjYhy) - Perl script, to unpack and pack all.spawn
- [gamemtl_xr_cdc](https://disk.yandex.ru/d/hR79KfSn3PLtSK)
- [lanims_xr_cdc](https://disk.yandex.ru/d/qKhybMU-3PLtTj)
- [shaders_xr_cdc](https://disk.yandex.ru/d/RcMprj9W3PLtdj)
- [shaders_xrlc_xr_cdc](https://disk.yandex.ru/d/FoQnY1VV3PLteX)
- [senvironment_xr_cdc](https://disk.yandex.ru/d/jBnrr3Xg3PLtcc)
- [particles_xr_cdc (Unpacking to binary files only)](https://disk.yandex.ru/d/LCkINfLw3PLtV5)
    - The program requires Perl to be installed.
    - You also need [stkutils](https://disk.yandex.ru/d/nnjntzYZQv8sD) (put it in the folder with the script or in C:\Perl\lib)

## Compilers

- [Universal x64 level compilers](https://drive.google.com/file/d/1ZR8bnMkTGqFiZgGE7DtHCRYfSgj0GrPz/view)

## .db/.xdb archivers

- [DB_Compressor by d_μaμ](https://cdn.discordapp.com/attachments/616764067670917131/846799604438532107/DB_Compressor.rar)
- [xrCompress](https://ap-pro.ru/forums/topic/3500-obnovlyonnyy-xrcompress/)