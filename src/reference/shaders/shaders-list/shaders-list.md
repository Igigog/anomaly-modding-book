# Shaders List (shaders.xr)

___

## About

This section contains a list and description of the shaders that are available in the shaders.xr file. This file contains descriptions of shader settings.

## List

### Shaders for static objects

| Shader name | Shader Type | Description | Shader Properties |
|---|---|---|---|
| zfill | basic (simple) |  |  |
| xwindow | LEVEL: diffuse*base | Old unused glass shader |  |
| selflight | LEVEL: diffuse*base | self-lighting material |  |
| glass | basic (simple) |  |  |
| friendly_indicator | basic (simple) |  |  |
| font | basic (simple) |  |  |
| default_pn_hm | LEVEL: lmap*base (default) |  |  |
| default_pn | LEVEL: lmap*base (default) |  |  |
| default_hm | LEVEL: lmap*base (default) |  |  |
| default | LEVEL: lmap*base (default) | basic lightmap shader |  |
| clouds | basic (simple) |  |  |

### ufp Shaders

| Shader name | Shader Type | Description |
|---|---|---|
| ufp_blend |  |  |

### Test Shaders

| Shader name | Shader Type | Description |
|---|---|---|
| test\aaaaaaaa__ |  |  |
| test\aass |  |  |

### Sky Shaders

| Shader name | Shader Type | Description |
|---|---|---|
| sky\background |  |  |
| sky\clouds |  |  |
| sky\clouds_old |  |  |
| sky\skydome |  |  |

### Particles Shaders

| Shader name | Shader Type | Description |
|---|---|---|
| particles\add |  |  |
| particles\alpha_add |  |  |
| particles\blend |  |  |
| particles\dark |  |  |
| particles\set |  |  |
| particles\xadd |  |  |
| particles\xblend |  |  |
| particles\xdistort |  |  |

### Shaders for dynamic objects

| Shader name and path | Description | Shader Properties | Preview |
|---|---|---|---|
| models\antigas_glass | CubeMap reflection shader  | Name = sky\sky_5_cube<br> Alpha-Blend = 0 |  |
| models\artefact | CubeMap reflection shader  | Name = sky\sky_18_cube<br> Alpha-Blend = 0 | ![Alt text](images/shaders-preview/models-artefact.png) |
| models\artefact2 | CubeMap reflection shader | Name = sky\sky_20_cube<br> Alpha-Blend = 0 | ![Alt text](images/shaders-preview/models-artefact2.png) |
| models\artifact-anim-env | CubeMap reflection shader | Name = sky\sky_11_cube<br> Alpha-Blend = 0 |  |
| models\glass_stalker_refl | CubeMap reflection shader | Name = sky\sky_17_cube<br> Alpha-Blend = 0 |  |
| models\lfo_black_lens_weapons |  |  |  |
| models\lfo_black_soft_lens_weapons |  |  |  |
| models\lfo_glass_lens_weapons |  |  |  |
| models\lfo_light_dot_weapons |  |  |  |
| models\lightplanes | self-lighting material with translucent and falloff effect |  | ![Alt text](images/shaders-preview/models-lightplanes.png) |
| models\mirror |  |  | ![Alt text](images/shaders-preview/models-mirror.png) |
| models\model | basic shader |  | ![Alt text](images/shaders-preview/models-model.png) |
| models\model_aref | transparency. alpha test - trans (with gradients) |  | ![Alt text](images/shaders-preview/models-model_aref.png) |
| models\model_fur | transparency. alpha test - aref (no gradients) |  | ![Alt text](images/shaders-preview/models-model_fur.png) |
| models\hm |  |  | ![Alt text](images/shaders-preview/models-hm.png) |
| models\pn |  |  | ![Alt text](images/shaders-preview/models-pn.png) |
| models\pn_hm | enable tesselation on models (DX11 only) |  | ![Alt text](images/shaders-preview/models-pn_hm.png) |
| models\pautina | material with transparency and falloff effect |  | ![Alt text](images/shaders-preview/models-pautina.png) |
| models\selflight | basic self-lighting material |  | ![Alt text](images/shaders-preview/models-selflight.png) |
| models\seftlight_det | uses an engine shader variable. For example, it is possible to make the detector screen turn off when the battery level is too low |  | ![Alt text](images/shaders-preview/models-seftlight_det.png) |
| models\selflightl | self-lighting material with lower intensity |  | ![Alt text](images/shaders-preview/models-selflightl.png) |
| models\transparent | transparency |  | ![Alt text](images/shaders-preview/models-transparent.png) |
| models\water |  |  |  |
| models\water_ryaska |  |  |  |
| models\weapons | CubeMap reflection shader (variant 4) |  | ![Alt text](images/shaders-preview/models-weapons.png) |
| models\window | semi-transparent shader with CubeMap reflection |  | ![Alt text](images/shaders-preview/models-window.png) |
| models\xanomaly |  |  | ![Alt text](images/shaders-preview/models-xanomaly.png) |
| models\xdistor |  |  | ![Alt text](images/shaders-preview/models-xdistor.png) |
| models\xdistorcolor |  |  | ![Alt text](images/shaders-preview/models-xdistorcolor.png) |
| models\xdistorcolorl |  |  | ![Alt text](images/shaders-preview/models-xdistorcolorl.png) |
| models\xdistorinv |  |  | ![Alt text](images/shaders-preview/models-xdistorinv.png) |
| models\xmonolith |  |  | ![Alt text](images/shaders-preview/models-xmonolith.png) |
| models\xwindows |  |  | ![Alt text](images/shaders-preview/models-xwindows.png) |

