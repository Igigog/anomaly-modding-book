# Creating an animation in Blender for a HUD object

___

This article is about creating an animation for a HUD object in Blender

## Beginning

- First, check out the information about [.omf](../main-folders-and-files/file-formats/omf.md), .skl, and .skls formats ([list of file formats](../main-folders-and-files/file-formats/index.html))
- To create the animation, we need a hand model (can be found in this [article](../resources/models-objects-locations.md)) and a model of what will be animated in the hands (a weapon or other object).

### Preparing the HUD model

[Create](creating-model-in-blender.md) or download our model, which will be the HUD.

![model-example](blender-images/hud-animation-tutorial/bizon.png)

Next, you need to make a rig of the model, if it does not exist.

### Rig Creating

How to create a basic skeleton was described in this [article](creating-model-in-blender.md) (creating bones and Vertex Groups)

A more advanced skeleton and rig should be made for this model.

- P.S.
For a more convenient arrangement of the bones, it is advisable to check the "In Front" checkbox in the Object Data Properties (![svg-icon object-data-properties-skeleton-logo](blender-images/blender-images-icons/object-data-properties-skeleton-logo.svg)) in the Viewport Display section.

The resulting skeleton:

![skeleton-example](blender-images/hud-animation-tutorial/bizon-skeleton.png)

Note that you need your own bones for the attached silencer and scope.

Next, you need to assign Vertex Groups to the selected vertices.

![vertex-groups-example](blender-images/hud-animation-tutorial/bizon-vertex-groups.png)

And rename the bones as the desired Vertex Groups.

![bone-rename-example](blender-images/hud-animation-tutorial/bizon-bone-rename.png)

- P.S.
At this stage, I suggest duplicating the main skeleton bone of the HUD object (if it is a weapon, for example) and naming it differently. Assign this bone as the parent to all bones. And set the previous main bone as its parent. Due to these manipulations it will be fashionable to rotate weapon regardless of lead_gun position.

- P.P.S.
To set the location where the magazine should be located, you can do the following:
- Duplicate the store bone and name it *_rig.
- Duplicate it again and name it *_place
- Remove the parent of these bones.
- Select the main magazine bone and add the Copy Transform(![svg-icon copy-transform](blender-images/blender-images-icons/copy-transform.svg)) modifier. Select the *_rig bone as the target. Then select *_rig and add the Copy Transform(![svg-icon copy-transform](blender-images/blender-images-icons/copy-transform.svg)) modifier to it, and select *_place as the target.
This will allow you to correctly attach the store bone to its original position without damaging the skeleton hierarchy for the HUD model.

In order for the animation to apply to all bones, it is necessary to set their Bone Groups. You can do this by going to the Object Data Properties(![svg-icon Object Data Properties](blender-images/blender-images-icons/object-data-properties-logo.svg)) tab. In the Bone Groups section, create a new group and add the HUD object's bones to it.

After all the steps, you need to add a Bone Group for the bones of the HUD object. To do this, go to the Object Data Properties tab and create a new group in the Bone Groups list, adding all the bones of the HUD object there.

Import hands for animation (Append Button). Select the main bone of your skeleton for the HUD object and add the Copy Transform(![svg-icon copy-transform](blender-images/blender-images-icons/copy-transform.svg)) modifier via the Bone Constraint Properties(![svg-icon Bone Constraint Properties](blender-images/blender-images-icons/bone-constraint-properties-icons.svg)) tab. Select the hand skeleton and lead_gun bone as the target. Be sure to check that your object HUD bones are equal to 1!

### Creating Animations

Switch to the Animation tab and start building the original pose. Selecting the dice you want, move them around until you get the final look.
Don't forget to put the keys (Button I > Location & Rotation).
Select the arm skeleton and name your animation (for example*_idle). Do the same for the object's HUD skeleton. This is necessary because in the game HUD hands and object use their own bones and their own animations. Don't forget to put a "Fake User" for the animation!

![fake-user](blender-images/hud-animation-tutorial/fake-user.png)

Next comes the easiest and at the same time the most difficult - the creation of animations.
Copy the idle animation and start creating!

- P.S.
For easier animation, I suggest creating help bones.
Copy a weapon bone, remove the parent and add the "Child of" modifier to that bone and select some functional bone (e.g. a bolt bone) as a target. Further, if you add "Copy Transform" modifier to the hand bone and select the Help bone created as a target, it will simplify the animation (for example, when the bolt moves, the hand will move too).

- P.P.S.
The engine currently supports the [following list](../configs/items/weapons/w_(weapon).ltx.md) of animations (First write the hand animation, and after the comma the weapon animation (if no weapon animation is specified, the idle weapon animation will be used))

Once created, you can export the animations to .skl, .skls, or [.omf](../main-folders-and-files/file-formats/omf.md)
To export animations to [.omf](../main-folders-and-files/file-formats/omf.md) you must:
Go to the Object Properties of the selected skeleton (Hands or HUD object)
In the tab X-Ray Engine: Object expand the list of Motions.
In the Dependency field select the skeleton you need (on which skeleton the animation needed for the skeleton will be played)
Press the plus button to add the field, in it you need to select the desired animation and add all the animations you need for the selected skeleton.
Then you can export the [.omf](../main-folders-and-files/file-formats/omf.md) by pre-selecting the skeleton with animations.
