# .bump

## About

The bump map is a regular normal map in A(BGR) format (typical for DXT5_nm compression format). The developers used this order for a very simple reason - DXT compression "spoils" the texture much less, since the alpha channel is not subjected to compression and remains almost in its original form.

## Technical information:

### Format

- R - Glossiness (Glossiness, aka inverted roughness. It works best in stalker, and allows for using better BRDF)
- G - Normal Z (Unused in Anomaly 1.6.0)
- B - Normal Y (DIRECTX format.)
- A - Normal X

### The engine currently supports the following compressions:

- DXT5
- BC7