### Levels Shaders

| Shader name | Shader Type | Description | Shader Properties |
|---|---|---|---|
| levels\agroprom_asfalt | LEVEL: implicit**detail | Agroprom asphalt terrain shader | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\agroprom_grass | LEVEL: implicit**detail | Agroprom grass terrain shader | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\agroprom_gravel | LEVEL: implicit**detail | Agroprom gravel terrain shader | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\bar_asfalt | LEVEL: implicit**detail |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\bar_asphalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\bar_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\bar_gravel |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkcape_asfalt |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkcape_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darksc_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darksc_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkvalley_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkvalley_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkvalley_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\dead_city_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\dead_city_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\dead_city_ground |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\deadcity_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\deadcity_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\dead_city_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\escape_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\escape_asfalt_noblend |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\escape_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\escape_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\garbage_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_earth_04 |
| levels\garbage_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_earth_04 |
| levels\garbage_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_earth_04 |
| levels\generator_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\generator_earth |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\generators_art |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\hospital_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\hospital_sand |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\jupiter_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\detail_grnd_plates |
| levels\jupiter_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\detail_grnd_plates |
| levels\jupiter_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\detail_grnd_plates |
| levels\jupiter_plates |  |  | Name = detail\detail_grnd_plates<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\detail_grnd_plates |
| levels\l01_escape_asfalt |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\l01_escape_asfalt_noblend |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_asphalt_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_asphalt_01<br> R2-A = detail\ground_asphalt_01 |
| levels\l01_escape_detritus |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\l01_escape_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\l01_escape_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\limansk_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\limansk_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\limansk_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\maedow_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\maedow_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\maedow_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\marsh_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_mud_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_marsh_01 |
| levels\military_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\military_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\military_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\pripyat_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\pripyat_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\pripyat_gras2 |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\pripyat_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\radar_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\radar_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_grass |  |  | Name = detail\ground_grass_03<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_leaves |  |  | Name = detail\ground_earth_01<br>  R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\stancia |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\stancia_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\stancia_build_kanal |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\stancia_kanal |  |  | Name = detail\ground_mud_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\truckscemetery |  |  | Name = detail\ground_mud_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\truckscemetery_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\truckscemetery_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\yantar_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_04<br> R2-A = detail\ground_mud_01 |
| levels\yantar_earth |  |  | Name = detail\ground_earth_04<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_04<br> R2-A = detail\ground_mud_01 |
| levels\zaton_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_cracked |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_earth |  |  | Name = detail\ground_earth_04<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_earth_2 |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_pebbles |  |  | Name = detail\detail_grnd_pebbles<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_plates |  |  | Name = detail\detail_grnd_plates<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_sand |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |

