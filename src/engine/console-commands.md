# Console commands

___

## About:
This section describes all console commands. 
All the settings described below are stored in the file "user".ltx. (You can read more about [important files here](../main-folders-and-files/index.html))

### Game

| Сommand | Command description | Command's argument |
---|---|---|
| help | Outputs a list of console commands | - |
| g_dead_body_collision | Enables collision for selected objects  | full/actor_only/off |
| g_game_difficulty | Selects the game difficulty |  |
| g_god | Enables God Mode | 'on/off' or '1/0' |
| g_hit_pwr_modif |  | 0.500 - 3.000 |
| g_ironsights_zoom_factor | Zoom factor of the mechanical sight | 1.000 - 2.000 |
| g_unlimitedammo | Enables Infinite Ammo Mode | 'on/off' or '1/0' |
| g_use_tracers |  | 'on/off' or '1/0' |
| g_important_save | Saving at key points | 'on/off' or '1/0' |
| g_autopickup | Enables the ability to pick up items automatically (not working) | 'on/off' or '1/0' |
| g_always_active | The game will continue to work if the focus is not on it | 'on/off' or '1/0' |
| demo_play | Plays the selected demo_record | "name" of demo |
| demo_record |  |  |
| demo_set_cam_position |  |  |
| keypress_on_start | Whether to wait after loading a level to press the key to go into the game | 'on/off' or '1/0' |
| load | Load specified save | save_name |
| load_last_save | Load last save | - |
| main_menu | Exit to the main menu | - |
| quit | Exit to the desktop | - |
| cl_cod_pickup_mode | Selecting items from the radius around the scope | 'on/off' or '1/0' |
| disconnect | Ends the game | - |
| time_factor | Ability to change the game time | 0.001 - 1000.0 |
| jump_to_level | Moving to the selected level | k00_marsh - l01_escape - l02_garbage - l03_agroprom - k01_darkscape - l04_darkvalley - l05_bar - l06_rostok - l07_military - l08_yantar - l09_deadcity - l10_limansk - l10_radar - l10_red_forest - l11_hospital - l11_pripyat - l12_stancia - l12_stancia_2 - l13_generators - l03u_agr_underground - l04u_labx18 - l08u_brainlab - l10u_bunker - l12u_sarcofag - l12u_control_monolith - l13u_warlab - zaton - jupiter - jupiter_underground - pripyat - labx8 - k02_truck_cemetery - fake_start - y04_pole |


#### Actor

| Сommand | Command description | Command's argument |
---|---|---|
| g_backrun | Backward running mode (not working) | 'on/off' or '1/0' |
| head_bob_factor | Basic head bobbing factor | 0 - 2 |

#### HUD

| Сommand | Command description | Command's argument |
---|---|---|
| g_simple_pda |  | 'on/off' or '1/0' |
| g_3d_pda | Switching between 2D and 3D PDA modes | 'on/off' or '1/0' |
| hud_weapon | Shows weapons and hands | 'on/off' or '1/0' |
| hud_draw | Shows UI | 'on/off' or '1/0' |
| hud_fov | FOV for HUD | 0.100 - 1.000 |

#### UI

| Сommand | Command description | Command's argument |
---|---|---|
| cl_dynamiccrosshair | Dynamic Sight (not working because of the dot sight) | 'on/off' or '1/0' |
| g_crosshair_color | Changes the color of the crosshair | -(255,255,255,255) - (255,255,255,255) |
| g_feel_grenade | "Sensitivity" grenade | 'on/off' or '1/0' |
| hud_crosshair | Show crosshair | 'on/off' or '1/0' |
| hud_crosshair_dist | Show distance under crosshair | 'on/off' or '1/0' |

#### Debug

| Сommand | Command description | Command's argument |
---|---|---|
| rs_stats | Display engine statistics on the screen | 'on/off' or '1/0' |
| rs_cam_pos | Display camera coordinates | 'on/off' or '1/0' |
| list_actions | Display a list of active console commands | - |
| bind_list | Display a list of commands assigned to the keys | - |
| hud_info |  | - |
| render_memory_stats | Output information about memory usage | - |
| stat_memory |  | - |

