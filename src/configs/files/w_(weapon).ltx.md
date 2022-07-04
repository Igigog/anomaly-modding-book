# w_*Weapon*.ltx Config File

Parameters of the weapon are set for each sample in a separate *.ltx file, and consist of two sections (Each contains its own set of parameters):

[wpn_name] - Main, it sets most of the parameters (for NPC and 3rd-person view)
[wpn_name_hud] - Secondary, where you set first-person view parameters only.

## [Name of weapon]: Here you can set additional characteristics of weapon from sections for example:
    identity_immunities
    weapon_probability
    default_weapon_params

### General parameters
| Parameter Name | Parameter Description | Parameter Possible Values |
---|---|---|
| GroupControlSection | | |
| $npc | use NPC of this weapon |  |
| $prefetch |preload queue |  |
| $spawn | the Weapon Directory in the Level Editor |  |
| scheduled | online/offline switch; Works only for "live" objects with AI |  |
| cform | parameter for dynamic objects; necessary for correct creation of the skeleton model |  |
| parent_section | | |
| class | engine weapon class | WP_BINOC - WP_KNIFE - WP_BM16 - WP_GROZA - WP_SVD - WP_AK74 - WP_LR300 - WP_HPSA - WP_PM - WP_RG6 - WP_RPG7 - WP_SHOTG - WP_ASHTG - WP_MAGAZ - WP_SVU - WP_USP45 - WP_VAL - WP_VINT - WP_WALTH - W_STMGUN |
| slot | slot in inventory |  |
| animation_slot | animation slot number |  |
|hand_dependence | determines whether the weapon will be taken with one or two hands |  |
| single_handed | held with one hand | 0 (no) - 1 (yes) |
| default_to_ruck | whether the weapon will be moved to the backpack instead of the slot when picked up | true (yes) - false (no) |
| sprint_allowed | this line means that you can run with the weapon. | true (Yes) - false (No) |
| kind |  |
| cost | base price |  |
| repair_type | item type for repair tools | pistol - shotgun - rifle_5 - rifle_7 |
| hud | section with parameters for the hud model of the weapon (1st person view) |  |
| visual | reference to the 3rd person model |  |
| position | position of the weapon in the hands of the NPC and the headspace when viewed from the 3rd person |  |
| orientation | orientation | how the weapon is rotated in the hands of the NPC and headgear, in the 3rd person view |  |
| fire_point | coordinates of the fire particle from the shot, in the 3rd person view |  |
| fire_point2 | Coordinates of the fire particle from the shot, when viewed from the 3rd person from the holster |  |
| strap_bone0 | the name of the first NPC model bone where the weapon is located when hidden |  |
| strap_bone1 | The name of the second NPC model bone that holds the weapon when hidden |  |
| strap_position | the position of the weapon on the NPC's back, when viewed from the third person |  |
| strap_orientation | how the weapon is rotated on the NPC's back in 3rd person view |  |

### Weapon parameters in inventory
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| inv_grid_height | icon height |  |
| inv_grid_width | icon width |  |
| inv_grid_x | the coordinate of the upper left corner of the icon on a 50x50 pixel grid on the X axis | |
| inv_grid_y | The coordinate of the upper left corner of the icon on a 50x50 pixel grid on the Y axis |  |
| inv_name | The name in the inventory |  |
| inv_name_short | short name for the interface |  |
| inv_weight | the inventory weight of the unloaded weapon |  |
| description | link to weapon description in string_table_enc_weapons.xml |  |

### Parameters for the multiplayer (there is no multiplayer in the game, so the parameters are useless)
| Parameter Name | Parameter Description | Parameter Possible Values |
---|---|---|
| weapon_class | is used exclusively for the purchase menu in multiplayer |  |
| startup_ammo | startup amount of ammo in multiplayer |  |
| kill_msg_x | the coordinate of the upper left corner of the kill icon on the X axis |  |
| kill_msg_y | top-left corner coordinate of the kill icon on the Y axis | |
| kill_msg_width | the width of the kill icon | the value is specified in pixels |  |
| kill_msg_height | kill icon height | value in pixels |

