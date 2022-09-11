# Sound Attribute Viewer And Tweaker
- Program Developer: 
    - NatVac
- The version described in the article: 1.1.7
- [Official Site](https://www.metacognix.com/files/stlkrsoc/)

___

## About: 

Utility designed to simplify working with X-Ray Engine sound files in [.ogg](../../main-folders-and-files/file-formats/ogg.md) format.

![editor centered](modding-tools-images/savandt.png)

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
---|---|
| Select Drive/Directory | Selects the path to the directive with the sounds (If you press Ctrl and click on the button the list will reload) |
| Help | Output Help Information |
| About | About |

### Checkboxes

| Checkboxes | Description |
---|---|
| Rename Originals with .bak | Make backup when saving |

### Parameters

| Parameters | Description | Possible parameters |
---|---|---|
| Header (audio file name) | When clicked, it opens the media player installed on your computer and plays only the original .ogg sound (without affecting the settings) | <br>undefined</br> <br>anomaly_idle</br> <br>item_dropping</br> <br>item_hiding</br> <br>item_pickup</br> <br>item_taking</br> <br>item_using</br><br>NPC_attacking</br><br>NPC_dying</br><br>NPC_eating</br><br>NPC_injuring</br><br>NPC_step</br><br>NPC_talking</br><br>object_breaking</br><br>object_colliding</br><br>object_exploding</br><br>weapon_bullet_hit</br><br>weapon_empty_click</br><br>weapon_recharging</br><br>weapon_shooting</br><br>world_ambient</br> |
| Sound File Info | Displays some detailed information about the sound itself. These characteristics are shown for information and cannot be changed |  |
| Game Sound Type | Determines how the sound will be perceived by NPCs and mutants in the game |  |
| Base Sound Volume | Default sound volume in the game at the sound source location | Range is 0.0 to 2.0 |
| Minimum Distance | indicates the distance in meters from the sound source at which it can still be heard at 100% volume |  |
| Maximum Distance | Distance in meters from the sound source at which you can no longer hear the sound |  |
| Maximum AI Distance | Distance from the sound source (in meters) at which NPCs can no longer hear the sound |  |