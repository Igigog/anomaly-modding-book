# Dynamic Object Setup in Blender

___

## Need to know

- How working in Blender and creating models
- How working with Blender [X-Ray Addon](../../modding-tools/blender/blender-x-ray-addon-summary.md)
- Familiarize yourself with the limitations and capabilities of the format [*.object](../../reference/file-formats/models/object.md) (because you may export to it more often than to [*.ogf](../../reference/file-formats/models/ogf.md)) to avoid errors
- Familiarize yourself with [Dynamic Object](../../glossary/glossary.md#DynamicObject) model type
- How [Smoothing](../../reference/models/smoothing.md) work in X-Ray

___

It was decided to make our object dynamic.
To do this, you need to create a bone and a vertex group (so that the bone can affect exactly the vertices you choose).
Select the model and go to the "Object Data Properties" (![svg-icon object-data-properties](../../modding-tools/blender/icons/object-data-properties-logo.svg)) tab
Image here

Under "Vertex Groups" click on the plus sign (a "Vertex Group" with the name "Group" (![svg-icon vertex-group-logo](../../modding-tools/blender/icons/vertex-group-logo.svg)) will be added) and double-click to rename it (the same name will be needed later for the bone).

![vertex-group centered]()

The next step is to create a bone (Shift + A > Armature > Single Bone).

![bone-create centered]()

To make our model move like the bone in the future, we need to rename the bone to the name that was given to "Vertex Groups" (![svg-icon vertex-group-logo](../../modding-tools/blender/icons/vertex-group-logo.svg)).

![bone-properties centered]()

And rename the bone.

![bone-rename centered]()

Select our object and switch to "Wireframe" mode (![svg-icon wireframe-mode](../../modding-tools/blender/icons/wireframe.svg)) ("Z" Button) (this is optional).
Place the bone approximately in the center of the model.

![bone-place]()

After that, apply the bone transformations (Ctrl + A > All Transform).

Select our model and go to the "Modifier Properties" (![svg-icon modifier-properties-logo](../../modding-tools/blender/icons/wrench.svg)) tab.

![modifier-properties centered]()

In the "Modifier Properties" (![svg-icon modifier-properties-logo](../../modding-tools/blender/icons/wrench.svg)) tab, add the "Armature" modifier (![armature-modifier-logo](../../modding-tools/blender/icons/armature-modifier-logo.svg)) (Add Modifier > Armature (under Deform)).

![armature-modif-create centered]()

The modifier has the following necessary items:

- Object (![svg-icon object-logo](../../modding-tools/blender/icons/object-logo.svg))
- Bind to (![svg-icon checkbox](../../modding-tools/blender/icons/checkbox.svg)) Vertex Groups

In the "Object" (![svg-icon object-logo](../../modding-tools/blender/icons/object-logo.svg)) field, select our bone (you can select it with the pipette (![svg-icon pipette](../../modding-tools/blender/icons/pipette.svg))).
Also make sure that the checkbox next to "Vertex Groups" (![svg-icon checkbox](../../modding-tools/blender/icons/checkbox.svg)) is marked.
These actions allowed us to bond our object and bone, but not yet to the fullest extent.

Next step:
First select the bone after selecting the model, press Ctrl + P. A list appears, select "Deform"

![parenting centered]()

Now you have to set the bone properties for X-Ray.

___

### Bone

Select the bone and go to the "Bone Properties" (![svg-icon bone-properties-logo](../../modding-tools/blender/icons/bone-properties-logo.svg)) tab.

![bone-properties-p2 centered]()

We see the [X-Ray Engine: Bone](../../modding-tools/blender/addon-panels/panel-bone.md) section.

![bone-section centered]()

The desired field is "Shape Type" (where you choose the type of shape (for collision)).
From the whole list, our object is more suitable for the "Box" type. Let's choose it.
Next, click the "Edit Shape" button to check and edit the Shape itself.
The Shape of the bone appears and it does not match the model.
The Shape that just appeared is automatically selected and the "Object Properties" (![svg-icon object-properties-logo](../../modding-tools/blender/icons/object-logo.svg)) tab is selected.

![bone-shape]()

In the same tab we see the "X-Ray Engine: Edit Helper" section with three buttons:

- ![svg-icon apply-shape](../../modding-tools/blender/icons/apply-shape-logo.svg) Apply Shape (accepts changes to the bone shape)
- ![svg-icon fit-shape](../../modding-tools/blender/icons/fit-shape-logo.svg) Fit Shape (Blender will automatically try to fit the Shape to the size of the object)
- ![svg-icon close-folder](../../modding-tools/blender/icons/close-folder.svg) Cancel (closes Shape editing mode)

![edit-helper centered]()

Apply Shape may help in some cases, but not in this one (nothing happens after clicking), so you need to adjust the Shape manually.
Without going into Edit mode, press "S" and start fitting the Shape to the model. Going through the combinations, changing the shape of the Shape, we finally create an acceptable Shape.

![bone-shape-p2]()

Accept the transformation by clicking on "Apply Shape" (![svg-icon apply-shape](../../modding-tools/blender/icons/apply-shape-logo.svg)). Everything will apply and the Shape will disappear.
To check the correctness of the shape and adjust the center of mass for the bone, go to the "Object Data Properties" (![svg-icon object-data-properties-skeleton-logo](../../modding-tools/blender/icons/object-data-properties-skeleton-logo.svg)) panel.

![object-data-properties-panel centered]()

Here we see the [X-Ray Engine: Skeleton](../../modding-tools/blender/addon-panels/panel-armature.md) section and the two buttons we need:

- Display Bone Shape
- Display Bone Mass Centers

![x-ray-engine-skeleton centered]()

Click on "Display Bone Shape" to check the bone shape

![display-bone-shape]()

And by clicking on "Display Bone Mass Centers" a Cross will appear, from which you can understand where the center of mass is located (its mass and location can be edited in the tab "Bone Properties").

![display-bone-mass centered]()

Go to the "Object Properties" (![svg-icon object-logo](../../modding-tools/blender/icons/object-logo.svg)) tab.
Here you will find the "X-Ray Engine: Object" section.

![x-ray-engine-object centered]()

Remember that our object, by design, will be dynamic, so click on the button "Object", where we select the type "Dynamic".

## The final stage

To check the model you can go the following ways:

- Load the model into the [SDK](../../modding-tools/sdk/README.md) and check
- Export the model in [*.ogf](../../reference/file-formats/models/ogf.md) format and add it directly to the game
- [Check the model and parameters through third-party programs](../../modding-tools/README.md)