### Particle parameters from the shot
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| flame_particles | gunshot fire particle |  |
| smoke_particles | shot smoke particle |  |
| light_disabled | light_particles | light_disabled | light_disabled | flash off when shot |  |
| light_color | Parameters for changing the color of the shot fire particle |  |
| light_range | the radius of the fire partition from the shot |  |
| light_time | time of light playback when shot |  |
| light_var_color | parameter for varying the color of the fireball |  |
| light_var_range | varies the radius of the fire particle from the shot |  |

### Parameters of the upgrades
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| upgrades | |
| installed_upgrades | installed upgrades |  |
| upgrade_scheme | upgrade_scheme |  |
| upgr_icon_x | the X coordinate of the upper left corner of the icon in the repair window |  |
| upgr_icon_y | top-left corner coordinate of the icon in the Y axis repair window | |
| upgr_icon_width | Width of the icon in the repair window |  |
| upgr_icon_height | icon height in the repair window |  |

### Parameters of the weapon itself
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| fire_modes | firing modes fire modes | 1 (single), 2 (), 3 () |  |
| wallmark_section | section of wallmarks that appear on the ground/geometry when exploding |  |
| wm_size | texture size of the mark left on the ground after the explosion |  |
| allow_inertion | whether inertia is enabled |  |
| ph_mass | the weight of the unloaded weapon for the physical engine |  |
| hit_impulse | The force that the flying bullet transmits to the victim affects the ragdoll-body behavior |  |
| hit_power | damage dealt |  |
| hit_type | Type of damage inflicted; used to calculate damage; armor suits (and others) are set to be immune to each type of damage separately |  |
| fire_distance | effective range of the shot after which the bullet disappears |  |
| bullet_speed | initial bullet velocity |  |
| rpm | velocity |  |
| rpm_empty_click | trigger rate when the magazine is empty |  |
| PDM_disp_accel_factor | the multiplier by which fire_dispersion_base is multiplied when the AG runs |  |
| PDM_disp_base | multiplier by which fire_dispersion_base is multiplied when the GG stands still at full length |  |
| PDM_disp_crouch | |  |
| PDM_disp_crouch_no_acc | |  |
| PDM_disp_vel_factor | PDM_disp_vel_factor | The multiplier by which fire_dispispersion_base is multiplied when the YHG spins his weapon or runs |  |

#### Ammo parameters
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| ammo_class | ammo type for this weapon |  |
| ammo_elapsed | magazine capacity at the moment of spawning | indicate the value equal to ammo_mag_size |  |
| ammo_mag_size | ammunition capacity |  |

### Parameters of cartridge cases
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| shell_point | coordinates of the shell partylock, when viewed from the 3rd person |  |
| shell_dir | how the shell particle is rotated when viewed from the 3rd person |  |
| shell_particles | shell particle |  |

### Aiming parameters
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| scopes | |  |
| scope_status | scope type | 0 (not available), 1 (built-in), 2 (removable) |  |
| scope_zoom_factor | scope magnification |  |

### Parameters of the silencer
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| silencer_name | silencer name |
| silencer_status | silencer status | 0 (not available) 1 (built-in), 2 (removable) |  |
| silencer_x | the coordinates of the silencer icon superimposed on top of the weapon icon on the X coordinate |  |
| silencer_y | the coordinates of the silencer icon superimposed over the weapon icon in Y coordinate |  |
| silencer_light_color | Parameters for changing the color of the particle of the smoke from the shot from the weapon with silencer |  |
| silencer_light_range | the radius of the particle of the haze when firing |  |
| silencer_light_time | light time  |
| silencer_light_var_color | Parameter for varying the color of the particle of smoke from a shot from a weapon with silencer |  |
| silencer_light_var_range | variation of the radius of the particle of the smoke from the shot from the weapon with silencer |  |
| silencer_smoke_particles | particle smoke effect for a shot with silencer |  |

### Parameters of the underbarrel grenade launcher
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| grenade_class | type of underbarrel grenades |  |
| grenade_launcher_name | name of the section of the underbarrel grenade launcher |  |
| grenade_launcher_status | the status of the underbarrel grenade launcher | 0 (not present) 1 (built-in), 2 (removable) |  |
| launch_speed | launch speed of the underbarrel grenade launcher |  |
| grenade_flame_particles | particle of the fire from the underbarrel grenade launcher |  |

#### Icons
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| grenade_launcher_x | grenade launcher icon coordinates superimposed over the weapon icon on the X coordinate |  |
| grenade_launcher_y | grenade_launcher icon coordinates superimposed over the weapon icon on the Y coordinate | |

