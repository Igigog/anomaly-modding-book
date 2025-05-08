# Audio Console Commands

___

## General settings

| Command | Command description | Command's argument |
|---|---|---|
| snd_restart | Restart the sound engine | — |
| snd_cache_size | Cache size | 8 - 256 |
| snd_acceleration | APU resource utilization | 'on/off' or '1/0' |
| snd_targets | Maximum number of channels | 32 - 1024 |
| snd_device |  | OpenAL Soft |

## Music

| Command | Command description | Command's argument | Note |
|---|---|---|---|
| snd_volume_eff | Volume of sounds | 0.000 - 1.000 | - |
| snd_volume_music | Music volume | 0.000 - 1.000 | - |
| g_dynamic_music | Turns on dynamic music (during firefights) | 'on/off' or '1/0' | In the game the script `xrs_dyn_music.script` responsible for playing music is corrupted. An addon restoring this script can help to fix it (Example: [COMBAT MUSIC RESTORED + EXTENDED](https://www.moddb.com/mods/stalker-anomaly/addons/combat-music-restored-extended)) |

## Effects

| Command | Command description | Command's argument |
|---|---|---|
| snd_efx | EAX sound effects | 'on/off' or '1/0' |
