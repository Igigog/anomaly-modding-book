## The Level Editor

This page will teach you how to use the Level Editor and its tools.

**Before we get started, I'm assuming you've already read and understood the things I've wrote in the mapping introduction. If not, go read it [here](./index.md)!**

## Launching the Level Editor

To launch the Level Editor, we have to launch one of the .bat files which is included in every single SDK version. These are shortcuts into launching one of the SDK editors.

![IX-Ray SDK launchers](images/ix-ray-sdk-launchers.png)

**It should look like this after opening the Level Editor for the first time!**

![IX-Ray SDK insides](images/level-editor-ix-ray.png)

**After the Level Editor has been opened, it may look scary at first, but the IX-Ray Level Editor supports draggable windows, so you can drag them to your liking, including properties per window.**

![IX-Ray SDK insides 2](images/level-editor-ix-ray-2.png)

**It's very confusing when you're using the Level Editor for the first time ever, but you'll get the hang of it when using it for a while.**

**After adjusting the windows, I'll explain what each window does in depth and what purpose it serves.**

## Edit Mode
* Scene Object
* Light
* Sound Source
* Sound Env
* Glow
* Shape
* Spawn Element
* Way Points
* Sector
* Portal
* Group
* Static Particles
* Detail Objects
* AI Map
* Wallmarks
* Fog Volumes
* Puddles (IX-Ray exclusive feature, it's not supported in Anomaly!!!)

**Scene Objects** are your primary static objects in a level. They essentially make up the entirety of a level and can use different types of [shaders](../shaders/shaders-list/shaders-list.md) and [compiler shaders.](../shaders/shaders-list/compiler-shaders-list.md) They're NOT dynamic and for dynamic objects, you'd have to place them from Spawn Elements. 

**You can configure an object's properties by ticking on "Properties" from the SDK's "Windows" tab and then selecting an object (applies for every Edit Mode type).**

**Lights** also make up the entirety of a level, and in stalker, there are there light controls, those are:

* $static
* $hemi
* $sun

As for usages, those are:

* LightMap
* Dynamic
* Animated

Light controls are essentially different types of light, $static is the most commonly used light control on static and dynamic lights, while $hemi is only used for brighetning up interiors, placing them at openings near the floor and increasing their intensity depending on how big the opening is. $sun is not needed to use in your everyday lights, it's most likely unused!

Usages for lights can vary, but ticking on "LightMap" means that light will be used on lightmaps, and "Dynamic" if the light is able to cast dynamic shadows. Ticking on "Animated" means the light will randomly flicker.

Light types can be "Point" and "Is Spot Light" (only available from the Spawn Elements Edit Mode!!!)

Attentuation is a light's advanced settings.





