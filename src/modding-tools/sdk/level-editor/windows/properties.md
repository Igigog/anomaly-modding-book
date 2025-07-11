# Level Editor - Properties Window

___

## About

Allows to setup various parameters of the selected object.

```admonish note
All types of objects have different parameters. Depending on the type of selected object, the parameters will change. 
```

<body>
  <div class="table-tabs">
    <div class="tab-buttons">
      <button class="tab-button active" onclick="openTable(event, 'Scene Object')">Scene Object</button>
      <button class="tab-button" onclick="openTable(event, 'Light')">Light</button>
      <button class="tab-button" onclick="openTable(event, 'Sound source')">Sound source</button>
      <button class="tab-button" onclick="openTable(event, 'Sound env')">Sound env</button>
      <button class="tab-button" onclick="openTable(event, 'Glow')">Glow</button>
      <button class="tab-button" onclick="openTable(event, 'Shape')">Shape</button>
      <button class="tab-button" onclick="openTable(event, 'Spawn Element')">Spawn Element</button>
      <button class="tab-button" onclick="openTable(event, 'Way Points')">Way Points</button>
      <button class="tab-button" onclick="openTable(event, 'Sector')">Sector</button>
      <button class="tab-button" onclick="openTable(event, 'Portal')">Portal</button>
      <button class="tab-button" onclick="openTable(event, 'Group')">Group</button>
      <button class="tab-button" onclick="openTable(event, 'Static Particles')">Static Particles</button>
      <button class="tab-button" onclick="openTable(event, 'Wallmarks')">Wallmarks</button>
      <button class="tab-button" onclick="openTable(event, 'Fog Volume')">Fog Volume</button>
      <button class="tab-button" onclick="openTable(event, 'Puddles')">Puddles</button>
    </div>
    <div id="Scene Object" class="tab-content" style="display: block">
      <table><thead>
      <tr>
        <th>1</th>
        <th>Description</th>
        <th>1</th>
        <th>Description</th>
      </tr></thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="3">Transform</td>
        <td rowspan="3"></td>
        <td>Position</td>
        <td></td>
      </tr>
      <tr>
        <td>Rotation</td>
        <td></td>
      </tr>
      <tr>
        <td>Scale</td>
        <td></td>
      </tr>
      <tr>
        <td>Reference</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Flags</td>
        <td></td>
        <td>Motionable</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="5">Surfaces</td>
        <td rowspan="5"></td>
        <td>Texture</td>
        <td></td>
      </tr>
      <tr>
        <td>Shader</td>
        <td></td>
      </tr>
      <tr>
        <td>Compile</td>
        <td></td>
      </tr>
      <tr>
        <td>Game Mtl</td>
        <td></td>
      </tr>
      <tr>
        <td>Action</td>
        <td></td>
      </tr>
    </tbody>
    </table>
    </div>
    <div id="Light" class="tab-content" style="display: none">
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
        <td>Name</td>
        <td></td>
        <td></td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="3">Transform</td>
        <td rowspan="3"></td>
        <td>Position</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Rotation</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Scale</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>In group editable</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Type</td>
        <td></td>
        <td>Point</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Color</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Brightness</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="3">Light Control</td>
        <td></td>
        <td>$static</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td></td>
        <td>$hemi</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td></td>
        <td>$sun</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="3">Usage</td>
        <td></td>
        <td>LightMap</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td></td>
        <td>Dynamic</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td></td>
        <td>Animated</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Range</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="5">Attenuation</td>
        <td rowspan="5"></td>
        <td>Constant</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Linear</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Quadratic</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Auto</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Graphic</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="6">Fuzzy</td>
        <td rowspan="6"></td>
        <td>Count</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Generate</td>
        <td></td>
        <td>Random</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="2">Shape</td>
        <td rowspan="2"></td>
        <td>Sphere</td>
        <td></td>
      </tr>
      <tr>
        <td>Box</td>
        <td></td>
      </tr>
      <tr>
        <td>Radius</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Half Dimension</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Use in D3D</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody></table>
    </div>
    <div id="Sound source" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Extra</th>
            <th>Extra Description</th>
            <th>Extra</th>
            <th>Extra Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Transform</td>
            <td rowspan="3"></td>
            <td>Position</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Rotation</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Scale</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Custom</td>
            <td rowspan="3"></td>
            <td>Play</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Stop</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Simulate</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="6">Source</td>
            <td rowspan="6"></td>
            <td>WAVE name</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Frequency</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Volume</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Min dist</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Max dist</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Max ai dist</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="9">Game</td>
            <td rowspan="9"></td>
            <td rowspan="3">Active time</td>
            <td rowspan="3"></td>
            <td>Hint</td>
            <td></td>
          </tr>
          <tr>
            <td>From</td>
            <td></td>
          </tr>
          <tr>
            <td>To</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Play time</td>
            <td rowspan="3"></td>
            <td>Hint</td>
            <td></td>
          </tr>
          <tr>
            <td>From</td>
            <td></td>
          </tr>
          <tr>
            <td>To</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Pause delt</td>
            <td rowspan="3"></td>
            <td>Hint</td>
            <td></td>
          </tr>
          <tr>
            <td>From</td>
            <td></td>
          </tr>
          <tr>
            <td>To</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Sound env" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Extra</th>
            <th>Extra Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Transform</td>
            <td rowspan="3"></td>
            <td>Position</td>
            <td></td>
          </tr>
          <tr>
            <td>Rotation</td>
            <td></td>
          </tr>
          <tr>
            <td>Scale</td>
            <td></td>
          </tr>
          <tr>
            <td>Environment Inner</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Envirment Outer</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Glow" class="tab-content" style="display: none">
      <table><thead>
      <tr>
        <th></th>
        <th>Description</th>
        <th>Extra</th>
        <th>Extra Description</th>
      </tr></thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="3">Transform</td>
        <td rowspan="3"></td>
        <td>Position</td>
        <td></td>
      </tr>
      <tr>
        <td>Rotation</td>
        <td></td>
      </tr>
      <tr>
        <td>Scale</td>
        <td></td>
      </tr>
      <tr>
        <td>In group editable</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Texture</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Shader</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Radius</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
    </table>
    </div>
    <div id="Shape" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Extra</th>
            <th>Extra Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Transform</td>
            <td rowspan="3"></td>
            <td>Position</td>
            <td></td>
          </tr>
          <tr>
            <td>Rotation</td>
            <td></td>
          </tr>
          <tr>
            <td>Scale</td>
            <td></td>
          </tr>
          <tr>
            <td>Shape usage</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Spawn Element" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Extra</th>
            <th>Extra Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Transform</td>
            <td rowspan="3"></td>
            <td>Position</td>
            <td></td>
          </tr>
          <tr>
            <td>Rotation</td>
            <td></td>
          </tr>
          <tr>
            <td>Scale</td>
            <td></td>
          </tr>
          <tr>
            <td>Profile (spawn section)</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Custom data</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="4">Alife</td>
            <td rowspan="4"></td>
            <td>Interactive</td>
            <td></td>
          </tr>
          <tr>
            <td>Used AI Locations</td>
            <td></td>
          </tr>
          <tr>
            <td>Story ID</td>
            <td></td>
          </tr>
          <tr>
            <td>Spawn Story ID</td>
            <td></td>
          </tr>
          <tr>
            <td>restrictor type</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>check for separator</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="6">Game Type</td>
            <td rowspan="6"></td>
            <td>Single</td>
            <td></td>
          </tr>
          <tr>
            <td>DM</td>
            <td></td>
          </tr>
          <tr>
            <td>TDM</td>
            <td></td>
          </tr>
          <tr>
            <td>ArtefactHunt</td>
            <td></td>
          </tr>
          <tr>
            <td>CTA</td>
            <td></td>
          </tr>
          <tr>
            <td>FMP</td>
            <td></td>
          </tr>
          <tr>
            <td>MP respawn</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Way Points" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th>1</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Way Name</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Sector" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th>1</th>
            <th>Description</th>
            <th>1</th>
            <th>Description</th>
            <th>1</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="3">Transform</td>
            <td rowspan="3"></td>
            <td>Position</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Rotation</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Scale</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Color</td>
            <td></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="8">Sector_*Name*</td>
            <td rowspan="8"></td>
            <td rowspan="3">Contents</td>
            <td rowspan="3"></td>
            <td>Objects</td>
            <td></td>
          </tr>
          <tr>
            <td>Meshes</td>
            <td></td>
          </tr>
          <tr>
            <td>Faces</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="5">Change LevelMap to</td>
            <td rowspan="5"></td>
            <td>default</td>
            <td></td>
          </tr>
          <tr>
            <td>#0</td>
            <td></td>
          </tr>
          <tr>
            <td>#1</td>
            <td></td>
          </tr>
          <tr>
            <td>#2</td>
            <td></td>
          </tr>
          <tr>
            <td>#3</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Portal" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th>1</th>
            <th>Description</th>
            <th>1</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td rowspan="3">Transform</td>
            <td rowspan="3"></td>
            <td>Postion</td>
            <td></td>
          </tr>
          <tr>
            <td>Rotation</td>
            <td></td>
          </tr>
          <tr>
            <td>Scale</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Group" class="tab-content" style="display: none">
    <table><thead>
      <tr>
        <th></th>
        <th>Description</th>
        <th>Extra</th>
        <th>Extra Description</th>
      </tr></thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="3">Transform</td>
        <td rowspan="3"></td>
        <td>Position</td>
        <td></td>
      </tr>
      <tr>
        <td>Rotation</td>
        <td></td>
      </tr>
      <tr>
        <td>Scale</td>
        <td></td>
      </tr>
      <tr>
        <td>Reference</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="2">FreezeObjects</td>
        <td rowspan="2"></td>
        <td>Unique</td>
        <td></td>
      </tr>
      <tr>
        <td>Reference</td>
        <td></td>
      </tr>
      <tr>
        <td colspan="4">Ниже находятся названия обьектов в группе (Нажатием галочки по обьекту делает его редактируемым в своей категории типа обьекта)</td>
      </tr>
    </tbody>
    </table>
    </div>
    <div id="Static Particles" class="tab-content" style="display: none">
      <table><thead>
      <tr>
        <th></th>
        <th>Description</th>
        <th>Extra</th>
        <th>Extra Description</th>
      </tr></thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="3">Transform</td>
        <td rowspan="3"></td>
        <td>Position</td>
        <td></td>
      </tr>
      <tr>
        <td>Rotation</td>
        <td></td>
      </tr>
      <tr>
        <td>Scale</td>
        <td></td>
      </tr>
      <tr>
        <td>In group editable</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Reference</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="2">Controls</td>
        <td rowspan="2"></td>
        <td>Play</td>
        <td></td>
      </tr>
      <tr>
        <td>Stop</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="8">Game Type</td>
        <td rowspan="8"></td>
        <td>single</td>
        <td></td>
      </tr>
      <tr>
        <td>deathmatch</td>
        <td></td>
      </tr>
      <tr>
        <td>team deathmatch</td>
        <td></td>
      </tr>
      <tr>
        <td>artefact hunt</td>
        <td></td>
      </tr>
      <tr>
        <td>capture the artefact</td>
        <td></td>
      </tr>
      <tr>
        <td>domination zone</td>
        <td></td>
      </tr>
      <tr>
        <td>team domination zone</td>
        <td></td>
      </tr>
      <tr>
        <td>Free MP</td>
        <td></td>
      </tr>
    </tbody></table>
    </div>
    <div id="Wallmarks" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Draw Wallmarks</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Aligment</td>
            <td rowspan="3"></td>
          </tr>
          <tr></tr>
          <tr></tr>
          <tr>
            <td>Width</td>
            <td></td>
          </tr>
          <tr>
            <td>Height</td>
            <td></td>
          </tr>
          <tr>
            <td>Rotate</td>
            <td></td>
          </tr>
          <tr>
            <td>Shader</td>
            <td></td>
          </tr>
          <tr>
            <td>Texture</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Fog Volume" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Extra</th>
            <th>Extra Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Transform</td>
            <td rowspan="3"></td>
            <td>Position</td>
            <td></td>
          </tr>
          <tr>
            <td>Rotation</td>
            <td></td>
          </tr>
          <tr>
            <td>Scale</td>
            <td></td>
          </tr>
          <tr>
            <td>Shape usage</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="Puddles" class="tab-content" style="display: none">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Extra</th>
            <th>Extra Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">Transform</td>
            <td rowspan="3"></td>
            <td>Position</td>
            <td></td>
          </tr>
          <tr>
            <td>Rotation</td>
            <td></td>
          </tr>
          <tr>
            <td>Scale</td>
            <td></td>
          </tr>
          <tr>
            <td>Shape usage</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</body>
