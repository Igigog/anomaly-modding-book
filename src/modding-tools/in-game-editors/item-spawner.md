# Item Spawner

___

## General information

In this spawner you can spawn all item sections for the player

![item-spawner centered](assets/images/item-spawner.png)

In the left column, select the type of item

Further the item can be `selected in the list of sections` or `by clicking on the item icon`

Below there is a line with a choice of spawning: `in the inventory` or at the `place of the aiming cursor`

The item can also be spawned `by typing the name of the item's section` in the line

___

## Technical part

Items appear in the list because of the "`kind`" or `engine class` parameter in their [*.ltx](../../reference/file-formats/conf-script/ltx.md) file. The spawner script can be found in the file "`ui_debug_main.script`"

`Full list`

| Name | Technical type (kind or Engine Class) name |
|---|---|
| Artifacts | <abbr title="kind">i_arty</abbr><br><abbr title="kind">i_arty_junk</abbr><br><abbr title="Engine Class">ARTEFACT<br>SCRPTART</abbr> |
| Artifacts (Container) | <abbr title="kind">i_arty_cont</abbr> |
| Items (Food) | <abbr title="kind">i_mutant_cooked</abbr><br><abbr title="kind">i_mutant_raw</abbr><br><abbr title="kind">i_food</abbr><br><abbr title="Engine Class">II_FOOD<br>S_FOOD |
| Items (Drink) | <abbr title="kind">i_drink</abbr><br><abbr title="Engine Class">II_BOTTL |
| Items (Medical) | <abbr title="kind">i_medical</abbr><br><abbr title="Engine Class">II_BANDG<br>II_MEDKI<br>II_ANTIR |
| Items (Device) | <abbr title="kind">i_device</abbr><br><abbr title="Engine Class">DET_SIMP<br>DET_ADVA<br>DET_ELIT<br>DET_SCIE |
| Items (Tools) | <abbr title="kind">i_kit</abbr><br><abbr title="kind">i_tool</abbr> |
| Items (Repair) | <abbr title="kind">i_repair</abbr> |
| Items (Parts) | <abbr title="kind">i_part</abbr> |
| Items (Mics.) | <abbr title="kind">i_mutant_part</abbr><br><abbr title="kind">i_misc</abbr><br><abbr title="Engine Class">II_DOC<br>EQ_PATCH<br>II_ATTCH<br>II_BTTCH<br>D_FLALIT<br>S_PDA<br>D_PDA |
| Items (Note) | <abbr title="kind">i_letter</abbr> |
| Items (Quest) | <abbr title="kind">i_quest</abbr> |
| Items (Upgrades) | <abbr title="kind">i_upgrade</abbr> |
| Helmets | <abbr title="kind">o_helmet</abbr><br><abbr title="Engine Class">E_HLMET<br>EQU_HLMET |
| Outfits (Attachments) | <abbr title="kind">i_mutant_belt</abbr><br><abbr title="kind">i_attach</abbr><br><abbr title="kind">i_backpack</abbr><br><abbr title="Engine Class">EQ_BAKPK |
| Outfits (Light) | <abbr title="kind">o_light</abbr> |
| Outfits (Medium) | <abbr title="Engine Class">E_STLK<br>EQU_STLK</abbr><br><abbr title="kind">o_medium</abbr><br><abbr title="kind">o_sci</abbr> |
| Outfits (Heavy) | <abbr title="kind">o_heavy</abbr> |
| Weapons (Ammo) | <abbr title="kind">w_ammo</abbr><br><abbr title="Engine Class">AMMO<br>AMMO_S<br>S_OG7B<br>S_VOG25<br>S_M209</abbr> |
| Weapons (Melee) | <abbr title="kind">w_melee</abbr><br><abbr title="Engine Class">WP_KNIFE</abbr> |
| Weapons (Pistol) | <abbr title="kind">w_pistol</abbr><abbr title="Engine Class"><br>WP_HPSA<br>WP_PM<br>WP_USP45</abbr> |
| Weapons (Shotgun) | <abbr title="kind">w_shotgun</abbr><br><abbr title="Engine Class">WP_ASHTG<br>WP_BM16 |
| Weapons (SMG) | <abbr title="kind">w_smg</abbr> |
| Weapons (Rifle) | <abbr title="kind">w_rifle</abbr><br><abbr title="Engine Class">WP_AK74<br>WP_GROZA<br>WP_LR300<br>WP_VAL</abbr> |
| Weapons (Sniper) | <abbr title="kind">w_sniper</abbr><br><abbr title="Engine Class">WP_SVD<br>WP_SVU</abbr> |
| Weapons (Explosive) | <abbr title="kind">w_explosive</abbr><abbr title="Engine Class"><br>WP_RG6<br>WP_RPG7<br>G_F1_S<br>G_RGD5_S<br>G_F1<br>G_RGD5</abbr> |
| Weapons (Misc.) | <abbr title="kind">w_misc</abbr><br><abbr title="Engine Class">WP_SCOPE<br>WP_SILEN<br>WP_GLAUN<br>S_WPN_MISC<br>WP_BINOC<br>II_BOLT</abbr> |
