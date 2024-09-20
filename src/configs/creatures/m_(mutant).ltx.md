# m_*Mutant*.ltx Config File

___

## Default parameters that any mutants have

### General parameters

Example value taken from vanilla m_bloodsucker.ltx

<details>
    <summary>General parameters</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| GroupControlSection |  | spawn_group |  |
| SpaceRestrictionSection |  | space_restrictor<br> zone_mosquito_bald<br> zone_witches_galantine<br> zone_burning_fuzz1<br> zone_mincer<br> zone_gravi_zone |  |
| $spawn |  | "monsters\bloodsuckers\bloodsucker_base" |  |
| $npc |  | on |  |
| $prefetch | Preload order? | 16 |  |
| visual | Model of a living mutant | monsters\krovosos\krovosos |  |
| corpse_visual | Dead mutant model | monsters\krovosos\krovosos_dead |  |
| destroyed_vis_name | visual, what remains when destroying a monster in an anomaly |  |  |
| cform | parameter for dynamic objects; necessary for correct creation of the skeleton model | skeleton | skeleton |
| class | engine mutant class | SM_BLOOD | SM_BLOOD -  |
| script_binding  |  | bind_monster.bind |  |
| rank |  | 16 |  |
| spec_rank | Monster rank displayed in statistics | normal |  |
| community | What type of monster belongs to | bloodsucker | Taken from game_relations.ltx |
| species | biological species | bloodsucker |  |
| monster_type |  |  |  |
| can_spawn_phantom | Can spawn phantoms | true |  |
| spawn_phantom |  | m_phantom_bloodsucker |  |
| killer_clsids | Game classes of objects from which a mutant can die in offline | Z_MINCER<br> Z_GALANT<br> ZS_BFUZZ<br> ZS_MBALD<br> ZS_GALAN<br> ZS_MINCE |  |
| material | Mutant material specified in [Materials](../../main-folders-and-files/shaders-list/materials-list.md) | creatures\medium |  |
| selector_approach |  |  |  |
| terrain |  | bloodsucker_terrain |  |
| step_params | Step parameters | m_bloodsucker_step_params |  |
| LegsCount | Legs count | 2 |  |

</details>

### AI

<details>
    <summary>AI</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| DayTime_Begin | Beginning of a mutant's day | 22 | Game Time |
