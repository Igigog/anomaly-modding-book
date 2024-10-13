# Monkey patching

___

Courtesy of RavenAscendant#7504

All code snippets used in the guide are licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License

This guide is specifically written for modding [Anomaly](https://www.moddb.com/mods/stalker-anomaly). Much of it will apply with minor changes to any STALKER modding. The concept is not limited to STALKER or even lua, Minecraft modding makes extensive use of monkey patching in Java.

Monkey patching is the practice of modifying code at run time. Instead of modifying the script file directly the modifications are done in memory by a second script. The primary reason for doing this in Anomaly is compatibility. If two addons are distributed with an edited version of the same Anomaly game script the two addons will be incompatible without  patch. Worse than incompatible they will most likely cause crashes if installed together. Monkey patching doesn’t guarantee compatibility, if two addons change the same thing in different ways it is unlikely to behave properly, however the likelihood of crashing is significantly reduced.

First a caution, it is always better to simply use call backs. There are a significant number of call backs that allow you to change the way Anomaly plays. Editing Anomaly scripts directly or by monkey patching should only be done if there is no other way. Once one script starts changing the flow of another it becomes significantly harder to figure out what is actually going on.

In general Anomaly scripts are loaded in alphabetical order. When you monkey patch a script that hasn’t loaded you force it to load. If two monkey patches are applied the script that comes last wins. Starting the name of your script with a z means that it will load after most other scripts. While only sometimes necessary and very rarely problematic, the strong suggestion to do so in an earlier version of this guide has resulted in a convention of starting monkey patch scripts with z or zzz.  

If a function or variable in a script is declared as local other scripts can’t manipulate it. None of the below techniques will work on local functions or variables. 

## Patching Variables

The simplest monkey patch only changes variables.  Instant tooltip does this. It uses a callback to watch for the inventory UI being opened and when it is changes the delay for the tool tip:
```lua
function on_game_start()
    RegisterScriptCallback("GUI_on_show", delay_change)
end


function delay_change(name, path)
    --return quickly if not the GUI we want
    if not (name ~= "UIInventory")  then return end

    ui_inventory.GUI.item_info.delay = 80
    ui_inventory.GUI.upgr_info.delay = 80
end
```

The changes can be far more complex, an example of reaching into a complex nested table is how SidHud adds itself into the game settings UI with its inject_options_UI() function. 

## Patching existing Callbacks

The next method is unregistering a Callback.
The most obvious use of this is to stop a game script Callback from being run at all so that you can completely replace its functionality, however there are some more fine tuned uses.
The order in which Callbacks from various scripts are run is not something that can be relied upon. If you have something that needs to happen before or after a game script Callback the most reliable method is to unregister the games Callback and then call the function directly from your own Callback at the correct timing. Similarly you can use this method to prevent a Callback from running in particular cases. Such as preventing itms_manager.script from creating a half eaten chocolate bar when a chocolate bar is used:

```lua
function on_game_start()
    UnregisterScriptCallback("actor_on_item_use", itms_manager.actor_on_item_use)
    RegisterScriptCallback("actor_on_item_use", test)
end

 function test(obj)
    if (obj:section() == "chocolate") then return end
    itms_manager.actor_on_item_use(obj)
end
```

The above code has an example of the fact that functions are variables like any other, they can be passed to a function just like a number. They can also be assigned to another variable name just like a number and a function name can be assigned a new value, new code. It is this feature of lua that allows the most powerful monkey patching to work.

## Patching Functions

The same way that scriptname.function can be used to call a function in another script it can also be used to save a copy of that function, this can be used to shorten a long function name

```lua
ga = utils_item.get_ammo
ga(section, id) -- this is the same as utils_item.get_ammo(section, id)
```

The scriptname.function syntax can also be used to assign new code (example from first version of Headlamp Animation Fix).

```lua
base_Hit_TorchToggle = actor_effects.Hit_TorchToggle

function actor_effects.Hit_TorchToggle()
    local animation_setting = axr_main.config:r_value("options","video/player/animations", 1)
    if animation_setting then
        base_Hit_TorchToggle()
    else
        item_device.toggle_torch()
    end
end
```

The order there is important. It is necessary to save a copy of the old function first, before you modify it, if you plan on using it later.

Now when any script calls `actor_effects.Hit_TorchToggle()` it will call the above function instead.
It is important to understand that no matter what name you give a function it can only access local variables in the script it is written in.

## Patching xray/luajit “classes”

TL;DR: lua oop doesn’t use classes, but, for reasons, X-Ray’s lua does and we can patch either or both the classes or the instance objects. 
What the : (colon) operator really does.
The : operator in lua is simply a shortcut. Any function defined with a : can be called without it.

```lua
foo:start()
foo.start(foo)
```

Those are equivalent.

Similarly a function can be defined without it.
```lua
function foo:start()
…
end

function foo.start(self)
…
end
```

When calling a function the : acts like . but also passes the table to it’s left as an invisible first parameter to the function on the right.

When defining a function : acts like . but also inserts the variable self at the beginning of the parameter list. This syntax allows lua oop to have a familiar syntax. 

## LUAJit Classes TODO

Some closing notes.

Dealing with local.
Sometimes you can get lucky if you dig a bit deeper. Actor_effects.actor_on_item_use is declared local. Not only can you not change it, you also cannot unregister the callback that it is assigned to. However all `Actor_effects.actor_on_item_use` does is call `Actor_effects.play_item_fx(obj:section())` which is not local.  `Actor_effects.actor_on_item_use` can be modified or disabled by patching `Actor_effects.play_item_fx`. (Be careful tho, that particular function is called from other places as well, and if you don’t want to disable them then you may need to get very creative or are out of luck.)

When it comes to local variables it may be possible to calculate them yourself in your script, this is very easy for constants, harder for things that change, but if you really need to monkey patch yourself into every function that changes that variable and duplicate the calculations before calling the original function, this should keep your copy in step with the original. Watch out for side effects.

If any Anomaly Devs are reading this I strongly recommend that all Callback functions be made not local to allow for unregistering them. TBH i’d like to see local only used for function scoped variables with all globals and functions available from outside the script.
