---
tags: [Audio, Modding Tool]
---

# Sound Attribute Viewer And Tweaker

___

## Info

|  |  |
|---|---|
| Program Developer | NatVac |
| Described Version | 1.1.7 |
| Official Site | [Official Site](https://www.metacognix.com/files/stlkrsoc/) |

___

## About

Utility designed to simplify working with X-Ray Engine sound files in [*.ogg](../../references/file-formats/audio-video/ogg.md) format.

![editor centered](assets/images/savandt.png)

## Features

- Easy viewing of comments in files, and other information
- Quick editing of comments, with automatic CRC-32 checksum generation
- Automatic insertion of comment structure into standard *.ogg files (eliminates Missing ogg-comment and Invalid ogg-comment version errors)
- Small executable file that does not require installation
- No hex editor, X-Ray SDK or checksum fixing required
- Help file included, accessible from the utility

## Functionality

### Buttons

| Button | Description |
|---|---|
| Select Drive/Directory | Selects the path to the directive with the sounds (If you press Ctrl and click on the button the list will reload) |
| Help | Output Help Information |
| About | About |

### Checkboxes

| Checkboxes | Description |
|---|---|
| Rename Originals with *.bak | Make backup when saving |

### Parameters

| Parameters | Description | Possible parameters |
|---|---|---|
| Header (audio file name) | When clicked, it opens the media player installed on your computer and plays only the original *.ogg sound (without affecting the settings) | - |
| Sound File Info | Displays some detailed information about the sound itself. These characteristics are shown for information and cannot be changed | - |
| Game Sound Type | Determines how the sound will be perceived by NPCs and mutants in the game | undefined. anomaly_idle. item_dropping. item_hiding. item_pickup. item_taking. item_using. NPC_attacking. NPC_dying. NPC_eating. NPC_injuring. NPC_step. NPC_talking. object_breaking. object_colliding object_exploding. weapon_bullet_hit. weapon_empty_click. weapon_recharging. weapon_shooting. world_ambient |
| Base Sound Volume | Default sound volume in the game at the sound source location | Range is 0.0 - 2.0 |
| Minimum Distance | indicates the distance in meters from the sound source at which it can still be heard at 100% volume |  |
| Maximum Distance | Distance in meters from the sound source at which you can no longer hear the sound |  |
| Maximum AI Distance | Distance from the sound source (in meters) at which NPCs can no longer hear the sound |  |
