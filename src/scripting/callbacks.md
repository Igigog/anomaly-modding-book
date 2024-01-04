# Callbacks

___

## I. INTRODUCTION

Callbacks are a convenient and performant way to execute code when certain events occur. 

The idea is: you want a function of yours to be executed when something happens in-game, so you subscribe to a callback, and give it your function so that when the event does happen, it can *call it back*.

There are many callbacks. Most are defined statically in `axr_main.script`, but some are added by addons dynamically at runtime.

The "main" callbacks (i.e. the most often used ones) are :
1. `actor_on_update` - A callback called *really* frequently (almost every frame). In some cases, this is the only way to do what you need, but there is almost always a better option. This callback really isn't performance friendly, so it should be used with *extreme* caution;
2. `save_state` (and respectively `load_state`) - A callback fired when the player saves (and respectively loads) their game. This callback is fired with an argument : `m_data`, a table in which you can store (and respectively load) any information you want so that it persists in the save game;
3. `on_key_press` - A callback allowing you to listen to key presses and react accordingly.

There are three functions that exists allowing you to manipulate callbacks :
- `RegisterScriptCallback(string, function)` - used to register one of your functions to a given callback;
- `AddScriptCallback(string)` - used to create a new callback at runtime;
- `SendScriptCallback(string, ...)` - used to fire a callback with arguments.

You must register your functions to callbacks in `on_game_start`. This function will be called automatically by the game (if it exists in your script) after all scripts are loaded. This is because callbacks need to be created before you can register functions to them. The problem is that, when scripts are still loading, it is possible that not all the dynamic callbacks have been created yet.

```lua
function on_game_start()
    RegisterScriptCallback("actor_on_update", my_func)
end

function my_func()
    printf("we are in actor_on_update")
end
```


## II. CREATING CALLBACKS

As previously explained, callbacks can be added dynamically. This means you can create your own callbacks.

To do that, use the `AddScriptCallback(string)` function (exclusive to Anomaly 1.5.2) to add your new callback. You must do so at the root level of your script, so that other scripts can register callbacks later.

**Important :** Callback names have a risk of collision, so it is **highly** recommended you prefix/suffix your callbacks with a unique identifier (like a codename for your addon, or even your nickname - anything that can guarantee no-one else will name their callback the same).

```lua
AddScriptCallback("modding_book_something_happened")
```

Once you have created your callback, you can fire it whenever you want using `SendScriptCallback(string, ...)`. You must specify the callback's name, but after this, you can pass as many arguments as you want. They will be transited to the functions listening for that callback.

In the following example, we will create a callback that fires when the key **F** is pressed. To make the example more descriptive, it will be split in two files.


**File :** `gamedata\scripts\script_a.script`
```lua
-- A counter of how many times the player has paid respects
local respects_counter = 0

-- Create the new callback
AddScriptCallback("modding_book_on_pay_respects")

-- Register callbacks
function on_game_start()
    RegisterScriptCallback("on_key_press", some_key_was_press)
end

-- Function called when a key is pressed
function some_key_was_press(dik)
    -- If the key that was pressed is F
    if dik == DIK_keys.DIK_F then
        -- Increase the counter
        respects_counter = respects_counter + 1
        -- Send the newly created callback with the current value of the counter
        SendScriptCallback("modding_book_on_pay_respects", respects_counter)
    end
end
```

**File :** `gamedata\scripts\script_b.script`
```lua
-- Register callbacks
function on_game_start()
    RegisterScriptCallback("modding_book_on_pay_respects", is_paying_respects)
end

-- Function called when the player pays respects
function is_paying_respects(respects_count)
    -- print some message in the console showing how many times the player has paid respects
    printf("player has paid respects " .. respects_count .. " times")
end
```

## III. CALLBACKS LIST

The following is a non-exhaustive list of callbacks available in Anomaly 1.5.2. 

Technically, this should cover all the callbacks available in vanilla, but remember that addons (like the modded exes) can add additional callbacks too.

