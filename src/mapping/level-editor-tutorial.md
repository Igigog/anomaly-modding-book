## The Level Editor

____

This page will teach you how to use the Level Editor and its tools.

**Before we get started, I'm assuming you've already read and understood the things I've wrote in the mapping introduction. If not, go read it [here](./index.md)!**

## Launching the Level Editor

To launch the Level Editor, we have to launch one of the .bat files which is included in every single SDK version. These are shortcuts into launching one of the SDK editors.

![IX-Ray SDK launchers](images/ix-ray-sdk-launchers.png)

**It should look like this after opening the Level Editor for the first time!**

![IX-Ray SDK insides](images/level-editor-ix-ray.png)

**After the Level Editor has launched, it may look scary at first, but the IX-Ray Level Editor supports draggable windows, so you can drag them to your liking, including properties per window.**

![IX-Ray SDK insides 2](images/level-editor-ix-ray-2.png)

**It's very confusing when you're using the Level Editor for the first time ever, but you'll get the hang of it after using it for a while.**

## Level Editor basics

After adjusting the windows, I'll explain what each window does in depth and what purpose it serves, but firstly, we have to learn the basics of the SDK.

**To move around in all of the SDK Editors, we have to use these specific hard coded keybinds:**

* Shift + Left Mouse Button to move vertically.
* Shift + Right Mouse Button to move horizontally.
* Shift + RMB and LMB to rotate the camera vertically and horizontally.

**Tip: You can simultaneously switch between keybinds to move, whether it would be vertically, horizontally, or just to rotate the camera without having to release all buttons at once for each action.**

Now that we know how to move around in the Level Editor, I'll talk about the SDK windows and what do they do.

To adjust the SDK's keybinding, its FOV, and a lot of other stuff, we have to open the "Preferences" tab which is located on the main toolbar.

![IX-Ray SDK Level Editor preferences](images/editor-preferences.png)

To see the log while using the Level Editor, hover your mouse to the "Windows" tab and click it and then tick on "Log". This is very helpful and it'll show errors in the log, such as wrong parameters of an object, and etc. You can also configure the properties of an object by ticking on "Properties" from the SDK's "Windows" tab and then selecting an object (applies on every Edit Mode type).

![IX-Ray SDK windows tab](images/windows-tab.png)

To undo and redo actions we've made, we can do so by clicking either one of these buttons that's located on the main toolbar.

![IX-Ray SDK undo and redo](images/undo-redo.png)

To clear or open a new scene, we can do so by clicking this button.

![IX-Ray SDK scenes](images/open-clear-scene.png)

Now that we know how to move around in the Level Editor and how to use some of its features, I'll talk about the SDK windows and what do they do.

## Edit Mode

The Edit Mode has seperate tabs each serving their own purpose and are important in a level. There are 16 different Edit Modes and one more which is an IX-Ray exclusive feature and it isn't supported in Anomaly.

* Scene Object
* Light
* Sound Source
* Sound Environment
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


**Scene Objects** are your primary static objects in a level. They essentially make up the entirety of a level and can use different types of [shaders](../shaders/shaders-list/shaders-list.md) and [compiler shaders](../shaders/shaders-list/compiler-shaders-list.md). They're NOT dynamic and for dynamic objects, you'd have to place them from Spawn Elements. They're stored in .object format and can be opened and used by most of the SDK Editors, including Blender, assuming you have PavelBlend's X-Ray tools plugin.

This is how an average object looks like.

![Scene object](images/scene-object.png)

And these are the properties of a scene object.

