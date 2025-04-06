# Object Spawner

___

## General information

Spawns sections of physical objects or living creatures

![object-editor centered](images/object-spawner.png)

Similar to [Item Spawner](item-spawner.md) but has its own tools

- `Spawn at smart terrain` - allows you to spawn a selected section at a certain level and [smart terrain](../../glossary/glossary.md#SmartTerrain)
- `Spawn at cursor` - the same as in [Item Spawner](item-spawner.md)
- `Spawn at player` - spawns the selected section directly on the player's coordinates

___

## Technical part

Sections appear in the list because of the specified `engine class` in their [*.ltx](../../reference/file-formats/conf-script/ltx.md) file. The spawner script can be found in the file "`ui_debug_main.script`"

`Full list`

| Name | Engine Class |
|---|---|
| NPC (Mutant) | SM_KAR<br> SM_BLOOD<br> SM_BOARW<br> SM_BURER<br> SM_CAT_S<br> SM_CHIMS<br> SM_CONTR<br> SM_DOG_S<br> SM_FLESH<br> SM_IZLOM<br> SM_GIANT<br> SM_POLTR<br> SM_P_DOG<br> SM_DOG_P<br> SM_DOG_F<br> SM_SNORK<br> SM_TUSHK<br> SM_ZOMBI<br> SM_RAT<br> SM_KARLIK<br> SM_LURKER<br> SM_PSYSUCKER |
| NPC (Stalker) | AI_STL_S<br> AI_TRD_S |
| Squads (Mutant) | ON_OFF_S |
| Squads (Stalker) | ON_OFF_S |
| Squads (Story ID) | ON_OFF_S |
| Vehicles | C_HLCP_S<br> C_NIVA<br> SCRPTCAR |
| Anomaly | ZS_MBALD<br> ZS_GALAN<br> ZS_MINCE<br> ZS_RADIO<br> ZS_TORRD<br> ZS_NGRAV<br> Z_MBALD<br> Z_RADIO<br> Z_CFIRE<br> Z_NOGRAV<br> Z_TORRID<br> Z_RUSTYH<br> ZS_BFUZZ<br> ZS_AMEBA |
| Physic (Misc.) | O_PHYSIC<br> O_DSTRBL<br> O_PHYS_S<br> O_DSTR_S<br> S_INVBOX<br> O_INVBOX<br> S_EXPLO<br> II_EXPLO |
| Phantom | AI_PHANT |
