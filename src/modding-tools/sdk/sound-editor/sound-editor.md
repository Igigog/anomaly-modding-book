# Sound Editor

___

## About

A sound editor is needed to edit sound files in [*.wav](https://en.wikipedia.org/wiki/WAV) format and convert to [*.ogg](../../../reference/file-formats/audio-video/ogg.md)

___

## Interface

![sound editor centered](assets/images/sound-editor.png)

| Key | Description | Value |
|---|---|---|
| Quality | Quality | Range is 0.00 - 1.00 |
| Min Dist | indicates the distance in meters from the sound source at which it can still be heard at 100% volume | Range is 0.01 - 1000.00 |
| Max Dist | Distance in meters from the sound source at which you can no longer hear the sound | Range is 0.10 - 1000.00 |
| Max AI Dist | Distance from the sound source (in meters) at which NPCs can no longer hear the sound | Range is 0.10 - 1000.00 |
| Base Sound Volume | Default sound volume in the game at the sound source location | Range is 0.00 - 2.00 |
| Game Type | Determines how the sound will be perceived by NPCs and mutants in the game | undefined<br> anomaly_idle<br> item_dropping<br> item_hiding<br> item_pickup<br> item_taking<br> item_using<br> NPC_attacking<br> NPC_dying<br> NPC_eating<br> NPC_injuring<br> NPC_step<br> NPC_talking<br> object_breaking<br> object_colliding<br> object_exploding<br> weapon_bullet_hit<br> weapon_empty_click<br> weapon_recharging<br> weapon_shooting<br> world_ambient |
| [Attenuation](https://en.wikipedia.org/wiki/Attenuation) | Attenuation Graph | - |
| Auto Att | Automatic attenuation based on minimum and maximum audible distance values | By Min<br> By Max |
| File Length | File Length | - |
| Total Time | Total Time | - |
| Control | Control | Play<br> Stop |
| Auto Play | Auto Play | on<br> off |
| MANAGE | Synchronizes changes | SyncCurrent |
