# Weapon HUD parameters

___

## General Weapon HUD Parameters

<details>
    <summary>General Weapon HUD Parameters</summary>

\[wpn_*weapon name*_hud]:

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| item_visual | Weapon [hud model](../../../../reference/terminology/models/object-hud.md) | anomaly_weapons\wpn_akm\wpn_akm_hud.ogf |  | File path relative to the gamedata\meshes folder |
| attach_place_idx |  | 0 |  |  |
| zoom_hide_crosshair | Hide crosshair when aiming | true |  | true - 1 - on (Yes)<br> false - 0 - off (No) |
| hud_fov_addition_modifier |  |  |  |  |

</details>

## Custom UI

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| custom_ui_func |  |  |  |  |
| custom_ui_bone |  |  |  |  |
| custom_ui_pos |  |  |  |  |
| custom_ui_rot |  |  |  |  |

## HUD Strafe

<details>
    <summary>HUD Strafe</summary>

```admonish info
Strafe works when moving the character (WASD)
```

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| strafe_enabled | Enabling Strafe | true |  | true - 1 - on (Yes)<br> false - 0 - off (No) |
| strafe_hud_offset_pos | HUD position | 0,0.002,0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strafe_hud_offset_rot | HUD rotation | 1,-0.75,4.5 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| strafe_hud_offset_pos_16x9 | HUD position 16x9 | 0,0.0023,0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strafe_hud_offset_rot_16x9 | HUD rotation 16x9 | 1,-1,5 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| strafe_aim_enabled | Enabling Aim Strafe | true |  | true - 1 - on (Yes)<br> false - 0 - off (No) |
| strafe_aim_hud_offset_pos | HUD position while aiming | 0,0.002,0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strafe_aim_hud_offset_rot | HUD rotation while aiming | 0,-0.3,1.25 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| strafe_aim_hud_offset_pos_16x9 | HUD position while aiming 16x9 | 0,0.0023,0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| strafe_aim_hud_offset_rot_16x9 | HUD rotation while aiming 16x9 | 0,-0.5,1.75 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| strafe_transition_time | time to return to the original weapon position (the longer the time, the slower the return) | 0.75 |  |  |
| strafe_aim_transition_time | time to return to the original weapon position (the longer the time, the slower the return) | 0.35 |  |  |
| strafe_cam_limit_aim_factor |  | 0.9 |  |  |
| strafe_cam_min_angle |  | 0 |  |  |

</details>

## HUD Inertion

<details>
    <summary>HUD Inertion</summary>

```admonish info
Inertia works when moving the mouse
```

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| inertion_min_angle_aim |  | 0 |  |  |
| inertion_offset_LRUD | HUD inertion | 0.011, 0.011, 0.01, 0.005 | Vector4 | L - (`-`) left / (`+`) right<br> R - (`-`) right / (`+`) left<br> U - (`-`) up / (`+`) down<br> D - (`-`) down / (`+`) up |
| inertion_offset_LRUD_aim | HUD inertion when aim | 0.011, 0.011, 0.01, 0.005 | Vector4 | L - (`-`) left / (`+`) right<br> R - (`-`) right / (`+`) left<br> U - (`-`) up / (`+`) down<br> D - (`-`) down / (`+`) up |

</details>

## HUD Visual Recoil

<details>
    <summary>Visual Recoil</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| shooting_hud_effect | Enable Visual Recoil | true |  | true - 1 - on (Yes)<br> false - 0 - off (No) |
| shooting_max_LRUD | Maximum LRUD position when firing | 0.005,0.005,0.005,0 |  | L - (`-`) left / (`+`) right<br> R - (`-`) right / (`+`) left<br> U - (`-`) up / (`+`) down<br> D - (`-`) down / (`+`) up |
| shooting_max_LRUD_aim | Maximum LRUD position when firing while aim | 0.0025,0.0025,0,0 |  | L - (`-`) left / (`+`) right<br> R - (`-`) right / (`+`) left<br> U - (`-`) up / (`+`) down<br> D - (`-`) down / (`+`) up |
| shooting_backward_offset |  | 0.02,0.015 |  |  |
| shooting_ret_speed | time to return to the original weapon position (the longer the time, the slower the return) | 7.5 |  |  |
| shooting_ret_aim_speed | time to return to the original weapon position (the longer the time, the slower the return) | 15 |  |  |
| shooting_min_LRUD_power |  | 0.01 |  |  |

