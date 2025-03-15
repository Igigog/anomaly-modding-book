# Check Smoothing Groups Incompatibility

___

![![alt text](image.png)](images/operator-check-smooth-groups-incompatibility.png)

## About

Looks for edges that trigger the Maya-SG incompatible: sharp edge adjacents has same smoothing group warning on export. Such edges are incompatible for smoothing groups in X-Ray SDK 0.4 format. After operator's work, problem objects will be selected. Each problem object will have problem edges highlighted. To remove the Maya-SG incompatible warning, you must unsharp these problem edges (Ctrl+E > Clear Sharp). The Maya-SG incompatible warning appears if the sharp edges (Ctrl+E > Mark Sharp) have open contours. An example of an open contour is a sphere that has one unsharp edge

### Mode

- `Active Object` - Active object
- `Selected Objects` - Selected objects
- `All Objects` - All objects from blend-file

___

## Sources

[Source](https://github.com/PavelBlend/blender-xray/wiki/Panel-Verify#check-invalid-smooth-groups)
