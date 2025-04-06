# Particle Editor - Right Bar

___

## About

![alt text](../images/pe-right-bar.png)

## Interface

### Custom Object

<table><thead>
  <tr>
    <th></th>
    <th>Description</th>
    <th>Extra</th>
    <th>Extra Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Object</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="4">Parent</td>
    <td rowspan="4"></td>
    <td>Allow Animated</td>
    <td></td>
  </tr>
  <tr>
    <td>Draw Path</td>
    <td></td>
  </tr>
  <tr>
    <td>Motion</td>
    <td></td>
  </tr>
  <tr>
    <td>Motion Speed</td>
    <td></td>
  </tr>
</tbody>
</table>

### Item Properties

Different Properties are used for Particle Effect and Particle Group

<div class="table-tabs">
  <div class="tab-buttons">
    <button class="tab-button active" onclick="openTable(event, 'ParticleEffect')">Particle Effect</button>
    <button class="tab-button" onclick="openTable(event, 'ParticleGroup')">Particle Group</button>
  </div>

<div id="ParticleEffect" class="tab-content" style="display: block;">
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Description</th>
        <th>Extra</th>
        <th>Extra Description</th>
        <th>Extra</th>
        <th>Extra Description</th>
      </tr></thead>
    <tbody>
      <tr>
        <td rowspan="2">Transform</td>
        <td>Edit</td>
        <td></td>
        <td>Reset</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Type</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="51">Effects</td>
        <td rowspan="3">Control</td>
        <td rowspan="3"></td>
        <td>Play</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Stop</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Stop...</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Name</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Time Limit</td>
        <td></td>
        <td>Value (sec)</td>
        <td></td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="9">Sprite</td>
        <td rowspan="9"></td>
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
        <td>Culling</td>
        <td></td>
        <td>CCW</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="4">Frame</td>
        <td rowspan="4"></td>
        <td>Random Init</td>
        <td></td>
      </tr>
      <tr>
        <td>Count</td>
        <td></td>
      </tr>
      <tr>
        <td>Size U (0..1)</td>
        <td></td>
      </tr>
      <tr>
        <td>Size V (0..1)</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="2">Animated</td>
        <td rowspan="2"></td>
        <td>Random Playback</td>
        <td></td>
      </tr>
      <tr>
        <td>Speed</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="9">Movement</td>
        <td rowspan="9"></td>
        <td rowspan="3">Align To Path</td>
        <td rowspan="3"></td>
        <td>Face Align</td>
        <td></td>
      </tr>
      <tr>
        <td>Default World Align</td>
        <td></td>
      </tr>
      <tr>
        <td>Default Rotate</td>
        <td></td>
      </tr>
      <tr>
        <td>Velocity Scale</td>
        <td></td>
        <td>Value</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="5">Collision</td>
        <td rowspan="5"></td>
        <td>Collide With Dynamic</td>
        <td></td>
      </tr>
      <tr>
        <td>Destroy On Contact</td>
        <td></td>
      </tr>
      <tr>
        <td>Friction</td>
        <td></td>
      </tr>
      <tr>
        <td>Resilence</td>
        <td></td>
      </tr>
      <tr>
        <td>Cutoff</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="28">Actions</td>
        <td rowspan="28"></td>
        <td rowspan="28">Edit</td>
        <td rowspan="28"></td>
        <td>Avoid</td>
        <td></td>
      </tr>
      <tr>
        <td>Bounce</td>
        <td></td>
      </tr>
      <tr>
        <td>Copy VertexB</td>
        <td></td>
      </tr>
      <tr>
        <td>Damping</td>
        <td></td>
      </tr>
      <tr>
        <td>Explosion</td>
        <td></td>
      </tr>
      <tr>
        <td>Follow</td>
        <td></td>
      </tr>
      <tr>
        <td>Gravitate</td>
        <td></td>
      </tr>
      <tr>
        <td>Gravity</td>
        <td></td>
      </tr>
      <tr>
        <td>Jet</td>
        <td></td>
      </tr>
      <tr>
        <td>Kill Old</td>
        <td></td>
      </tr>
      <tr>
        <td>Match Velocity</td>
        <td></td>
      </tr>
      <tr>
        <td>Move</td>
        <td></td>
      </tr>
      <tr>
        <td>Orbit Line</td>
        <td></td>
      </tr>
      <tr>
        <td>Orbit Point</td>
        <td></td>
      </tr>
      <tr>
        <td>Random Accel</td>
        <td></td>
      </tr>
      <tr>
        <td>Random Displace</td>
        <td></td>
      </tr>
      <tr>
        <td>Random Velocity</td>
        <td></td>
      </tr>
      <tr>
        <td>Restore</td>
        <td></td>
      </tr>
      <tr>
        <td>Scatter</td>
        <td></td>
      </tr>
      <tr>
        <td>Sink Velocity</td>
        <td></td>
      </tr>
      <tr>
        <td>Sink</td>
        <td></td>
      </tr>
      <tr>
        <td>Source</td>
        <td></td>
      </tr>
      <tr>
        <td>Speed Limit</td>
        <td></td>
      </tr>
      <tr>
        <td>Target Color</td>
        <td></td>
      </tr>
      <tr>
        <td>Target Size</td>
        <td></td>
      </tr>
      <tr>
        <td>Target Velocity</td>
        <td></td>
      </tr>
      <tr>
        <td>Turbulence</td>
        <td></td>
      </tr>
      <tr>
        <td>Vortex</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