</details>

## HUD Collision

<details>
    <summary>HUD Collision</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| nearwall_dist_min | Minimum distance at which the collision starts to work |  |  |  |
| nearwall_dist_max | Maximum distance at which the collision works |  |  |  |
| nearwall_target_hud_fov | How much is the maximal shift of the hud fov |  |  |  |
| nearwall_speed_mod | Shift speed |  |  |  |

</details>

## HUD Movement Layers

<details>
    <summary>HUD Movement Layers</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| movement_layer_0 | aim walk | movement\aim_walk.anm | path and animation name |  |
| movement_layer_1 | aim crouch | movement\aim_walk.anm | path and animation name |  |
| movement_layer_2 | crouch | movement\newwalk.anm | path and animation name |  |
| movement_layer_3 | walk | movement\newwalk.anm | path and animation name |  |
| movement_layer_4 | run | movement\newwalk.anm | path and animation name |  |
| movement_layer_5 | sprint | movement\newrunreload.anm | path and animation name |  |

</details>

## HUD Empty Click Anm

<details>
    <summary>HUD Empty Click Anm</summary>

```admonish info
Weapon animation settings when attempting to shoot with an empty magazine (camera animation is used)
```

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| empty_click_anm | Weapon animation when attempting to shoot with an empty magazine | script\misfire.anm | path and animation name |  |
| empty_click_anm_speed | Animation speed | 2 | - |  |
| empty_click_anm_power | Animation power | 1 | - |  |

</details>

## HUD Weapon Position/Rotation Parameters

<details>
    <summary>HUD Weapon Position/Rotation Parameters</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| item_position | weapon position in relation to the arms | 0, 0, 0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| item_orientation | weapon orientation in relation to the arms | 0, 0, 0 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

## HUD Position/Rotation Parameters

<details>
    <summary>HUD Position/Rotation Parameters</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| hands_position | Hands and weapon position | -0.072, -0.15, 0.1 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| hands_position_16x9 | Hands and weapon position for 16x9 monitors | -0.072, -0.15, 0.1 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| hands_orientation | direction (orientation) of the hands and arms | 0.55, 2.39, 0.15 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| hands_orientation_16x9 | direction (orientation) of arms and weapons for 16x9 monitors | 0.55, 2.39, 0.15 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

## HUD Aiming Position/Rotation Parameters

<details>
    <summary>HUD Aiming Position/Rotation Parameters</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| aim_hud_offset_pos | aiming shift | -0.0818, 0.05494, -0.25 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| aim_hud_offset_pos_16x9 | aiming hand shift for 16x9 monitors | -0.0818, 0.05494, -0.25 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| aim_hud_offset_rot | orientation of the arms with the weapon when aiming | 0.0407, 0.00886, -0.00495 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| aim_hud_offset_rot_16x9 | aiming hand orientation for 16x9 monitors | 0.0407, 0.00886, -0.00495 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

## HUD UGL Parameters

<details>
    <summary>HUD UGL Parameter</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| gl_hud_offset_pos | gun arm displacement when aiming from the holster | -0.0491, 0.005, -0.155 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| gl_hud_offset_pos_16x9 | gun hand offset when aiming from the arming cradle for 16x9 monitors | -0.0491, 0.005, -0.155 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| gl_hud_offset_rot | the orientation of the arms with the weapon when aiming from the arming cube | -0.067, 0.0063, -0.02 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| gl_hud_offset_rot_16x9 | orientation of the arms with weapon when aiming from the arming cube for 16x9 monitors | -0.067, 0.0063, -0.02 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

## HUD parameters when lowered

