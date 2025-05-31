# R3 Render Console Commands

___

```admonish
DirectX 10 - (Shader Model 4.0)

DirectX 10.1 - (Shader Model 4.1)
```

## Release build

| Command | Command description | Command's argument |
|---|---|---|
| r3_dynamic_wet_surfaces | Enable wet surface effect | 'on/off' or '1/0' |
| r3_dynamic_wet_surfaces_far | Maximum rendering distance of the wet surface effect | 30.000 - 100.000 |
| r3_dynamic_wet_surfaces_near | Minimum rendering distance of the wet surface effect | 10.000 - 70.000 |
| r3_dynamic_wet_surfaces_sm_res | Shadow map resolution for rendering wet surfaces | 64 - 2048 |
| r3_minmax_sm | Variable controlling the use of MinMax Shadow Maps | on<br> off<br> auto --- Automatic selection for high settings r_sun_quality >= 3<br> autodetect --- Dynamic enabling depending on screen resolution and sun settings |
| r3_msaa | [Multisample anti-aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing#) samples | st_opt_off<br> 2x<br> 4x<br> 8x |
| r3_msaa_alphatest | Enable [Alpha testing Multisample anti-aliasing](https://en.wikipedia.org/wiki/Multisample_anti-aliasing#Alpha_testing)  | st_opt_off<br> st_opt_atest_msaa_dx10_0<br> st_opt_atest_msaa_dx10_1 |
| r3_use_dx10_1 | Enables use of DX10.1 | 'on/off' or '1/0' |
| r3_volumetric_smoke | Enable volumetric smoke | 'on/off' or '1/0' |

## Debug build

| Command | Command description | Command's argument |
|---|---|---|
| r3_fog_reload | Reloads volumetric fog parameters | - |
