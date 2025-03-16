# *.script

___

## About

Contain some game functions, command sequences, written in [Lua](../../../terminology/coding/lua.md) scripting language.

~~~admonish example title='Script file might look like:'
```lua,filepath="...\scripts\actor_status_thirst.script"
function create()
	printdbg("- Water deprivation | Enabled")
	feature_state = true
	last_drink 				= last_drink or 0
	RegisterScriptCallback("actor_on_update",actor_on_update)
	RegisterScriptCallback("actor_on_item_use",actor_on_item_use)
	RegisterScriptCallback("actor_on_sleep",actor_on_sleep)
	actor_status.add_indicator("Thirst",{
		index= 3,
		typ= "state",
		functor= {"actor_status_thirst","get_water_deprivation",true},
		icon= "ui_inGame2_indicator_thirst",
		background= "ui_inGame2_indicator_slot",
		anim_icon= false,
		anim_bk= false,
	})
end
```
~~~

___

## Programs editing this file

- Any text editor