<details>
    <summary>HUD parameters when weapon lowered</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| safemode_anm | Weapon animation when weapon goes to safe mode (camera animation is used) | script\to_lower.anm | path and animation name |  |
| safemode_anm_speed |  | 1.2 |  |  |
| safemode_anm_power |  | 1 |  |  |
| safemode_anm2 | Weapon animation when weapon comes out of safe mode (camera animation is used) | script\from_lower.anm | path and animation name |  |
| safemode_anm_speed2 |  | 1.3 |  |  |
| safemode_anm_power2 |  | 0.6 |  |  |
| lowered_hud_offset_pos | Position of arms and hands when the weapon is lowered | 0, 0, 0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| lowered_hud_offset_rot | Rotation of arms and hands when the weapon is lowered | 0, 0, 0 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| lowered_hud_offset_pos_16x9 | Position of arms and hands when the weapon is lowered | 0, 0, 0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| lowered_hud_offset_rot_16x9 | Rotation of arms and hands when the weapon is lowered | 0, 0, 0 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

## HUD parameters when leaning

<details>
    <summary>HUD parameters when leaning</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| lean_hud_offset_pos | Weapon and arm positions when the character is leaning | 0, 0, 0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| lean_hud_offset_rot | Weapon and arm rotation when the character is leaning | 0, 0, 0 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| lean_hud_offset_pos_16x9 | Weapon and arm positions when the character is leaning | 0, 0, 0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| lean_hud_offset_rot_16x9 | Weapon and arm rotation when the character is leaning | 0, 0, 0 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |

</details>

## HUD Alt Position\Orientation Parameters

<details>
    <summary>HUD Alt Position\Orientation Parameters</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| aim_hud_offset_alt_pos | Alternative aim offset position | 0, 0, 0 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| aim_hud_offset_alt_rot | Alternative aim offset rotation | 0, 0, 0 |  | X - (`+`) left / (`-`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) roll to the right / (`+`) roll to the left |
| scope_zoom_factor_alt |  |  |  |  |

</details>

## Sound Parameters

You can read about the parameters of the sounds [here](weapon_sounds.ltx.md)

## HUD parameters of the shells sprite

<details>
    <summary>HUD parameters of the shells sprite</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| shell_bone | bone which will be considered the origin of coordinates for the shell sprite in 1st person view | wpn_body | Bone Name |  |
| shell_dir | the offset parameter of the shells after departure, in 1st person view | 0, 1, 0 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| shell_point | Coordinates of the bullets ejection point in 1st person view | 0, 0.064, 0.19 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |

</details>

## HUD parameters of particle sprite

<details>
    <summary>HUD parameters of particle sprite</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| fire_bone | the name of the fire particle bone of the weapon hud-model | wpn_body |  | Bone Name |
| fire_bone2 | UGL fire particle bone | wpn_body |  | Bone Name |
| fire_point | coordinates of the fire particle, when viewed from the 1st person | 0, 0.051841, 0.535482 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |
| fire_point2 | Coordinates of the fire particles, when viewed from the 1st person when firing the underbarrel grenade launcher | 0, -0.011, 0.553 |  | X - (`-`) left / (`+`) right<br> Y - (`+`) up / (`-`) down<br> Z - (`-`) forward / (`+`) backward |

</details>

## Camera

<details>
    <summary>Camera</summary>

| Parameter name | Parameter description | Example value | Value Data Type | Possible parameter values and their descriptions |
|---|---|---|:---:|---|
| freeelook_z_offset_mul | Camera displacement along the z-axis when the camera moves freely | 0.4 |  | Z - (`-`) forward / (`+`) backward |
| camera_move_epsilon |  |  |  |  |
| disp_min |  |  |  |  |
| speed_min |  |  |  |  |
| zoom_aim_disp_k |  |  |  |  |
| zoom_aim_speed_k |  |  |  |  |
| delta_time |  |  |  |  |
| cam_return_stop |  |  |  |  |
| zoom_rotate_time_k |  |  |  |  |

</details>

## Sources

[Source](https://modfaq.ru/%D0%9F%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B_%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D1%8F)