### Control

| Сommand | Command description | Command's argument |
---|---|---|
| bind | Assign a command to the button | Action, key prefixed with k (kLeft, etc.) |
| mouse_invert | Inverts the mouse | 'on/off' or '1/0' |
| mouse_sens | Mouse sensitivity | 0.001 - 0.600 |
| mouse_sens_aim | Mouse sensitivity when aiming | 0.500 - 2.000 |
| default_controls | Resets key settings to defaults | - |
| wpn_aim_toggle | Aiming Mode | 'on/off' or '1/0' |
| g_crouch_toggle | Sit/stand mode | 'on/off' or '1/0' |
| g_sprint_toggle | Sprint mode | 'on/off' or '1/0' |
| g_walk_toggle |  | 'on/off' or '1/0' |

### Discord

| Сommand | Command description | Command's argument |
---|---|---|
| discord_status | Displays status in Discord | 'on/off' or '1/0' |
| discord_update_rate | Discord update rate | 0.500 - 5.000 |

### Sound

#### General settings

| Сommand | Command description | Command's argument |
---|---|---|
| snd_restart | Restart the sound engine | — |
| snd_cache_size | Cache size | 8 - 256 |
| snd_acceleration | APU resource utilization | 'on/off' or '1/0' |
| snd_targets | Maximum number of channels | 32 - 1024 |
| snd_device |  | OpenAL Soft |

#### Volume

| Сommand | Command description | Command's argument |
---|---|---|
| snd_volume_eff | Volume of sounds | 0.000 - 1.000 |
| snd_volume_music | Music volume | 0.000 - 1.000 |
| g_dynamic_music |  | 'on/off' or '1/0' |

#### Effects

| Сommand | Command description | Command's argument |
---|---|---|
| snd_efx | EAX sound effects | 'on/off' or '1/0' |

### Physics

| Сommand | Command description | Command's argument |
---|---|---|
| ph_gravity | Gravity | 0.000 - 1000.000 |
| ph_frequency | The more, the better the collision calculations | 50.0000 - 200.0000 |
| ph_iterations | Number of iterations to calculate the dynamics | 15 - 50 |

### Camera

| Сommand | Command description | Command's argument |
---|---|---|
| cam_inert | Camera inertia |  |
| cam_slide_inert |  |  |
| fov | FOV for camera | 5.000 - 180.000 |

### Graphics

#### General settings

| Сommand | Command description | Command's argument |
---|---|---|
| _preset | Selecting a set of quality settings | Minimum/Low/Default/High/Extreme	 |
| rs_screenmode | Resolution selection mode | Windowed/Fullscreen/Borderless/Windowed |
| rs_v_sync | Vertical Sync | 'on/off' or '1/0' |
| rs_refresh_60hz | Screen refresh rate 60 Hz | 'on/off' or '1/0' |

#### Renders

##### Common commands for all renders

| Сommand | Command description | Command's argument |
---|---|---|
| renderer | Render type (old) |  |
| rs_vis_distance | Visibility range | 0.400 - 1.500 |
| r__actor_shadow | Player shadow | 'on/off' or '1/0' |
| r__bloom_thresh | Brightness threshold for 3rd party bloom shader | 0.0 - 1.0 |
| r__bloom_weight | Bloom weights for 3rd party bloom shader | 0.0 - 1.0 |
| r__clear_models_on_unload |  | 'on/off' or '1/0' |
| r__color_grading |  |  |
| r__detail_density | Grass density | 0.040 - 1.000 |
| r__detail_height | Grass height | 0.5 - 2.0 |
| r__detail_radius | Grass rendering radius | 50.0 - 250.0 |
| r__dtex_range |  | 5.000 - 175.000 |
| r__enable_grass_shadow | Enables grass shadows | 'on/off' or '1/0' |
| r__exposure | Scene exposure | 0.500 - 4.000 |
| r__framelimit | FPS limiter | 0 - 500 |
| r__gamma | Scene gamma | 0.500 - 2.200 |
| r__geometry_lod | Geometry level of detail | 0.100 - 1.500 |
| r__lens_flares | The "lens flare" effect | 'on/off' or '1/0' |
| r__nightvision | Controls nightvision shader | 0 - 3 |
| r__no_ram_textures |  | 'on/off' or '1/0'off |
| r__no_scale_on_fade |  |  |
| r__optimize_dynamic_geom |  |  |
| r__optimize_shadow_geom |  |  |
| r__optimize_static_geom |  |  |
| r__saturation | Color saturation | 0.0 - 2.0 |
| r__supersample | Supersampling (DX8) | 1 - 8 |
| r__tf_aniso | Anisotropic filtering | 0 - 4 - 8 - 16 |
| r__tf_mipbias | bias for initial texture mip level | -3.0 - 3.0 |
| r__use_precompiled_shaders |  |  |
| r__wallmark_ttl | Wallmark Lifetime | 1.000 - 600.000 |
| r_screenshot_mode | Screenshot in the selected format | jpg/png/tga |

