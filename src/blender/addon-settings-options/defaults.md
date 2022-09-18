# Defaults

___

Here you can set default parameters for many operators

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