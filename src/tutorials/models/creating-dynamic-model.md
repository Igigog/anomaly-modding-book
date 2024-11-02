# Creating a dynamic model

___

## Need to know

- How working in Blender and creating models
- How working with Blender [X-Ray Addon](../../reference/modding-tools/blender/blender-x-ray-addon-summary.md)
- Familiarize yourself with the limitations and capabilities of the format [.object](../../reference/main-folders-and-files/file-formats/models/object.md) (because you may export to it more often than to [.ogf](../../reference/main-folders-and-files/file-formats/models/ogf.md)) to avoid errors
- Familiarize yourself with [Dynamic Object](../../reference/terminology/models/dynamic-object.md) model type

___

At this point we have to decide what type of model we want to use (static, dynamic, or something else). (About the types of objects you can learn here)

It was decided to make our object dynamic.
To do this, you need to create a bone and a vertex group (so that the bone can affect exactly the vertices you choose).
Select the model and go to the "Object Data Properties" (![svg-icon object-data-properties](../../reference/modding-tools/blender/images/blender-images-icons/object-data-properties-logo.svg)) tab
Image here

Under "Vertex Groups" click on the plus sign (a "Vertex Group" with the name "Group" (![svg-icon vertex-group-logo](../../reference/modding-tools/blender/images/blender-images-icons/vertex-group-logo.svg)) will be added) and double-click to rename it (the same name will be needed later for the bone).

![vertex-group centered](blender-images/vertex-group.png)

The next step is to create a bone (Shift + A > Armature > Single Bone).

![bone-create centered](blender-images/create-bone.png)

To make our model move like the bone in the future, we need to rename the bone to the name that was given to "Vertex Groups" (![svg-icon vertex-group-logo](../../reference/modding-tools/blender/images/blender-images-icons/vertex-group-logo.svg)).

![bone-properties centered](blender-images/bone-properties.png)

And rename the bone.

![bone-rename centered](blender-images/bone-rename.png)

Select our object and switch to "Wireframe" mode (![svg-icon wireframe-mode](../../reference/modding-tools/blender/images/blender-images-icons/wireframe.svg)) ("Z" Button) (this is optional).
Place the bone approximately in the center of the model.

![bone-place](blender-images/bone-positing.png)

After that, apply the bone transformations (Ctrl + A > All Transform).

Select our model and go to the "Modifier Properties" (![svg-icon modifier-properties-logo](../../reference/modding-tools/blender/images/blender-images-icons/wrench.svg)) tab.

![modifier-properties centered](blender-images/modifier-properties.png)

In the "Modifier Properties" (![svg-icon modifier-properties-logo](../../reference/modding-tools/blender/images/blender-images-icons/wrench.svg)) tab, add the "Armature" modifier (![armature-modifier-logo](../../reference/modding-tools/blender/images/blender-images-icons/armature-modifier-logo.svg)) (Add Modifier > Armature (under Deform)).

![armature-modif-create centered](blender-images/armature-modifier.png)

The modifier has the following necessary items:

- Object (![svg-icon object-logo](../../reference/modding-tools/blender/images/blender-images-icons/object-logo.svg))
- Bind to (![svg-icon checkbox](../../reference/modding-tools/blender/images/blender-images-icons/checkbox.svg)) Vertex Groups

In the "Object" (![svg-icon object-logo](../../reference/modding-tools/blender/images/blender-images-icons/object-logo.svg)) field, select our bone (you can select it with the pipette (![pipette](../../reference/modding-tools/blender/images/blender-images-icons/pipette.svg))).
Also make sure that the checkbox next to "Vertex Groups" (![svg-icon checkbox](../../reference/modding-tools/blender/images/blender-images-icons/checkbox.svg)) is marked.
These actions allowed us to bond our object and bone, but not yet to the fullest extent.

Next step:
First select the bone after selecting the model, press Ctrl + P. A list appears, select "Bone" (or other settings, because sometimes selecting "Bone" may not help).

![parenting centered](blender-images/parent-to-bone.png)

> This allowed the bone and the model to be fully bonded together. Now when the bone moves or rotates, the model will move with it.

Now you have to set the bone properties for X-Ray.

___

### Bone

Select the bone and go to the "Bone Properties" (![svg-icon bone-properties-logo](../../reference/modding-tools/blender/images/blender-images-icons/bone-properties-logo.svg)) tab.

![bone-properties-p2 centered](blender-images/bone-properties.png)

We see the "X-Ray Engine: Bone" section.

![bone-section centered](blender-images/x-ray-engine-bone.png)

The desired field is "Shape Type" (where you choose the type of shape (for collision)).
From the whole list, our object is more suitable for the "Box" type. Let's choose it.
Next, click the "Edit Shape" button to check and edit the Shape itself.
The Shape of the bone appears and it does not match the model.
The Shape that just appeared is automatically selected and the "Object Properties" (![svg-icon object-properties-logo](../../reference/modding-tools/blender/images/blender-images-icons/object-logo.svg)) tab is selected.

![bone-shape](blender-images/create-shape.png)

In the same tab we see the "X-Ray Engine: Edit Helper" section with three buttons:

- ![svg-icon apply-shape](../../reference/modding-tools/blender/images/blender-images-icons/apply-shape-logo.svg) Apply Shape (accepts changes to the bone shape)
- ![svg-icon fit-shape](../../reference/modding-tools/blender/images/blender-images-icons/fit-shape-logo.svg) Fit Shape (Blender will automatically try to fit the Shape to the size of the object)
- ![svg-icon close-folder](../../reference/modding-tools/blender/images/blender-images-icons/close-folder.svg) Cancel (closes Shape editing mode)

![edit-helper centered](blender-images/x-ray-engine-edit-helper.png)

Apply Shape may help in some cases, but not in this one (nothing happens after clicking), so you need to adjust the Shape manually.
Without going into Edit mode, press "S" and start fitting the Shape to the model. Going through the combinations, changing the shape of the Shape, we finally create an acceptable Shape.

![bone-shape-p2](blender-images/shape-fit-handy.png)

Accept the transformation by clicking on "Apply Shape" (![svg-icon apply-shape](../../reference/modding-tools/blender/images/blender-images-icons/apply-shape-logo.svg)). Everything will apply and the Shape will disappear.
To check the correctness of the shape and adjust the center of mass for the bone, go to the "Object Data Properties" (![svg-icon object-data-properties-skeleton-logo](../../reference/modding-tools/blender/images/blender-images-icons/object-data-properties-skeleton-logo.svg)) panel.

![object-data-properties-panel centered](blender-images/object-data-properties-skeleton.png)

Here we see the "X-Ray Engine: Skeleton" section and the two buttons we need:

- Display Bone Shape
- Display Bone Mass Centers

![x-ray-engine-skeleton centered](blender-images/x-ray-engine-skeleton.png)

Click on "Display Bone Shape" to check the bone shape

![display-bone-shape](blender-images/display-bone-shape.png)

And by clicking on "Display Bone Mass Centers" a Cross will appear, from which you can understand where the center of mass is located (its mass and location can be edited in the tab "Bone Properties").

![display-bone-mass centered](blender-images/center-of-mass-editing.png)

Go to the "Object Properties" (![svg-icon object-logo](../../reference/modding-tools/blender/images/blender-images-icons/object-logo.svg)) tab.
Here you will find the "X-Ray Engine: Object" section.

![x-ray-engine-object centered](blender-images/x-ray-engine-object.png)

Remember that our object, by design, will be dynamic, so click on the button "Object", where we select the type "Dynamic".

The editing of the bone parameters is finished, the next step is Materials.