##### R1 (DX8)

| Сommand | Command description | Command's argument |
---|---|---|
| r1_detail_textures | Detailed textures on static lighting | 'on/off' or '1/0' |
| r1_dlights | Dynamic light sources on static lighting | 'on/off' or '1/0' |
| r1_dlights_clip | Sets the display radius (visibility range) of
of dynamic light sources |  |
| r1_fog_luminance | Fog brightness | 0.2 - 5.0 |
| r1_glows_per_frame | Controls the maximum number of light sources |  |
| r1_lmodel_lerp | Controls Linear Lighting Interpolation |  |
| r1_pps_u | Controls Per Pixel Shader value |  |
| r1_pps_v | Controls Per Pixel Shader value |  |
| r1_software_skinning |  |  |
| r1_ssa_lod_a | Controls the level of detail (LOD) in the game world |  |
| r1_ssa_lod_b | Controls the level of detail (LOD) in the game world |  |

##### R2 (DX9)

| Сommand | Command description | Command's argument |
---|---|---|
| r2_aa | "Pseudo-smoothing" on dynamic lighting | 'on/off' or '1/0' |
| r2_aa_break | Distance at which the "Pseudo-smoothing" effect works |  |
| r2_aa_kernel | The basic value of the "Pseudo-smoothing" effect |  |
| r2_aa_weight | Controls the blurring of the fake AA more accurately |  |
| r2_allow_r1_lights |  |  |
| r2_detail_bump | Detail textures | 'on/off' or '1/0' |
| r2_dof |  |  |
| r2_dof_enable | Enables depth of field | 'on/off' or '1/0' |
| r2_dof_radius | Doesn't work. In vanilla game that command controls blur radius | 0.05 - 1.0 |
| r2_dof_sky | Sky depth | -10000.0 - 10000.0 |
| r2_drops_control | Controls rain drops shader |  |
| r2_exp_donttest_shad |  |  |
| r2_gi | Global illumination | 'on/off' or '1/0' |
| r2_gi_clip | Global illumination effect range | 0.0001 - 1.0 |
| r2_gi_depth | Shadow depth of the global illumination effect | 1 - 5 |
| r2_gi_photons | Number of rays to trace the global illumination effect | 8 - 256 |
| r2_gi_refl | Reflectivity of global illumination effect surfaces | 0.00001 - 0.99 |
| r2_gloss_factor | Surface gloss level | 0.001 - 10.0 |
| r2_gloss_min | Minimal gloss level | 0.001 - 1.0 |
| r2_ls_bloom_fast | In theory, this should enable faster bloom implementation, yet it doesn't work correctly | 'on/off' or '1/0' |
| r2_ls_bloom_kernel_b | Determines the level of shading (haze) from the
HDR and Bloom |  |
| r2_ls_bloom_kernel_g | Bloom 'radius'. Higher values results in softer bloom | 1.0 - 7.0 |
| r2_ls_bloom_kernel_scale | Bloom scale | 0.05 - 2.0 |
| r2_ls_bloom_speed |  |  |
| r2_ls_bloom_threshold | Brightness threshold | 0.0 - 1.0 |
| r2_ls_depth_bias | Controls the range of light sources |  |
| r2_ls_depth_scale | Controls the effect of lighting on shadows |  |
| r2_ls_dsm_kernel |  |  |
| r2_ls_psm_kernel |  |  |
| r2_ls_squality |  |  |
| r2_ls_ssm_kernel |  |  |
| r2_mask_control | Controls gasmask shader |  |
| r2_mblur | Motion blur intensity | 0.0 - 1.0 |
| r2_mblur_enabled | Enables motion blur effect | 'on/off' or '1/0' |
| r2_parallax_h | Parallax strength | 0.0 - 0.5 |
| r2_qsync |  |  |
| r2_shadow_cascede_old | Enables 'SoC-like' shadow mapping | 'on/off' or '1/0' |
| r2_slight_fade |  |  |
| r2_smaa | Subpixel Morphological Anti-aliasing | off/low/medium/high/ultra |
| r2_soft_particles | Soft particles | 'on/off' or '1/0' |
| r2_soft_water | Soft Water | 'on/off' or '1/0' |
| r2_ss_sunshafts_length | Length of screen-space sun rays | 0.2 - 1.5 |
| r2_ss_sunshafts_radius |  |  |
| r2_ssa_lod_a | Level of detail of dynamic objects | 16.0 - 96.0 |
| r2_ssa_lod_b | Level of detail of static objects | 32.0 - 96.0 |
| r2_ssao | Screen space ambient occlusion effect quality | st_opt_off/st_opt_low/st_opt_medium/st_opt_high/st_opt_ultra |
| r2_ssao_blur | Doesn't work. |  |
| r2_ssao_half_data | Enables half-resolution depth buffer for AO | 'on/off' or '1/0' |
| r2_ssao_hbao | Horizon-Based Ambient Occlusion | 'on/off' or '1/0' |
| r2_ssao_hdao | High-definition Ambient Occlusion | 'on/off' or '1/0' |
| r2_ssao_mode | Ambient occlusion type | disabled/default/hdao/hbao |
| r2_ssao_opt_data |  |  |
| r2_steep_parallax | Steep parallax occlusion mapping | 'on/off' or '1/0' |
| r2_sun | Shadows from the sun | 'on/off' or '1/0' |
| r2_sun_depth_far_bias |  |  |
| r2_sun_depth_far_scale |  |  |
| r2_sun_depth_near_bias |  |  |
| r2_sun_depth_near_scale |  |  |
| r2_sun_details | Shadows of grass and other detailed objects | 'on/off' or '1/0' |
| r2_sun_far |  |  |
| r2_sun_focus | Focus of sun shadows | 'on/off' or '1/0' |
| r2_sun_lumscale | Sun light brightness | 0.0 - 3.0 |
| r2_sun_lumscale_amb | Ambient light brightness | 0.0 - 3.0 |
| r2_sun_lumscale_hemi | Sky light brightness | 0.0 - 3.0 |
| r2_sun_near | The location of the sun from the earth |  |
| r2_sun_near_border |  |  |
| r2_sun_quality | Shadow filter quality | st_opt_low/st_opt_medium/st_opt_high/st_opt_ultra/st_opt_extreme |
| r2_sun_tsm | Clarity of sun shadows |  |
| r2_sun_tsm_bias |  |  |
| r2_sun_tsm_proj |  |  |
| r2_sunshafts_min | Min. sun rays intensity | 0.0 - 0.5 |
| r2_sunshafts_mode | Sun rays mode | off/volumetric/screen_space/combined |
| r2_sunshafts_quality | Quality of the sun rays | st_opt_low/st_opt_medium/st_opt_high |
| r2_sunshafts_value | Sun rays intensity | 0.0 - 2.0 |
| r2_terrain_z_prepass |  |  |
| r2_tnmp_a |  | 0.0 - 20.0 |
| r2_tnmp_b |  | 0.0 - 20.0 |
| r2_tnmp_c |  | 0.0 - 20.0 |
| r2_tnmp_d |  | 0.0 - 20.0 |
| r2_tnmp_e |  | 0.0 - 20.0 |
| r2_tnmp_exposure | Tonemap exposure | 0.0 - 20.0 |
| r2_tnmp_f |  | 0.0 - 20.0 |
| r2_tnmp_gamma | Tonemap gamma | 0.0 - 20.0 |
| r2_tnmp_onoff | Enables custom tonemapping (based on Uncharted 2 curve) | 0.0 - 1.0 |
| r2_tnmp_w | White point | 0.0 - 20.0 |
| r2_tonemap | Enables eye-adaptation | 'on/off' or '1/0' |
| r2_tonemap_adaptation | Eye-adaptation speed | 0.0 - 10.0 |
| r2_tonemap_amount |  |  |
| r2_tonemap_lowlum | Controls the tone mapping effect on dark locations |  |
| r2_tonemap_middlegray | Controls the overall appearance of the HDR effect |  |
| r2_volumetric_lights | Volumetric light | 'on/off' or '1/0' |
| r2_wait_sleep |  |  |
| r2_water_reflections |  |  |
| r2_zfill |  |  |
| r2_zfill_depth |  |  |
| r2em |  |  |

