# Level Editor - Object Tools Window

___

## About

Tools for working with the selected object type.

```admonish note
All types of objects have different sets of tools for working with them. Depending on the type of the selected object, the tools will change.
```

### Scene Object

<body>
  <div class="table-tabs">
    <div class="tab-buttons">
      <button class="tab-button active" onclick="openTable(event, 'Scene Object')">Scene Object</button>
      <button class="tab-button" onclick="openTable(event, 'Light')">Light</button>
      <button class="tab-button" onclick="openTable(event, 'Shape')">Shape</button>
      <button class="tab-button" onclick="openTable(event, 'Spawn Element')">Spawn Element</button>
      <button class="tab-button" onclick="openTable(event, 'Way Points')">Way Points</button>
      <button class="tab-button" onclick="openTable(event, 'Sector')">Sector</button>
      <button class="tab-button" onclick="openTable(event, 'Portal')">Portal</button>
      <button class="tab-button" onclick="openTable(event, 'Group')">Group</button>
      <button class="tab-button" onclick="openTable(event, 'Static Particles')">Static Particles</button>
      <button class="tab-button" onclick="openTable(event, 'Detail Objects')">Detail Objects</button>
      <button class="tab-button" onclick="openTable(event, 'AI Map')">AI Map</button>
      <button class="tab-button" onclick="openTable(event, 'Fog Volume')">Fog Volume</button>
    </div>
    <div id="Scene Object" class="tab-content" style="display: block">
      <table><thead>
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
          <td>Show lists</td>
          <td>Show Edit group items window</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td rowspan="6">Commands</td>
          <td rowspan="6"></td>
          <td>Multiple Append</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Random Append</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Load</td>
          <td>Loads random placement properties</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Save</td>
          <td>Saves the current random placement properties</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Custom</td>
          <td>Opens additional properties to configure random placement</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Generate random garbage</td>
          <td>Places random objects on the level based on the selected objects</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td rowspan="5">Reference Select</td>
          <td rowspan="5"></td>
          <td rowspan="2">Select by Current</td>
          <td rowspan="2"></td>
          <td>+</td>
          <td></td>
        </tr>
        <tr>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="3">Select by Selected</td>
          <td rowspan="3"></td>
          <td>=%</td>
          <td>Select by Selected | =% - Selects a similar object by a specified percentage +%</td>
        </tr>
        <tr>
          <td>+%</td>
          <td></td>
        </tr>
        <tr>
          <td>%</td>
          <td>Sets the similarity percentage for filtering</td>
        </tr>
        <tr>
          <td rowspan="2">Surface</td>
          <td rowspan="2"></td>
          <td>Clear Select</td>
          <td>Cleans the surfaces of selected random placement objects</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Clear Level</td>
          <td>Cleans the surfaces of all selected random placement objects on level</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td rowspan="2">Current Object</td>
          <td rowspan="2"></td>
          <td>Select</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Refresh</td>
          <td>Refreshes the list of all selected random placement objects</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody></table>
    </div>
    <div id="Light" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="4">Affect in D3D</td>
          <td rowspan="4"></td>
          <td>Enable Sel</td>
          <td></td>
        </tr>
        <tr>
          <td>Disable Sel</td>
          <td></td>
        </tr>
        <tr>
          <td>Enable All</td>
          <td></td>
        </tr>
        <tr>
          <td>Disable All</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div id="Shape" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="2">Commands</td>
          <td rowspan="2"></td>
          <td>Sphere</td>
          <td></td>
        </tr>
        <tr>
          <td>Box</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Edit</td>
          <td rowspan="2"></td>
          <td>Attach Shape</td>
          <td></td>
        </tr>
        <tr>
          <td>Detach All</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Level Bound</td>
          <td rowspan="2"></td>
          <td>Edit Level Bound</td>
          <td></td>
        </tr>
        <tr>
          <td>Recalc</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div id="Spawn Element" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="2">Reference Select</td>
          <td rowspan="2"></td>
          <td>+</td>
          <td></td>
        </tr>
        <tr>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="3">Select by Selected</td>
          <td rowspan="3"></td>
          <td>=%</td>
          <td></td>
        </tr>
        <tr>
          <td>+%</td>
          <td></td>
        </tr>
        <tr>
          <td>%</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Commands</td>
          <td rowspan="2"></td>
          <td>Attach Object</td>
          <td></td>
        </tr>
        <tr>
          <td>Detach Object</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div id="Way Points" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="2">Commands</td>
          <td rowspan="2"></td>
          <td>Way Mode</td>
          <td></td>
        </tr>
        <tr>
          <td>Way Point</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="7">Link Command</td>
          <td rowspan="7"></td>
          <td>Auto Link</td>
          <td></td>
        </tr>
        <tr>
          <td>Create 1-Link</td>
          <td></td>
        </tr>
        <tr>
          <td>Create 2-Link</td>
          <td></td>
        </tr>
        <tr>
          <td>Convert to 1-Link</td>
          <td></td>
        </tr>
        <tr>
          <td>Convert to 2-Link</td>
          <td></td>
        </tr>
        <tr>
          <td>Invert Link</td>
          <td></td>
        </tr>
        <tr>
          <td>Remove Link</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div id="Sector" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="6">Command</td>
          <td rowspan="6"></td>
          <td>Validate Sectors</td>
          <td></td>
        </tr>
        <tr>
          <td>Capture Volume</td>
          <td></td>
        </tr>
        <tr>
          <td>Distribute Objects</td>
          <td></td>
        </tr>
        <tr>
          <td>Create Default</td>
          <td></td>
        </tr>
        <tr>
          <td>Remove Default</td>
          <td></td>
        </tr>
        <tr>
          <td>Recalculate Portals</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div id="Portal" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="4">Command</td>
          <td rowspan="4"></td>
          <td>Invert Orientation</td>
          <td></td>
        </tr>
        <tr>
          <td>Compute All Portals</td>
          <td></td>
        </tr>
        <tr>
          <td>Compute Sel. Portals</td>
          <td></td>
        </tr>
        <tr>
          <td>Remove Similar</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div id="Group" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="4">Commands</td>
          <td rowspan="4"></td>
          <td>Group</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Ungroup</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Make Thumbnail</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Save As ...</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td rowspan="2">Current Object</td>
          <td rowspan="2"></td>
          <td>Select ...</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Reload Refs</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td rowspan="5">Reference Select</td>
          <td rowspan="5"></td>
          <td rowspan="2">Select by Current</td>
          <td rowspan="2"></td>
          <td>+</td>
          <td></td>
        </tr>
        <tr>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="3">Select by Selected</td>
          <td rowspan="3"></td>
          <td>=%</td>
          <td></td>
        </tr>
        <tr>
          <td>+%</td>
          <td></td>
        </tr>
        <tr>
          <td>%</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Pivot Aligment</td>
          <td rowspan="2"></td>
          <td>Center To Group</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Aligh to Object</td>
          <td></td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody></table>
    </div>
    <div id="Static Particles" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="4">Commands</td>
          <td rowspan="4"></td>
          <td rowspan="2">Ref's Select</td>
          <td rowspan="2"></td>
          <td>+</td>
          <td></td>
        </tr>
        <tr>
          <td>-</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Selected</td>
          <td rowspan="2"></td>
          <td>play</td>
          <td></td>
        </tr>
        <tr>
          <td>stop</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div id="Detail Objects" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="10">Commands</td>
          <td rowspan="10"></td>
          <td rowspan="2">First Initialize</td>
          <td rowspan="2"></td>
        </tr>
        <tr>
        </tr>
        <tr>
          <td rowspan="2">Reinitialize All</td>
          <td rowspan="2"></td>
        </tr>
        <tr>
        </tr>
        <tr>
          <td>Reinitialize Objects Only</td>
          <td></td>
        </tr>
        <tr>
          <td>Reinitialize Selected Slot Objects</td>
          <td></td>
        </tr>
        <tr>
          <td>Update Renderer</td>
          <td></td>
        </tr>
        <tr>
          <td>Clear Slots</td>
          <td></td>
        </tr>
        <tr>
          <td>Clear Details</td>
          <td></td>
        </tr>
        <tr>
          <td>Object List</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
    <div id="AI Map" class="tab-content" style="display: none">
      <table><thead>
        <tr>
          <th>1</th>
          <th>Description</th>
          <th>1</th>
          <th>Description</th>
        </tr></thead>
      <tbody>
        <tr>
          <td rowspan="5">Commands</td>
          <td rowspan="5"></td>
          <td>Generate Full</td>
          <td></td>
        </tr>
        <tr>
          <td>Generate Selected</td>
          <td></td>
        </tr>
        <tr>
          <td>Clear AI Map</td>
          <td></td>
        </tr>
        <tr>
          <td>Smooth Selected</td>
          <td></td>
        </tr>
        <tr>
          <td>Reset Selected</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">AI Map Nodes</td>
          <td rowspan="2"></td>
          <td>Ignore Constraints</td>
          <td></td>
        </tr>
        <tr>
          <td>Auto Link</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="2">Ignore materials</td>
          <td rowspan="2"></td>
          <td>Add</td>
          <td></td>
        </tr>
        <tr>
          <td>X</td>
          <td></td>
        </tr>
        <tr>
          <td rowspan="11">Link Commands</td>
          <td rowspan="11"></td>
          <td>Add</td>
          <td></td>
        </tr>
        <tr>
          <td>Delete</td>
          <td></td>
        </tr>
        <tr>
          <td>Invert</td>
          <td></td>
        </tr>
        <tr>
          <td>Up</td>
          <td></td>
        </tr>
        <tr>
          <td>Left</td>
          <td></td>
        </tr>
        <tr>
          <td>Right</td>
          <td></td>
        </tr>
        <tr>
          <td>Down</td>
          <td></td>
        </tr>
        <tr>
          <td>X</td>
          <td></td>
        </tr>
        <tr>
          <td>Select 0-Link</td>
          <td></td>
        </tr>
        <tr>
          <td>Select 1-Link</td>
          <td></td>
        </tr>
        <tr>
          <td>Select 2-Link</td>
          <td></td>
        </tr>
      </tbody></table>
    </div>
    <div id="Fog Volume" class="tab-content" style="display: none">
      <table><thead>
      <tr>
        <th>1</th>
        <th>Description</th>
        <th>1</th>
        <th>Description</th>
      </tr></thead>
      <tbody>
        <tr>
          <td rowspan="2">Commands</td>
          <td rowspan="2"></td>
          <td>Group Selected</td>
          <td></td>
        </tr>
        <tr>
          <td>UnGroup Selected</td>
          <td></td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
</body>
