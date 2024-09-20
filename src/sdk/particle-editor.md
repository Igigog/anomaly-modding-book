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
