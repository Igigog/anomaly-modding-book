# Particle Editor

___

## About

Used to create particle effects ([*.pe](../../../reference/file-formats/particles/pe.md)) or particle groups ([*.pg](../../../reference/file-formats/particles/pg.md)).

![alt text](assets/images/particle-editor.png)

___

## Interface

<body>
  <div class="table-tabs">
    <div class="tab-buttons">
      <button class="tab-button active" onclick="openTable(event, 'File')">File</button>
      <button class="tab-button" onclick="openTable(event, 'Editors')">Editors</button>
      <button class="tab-button" onclick="openTable(event, 'Options')">Options</button>
      <button class="tab-button" onclick="openTable(event, 'Windows')">Windows</button>
    </div>
    <div id="File" class="tab-content" style="display: block;">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>Save</td>
            <td>Save the particles in unpacked form(*.pe,\*.pg), in rawdata/particles</td>
          </tr>
          <tr>
            <td>Reload</td>
            <td>Reload particles from rawdata/particles</td>
          </tr>
          <tr>
            <td>Save .xr</td>
            <td>Save file .xr</td>
          </tr>
          <tr>
            <td>Load .xr</td>
            <td>Load file .xr</td>
          </tr>
          <tr>
            <td>Validate</td>
            <td>Validate particles</td>
          </tr>
          <tr>
            <td>Compact</td>
            <td>Checks database integrity, corrects paths to effects, and organizes storage structure</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Editors" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th>Option</th>
            <th>1</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td rowspan="3">Image</td>
            <td>Image Editor</td>
            <td>Open Image Editor</td>
          </tr>
          <tr>
            <td>Synchronize Textures</td>
            <td>The function updates textures in the project by checking changes in the file  system   and synchronizing them</td>
          </tr>
          <tr>
            <td>Check New Textures</td>
            <td>Searches for new textures in the file system and imports them</td>
          </tr>
          <tr>
            <td rowspan="3">Sounds</td>
            <td>Sound Editor</td>
            <td>Open Sound Editor</td>
          </tr>
          <tr>
            <td>Synchronize Sounds (Soft)</td>
            <td>Searches for new sounds in the file system and imports them. Deletes only those   sounds that do not exist in the file system and are not     used</td>
          </tr>
          <tr>
            <td>Synchronize Sounds (Hard)</td>
            <td>Searches for new sounds in the file system and imports them. Deletes all sounds   missing from the file system without checking if they   are   used</td>
          </tr>
          <tr>
            <td>Light Anim Editor</td>
            <td>-</td>
            <td>Open <a href="../light-animations-editor/light-animations-editor.md">Light  Animation Editor</a></td>
          </tr>
          <tr>
            <td>Minimap Editor</td>
            <td>-</td>
            <td>Open <a href="../minimap-editor/minimap-editor.md">Minimap Editor</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Options" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th>Options</th>
            <th>1</th>
            <th>Description</th>
            <th>1</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td rowspan="10">Render</td>
            <td>Quality</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="3">Fill Mode</td>
            <td rowspan="3">Fill Mode</td>
            <td>Point</td>
            <td>Vertex point fill mode</td>
          </tr>
          <tr>
            <td>Wireframe</td>
            <td>Wireframe fill mode</td>
          </tr>
          <tr>
            <td>Solid</td>
            <td>Solid fill mode</td>
          </tr>
          <tr>
            <td rowspan="2">Shader Mode</td>
            <td rowspan="2">Shader Mode</td>
            <td>Flat</td>
            <td><a href="https://en.wikipedia.org/wiki/Shading#Flat_shading">Flat Shading</a></td>
          </tr>
          <tr>
            <td>Gouraud</td>
            <td><a href="https://en.wikipedia.org/wiki/Gouraud_shading">Gouraud Shading</a></td>
          </tr>
          <tr>
            <td>Edged Faces</td>
            <td>Enables drawing of edges (wireframe) of a 3D mesh</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>RenderHW</td>
            <td>Enables GPU rendering</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Filter Linear</td>
            <td>Enables linear texture filtering</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Textures</td>
            <td>Enables texture display (TODO Not Working)</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Draw Safe Rect</td>
            <td></td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Draw Grid</td>
            <td>Draw viewport grid</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="3">Coordinate Axes</td>
            <td>None</td>
            <td>None</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Axis</td>
            <td><img src=../assets/images/ca-axis.png></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Cube</td>
            <td><img src=../assets/images/ca-cube.png></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Fog</td>
            <td>-</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Mute Sounds</td>
            <td>-</td>
            <td>Mute Sounds</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Real Time</td>
            <td>-</td>
            <td>Real Time</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Stats</td>
            <td>-</td>
            <td>Displaying statistics</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Preferences</td>
            <td>-</td>
            <td>Open <a href="../editors-preference.md">Preference window</a></td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Windows" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>Log</td>
            <td>Open Log window</td>
          </tr>
          <tr>
            <td>Theme</td>
            <td>Editor theme</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</body>

### Top Bar

| Icon | Name | Description |
|:---:|---|---|
| ![1](../../../assets/icons/sdk/undo.png) | Undo | Undo the last action |
| ![1](../../../assets/icons/sdk/redo.png) | Redo | Repeat the last action |
| ![1](../../../assets/icons/sdk/save.png) | Save | Save the particles in unpacked form(*.pe,\*.pg), in rawdata/particles |
| ![1](../../../assets/icons/sdk/RCRefresh.bmp) | Reload | Reload particles from rawdata/particles |
| ![1](../../../assets/icons/sdk/open.png) | Open | Open file .xr |
| ![1](../../../assets/icons/sdk/save.png) | Save | Save file .xr |
| ![1](../../../assets/icons/sdk/Btn_FolderOpen.bmp) | Open | Open folder Gamedata |
| ![1](../../../assets/icons/sdk/Validate.png) | Validate | Particle Validation |
