# Creating animations for the camera in Blender

___

> Camera animations can be created within the scene in [Universal Stalker Rig](https://drive.google.com/file/d/1YuI9oukDrJDGLkyNWzO155GFjVESydaX/view?usp=sharing) by TheParaziT

## Beginning

- First, familiarize yourself with the [.anm](../main-folders-and-files/file-formats/anm.md) file format.

## Creating animations

Create or enter a Blender scene.

In the N-panel in the X-Ray panel in the Add rollout, click on the "Add X-Ray Camera"(![svg-icon camera-icon](blender-images/blender-images-icons/camera.svg)) button.
After adding the empty, set the Order of rotation to YXZ.
Next, select the camera and in the Object Constraint Properties(![svg-icon Object Constraint Properties](blender-images/blender-images-icons/object-constraint-properties-icon.svg)) panel add the "Child of"(![svg-icon Child Of](blender-images/blender-images-icons/child-of-icon.svg)) modifier and choose a empty as the target. Set Transform Rotation X coordinates to 90.
Everything is ready, you can create animations.

## Export

To export the animation you need to select the empty through the export operator in .anm and export
