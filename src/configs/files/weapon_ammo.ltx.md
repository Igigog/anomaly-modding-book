# Weapon_Ammo Config File

## General parameters
| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| GroupControlSection |  | spawn_group |  |
| discovery_dependency |  |  |  |
| $spawn | the ammo directory in the Level Editor | "weapons\ammo\ammo_11.43x23_hydro" |  |
| class | engine ammo class | AMMO_S | AMMO_S - S_VOG25 - S_OG7B - S_M209 |
| cform | parameter for dynamic objects; necessary for correct creation of the skeleton model | skeleton |  |
| visual | World-модель коробки с патронами | dynamics\weapons\wpn_ammo\ammo_1143x23_fmj.ogf | Specifies the path to the file |
| $prefetch | preload queue | 64 |  |
| cost | Базовая цена | 910 | Specified in numbers |
| box_size | Количество патронов в пачке | 16 | Specified in numbers |

### Ammo parameters in the inventory
| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| inv_name | The name in the inventory | ammo-11.43x23-fmj |  |
| inv_name_short | short name in the inventory | ammo-11.43x23-fmj_s |  |
| inv_weight | inventory weight | .29 | The number is given in kilograms |
| description | Description in inventory | ammo-11.43x23-fmj_descr |  |

#### Ammo icon parameters
| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| inv_grid_width | icon width | 2 | number of 50x50 pixels cells |
| inv_grid_height | icon height | 1 | number of 50x50 pixels cells |
| inv_grid_x | the coordinate of the upper left corner of the icon on a 50x50 pixel grid on the X axis | 55 | number of cells indented to the right |
| inv_grid_y | The coordinate of the upper left corner of the icon on a 50x50 pixel grid on the Y axis | 11 | number of cells indenting downward |

### Parameters of ammo coefficients
| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| k_disp | Coefficient of accuracy of the bullet | 0.66 |  |
| k_impulse | Pulse coefficient transmitted to the ragdoll-body | 0.55 |  |
| k_ap |  | 0.1 |  |
| k_air_resistance | Bullet air resistance coefficient | 0.8 |  |
| k_hit	 | Bullet kill rate | 1.0 |  |
| k_bullet_speed | Bullet velocity coefficient | 1.15 |  |
| k_cam_dispersion | Camera dispersion coefficient | 1.0 |  |
| k_pierce | Penetration power of a bullet |  |  |
| k_dist | Range coefficient | 0.75 |  |

### Other parameters
| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| tracer_color_ID |  | 2 |  |
| wm_size | texture size of the mark left on the ground after the explosion | 0.072 | The bigger the number, the bigger the mark |
| impair | Barrel wear coefficient from the bullet | 1.4 |  |
| tier |  | 2 |  |
| buck_shot | Number of components in a bullet, e.g. fractions | 9 |  |
| tracer | Is the bullet a tracer | off | on (Yes) - off (No) |
| 4to1_tracer | Will four tracers be combined into one | true | true (yes) - false (no) |
| explosive | Will there be an explosion when touched | false | true (yes) - false (no) |
| disassemble_parts |  | prt_i_ammo,prt_i_ammo |  |

### Sound parameters
| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| snd_on_take | The sound when taking | ammo |  |