### HUD Shaders

| Shader name and path | Description |
|---|---|
| hud\add |  |
| hud\add-alpha |  |
| hud\cursor |  |
| hud\default |  |
| hud\fog_of_war |  |
| hud\hitmarker |  |
| hud\p3d |  |
| hud\set |  |
| hud\seta |  |

### Flora Shaders

| Shader name and path | Description |
|---|---|
| flora\leaf_wave |  |
| flora\trunk_wave |  |

### Effects Shaders

| Shader name and path | Description |
|---|---|
| effects\bullet_tracer |  |
| effects\flame |  |
| effects\flare |  |
| effects\fx_refl_pod |  |
| effects\glow |  |
| effects\lightning |  |
| effects\lightplanes |  |
| effects\moon |  |
| effects\rain |  |
| effects\screen_add |  |
| effects\screen_blend |  |
| effects\screen_noise |  |
| effects\screen_set |  |
| effects\shadow |  |
| effects\shadow_blur |  |
| effects\shadow_world |  |
| effects\sun |  |
| effects\wallmark |  |
| effects\wallmarkblend |  |
| effects\wallmarkmult |  |
| effects\wallmarkset |  |
| effects\water | pure water shader |
| effects\waterryaska | crayfish shader |
| effects\waterstuden | swamp shader |
| effects\watertest |  |
| effects\watertest-1 |  |

### SDK Shaders

| Shader name and path | Description |
|---|---|
| editor\ai_node |  |
| editor\do_base |  |
| editor\selection |  |
| editor\spawn_icon |  |
| editor\wire |  |

### Details Shaders

| Shader name and path | Description | Preview |
|---|---|---|
| details\blend |  | ![Alt text](images/shaders-preview/details-blend.png) |
| details\lod |  | ![Alt text](images/shaders-preview/details-lod.png) |
| details\set |  | ![Alt text](images/shaders-preview/details-set.png) |

### Def_Shaders

| Shader name and path | Description | Preview |
|---|---|---|
| def_shaders\def_add |  | ![def_add](images/shaders-preview/def_add.png) |
| def_shaders\def_aref |  | ![def_aref](images/shaders-preview/def_aref.png) |
| def_shaders\def_aref_v |  | ![def_aref_v](images/shaders-preview/def_aref_v.png) |
| def_shaders\def_objects_lod |  | ![def_objects_lod](images/shaders-preview/def_objects_lod.png) |
| def_shaders\def_objects_lod_trans |  | ![Alt text](images/shaders-preview/def_objects_lod_trans.png) |
| def_shaders\def_refl_alpha |  | ![Alt text](images/shaders-preview/def_refl_alpha.png) |
| def_shaders\def_refl_alpha_heli |  | ![Alt text](images/shaders-preview/def_refl_alpha_heli.png) |
| def_shaders\def_refl_trans |  | ![Alt text](images/shaders-preview/def_refl_trans.png) |
| def_shaders\def_trans |  | ![Alt text](images/shaders-preview/def_trans.png) |
| def_shaders\def_trans_v |  | ![Alt text](images/shaders-preview/def_trans_v.png) |
| def_shaders\def_trans_v_tuchi |  | ![Alt text](images/shaders-preview/def_trans_v_tuchi.png) |
| def_shaders\def_vertex |  | ![Alt text](images/shaders-preview/def_vertex.png) |
| def_shaders\def_vertex_hm |  | ![Alt text](images/shaders-preview/def_vertex.png) |
| def_shaders\def_vertex_pn |  | ![Alt text](images/shaders-preview/def_vertex.png) |
| def_shaders\def_vertex_pn_hm |  | ![Alt text](images/shaders-preview/def_vertex.png) |
| def_shaders\lod |  | ![Alt text](images/shaders-preview/lod.png) |
| def_shaders\lod_old |  | ![Alt text](images/shaders-preview/lod.png) |

### Debug Shaders

| Shader name and path | Description |
|---|---|
| debug\ai_nodes |  |
| debug\wireframe |  |
