# NPC Creation

Written by GhenTuong#1278

Formatted and edited by @nltp_ashes

Table of content :

- [Chapter 1 : Configuration](npc_creation.md#chapter-1--configuration)
- [Chapter 1.A : Creating your own mod files for character creation](npc_creation.md#chapter-1a--creating-your-own-mod-files-for-character-creation)
- [Chapter 2 : NPC section](npc_creation.md#chapter-2--npc-section)
- [Chapter 3 : NPC profile](npc_creation.md#chapter-3--npc-profile)
- [Chapter 4 : Squad and smart terrain](npc_creation.md#chapter-4--squad-and-smart-terrain)
- [Chapter 5 : Spawn](npc_creation.md#chapter-5--spawn)
- [Chapter 5.A : Spawn by script](npc_creation.md#chapter-5a--spawn-by-script)
- [Chapter 5.B : Spawn by adding to simulation.ltx](npc_creation.md#chapter-5b--spawn-by-adding-to-simulationltx)

___

## Chapter 1 : Configuration

What is stalker configuration:  
All dynamic objects are configured in `_unpacked\configs\system.ltx`.  
To not overcrowd the file, different configurations are grouped into multiple files, and they are included in system.ltx.

What files to pay attention to:

- `_unpacked\configs\creatures\*`
- `_unpacked\configs\gameplay\*`
- `_unpacked\configs\misc\squad_descr\*`
- `_unpacked\configs\scripts\*`

## Chapter 1.A: Creating your own mod files for character creation

While it's possible to configurate the files already present, for independent addons it's advisable to create your own files.

One of the methods is by including your files:

NB: "my_mod_name" will stand for whatever name you choose.

- for example if you want to call your mod "revolution", the file names would be:
  - spawn_sections_revolution.ltx
  - character_desc_revolution.xml
  - dialogs_revolution.xml
  - npc_profile_revolution.xml
  - squad_descr_revolution.ltx

**File :** `_unpacked\configs\creatures\spawn_section.ltx`

- you add:  #include "spawn_sections_my_mod_name.ltx"

**Folder :** `_unpacked\configs\creatures\`

- you add a file called: spawn_sections_my_mod_name.ltx

**File :** `_unpacked\configs\system.ltx`

- you add in the line of [dialogs]: dialogs_my_mod_name
- you add in the line of [profiles]:
  - in the line of "files": npc_profile_my_mod_name
  - in the line of "specific_characters_files": character_desc_my_mod_name

**Folder :** `_unpacked\configs\gameplay\`

- you add the files:
  - character_desc_my_mod_name.xml
  - dialogs_my_mod_name.xml
  - npc_profile_my_mod_name.xml

**Folder :** `_unpacked\configs\misc\squad_descr`

- you add a file: squad_descr_my_mod_name.ltx
(This one you doesn't need an include, squad_descr.ltx does it automatically)

For your own custom files, you can copy-paste already exisiting ones and rename them. In that case, be careful to delete everything in your copied file from the old file, except the opening and closing node. For exemple, in dialogs file, <game_dialogs> and </game_dialogs> have to remain, and your code has to be inbetween of these two nodes.

___

## Chapter 2 : NPC section

**File :** `_unpacked\configs\creatures\spawn_sections_bar.ltx`

```ini,lang=LTX
[bar_visitors_barman_stalker_trader]:stalker_silent
$spawn                      = "respawn\bar_visitors_barman_stalker_trader"
character_profile           = bar_visitors_barman_stalker_trader
story_id                    = bar_visitors_barman_stalker_trader
```

This is an example of a section.

- `[bar_visitors_barman_stalker_trader]:stalker_silent`  
  Section name is `bar_visitors_barman_stalker_trader`, and inherits section `stalker_silent`.  
  `bar_visitors_barman_stalker_trader` has all the lines of `stalker_silent`.  
  It's useful for making multiple sections having similar lines and only have a few different lines to avoid mistakes and tediousness when modifying.

- `$spawn`  
  This on is not important, ignore.

- `character_profile`  
  You will later create a profile for the character in _unpacked\configs\gameplay\.

- `story_id`  
  Used for scripting. Instead of searching every object in the game to find this character, you can get him from story objects storage.

Now you make your section. Let's call your new character "han_yue_ling". We create it right in this file.

**File :** `_unpacked\configs\creatures\spawn_sections_bar.ltx`

```ini,lang=LTX
[han_yue_ling]:stalker
character_profile           = han_yue_ling
story_id                    = han_yue_ling
```

I set it up to inherit "stalker" because I don't need the additional configuration in "stalker_silent" (see "stalker_silent" in `_unpacked\configs\creatures\spawn_sections_general.ltx`).

___

## Chapter 3 : NPC profile

**File :** `_unpacked\configs\gameplay\npc_profile_mlr.xml`

```xml
<!-- Bar -->
<character id="bar_visitors_barman_stalker_trader">
  <class>bar_visitors_barman_stalker_trader</class>
</character>
```

Very simple. Just make your NPC profile in a similar way.

**File :** `_unpacked\configs\gameplay\npc_profile_mlr.xml`

```xml
<character id="han_yue_ling">
  <class>han_yue_ling</class>
  <specific_character>han_yue_ling</specific_character>
</character>
```

Now we create a character description.

**File :** `_unpacked\configs\gameplay\character_desc_bar.xml`

```xml
<!-- Barkeep -->
<specific_character id="bar_visitors_barman_stalker_trader" team_default = "1">
  <name>bar_barmen_name</name>
  <icon>ui_inGame2_barman</icon>
  <map_icon x="1" y="4"></map_icon>
  <bio>bar_barmen_bio</bio>
  <class>bar_visitors_barman_stalker_trader</class>
  <community>trader</community>
  <terrain_sect>stalker_terrain</terrain_sect>
  <money min="1000000" max="1000000" infinitive="1"></money>
  <rank>18490</rank>
  <reputation>2408</reputation>
  <visual>actors\barman\barman</visual>
  <!-- <snd_config>characters_voice\human\stalker_1\</snd_config> -->
  <crouch_type>-1</crouch_type>
  <supplies></supplies>
  <start_dialog>bar_visitors_barman_stalker_trader_start_dialog</start_dialog>
  <actor_dialog>dm_init_batender</actor_dialog>
  <!-- LTTZ -->
  <actor_dialog>barkeep_living_legend</actor_dialog>
  <actor_dialog>barkeep_100rads</actor_dialog>
...
</specific_character>
```

- `<!-- Barkeep -->`  
  This is how you make comment in xml files. `<!-- -->`.

- `<specific_character id="bar_visitors_barman_stalker_trader" team_default = "1">`  
  Character description id.

- `<name>bar_barmen_name</name>`  
  Stalker name. The game will try to map this id with the strings in `_unpacked\configs\text\*`.

- `<icon>ui_inGame2_barman</icon>`  
  Same as `<name></name>` but in `_unpacked\configs\ui\textures_descr\*`.

- `<bio>bar_barmen_bio</bio>`  
  Not important. Can just leave it `<bio></bio>`.

- `<class>bar_visitors_barman_stalker_trader</class>`  
  Character profile. Not to confuse with character description.  
  Multiple character descriptions can be linked to one character profile.  
  When a stalker is spawned, it will randomly pick one of the character descriptions.  
  So although they are the same "stalker_level_4" they have different names, icons, models, voices.

- `<community>trader</community>`  
  Faction. dolg,freedom,stalker,army, etc.

- `<terrain_sect>stalker_terrain</terrain_sect>`  
  Not important. Just keep it as is.

- `<visual>actors\barman\barman</visual>`  
  Stalker model.

- `<crouch_type>-1</crouch_type>`  
  No idea. Maybe it's because Barman has unique animations? I don't create this line in my character description.

- `<supplies></supplies>`  
  Items that are guaranteed to be given to the stalker when he is spawned.

- `<start_dialog>bar_visitors_barman_stalker_trader_start_dialog</start_dialog>`  
  Stalkers will speak this dialog when initiating dialog.

- `<actor_dialog>dm_init_batender</actor_dialog>`  
  One of the dialog options that actor can choose after `<start_dialog></start_dialog>`.

So we make our character description like this. Don't forget to create a name string id, an icon id, making your unique model `actors\han_yue_ling.ogf`.

**File :** `_unpacked\configs\gameplay\character_desc_bar.xml`

```xml
<specific_character id="han_yue_ling" team_default = "1">
  <name>han_yue_ling_name</name>
  <icon>han_yue_ling_icon</icon>
  <map_icon x="1" y="4"></map_icon>
  <bio></bio>
  <class>han_yue_ling</class>
  <community>dolg</community>
  <terrain_sect>stalker_terrain</terrain_sect>
  <money min="1000000" max="1000000" infinitive="1"></money>
  <rank>18490</rank>
  <reputation>2408</reputation>
  <visual>actors\han_yue_ling</visual>
  <snd_config>characters_voice\human\stalker_1\</snd_config>
  <supplies></supplies>

  <!-- No dialog. For now. -->
</specific_character>
```

___

## Chapter 4 : Squad and smart terrain

You don't spawn a stalker object alone. Stalkers and monsters always come with squads. Even when there is only one NPC, you still have to put him in a squad.

Squad configuration is in `_unpacked\configs\misc\squad_descr\*`.

**File :** `_unpacked\configs\misc\squad_descr\squad_descr_bar.xml`

```ini,lang=LTX
[bar_visitors_barman_stalker_trader_squad]:online_offline_group
faction                     = stalker
npc                         = bar_visitors_barman_stalker_trader
target_smart                = bar_visitors
spawn_point                 = bar_barman_spawn
story_id                    = bar_visitors_barman_stalker_trader_squad
always_arrived              = true
```

- `[bar_visitors_barman_stalker_trader_squad]:online_offline_group`  
  No need to explain again. See Chapter 1.

- `faction = stalker`  
  Squad faction.

- `npc = bar_visitors_barman_stalker_trader`  
  NPCs that are guaranteed to be spawned in the squad. You put object section here. See Chapter 1.

- `target_smart = bar_visitors`  
  The squad will try to reach this smart terrain and will stay here forever. Can use a condlist to change target.

- `spawn_point = bar_barman_spawn`  
  Where squad members appear when they are online. I don't find it useful so never use it.

- `story_id = bar_visitors_barman_stalker_trader_squad`  
  Squad story id. See Chapter 1.

- `always_arrived = true`  
  I don't know, never use it.

So we make our squad:

**File :** `_unpacked\configs\misc\squad_descr\squad_descr_bar.xml`

```ini,lang=LTX
[han_yue_ling_squad]:online_offline_group
faction                     = dolg
npc                         = han_yue_ling
target_smart                = bar_dolg_general
story_id                    = han_yue_ling_squad
```

You can always find smart terrain name in here. `_unpacked\configs\scripts\<level name>\smart\<smart terrain name>`.

Example: `_unpacked\configs\scripts\bar\smart\bar_dolg_bunker.ltx`

___

## Chapter 5 : Spawn

There are two ways to spawn your NPC : by script, or by adding your NPC to the correct smart terrain in `simulation.ltx`.

### Chapter 5.A : Spawn by script

Make a new file in `_unpacked\scripts\` like this:

**File :** `_unpacked\scripts\han_yue_ling.script`

```lua
-- Bind function actor_on_first_update() to callback "actor_on_first_update"
function on_game_start()
  RegisterScriptCallback("actor_on_first_update",spawn_han_yue_ling)
end

function spawn_han_yue_ling()
  -- Check if having info "han_yue_ling_init"
  if not has_alife_info("han_yue_ling_init") then
    -- Check if squad does not exist.
    if not get_story_se_object("han_yue_ling_squad") then
      -- Get smart terrain "bar_dolg_general"
      local smart = SIMBOARD.smarts_by_names["bar_dolg_general"]
      -- Spawn squad "han_yue_ling_squad"
      local squad = SIMBOARD:create_squad(smart,"han_yue_ling_squad")
    end
    -- Check if squad exist (spawned successfully).
    if get_story_se_object("han_yue_ling_squad") then
      -- Give info so the game won't spawn another squad every time loading a save file.
      give_info("han_yue_ling_init")
    end
  end
end
```

- `--[[ some comment ]]` or `-- some comment`  
  Is how you make comment lines in lua script.

Start a new game or load your save files and the npc will be spawned and stay around the campfire in duty headquarters yard.

NB: Potential bug

If you have multiple spawns of the same NPC, make sure that you gave the squad a story ID - the script checks for this story ID and if it can't find the ID it will spawn endlessly the same NPC.

### Chapter 5.B : Spawn by adding to simulation.ltx

Locate the file `simulation.ltx`, in `_unpacked\configs\misc\`. Inside of that file, you can locate the smart terrain where you want your NPC to spawn, and add your NPC to the list.

**File :** `_unpacked\configs\misc\simulation.ltx`

```ini,lang=LTX
...
[bar_dolg_general]
bar_dolg_general_petrenko_stalker_squad
bar_dolg_general_zoneguard_stalker_squad
duty_sim_squad_advanced                 = 1
duty_sim_squad_novice                   = 1
duty_sim_squad_veteran                  = 1
dolg_medic_squad
han_yue_ling_squad                      ; add your NPC to the list

...
```

Note that this method of spawning the NPC will not force the NPC to stay there, and you might need a script, or a logic scheme to force the NPC to stay at that smart terrain.

___

I will make more advanced guides if there are enough modders who are interested.
