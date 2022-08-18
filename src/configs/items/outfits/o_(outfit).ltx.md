# o_*Outfit*.ltx Config File

### General parameters

<details>
    <summary>General parameters</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| GroupControlSection |  | spawn_group |  |
| $spawn | the Outfit Directory in the Level Editor | "outfit\cs_light_novice_outfit" |  |
| cform | parameter for dynamic objects; necessary for correct creation of the skeleton model | skeleton | skeleton |
| discovery_dependency |  |  |  |
| class | engine outfit class | EQU_STLK |  |
| default_to_ruck | whether the weapon will be moved to the backpack instead of the slot when picked up | true | true (yes) - false (no) |
| sprint_allowed | Determines whether it is possible to run in this outfit | true | true (Yes) - false (No) |
| kind | The type of item to group into the appropriate section in the Item Spawner | o_light |  |
| cost | base price | 32340 |  |
| community | To which faction the suit belongs | csky |  |
| helmet_avaliable	 | Is a helmet available for this costume | true | true (Yes) - false (No) |
| backpack_avaliable | Is a backpack available for this suit | true | true (Yes) - false (No) |
| can_trade |  | true |  |

</details>

## Sound parameters

<details>
    <summary>Sound parameters</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| snd_on_take |  | outfit |  |

</details>

## Outfit parameters in inventory

<details>
    <summary>Outfit parameters in inventory</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| full_icon_name | the icon of the protagonist in a full-suit | npc_icon_svoboda_light_outfit | Not used (used only in the SoC inventory) |
| full_scale_icon | Coordinates of the protagonist icon in full suit | 10, 11 | Not used (used only in the SoC inventory) |
| character_portrait | Portrait of the NPC or protagonist wearing the outfit | ui_inGame2_csky_1_2 |  |
| inv_grid_height | icon height | 3 | number of 50x50 pixels cells |
| inv_grid_width | icon width | 2 | number of 50x50 pixels cells |
| inv_grid_x | the coordinate of the upper left corner of the icon on a 50x50 pixel grid on the X axis | 116 | number of cells indented to the right |
| inv_grid_y | The coordinate of the upper left corner of the icon on a 50x50 pixel grid on the Y axis | 0 | number of cells indenting downward |
| inv_name | The name in the inventory | csky_light_novice_outfit_name |  |
| inv_name_short | short name in the inventory | csky_light_novice_outfit_name |  |
| inv_weight | the inventory weight | 5.48 | The number is given in kilograms |
| description | Description in inventory | csky_light_novice_outfit_description |  |
| slot | Inventory slot number | 6 |  |

</details>

## Visual parameters

<details>
    <summary>Visual parameters</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| player_hud_section |  | actor_hud_cs1 |  |
| visual |  | dynamics\outfit\cs_light_outfit |  |
| actor_visual |  | actors\stalker_nebo\stalker_nebo_1 |  |
| npc_visual |  | actors\stalker_nebo\stalker_nebo_1 |  |

</details>

### Parameters of the upgrades/repairs

<details>
    <summary>Parameters of the upgrades/repairs</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| upgrades |  | up_gr_firstab_sunrise_3, up_gr_seconab_sunrise_3, up_gr_thirdab_sunrise_3 |  |
| installed_upgrades | installed upgrades |  |  |
| upgrade_scheme | upgrade_scheme | up_scheme_sunrise_1 |  |
| repair_type | item type for repair tools | outfit |  |
| repair_part_bonus |  | 0.17 |  |

</details>

#### Icons of the upgrades

<details>
    <summary>Icons of the upgrades</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| upgr_icon_x | the X coordinate of the upper left corner of the icon in the repair window | 953 | Specified in pixels |
| upgr_icon_y | top-left corner coordinate of the icon in the Y axis repair window | 365 | Specified in pixels |
| upgr_icon_width | Width of the icon in the repair window | 309 | Specified in pixels |
| upgr_icon_height | icon height in the repair window | 142 | Specified in pixels |

</details>

### Armor parameters

<details>
    <summary>Armor parameters</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| artefact_count | Number of artifact cells initially available | 1 |  |
| immunities_sect | Costume Immunities Section | sect_light_novice_outfit_immunities |  |
| control_inertion_factor | inertia in the outfit | 1 |  |
| use1_functor |  | gameplay_disguise.menu_patch |  |
| use1_action_functor |  | gameplay_disguise.menu_patch_action |  |
| additional_inventory_weight | Maximum weight at which the protagonist can walk | 5 | Specified in kilograms |
| additional_inventory_weight2 | Additional carrying weight | 5 | Specified in kilograms |

</details>

#### Parameters that affect the protoganist

<details>
    <summary>Parameters that affect the protoganist</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| bones_koeff_protection | Parameter coefficients of the "persistence" of the protagonist's bones in the suit | actor_armor_cs1 |  |
| hit_fraction_actor | General protection | 0.75 |  |
| power_loss | Responsible for fatigue | 0.05 | Specified in percent |
| bleeding_restore_speed | Responsible for stopping bleeding |  | Specified in percent |
| health_restore_speed | Responsible for restoring health |  | Specified in percent |
| power_restore_speed | Responsible for restoring powers |  | Specified in percent |

</details>

#### Parameters of the wearer's protection against various types of impacts provided by the outfits

<details>
    <summary>Parameters of the wearer's protection against various types of impacts provided by the outfits</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| burn_protection | Protection against fire | 0.145 |  |
| shock_protection | Protection against electric shock | 0.96 |  |
| radiation_protection | Radiation protection | 0.0025 |  |
| chemical_burn_protection | Chemicals Protection  | 0.037 |  |
| telepatic_protection | Psi Protection | 0 |  |
| strike_protection | Strike protection | 0.045 |  |
| explosion_protection | Explosion/shrapnel protection | 0.24 |  |
| wound_protection | Protection from Wounds | 0.31 |  |
| fire_wound_protection | Protection from firearms | 0.25 |  |

</details>

#### Immunity parameters of the outfits itself

<details>
    <summary>Immunity parameters of the outfits itself</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| burn_immunity | Immunity to fire exposure | 0.25 |  |
| chemical_burn_immunity | Immunity to chemical exposure | 0.07 |  |
| explosion_immunity | Immunity to effects from explosions/shrapnel | 0.2 |  |
| fire_wound_immunity | Immunity to exposure from firearms | 0.075 |  |
| radiation_immunity | Immunity to exposure from radiation | 0.0 |  |
| shock_immunity | Immunity to exposure to electricity | 0.03 |  |
| strike_immunity | Immunity to impact from strikes | 0.0 |  |
| telepatic_immunity | Immunity to psi exposure | 0.0 |  |
| wound_immunity | Immunity to the effects of wounds | 0.122 |  |

</details>

### AI parameters

<details>
    <summary>AI parameters</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| ef_equipment_type | Preference for NPCs | 3 |  |

</details>