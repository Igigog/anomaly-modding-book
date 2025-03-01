# w_*Weapon*.ltx World Config File

___

## About

Configuration parameters for weapons

___

Parameters of the weapon are set for each sample in a separate *.ltx file, and consist of two sections (Each contains its own set of parameters):

- [wpn_name] - Main, it sets most of the parameters (for NPC and 3rd-person view).

- [wpn_name_hud] - Secondary, where you set first-person view parameters only.

___

## World Model Parameters

[wpn_name]: Here you can set additional characteristics of weapon from sections for example:

- identity_immunities - a section that contains damage parameters for different game difficulty levels
- weapon_probability
- default_weapon_params

### General Parameters

<details>
    <summary>General Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| GroupControlSection |  | spawn_group |  |  |
| $npc | use NPC of this weapon | on |  | true - 1 - on (Yes)<br> false - 0 - off (No) |
| $prefetch | Preload queue | 8 |  |  |
| $spawn | Weapon Directory in the Level Editor | "weapons\ak-74" | "weapons\ *wpn_name*" |  |
| scheduled | online/offline switch; Works only for "live" objects with AI | off |  | true - 1 - on (Yes)<br> false - 0 - off (No) |
| cform | Skeleton model | skeleton |  | skeleton <br>sphear box |
| parent_section |  | wpn_akm |  |  |
| class | Engine weapon class | WP_AK74 |  | WP_BINOC <br>WP_KNIFE <br>WP_BM16 <br>WP_GROZA <br>WP_SVD <br>WP_AK74 <br>WP_LR300 <br>WP_HPSA <br>WP_PM <br>WP_RG6 <br>WP_RPG7 <br>WP_SHOTG <br>WP_ASHTG <br>WP_MAGAZ <br>WP_SVU <br>WP_USP45 <br>WP_VAL <br>WP_VINT <br>WP_WALTH W_STMGUN |
| animation_slot | Animation slot number | 2 |  | 1 - pistol <br>2 - automatic rifle <br>3 - rifle, shotgun <br>4 - RPG <br>5 - knife <br>7 - bolt, grenade <br>8 - submachine gun with integrated underbarrel grenade launcher <br>9 - Shotgun <br>10 - Drum Gun <br>13 - binoculars |
| hand_dependence | determines whether the weapon will be taken with one or two hands | 1 |  | 0 - no hands <br>1 - one hand <br>2 - two hands |
| single_handed | held with one hand | 0 |  | true - 1 - on (Yes)<br> false - 0 - off (No) |
| default_to_ruck | whether the weapon will be moved to the backpack instead of the slot when picked up | false |  | true - 1 - on (Yes)<br> false - 0 - off (No) |
| sprint_allowed | this line means that you can run with the weapon | true |  | true - 1 - on (Yes)<br> false - 0 - off (No) |
| kind | The type of item to group into the appropriate section in the [Item Spawner](../../../../tutorials/modding-tools/in-game-editors/item-spawner.md) | w_rifle |  | w_rifle<br> w_misc<br> w_explosive<br> w_melee<br> w_pistol<br> w_smg<br> w_shotgun<br> w_sniper |
| cost | Base price | 28780 |  |  |
| hud | Section with parameters for [hud weapon](../../../terminology/terminology.md#object_hud) | wpn_akm_hud |  | Section name |
| visual | [World model](../../../terminology/terminology.md#object_world) | dynamics\weapons\wpn_akm\wpn_akm.ogf |  | Path to file |

</details>

### Position/Orientation of Weapon Parameters

<details>
    <summary>Position/Orientation of Weapon Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| position | position of the weapon in the hands of the NPC and the headspace when viewed from the 3rd person | -0.026, -0.175, 0.0 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |  |
| orientation | how the weapon is rotated in the hands of the NPC and headgear, in the 3rd person view | 0, 0, 0 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |  |
| fire_point | coordinates of the fire particle from the shot, in the 3rd person view | 0, 0.218, 0.656 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |  |
| fire_point2 | Coordinates of the fire particle from the shot, when viewed from the 3rd person from the holster | 0, 0.161, 0.583 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |  |
| strap_bone0 | the name of the first NPC model bone where the weapon is located when hidden | bip01_spine2 | Bone Name |  |
| strap_bone1 | The name of the second NPC model bone that holds the weapon when hidden | bip01_spine1 | Bone Name |  |
| strap_position | the position of the weapon on the NPC's back, when viewed from the third person | -0.26, -0.11, 0.25 | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |  |
| strap_orientation | how the weapon is rotated on the NPC's back in 3rd person view | -15, -9, 110 | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |  |

</details>

### Inventory Weapon Parameters

<details>
    <summary>Inventory Weapon Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| icons_texture | texture where the weapon icon will be taken from | ui\ui_icon_spas |  |  |
| inv_grid_height | icon height | 2 | number of 50x50 pixels cells |  |
| inv_grid_width | icon width | 5 | number of 50x50 pixels cells |  |
| inv_grid_x | the coordinate of the upper left corner of the icon on a 50x50 pixel grid on the X axis | 35 | number of cells indented to the right |  |
| inv_grid_y | The coordinate of the upper left corner of the icon on a 50x50 pixel grid on the Y axis | 0 | number of cells indenting downward |  |
| inv_name | The name in the inventory | st_wpn_akm | Section name, in [*.xml](../../../main-folders-and-files/file-formats/conf-script/xml.md) files included in the string_table section of `gamedata\configs\text\*localization*\st_items_weapons.xml` |  |
| inv_name_short | short name in the inventory | st_wpn_akm | Section name, in [*.xml](../../../main-folders-and-files/file-formats/conf-script/xml.md) files included in the string_table section of `gamedata\configs\text\*localization*\st_items_weapons.xml` |  |
| inv_weight | the inventory weight of the unloaded weapon | 3.3 | The number is given in kilograms |  |
| description | Description in inventory | st_wpn_akm_descr | Section name, in [*.xml](../../../main-folders-and-files/file-formats/conf-script/xml.md) files included in the string_table section of `gamedata\configs\text\*localization*\st_items_weapons.xml` | no_description |
| slot | Inventory slot number | 2 | 0 - knives<br>1 - pistols<br>2 - shotguns, machine guns, rifles, grenade launchers<br>3 - grenades (may be crashing)<br>4 - binoculars<br>5 - bolts (may be crashing)<br>6 - outfits (may be crashing) |  |
| highlight_equipped |  |  | true - 1 - on (Yes)<br> false - 0 - off (No) |  |

</details>

### Parameters for multiplayer (there is no multiplayer in the game, so the parameters are useless)

<details>
    <summary>Parameters for multiplayer</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| weapon_class | is used exclusively for the purchase menu in multiplayer | shotgun<br> assault_rifle<br> sniper_rifle<br> heavy_weapon |  |
| startup_ammo | startup amount of ammo in multiplayer | The number of rounds of ammunition is indicated |  |
| kill_msg_x | the coordinate of the upper left corner of the kill icon on the X axis |  |  |
| kill_msg_y | top-left corner coordinate of the kill icon on the Y axis |  |  |  |
| kill_msg_width | kill icon width | Specified in pixels |  |  |
| kill_msg_height | kill icon height | Specified in pixels |  |  |

</details>

### Shot Particle Parameters

<details>
    <summary>Shot Particle Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| flame_particles | Gunshot fire particle | weapons\generic_weapon05 | Specifies the path to the file |  |
| smoke_particles | shot smoke particle | weapons\generic_shoot_00 | Specifies the path to the file |  |
| light_disabled | flash off when shot | false | true - 1 - on (Yes)<br> false - 0 - off (No) |  |
| light_color | Parameters for changing the color of the shot fire particle | 0.6, 0.5, 0.3 | RGB Color |  |
| light_range | the radius of the fire partition from the shot | 5 |  |  |
| light_time | time of light playback when shot | 0.2 |  |  |
| light_var_color | Parameter of variation of the color of the fire particle from the shot | 0.05 | RGB Color |  |
| light_var_range | varies the radius of the fire particle from the shot | 0.5 | Value 60.0 = 10 seconds |  |

</details>

### Parameters of the upgrades/repairs

<details>
    <summary>Particle parameters from the shot</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| upgrades |  | up_gr_firstab_akm, up_gr_seconab_akm, up_gr_thirdab_akm, up_gr_fourtab_akm, up_gr_fifthab_akm, up_gr_fifthcd_akm |  |  |
| installed_upgrades | installed upgrades |  |  |  |
| upgrade_scheme | upgrade_scheme | upgrade_scheme_ak74 |  |  |
| repair_type | item type for repair tools | rifle_7 | pistol<br> shotgun<br> rifle_5<br> rifle_7 |  |

</details>

#### Upgrades Icons Parameters

<details>
    <summary>Upgrades Icons Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| upgr_icon_x | X coordinate of the upper left corner of the weapon icon in the upgrade window | 300 | Specified in pixels |  |
| upgr_icon_y | Y coordinate of the upper left corner of the weapon icon in the upgrade window | 0 | Specified in pixels |  |
| upgr_icon_width | icon width in the upgrade window | 300 | Specified in pixels |  |
| upgr_icon_height | icon height in the upgrade window | 100 | Specified in pixels |  |

</details>

### Parameters of the weapon itself

<details>
    <summary>Parameters of the weapon itself</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| fire_modes | Firing mode | 1, -1 | -1 - automatic<br> 1 - single<br> 2 - two-shot<br> 3 - three-shot |  |
| wallmark_section | section of wallmarks that appear on the ground/geometry |  | Section name (by default it is in the system.ltx file) |  |
| wm_size | texture size of the mark left on the ground after the explosion |  | The bigger the number, the bigger the mark |  |
| allow_inertion | allow_inertion |  | true - 1 - on (Yes)<br> false - 0 - off (No) |  |
| ph_mass | Weight of the unloaded weapon for the physical engine | 4 | Kilograms |  |

</details>

#### Shot parameters

<details>
    <summary>Shot parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| hit_impulse | The force that the flying bullet transmits to the victim affects the ragdoll-body behavior | 34 | The more, the farther the body will fly away |  |
| hit_power | damage dealt | 0.58, 0.58, 0.58, 0.58 | Specifies a value for the level of difficulty in descending order, i.e. from master to beginner |  |
| hit_type | Type of damage inflicted; used to calculate damage; armor suits (and others) are set to be immune to each type of damage separately | fire_wound | fire_wound - fire damage<br> wound - stabbing<br> wound_2 - cutting<br> explosion - shrapnel damage |  |
| fire_distance | effective range of the shot after which the bullet disappears | 900 | Specified in meters |  |
| bullet_speed | initial bullet speed | 715 | Specified in meters per second |  |
| rpm | Shooting speed | 600 | Specifies the number of shots per minute |  |
| rpm_mode_2 |  |  |  |  |
| rpm_anim_fix | New shot animation behavior | true | true - 1 - on (Yes)<br> false - 0 - off (No) |  |
| rpm_empty_click | Misfire/empty magazine sound frequency | 200 |  |  |
| fire_dispersion_base | The dispersion (angle of the bullets) introduced by the weapon; affects accuracy; added to the disp_base in actor.ltx | 0.45 | Specified in degrees |  |
| PDM_disp_accel_factor | Multiplier by which fire_dispersion_base is multiplied when the protagonist runs | 2.5 | Specified in numbers |  |
| PDM_disp_base | Multiplier by which fire_dispersion_base is multiplied when the protagonist is standing at full height | 1.15 | Specified in numbers |  |
| PDM_disp_crouch | Multiplier by which fire_dispersion_base is multiplied when the protagonist goes crouched | 1.0 | Specified in numbers |  |
| PDM_disp_crouch_no_acc | Multiplier by which fire_dispersion_base is multiplied when the protagonist stands still while ducking | 1.0 | Specified in numbers |  |
| PDM_disp_vel_factor | Multiplier by which fire_dispersion_base is multiplied when the protagonist spins a weapon or runs | 2.5 | Specified in numbers |  |

</details>

#### Ammo parameters

<details>
    <summary>Ammo parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| ammo_class | ammo type for this weapon | ammo_7.62x39_fmj, ammo_7.62x39_fmj_bad, ammo_7.62x39_fmj_verybad, ammo_7.62x39_ap, ammo_7.62x39_ap_bad, ammo_7.62x39_ap_verybad | The names of the ammunition sections are indicated, separated by commas |  |
| ammo_elapsed | magazine capacity at the moment of spawning | 30 | indicate the value equal to ammo_mag_size |  |
| ammo_mag_size | ammunition capacity | 30 | The number of bullets is indicated |  |

</details>

### Particle shell parameters

<details>
    <summary>Particle shell parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| shell_point | coordinates of the shell partylock, when viewed from the 3rd person | 0, 0.216, 0.174 | x - left/+right, y + up/down, z - forward/+backward |  |
| shell_dir | how the shell particle is rotated when viewed from the 3rd person | 0, 0, 0.4 | x - left/+right, y + up/down, z - forward/+backward |  |
| shell_particles | shell particle | weapons\762x39 | Particles file path relative to particles.xr |  |

</details>

### Scope Parameters

<details>
    <summary>Scope Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| scopes | Name of the gun sight section | 1p29, kobra, ps01 | Sections to models with these sights are indicated |  |
| scope_status | Scope status | 0 | 0 - not available<br> 1 - built-in<br> 2 - removable |  |
| scope_zoom_factor | scope magnification | 0 | For the sight specified in the parameter scopes, the value can already be more |  |
| scope_nightvision |  |  |  |  |
| scope_dynamic_zoom |  |  |  |  |
| scope_alive_detector |  |  |  |  |
| scope_texture |  |  |  |  |
| scope_texture_alt |  |  |  |  |

</details>

### Overheat

<details>
    <summary>Aiming parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| overheat_time_quant |  |  |  |  |
| overheat_decr_quant |  |  |  |  |
| overheat_threshold |  |  |  |  |
| overheat_particles |  |  |  |  |

| lock_enter |  |  |  |  |
| lock_exit |  |  |  |  |

</details>

### Silencer Parameters

<details>
    <summary>Silencer Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| silencer_name | Name of the silencer section of the gun | wpn_sil_pbs1 |  |  |
| silencer_status | silencer status | 2 | 0 - not available<br> 1 - built-in<br> 2 - removable |  |
| silencer_light_color | Parameters for changing the color of the particle of the smoke from the shot from the weapon with silencer | 0.6, 0.5, 0.3 |  |  |
| silencer_light_range | the radius of the particle of the haze when firing | 0.01 |  |  |
| silencer_light_time | light time | 0.2 |  |  |
| silencer_light_var_color | Parameter for varying the color of the particle of smoke from a shot from a weapon with silencer | 0.05 |  |  |
| silencer_light_var_range | variation of the radius of the particle of the smoke from the shot from the weapon with silencer | 0.5 |  |  |
| silencer_smoke_particles | particle smoke effect for a shot with silencer | weapons\generic_shoot_00 | Particles file path relative to particles.xr |  |
| silencer_x | the coordinates of the silencer icon superimposed on top of the weapon icon on the X coordinate | 235 | Specified in numbers |  |
| silencer_y | the coordinates of the silencer icon superimposed over the weapon icon in Y coordinate | 10 | Specified in numbers |  |

</details>

### Underbarrel Grenade Launcher Parameters

<details>
    <summary>Underbarrel Grenade Launcher Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| grenade_class | type of underbarrel grenades | ammo_vog-25, ammo_vog-25_bad, ammo_vog-25_verybad |  |  |
| grenade_launcher_name | name of the section of the underbarrel grenade launcher | wpn_addon_grenade_launcher |  |  |
| grenade_launcher_status | the status of the underbarrel grenade launcher | 0 | 0 - not available<br> 1 - built-in<br> 2 - removable |  |
| launch_speed | launch speed of the underbarrel grenade launcher | 0 |  |  |
| grenade_flame_particles | particle of the fire from the underbarrel grenade launcher | weapons\generic_weapon01 | Particles file path relative to particles.xr |  |
| grenade_launcher_x | grenade launcher icon coordinates superimposed over the weapon icon on the X coordinate | 127 | Specified in numbers |  |
| grenade_launcher_y | grenade_launcher icon coordinates superimposed over the weapon icon on the Y coordinate | 18 | Specified in numbers |  |
| gl_zoom_factor |  |  |  |  |

</details>

### Aiming parameters

<details>
    <summary>Aiming parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
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

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| misfire_probability | misfire_probability | maximum wear probability | 0.005 | 0 - never jams<br> 1 - always jams |
| misfire_start_condition | the wear at which there is a chance of misfire | 0.7 |  |  |
| misfire_start_prob | misfire chance of misfire when wear is greater than misfireStartCondition | 0.007 |  |  |
| misfire_end_condition | the chance of misfire when worn out is greater than misfireEndCondition | 0.05 |  |  |
| misfire_end_prob | wear rate at which the chance of misfire becomes constant | 0.11 |  |  |

</details>

### Condition parameters

<details>
    <summary>Condition parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| condition_queue_shot_dec | condition_shot_dec | 0.0008 |  |  |
| condition_shot_dec | increase wear on each shot | 0.0008 | 0 - no wear<br> 1 - maximum wear |  |
| fire_dispersion_condition_factor | the effect of wear on the variance of the weapon as a percentage | 0.001 |  |  |

</details>

### Сamera parameters

<details>
    <summary>Сamera parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| cam_return | Whether to return the camera to its original position | 0 |  |  |
| cam_relax_speed | camera return speed | 10 |  |  |
| cam_dispersion | angle increase with each shot | 0.762 |  |  |
| cam_dispersion_frac | barrel will rise by cam_dispersion*cam_dispersion_frac +- cam_dispersion*(1-cam_dispersion_frac) | 1.0 |  |  |
| cam_dispersion_inc | increase cam_dispersion with each shot | 0.0725 |  |  |
| cam_max_angle | maximum vertical recoil angle | 50.0 |  |  |
| cam_max_angle_horz | maximum horizontal recoil angle | 50.0 |  |  |
| cam_step_angle_horz | barrel shift horizontally during firing | 1.38 |  |  |

</details>

### Parameters of the camera when aiming

<details>
    <summary>Parameters of the camera when aiming</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| zoom_cam_relax_speed | similar to the return speed of the camera in the aiming mode | 10 |  |  |
| zoom_cam_dispersion | Similar to cam_dispersion in the aiming mode | 0.732 |  |  |
| zoom_cam_dispersion_frac | Similar to cam_dispersion_frac in aiming mode | 0.7 |  |  |
| zoom_cam_dispersion_inc | Similar to cam_dispersion_inc in aiming mode | 0.0625 |  |  |
| zoom_cam_max_angle | Similar to cam_max_angle in aiming mode | 50.0 |  |  |
| zoom_cam_max_angle_horz | Similar to cam_max_angle_horz in aiming mode | 50.0 |  |  |
| zoom_cam_step_angle_horz | Similar to cam_step_angle_horz in aiming mode | 1.28 |  |  |

</details>

### AI Parameters

<details>
    <summary>AI Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| ef_main_weapon_type | NPC weapon type | 2 | 0 - pistol<br> 1 -shotgun<br> 2 - assault rifle<br> 3 - rifle<br> 4 - grenade launcher<br> |  |
| ef_weapon_type | NPC fire mode | 8 | 5 - fire single shots<br> 6 - fire in bursts<br> 7 - aim and fire single shots<br> 8 - aim and fire (sniper)<br> 9 - grenade launcher |  |
| cam_relax_speed_ai |  | 360 |  |  |
| zoom_cam_relax_speed_ai |  | 360 |  |  |
| holder_fov_modifier | NPC angle of view multiplier (eye_fov) with this weapon | 1.0 | Specified in numbers |  |
| holder_range_modifier | NPC range multiplier (eye_range) with this weapon | 1.0 | Specified in numbers |  |
| min_radius |  |  |  |  |
| max_radius |  |  |  |  |

</details>
