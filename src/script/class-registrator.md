# Class Registrator

## About

There are no classes in Lua. Their support is implemented by exporting them from [C++](../glossary/coding/c++.md) to [Lua](../glossary/coding/lua.md) via [Luabind](../glossary/coding/luabind.md)

## Exported Classes List

### General

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
c_register (object_factory, "ui_main_menu.main_menu",                                            "MAIN_MNU",  "main_menu")
cs_register (object_factory, "ce_smart_zone",              "smart_terrain.se_smart_terrain",     "SMRTTRRN",  "smart_terrain")
cs_register (object_factory, "CLevelChanger",              "se_level_changer.se_level_changer",  "LVL_CHNG",  "level_changer_s")
cs_register (object_factory, "CActor",                     "se_actor.se_actor",                  "S_ACTOR",   "script_actor")
cs_register (object_factory, "CAI_Stalker",                "se_stalker.se_stalker",              "AI_STL_S",  "script_stalker")
cs_register (object_factory, "CHelicopter",                "se_heli.se_heli",                    "C_HLCP_S",  "script_heli")
cs_register (object_factory, "ce_script_zone",             "se_zones.se_restrictor",             "SPC_RS_S",  "script_restr") -- changed from ce_smart_zone to ce_script_zone for enter_zone and exit_zone callbacks
cs_register (object_factory, "CPhysicObject",              "se_item.se_physic",                  "O_PHYS_S",  "script_phys")
cs_register (object_factory, "smart_cover_object",         "se_smart_cover.se_smart_cover",      "SMRT_C_S",  "smartcover_s")
cs_register (object_factory, "CDestroyablePhysicsObject",  "se_item.se_physic",                  "O_DSTR_S",  "destrphys_s")
cs_register (object_factory, "hanging_lamp",               "se_item.se_lamp",                    "SO_HLAMP",  "hlamp_s")
cs_register (object_factory, "CCar",                       "se_car.se_car",                      "SCRPTCAR",  "car_s")
cs_register (object_factory, "CAI_Trader",                 "se_stalker.se_trader",               "AI_TRD_S",  "script_trader")
```

### Artefacts

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CElectricBall",  "se_artefact.se_artefact",  "SCRPTART",  "artefact_s")
```

### Monsters

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CAI_Bloodsucker",  "se_monster.se_monster",  "SM_BLOOD",   "bloodsucker_s")
cs_register (object_factory, "CAI_Boar",         "se_monster.se_monster",  "SM_BOARW",   "boar_s")
cs_register (object_factory, "CAI_Dog",          "se_monster.se_monster",  "SM_DOG_S",   "dog_s")
cs_register (object_factory, "CAI_Flesh",        "se_monster.se_monster",  "SM_FLESH",   "flesh_s")
cs_register (object_factory, "CAI_PseudoDog",    "se_monster.se_monster",  "SM_P_DOG",   "pseudodog_s")
cs_register (object_factory, "CBurer",           "se_monster.se_monster",  "SM_BURER",   "burer_s")
cs_register (object_factory, "CCat",             "se_monster.se_monster",  "SM_CAT_S",   "cat_s")
cs_register (object_factory, "CChimera",         "se_monster.se_monster",  "SM_CHIMS",   "chimera_s")
cs_register (object_factory, "CController",      "se_monster.se_monster",  "SM_CONTR",   "controller_s")
cs_register (object_factory, "CFracture",        "se_monster.se_monster",  "SM_IZLOM",   "fracture_s")
cs_register (object_factory, "CPoltergeist",     "se_monster.se_monster",  "SM_POLTR",   "poltergeist_s")
cs_register (object_factory, "CPseudoGigant",    "se_monster.se_monster",  "SM_GIANT",   "gigant_s")
cs_register (object_factory, "CZombie",          "se_monster.se_monster",  "SM_ZOMBI",   "zombie_s")
cs_register (object_factory, "CSnork",           "se_monster.se_monster",  "SM_SNORK",   "snork_s")
cs_register (object_factory, "CTushkano",        "se_monster.se_monster",  "SM_TUSHK",   "tushkano_s")
cs_register (object_factory, "CTushkano",        "se_monster.se_monster",  "SM_RAT",     "rat_s")
cs_register (object_factory, "CPsyDog",          "se_monster.se_monster",  "SM_DOG_P",   "psy_dog_s")
cs_register (object_factory, "CPsyDogPhantom",   "se_monster.se_monster",  "SM_DOG_F",   "psy_dog_phantom_s")
```

### Devices

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CTorch",               "se_item.se_item_torch",  "TORCH_S",   "device_torch_s")
-- cs_register (object_factory, "CFlashlight",       "se_item.se_item",        "D_FLALIT",  "device_flashlight") --61
-- cs_register (object_factory, "CDosimeter",        "se_item.se_item",        "D_DSMETR",  "device_dosimeter") --59
cs_register (object_factory, "CScientificDetector",  "se_item.se_detector",    "DET_SCIE",  "detector_scientific_s")
cs_register (object_factory, "CEliteDetector",       "se_item.se_detector",    "DET_ELIT",  "detector_elite_s")
cs_register (object_factory, "CAdvancedDetector",    "se_item.se_detector",    "DET_ADVA",  "detector_advanced_s")
cs_register (object_factory, "CSimpleDetector",      "se_item.se_detector",    "DET_SIMP",  "detector_simple_s")
cs_register (object_factory, "CPda",                 "se_item.se_pda",         "S_PDA",     "obj_pda_s")
-- cs_register (object_factory, "CPda",              "se_item.se_pda",         "D_PDA",     "obj_pda_s") --63
```

