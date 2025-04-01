# Level Editor

___

## About

Level Editor is used to create locations

___

### File Button

| Button | Description | Note |
|---|---|---|
| Clear | Clear scene | Essentially creates a new scene |
| Open | Opens .level file | - |
| Save | Save file | - |
| Save As | Saves as | [*.level](../../../reference/file-formats/game-levels/dot-level.md) |
| Open Selection |  |  |
| Save Selection As | Save Selection As | *.level |
| Make pack... |  | - |
| Open Recent | Opens recent | - |
| Quit | Exiting the program | - |

### Scene Button

| Button | Description | Note |
|---|---|---|
| World Properties | | |
| Export as archive |  |  |
| Validate | Checks the level for errors | - |
| Summary info | Shows information about objects in the scene | - |
| Highlight Texture | Highlights the selected texture | - |
| Clear Debug Draw |  |  |
| Export entire Scene as Obj |  | *.object<br> /*.lwo<br> *.txt<br> /*.xr<br> *.wav<br> /*.obj<br> *.ltx<br> /*.cpp |
| Export selection as Obj |  | *.object<br> /*.lwo<br> *.txt<br> /*.xr<br> *.wav<br> /*.obj<br> *.ltx<br> /*.cpp |

### Compile Button

| Button | Description | Note |
|---|---|---|
| Make All | Creates a [*.prj](../../../reference/file-formats/game-levels/prj.md) precompilation file |  |
| Make Puddles |  |  |
| Make Details | Creates a [*.details](../../../reference/file-formats/game-levels/details.md) file | - |
| Make HOM | Creates a [*.hom](../../../reference/file-formats/game-levels/hom.md) file |  |
| Make SOM | Creates a [*.som](../../../reference/file-formats/game-levels/som.md) file |  |
| Make Ai-Map | Creates a [*.ai](../../../reference/file-formats/game-levels/ai.md) file | - |
| Import Error List | Import Error List | *.err |
| Import xrAI Error List |  |  |
| Export Error List | Export Error List | *.err |
| Clear Error List | Clear Error List | - |

### Objects Button

| Button | Description | Note |
|---|---|---|
| Library Editor | Opens the Object Library | Scene should be before the opening |
| Multi Rename |  |  |
| Multi Replace |  |  |
| Reload | Reload Objects | - |

### Images Button

| Button | Description | Note |
|---|---|---|
| Image Editor | Open Image Editor | - |
| Reload Textures | Reload Textures | - |
| Synchronize Textures | Updates and synchronizes textures and their previews | - |
| Check New Textures | Check New Textures | - |
| Edit minimap |  |  |
| SyncTHM |  |  |

### Sounds Button

| Button | Description | Note |
|---|---|---|
| Sound Editor | Open Sound Editor | - |
| Synchronize Sounds (Soft) |  | - |
| Synchronize Sounds (Hard) |  | - |
| Refresh Environment Library |  | - |
| Refresh Environment Geometry |  |  |

### Options

<table><thead>
  <tr>
    <th>Button</th>
    <th>Options</th>
    <th></th>
    <th>Description</th>
    <th></th>
    <th>Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="20">Options</td>
    <td rowspan="10">Render</td>
    <td>Quality</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">Fill Mode</td>
    <td rowspan="3"></td>
    <td>Point</td>
    <td></td>
  </tr>
  <tr>
    <td>Wireframe</td>
    <td></td>
  </tr>
  <tr>
    <td>Solid</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Shader Mode</td>
    <td rowspan="2"></td>
    <td>Flat</td>
    <td></td>
  </tr>
  <tr>
    <td>Gouraud</td>
    <td></td>
  </tr>
  <tr>
    <td>Edged Faces</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>RenderHW</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Filter Linear</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Textures</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Draw Safe Rect</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Draw Grid</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="3">Coordinate Axes</td>
    <td>None</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Axis</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Cube</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Fog</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Mute Sounds</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Real Time</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Stats</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Preferences</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody></table>

### Windows

| Button | Description | Note |
|---|---|---|
| Light Anim Editor |  |  |
| Macro Editor |  |  |
| Snap List |  |  |
| Objects Tools |  |  |
| Properties |  |  |
| Log |  |  |
| Theme |  |  |

### Help

| Button | Description |
|---|---|
| Wiki |  |
| Help |  |

### Plugins

| Button | Description | Note |
|---|---|---|
| Reinit |  |  |
| Puddles Import |  |  |
| Restore Normal |  |  |
| Trees Paddins Generator (Directory to dds) |  |  |
| Trees Paddins Generator (Texture to dds) |  |  |
| Trees Paddins Generator (TGA) |  |  |

### Build

| Icon | Button | Description | Note |
|---|---|---|---|
|  | Build CFORM |  |  |
|  | Build AI-Map |  |  |
|  | Build Game Graph |  |  |
