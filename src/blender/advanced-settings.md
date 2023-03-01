# Addon settings options

___

Description of addon settings

- [Paths](#paths)
- [Defaults](#defaults)
- [Formats](#formats)
- [Panels](#panels)

___

# Paths

___

These settings specify paths to external files or directories of X-Ray Engine or X-Ray SDK.It is possible to set paths automatically, based on one parameter. For example, if you specify the gamedata folder in the Gamedata Folder parameter, empty paths (except, fs.ltx File) will be filled in automatically. Automatically filled paths have text (auto) at the end of the name. To change the path manually, you have to click on the button with a wrench (![wrench-icon](../blender-images/blender-images-icons/wrench.svg)). The wrench button will disappear and the folder icon button will be displayed instead. You can then open the file browser using the folder button. In the browser, select the desired folder or file. Or you can change the path in the text box by typing it in from the keyboard. If the path is set manually, its value will not be changed automatically by the addon. To return the automatic path indication, you need to clear the path input field.
The addon automatically sets these values:

| Parameter | Value |
---|---|
| fs.ltx File | - |
| Gamedata Folder | . |
| Textures Folder | .textures\ |
| GameMtl File | .gamemtl.xr |
| EShader File | .shaders.xr |
| CShader File | .shaders_xrlc.xr |
| Objects Folder | ..rawdata\objects |

"-" - means that automatic path setting does not work for this parameter. The automatic path setting will work if you specify any parameter other than Objects Folder first.

___

- ## fs.ltx File

Path to the fs.ltx file. This file is in the X-Ray SDK and stores directory paths. Addon uses fs.ltx file only to automatically set the following paths: Gamedata Folder, Textures Folder, GameMtl File, EShader File, CShader File, Objects Folder. Only these variables from the file are used: $game_data$, $game_textures$, $objects$. The files gamemtl.xr, shaders.xr, shaders_xrlc.xr are searched in the directory that is specified in $game_data$. If parameters Gamedata Folder, Textures Folder, GameMtl File, EShader File, CShader File, Objects Folder are already configured, it is not necessary to specify fs.ltx File.
Examples of use: this parameter is needed to set paths correctly automatically if fs.ltx file was edited and X-Ray SDK uses paths that are different from gamedata, gamedata\textures, rawdata\objects.

___

- ## Gamedata Folder

The path that must refer to the gamedata folder (or to the folder specified in $game_data$ if fs.ltx has been changed). This path is used only for automatic installation of the following parameters: Textures Folder, GameMtl File, EShader File, CShader File, Objects Folder. The paths are automatically set by adding Gamedata Folder and preset values. The values are set as follows: Textures Folder - textures, GameMtl File - gamemtl.xr, EShader File - shaders.xr, CShader File - shaders_xrlc.xr, Objects Folder - ..rawdata\objects, where .. in the beginning Objects Folder means go one folder back in path. That is, the path to the Objects Folder will look like this: c:\programs\xray_sdk\rawdata\objects\, if Gamedata Folder has the following value: c:\programs\xray_sdk\gamedata\.

___

- ## Textures Folder

The path that should refer to $game_textures$. This is usually the gamedata\textures folder which contains the textures. Only the dds format is supported for loading. This path is only used by plugins that import/export formats that support textures (such as *.object,*.dm, *.ogf...). Some plugins do not use this path (for example,*.err, *.skls...). When importing some formats, the addon looks for dds textures at this path and loads them into blender.

___

- ## GameMtl File

Path to the gamemtl.xr file. Normally stored in gamedata\gamemtl.xr. This file stores surface materials. In the X-Ray Engine a material is a physical property of the surface, and does not affect the visual presentation (not to be confused with blender materials, which affect visual appearance). X-Ray Engine uses shaders to change the appearance of the surface. The material determines the sounds of footsteps, wallmark textures from shots, friction, particle effects when bullets hit, the ability to get cast shadows from dynamic objects... If this path refers to a gamemtl.xr file, then the list of the parameter GameMtl for materials and dice will be filled with the material names from the gamemtl.xr file and from this list you can click on any material name. If this path does not reference the gamemtl.xr file, then the GameMtl list of materials and bones will be empty. Only the names, text descriptions and integer material IDs are read from the gamemtl.xr file.

- [Meterials list](../../shaders/shaders-list/materials-list.md)

___

- ## EShader File

The path to the shaders.xr file. Usually stored in gamedata\shaders.xr. This file contains descriptions of shader settings. EShader is an engine shader that is responsible for surface appearance. If this path refers to the shaders.xr file, the EShader list in blender material settings will be filled in with shader names from this file and you will be able to specify any engine shader name from this list. If this path doesn't reference the shaders.xr file, the EShader list of materials will be empty. Only shader names are read from the shaders.xr file.

- [Shaders list](../../shaders/shaders-list/shaders-list.md)

___

- ## CShader File

Path to the shaders_xrlc.xr file. Usually stored in gamedata\shaders_xrlc.xr. This file contains descriptions of the settings that are used by the level geometry compiler (xrLC.exe). CShader - compile shader (compiler shader) specifying properties of the final (game) level geometry to the level compiler. The source geometry, depending on the compiler shader, may have no visible or tangible (for collisions) geometry, have a different way of storing lighting, etc. If this path refers to the shaders_xrlc.xr file, the CShader list in blender materials will fill with shader names from that file and you can specify any compiler shader name from the list. Only shader names are read from shaders_xrlc.xr file.

- [Compiler Shaders List](../../shaders/shaders-list/compiler-shaders-list.md)

___

- ## Objects Folder

Path to the folder with the original 3D objects and animations. Usually located in the X-Ray SDK in the rawdata\objects folder. From this folder, the addon can only read \*.object and *.skls files. Not all plugins use this folder. Only the object plugin for source objects and the .level plugin for the list of scene objects use it. Also this parameter is used by some operators, for example, Skls File Browser (if you run it from the Motion Refs scroll, Load Active Motion Refs mode). This folder contains the source models and animations in formats that store data without loss of information (without compression).

___

## Sources

[Source](https://github.com/PavelBlend/blender-xray/wiki/Preferences)

# Defaults

___

Here you can set default parameters for many operators

![defaults centered](../blender-images/panels/Defaults.png)

___

## Object

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Parameter</td>
			<td>Description</td>
		</tr>
		<tr>
			<td rowspan="4">Import</td>
			<td rowspan="2">Format version</td>
			<td>SoC</td>
			<td>Sets the .object format import from Shadow of Chernobyl</td>
		</tr>
		<tr>
			<td>CS/CoP</td>
			<td>Sets the .object format import from Clear Sky and Call of Pripyat (Compatible with Anomaly)</td>
		</tr>
		<tr>
			<td>Import Motions</td>
			<td>-</td>
			<td>Import embedded motions as actions</td>
		</tr>
		<tr>
			<td>Split Mesh by Materials</td>
			<td>-</td>
			<td>Import each surface (material) as separate set of faces</td>
		</tr>
		<tr>
			<td rowspan="7">Export</td>
			<td rowspan="2">Format version</td>
			<td>SoC</td>
			<td>Sets the .object format export from Shadow of Chernobyl</td>
		</tr>
		<tr>
			<td>CS/CoP</td>
			<td>Sets the .object format export from Clear Sky and Call of Pripyat (Compatible with Anomaly)</td>
		</tr>
		<tr>
			<td rowspan="2">Smoothing</td>
			<td>Edges</td>
			<td></td>
		</tr>
		<tr>
			<td>Normals</td>
			<td></td>
		</tr>
		<tr>
			<td>Export Motions</td>
			<td>-</td>
			<td>Export armatures actions as embedded motions</td>
		</tr>
		<tr>
			<td>Texture Names from Image Paths</td>
			<td>-</td>
			<td>Generate texture names from image paths (by subtract (gamedata/textures) prefix and (file-extension) suffix)</td>
		</tr>
		<tr>
			<td>Use Export Path</td>
			<td>-</td>
			<td>Append the Object.ExportPath to the export directory for each object</td>
		</tr>
	</tbody>
</table>

___

## Anm

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Parameter</td>
			<td>Description</td>
		</tr>
		<tr>
			<td>Import</td>
			<td>Create Linked Camera</td>
			<td>-</td>
			<td>Create animated camera object (linked to "empty"-object)</td>
		</tr>
		<tr>
			<td>Export</td>
			<td>Format Version</td>
			<td><br>3</br><br>4</br><br>5</br></td>
			<td>Version of the exported .anm format</td>
		</tr>
	</tbody>
</table>

___

## Skls

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Description</td>
		</tr>
		<tr>
			<td>Import</td>
			<td>Add Actions to Motion List</td>
			<td>Adds imported .skls animations to Motion List</td>
		</tr>
	</tbody>
</table>

___

## Bones

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Description</td>
		</tr>
		<tr>
			<td rowspan="2">Import</td>
			<td>Import Bone Parts</td>
			<td></td>
		</tr>
		<tr>
			<td> Import Bone Properties</td>
			<td></td>
		</tr>
		<tr>
			<td rowspan="2">Export</td>
			<td>Export Bone Parts</td>
			<td></td>
		<tr>
			<td>Export Bone Properties</td>
			<td></td>
	</tbody>
</table>

___

## Details

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Parameter</td>
			<td>Description</td>
		</tr>
		<tr>
			<td rowspan="3">Import</td>
			<td>Models in Row</td>
			<td>-</td>
			<td></td>
		</tr>
		<tr>
			<td>Load Slots</td>
			<td>-</td>
			<td></td>
		</tr>
		<tr>
			<td>Format Version:</td>
			<td>
				<br>Builds 1096-1230</br>
				<br>Builds 1233-1558</br>
				<td></td>
			</td>
		</tr>
		<tr>
			<td rowspan="2">Export</td>
			<td>Texture Names from Image Paths</td>
			<td>-</td>
			<td>Generate texture names from image paths (by subtract (gamedata/textures) prefix and (file-extension) suffix)</td>
		</tr>
		<tr>
			<td>Format Version:</td>
			<td>
				<br>Builds 1569 - CoP</br>
				<br>Builds 1233-1558</br>
				<br>Builds 1096-1230</br>
				<td></td>
			</td>
		</tr>
	</tbody>
</table>

___

## Dm

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Description</td>
		</tr>
		<tr>
			<td>Export</td>
			<td>Texture Names from Image Paths</td>
			<td>Generate texture names from image paths (by subtract (gamedata/textures) prefix and (file-extension) suffix)</td>
		</tr>
	</tbody>
</table>

___

## Ogf

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Description</td>
		</tr>
		<tr>
			<td>Import</td>
			<td>Import Motions</td>
			<td>Import embedded motions as actions</td>
		</tr>
		<tr>
			<td rowspan="2">Export</td>
			<td>Texture Names from Image Paths</td>
			<td>Generate texture names from image paths (by subtract (gamedata/textures) prefix and (file-extension) suffix)</td>
		</tr>
		<tr>
			<td>Export Motions</td>
			<td>Export armatures actions as embedded motions</td>
		</tr>
	</tbody>
</table>

___

## Omf

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Parameter</td>
			<td>Description</td>
		</tr>
		<tr>
			<td rowspan="3">Import</td>
			<td>Import Motions</td>
			<td>-</td>
			<td>Import embedded motions as actions</td>
		</tr>
		<tr>
			<td>Import Bone Parts</td>
			<td>-</td>
			<td></td>
		</tr>
		<tr>
			<td>Add Actions to Motion List</td>
			<td>-</td>
			<td>Adds imported .omf animations to Motion List</td>
		</tr>
		<tr>
			<td rowspan="4">Export</td>
			<td>Export Motions</td>
			<td>-</td>
			<td>Export armatures actions as embedded motions</td>
		</tr>
		<tr>
			<td>Export Bone Parts</td>
			<td>-</td>
			<td></td>
		</tr>
		<tr>
			<td>High Quality</td>
			<td>-</td>
			<td></td>
		</tr>
		<tr>
			<td>Export Mode:</td>
			<td>
				<br>Overwrite</br>
				<br>Add</br>
				<br>Replace</br>
				<td></td>
			</td>
		</tr>
	</tbody>
</table>

___

## Scene

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Parameter</td>
			<td>Description</td>
		</tr>
		<tr>
			<td rowspan="2">Import</td>
			<td>Format Version:</td>
			<td>
				<br>SoC</br>
				<br>CS/CoP</br>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>Split Mesh by Materials</td>
			<td>-</td>
			<td>Import each surface (material) as separate set of faces</td>
		</tr>
	</tbody>
</table>

___

## Part

<table>
	<tbody>
		<tr bgcolor="grey">
			<td>Operator</td>
			<td>Function</td>
			<td>Parameter</td>
			<td>Description</td>
		</tr>
		<tr>
			<td rowspan="2">Import</td>
			<td>Format Version:</td>
			<td>
				<br>SoC</br>
				<br>CS/CoP</br>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>Split Mesh by Materials</td>
			<td>-</td>
			<td>Import each surface (material) as separate set of faces</td>
		</tr>
	</tbody>
</table>

---

# Formats

___

In this section you can disable or enable import/export formats

![formats centered](../blender-images/panels/Formats.png)

# Panels

## Scene Properties

### X-Ray Engine: Project

![project centered](../blender-images/panels/Project.png)

| Button | Description |
---|---|
| Export Root | The root folder for export |
| Texture Names from Image Paths | Generate Texture Names from image paths:<br> gamedata/textures/**texture_name**.*extension* |

___

## Material Properties

### X-Ray Engine: Material

![material centered](../blender-images/panels/Meterial.png)

| Button | Note |
---|---|
| Two Sided | The model will be drawn from the outside and inside. The number of polygons in the model is doubled. |
| Shader | [list of shaders](../../shaders/shaders-list/shaders-list.md) |
| Compile | [list of compile shaders](../../shaders/shaders-list/compiler-shaders-list.md) |
| Material | [list of materials](../../shaders/shaders-list/materials-list.md) |

___

## Bone Properties

### X-Ray Engine: Bone

![bone centered](../blender-images/panels/Bone.png)

| Button | Description | Note |
---|---|---|
| Exportable | Will the bone be exported | - |
| Lenght |  |  |
| Material | Material | [list of materials](../../shaders/shaders-list/materials-list.md) |
| Shape Type | Shape type for [ODE](../../terminology/terminology.md#ode) | None<br> Box<br> Sphere<br> Cylinder |
| Edit Shape | Edit Shape | - |
| No Pickable | <acronym title="Simply put, a beam of light (read DXR for more)">Ray Query Rays</acronym>, hit wallmarks will skip this element |  |
| No Physics | The engine ignores shape physics | - |
| Remove After Break | When activated, all dice will start a "remove_time" timer from the config, after which the object will be removed | Example: wooden box |
| No Fog Collider | Volumetric Fog will ignore this element | - |
| Joint Type | Joint type for [ODE](../../terminology/terminology.md#ode) | None<br> Rigid<br> Cloth<br> Joint<br> Wheel<br> Slider |
| Breakable |  |  |
| Mass | Bone mass | - |
| Center of Mass | Center of Mass | - |
| Edit Center | Edit Center of Mass | - |

