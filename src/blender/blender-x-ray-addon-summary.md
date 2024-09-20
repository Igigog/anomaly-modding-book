# Blender X-Ray Addon

___

[Blender X-Ray Addon for S.T.A.L.K.E.R](https://github.com/PavelBlend/blender-xray)
[Latest Versions](https://github.com/PavelBlend/blender-xray/releases)

## What is blender-xray?

blender-xray is an addon for the 3D blender package (blender.org) that is designed to import/export 3D models and animations from S.T.A.L.K.E.R. (engine - X-Ray Engine).

## [Supported formats](https://github.com/PavelBlend/blender-xray/wiki#supported-formats)

This table lists the X-Ray file formats that the addon can import/export.

| Extension | Description | Can Import | Can Export |
---|---|---|---|
| [.object](../main-folders-and-files/file-formats/index.html#object) | Source objects | Yes | Yes |
| .skl | Skeletal animation | Yes | Yes |
| .skls | Skeletal animations in a container | Yes | Yes |
| .ogf | Compiled objects | Yes | Yes |
| [.omf](../main-folders-and-files/file-formats/index.html#omf-open-motions-format) | Game skeletal actions | Yes | Yes |
| [.anm](../main-folders-and-files/file-formats/index.html#anm-animated-paths) | Animated paths | Yes | Yes |
| .bones | Bones data | Yes | Yes |
| [.dm](../main-folders-and-files/file-formats/index.html#dm-detail-model) | Detailed effect models | Yes | Yes |
| [.details](../main-folders-and-files/file-formats/index.html#details) | Level details | Yes | Yes |
| .level | List of scene objects in the SDK | Yes | Yes |
| [level](../main-folders-and-files/file-formats/index.html#level) | Game levels | Yes | Yes |
| .part | Scene objects | Yes  | No |
| .err | Error list | Yes  | No |

## [Compatibility](https://github.com/PavelBlend/blender-xray/wiki#supported-blender-versions)

2.77 - 3.6

___

# Addon installation and setup

___

[Download the latest version of the addon](https://github.com/PavelBlend/blender-xray/releases)

Go into Blender. Click "Edit" > Preferences (![svg-icon preference](blender-images/blender-images-icons/preference-icon.svg))

![Installing-P1 centered](blender-images/0.png)

Add-ons > Install (![svg-icon install](blender-images/blender-images-icons/install-icon.svg))

![Installing-P2 centered](blender-images/1.png)

Choose the downloaded version of the addon (![svg-icon addon](blender-images/blender-images-icons/addon-icon.svg)).

![Installing-P3 centered](blender-images/2.png)

Blender will then notify you that the addon has been successfully installed.

___

## Setup

Find the installed addon in the list of addons.

![Setup-P1 centered](blender-images/3.png)

In order to start setting up and using the addon, you need a little theory.

## Presets

Addon settings presets. Intended to save settings, with the ability to switch between them. To create a new preset, you must first configure the addon settings and then click the button to the right with the plus (![plus](blender-images/blender-images-icons/plus.svg)) sign. In the window that appears, specify the name of the preset and click OK. To delete a preset, select it from the list and click on the minus (![svg-icon minus](blender-images/blender-images-icons/minus.svg)) button.

![Setup-P2 centered](blender-images/4.png)

## Path Settings

These settings specify paths to external files or directories of X-Ray Engine or X-Ray SDK.It is possible to set paths automatically, based on a single parameter. For example, if you specify the gamedata folder in the Gamedata Folder parameter, empty paths (except, fs.ltx File) will be filled in automatically. Automatically filled paths have text (auto) at the end of the name. To change the path manually, you have to click on the button with a wrench (![svg-icon wrench](blender-images/blender-images-icons/wrench.svg)). The wrench button will disappear and the folder icon button will be displayed instead. You can then open the file browser using the folder button. In the browser, select the desired folder or file. Or you can change the path in the text box by typing it in from the keyboard. If the path is set manually, its value will not be changed automatically by the addon. To return the automatic path indication, you need to clear the path input field.

Example Path Settings:
![Setup-P3 centered](blender-images/5.png)

- [About the required paths can be found here](../blender/addon-settings-options/pathes.md)

- [Advanced Settings](addon-settings-options/index.html)

- [More Details (Addon Wiki)](https://github.com/PavelBlend/blender-xray/wiki/Preferences#paths-settings)

Once the paths are installed, the setup is pretty much complete. Already at this stage you can work.

___

## P.S

For even more comfortable work it is recommended to go to the tab "Other" and check the box "Compact Import/Export Menus".

![Setup-P4 centered](blender-images/6.png)

If this option is enabled, the import/export menu will keep the operators in a compact form and will be grouped in one X-Ray submenu.

![Setup-P4 centered](blender-images/7.png)
