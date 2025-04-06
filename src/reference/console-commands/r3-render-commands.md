# R3 Render Console Commands

___

```admonish
DirectX 10 - (Shader Model 4.0)

DirectX 10.1 - (Shader Model 4.1)
```

| Command | Command description | Command's argument | Note |
|---|---|:---:|---|
| r3_dynamic_wet_surfaces | Wet surfaces | 'on/off' or '1/0' | - |
| r3_dynamic_wet_surfaces_far | Max. rendering distance of the effect | 30 - 100 | - |
| r3_dynamic_wet_surfaces_near | Min. rendering distance of the effect | 10 - 70 | - |
| r3_dynamic_wet_surfaces_sm_res | Resolution of rain 'shadowmap' | 64 - 2048 | - |
| r3_minmax_sm |  | on<br> off<br> auto<br> autodetect | - |
| r3_msaa | [Multisample anti-aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing#) samples | st_opt_off<br> 2x<br> 4x<br> 8x | - |
| r3_msaa_alphatest | Enable [Alpha testing Multisample anti-aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing#Alpha_testing)  | st_opt_off<br> st_opt_atest_msaa_dx10_0<br> st_opt_atest_msaa_dx10_1 | - |
| r3_use_dx10_1 | Enables use of DX10.1 | 'on/off' or '1/0' | - |
| r3_volumetric_smoke | Volumetric smoke | 'on/off' or '1/0' | - |

## R3 Debug

| Command | Command description | Command's argument | Note |
|---|---|:---:|---|
| r3_fog_reload |  | - | - |