##### R3 (DX10)

| Сommand | Command description | Command's argument |
---|---|---|
| r3_dynamic_wet_surfaces | Wet surfaces | 'on/off' or '1/0' |
| r3_dynamic_wet_surfaces_far | Max. rendering distance of the effect | 30 - 100 |
| r3_dynamic_wet_surfaces_near | Min. rendering distance of the effect | 10 - 70 |
| r3_dynamic_wet_surfaces_sm_res | Resolution of rain 'shadowmap' | 64 - 2048 |
| r3_minmax_sm |  |  |
| r3_msaa | Multisample Anti-aliasing | st_opt_off/2x/4x/8x |
| r3_msaa_alphatest | Alpha-test used with MSAA | st_opt_off/st_opt_atest_msaa_dx10_0/st_opt_atest_msaa_dx10_1 |
| r3_use_dx10_1 | Enables use of DX10.1 | 'on/off' or '1/0' |
| r3_volumetric_smoke | Volumetric smoke | 'on/off' or '1/0' |

##### R4 (DX11)

| Сommand | Command description | Command's argument |
---|---|---|
| r4_enable_tessellation | Tessellation | 'on/off' or '1/0' |
| r4_wireframe | Displays the wireframe of dynamic models (not working) | 'on/off' or '1/0' |