### Aiming parameters
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| use_aim_bullet | whether the first bullet fired after a long period of inactivity will fly exactly into the crosshair |  |
| time_to_aim | the time of inactivity after which the use_aim_bullet is triggered |  |
| zoom_dof | |  |
| zoom_enabled | the ability to aim | true - false |  |
| zoom_rotate_time | the speed at which the weapon goes to the "aiming" state, in seconds |  |
| reload_dof | |  |
| control_inertion_factor | a characteristic that is responsible for several parameters: the speed at which the weapon returns to its original position after the shot, the speed at which the player aims and the speed at which the player rotates his axis when holding the weapon in his hands. |  |
| crosshair_inertion | |  |
| fire_dispersion_base | base dispersion of the weapon |  |
| fire_dispersion_condition_factor | the effect of wear on the variance of the weapon as a percentage |  |

### Misfire parameters
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| misfire_probability | misfire_probability | maximum wear probability |  |
| misfire_start_condition | the wear at which there is a chance of misfire |  |
| misfire_start_prob | misfire chance of misfire when wear is greater than misfireStartCondition |  |
| misfire_end_condition | the chance of misfire when worn out is greater than misfireEndCondition |  |
| misfire_end_prob | wear rate at which the chance of misfire becomes constant |  |

### Wear parameters
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| condition_queue_shot_dec | condition_shot_dec |  |
| condition_shot_dec |-increase wear on each shot |  |

### Parameters of the camera
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| cam_return | | |
| cam_relax_speed | camera return speed | |  |
| cam_dispersion | angle increase with each shot |  |
| cam_dispersion_frac | barrel will rise by cam_dispersion*cam_dispersion_frac +- cam_dispersion*(1-cam_dispersion_frac) |  |
| cam_dispersion_inc | increase cam_dispersion with each shot |  |
| cam_max_angle | maximum vertical recoil angle |  |
| cam_max_angle_horz | maximum horizontal recoil angle |  |
| cam_step_angle_horz | barrel shift horizontally during firing |  |

### Parameters of the camera when aiming
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| zoom_cam_relax_speed | similar to the return speed of the camera in the aiming mode | |
| zoom_cam_dispersion | Similar to cam_dispersion in the aiming mode | |
| zoom_cam_dispersion_frac | Similar to cam_dispersion_frac in aiming mode | |  |
| zoom_cam_dispersion_inc | Similar to cam_dispersion_inc in aiming mode | |  |
| zoom_cam_max_angle | Similar to cam_max_angle in aiming mode |  |
| zoom_cam_max_angle_horz | Similar to cam_max_angle_horz in aiming mode |  |
| zoom_cam_step_angle_horz | Similar to cam_step_angle_horz in aiming mode |  |



### Parameters for AI
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| ef_main_weapon_type | NPC weapon type |  |
| ef_weapon_type | NPC fire mode |  |
| cam_relax_speed_ai | |  |
| zoom_cam_relax_speed_ai | |  |
| holder_fov_modifier | NPC angle of view multiplier (eye_fov) with this weapon |  |
| holder_range_modifier | NPC range multiplier (eye_range) with this weapon |  |
| min_radius | |  |
| max_radius | |  |

## Weapon HUD parameters
[wpn_*weapon name*_hud]:

| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| item_visual | |  |
| attach_place_idx | |  |
| zoom_hide_crosshair | whether to remove the crosshair when aiming |  |

### Parameters of the weapon position
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| item_position | weapon position in relation to the arms |
| item_orientation | weapon orientation in relation to the arms

| item_orientation | item_orientation | arm position parameters
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| hands_position | arm and weapon position |
| hands_position_16x9 | hand and weapon position for 16x9 monitors |
| hands_orientation | the direction (orientation) of the hands and arms |
| hands_orientation_16x9 | direction (orientation) of arms and weapons for 16x9 monitors |

### Parameters of the weapon HUD position when aiming
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| aim_hud_offset_pos | aiming shift |
| aim_hud_offset_pos_16x9 | aiming hand shift for 16x9 monitors |
| aim_hud_offset_rot | orientation of the arms with the weapon when aiming |
| aim_hud_offset_rot_16x9 | aiming hand orientation for 16x9 monitors |