| DayTime_End | End of a mutant's day | 5 | Game Time |
| Min_Satiety | Minimum hunger value | 0.000055 |  |
| Max_Satiety | Maximum hunger value | 0.9 |  |
| ef_creature_type | Mutant AI type ([Evaluation Function](../../main-folders-and-files/file-formats/index.html#efd-evaluation-function-data)) | 13 | -1 - <abbr title="Unconfirmed">No AI?</abbr><br> 1 - ?<br> 2 - Rat<br> 3 - Zombie<br> 4 - <abbr title="Unconfirmed">Zombified Man?</abbr><br> 5 - Poltergeist<br> 6 - Blind Dog<br> 7 - Flesh<br> 8 - ?<br> 9 - ?<br> 10 - ?<br> 11 - Boar<br> 12 - Controller<br> 13 - Bloodsucker<br> 14 - <abbr title="Unconfirmed">Soldier?</abbr><br> 15 - ?<br> 16 - <abbr title="Unconfirmed">Military Stalker?</abbr><br> 17 - Stalker<br> 18 - Burer<br> 19 - Psevdogiant<br> 20 - Chimera<br> 21 - Fracture |
| ef_weapon_type |  | 2 |  |
| ef_detector_type | Type of detector used ([Evaluation Function](../../main-folders-and-files/file-formats/index.html#efd-evaluation-function-data)) | 1 | 1 - no detector<br> 2 - simple detector<br> 3 - visual detector |
| panic_threshold  | The threshold below which there will be panic | 0.01 |  |
| weapon_usage | <abbr title="Unconfirmed">Ability to use weapons(?)</abbr> | 0 |  |

</details>

### Bones

<details>
    <summary>Bones</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| bone_head  |  | bip01_head | bone name |
| bone_fire |  | bip01_head | bone name |
| bone_eye_left |  | bip01_ponytail1 | bone name |
| bone_eye_right |  | bip01_ponytail2 | bone name |
| bone_spin |  | bip01_spine1 | bone name |

</details>

### Invertory

<details>
    <summary>Invertory</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| icon | Icon in inventory | ui_npc_monster_krovosos |  |
| Spawn_Inventory_Item_Section | What can be found during the search  | mutant_krovosos_jaw | Taken from the file monster_items.ltx |
| Spawn_Inventory_Item_Probability | The chance of a body part falling out  | 0.0 | if you set it to 1.0, it will always fall out. If set to 2.0, two pieces will fall out. |

</details>

### Influences

#### Fire

<details>
    <summary>Fire</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| fire_max_distance |  | 0 |  |
| fire_max_power |  | 5 |  |
| fire_linear_factor |  | 0 |  |
| fire_quadratic_factor |  | 0.025 |  |

</details>

#### Psy

<details>
    <summary>Psy</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| psy_max_distance |  | 0 |  |
| psy_max_power |  | 5 |  |
| psy_linear_factor |  | 0.05 |  |
| psy_quadratic_factor |  | 0 |  |

</details>

#### Radiation

<details>
    <summary>Radiation</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| radiation_max_distance |  | 0 |  |
| radiation_max_power |  | 0.01 |  |
| radiation_linear_factor |  | 1 |  |
| radiation_quadratic_factor |  | 1 |  |
| radiation_pp_effector_name |  | postprocess_rad |  |
| radiation_pp_highest_at |  | 0.02 |  |

</details>

### Offline Alife

<details>
    <summary>Offline Alife</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Scheduled |  | on |  |
| Human |  | off |  |
| Health | amount of lives in offline | 700 |  |
| MinSpeed | minimum speed to move in offline | 2.0 |  |
| MaxSpeed | maximum speed to move in offline | 4.5 |  |
| going_speed |  | 3.0 |  |
| current_level_going_speed |  | 3.0 |  |
| search_speed |  |  |  |
| smart_terrain_choose_interval |  | 00:15:00 |  |

</details>

### Physics

<details>
    <summary>Physics</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| ph_box0_center |  | 0.0,  0.9,  0.0 |  |
| ph_box0_size |  | 0.35, 0.9,  0.35 |  |
| ph_box1_center |  | 0.0,  0.6,  0.0 |  |
| ph_box1_size |  | 0.40, 0.6,  0.40 |  |
| ph_foot_size |  | 0.20, 0.23, 0.20 |  |
| ph_crash_speed_min |  | 100 |  |
| ph_crash_speed_max |  | 200 |  |
| ph_collision_damage_factor |  | 0.1 |  |
| ph_mass |  | 150 |  |
| ph_skeleton_airr_lin_factor |  | 2.0 |  |
| ph_skeleton_airr_ang_factor |  | 0.0 |  |
| ph_skeleton_hinger_factor1 |  | 1.0 |  |
| ph_skeleton_ddelay | Time of change in the value of friction in the joint since the creation of the shell | 15.0 |  |
| ph_skel_fatal_impulse_factor |  | 12.0 |  |
| ph_after_death_velocity_factor |  | 0.75 |  |
| ph_skel_shot_up_factor |  | 0.25 |  |

</details>

### Movement

#### Velocities

<details>
    <summary>Velocities</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Velocity_Stand |  |  |  |
| Velocity_RunFwdNormal | running speed |  |  |
| Velocity_RunFwdDamaged | running speed when wounded |  |  |
| Velocity_WalkFwdNormal | step velocity |  |  |
| Velocity_WalkFwdDamaged | step velocity when wounded |  |  |
| Velocity_Drag | velocity when dragging an object |  |  |
| Velocity_Steal | sneak velocity |  |  |

</details>

#### Accelerations

<details>
    <summary>Accelerations</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Accel_Generic | Total mutant speed | 1.5 |  |
| Accel_Calm | Mutant acceleration at calm | 2.5 |  |
| Accel_Aggressive | Mutant acceleration in an aggressive state | 20.0 |  |

</details>

### Attack parameters

<details>
    <summary>Attack parameters</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| MinAttackDist | Minimum attack distance | 2.0 |  |
| MaxAttackDist | Maximum attack distance | 2.8 |  |
| EffectDistance |  | 20.0 |  |
| hit_type | Type of damage to the target | wound |  |
| as_min_dist |  | 2.0 |  |
| as_step |  | 0.0 |  |
| Run_Attack_Dist |  | 3.5, 4.5 |  |
| Run_Attack_Delay |  | 1000, 3000 |  |
| attack_params |  | m_bloodsucker_attack_params |  |
| attack_effector |  | m_bloodsucker_attack_effector |  |
| Melee_Rotation_Factor | Angular velocity during melee | 2.0 |  |

</details>

#### Attack On Move

<details>
    <summary>Attack On Move</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| aom_enabled | Whether the ability to attack on the move is enabled | 1 |  |
| aom_only_jump | Ability to attack only when jumping | 1 |  |
| aom_animation_left | Attack animations on the move left? | stand_run_attack_left_ |  |
| aom_animation_right | Attack animations on the move right? | stand_run_attack_right_ |  |
| aom_far_radius |  | 15 |  |
| aom_max_go_close_time |  | 8 |  |
| aom_prepare_time  |  | 5 |  |
| aom_attack_radius |  | 1 |  |
| aom_update_side_period |  | 4 |  |
| aom_prediction_factor |  | 1.2 |  |

</details>

### Entity Conditions

<details>
    <summary>Entity Conditions</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| satiety_v | Rate of decrease in satiety over time | 0.0001 |  |
| radiation_v | Radiation reduction rate | 0.00001 |  |
| satiety_power_v | Increasing stamina with decreasing satiety | 0.005 |  |
| satiety_health_v | Increasing health with decreasing satiety | 0.001 |  |
| satiety_critical | The critical satiety value at which health begins to decrease |  |  |
| radiation_health_v | Reduced health when exposed to radiation | 0.0 |  |
| morale_v | Rate of Moral Restoration | 0.01 |  |
| health_hit_part | <abbr title="Unconfirmed">the percentage of the hit that goes to take away health?</abbr> | 1.0 |  |
| power_hit_part | <abbr title="Unconfirmed">the percentage of the hit that goes to take away power?</abbr> | 1.0 |  |
| psy_health_v | Speed of psy health recovery | 0.1 |  |
| health_restore_v | <abbr title="Unconfirmed">Restoring health over time?</abbr> | 0.0001 |  |
| immunities_sect | Mutant immunities section | bloodsucker_immunities |  |
| protections_sect | Mutant protections section | bloodsucker_protections |  |
| bleeding_v | Blood loss at nominal wound per second | 0.008 |  |
| wound_incarnation_v | <abbr title="Unconfirmed">the steepness of the healing curve (what percentage of the wound remains after healing in a game second)?</abbr> | 0.02 |  |
| min_wound_size | Minimum value at which bleeding will start | 0.0226 |  |
| DamagedThreshold | The value at which the wound animation starts to play | 0.36 |  |

</details>

#### Sleep settings

coefficients of parameter change rates during sleep

<details>
    <summary>Sleep settings</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| sleep_health | <abbr title="Unconfirmed">Restoring health when sleeping?</abbr> | 1.0 |  |
| sleep_power | Recovering strength when sleeping | 1.0 |  |
| sleep_satiety | Decreased strength when sleeping | 1.0 |  |
| sleep_radiation | damage from radiation while sleeping in a radioactive zone | 1.0 |  |
| sleep_psy_health | <abbr title="Unconfirmed">Restoring psi health when sleeping?</abbr> | 1.0 |  |

</details>

#### Eat settings

<details>
    <summary>Eat settings</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| eat_freq | bite frequency | 5.0 | Specified in seconds |
| eat_slice | increase in satiety at one bite | 0.05 |  |
| eat_slice_weight | reduction of food from a corpse in one bite | 10.0 |  |
| satiety_threshold | If the value is lower than specified, the monster becomes hungry | 0.8 |  |
| distance_to_corpse | Distance to corpse to start playing eating animation | 0.8 |  |

</details>

#### Morale settings

<details>
    <summary>Morale settings</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Morale_Hit_Quant |  | 0.1 |  |
| Morale_Attack_Success_Quant | increase in morale during a successful attack | 0.1 |  |
| Morale_Take_Heart_Speed |  | 0.1 |  |
| Morale_Despondent_Speed |  | 0.01 |  |
| Morale_Stable_Speed |  | 0.01 |  |
| Morale_Despondent_Threashold |  | 0.5 |  |

</details>

### Sounds and sound parameters

<details>
    <summary>Sounds</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| sound_idle | Idle sound | monsters\bloodsucker\idle_ |  |
| sound_eat | sound of eating | monsters\bloodsucker\eat_ |  |
| sound_aggressive | sound of aggression | monsters\bloodsucker\sucker_breath_mix_ |  |
| sound_attack_hit | Sound of attack | monsters\bloodsucker\attack_hit_ |  |
| sound_take_damage | sound of taking damage | monsters\bloodsucker\hit_ |  |
| sound_die | Sound of death | monsters\bloodsucker\die_ |  |
| sound_panic | Sound of panic | monsters\bloodsucker\hit_ |  |
| sound_die_in_anomaly | Sound when dying in an anomaly |  |  |
| sound_distant_idle | <abbr title="Unconfirmed">The sound of idling in the distance?</abbr> | monsters\bloodsucker\die_ |  |

</details>

#### Sounds parameters

<details>
    <summary>Sounds parameters</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| distant_idle_sound_delay |  | 80000 |  |
| distant_idle_sound_range |  | 100.0 |  |
| idle_sound_delay | random delay between sound playback at idle | 95000 | 0 to N |
| eat_sound_delay | random delay between playing the sound of eating | 3000 | 0 to N |
| attack_sound_delay | random delay between sound playback on attack | 1000 | 0 to N |
| SoundThreshold |  | 0.05 | range [0 - 1] |
| max_hear_dist | Distance at which sounds are heard | 60 |  |

</details>

### Damages

<details>
    <summary>Damages</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| damage | m_bloodsucker_damage |  |  |
| critical_wound_threshold | Critical wound threshold | -1 |  |
| critical_wound_decrease_quant |  | 0 |  |
| critical_wound_anim_head |  | critical_hit_torso_0 |  |
| critical_wound_bones_head |  | bloodsucker_critical_wound_bones_head |  |
| critical_wound_anim_torso |  | critical_hit_torso_0 |  |
| critical_wound_bones_torso |  | bloodsucker_critical_wound_bones_torso |  |
| critical_wound_anim_legs |  | critical_hit_torso_0 |  |
| critical_wound_bones_legs |  | bloodsucker_critical_wound_bones_legs |  |

</details>

### Abilitys

Unique abilitys for mutants. Each mutant may have its own individual abilities, or none at all.

### Vision

<details>
    <summary>Vision</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| eye_fov | Field of view | 180 |  |
| eye_range | Visibility range | 150 |  |
| DynamicObjectsCount | Determines how many objects the mutant can remember seeing | 32 |  |
| vision_free_section | Responsible for vision when the NPC is in a calm state | bloodsucker_vision_free |  |
| vision_danger_section | Responsible for vision when the NPC is in an alarmed state | bloodsucker_vision_danger |  |
| min_view_distance | Minimum visibility distance | 0.8 | coefficient, which is multiplied by eye_range, depending on the angle |
| max_view_distance | Maximum visibility distance | 1.0 | coefficient, which is multiplied by eye_range, depending on the angle |
| visibility_threshold | Value, when the sum is reached, the object is considered visible | 190.0 |  |
| always_visible_distance | Vision factor at which an NPC can see under all conditions, regardless of lighting and other parameters | 0.05 |  |
| time_quant | Used when calculating the visibility of one creature to another (the formula involves time, time quantum, illumination, speed of an object, and distance to it) | 0.0005 |  |
| decrease_value | Value by which the weight is reduced if the object is caught in the frustum, but is detached for some reason | 0.01 |  |
| velocity_factor | The higher the value, the faster we will be detected by NPCs when we move | 0.2 |  |
| luminocity_factor | light factor | 0.6 |  |
| transparency_threshold | The higher the value, the less you will be visible behind objects containing “transparent areas” such as bushes, reeds, etc. | 0.1 |  |
| feel_enemy_who_just_hit_max_distance | the distance at which the monster will sense the shooter in any case | 350 |  |

</details>

### Special Effectors

<details>
    <summary>Special Effectors</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| duality_h |  | 0.08 |  |
| duality_v |  | 0.06 |  |
| blur |  | 0.71 |  |
| gray |  | 0.5 |  |
| noise_intensity |  | 0.5 |  |
| noise_grain |  | 0.3 |  |
| noise_fps |  | 30 |  |
| color_base |  | 0.255,0.0,0.0 |  |
| color_gray |  | 0.333,0.333,0.333 |  |
| color_add |  | 0,0,0 |  |
| time |  | 0.65 |  |
| time_attack | fade in | 0.1 |  |
| time_release | fade out | 0.45 |  |
| ce_time |  | 0.6 |  |
| ce_amplitude |  | 10 |  |
| ce_period_number |  | 1.0 |  |
| ce_power |  | 2.0 |  |
| skin_armor |  | 0.3 |  |
| hit_fraction_monster |  | 0.5 |  |

</details>

## Unique parameters of different engine classes

___

### AI_Crow

<details>
    <summary>AI_Crow</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| speed |  | 6.0 |  |
| angular_speed |  | 0.1 |  |
| goal_change_delta |  | 5.0 |  |
| min_height |  | 30 |  |
| goal_variability |  | 50.0, 10.0, 50.0 |  |
| idle_sound_delta |  | 400.f |  |

</details>

___

### SM_BLOOD (Bloodsucker)

<details>
    <summary>SM_BLOOD</summary>

#### Sounds

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Sound_Growl |  | monsters\bloodsucker\sucker_growl_ |  |
| Sound_Alien |  | monsters\bloodsucker\sucker_breath_ |  |
| Sound_Invisibility_Change_State |  | monsters\bloodsucker\invisible |  |
| Sound_Vampire_Grasp |  | monsters\bloodsucker\vampire_grasp |  |
| Sound_Vampire_Sucking |  | monsters\bloodsucker\vampire_sucking |  |
| Sound_Vampire_Hit |  | monsters\bloodsucker\vampire_hit |  |
| Sound_Vampire_StartHunt |  | monsters\bloodsucker\vampire_grasp |  |

#### Velocities

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Velocity_Invisible_Linear |  | 5.0 |  |
| Velocity_Invisible_Angular |  | 4.62 |  |

#### Abilitys

##### Invisible Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Particle_Invisible |  | anomaly2\bloodsucker_shield |  |
| Particles_Invisible_Tracks |  | monsters\bloodsucker_step |  |
| Particles_Invisible_Tracks_Freq |  | 70 |  |
| Invisibility_BlinkTime |  | 300 |  |
| Invisibility_BlinkMicroInterval |  | 30 |  |
| Invisibility_EnergySpeed |  | 0.05 |  |
| full_visibility_radius |  | 5 |  |
| partial_visibility_radius |  | 9 |  |
| no_visibility_radius |  | 14 |  |
| visibility_state_change_min_delay |  | 1000 |  |

#### Vampire Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Vampire_Delay |  | 5000 |  |
| Vampire_Want_Speed |  | 0.1 |  |
| Vampire_Wound |  | 0.2 |  |
| Vampire_GainHealth | how many hp to restore? | 0.65 |  |
| Vampire_Sufficient_Hits |  | 5 |  |
| Vampire_Distance |  | 1 |  |
| vampire_effector |  | m_bloodsucker_vampire_effector |  |

#### Predator Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Predator_Visual | Visual in invisibility | monsters\krovosos\krovosos_xray |  |

</details>

___

### SM_BOARW (Boar)

<details>
    <summary>SM_BOARW</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| actor_restrictor |  | medium_monster |  |

### Abilitys

#### Squad seperation behaviour Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| separate_factor | pushing force | 0.8 |  |
| separate_range | radius in which the pushing acts | 3 |  |

</details>

___

### SM_BURER (Burer)

<details>
    <summary>SM_BURER</summary>

#### Sounds

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| sound_tele_hold |  | monsters\burer\burer_tele_hold |  |
| sound_tele_throw |  | monsters\burer\burer_tele_throw |  |
| sound_gravi_wave |  |  |  |
| sound_tele_attack |  |  |  |
| scan_sound |  | monsters\burer\burer_scan_affect_0 |  |

### Abilitys

#### Shield Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| shield_cooldown |  | 3000 |  |
| shield_time |  | 3000 |  |
| shield_keep_particle |  | artefact\af_thermal_hide |  |
| shield_keep_particle_period |  | 300 |  |
| Particle_Shield |  | artefact\af_thermal_hide |  |

#### Anti-aim Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| anti_aim_timeout |  | 2 | sec |
| anti_aim_effectors |  | effector_monster_hit_1, effector_monster_hit_2, effector_monster_hit_3, effector_monster_hit_4 |  |
| anti_aim_animation |  | stand_stamina_attack_ |  |
| anti_aim_max_angle |  | 0.3 |  |
| anti_aim_detection_gain_speed |  | 10 |  |
| anti_aim_detection_loose_speed |  | 0.1 |  |
| weapon_drop_velocity |  | 8 |  |
| weapon_drop_stamina_k |  | 0.6 | IF player stamina < stamina_hit*inv_weight(weapon param)*weapon_drop_stamina_k THEN weapon is dropped |
| weight_to_stamina_hit |  | 0.11 | kg to stamina % |

#### Gravi Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Gravi_Cooldown |  | 6840 | milisec |
| Gravi_MinDist |  | 1 | meter |
| Gravi_MaxDist |  | 18 | meter |
| Gravi_Speed |  | 33 | meter/sec |
| Gravi_Step |  | 2 | meter |
| Gravi_Time_To_Hold |  | 1940 | milisec |
| Gravi_Radius |  | 3.0 |  |
| Gravi_Impulse_To_Objects |  | 70.0 |  |
| Gravi_Impulse_To_Enemy |  | 330.0 |  |
| Gravi_Hit_Power |  | 0.61 |  |

#### Tele Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Tele_Max_Handled_Objects |  | 3 |  |
| Tele_Max_Time | max time to be in telekinesis | 6200 | s |
| Tele_Time_To_Hold |  | 340 |  |
| Tele_Object_Min_Mass |  | 10 |  |
| Tele_Object_Max_Mass |  | 1000.0 |  |
| Tele_Find_Radius |  | 25.0 |  |
| Tele_Min_Distance |  | 5 |  |
| Tele_Max_Distance |  | 60 |  |
| Tele_Raise_Speed |  | 7 |  |
| Tele_Fly_Velocity |  | 50 |  |
| Tele_Object_Height |  | 3 |  |

#### Scanner Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| scan_critical_value | threshold value | 25.0 |  |
| scan_radius | scanning radius | 50.0 |  |
| scan_velocity_threshold | the boundary speed up to which the actor's movement is ignored | 4.0 |  |
| scan_decrease_value | decrease in the current amount per second | 0.3 |  |
| scan_trace_time_freq | speed trace frequency | 2 |  |
| scan_effector_section |  | m_burer_scan_effector |  |

</details>

___

### SM_CAT_S (Cat)

<details>
    <summary>SM_CAT_S</summary>

### Movement

#### Jump Parameters

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| jump_delay | random delay between jumps | 2500 |  |
| jump_factor | jump factor | 2.0 |  |
| jump_ground_trace_range |  | 1.5 |  |
| jump_hit_trace_range |  | 2.0 |  |
| jump_build_line_distance |  | 5.0 |  |
| jump_min_distance | minimum jump distance | 2.0 |  |
| jump_max_distance | maximum jump distance | 8.0 |  |
| jump_max_angle | maximum angle between the direction of the monster's body and the victim | 0.33 |  |
| jump_max_height |  | 5.0 |  |
| jump_auto_aim_factor |  | 0.6 |  |

</details>

___

### SM_CHIMS (Chimera)

<details>
    <summary>SM_CHIMS</summary>

Attack specific

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| prediction_factor |  | 0.1 |  |
| attack_radius | run around radius | 1 |  |
| prepare_jump_timeout |  | 0 | Specified in milliseconds |
| attack_jump_timeout |  | 0 | Specified in milliseconds |
| stealth_timeout |  | 0 | Specified in milliseconds |
| num_attack_jumps |  | 1 |  |
| num_prepare_jumps |  | 0 |  |

</details>

___

### SM_CONTR (Controller)

<details>
    <summary>SM_CONTR</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| selector_free_hunting |  |  |  |
| selector_cover |  |  |  |
| selector_hear_sound |  |  |  |
| selector_getaway |  |  |  |
| selector_approach |  |  |  |
| selector_walk_around |  |  |  |

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| tube_condition_see_duration |  | 10 |  |
| tube_condition_min_delay |  | 2000 |  |
| tube_damage |  | 1.0 |  |
| tube_condition_min_distance |  | 3.5 |  |
| tube_at_once |  | false |  |

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| control_fx_texture |  | act\act_controller_hit |  |
| control_fx_texture2 |  | act\act_controller_hit1 |  |

#### Abilitys

#### Controlling Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Max_Controlled_Count |  | 10 |  |
| control_effector |  | controller_control_effector |  |
| Friend_Community_Overrides |  | monolith |  |
| Control_Hit |  | weapons\generic_weapon_controller |  |

#### Anti-aim Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| anti_aim_timeout |  | 4 | sec |
| anti_aim_effectors |  | effector_monster_hit_1, effector_monster_hit_2, effector_monster_hit_3, effector_monster_hit_4 |  |
| anti_aim_animation |  | stand_attack_ |  |
| anti_aim_max_angle |  | 0.5 |  |
| anti_aim_detection_gain_speed |  | 1 |  |
| anti_aim_detection_loose_speed |  | 0.1 |  |

</details>

___

### SM_DOG_S (Dog)

<details>
    <summary>SM_DOG_S</summary>

#### Mob-home parameters

Parameters of a dog's behavior in the area designated for him home

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| anim_factor |  | 50 | Specified in percent (from 1 to 100) |
| corpse_use_timeout | timeout on using a corpse | 10 | Specified in seconds |
| min_life_time | minimum waking time | 10 | сек (расчитывается min_life_time + rand(10) * min_life_time) |
| min_sleep_time | minimum sleep time | 5 | сек. (расчитывается min_sleep_time + rand(5) * min_sleep_time) |
| drive_out_time | the time during which the dog will try to chase the enemy away | 5 |  |
| min_move_dist | the minimum length of the patrol section | 4 | Specified in minutes |
| max_move_dist | maximum length of the patrol section | 6 | Specified in minutes |

</details>

___

### SM_FLESH (Flesh)

<details>
    <summary>SM_FLESH</summary>

#### Squad seperation behaviour

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| separate_factor | pushing force | 0.8 |  | 
| separate_range | radius in which the pushing acts | 3 |  |

</details>

___

### SM_IZLOM (Fracture)

___

### SM_GIANT (Psevdogaint)

<details>
    <summary>SM_GIANT</summary>

#### step effector

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| step_effector_time |  | 0.5 |  |
| step_effector_amplitude |  | 1.5 |  |
| step_effector_period_number |  | 5.0 |  |

#### AI

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Anomaly_Detect_Radius |  | 15.0 |  |
| Anomaly_Detect_Time_Remember |  | 10000 |  |

#### Huge Kick Ability

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| HugeKick_Damage |  | 1.4 |  |
| HugeKick_Particles |  | monsters\gigant_wave |  |
| HugeKick_MinMaxDist |  | 1,20 |  |
| HugeKick_MinMaxDelay |  | 7000, 12000 |  |
| HugeKick_Time_SlowDown |  | 2000 |  |

</details>

___

### AI_PHANT (Phantom)

<details>
    <summary>AI_PHANT</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| speed |  | 0.5 |  |
| angular_speed |  | 3.5 |  |
| contact_hit |  | 0.05 |  |

#### Sounds

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| sound_birth |  | monsters\poltergeist\attack_hit_0 |  |
| sound_fly |  | monsters\poltergeist\die_0 |  |
| sound_contact |  | monsters\poltergeist\hit_0 |  |
| sound_shoot |  | monsters\biting\def_0 |  |

#### Particles

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| particles_birth |  | monsters\phantom_birth |  |
| particles_fly |  | monsters\phantom_fly |  |
| particles_contact |  | monsters\phantom_death |  |
| particles_shoot |  | monsters\phantom_death |  |

</details>

___

### SM_POLTR (poltergeist)

<details>
    <summary>SM_POLTR</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| squad_attack_algorithm |  | 1 |  |

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| anger_hunger_threshold |  | 0.1 |  |
| anger_loud_threshold |  | 0.7 |  |

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Invisible_Energy_Restore_Velocity |  | 0.1 |  |
| Invisible_Energy_Decline_Velocity |  | 0.0 |  |
| Invisible_Energy_Critical_Value |  | 0.01 |  |
| Invisible_Energy_Activate_Value |  | 0.99 |  |
| Invisible_Energy_Aggressive_Restore_Velocity |  | 0.1 |  |

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Particles_Damage |  | monsters\polter_damage |  |
| Particles_Death |  | monsters\polter_death_00 |  |
| Particles_Idle |  | monsters\polter_idle_00 |  |
| Particles_Hidden |  | monsters\polter_linza_00 |  |

;-- Delays -------------------
| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Delay_Flame_Min |  | 30000 |  |
| Delay_Flame_Normal |  | 30001 |  |
| Delay_Flame_Aggressive |  | 30001 |  |

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Delay_Tele_Min |  | 0 |  |
| Delay_Tele_Normal |  | 100 |  |
| Delay_Tele_Aggressive |  | 10 |  |

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| Delay_Scare_Min |  | 30000 |  |
| Delay_Scare_Normal |  | 30001 |  |
| Delay_Scare_Aggressive |  | 30001 |  |

</details>

___

### SM_P_DOG (pseudodog)

___

### SM_DOG_P(psy_dog_s)

___

### SM_DOG_F (psy_dog_phantom_s)

___

### SM_RAT (Rat)

___

### SM_SNORK (Snork)

<details>
    <summary>SM_SNORK</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| jump_delay |  | 4000 |  |
| jump_factor |  | 2.0 |  |
| jump_ground_trace_range |  | 1.5 |  |
| jump_hit_trace_range |  | 2.0 |  |
| jump_build_line_distance |  | 6.0 |  |
| jump_min_distance |  | 3.0 |  |
| jump_max_distance |  | 10.0 |  |
| jump_max_angle |  | 0.6 |  |
| jump_max_height |  | 12 |  |
| jump_auto_aim_factor |  | 0 |  |

#### Sounds

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| sound_landing | Sound on landing | monsters\biting\def_ |  |

</details>

___

### SM_TUSH (tushkano)

___

### SM_ZOMBI (Zombie)

<details>
    <summary>SM_ZOMBI</summary>

| Parameter Name | Parameter Description | Example value | Parameter Possible Values and their descriptions |
---|---|---|---|
| FakeDeathCount | max count of fake death | 4 |  |
| StartFakeDeathHealthThreshold | health threshold after which fake death begins | 0.6 |  |

</details>