#### Brightness-Contrast-Gamma

| Сommand | Command description | Command's argument |
---|---|---|
| rs_c_brightness | Brightness | 0.500 - 1.500 |
| rs_c_contrast | Contrast | 0.500 - 1.500 |
| rs_c_gamma | Gamma (not working) | 0.500 - 1.500 |

#### Video

| Сommand | Command description | Command's argument |
---|---|---|
| vid_mode | Screen resolution | 800x600/1024x768/1280x720/1280x1024/1366x768/1600x900/1680x1050/1920x1080 |
| vid_restart | Reboot the video engine | - |

#### Textures

| Сommand | Command description | Command's argument |
---|---|---|
| texture_lod | Texture detailing | 0 - 4 |

### AI

| Сommand | Command description | Command's argument |
---|---|---|
| ai_aim_max_angle | The maximum angle at which the angular velocity of the character when aiming is calculated by the formula |  |
| ai_aim_min_angle | The minimum angle at which the angular velocity of the character when aiming is calculated by the formula |  |
| ai_aim_min_speed | Minimum angular velocity of the character when aiming at a target |  |
| ai_aim_predict_time | Time of the character's prediction of a change in target position |  |
| ai_aim_use_smooth_aim |  |  |
| ai_die_in_anomaly | Enables NPCs to die in anomalies | 'on/off' or '1/0' |
| ai_use_old_vision | Includes the old model of virtual character vision, in which random points on the surface of an ellipsoid inscribed into an axially oriented rectangular parallelepiped described around the object were taken to determine the visibility of the object. | 'on/off' or '1/0' |
| ai_use_torch_dynamic_lights | Enables the use of flashlights by non-player characters (NPCs) | 'on/off' or '1/0' |