### Parameters of HUD weapon position for underbarrel grenade launcher
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| gl_hud_offset_pos | gun arm displacement when aiming from the holster |
| gl_hud_offset_pos_16x9 | gun hand offset when aiming from the arming cradle for 16x9 monitors |
| gl_hud_offset_rot | the orientation of the arms with the weapon when aiming from the arming cube |
| gl_hud_offset_rot_16x9 | orientation of the arms with weapon when aiming from the arming cube for 16x9 monitors |

### Parameters of HUD arms position for the mode when the weapon is lowered
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| lean_hud_offset_pos | The offset of the arms with the weapon when the weapon is lowered |
| lean_hud_offset_rot | orientation of the arms with the weapon down |

### HUD animations parameters
- Idle animations

| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| anm_idle | Idle animation |  |
| anm_idle_empty | Idle animation of an empty magazine |  |
| anm_idle_aim | Idle animation in aiming mode |  |
| anm_idle_g | Idle animation of a grenade launcher |  |
| anm_idle_g_aim | grenade launcher targeting animation |  |
| anm_idle_w_gl | Idle animation with grenade launcher attached to the weapon |  |
| anm_idle_w_gl_aim | Idle animation with a grenade launcher attached to the weapon when aiming |  |

 - Motion animations

| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| anm_idle_aim_moving | animation in the aiming mode when moving |  |
| anm_idle_aim_moving_crouch | Animation in the aiming mode when moving in a crouch |  |
| anm_idle_moving | motion animation |  |
| anm_idle_moving_empty | motion animation with an empty magazine |  |
| anm_idle_moving_crouch_g_aim | crouch walking animation with a grenade launcher attached to the weapon |  |
| anm_idle_moving_crouch_w_gl_aim | animate walking while crouching with a grenade launcher attached to the weapon while aiming |  |
| anm_idle_moving_g |  |  |
| anm_idle_moving_g_aim |  |  |
| anm_idle_moving_w_gl | the walking animation with a grenade launcher attached to the weapon |  |
| anm_idle_moving_w_gl_aim | animate walking with a grenade launcher attached to the weapon while aiming |  |
| anm_idle_sprint | Running animation |  |
| anm_idle_sprint_empty | Running animation with an empty magazine |  |
| anm_idle_sprint_g |  |
| anm_idle_sprint_w_gl | running animation with a grenade launcher attached |  |
| anm_hide | hiding animation |  |
| anm_hide_empty | Hiding animation with an empty magazine |  |
| anm_hide_g| |  |
| anm_hide_w_gl | a hiding animation with an attached grenade launcher |  |
| anm_show | show animation |  |
| anm_show_empty | Show animation with an empty magazine |  |
| anm_show_g |  |  |
| anm_show_w_gl | show animation of pulling out a weapon with a grenade launcher attached |  | 
| anm_bore | Boredom animation |  |

- Weapon animations

| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| anm_reload | Reloading (When there is still a bullet in the chamber) |  |
| anm_reload_empty | Reloading |  |
| anm_reload_g | grenade launcher reload  |  |
| anm_reload_w_gl | reloading of the weapon with a grenade launcher attached |  |
| anm_shots | Shot animation |  |
| anm_shot_l | Last shot animation |  |
| anm_shots_g | underbarrel grenade launcher shot animation |  |
| anm_shots_w_gl | underbarrel grenade launcher shot animation |  |
| anm_switch | Animation of switching to alternate firing mode |  |
| anm_switch_g | Animation of switching to underbarrel grenade launcher firing mode |  |

### Parameters of the shells sprite for HUD
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| shell_bone | bone which will be considered the origin of coordinates for the shell sprite in 1st person view |  |
| shell_dir | the offset parameter of the shells after departure, in 1st person view |  |
| shell_point | Coordinates of the bullets ejection point in 1st person view |  |

### Particle sprite parameters for HUD
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| fire_bone | the name of the fire particle bone of the weapon hud-model |  |
| fire_bone2 |  |  |
| fire_point | the coordinates of the fire particle, when viewed from the 1st person |  |
| fire_point2 | fire_point2 | coordinates of the fire partials in the 1st person view when firing from the holster |  |

### Camera
| Parameter name | Parameter description | Possible parameter values |
---|---|---|
| freeelook_z_offset_mul |  |  |