```
Player :
* on_before_level_changing                 Params: ()
* on_level_changing                        Params: ()
* actor_on_before_death                    Params: (<number>,<table>)
* actor_on_net_destroy                     Params: (<binder>)
* actor_on_first_update                    Params: (<binder>,<?>)
* actor_on_update                          Params: (<binder>,<?>)
* actor_on_weapon_fired                    Params: (<game_object>,<game_object>,<number>,<number>,<number>,<number>)
* actor_on_weapon_jammed                   Params: (<game_object>)
* actor_on_weapon_no_ammo                  Params: (<game_object>,<number>)
* actor_on_weapon_lower                    Params: (<game_object>)
* actor_on_weapon_raise                    Params: (<game_object>)
* actor_on_weapon_reload                   Params: (<game_object>,<number>)
* actor_on_weapon_zoom_in                  Params: (<game_object>)
* actor_on_weapon_zoom_out                 Params: (<game_object>)
* actor_on_item_take                       Params: (<game_object>)
* actor_on_item_take_from_box              Params: (<game_object>,<game_object>)
* actor_on_item_put_in_box                 Params: (<game_object>,<game_object>)
* actor_on_item_drop                       Params: (<game_object>)
* actor_on_item_use                        Params: (<game_object>,<string>)
* actor_on_item_before_use                 Params: (<game_object>,<table>)
* actor_on_item_before_pickup              Params: (<game_object>,<table>)
* actor_item_to_belt                       Params: (<game_object>)
* actor_item_to_ruck                       Params: (<game_object>)
* actor_item_to_slot                       Params: (<game_object>)
* actor_on_trade                           Params: (<game_object>,<?>,<number>)
* actor_on_init                            Params: (<binder>)
* actor_on_reinit                          Params: (<binder>)
* actor_on_info_callback                   Params: (<game_object>,<number>)
* actor_on_hit_callback                    Params: (<game_object>,<number>,<vector>,<game_object>,<number>)
* actor_on_attach_vehicle                  Params: (<game_object>)
* actor_on_detach_vehicle                  Params: (<game_object>)
* actor_on_use_vehicle                     Params: (<game_object>)
* actor_on_hud_animation_play              Params: (<table>,<game_object>)
* actor_on_hud_animation_end               Params: (<game_object>,<string>,<?>,<?>,<number>)
* actor_on_hud_animation_mark              Params: (<number>,<string>)
* actor_on_sleep                           Params: (<number>)
* actor_on_foot_step                       Params: (<game_object>,<number>,<?>,<?>,<?>)
* actor_on_interaction                     Params: (<string>,<game_object>,<string>)
* actor_on_before_hit                      Params: (<game_object>,<SHit>,<number>,<table>)
* actor_on_before_hit_belt                 Params: (<table>,<number>,<number>)
* actor_on_weapon_before_fire              Params: (<table>)
* actor_on_feeling_anomaly                 Params: (<game_object>,<table>)
* actor_on_leave_dialog                    Params: (<number>)
* actor_on_stash_create                    Params: (<table>)
* actor_on_stash_remove                    Params: (<table>)
* actor_on_frequency_change                Params: (<number>,<number>)
* actor_on_achievement_earned              Params: (<string>,<string>)
* actor_on_movement_changed                Params: (<number>)
* actor_on_footstep                        Params: (<string>,<number>,<boolean>,<table>)
* actor_on_jump                            Params: ()
* actor_on_land                            Params: (<number>)

NPCs :
* npc_on_use                               Params: (<game_object>,<game_object>)
* npc_on_choose_weapon                     Params: (<game_object>,<game_object>,<table>)
* npc_on_item_take                         Params: (<game_object>,<game_object>)
* npc_on_item_take_from_box                Params: (<game_object>,<game_object>,<game_object>)
* npc_on_item_drop                         Params: (<game_object>,<game_object>)
* npc_on_net_spawn                         Params: (<game_object>,<server_object>)
* npc_on_net_destroy                       Params: (<game_object>)
* npc_on_update                            Params: (<game_object>,<table>)
* npc_on_before_hit                        Params: (<game_object>,<SHit>,<number>,<table>)
* npc_on_hit_callback                      Params: (<game_object>,<number>,<vector>,<game_object>,<number>)
* npc_on_death_callback                    Params: (<game_object>,<game_object>)
* npc_on_fighting_actor                    Params: (<game_object>)
* npc_on_weapon_strapped                   Params: (<game_object>,<game_object>)
* npc_on_weapon_unstrapped                 Params: (<game_object>,<game_object>)
* npc_on_weapon_drop                       Params: (<game_object>,<game_object>)
* npc_on_hear_callback                     Params: (<game_object>,<number>,<?>,<number>,<number>,<vector>)
* npc_on_get_all_from_corpse               Params: (<game_object>,<game_object>,<game_object>,<boolean>)
* npc_on_eval_danger                       Params: (<game_object>,<table>)
* anomaly_on_before_activate               Params: (<game_object>,<game_object>)

Mutants :
* monster_on_update                        Params: (<game_object>,<table>)
* monster_on_before_hit                    Params: (<game_object>,<SHit>,<number>,<table>)
* monster_on_hit_callback                  Params: (<game_object>,<number>,<vector>,<game_object>,<number>)
* monster_on_net_spawn                     Params: (<game_object>,<server_object>)
* monster_on_net_destroy                   Params: (<game_object>)
* monster_on_death_callback                Params: (<game_object>,<game_object>)
* monster_on_actor_use_callback            Params: (<game_object>,<game_object>)
* monster_on_loot_init                     Params: (<game_object>,<table>)
* burer_on_before_weapon_drop              Params: (<game_object>,<game_object>)

Physical objects :
* physic_object_on_hit_callback            Params: (<game_object>,<number>,<vector>,<game_object>,<number>)
* physic_object_on_use_callback            Params: (<game_object>,<game_object>)

Vehicles :
* heli_on_hit_callback                     Params: (<game_object>,<number>,<nil>,<game_object>,<nil>)
* vehicle_on_death_callback                Params: (<number>)

Squads :
* squad_on_npc_creation                    Params: (<server_object>,<server_object>,<server_object>)
* squad_on_enter_smart                     Params: (<server_object>,<server_object>)
* squad_on_leave_smart                     Params: (<server_object>,<server_object>)
* squad_on_npc_death                       Params: (<server_object>,<server_object>,<server_object>)
* squad_on_update                          Params: (<server_object>)
* squad_on_first_update                    Params: (<server_object>)
* squad_on_add_npc                         Params: (<server_object>,<server_object>,<string>,<vector>,<number>,<number>)

WARNING!
the following 2 callbacks will ALWAYS fire on level change/loaded save because the old data isn't saved for compatibility purpose
it's up to the user to check for the case in which old level name/old game vertex is nil in their code if they want to use this

* squad_on_after_game_vertex_change        Params: (<server_object>,<number>,<number>,<boolean>)
* squad_on_after_level_change              Params: (<server_object>,<string>,<string>)

Smart terrains :
* smart_terrain_on_update                  Params: (<server_object>)
* on_try_respawn                           Params: (<server_object>,<table>)

Server objects :
* server_entity_on_register                Params: (<server_object>,<string>)
* server_entity_on_unregister              Params: (<server_object>,<string>)
* fill_start_position                      Params: ()
* se_stalker_on_spawn                      Params: (<server_object>)
* se_actor_on_STATE_Write                  Params: (<server_object>)
* se_actor_on_STATE_Read                   Params: (<server_object>)

GUI :
* ActorMenu_on_before_init_mode            Params: (<string>,<table>,<game_object>)
* ActorMenu_on_mode_changed                Params: (<number>,<number>)
* ActorMenu_on_item_drag_drop              Params: (<game_object>,<game_object>,<number>,<number>)
* ActorMenu_on_item_focus_receive          Params: (<game_object>)
* ActorMenu_on_item_focus_lost             Params: (<game_object>)
* ActorMenu_on_item_before_move            Params: (<table>,<number>,<game_object>,<string>,,<number>)
* ActorMenu_on_item_after_move             Params: (<number>,<game_object>,<string>,,<number>)
* ActorMenu_on_trade_started               Params: ()
* ActorMenu_on_trade_closed                Params: ()

* GUI_on_show                              Params: (<string>,<string>)
* GUI_on_hide                              Params: (<string>,<string>)

* map_spot_menu_add_property               Params: (<CUIWindow>,<number>,<string>,<string>)
* map_spot_menu_property_clicked           Params: (<CUIWindow>,<number>,<string>,<string>)

* main_menu_on_keyboard                    Params: (<number>,<number>,<CUIScriptWnd>,<boolean>)
* main_menu_on_init                        Params: (<CUIScriptWnd>)
* main_menu_on_quit                        Params: (<CUIScriptWnd>)

* on_screen_resolution_changed             Params: ()

Technical :
* on_game_load                             Params: (<binder>)
* on_key_press                             Params: (<number>)
* on_key_release                           Params: (<number>)
* on_key_hold                              Params: (<number>)
* on_before_key_press                      Params: (<number>,<number>,<boolean>,<table>)
* on_option_change                         Params: ()
* on_localization_change                   Params: ()
* on_console_execute                       Params: (<string>,<string>,<string>,...)
* on_before_save_input                     Params: (<number>,<number>,<table>)
* on_before_load_input                     Params: (<number>,<number>,<table>)

Files :
* save_state                               Params: (<table>)
* load_state                               Params: (<table>)
* on_pstor_save_all                        Params: (<game_object>,<?>)
* on_pstor_load_all                        Params: (<game_object>,<?>)

Others :
* on_enemy_eval                            Params: (<game_object>,<game_object>,<table>)
* on_before_surge                          Params: (<table>)
* on_before_psi_storm                      Params: (<table>)
* on_get_item_cost                         Params: look at bottom of utils_item.script for details
```
