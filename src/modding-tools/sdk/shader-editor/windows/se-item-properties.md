# Shader Editor - Item Properties

___

<body>
  <div class="table-tabs">
    <div class="tab-buttons">
      <button class="tab-button active" onclick="openTable(event, 'EngineShader')">Engine Shader</button>
      <button class="tab-button" onclick="openTable(event, 'CompilerShader')">Compiler Shader</button>
      <button class="tab-button" onclick="openTable(event, 'GameMaterials')">Game Materials</button>
      <button class="tab-button" onclick="openTable(event, 'GameMaterialPairs')">Game Material Pairs</button>
      <button class="tab-button" onclick="openTable(event, 'SoundEnvironment')">Sound Environment</button>
    </div>
    <div id="EngineShader" class="tab-content" style="display: block;">
    <table><thead>
  <tr>
    <th></th>
    <th>Description</th>
    <th>Extra</th>
    <th>Extra Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="18">Type</td>
    <td rowspan="18">Shader type</td>
    <td><a href="../shader-types/basic-simple.md">basic (simple)</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/editor-selection.md">EDITOR: selection</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/editor-wire.md">EDITOR: wire</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/internal-blur.md">INTERNAL: blur</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/internal-gray-scale-effect.md">INTERNAL: gray-scale effect</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/internal-shadow-projecting.md">INTERNAL: shadow projecting</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/level-detail-objects.md">LEVEL: detail objects</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/level-diffuse-base-aref.md">LEVEL: diffuse*base.aref</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/level-diffuse-base.md">LEVEL: diffuse*base</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/level-implicit-detail.md">LEVEL: implicit**detail</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/level-lmap-base-aref.md">LEVEL: lmap*base.aref</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/level-lmap-base-default.md">LEVEL: lmap*base (default)</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/level-lmap-env-base.md">LEVEL: lmap*(env^base)</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/level-lmap-env-const-base.md">LEVEL: (lmap+env*const)*base</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/level-trees-bushes.md">LEVEL: trees/bushes</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/model-default.md">MODEL: Default</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/model-env-base.md">MODEL: env^base</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a href="../shader-types/particles.md">particles</a></td>
    <td></td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Owner name</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="2">General</td>
    <td rowspan="2"></td>
    <td>Priority</td>
    <td>Priority for strict sorting</td>
  </tr>
  <tr>
    <td>Strict sorting</td>
    <td>Enables a mode that renders objects in a strictly defined order, usually to correctly render transparent or translucent surfaces</td>
  </tr>
</tbody></table>
    </div>
    <div id="CompilerShader" class="tab-content" style="display: none;">
    <table><thead>
  <tr>
    <th></th>
    <th>Description</th>
    <th>Extra</th>
    <th>Extra Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Translucency</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Ambient</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>LM density</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="5">Flags</td>
    <td rowspan="5"></td>
    <td>Collision</td>
    <td>Enable Collision for object with this shader</td>
  </tr>
  <tr>
    <td>Rendering</td>
    <td>An object without this shader will not render in the game world</td>
  </tr>
  <tr>
    <td>OptimizeUV</td>
    <td></td>
  </tr>
  <tr>
    <td>Vertex light</td>
    <td>Will use Vertex Lighting instead Per-Pixel Lightning</td>
  </tr>
  <tr>
    <td>Cast shadow</td>
    <td>Enable shadow casting</td>
  </tr>
</tbody>
</table>
    </div>
    <div id="GameMaterials" class="tab-content" style="display: none;">
    <table><thead>
  <tr>
    <th></th>
    <th>Description</th>
    <th>Extra</th>
    <th>Extra Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Desc</td>
    <td>Material description</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="12">Flags</td>
    <td rowspan="12"></td>
    <td>Dynamic</td>
    <td></td>
  </tr>
  <tr>
    <td>Passable</td>
    <td></td>
  </tr>
  <tr>
    <td>Breakable</td>
    <td></td>
  </tr>
  <tr>
    <td>Bounceable</td>
    <td></td>
  </tr>
  <tr>
    <td>Skidmark</td>
    <td></td>
  </tr>
  <tr>
    <td>Bloodmark</td>
    <td></td>
  </tr>
  <tr>
    <td>Climable</td>
    <td></td>
  </tr>
  <tr>
    <td>Liquid</td>
    <td></td>
  </tr>
  <tr>
    <td>Suppress Shadows</td>
    <td></td>
  </tr>
  <tr>
    <td>Suppress Wallmarks</td>
    <td></td>
  </tr>
  <tr>
    <td>Actor Obstacle</td>
    <td>An actor's ability to collide with the material?</td>
  </tr>
  <tr>
    <td>Bullet No Ricoshet</td>
    <td>Will the bullet ricochet off the material</td>
  </tr>
  <tr>
    <td rowspan="5">Physics</td>
    <td rowspan="5"></td>
    <td>Friction</td>
    <td>Friction coefficient</td>
  </tr>
  <tr>
    <td>Damping</td>
    <td>Softness coefficient of the material (collision energy loss)</td>
  </tr>
  <tr>
    <td>Spring</td>
    <td>Material stiffness coefficient (spring stiffness)</td>
  </tr>
  <tr>
    <td>Bounce start vel</td>
    <td>Initial velocity at which the bounce starts to work</td>
  </tr>
  <tr>
    <td>Bouncing</td>
    <td>Bounce coefficient</td>
  </tr>
  <tr>
    <td rowspan="8">Factors</td>
    <td rowspan="8"></td>
    <td>Bounce Damage</td>
    <td>the damage that is inflicted by bouncing?</td>
  </tr>
  <tr>
    <td>Injurious</td>
    <td></td>
  </tr>
  <tr>
    <td>Shooting (1-went through)</td>
    <td>material penetrability</td>
  </tr>
  <tr>
    <td>Shooting MP (1-went through)</td>
    <td>material penetrability in Multiplayer?</td>
  </tr>
  <tr>
    <td>Transparency (1-full transp)</td>
    <td></td>
  </tr>
  <tr>
    <td>Sound occlusion (1-full hear)</td>
    <td>attenuation factor</td>
  </tr>
  <tr>
    <td>Flotation (1-full passable)</td>
    <td>deceleration coefficient when passing through this material</td>
  </tr>
  <tr>
    <td>Density Factor</td>
    <td>how many m/s the bullet slows down when passing 1 m of material</td>
  </tr>
