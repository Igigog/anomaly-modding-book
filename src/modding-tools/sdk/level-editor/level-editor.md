# Level Editor

___

## About

Level Editor is used to create locations

![alt text](images/level-editor.png)

___

## Interface

<body>
  <div class="table-tabs">
    <div class="tab-buttons">
      <button class="tab-button active" onclick="openTable(event, 'File')">File</button>
      <button class="tab-button" onclick="openTable(event, 'Scene')">Scene</button>
      <button class="tab-button" onclick="openTable(event, 'Compile')">Compile</button>
      <button class="tab-button" onclick="openTable(event, 'Objects')">Objects</button>
      <button class="tab-button" onclick="openTable(event, 'Images')">Images</button>
      <button class="tab-button" onclick="openTable(event, 'Sounds')">Sounds</button>
      <button class="tab-button" onclick="openTable(event, 'Options')">Options</button>
      <button class="tab-button" onclick="openTable(event, 'Windows')">Windows</button>
      <button class="tab-button" onclick="openTable(event, 'Help')">Help</button>
      <button class="tab-button" onclick="openTable(event, 'Plugins')">Plugins</button>
    </div>
    <div id="File" class="tab-content" style="display: block;">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Description</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clear</td>
            <td>Clear scene</td>
            <td></td>
          </tr>
          <tr>
            <td>Load</td>
            <td>Load an object into a new scene</td>
            <td></td>
          </tr>
          <tr>
            <td>Save</td>
            <td>Save object</td>
            <td></td>
          </tr>
          <tr>
            <td>Save as...</td>
            <td>Save the object as</td>
            <td>*.object <br>*.lwo</td>
          </tr>
          <tr>
            <td>Open Recent</td>
            <td>Open recent</td>
            <td></td>
          </tr>
          <tr>
            <td>Import...</td>
            <td>Imports the model into the scene</td>
            <td></td>
          </tr>
          <tr>
            <td>Optimize Motions</td>
            <td>Goes through all the bones in the animation and optimizes their animation channels (e.g., position, rotation, scale) by removing    redundant keyframes</td>
            <td></td>
          </tr>
          <tr>
            <td>Batch Convert...</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Export</td>
            <td>Export the model to formats</td>
            <td>*.ogf<br>*.omf<br>*.obj<br>*.dm<br>C++</td>
          </tr>
          <tr>
            <td>Quit</td>
            <td>Exiting the program</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Scene" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Description</th>
            <th>Note</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>World Properties</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Export as archive</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Validate</td>
            <td>Checks the level for errors</td>
            <td></td>
          </tr>
          <tr>
            <td>Summary info</td>
            <td>Shows information about objects in the scene</td>
            <td></td>
          </tr>
          <tr>
            <td>Highlight Texture</td>
            <td>Highlights the selected texture</td>
            <td></td>
          </tr>
          <tr>
            <td>Clear Debug Draw</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Export entire Scene as Obj</td>
            <td></td>
            <td>*.object<br>*.lwo<br>*.txt<br>*.xr<br>*.wav<br>*.obj<br>*.ltx<br>*.cpp</td>
          </tr>
          <tr>
            <td>Export selection as Obj</td>
            <td></td>
            <td>*.object<br>*.lwo<br>*.txt<br>*.xr<br>*.wav<br>*.obj<br>*.ltx<br>*.cpp</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Compile" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Extra</th>
            <th>Extra Description</th>
            <th>Extra</th>
            <th>Extra Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td rowspan="7">Make</td>
            <td rowspan="7"></td>
            <td>Make All</td>
            <td>Creates a [*.prj](../../../reference/file-formats/game-levels/prj.md) precompilation file</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Make Game</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Make Puddles</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Make Details</td>
            <td>Creates a [*.details](../../../reference/file-formats/game-levels/details.md) file</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Make HOM</td>
            <td>Creates a [*.hom](../../../reference/file-formats/game-levels/hom.md) file</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Make SOM</td>
            <td>Creates a [*.som](../../../reference/file-formats/game-levels/som.md) file</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Make AI-Map</td>
            <td>Creates a [*.ai](../../../reference/file-formats/game-levels/ai.md) file</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="7">Compile</td>
            <td rowspan="7"></td>
            <td>Geometry &amp; Light</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Detail Object Light</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="3">AI-Map</td>
            <td rowspan="3"></td>
            <td>High</td>
            <td></td>
          </tr>
          <tr>
            <td>Low</td>
            <td></td>
          </tr>
          <tr>
            <td>Verify</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="2">Spawn</td>
            <td rowspan="2"></td>
            <td>Only Current Level</td>
            <td></td>
          </tr>
          <tr>
            <td>All Levels</td>
            <td></td>
          </tr>
          <tr>
            <td>Import Error List</td>
            <td>Import Error List</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Import xrAI Error List</td>
            <td></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Export Error List</td>
            <td>Export Error List</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Clear Error List</td>
            <td>Clear Error List</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Objects" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>Library Editor</td>
            <td></td>
          </tr>
          <tr>
            <td>Multi Rename</td>
            <td></td>
          </tr>
          <tr>
            <td>Multi Replace</td>
            <td></td>
          </tr>
          <tr>
            <td>Reload</td>
            <td>Reload Objects</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Images" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>Image Editor</td>
            <td>Open Image Editor</td>
          </tr>
          <tr>
            <td>Reload Textures</td>
            <td>Reload Textures</td>
          </tr>
          <tr>
            <td>Synchronize Textures</td>
            <td>Updates and synchronizes textures and their previews</td>
          </tr>
          <tr>
            <td>Check New Textures</td>
            <td>Check New Textures</td>
          </tr>
          <tr>
            <td>Edit minimap</td>
            <td></td>
          </tr>
          <tr>
            <td>SyncTHM</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Sounds" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>Sound Editor</td>
            <td>Open Sound Editor</td>
          </tr>
          <tr>
            <td>Synchronize Sounds (Soft)</td>
            <td></td>
          </tr>
          <tr>
            <td>Synchronize Sounds (Hard)</td>
            <td></td>
          </tr>
          <tr>
            <td>Refresh Environment Library</td>
            <td></td>
          </tr>
          <tr>
            <td>Refresh Environment Geometry</td>
            <td></td>
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
            <td><img src=../images/ca-axis.png></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Cube</td>
            <td><img src=../images/ca-cube.png></td>
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
            <td>Light Anim Editor</td>
            <td>Open Light Animation Editor</td>
          </tr>
          <tr>
            <td>Macro Editor</td>
            <td>Open Macro Editor</td>
          </tr>
          <tr>
            <td>Snap List</td>
            <td>Open Snap List window</td>
          </tr>
          <tr>
            <td>Objects Tools</td>
            <td>Open Objects Tools window</td>
          </tr>
          <tr>
            <td>Properties</td>
            <td>Open Editors Properties window</td>
          </tr>
          <tr>
            <td>Log</td>
            <td>Open Log windows</td>
          </tr>
          <tr>
            <td>Theme</td>
            <td>Open Editor Theme settings</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Help" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>Wiki</td>
            <td></td>
          </tr>
          <tr>
            <td>About...</td>
            <td>Open About SDK Window</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Plugins" class="tab-content" style="display: none;">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Description</th>
          </tr></thead>
        <tbody>
          <tr>
            <td>Reinit</td>
            <td>Reinitialize all plugins</td>
          </tr>
          <tr>
            <td>Puddles Import</td>
            <td>Extract compiled puddles to editor format</td>
          </tr>
          <tr>
            <td>Restore Normal</td>
            <td>Restore normal map from bump</td>
          </tr>
          <tr>
            <td>Trees Paddins Generator (Directory to dds)</td>
            <td>This script processes DDS textures, generates padding, and saves the result in DXT3 format</td>
          </tr>
          <tr>
            <td>Trees Paddins Generator (Texture to dds)</td>
            <td>This script processes DDS textures, generates padding, and saves the result in DXT3 format</td>
          </tr>
          <tr>
            <td>Trees Paddins Generator (TGA)</td>
            <td>This script precesses DDS textures, generates padding, and saves the result in TGA format</td>
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
| ![1](../../../assets/icons/sdk/new.png) | New Scene | Clear/New Scene |
| ![1](../../../assets/icons/sdk/open.png) | Open Level | Open Level |
| ![1](../../../assets/icons/sdk/save.png) | Save Level | Save Level |
| ![1](../../../assets/icons/sdk/cform.png) | Build CFORM | Build CFORM |
| ![1](../../../assets/icons/sdk/aimap.png) | Build AI-Map | Build AI-Map |
| ![1](../../../assets/icons/sdk/ggraph.png) | Build Game Graph | Build Game Graph |
| ![1](../../../assets/icons/sdk/PlayInEditorPlay.png) | Start Play in Editor | Start Play in Editor |
|  |  | Play in Editor Settings |
| ![1](../../../assets/icons/sdk/RCRefresh.bmp) |  | Reload Configs |
| ![1](../../../assets/icons/sdk/BuildAll.png) |  | Build and Make |
| ![1](../../../assets/icons/sdk/PlayPC.png) |  | Play Level |
| ![1](../../../assets/icons/sdk/PlayCleanGame.png) |  | Play Level in Game |
| ![1](../../../assets/icons/sdk/Btn_FolderOpen.bmp) |  | Open 'gamedata' folder |
|  | Hint |  |
|  | Volume |  |
|  | Phys Simulation | Activates the physics simulation of the selected object(s) |
|  | Use Pos | Use the position of the selected object when physics simulation is active. The position of the object will be applied when simulating physics |
| ![1](../../../assets/icons/sdk/win_preferences.png) | Preference | Preference |