<div id="ParticleGroup" class="tab-content" style="display: none;">
  <table>
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Description</th>
        <th>Extra</th>
        <th>Extra Description</th>
        <th>Extra</th>
        <th>Extra Description</th>
        <th>Extra</th>
        <th>Extra Description</th>
      </tr></thead>
    <tbody>
      <tr>
        <td rowspan="2">Transform</td>
        <td>Edit</td>
        <td></td>
        <td>Reset</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Type</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="18">Groups</td>
        <td rowspan="3">Control</td>
        <td rowspan="3"></td>
        <td>Play</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Stop</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Stop...</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Edit</td>
        <td></td>
        <td>Append Effect</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Name</td>
        <td></td>
        <td></td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Time Limit (s)</td>
        <td></td>
        <td></td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="12">Effect</td>
        <td rowspan="12"></td>
        <td>Preview</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Select</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Remove</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Name</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Start Time</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>End Time</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Deferred Stop</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Enabled</td>
        <td></td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td rowspan="4">Children</td>
        <td rowspan="4"></td>
        <td>On Birth</td>
        <td></td>
        <td>Effect Name</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="2">On Play</td>
        <td rowspan="2"></td>
        <td>Effect Name</td>
        <td></td>
      </tr>
      <tr>
        <td>Play After Stop</td>
        <td></td>
      </tr>
      <tr>
        <td>On Dead</td>
        <td></td>
        <td>Effect Name</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  .table-tabs {
    margin: 20px 0;
  }
  
  .tab-buttons {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
  }
  
  .tab-button {
    padding: 8px 16px;
    background: #e0e0e0;
    border: none;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
    font-size: 14px;
  }
  
  .tab-button:hover {
    background: #d0d0d0;
  }
  
  .tab-button.active {
    background: #4CAF50;
    color: white;
  }
  
  .tab-content {
    display: none;
  }
  
  .tab-content table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .tab-content th, .tab-content td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .tab-content th {
    background-color: #f2f2f2;
  }
</style>

<script>
  function openTable(evt, tableId) {
    // Скрыть все таблицы
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }

    // Убрать активный класс у всех кнопок
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Показать выбранную таблицу и сделать кнопку активной
    document.getElementById(tableId).style.display = "block";
    evt.currentTarget.className += " active";
  }
</script>
