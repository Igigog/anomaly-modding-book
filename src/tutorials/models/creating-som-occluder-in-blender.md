# Creating SOM Occluder in Blender

___

## Authors

TheParaziT

## Need to know

- How to work in Blender
- How to work with Blender [X-Ray Addon](../../modding-tools/blender/blender-x-ray-addon-summary.md)
- What is a [Static Object](../../glossary/glossary.html#static-object)
- What is a [Sound Occluder Mesh](../../glossary/glossary.html#sound-occluder-mesh)

___

## About

SOM occluders are needed to calculate sound propagation.

## Start

Для примера создадим такой обьект для какой-нибудь подземной части уровня.

## Surface

Go to `Material Properties`![Material Properties svg-icon](../../assets/icons/blender/material.svg).

Create a separate material for our SOM occluder.

В [X-Ray Engine: Material](../../modding-tools/blender/addon-panels/panel-material.md) выберете:

- Shader --- blah (list of all Engine Shaders)
- Compiler --- blah ([list of all Compiler Shaders](../../reference/shaders/shaders-list/compiler-shaders-list.md))
- Material ---  blah ([list of all Game Materials](../../reference/materials/materials-list.md))

## Finish

Go to `Object Properties`![Object Properties svg-icon](../../assets/icons/blender/object-data.svg).

In [X-Ray Engine: Object](../../modding-tools/blender/addon-panels/panel-object.md) select `SOM` in the `Type` list.

This completes the setup of the SOM Occluder. You can safely export it in the model format you need.
