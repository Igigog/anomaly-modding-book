# Сreating and setting up a static model

___

## Need to know

- How working in Blender and creating models
- Familiarize yourself with the limitations and capabilities of the format [.object](../../reference/file-formats/models/object.md) (because you may export to it more often than to [.ogf](../../reference/file-formats/models/ogf.md)) to avoid errors
- Familiarize yourself with [Static Object](../../glossary/models/static-object.md) model type

___

## Start

Create or download the model you like.
Do a UV if you don't have one.

- ### Example

The model itself:
![model-example]()

UV:
![model-example-uv]()

___

## Texturing

Textures can be created in any program designed for this purpose, or you can simply download them.

Texture:
![model-example-texture]()

### Important note about texture maps

In STALKER only the following texture maps are used:

- Color Map ([*.dds](../../reference/file-formats/textures/dds.md))
- Normal Maps (For Stalker they are used as [_bump.dds](../../reference/file-formats/textures/bump.md) and [_bump#.dds](../../reference/file-formats/textures/bump_hash.md)) (The [Blender X-Ray](../../reference/modding-tools/blender/blender-x-ray-addon-summary.md) addon does not support the [_bump.dds](../../reference/file-formats/textures/bump.md) format at this time

So extra texture maps will have to be removed.

Here you need to add your created texture in [*.dds](../../reference/file-formats/textures/dds.md) format

As a result, in the Shader Editor (![svg-icon shader-editor](../../reference/modding-tools/blender/icons/shader-editor.svg)) our textures should look something like this:

![model-example-texture-shading](images/model-example-texture-shading.png)

So after creating the model, the UV and the texture, the setup within Blender begins.

___

## Setting up

### Model

First, the model itself will be set up.
You can start by positioning the model over the origin in this way (The ["Drop It"](https://andreasaust.gumroad.com/l/drop_it) addon for Blender is highly recommended for such actions):
![model-example-coordinates]()

Then apply the coordinates with Ctrl + A > All Transform. This will allow us (if you make for example a model library or work in the SDK) to drag and drop the model on the surface.

Next, we need to adjust our model to normal size (so that in the game it will not be big or small).
If you have already set up the addon to use and set up the necessary paths to your folders, you need to import into the scene model of some person from the game.

In the N-panel there should be a tab "X-Ray" in it unfolds the list "Viewer" and we click "Open Folder" (![svg-icon folder-icon](../../reference/modding-tools/blender/icons/folder.svg)).

![viewer-n-panel centered]()

The Blender explorer window opens. Go to our unpacked folder with the game files (namely the folder "meshes").
The character models you need are in the "actors" folder, where the faction models are sorted into folders.

Select the desired folder with the models and click on the "Open Folder" button.

![viewer-open-folder-button centered]()

Depending on the size of the models in the "Viewer" folder may take longer to open than you would like.
So, "Viewer" is open. It shows all the models in the selected folder. Click on any model and a character model appears in front of us.

![viewer-import]()

Next, we just adjust our model to acceptable proportions.
After fitting, apply transformations to our object.

![viewer-adjust]()

In the "Viewer" list, we can click on "Close Folder (![svg-icon close-folder](../../reference/modding-tools/blender/icons/close-folder.svg))" to close the list of models and the model imported to us in the scene, too.

![close-viewer-folder centered]()

___

### Material

Select our object and go to the "Material Properties" (![svg-icon material-properties-logo](../../reference/modding-tools/blender/icons/material-properties-logo.svg)) tab.

![material-properties centered]()

Here we see the name of our material and a list of "X-Ray Engine: Material" with lots of items.

![x-ray-engine-material centered]()

There is no point in telling about each point here. (there is a separate section in the book)

The items we need for the model now are:

- [Shader](../../reference/shaders/shaders-list/shaders-list.md) (This setting is responsible for the appearance of the surface.)
- [Compile](../../reference/shaders/shaders-list/compiler-shaders-list.md) (Here are descriptions of the settings that the level geometry compiler uses)
- [Material](../../reference/materials/materials-list.md) (Here you can select surface materials)

Select the shaders you want.

Well, the model setup in Blender is done. Congratulations!

___

## The final stage

To check the model you can go the following ways:

- Load the model into the SDK and check
- Export the model in [*.ogf](../../reference/file-formats/models/ogf.md) format and add it directly to the game
- [Check the model and parameters through third-party programs](../../modding-tools/README.md)
