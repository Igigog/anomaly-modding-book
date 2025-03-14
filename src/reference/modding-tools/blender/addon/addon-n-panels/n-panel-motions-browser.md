# Motions Browser

___

![Alt text centered](images/n-panel-motions-browser.png)

This panel contains a browser of skeleton animations from *.skls and *.omf files. The browser is needed for quick viewing of animations. When browsing animations, only one animation is imported, which will be removed from the scene if another animation is selected. Animations are imported one at a time, not all animations from a file. To make the browser available, you need to make the armature the active object. Then the browser options and operators will appear. To open a file with animations, you need to run the Open File operator and select it in the blender file browser. After specifying the file, a list with animations and additional operators will be displayed in the panel. To open a new file, you need to use the Open File operator again. To close the current file, you need to run the Close File operator

## Format

Specifies the file format ([*.skls](../../../../main-folders-and-files/file-formats/animations/skl-skls.md) or [*.omf](../../../../main-folders-and-files/file-formats/animations/omf.md)) to be used when selecting an animation file

## Operators

- [Open File](../addon-operators/operator-open-file.md)
- [Close File](../addon-operators/operator-close-file.md)

___

## Sources

[Source](https://github.com/PavelBlend/blender-xray/wiki/Panel-Motions-Browser)