![Scene object's properites](images/scene-object-properties.png)

* Reference - defines the object's model reference and you can change the reference to use a different object model.

* Surfaces - shows the object's meshes, followed by their textures, shaders, compiler shaders, game materials, etc.

* Texture - define's the texture image of an object's mesh.

* Shader - defines the shader of an object's mesh.

* Compiler Shader - defines the compiler shader specifically used by xrLC (xrLightCompiler - used to compile the geometry of a level) of an object's mesh. 

* Game Mtl - defines the material of an object's mesh.

* Action - reverts back the original parameters (configured in the Actor Editor), of every single mesh in an object.

**Note that when you're building a level, the SDK may give you an error telling you in the log that you have incorrect object parameters despite them being correct from the properties, and that's because the IX-Ray Level Editor takes object parameters from the Actor Editor into account, so you'll have to edit the object model and add proper parameters. It is always adviced to configure your objects in the Actor Editor.**

That's all for the **scene objects**, now I'm gonna explain the **Light** Edit Mode.

**Lights** also make up the entirety of a level. They can be dynamic or static.

Light types can be "Point" and "Is Spot Light" (only available from the Spawn Elements Edit Mode!!!)

This is how a light object looks like.

![Light object point mode](images/light-object.png)

Light object's properties.

![Light object's properites](images/light-properties.png)

I am gonna explain what each setting does on a light object.

* Color defines the light's color. It's controlled by RGB values.

* Brightness controls the overall brightness of a light.

In stalker, there are there light controls, those are:

* $static
* $hemi
* $sun

Light controls are essentially different types of light, $static is the most commonly used light control on static and dynamic lights, while $hemi is only used for brighetning up interiors, placing them at openings near the floor and increasing their intensity depending on how big the opening is. $sun is not needed to use in your everyday lights, it's most likely unused!

As for usages, those are:

* LightMap
* Dynamic
* Animated

Usages for lights can vary, but ticking on "LightMap" means that light will be used on lightmaps, and "Dynamic" if the light is able to cast dynamic shadows. Ticking on "Animated" doesn't seem to do anything and most lights don't use it at all, instead "Fuzzy" is used, which influences light brightness on the light randomly.

* Range defines the light's maximum range.

Attenuation are the advanced settings of a light object.

* Constant - controls the starting point of a light's flow (float value to 0.0/1.0).
* Linear - controls the general light flow linearly (float value - 0.0 to 1.0).
* Quadratic - controls the light flow exponentially (float value - 0.0 to 1.0).
* Auto - sets the light flow depending if you clicked "Linear" and/or "Quadratic". Constant is also affected by it.
* Graphic - shows how the light flow looks like.

These options allow you to tink around with lights extensively instead of only being limited to a couple of options.

Fuzzy is a boolean value where it controls a light's brightness randomly.

* Count - how many light entities there will be per box/sphere
* Generate - generates a random position of light entities, whether you have 1 or 5.
* Shape - defines the shape of the main entity, it can only be a box and a sphere.
* Radius - controls how large the main entity is and how spread out the light entities are.
* Use in D3D - self-explanatory.

After explaining what each setting does in the **Lights** Edit Mode, I'm gonna explain the settings from the **Spawn Elements** Edit Mode.

This is different compared to the **Lights** Edit Mode because these settings are dynamic and a level using them doesn't have to be recompiled if you edited any of its settings, unless the light source also uses lights from the **Lights** Edit Mode, in which case, you'll have to recompile your level to ONLY include the changes you edited from the **Lights** Edit Mode, the changes related to the **Spawn Elements** is entirely dynamic and would only require to build and compile/recompile your level's spawn.

This is how a light object from the **Spawn Elements** Edit Mode looks like (spawned from the **Groups** Edit Mode)

![Light object spot light mode](images/light-object-spot-light.png)

And these are its properties.

![Light object's properties with a spot light](images/light-object-properties-spawn-element.png)

That's all for the Light Edit Mode, now we're moving into **Sound Sources** Edit Mode.

**Sound Sources** are "static" sounds placed in a level playing a specific sound listed in its paremeters and has other settings. What I mean by static, it means that it won't change its sound source and its position, we can do that only in the Level Editor, but I'll talk about it later.

This is how a sound source object looks like.

![Sound Source](images/sound-source.png)

These are the properties of a sound source object.

![Sound Source's properties](images/sound-source-properties.png)

Under its properties, we can see that sound sources have lots of settings, but I'll explain what each one of them does.

Custom has a miscellaneous setting in a sound object that's helpful for testing if the sound works and etc.

* Controls - it has three buttons, namely, "Play", "Stop", and "Simulate".

"Play" - plays the sound in the Level Editor. It's influenced by the sound settings.

"Stop" - stops playing the sound in the Level Editor.

"Simulate" - randomly plays the sound in the game instead of them being a repeated loop over and over.

Source controls the settings in a sound object.

* WAVE name - controls what sound is played in a sound source object. It can only be one sound!
* Frequency - controls the playback speed of the sound being played (float value - 0.0 to 2.0).
* Volume - controls the volume of the sound being played (float value - 0.0 to 1.0).
* Min dist - controls the minimum distance from where you can start hearing a sound (float value - 0.1 to 1000).
* Max dist - controls the maximum distance from where you can hear a sound (float value - 0.1 to 1000).
* Max ai dist - controls the maximum distance from where the AI can hear a sound (float value - 0.1 to 1000).

Game contains more parameters for a sound object. Although, I'm very sure it's unused and no sounds use any of its settings.

That's all for the sound sources, now I'm gonna talk about the **Sound Environment** Edit Mode.