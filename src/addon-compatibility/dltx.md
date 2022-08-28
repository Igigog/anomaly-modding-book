# DLTX

___

## About:
Improvement of the engine to allow overwriting [.ltx](../configs/ltx-files.md) files, avoiding addon conflicts.
Allows modders to overwrite only the values they need.

### Installation
Back up the contents of your "bin" folder and replace it with the one supplied. The contents of "tools" and "example_mod" include optional resources to make mods for DLTX or to convert existing ones. If you are using Mod Organizer 2 do NOT use it to install DLTX (you can still use it for other mods), you need to paste the files into your real "bin" folder.

### Use by modders:
In order to make a differential change to the LTX records, you have to follow these steps:

1. Find out which root LTX file is loading the variable you are trying to modify. You can either search the files manually and trace back the chain of #includes, or you can use LTXDiff for this purpose.

    <text style="color: red">LTXDiff findroot</text> <text style="color: yellow">[Base Folder] [Mod Folder] [Relative Path to File]</text>

2. Once you have found the root file, create a new one in the same directory with the name "mod_[name of the root file]_[name of your choosing].ltx".

3. Make an entry for the section and variable that you want to modify. The section that you want to override has to be prefixed with "!", e.g. ![medkit]. You do not need to include the sections parents again (i.e. do ![medkit], NOT ![medkit]:booster_multi), since they already are in the base definition. Now simply list your variables that you want changed as you usually would.

You can add parents by declaring them like you normally would, or remove them by prefixing them with "!", e.g. "![vodka2]:!vodka, medkit" makes vodka2 behave like a medkit instead of its original parent.

If you want to delete a variable, simply add a line "!variable_name". You can delete sections too, by prefixing them with "!!", however they will only be deleted if all variables they own are deleted too, otherwise the flag won't come into effect.

You can only override sections that already have a base definition. Both loading an override without a base section, or loading multiple base sections will cause crashes. Multiple overrides can be applied to the same section. If multiple mods override the same value, the one that is loaded last will win the conflict over that particular variable. I haven't verified what actually affects the load order, but I'm going to guess it's probably based on the alphabetic order of the file names.

#### Converting already existing mods

LTXDiff is capable of automatically converting conventional mods into a DLTX-ready format.

<text style="color: red">LTXDiff dltxify</text> <text style="color: yellow">[Base Folder] [Mod Folder] [Mod Suffix]</text>

Mod suffix in this case is the name that gets appended to the mod files, like in step 2 of the previous section.

## Sources
[DLTX on Moddb](https://www.moddb.com/mods/stalker-anomaly/addons/dltx-differential-ltx-loading)

[Source Code](https://github.com/MerelyMezz/LTXDiff)