### Outfits

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
-- cs_register (object_factory, "CCustomOutfit",  "se_item.se_outfit",  "EQU_STLK",  "equ_stalker") --70
-- cs_register (object_factory, "CCustomOutfit",  "se_item.se_outfit",  "E_STLK",    "equ_stalker_s")
cs_register (object_factory, "CStalkerOutfit",    "se_item.se_outfit",  "E_STLK",    "equ_stalker_s")
cs_register (object_factory, "CHelmet",           "se_item.se_helmet",  "E_HLMET",   "equ_helmet_s")
```

### Weapons

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CWeaponBinoculars",        "se_item.se_weapon_magazined",          "WP_BINOC",  "wpn_binocular_s")
cs_register (object_factory, "CWeaponKnife",             "se_item.se_weapon",                    "WP_KNIFE",  "wpn_knife_s")
cs_register (object_factory, "CWeaponBM16",              "se_item.se_weapon_shotgun",            "WP_BM16",   "wpn_bm16_s")
cs_register (object_factory, "CWeaponGroza",             "se_item.se_weapon_magazined_w_gl",     "WP_GROZA",  "wpn_groza_s")
cs_register (object_factory, "CWeaponSVD",               "se_item.se_weapon_magazined",          "WP_SVD",    "wpn_svd_s")
cs_register (object_factory, "CWeaponAK74",              "se_item.se_weapon_magazined_w_gl",     "WP_AK74",   "wpn_ak74_s")
cs_register (object_factory, "CWeaponLR300",             "se_item.se_weapon_magazined",          "WP_LR300",  "wpn_lr300_s")
cs_register (object_factory, "CWeaponHPSA",              "se_item.se_weapon_magazined",          "WP_HPSA",   "wpn_hpsa_s")
cs_register (object_factory, "CWeaponPM",                "se_item.se_weapon_magazined",          "WP_PM",     "wpn_pm_s")
cs_register (object_factory, "CWeaponRG6",               "se_item.se_weapon_shotgun",            "WP_RG6",    "wpn_rg6_s")
cs_register (object_factory, "CWeaponRPG7",              "se_item.se_weapon_magazined",          "WP_RPG7",   "wpn_rpg7_s")
cs_register (object_factory, "CWeaponShotgun",           "se_item.se_weapon_shotgun",            "WP_SHOTG",  "wpn_shotgun_s")
cs_register (object_factory, "CWeaponAutomaticShotgun",  "se_item.se_weapon_automatic_shotgun",  "WP_ASHTG",  "wpn_auto_shotgun_s")
-- cs_register (object_factory, "CWeaponMagazined",      "se_item.se_weapon_magazined",          "WP_MAGAZ",  "wpn_magazined_s")
cs_register (object_factory, "CWeaponSVU",               "se_item.se_weapon_magazined",          "WP_SVU",    "wpn_svu_s")
cs_register (object_factory, "CWeaponUSP45",             "se_item.se_weapon_magazined",          "WP_USP45",  "wpn_usp45_s")
cs_register (object_factory, "CWeaponVal",               "se_item.se_weapon_magazined",          "WP_VAL",    "wpn_val_s")
cs_register (object_factory, "CWeaponVintorez",          "se_item.se_weapon_magazined",          "WP_VINT",   "wpn_vintorez_s")
cs_register (object_factory, "CWeaponWalther",           "se_item.se_weapon_magazined",          "WP_WALTH",  "wpn_walther_s")
--cs_register (object_factory, "CWeaponStatMgun",        "se_item.se_mgun",                      "W_STMGUN",  "wpn_stat_mgun")
```

