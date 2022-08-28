# .bump#

___

## About:

Corrects DXT compression errors in [.bump](bump.md) and is generated only with SDK

## Technical information:

### Format

- RGB - Error correction for normal map (bump.dds) - Not necessary if you're using good quality normal map. It's generated with SDK
- A - height map; used for parallax, if the use of it was turned on when setting up the texture

### The engine currently supports the following compressions:

- DXT5
- BC7