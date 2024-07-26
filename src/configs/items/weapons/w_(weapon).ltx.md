# w_*Weapon*.ltx Config File

___

## About

Configuration parameters for weapons

___

Parameters of the weapon are set for each sample in a separate *.ltx file, and consist of two sections (Each contains its own set of parameters):

- [wpn_name] - Main, it sets most of the parameters (for NPC and 3rd-person view).

- [wpn_name_hud] - Secondary, where you set first-person view parameters only.

___

## Parameters of the world model

[wpn_name]: Here you can set additional characteristics of weapon from sections for example:

- identity_immunities - a section that contains damage parameters for different game difficulty levels
- weapon_probability
- default_weapon_params

### General parameters

<details>
    <summary>General parameters</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| GroupControlSection |  | spawn_group |  |
| $npc | use NPC of this weapon | on | on (Yes) - off (No) |
| $prefetch | preload queue | 8 |  |
| $spawn | the Weapon Directory in the Level Editor | "weapons\ak-74" | "weapons\ *wpn_name*" |
| scheduled | online/offline switch; Works only for "live" objects with AI | off | on (Yes) - off (No) |
| cform | parameter for dynamic objects; necessary for correct creation of the skeleton model | skeleton |  |
| parent_section |  | wpn_akm |  |
| class | engine weapon class | WP_AK74 | WP_BINOC <br>WP_KNIFE <br>WP_BM16 <br>WP_GROZA <br>WP_SVD <br>WP_AK74 <br>WP_LR300 <br>WP_HPSA <br>WP_PM <br>WP_RG6 <br>WP_RPG7 <br>WP_SHOTG <br>WP_ASHTG <br>WP_MAGAZ <br>WP_SVU <br>WP_USP45 <br>WP_VAL <br>WP_VINT <br>WP_WALTH W_STMGUN |
| animation_slot | animation slot number | 2 | 1 - pistol <br>2 - automatic rifle <br>3 - rifle, shotgun <br>4 - RPG <br>5 - knife <br>7 - bolt, grenade <br>8 - submachine gun with integrated underbarrel grenade launcher <br>9 - Shotgun <br>10 - Drum Gun <br>13 - binoculars |
| hand_dependence | determines whether the weapon will be taken with one or two hands | 1 | 0 - no hands <br>1 - one hand <br>2 - two hands |
| single_handed | held with one hand | 0 | 0 - no <br>1 - yes |
| default_to_ruck | whether the weapon will be moved to the backpack instead of the slot when picked up | false | true (yes) <br>false (no) |
| sprint_allowed | this line means that you can run with the weapon | true | true (Yes) <br>false (No) |
| kind | The type of item to group into the appropriate section in the [Item Spawner](../../../modding-tools/in-game-editors/item-spawner.md) | w_rifle | w_rifle<br> w_misc<br> w_explosive<br> w_melee<br> w_pistol<br> w_smg<br> w_shotgun<br> w_sniper |
| cost | base price | 28780 | Specified in numbers |
| hud | section with parameters for the [hud model of the weapon](../../../terminology/terminology.md#object_hud) | wpn_akm_hud | Specifies the name of the section |
| visual | reference to the [world model](../../../terminology/terminology.md#object_world) | dynamics\weapons\wpn_akm\wpn_akm.ogf | Specifies the path to the file |

</details>

### Position and Orientation of Weapons

<details>
    <summary>Position and Orientation of Weapons</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| position | position of the weapon in the hands of the NPC and the headspace when viewed from the 3rd person | -0.026, -0.175, 0.0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| orientation | how the weapon is rotated in the hands of the NPC and headgear, in the 3rd person view | 0, 0, 0 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| fire_point | coordinates of the fire particle from the shot, in the 3rd person view | 0, 0.218, 0.656 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| fire_point2 | Coordinates of the fire particle from the shot, when viewed from the 3rd person from the holster | 0, 0.161, 0.583 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strap_bone0 | the name of the first NPC model bone where the weapon is located when hidden | bip01_spine2 | Bone Name |
| strap_bone1 | The name of the second NPC model bone that holds the weapon when hidden | bip01_spine1 | Bone Name |
| strap_position | the position of the weapon on the NPC's back, when viewed from the third person | -0.26, -0.11, 0.25 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strap_orientation | how the weapon is rotated on the NPC's back in 3rd person view | -15, -9, 110 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

### Weapon parameters in inventory

<details>
    <summary>Weapon parameters in inventory</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|:---:|---|
| icons_texture | texture where the weapon icon will be taken from | ui\ui_icon_spas |  |
| inv_grid_height | icon height | 2 | number of 50x50 pixels cells |
| inv_grid_width | icon width | 5 | number of 50x50 pixels cells |
| inv_grid_x | the coordinate of the upper left corner of the icon on a 50x50 pixel grid on the X axis | 35 | number of cells indented to the right |
| inv_grid_y | The coordinate of the upper left corner of the icon on a 50x50 pixel grid on the Y axis | 0 | number of cells indenting downward |
| inv_name | The name in the inventory | st_wpn_akm | Section name, in *.xml files included in the string_table section of `gamedata\configs\text\*localization*\st_items_weapons.xml` |
| inv_name_short | short name in the inventory | st_wpn_akm | Section name, in *.xml files included in the string_table section of `gamedata\configs\text\*localization*\st_items_weapons.xml` |
| inv_weight | the inventory weight of the unloaded weapon | 3.3 | The number is given in kilograms |
| description | Description in inventory | st_wpn_akm_descr | Section name, in *.xml files included in the string_table section of `gamedata\configs\text\*localization*\st_items_weapons.xml` |
| slot | Inventory slot number | 2 | 0 - knives<br>1 - pistols<br>2 - shotguns, machine guns, rifles, grenade launchers<br>3 - grenades (may be crashing)<br>4 - binoculars<br>5 - bolts (may be crashing)<br>6 - outfits (may be crashing) |

</details>

### Parameters for multiplayer (there is no multiplayer in the game, so the parameters are useless)

<details>
    <summary>Parameters for multiplayer</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| weapon_class | is used exclusively for the purchase menu in multiplayer | shotgun<br> assault_rifle<br> sniper_rifle<br> heavy_weapon |
| startup_ammo | startup amount of ammo in multiplayer | The number of rounds of ammunition is indicated |
| kill_msg_x | the coordinate of the upper left corner of the kill icon on the X axis |  |
| kill_msg_y | top-left corner coordinate of the kill icon on the Y axis | |
| kill_msg_width | kill icon width | Specified in pixels |
| kill_msg_height | kill icon height | Specified in pixels |

</details>

### Particle parameters from the shot

<details>
    <summary>Particle parameters from the shot</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| flame_particles | gunshot fire particle | weapons\generic_weapon05 | Specifies the path to the file |
| smoke_particles | shot smoke particle | weapons\generic_shoot_00 | Specifies the path to the file |
| light_disabled | flash off when shot | false | true (Yes) - false (No) |
| light_color | Parameters for changing the color of the shot fire particle | 0.6, 0.5, 0.3 | RGB Color |
| light_range | the radius of the fire partition from the shot | 5 |  |
| light_time | time of light playback when shot | 0.2 |  |
| light_var_color | Parameter of variation of the color of the fire particle from the shot | 0.05 | RGB Color |
| light_var_range | varies the radius of the fire particle from the shot | 0.5 | Value 60.0 = 10 seconds |

</details>

### Parameters of the upgrades/repairs

<details>
    <summary>Particle parameters from the shot</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| upgrades |  | up_gr_firstab_akm, up_gr_seconab_akm, up_gr_thirdab_akm, up_gr_fourtab_akm, up_gr_fifthab_akm, up_gr_fifthcd_akm |  |
| installed_upgrades | installed upgrades |  |  |
| upgrade_scheme | upgrade_scheme | upgrade_scheme_ak74 |  |
| repair_type | item type for repair tools | rifle_7 | pistol<br> shotgun<br> rifle_5<br> rifle_7 |  |

</details>

#### Icons of the upgrades

<details>
    <summary>Icons of the upgrades</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| upgr_icon_x | X coordinate of the upper left corner of the weapon icon in the upgrade window | 300 | Specified in pixels |
| upgr_icon_y | Y coordinate of the upper left corner of the weapon icon in the upgrade window | 0 | Specified in pixels |
| upgr_icon_width | icon width in the upgrade window | 300 | Specified in pixels |
| upgr_icon_height | icon height in the upgrade window | 100 | Specified in pixels |

</details>

### Parameters of the weapon itself

<details>
    <summary>Parameters of the weapon itself</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| fire_modes | firing modes fire modes | 1, -1 | -1 - automatic<br> 1 - single<br> 2 - two-shot<br> 3 - three-shot |
| wallmark_section | section of wallmarks that appear on the ground/geometry |  | Section name (by default it is in the system.ltx file) |
| wm_size | texture size of the mark left on the ground after the explosion |  | The bigger the number, the bigger the mark |
| allow_inertion | whether inertia is enabled |  | true (Yes) - false (No) |
| ph_mass | the weight of the unloaded weapon for the physical engine | 4 | The number is given in kilograms |

</details>

#### Shot parameters

<details>
    <summary>Shot parameters</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| hit_impulse | The force that the flying bullet transmits to the victim affects the ragdoll-body behavior | 34 | The more, the farther the body will fly away |
| hit_power | damage dealt | 0.58, 0.58, 0.58, 0.58 | Specifies a value for the level of difficulty in descending order, i.e. from master to beginner |
| hit_type | Type of damage inflicted; used to calculate damage; armor suits (and others) are set to be immune to each type of damage separately | fire_wound | fire_wound - fire damage<br> wound - stabbing<br> wound_2 - cutting<br> explosion - shrapnel damage |
| fire_distance | effective range of the shot after which the bullet disappears | 900 | Specified in meters |
| bullet_speed | initial bullet speed | 715 | Specified in meters per second |
| rpm | Shooting speed | 600 | Specifies the number of shots per minute |
| rpm_empty_click | Misfire/empty magazine sound frequency | 200 |  |
| fire_dispersion_base | The dispersion (angle of the bullets) introduced by the weapon; affects accuracy; added to the disp_base in actor.ltx | 0.45 | Specified in degrees |
| PDM_disp_accel_factor | Multiplier by which fire_dispersion_base is multiplied when the protagonist runs | 2.5 | Specified in numbers |
| PDM_disp_base | Multiplier by which fire_dispersion_base is multiplied when the protagonist is standing at full height | 1.15 | Specified in numbers |
| PDM_disp_crouch | Multiplier by which fire_dispersion_base is multiplied when the protagonist goes crouched | 1.0 | Specified in numbers |
| PDM_disp_crouch_no_acc | Multiplier by which fire_dispersion_base is multiplied when the protagonist stands still while ducking | 1.0 | Specified in numbers |
| PDM_disp_vel_factor | Multiplier by which fire_dispersion_base is multiplied when the protagonist spins a weapon or runs | 2.5 | Specified in numbers |

</details>

#### Ammo parameters

<details>
    <summary>Ammo parameters</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| ammo_class | ammo type for this weapon | ammo_7.62x39_fmj, ammo_7.62x39_fmj_bad, ammo_7.62x39_fmj_verybad, ammo_7.62x39_ap, ammo_7.62x39_ap_bad, ammo_7.62x39_ap_verybad | The names of the ammunition sections are indicated, separated by commas |
| ammo_elapsed | magazine capacity at the moment of spawning | 30 | indicate the value equal to ammo_mag_size |
| ammo_mag_size | ammunition capacity | 30 | The number of bullets is indicated |

</details>

### Particle shell parameters

<details>
    <summary>Particle shell parameters</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| shell_point | coordinates of the shell partylock, when viewed from the 3rd person | 0, 0.216, 0.174 | x - left/+right, y + up/down, z - forward/+backward |
| shell_dir | how the shell particle is rotated when viewed from the 3rd person | 0, 0, 0.4 | x - left/+right, y + up/down, z - forward/+backward |
| shell_particles | shell particle | weapons\762x39 | Particles file path relative to particles.xr |

</details>

### Aiming parameters

<details>
    <summary>Aiming parameters</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| scopes | Name of the gun sight section | 1p29, kobra, ps01 | Sections to models with these sights are indicated |
| scope_status | Scope status | 0 | 0 - not available<br> 1 - built-in<br> 2 - removable |
| scope_zoom_factor | scope magnification | 0 | For the sight specified in the parameter scopes, the value can already be more |

</details>

### Parameters of the silencer

<details>
    <summary>Parameters of the silencer</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| silencer_name | Name of the silencer section of the gun | wpn_sil_pbs1 |  |
| silencer_status | silencer status | 2 | 0 - not available<br> 1 - built-in<br> 2 - removable |
| silencer_light_color | Parameters for changing the color of the particle of the smoke from the shot from the weapon with silencer | 0.6, 0.5, 0.3 |  |
| silencer_light_range | the radius of the particle of the haze when firing | 0.01 |  |
| silencer_light_time | light time | 0.2 |  |
| silencer_light_var_color | Parameter for varying the color of the particle of smoke from a shot from a weapon with silencer | 0.05 |  |
| silencer_light_var_range | variation of the radius of the particle of the smoke from the shot from the weapon with silencer | 0.5 |  |
| silencer_smoke_particles | particle smoke effect for a shot with silencer | weapons\generic_shoot_00 | Particles file path relative to particles.xr |
| silencer_x | the coordinates of the silencer icon superimposed on top of the weapon icon on the X coordinate | 235 | Specified in numbers |
| silencer_y | the coordinates of the silencer icon superimposed over the weapon icon in Y coordinate | 10 | Specified in numbers |

</details>

### Parameters of the underbarrel grenade launcher

<details>
    <summary>Parameters of the underbarrel grenade launcher</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| grenade_class | type of underbarrel grenades | ammo_vog-25, ammo_vog-25_bad, ammo_vog-25_verybad |  |
| grenade_launcher_name | name of the section of the underbarrel grenade launcher | wpn_addon_grenade_launcher |  |
| grenade_launcher_status | the status of the underbarrel grenade launcher | 0 | 0 - not available<br> 1 - built-in<br> 2 - removable |
| launch_speed | launch speed of the underbarrel grenade launcher | 0 |  |
| grenade_flame_particles | particle of the fire from the underbarrel grenade launcher | weapons\generic_weapon01 | Particles file path relative to particles.xr |
| grenade_launcher_x | grenade launcher icon coordinates superimposed over the weapon icon on the X coordinate | 127 | Specified in numbers |
| grenade_launcher_y | grenade_launcher icon coordinates superimposed over the weapon icon on the Y coordinate | 18 | Specified in numbers |

</details>

### Aiming parameters

<details>
    <summary>Aiming parameters</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions | Extra |
---|---|---|---|
| use_aim_bullet | A game mechanic in which the first bullet fired after drawing and aiming the weapon does more damage to certain limbs | false | true (Yes) - false (No) | Значения умножения урона для конечностей можно найти в файле |
| time_to_aim | Time during which the use_aim_bullet parameter can be activated when aiming and drawing a weapon | 0.0 | Specified in seconds |  |
| zoom_dof |  | 0.5, 1.0, 180 |  |  |
| zoom_enabled | the ability to aim | true | true (Yes) - false (No) |  |
| zoom_rotate_time | the speed at which the weapon goes to the "aiming" state, in seconds | 0.25 | Specified in seconds |  |
| reload_dof |  | 0.0, 0.5, 5, 2 |  |  |
| control_inertion_factor | Usability; aka inertia; affects how easily the weapon can be controlled with the mouse | 1.0f |  |  |
| crosshair_inertion |  | 5.8 |  |  |

</details>

### Misfire parameters

<details>
    <summary>Misfire parameters</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| misfire_probability | misfire_probability | maximum wear probability | 0.005 | 0 - never jams<br> 1 - always jams |
| misfire_start_condition | the wear at which there is a chance of misfire | 0.7 |  |
| misfire_start_prob | misfire chance of misfire when wear is greater than misfireStartCondition | 0.007 |  |
| misfire_end_condition | the chance of misfire when worn out is greater than misfireEndCondition | 0.05 |  |
| misfire_end_prob | wear rate at which the chance of misfire becomes constant | 0.11 |  |

</details>

### Wear parameters

<details>
    <summary>Wear parameters</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| condition_queue_shot_dec | condition_shot_dec | 0.0008 |  |
| condition_shot_dec | increase wear on each shot | 0.0008 | 0 - no wear<br> 1 - maximum wear |
| fire_dispersion_condition_factor | the effect of wear on the variance of the weapon as a percentage | 0.001 |  |

</details>

### Сamera parameters

<details>
    <summary>Сamera parameters</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| cam_return | Whether to return the camera to its original position | 0 |  |
| cam_relax_speed | camera return speed | 10 |  |
| cam_dispersion | angle increase with each shot | 0.762 |  |
| cam_dispersion_frac | barrel will rise by cam_dispersion*cam_dispersion_frac +- cam_dispersion*(1-cam_dispersion_frac) | 1.0 |  |
| cam_dispersion_inc | increase cam_dispersion with each shot | 0.0725 |  |
| cam_max_angle | maximum vertical recoil angle | 50.0 |  |
| cam_max_angle_horz | maximum horizontal recoil angle | 50.0 |  |
| cam_step_angle_horz | barrel shift horizontally during firing | 1.38 |  |

</details>

### Parameters of the camera when aiming

<details>
    <summary>Parameters of the camera when aiming</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| zoom_cam_relax_speed | similar to the return speed of the camera in the aiming mode | 10 |  |
| zoom_cam_dispersion | Similar to cam_dispersion in the aiming mode | 0.732 |  |
| zoom_cam_dispersion_frac | Similar to cam_dispersion_frac in aiming mode | 0.7 |  |
| zoom_cam_dispersion_inc | Similar to cam_dispersion_inc in aiming mode | 0.0625 |  |
| zoom_cam_max_angle | Similar to cam_max_angle in aiming mode | 50.0 |  |
| zoom_cam_max_angle_horz | Similar to cam_max_angle_horz in aiming mode | 50.0 |  |
| zoom_cam_step_angle_horz | Similar to cam_step_angle_horz in aiming mode | 1.28 |  |

</details>

### Parameters for AI

<details>
    <summary>Parameters for AI</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| ef_main_weapon_type | NPC weapon type | 2 | 0 - pistol<br> 1 -shotgun<br> 2 - assault rifle<br> 3 - rifle<br> 4 - grenade launcher<br> |
| ef_weapon_type | NPC fire mode | 8 | 5 - fire single shots<br> 6 - fire in bursts<br> 7 - aim and fire single shots<br> 8 - aim and fire (sniper)<br> 9 - grenade launcher |
| cam_relax_speed_ai |  | 360 |  |
| zoom_cam_relax_speed_ai |  | 360 |  |
| holder_fov_modifier | NPC angle of view multiplier (eye_fov) with this weapon | 1.0 | Specified in numbers |
| holder_range_modifier | NPC range multiplier (eye_range) with this weapon | 1.0 | Specified in numbers |
| min_radius |  |  |  |
| max_radius |  |  |  |

</details>

___

## Weapon HUD parameters

<details>
    <summary>General weapon HUD parameters</summary>

[wpn_*weapon name*_hud]:

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| item_visual | Weapon [hud model](../../../terminology/terminology.md#object_hud) | anomaly_weapons\wpn_akm\wpn_akm_hud.ogf | File path relative to the gamedata\meshes folder |
| attach_place_idx |  | 0 |  |
| zoom_hide_crosshair | whether to remove the crosshair when aiming | true | true (Yes) - false (No) |

</details>

### Strafe/Inertion

<details>
    <summary>Strafe/Inertion</summary>

> Strafe works when moving the character (WASD)

> Inertia works by moving the mouse

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| strafe_enabled | Enabling Strafe | true | true (Yes) - false (No) |
| strafe_aim_enabled | Enabling Aim Strafe | true | true (Yes) - false (No) |
| strafe_hud_offset_rot | HUD rotation | 1,-0.75,4.5 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| strafe_hud_offset_pos | HUD position | 0,0.002,0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strafe_hud_offset_rot_16x9 | HUD rotation 16x9 | 1,-1,5 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| strafe_hud_offset_pos_16x9 | HUD position 16x9 | 0,0.0023,0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strafe_aim_hud_offset_rot | HUD rotation while aiming | 0,-0.3,1.25 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| strafe_aim_hud_offset_pos | HUD position while aiming | 0,0.002,0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strafe_aim_hud_offset_rot_16x9 | HUD rotation while aiming 16x9 | 0,-0.5,1.75 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| strafe_aim_hud_offset_pos_16x9 | HUD position while aiming 16x9 | 0,0.0023,0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strafe_transition_time | time to return to the original weapon position (the longer the time, the slower the return) | 0.75 |  |
| strafe_aim_transition_time | time to return to the original weapon position (the longer the time, the slower the return) | 0.35 |  |
| strafe_cam_limit_aim_factor |  | 0.9 |  |
| strafe_cam_min_angle |  | 0 |  |
| inertion_min_angle_aim |  | 0 |  |
| inertion_offset_LRUD_aim | HUD inertion when aim | 0.011, 0.011, 0.01, 0.005 | L - (`-`) left / (`+`) right<br> R - (`-`) right / (`+`) left<br> U - (`-`) up / (`+`) down<br> D - (`-`) down / (`+`) up |

</details>

### Visual Recoil

<details>
    <summary>Visual Recoil</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| shooting_hud_effect | Enable Visual Recoil | true | true (Yes) - false (No) |
| shooting_max_LRUD | Maximum LRUD position when firing | 0.005,0.005,0.005,0 | L - (`-`) left / (`+`) right<br> R - (`-`) right / (`+`) left<br> U - (`-`) up / (`+`) down<br> D - (`-`) down / (`+`) up |
| shooting_max_LRUD_aim | Maximum LRUD position when firing while aim | 0.0025,0.0025,0,0 | L - (`-`) left / (`+`) right<br> R - (`-`) right / (`+`) left<br> U - (`-`) up / (`+`) down<br> D - (`-`) down / (`+`) up |
| shooting_backward_offset |  | 0.02,0.015 |  |
| shooting_ret_speed | time to return to the original weapon position (the longer the time, the slower the return) | 7.5 |  |
| shooting_ret_aim_speed | time to return to the original weapon position (the longer the time, the slower the return) | 15 |  |
| shooting_min_LRUD_power |  | 0.01 |  |

</details>

### HUD Movement Layers

<details>
    <summary>HUD Movement Layers</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| movement_layer_0 | aim_walk | movement\aim_walk.anm | path and animation name |
| movement_layer_1 | aim_crouch | movement\aim_walk.anm | path and animation name |
| movement_layer_2 | crouch | movement\newwalk.anm | path and animation name |
| movement_layer_3 | walk | movement\newwalk.anm | path and animation name |
| movement_layer_4 | run | movement\newwalk.anm | path and animation name |
| movement_layer_5 | sprint | movement\newrunreload.anm | path and animation name |

</details>

### Empty Click Anm

<details>
    <summary>Empty Click Anm</summary>

> Weapon animation settings when attempting to shoot with an empty magazine (camera animation is used)

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| empty_click_anm | Weapon animation when attempting to shoot with an empty magazine (camera animation is used) | script\misfire.anm | path and animation name |
| empty_click_anm_speed | Animation speed | 2 | - |
| empty_click_anm_power | Animation power | 1 | - |

</details>

### Parameters of the weapon position

<details>
    <summary>Parameters of the weapon position</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| item_position | weapon position in relation to the arms | 0, 0, 0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| item_orientation | weapon orientation in relation to the arms | 0, 0, 0 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

#### HUD parameters with weapon

<details>
    <summary>HUD parameters with weapon</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| hands_position | Hands and weapon position | -0.072, -0.15, 0.1 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| hands_position_16x9 | Hands and weapon position for 16x9 monitors | -0.072, -0.15, 0.1 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| hands_orientation | direction (orientation) of the hands and arms | 0.55, 2.39, 0.15 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| hands_orientation_16x9 | direction (orientation) of arms and weapons for 16x9 monitors | 0.55, 2.39, 0.15 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

### HUD parameters when aiming

<details>
    <summary>HUD parameters when aiming</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| aim_hud_offset_pos | aiming shift | -0.0818, 0.05494, -0.25 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| aim_hud_offset_pos_16x9 | aiming hand shift for 16x9 monitors | -0.0818, 0.05494, -0.25 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| aim_hud_offset_rot | orientation of the arms with the weapon when aiming | 0.0407, 0.00886, -0.00495 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| aim_hud_offset_rot_16x9 | aiming hand orientation for 16x9 monitors | 0.0407, 0.00886, -0.00495 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

### HUD parameters when UGL is active

<details>
    <summary>HUD parameters when UGL is active</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| gl_hud_offset_pos | gun arm displacement when aiming from the holster | -0.0491, 0.005, -0.155 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| gl_hud_offset_pos_16x9 | gun hand offset when aiming from the arming cradle for 16x9 monitors | -0.0491, 0.005, -0.155 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| gl_hud_offset_rot | the orientation of the arms with the weapon when aiming from the arming cube | -0.067, 0.0063, -0.02 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| gl_hud_offset_rot_16x9 | orientation of the arms with weapon when aiming from the arming cube for 16x9 monitors | -0.067, 0.0063, -0.02 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

### HUD parameters when weapon lowered

<details>
    <summary>HUD parameters when weapon lowered</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| safemode_anm | Weapon animation when weapon goes to safe mode (camera animation is used) | script\to_lower.anm | path and animation name |
| safemode_anm_speed |  | 1.2 |  |
| safemode_anm_power |  | 1 |  |
| safemode_anm2 | Weapon animation when weapon comes out of safe mode (camera animation is used) | script\from_lower.anm | path and animation name |
| safemode_anm_speed2 |  | 1.3 |  |
| safemode_anm_power2 |  | 0.6 |  |
| lowered_hud_offset_pos | Position of arms and hands when the weapon is lowered | 0, 0, 0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| lowered_hud_offset_rot | Rotation of arms and hands when the weapon is lowered | 0, 0, 0 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| lowered_hud_offset_pos_16x9 | Position of arms and hands when the weapon is lowered | 0, 0, 0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| lowered_hud_offset_rot_16x9 | Rotation of arms and hands when the weapon is lowered | 0, 0, 0 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

### HUD parameters when leaning

<details>
    <summary>HUD parameters when leaning</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| lean_hud_offset_pos | Weapon and arm positions when the character is leaning | 0, 0, 0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| lean_hud_offset_rot | Weapon and arm rotation when the character is leaning | 0, 0, 0 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| lean_hud_offset_pos_16x9 | Weapon and arm positions when the character is leaning | 0, 0, 0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| lean_hud_offset_rot_16x9 | Weapon and arm rotation when the character is leaning | 0, 0, 0 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

### Parameters of sounds

You can read about the parameters of the sounds [here](weapon_sounds.ltx.md)

### HUD parameters of the shells sprite

<details>
    <summary>HUD parameters of the shells sprite</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| shell_bone | bone which will be considered the origin of coordinates for the shell sprite in 1st person view | wpn_body | Bone Name |
| shell_dir | the offset parameter of the shells after departure, in 1st person view | 0, 1, 0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| shell_point | Coordinates of the bullets ejection point in 1st person view | 0, 0.064, 0.19 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |

</details>

### HUD parameters of particle sprite

<details>
    <summary>HUD parameters of particle sprite</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| fire_bone | the name of the fire particle bone of the weapon hud-model | wpn_body | Bone Name |
| fire_bone2 | UGL fire particle bone | wpn_body | Bone Name |
| fire_point | coordinates of the fire particle, when viewed from the 1st person | 0, 0.051841, 0.535482 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| fire_point2 | Coordinates of the fire particles, when viewed from the 1st person when firing the underbarrel grenade launcher | 0, -0.011, 0.553 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |

</details>

### Camera

<details>
    <summary>Camera</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| freeelook_z_offset_mul | Сamera displacement along the z-axis when the camera moves freely | 0.4 | Z - (`-`) forward / (`+`) backward |

</details>


!!! Different engine classes have different animation parameters for different engine classes. Need to write !!!

### HUD animations parameters

<details>
    <summary>Idle animations</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| anm_idle | Idle animation |  |
| anm_idle_empty | Idle animation of an empty magazine |  |
| anm_idle_aim | Idle animation in aiming mode |  |
| anm_idle_g | Idle animation of a grenade launcher |  |
| anm_idle_g_aim | grenade launcher targeting animation |  |
| anm_idle_w_gl | Idle animation with grenade launcher attached to the weapon |  |
| anm_idle_w_gl_aim | Idle animation with a grenade launcher attached to the weapon when aiming |  |

</details>

<details>
    <summary>Motion animations</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| anm_idle_aim_moving | animation in the aiming mode when moving | Animation Name |
| anm_idle_aim_moving_crouch | Animation in the aiming mode when moving in a crouch | Animation Name |
| anm_idle_moving | motion animation | Animation Name |
| anm_idle_moving_empty | motion animation with an empty magazine | Animation Name |
| anm_idle_moving_crouch_g_aim | crouch walking animation with a grenade launcher attached to the weapon | Animation Name |
| anm_idle_moving_crouch_w_gl_aim | animate walking while crouching with a grenade launcher attached to the weapon while aiming | Animation Name |
| anm_idle_moving_g |  | Animation Name |
| anm_idle_moving_g_aim |  | Animation Name |
| anm_idle_moving_w_gl | the walking animation with a grenade launcher attached to the weapon | Animation Name |
| anm_idle_moving_w_gl_aim | animate walking with a grenade launcher attached to the weapon while aiming | Animation Name |
| anm_idle_sprint | Running animation | Animation Name |
| anm_idle_sprint_empty | Running animation with an empty magazine | Animation Name |
| anm_idle_sprint_g | Animation Name |
| anm_idle_sprint_w_gl | running animation with a grenade launcher attached | Animation Name |
| anm_hide | hiding animation | Animation Name |
| anm_hide_empty | Hiding animation with an empty magazine | Animation Name |
| anm_hide_g| | Animation Name |
| anm_hide_w_gl | a hiding animation with an attached grenade launcher | Animation Name |
| anm_show | show animation | Animation Name |
| anm_show_empty | Show animation with an empty magazine | Animation Name |
| anm_show_g |  | Animation Name |
| anm_show_w_gl | show animation of pulling out a weapon with a grenade launcher attached | Animation Name |
| anm_bore | Boredom animation | Animation Name |

</details>

<details>
    <summary>Weapon animations</summary>

| Parameter name | Parameter description | Example value | Possible parameter values and their descriptions |
---|---|---|---|
| anm_reload | Reloading (When there is still a bullet in the chamber) | Animation Name |
| anm_reload_empty | Reloading | Animation Name |
| anm_reload_g | grenade launcher reload  | Animation Name |
| anm_reload_w_gl | reloading of the weapon with a grenade launcher attached | Animation Name |
| anm_shots | Shot animation | Animation Name |
| anm_shot_l | Last shot animation | Animation Name |
| anm_shots_g | underbarrel grenade launcher shot animation | Animation Name |
| anm_shots_w_gl | underbarrel grenade launcher shot animation | Animation Name |
| anm_switch | Animation of switching to alternate firing mode | Animation Name |
| anm_switch_g | Animation of switching to underbarrel grenade launcher firing mode | Animation Name |

</details>

## Sources

[Source](https://modfaq.ru/%D0%9F%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B_%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D1%8F)
