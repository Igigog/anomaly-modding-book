# Terminology

___

## <center>Engine</center>

### ODE

![example centered](images/ode-logo.png)

ODE (Open Dynamics Engine) - is an open physics engine distributed for free as a dynamically linked library. Its main components are an Absolute-Solid Dynamics system and a collision detection system.

[Source Code](https://bitbucket.org/odedevs/ode/src/master/)

### A-Life

A-Life (Artificial Life) - artificial intelligence system. [More About](../ai/index.html)

#### Smart Terrain

A smart-terrain is a specific script class in the game, which is used to populate locations. Smarts organize jobs for NPS, implement logic for certain exclusive characters, respawn NPS and monsters, and organize emission shelters for NPS.

### OpenAL

![example centered](images/openal-logo.png)

OpenAL (Open Audio Library) - cross-platform application programming interface (API) for working with audio data. A key feature is working with sound in 3D space and using EAX effects.

___

## <center>Object Types</center>

## Dynamic object

Any movable object (which can be displaced from its place regardless of the scripts)

Example:

![example centered](images/dynamic_object.png)

Distinguishing features:

- Has a bone collision

## Static object

Any static object at the level

Example (in this case, part of the collision level):

![example centered](images/static_object.png)

Distinguishing features:

- Does not have a bone collision

## [Progressive Meshes](https://en.wikipedia.org/wiki/Progressive_meshes)

One of the methods of dynamic level of detail

## *object*_hud

HUD (Head-Up Display) - is a set of graphical interfaces and decorative elements located in the foreground and/or in the game world, which are designed to clearly and quickly convey to the player the necessary information from the game at a given point in time, without interfering with the gameplay experience.

In stalker modding, *object*_hud is a model in front of the player in the hands of the character. Usually it is a model of a weapon, grenades, etc.

Example:

![example centered](images/hud_object.png)

Distinguishing features:

- Does not have a bone collision

## *object*_world

Model, in-game world (NPC weapons, 3rd-person view). The difference from the \_hud model is that the \_world must have a collision to calculate the interaction with the game.

Example:

![example centered](images/world_model.png)

Distinguishing features:

- Has a bone collision
- Dynamic object

___

## <center>Animations</center>

### *object*_hud animations

Animations for the _hud object

___

## <center>Material</center>

### Material

In the X-Ray engine, [game material](../shaders/shaders-list/materials-list.md) is a set of surface properties, namely:

- texture
- [shader used in the game](../shaders/shaders-list/shaders-list.md)
- [shader used by the level compiler](../shaders/shaders-list/compiler-shaders-list.md)
- set of sounds of interaction with objects
