# Glossary

___

## About

Contains descriptions of various S.T.A.L.K.E.R. related terms used in modding and in X-Ray Engine.

<style>
    :target {
        animation: highlight 2s;
    }
    @keyframes highlight {
        0%   { background-color: yellow; }
        100% { background-color: transparent; }
    }
</style>

## AI

<table><thead>
  <tr>
    <th>Term</th>
    <th>Definition</th>
  </tr></thead>
<tbody>
  <tr id="ai-offline">
    <td>Offline</td>
    <td>Simulation of life in any given radius from the player will be calculated by a simplified formula</td>
  </tr>
  <tr id="ai-online">
    <td>Online</td>
    <td>Simulating life within any given radius of the player will be completely calculated</td>
  </tr>
  <tr id="alife">
    <td>A-Life</td>
    <td>Simulates the life of the game world as an independent ecosystem</td>
  </tr>
  <tr id="anim-point">
    <td>Anim Point</td>
    <td>Key positions in which the animation should be played</td>
  </tr>
  <tr id="finite-state-machine">
    <td>Finite State Machine</td>
    <td>Common and convenient technique for programming the behavior of bots (NPCs) in computer games.</td>
  </tr>
  <tr id="goal-oriented-action-planning">
    <td>Goal Oriented Action Planning</td>
    <td>AI design technique in which a chain of behaviors of agents (NPCs, abstract entities, "living" obstacles) is automatically selected in real time to satisfy a goal.</td>
  </tr>
  <tr id="motivation-graph">
    <td>Motivation Graph</td>
    <td>Decision-making method described in AI Game Programming Wisdom 2, which, according to the authors, is something between Decision Trees and Neural Networks.</td>
  </tr>
  <tr id="graph-point">
    <td>Graph Point</td>
    <td>Monsters and stalkers in offline move on graph points</td>
  </tr>
  <tr id="gulag">
    <td>Gulag</td>
    <td>Gulags control a set of stalkers together by assigning them each tasks by task priority. For example a gulag could contain tasks for patrolling an area and sitting at a campfire. The priority of these tasks will mean that the first stalker "caught" by the gulag (that is, the first stalker to be given over to the gulag's control) will patrol the area with subsequent caught stalkers simply sitting at a fire. A stalker is "caught" by a gulag be entering the associated "Smart Terrain".</td>
  </tr>
  <tr id="gvid">
    <td>gvid (game_vertex_id)</td>
    <td><a href="graph-point">Graph Point</a> index </td>
  </tr>
  <tr id="lvid">
    <td>lvid (level_vertex_id)</td>
    <td>Part of <a href="../reference/file-formats/game-levels/ai.md">*.ai</a>. Ai grid node</td>
  </tr>
  <tr id="smart-cover">
    <td>Smart Cover</td>
    <td>A system designed to control the behavior of NPCs when using cover.</td>
  </tr>
  <tr id="smart-terrain">
    <td>Smart Terrain</td>
    <td>Area which, when entered by a stalker, "captures" that stalker and assigns them tasks to perform. These tasks are allocated by the smart terrain's controlling Gulag.</td>
  </tr>
  <tr id="space-restrictor">
    <td>Space Restrictor</td>
    <td>An object that defines zones with special properties or restrictions in the game space.</td>
  </tr>
  <tr id="way-point">
    <td>Way Point</td>
    <td>A predetermined point on the map that serves as a reference point for NPCs. Waypoints indicate their movement pattern or where they should go.</td>
  </tr>
  <tr id="info-portion">
    <td>Info Portion</td>
    <td>It is a piece of information that can be passed between characters, saved in quests, or used for AI decision making.</td>
  </tr>
</tbody>
</table>

## Animations

<table>
<thead>
  <tr>
    <th>Term</th>
    <th>Definition</th>
  </tr>
  </thead>
<tbody>
  <tr id="_hud-animation">
    <td>*_hud animation</td>
    <td>Animations for the <a href="_hud-model">*_hud</a> object</td>
  </tr>
  <tr id="motion-mark">
    <td>Motion Mark</td>
    <td>Time intervals in the animation in which something happens</td>
  </tr>
  <tr id="motion-reference">
    <td>Motion Reference</td>
    <td>Reference to the animation library (<a href="../reference/file-formats/animations/omf.md">*.omf</a>)</td>
  </tr>
</tbody>
</table>

## Coding

<table>
<thead>
  <tr>
    <th>Term</th>
    <th>Definition</th>
  </tr>
  </thead>
<tbody>
  <tr id="luabind">
    <td>Luabind</td>
    <td><a href="https://www.rasterbar.com/products/luabind/docs.html">Luabind</a> is a library that helps you create bindings between C++ and Lua. It has the ability to expose functions and classes, written in C++, to Lua. It will also supply the functionality to define classes in lua and let them derive from other lua classes or C++ classes. Lua classes can override virtual functions from their C++ base classes. It is written towards Lua 5.x, and does not work with Lua 4.</td>
  </tr>
  <tr id="luajit">
    <td>LuaJIT</td>
    <td><a href="https://luajit.org/luajit.html">LuaJIT</a> is a <a href="https://en.wikipedia.org/wiki/Just-in-time_compilation">Just-In-Time Compiler</a> (JIT) for the Lua programming language. Anomaly uses LuaJIT 2.0.4</td>
  </tr>
</tbody>
</table>

## Compilers

<table>
<thead>
  <tr>
    <th>Term</th>
    <th>Definition</th>
  </tr>
  </thead>
<tbody>
  <tr id="xr-ai">
    <td>xrAI</td>
    <td>AI Compiler</td>
  </tr>
  <tr id="xr-do">
    <td>xrDO</td>
    <td>Detail Object Compiler</td>
  </tr>
  <tr id="xr-lc">
    <td>xrLC</td>
    <td>Level Compiler</td>
  </tr>
</tbody>
</table>

## Materials

<table>
<thead>
  <tr>
    <th>Term</th>
    <th>Definition</th>
  </tr></thead>
<tbody>
  <tr id="game-material">
    <td>Game Material</td>
    <td>Responsible for the physical feature of the surface (friction, damping & etc.).</td>
  </tr>
</tbody>
</table>

## Objects

<table>
<thead>
  <tr>
    <th>Term</th>
    <th>Definition</th>
  </tr>
  </thead>
<tbody>
  <tr id="dynamic-object">
    <td>Dynamic Object</td>
    <td>An object that uses bones</td>
  </tr>
  <tr id="multiply-usage-object">
    <td>Multiply Usage Object</td>
    <td>An object that creates an Imposter texture of the same object.</td>
  </tr>
  <tr id="_hud-model">
    <td>*_hud</td>
    <td>*_hud is a model in front of the player in the hands of the character. Usually it is a model of a weapon, grenades, hands.</td>
  </tr>
  <tr id="_world-model">
    <td>*_world</td>
    <td>*_world is a model in-game world (NPC weapons, 3rd-person view). The difference from the *_hud model is that the *_world must have a collision to calculate the interaction with the game.</td>
  </tr>
  <tr id="static-object">
    <td>Static Object</td>
    <td>Static object</td>
  </tr>
  <tr id="detail-object">
    <td>Detail Object</td>
    <td>Static object (grass, rocks, debris and other landscape details) with high optimization to display a large number of small objects without significant performance loss.</td>
  </tr>
  <tr id="scene-object">
    <td>Scene Object</td>
    <td>An object in the SDK that represents a reference object that uses a model to visualize and interact with the environment.</td>
  </tr>
  <tr id="light-source-object">
    <td>Light Source Object</td>
    <td>Light source.</td>
  </tr>
  <tr id="sound-source-object">
    <td>Sound Source Object</td>
    <td>Sound source.</td>
  </tr>
  <tr id="sound-environment-object">
    <td>Sound Environment Object</td>
    <td>Object with environmental sound effects.</td>
  </tr>
  <tr id="glow-object">
    <td>Glow Object</td>
    <td>Glow object.</td>
  </tr>
  <tr id="fog-volume-object">
    <td>Fog Volume Object</td>
    <td>A object to simulate dynamic volumetric fog, smoke and other gaseous effects.</td>
  </tr>
  <tr id="sound-occluder-mesh">
    <td>Sound Occluder Mesh</td>
    <td>Geometry for calculating sound propagation.</td>
  </tr>
    <tr id="custom-data">
    <td>Custom Data</td>
    <td>Custom or additional parameters (in <a href="../reference/file-formats/conf-script/ltx.md">*.ltx</a> format).</td>
  </tr>
  </tr>
    <tr id="hierarchical-occluder-mesh">
    <td>Hierarchical Occluder Mesh</td>
    <td>Geometry defining the visibility of an object to remove from the renderer.</td>
  </tr>
</tbody>
</table>

## Joint Types

<table>
  <thead>
    <tr>
      <th>Term</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr id="rigid-joint">
      <td>Rigid</td>
      <td>Joint type that completely restricts all transformations.</td>
    </tr>
    <tr id="cloth-joint">
      <td>Cloth</td>
      <td><a href="https://ode.org/wiki/index.php/Manual#Ball_and_Socket">Ball</a> joint . Allows rotation in all directions, but without translation.</td>
    </tr>
    <tr id="joint">
      <td>Joint</td>
      <td>Universal joint. Automatically selects the optimal physical connection type based on constraint analysis (between <a href="https://ode.org/wiki/index.php/Manual#Hinge">Hinge</a> and FullControl(partially constrained axes)).</td>
    </tr>
    <tr id="wheel-joint">
      <td>Wheel</td>
      <td><a href="https://ode.org/wiki/index.php/Manual#Hinge-2">Hinge-2</a> joint. Allows rotation around the first axis (suspension axis) and rotation around the second axis (wheel axis).</td>
    </tr>
    <tr id="slider-joint">
      <td>Slider</td>
      <td><a href="https://ode.org/wiki/index.php/Manual#Slider">Slider</a> joint. Allows movement along one axis only.</td>
    </tr>
  </tbody>
</table>

## Optimization

<table>
<thead>
  <tr>
    <th>Term</th>
    <th>Definition</th>
  </tr>
  </thead>
<tbody>
  <tr id="portal">
    <td>Portal</td>
    <td>A portal between the two sectors.</td>
  </tr>
  <tr id="sector">
    <td>Sector</td>
    <td>Sector is part of Portal Rendering. An area or section of virtual space that contains objects and geometry for rendering. Sectors help organize the scene, allowing you to control visibility and performance, especially in large worlds.</td>
  </tr>
    <tr id="hierarchical-occlusion-mapping">
    <td>Hierarchical Occlusion Mapping</td>
    <td>Technique in computer graphics that uses a multi-resolution representation of occlusion information to efficiently culling objects that are not visible.</td>
  </tr>
  <tr id="progressive-meshes">
    <td>Progressive Meshes</td>
    <td>One of the methods of dynamic level of detail. Only for <a href="dynamic-object">Dynamic Objects</a>.</td>
  </tr>
</tbody>
</table>

## Shaders

<table>
<thead>
  <tr>
    <th>Term</th>
    <th>Definition</th>
  </tr>
  </thead>
<tbody>
  <tr id="compile-shader">
    <td>Compile Shader</td>
    <td>Shader used by the Level Compiler. Specifies to the compiler the features of the final game level geometry. The source geometry, depending on the compiler shader, may have different features.</td>
  </tr>
  <tr id="engine-shader">
    <td>Engine Shader</td>
    <td>Shader responsible for the visual appearance of the surface.</td>
  </tr>
</tbody>
</table>

## Particles

<table>
<thead>
  <tr>
    <th>Term</th>
    <th>Definition</th>
  </tr>
  </thead>
<tbody>
  <tr id="particle-effect">
    <td>Particle Effect</td>
    <td>Single Particle Effect. Stored in <a href="../reference/file-formats/particles/pe.md">*.pe</a> files.</td>
  </tr>
  <tr id="particle-group">
    <td>Particle Group</td>
    <td>Particle Effects Group. Stored in <a href="../reference/file-formats/particles/pg.md">*.pg</a> files.</td>
  </tr>
</tbody>
</table>