</tbody></table>
    </div>
    <div id="GameMaterialPairs" class="tab-content" style="display: none;">
    <table><thead>
  <tr>
    <th></th>
    <th>Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Command</td>
    <td></td>
  </tr>
  <tr>
    <td>Parent</td>
    <td></td>
  </tr>
  <tr>
    <td>Breaking Sounds</td>
    <td></td>
  </tr>
  <tr>
    <td>Step Sounds</td>
    <td></td>
  </tr>
  <tr>
    <td>Collide Sounds</td>
    <td></td>
  </tr>
  <tr>
    <td>Collide Particles</td>
    <td></td>
  </tr>
  <tr>
    <td>Collide Marks</td>
    <td></td>
  </tr>
</tbody>
</table>
    </div>
    <div id="SoundEnvironment" class="tab-content" style="display: none;">
    <table><thead>
  <tr>
    <th></th>
    <th></th>
    <th>Description</th>
    <th>Extra</th>
    <th>Extra Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan="5">Environment</td>
    <td rowspan="2">Set</td>
    <td rowspan="2"></td>
    <td>Identity</td>
    <td>Sets the parameters to the parameters from Identity</td>
  </tr>
  <tr>
    <td>Reset</td>
    <td>Resets parameters</td>
  </tr>
  <tr>
    <td>Preset</td>
    <td></td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>This setting sets the perceived size of the audio environment. The larger the number, the larger and wider the environmental space will "sound"</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Diffusion</td>
    <td>Controls the master density of audio reflections and reverberations, i.e. how thick the reverb and echo effects will be</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="2">Room</td>
    <td>Room</td>
    <td>This controls the initial volume level and amount of reverb and echo effects; "0" equates to full effects, while "-10000" equates to no effects</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>RoomHF</td>
    <td>Sets the high frequency attenuation via a low-pass filter for Room setting and audio reflection; "0" equates to no low-pass filter, while "-10000" equates to no sound reflected</td>
    <td>-</td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Distance Effects</td>
    <td>RoomRolloffFactor</td>
    <td>This setting attenuates reflected sound based on how far from the audio source the player is; the higher the value, the more a sound will decay the greater the player's distance from the source of the audio</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>AirAbsorptionHF</td>
    <td>This setting attenuates high frequencies based on the distance between the player and the audio source, but simulates a denser environment. The higher the value, the less absorbent the environment is (e.g. a low value would mimic thick fog, a high value would mimic a dry desert or tundra)</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="2">Reflections</td>
    <td>Reflections</td>
    <td>This sets the amount of initial echoes dependant upon the Room setting. "1000" equates to maximum initial reflections, while "-10000" equates to no initial reflections</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>ReflectionsDelay</td>
    <td>Sets the amount of time (in milliseconds) from the initial perception of the audio source, to the first percieved echo. The higher the value, the longer the amount of time between first hearing a sound, and hearing any echoes of that sound</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="2">Reverb</td>
    <td>Reverb</td>
    <td>This setting controls the amount of late reverberations dependant upon the Room setting. "2000" equates to maximum late reverberations, while "-10000" equates to no late reverberations</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>ReverbDelay</td>
    <td>This sets the length of time (in milliseconds) from the initial perception of audio reflections, to the first percieved reverberation. The higher the value, the longer the amount of time between the first echo and it's resounding reverberation</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="2">Decay</td>
    <td>DecayTime</td>
    <td>Controls the decay time of the audio reverberation; how quickly the reverberation fades away. The smaller the value, the quicker reverberations fade out, and the smaller the percieved room size is; the higher the value, the longer it takes for reverberations to fade out</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>DecayHFRatio</td>
    <td>Sets the ratio of high frequency reverberation decay relative to actual reverberation decay time. The higher the value, the brighter the high frequency reverberation decay; the lower the value, the more dull the high frequency reverberation</td>
    <td>-</td>
    <td>-</td>
  </tr>
</tbody></table>
    </div>
  </div>
</body>
