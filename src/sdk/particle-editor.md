# Paricle Editor

___

Used to create particles or groups of particles

___

## fmItemProp

> Here the particle parameters are specified

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5xqe{background-color:#000000;text-align:center;vertical-align:top}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-ksrh{background-color:#000000;border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-6yw6{background-color:#000000;text-align:center;vertical-align:middle}
.tg .tg-nrix{text-align:center;vertical-align:middle}
.tg .tg-0fb1{background-color:#fe0000;color:#ffffff;text-align:center;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 1236px">
<colgroup>
<col style="width: 99px">
<col style="width: 127px">
<col style="width: 193px">
<col style="width: 108px">
<col style="width: 225px">
<col style="width: 166px">
<col style="width: 318px">
</colgroup>
<thead>
  <tr>
    <th class="tg-ksrh">Key</th>
    <th class="tg-5xqe">Value</th>
    <th class="tg-5xqe">Value Description</th>
    <th class="tg-6yw6">Parameters</th>
    <th class="tg-5xqe">Parameteres Description</th>
    <th class="tg-5xqe">Extra Parametres</th>
    <th class="tg-5xqe">Extra Parametres Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-nrix" rowspan="3">Transform</td>
    <td class="tg-baqh">Edit</td>
    <td class="tg-baqh"></td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="2">Type</td>
    <td class="tg-baqh" rowspan="2"></td>
    <td class="tg-baqh">Update</td>
    <td class="tg-baqh"></td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-baqh">Set</td>
    <td class="tg-baqh"></td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="25">Effects</td>
    <td class="tg-nrix" rowspan="3">Control</td>
    <td class="tg-nrix" rowspan="3">Controls particles playback</td>
    <td class="tg-baqh">Play</td>
    <td class="tg-baqh">Play</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-baqh">Stop</td>
    <td class="tg-baqh">Stops playback immediately</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-baqh">Stop...</td>
    <td class="tg-baqh">Stops playback after the end of particle playback</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-baqh">Name</td>
    <td class="tg-baqh">Particle Name</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-baqh">Max Particles</td>
    <td class="tg-baqh">Maximum particle count</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-baqh">Time Limit</td>
    <td class="tg-baqh">Sets the lifetime of the particle</td>
    <td class="tg-nrix">Value (sec)</td>
    <td class="tg-baqh">Indicates the lifetime of the particle in seconds</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="9">Sprite</td>
    <td class="tg-nrix" rowspan="9">Responsible for the particle sprite</td>
    <td class="tg-baqh">Texture</td>
    <td class="tg-baqh">Texture to be assigned to the particle</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-baqh">Shader</td>
    <td class="tg-baqh">Shader to be assigned to the particle</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">-</td>
  </tr>
  <tr>
    <td class="tg-baqh">Culling</td>
    <td class="tg-0fb1">Enables culling for particles?</td>
    <td class="tg-baqh">CCW</td>
    <td class="tg-0fb1">Enables counterclockwise culling (CCW)?</td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="4">Frame</td>
    <td class="tg-nrix" rowspan="4"></td>
    <td class="tg-baqh">Random Init</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Count</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Size U (0...1)</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Size V (0...1)</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="2">Animated</td>
    <td class="tg-nrix" rowspan="2"></td>
    <td class="tg-baqh">Random Playback</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Speed</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="9">Movement</td>
    <td class="tg-baqh" rowspan="9"></td>
    <td class="tg-nrix" rowspan="3">Align To Path</td>
    <td class="tg-baqh" rowspan="3"></td>
    <td class="tg-baqh">Face Align</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Default World Align</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Default Rotate</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Velocity Scale</td>
    <td class="tg-baqh"></td>
    <td class="tg-baqh">Value (sec)</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-nrix" rowspan="5">Collision</td>
    <td class="tg-baqh" rowspan="5"></td>
    <td class="tg-baqh">Collide With Dynamic</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Destroy On Contact</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Friction</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Resilence</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Cutoff</td>
    <td class="tg-baqh"></td>
  </tr>
  <tr>
    <td class="tg-baqh">Actions</td>
    <td class="tg-0lax">Controls additional particle actions</td>
    <td class="tg-baqh">Edit</td>
    <td class="tg-baqh">-</td>
    <td class="tg-baqh">Append</td>
    <td class="tg-baqh">Adds an extra action for the particle</td>
  </tr>
</tbody>
</table>

___

## Particle Actions

### Avoid

> Steer particles away from a domain space

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-nrix{text-align:center;vertical-align:middle}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-9wq8">Key</th>
    <th class="tg-9wq8">Value</th>
    <th class="tg-9wq8">Value Description</th>
    <th class="tg-9wq8">Parameters</th>
    <th class="tg-9wq8">Parameters Description</th>
    <th class="tg-9wq8">Extra Parametres</th>
    <th class="tg-9wq8">Extra Parameteres Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-9wq8" rowspan="37">Avoid</td>
    <td class="tg-9wq8">Name</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8">-</td>
    <td class="tg-9wq8">-</td>
    <td class="tg-9wq8">-</td>
    <td class="tg-9wq8">-</td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="30">Position</td>
    <td class="tg-9wq8" rowspan="30"></td>
    <td class="tg-9wq8">Point</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8">Center</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="2">Line</td>
    <td class="tg-9wq8" rowspan="2"></td>
    <td class="tg-9wq8">Point 1</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Point 2</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="3">Triangle</td>
    <td class="tg-9wq8" rowspan="3"></td>
    <td class="tg-9wq8">Vertex 1</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Vertex 2</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Vertex 3</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="2">Plane</td>
    <td class="tg-9wq8" rowspan="2"></td>
    <td class="tg-9wq8">Origin</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Normal</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="2">Box</td>
    <td class="tg-9wq8" rowspan="2"></td>
    <td class="tg-9wq8">Min</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Max</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="3">Sphere</td>
    <td class="tg-9wq8" rowspan="3"></td>
    <td class="tg-9wq8">Center</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Radius Inner</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Radius Outer</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="4">Cylinder</td>
    <td class="tg-9wq8" rowspan="4"></td>
    <td class="tg-9wq8">Point 1</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Point 2</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Radius Inner</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Radius Outer</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="4">Cone</td>
    <td class="tg-9wq8" rowspan="4"></td>
    <td class="tg-9wq8">Apex</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">End Point</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Radius Inner</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Radius Outer</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="2">Blob</td>
    <td class="tg-9wq8" rowspan="2"></td>
    <td class="tg-9wq8">Center</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Radius Outer</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="4">Disc</td>
    <td class="tg-9wq8" rowspan="4"></td>
    <td class="tg-9wq8">Center</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Normal</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Radius Inner</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Radius Outer</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="3">Rectangle</td>
    <td class="tg-9wq8" rowspan="3"></td>
    <td class="tg-9wq8">Origin</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Basis U</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Basis V</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Magnitude</td>
    <td class="tg-nrix"></td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
  </tr>
  <tr>
    <td class="tg-9wq8">Epsilon</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8">-</td>
    <td class="tg-9wq8">-</td>
    <td class="tg-9wq8">-</td>
    <td class="tg-9wq8">-</td>
  </tr>
  <tr>
    <td class="tg-9wq8">Look Ahead</td>
    <td class="tg-9wq8"></td>
    <td class="tg-9wq8">-</td>
    <td class="tg-9wq8">-</td>
    <td class="tg-9wq8">-</td>
    <td class="tg-9wq8">-</td>
  </tr>
  <tr>
    <td class="tg-nrix">Allow Rotate</td>
    <td class="tg-nrix"></td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
  </tr>
  <tr>
    <td class="tg-nrix">Draw</td>
    <td class="tg-nrix"></td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
  </tr>
  <tr>
    <td class="tg-nrix">Enabled</td>
    <td class="tg-nrix">Enables Avoid Action</td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
    <td class="tg-nrix">-</td>
  </tr>
</tbody>
</table>

___

### Bounce

> Bounce particles off a domain of space

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-nrix{text-align:center;vertical-align:middle}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-nrix">Key</th>
    <th class="tg-nrix">Value</th>
    <th class="tg-nrix">Value Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-nrix" rowspan="8">Bounce</td>
    <td class="tg-nrix">Name</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Position</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Friction</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Resilience</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Cutoff</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Allow Rotate</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Draw</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Enabled</td>
    <td class="tg-nrix"></td>
  </tr>
</tbody>
</table>

___

### Copy VertexB

> Set the secondary position from current position

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-nrix{text-align:center;vertical-align:middle}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-nrix">Key</th>
    <th class="tg-nrix">Value</th>
    <th class="tg-nrix">Value Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-nrix" rowspan="4">Copy VertexB</td>
    <td class="tg-nrix">Name</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Copy Position</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Draw</td>
    <td class="tg-nrix"></td>
  </tr>
  <tr>
    <td class="tg-nrix">Enabled</td>
    <td class="tg-nrix"></td>
  </tr>
</tbody>
</table>

___

### Damping

> Simulate air by slowing down particle velocities

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-9wq8{border-color:inherit;text-align:center;vertical-align:middle}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-9wq8">Key</th>
    <th class="tg-9wq8">Value</th>
    <th class="tg-9wq8">Value Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-9wq8" rowspan="6">Damping</td>
    <td class="tg-9wq8">Name</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Damping</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">V Low</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">V High</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Draw</td>
    <td class="tg-9wq8"></td>
  </tr>
  <tr>
    <td class="tg-9wq8">Enabled</td>
    <td class="tg-9wq8"></td>
  </tr>
</tbody>
</table>

___

### Explosion

> An Explosion

To be continued...
