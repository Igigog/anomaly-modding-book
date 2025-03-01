# Weapon_Ammo Config File

___

## General Ammo Parameters

<details>
    <summary>General Ammo Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|:---:|---|
| GroupControlSection |  | spawn_group |  |  |
| discovery_dependency |  |  |  |  |
| $spawn | Ammo directory in Level Editor | "weapons\ammo\ammo_11.43x23_hydro" |  |  |
| class | Engine ammo class | AMMO_S |  | AMMO_S<br> S_VOG25<br> S_OG7B<br> S_M209 |
| cform | Skeleton model | skeleton |  |  |
| visual | Ammo box world model  | dynamics\weapons\wpn_ammo\ammo_1143x23_fmj.ogf | String | Path to file |
| $prefetch | Preload queue | 64 |  |  |
| kind | Kind of item to group into the appropriate section in the Item Spawner | w_ammo |  |  |
| cost | Base price | 910 |  |  |
| box_size | Number of bullets in ammo box | 16 |  |  |

</details>

### Inventory Ammo Parameters

<details>
    <summary>Inventory Ammo Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|---|---|
| inv_name | Inventory name | ammo-11.43x23-fmj |  |  |
| inv_name_short | Inventory short name | ammo-11.43x23-fmj_s |  |  |
| inv_weight | Inventory weight | .29 |   | Kilograms |
| description | Inventory description | ammo-11.43x23-fmj_descr |  |  |

</details>

#### Ammo Icon Parameters

<details>
    <summary>Ammo Icon Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|---|---|
| inv_grid_width | icon width | 2 | number of 50x50 pixels cells |  |
| inv_grid_height | icon height | 1 | number of 50x50 pixels cells |  |
| inv_grid_x | the coordinate of the upper left corner of the icon on a 50x50 pixel grid on the X axis | 55 | number of cells indented to the right |  |
| inv_grid_y | The coordinate of the upper left corner of the icon on a 50x50 pixel grid on the Y axis | 11 | number of cells indenting downward |  |

</details>

### Ammo Coefficients Parameters

<details>
    <summary>Ammo Coefficients Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|---|---|
| k_disp | Coefficient of accuracy of the bullet | 0.66 |  |  |
| k_impulse | Pulse coefficient transmitted to the ragdoll-body | 0.55 |  |  |
| k_ap |  | 0.1 |  |  |
| k_air_resistance | Bullet air resistance coefficient | 0.8 |  |  |
| k_hit | Bullet kill rate | 1.0 |  |  |
| k_bullet_speed | Bullet velocity coefficient | 1.15 |  |  |
| k_cam_dispersion | Camera dispersion coefficient | 1.0 |  |  |
| k_pierce | Penetration power of a bullet |  |  |  |
| k_dist | Range coefficient | 0.75 |  |  |

</details>

### Other parameters

<details>
    <summary>Other parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|---|---|
| tracer_color_ID |  | 2 |  |  |
| wm_size | texture size of the mark left on the ground after the explosion | 0.072 | The bigger the number, the bigger the mark |
| impair | Barrel wear coefficient from the bullet | 1.4 |  |  |
| tier |  | 2 |  |  |
| buck_shot | Number of components in a bullet, e.g. fractions | 9 |  |  |
| tracer | Is the bullet a tracer | off | true - 1 - on (Yes)<br> false - 0 - off (No) |  |
| 4to1_tracer | Will four tracers be combined into one | true | true - 1 - on (Yes)<br> false - 0 - off (No) |  |
| explosive | Will there be an explosion when touched | false | true - 1 - on (Yes)<br> false - 0 - off (No) |  |
| disassemble_parts |  | prt_i_ammo,prt_i_ammo |  |  |

</details>

### Sound Parameters

<details>
    <summary>Sound Parameters</summary>

| Parameter Name | Parameter Description | Example Value | Value Data Type | Parameter Possible Values And Their Descriptions |
|---|---|---|---|---|
| snd_on_take | The sound when taking | ammo |  |  |

</details>
