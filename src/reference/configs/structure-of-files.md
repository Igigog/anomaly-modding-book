# Structure of Files

The files may differ from each other, depending on their purpose, but they all have properties in common.

___

```admonish warning
Note this article describes the structure from CoP or SoC and may not apply to Anomaly!
```

## Section definition

For starters, any information is stored in "sections". These are a kind of objects with a set of parameters, which are usually predefined either by the game engine, if it is some kind of config, or by the scripts, if it is a file responsible for game logic.

Let's take the `stalker_sim_squad_novice` section of the `squad_desct.ltx` configuration file as an example:

```ini,lang=LTX
[stalker_sim_squad_novice]:online_offline_group
faction = stalker
npc_random = sim_default_stalker_0, sim_default_stalker_1, sim_default_stalker_2
npc_in_squad = 2, 3
```

In this case we can notice the following:

- Definition of the `stalker_sim_squad_novice` section. Works like a normal variable with similar properties:
  - The name cannot be repeated in the scope.
  - Can have different scopes, depending on the context.
  - It can be referenced if needed to change the section or simply put the information in a separate section (e.g., the meet section).
- Declaring the `faction`, `npc_random` and `npc_in_squad` parameters
- `online_offline_group` inheritance. Like any other inheritance, it inherits the parent's information, which can be overwritten if desired. In this case it inherits from the file `m_online_offline_group.ltx`:

```ini,lang=LTX
[online_offline_group]
GroupControlSection   = spawn_group
class         		= ON_OFF_S
;$spawn          = "scripts\online_offline_group"
```

___

## Parameter definition

As we discussed above, any section can have parameters. Until now, however, these were just static, simple parameters of the config file. I now propose to parse a slightly more structurally complex parameter from the game logic file:

```ini,lang=LTX
on_info = {-dont_have_info} %+add_info =play_sound(sound_name)% sr_idle@end
```

The structure may be confusing at first, but it is quite logical and simple. Let's start by breaking it down:

- Parameter name `on_info`
- Separator `=`
- The so-called "Condlist", which will be discussed later, `{-dont_have_info} %+add_info =play_sound(sound_name)% sr_idle@end`

___

## Definition of Condlist

As written above, the developers have made such a thing as "Condlist". What is it? In essence, it is a kind of block, in which there can be 3 things:

- Condition
- Action
- Value or reference

Example:

```text
{Condition} %Action% Reference
```

### Condition

It is written in `{}` brackets and is needed to create a condition check so that actions only take place when the condition is met. That is, actions will be executed only when the condition returns `True` when the "AND" operator is logically executed. You can specify things like:

- Check the presence of infoportion `+info_name`
- Check for absence of infoportion `-info_name`
- Checking for a chance of up to 100 in percent `~20`
- Function call from `xr_conditions.script`.
  - If the function name is preceded by `=`, it is expected to return `True`. This is exactly the same as `function() == True`.
  - If the function name is preceded by `!`, it is expected to return `False`. This is exactly the same as `function() == False`.

Example entry, in this case we have this condition:

- Lack of info under the name `info1`
- Availability of info called `info2`
- Player has an item called `item_name`
- Checking that it is not day

```ini,lang=LTX
{-info1 +info2 =actor_has_item(item_name) !is_day}
```

### Action

It is written in `%%` brackets and can hold such things as:

- Adding infoportion `+info_name`
- Removing infoportion `-info_name`
- Function call from `xr_effects.sctript`, unlike condition, can only be called with `=`

Example entry, in this case we have this action:

- Delete info called `info1`
- Add info called `info2`
- Issue `task_name`
- Retrieve `item_name`

```ini,lang=LTX
%-info1 +info2 =give_task(task_name) =remove_item(item_name)%
```

### Value or reference

And at the end, a reference or a value. There are no special features here. You can specify things like:

- Reference to the `sr_idle@test` section. Necessary for some configs and logic. How it works will be described below.
- The value of `st_text`, `true`, `10` and so on. Can be used in some configs, when you want to dynamically change the value of parameters. For example, as it is done with tasks in `task_manager.ltx`
- The keyword is `nil`. Means "nothing", analogous to null from programming languages. Can be used to specify a value or to end logic.

___

## Feature of use

The main feature of Condlist is that you can specify several Condlists in one parameter. For example:

```ini,lang=LTX
[hit]
on_info = {=hit_by_actor =hitted_on_bone(head_boss:boss_jaw:brow:ear_r:eye_l:eye_r:) -zat_b106_one_shot} %+zat_b106_one_shot +zat_b108_actor_damaged_chimera +zat_b106_ahtung%, {=hit_by_actor !hitted_on_bone(head_boss:boss_jaw:brow:ear_r:eye_l:eye_r:) -zat_b108_actor_damaged_chimera} %+zat_b108_actor_damaged_chimera%
```

This is the section from the file `zat_b106_chimera.ltx`. As we can see, there are two Condlists in the on_info parameter. They are separated by a comma and do the following:

- First Condlist:
  - Condition.
    - `=hit_by_actor` - damage dealt by the player?
    - `=hitted_on_bone(head_boss:boss_jaw:brow:ear_r:eye_l:eye_r:)` - damage done to these bones?
    - `-zat_b106_one_shot` - no info with this name?
  - Action.
    - `+zat_b106_one_shot` - gives out info with this name
    - `+zat_b108_actor_damaged_chimera` - gives out info with this name
    - `+zat_b106_ahtung` - gives out info with this name
- Second Condlist:
  - Condition.
    - `=hit_by_actor` - damage dealt by player?
    - `=hitted_on_bone(head_boss:boss_jaw:brow:ear_r:eye_l:eye_r:)` - damage is NOT done to these bones?
    - `-zat_b108_actor_damaged_chimera` - no info with this name?
  - Action.
    - `+zat_b108_actor_damaged_chimera` - gives info with this name

In this example, we have no references or variables, because the section implies that we only react when we take damage. So we have only actions and checks here.

___

## Sources

[GitHub Wiki Page](https://github.com/AziatkaVictor/ltx-support/wiki/Structure-of-Files)
