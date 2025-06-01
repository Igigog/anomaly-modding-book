# Creating Hanging Object in Blender

___

## About

Hanging objects (lamps or signs) such objects have special bones that allow them to imitate ropes or any other kind of rope.

## Start

We're gonna need a model. Like a model of a sign on ropes.

Create several bones.

One for the collision of the sign itself

Two bones for the rope.

One main (root) bone

## Bone

Let's set up bones

Go to Bone Properties and in X-Ray Engine: Bone, choose:

- For rope bones, select Cloth in Joint Type.
- For sign bone select Rigid.
- For root bone, select 111.

## Finish

If you plan to place your object on ceilings, it is better to flip the object over and apply all transformations to the armature and model. This will allow you to easily snap the object into the SDK at the right angle.

Go to `Object Properties`![Object Properties svg-icon](../../assets/icons/blender/object-data.svg).

In [X-Ray Engine: Object](../../modding-tools/blender/addon-panels/panel-object.md) select `Dynamic` in the `Type` list.
