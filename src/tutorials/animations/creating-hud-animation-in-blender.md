# Creating HUD Animation in Blender

___

## Need to know

- How working in Blender and creating animations
- Skeleton animations ([*.skl](../../reference/file-formats/animations/skl-skls.md), [*.skls](../../reference/file-formats/animations/skl-skls.md), [*.omf](../../reference/file-formats/animations/omf.md))
- Camera animations ([*.anm](../../reference/file-formats/animations/anm.md), [*.omf](../../reference/file-formats/animations/omf.md)) 

## Related Videos

___

<iframe width="560" height="315" src="https://www.youtube.com/embed/HwTYYH5zLjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

___

<iframe width="560" height="315" src="https://www.youtube.com/embed/E_wMIdK0Ls0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

___

## Articles
* [Creating hud hands animation in Blender](creating-hud-hands-animation-in-blender.md#beginning)

## Creating animations

1. Create or enter a Blender scene.
2. Choose [hand rig](../../resources/models-objects-locations.md#hands-rig) or create your own
3. Choose weapon or object
4. Add a Copy Transform modifier to the main bone of your chosen weapon or object
    4.1. Select lead_gun as the target
5. Animate

___

## Export

- To export the armature animation you need to select armature and export in needed format (\*.omf or \*.skl/*.skls)
- To export the camera animation you need to select camera empty and export in *.anm