### Anomaly Zones

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CHairsZone",        "se_zones.se_zone_visual",  "ZS_BFUZZ",  "zone_bfuzz_s")
cs_register (object_factory, "CMosquitoBald",     "se_zones.se_zone_anom",    "ZS_MBALD",  "zone_mbald_s")
cs_register (object_factory, "CMincer",           "se_zones.se_zone_anom",    "ZS_GALAN",  "zone_galant_s")
cs_register (object_factory, "CMincer",           "se_zones.se_zone_anom",    "ZS_MINCE",  "zone_mincer_s")
cs_register (object_factory, "CRadioactiveZone",  "se_zones.se_zone_anom",    "ZS_RADIO",  "zone_radio_s")
cs_register (object_factory, "CTorridZone",       "se_zones.se_zone_torrid",  "ZS_TORRD",  "zone_torrid_s")
cs_register (object_factory, "CAmebaZone",        "se_zones.se_zone_visual",  "ZS_AMEBA",  "zone_ameba_s")
cs_register (object_factory, "CNoGravityZone",    "se_zones.se_zone_anom",    "ZS_NGRAV",  "zone_nograv_s")
```

### Ammo

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CWeaponAmmo",  "se_item.se_ammo",  "AMMO_S",   "wpn_ammo_s")
cs_register (object_factory, "CWeaponAmmo",  "se_item.se_ammo",  "S_VOG25",  "wpn_ammo_vog25_s")
cs_register (object_factory, "CWeaponAmmo",  "se_item.se_ammo",  "S_OG7B",   "wpn_ammo_og7b_s")
cs_register (object_factory, "CWeaponAmmo",  "se_item.se_ammo",  "S_M209",   "wpn_ammo_m209_s")
```

### Grenades

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CF1",    "se_item.se_grenade",  "G_F1_S",    "wpn_grenade_f1_s")
cs_register (object_factory, "CRGD5",  "se_item.se_grenade",  "G_RGD5_S",  "wpn_grenade_rgd5_s")
```

### Eatable

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CFoodItem",  "se_item.se_eatable",  "S_FOOD",  "obj_food_s")
```

### Items

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CScope",            "se_item.se_item",  "WP_SCOPE",  "wpn_scope_s")
cs_register (object_factory, "CSilencer",         "se_item.se_item",  "WP_SILEN",  "wpn_silencer_s")
cs_register (object_factory, "CGrenadeLauncher",  "se_item.se_item",  "WP_GLAUN",  "wpn_grenade_launcher_s")
```

### Inventory Box

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CInventoryBox",  "se_item.se_invbox",  "S_INVBOX",  "inventory_box_s")
```

### Explosive

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
cs_register (object_factory, "CExplosiveItem",  "se_item.se_explosive",  "S_EXPLO",  "obj_explosive_s")
```

### Online | Offline Group

```lua,icon=.devicon-lua-plain,filepath="..\scripts\class_registrator.script"
s_register (object_factory,  "sim_squad_scripted.sim_squad_scripted",  "ON_OFF_S",  "online_offline_group_s")
```
