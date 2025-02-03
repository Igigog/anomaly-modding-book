# Crashes List

___

## Error description

- `Expression` - Expression in the engine code, which gives an error
- `Function` - Name of the function where the error occurred
- `File` - File where the error occurred
- `Line` - Line in File where the error occurred
- `Description` - Possible problem description
- `Arguments` - Argument causing the error

___

```admonish warning
This list is only for the vanilla version of the game! If you use engine edits, the crash log may be different!
```

## <center>Models</center>

<details>
    <summary>Line 120</summary>

```ini
[error]Expression    : \<no expression>
[error]Function      : CModelPool::Instance_Load
[error]File          : ..\xrRender\ModelPool.cpp
[error]Line          : 120
[error]Description   : fatal error
[error]Arguments     : Can't find model file ["path and file name"]
```

- Clarification: No [.ogf](../main-folders-and-files/file-formats/models/ogf.md) model was found

- Error fixing:
  - Check that the model exists
  - Check that the paths to it are correct

</details>

<details>
    <summary>Line 136</summary>

```ini
[error]Expression    : 0
[error]Function      : attachable_hud_item::set_bone_visible
[error]File          : player_hud.cpp
[error]Line          : 136
[error]Description   : model ["path and file name"] has no bone ["bone name"]

```

- Clarification:

- Error fixing:

</details>

___

## <center>Textures</center>

<details>
    <summary>Line 535</summary>

```ini
[error]Expression    : D3DX11CreateTextureFromMemory ( HW.pDevice,S->pointer(),S->length(), &LoadInfo, 0, &pTexture2D, 0 )
[error]Function      : CRender::texture_load
[error]File          : ..\xrRenderDX10\dx10Texture.cpp
[error]Line          : 535
```

- Clarification:

- Error fixing:

</details>

___

## <center>[Animations](../main-folders-and-files/file-formats/omf.md)</center>

<details>
    <summary>Line 406</summary>

```ini
[error]Expression    : \<no expression>
[error]Function      : CkinematicsAnimated::LL_PlayCycle
[error]File          : ..\xrRender\SkeletonAnimated.cpp
[error]Line          : 406
[error]Description   : fatal error
[error]Arguments     : ! MODEL: missing bone/wrong armature?: ["path and file name"]
```

- Clarification: Probably in the animation that is based on this skeleton there was no animation channel for a newly added or removed bone in the skeleton

- Error fixing:
  - Check the skeleton for bones that have been removed or added

</details>

<details>
    <summary>Line 459</summary>

```ini
[error]Expression    : M2.valid()
[error]Function      : attachable_hud_item::anim_play
[error]File          : player_hud.cpp
[error]Line          : 459
[error]Description   : model has no motion [idle]
[error]Arguments     : ["path and file name"]
```

- Clarification: No idle animation was found

- Error fixing:

</details>

<details>
    <summary>Line 784</summary>

```ini
[error]Expression    : \<no expression>
[error]Function      : CKinematicsAnimated::Load::<lambda_1d323dfa2c5eacee46e042904e528af6>::operator ()
[error]File          : ..\xrRender\SkeletonAnimated.cpp
[error]Line          : 784
[error]Description   : fatal error
[error]Arguments     : Can't find motion file ["path and file name"]
```

- Clarification: No [.omf](../main-folders-and-files/file-formats/animations/omf.md) animation was found

- Error fixing:
  - Check that the animation exists
  - Check the correct paths to it in the Motions Reference of the model

</details>

<details>
    <summary>Line 857</summary>

```ini
[error]Expression    : m_Motions.size()
[error]Function      : CKinematicsAnimated::Load
[error]File          : ..\xrRender\SkeletonAnimated.cpp
[error]Line          : 857

section '(null)'
model 'path to model'
```

- Clarification:

- Error fixing:

</details>

___

## <center>[Animated Paths](../main-folders-and-files/file-formats/anm.md)</center>

<details>
    <summary>Line 47</summary>

```ini
[error]Expression    : \<no expression>
[error]Function      : CObjectAnimator::LoadMotions
[error]File          : ObjectAnimator.cpp
[error]Line          : 47
[error]Description   : fatal error
[error]Arguments     : Can't find motion file ["path and file name"]
```

- Clarification: No [.anm](../main-folders-and-files/file-formats/animations/anm.md) file was found

- Error fixing:
  - Check that the animation exists
  - Check that the paths to it are correct

</details>

___

## <center>[AI](../ai/index.html)</center>

<details>
    <summary>Line 49</summary>

```ini
[error]Expression    : false
[error]Function      : CPatternFunction::vfLoadEF
[error]File          : ef_pattern.cpp
[error]Line          : 49
[error]Description   : assertion failed
```

- Clarification: No [.efd](../main-folders-and-files/file-formats/efd.md) file was found

- Error fixing:
  - Check that the .efd file exists

</details>

<details>
    <summary>Line 60 <font style="color: red">This is a theoretical crash (needs checking!)</font></summary>

```ini
[error]Expression    : false
[error]Function      : CPatternFunction::vfLoadEF
[error]File          : ef_pattern.cpp
[error]Line          : 60
[error]Description   : assertion failed
```

- Clarification: Not supported version of the [Evaluation Function Contructor](../modding-tools/modding-tools-ai/evaluation-function-constructor.md)

- Error fixing:
  - The .efd file must be generated with a supported version of the Evaluation Function Contructor

</details>

<details>
    <summary>Line 27</summary>

```ini
[error]Expression    : !NET.empty()
[error]Function      : CBaseMonster::net_Export
[error]File          : ai\Monsters\BaseMonster\base_monster_net.cpp
[error]Line          : 27
[error]Description   : assertion failed
```

- Clarification: Probably the wrong type of AI in the mutant configuration file

- Error fixing: ?

</details>

<details>
    <summary>Line 116</summary>

```ini
[error]Expression    : cross_table().header().level_guid() == level_graph().header().guid()
[error]Function      : CAI_Space::load
[error]File          : ai_space.cpp
[error]Line          : 116
[error]Description   : cross_table doesn't correspond to the AI-map
```

- Clarification:

- Error fixing:

</details>

___

## <center>Spawn</center>

<details>
    <summary>Line 86</summary>

```ini
[error]Expression    : FS.exist(file_name, "$game_spawn$", *m_spawn_name, ".spawn")
[error]Function      : CALifeSpawnRegistry::load
[error]File          : alife_spawn_registry.cpp
[error]Line          : 86
[error]Description   : Can't find spawn file:
[error]Arguments     : ["file name"]
```

- Clarification: No [.spawn](../main-folders-and-files/file-formats/game-levels/spawn.md) file was found

- Error fixing:
  - Check that the .spawn file exists

</details>

<details>
    <summary>Line 60 <font style="color: red">This is a theoretical crash (needs checking!)</font></summary>

```ini
[error]Expression    : R_ASSERT2(file_stream.find_chunk(SPAWN_CHUNK_DATA)
[error]Function      : CALifeSpawnRegistry::load
[error]File          : alife_spawn_registry.cpp
[error]Line          : 60
[error]Description   : Cannot find chunk SPAWN_CHUNK_DATA!
```

- Clarification: No chunk `SPAWN_CHUNK_DATA` was found in .[spawn](../main-folders-and-files/file-formats/game-levels/spawn.md) file

- Error fixing:

</details>

<details>
    <summary>Line 111 <font style="color: red">This is a theoretical crash (needs checking!)</font></summary>

```ini
[error]Expression    : R_ASSERT2(!save_guid || (*save_guid == header().guid()) || ignore_save_incompatibility()
[error]Function      : CALifeSpawnRegistry::load
[error]File          : alife_spawn_registry.cpp
[error]Line          : 111
[error]Description   : Saved game doesn't correspond to the spawn : DELETE SAVED GAME!
```

- Clarification:

- Error fixing:

</details>

<details>
    <summary>Line 141 or 147 <font style="color: red">This is a theoretical crash (needs checking!)</font></summary>

```ini
[error]Expression    : R_ASSERT2(chunk, "Spawn version mismatch - REBUILD SPAWN!"); or R_ASSERT2(m_chunk, "Spawn version mismatch - REBUILD SPAWN!");
[error]Function      : CALifeSpawnRegistry::load
[error]File          : alife_spawn_registry.cpp
[error]Line          : 141 or 147
[error]Description   : Spawn version mismatch - REBUILD SPAWN!
```

- Clarification:

- Error fixing:

</details>

___

## <center>[LTX](../configs/.ltx.md)</center>

<details>
    <summary>Line 96</summary>

```ini
[error]Expression    : FS.exist(fn, "$game_textures$", buf, ".ini")
[error]Function      : CGameFont::Initialize
[error]File          : GameFont.cpp
[error]Line          : 96
[error]Description   : ["path and ui_font_hud_01.ini"]
```

- Clarification: No ui_font_hud_01.ini file was found

- Error fixing:

</details>

___

## <center>[LUA](../scripting/index.html)</center>

<details>
    <summary>Line 204</summary>

```ini
[error]Expression    : \<no expression>
[error]Function      : CScriptEngine::lua_pcall_failed
[error]File          : ..\xrServerEntities\script_engine.cpp
[error]Line          : 204
[error]Description   : fatal error
[error]Arguments     : LUA error: ...e.r anomaly/bin/..\gamedata\scripts\"script_name".script:62: bad argument #1 to 'pairs' (table expected, got nil)
```

- Clarification:

- Error fixing:

</details>

___

## <center>[XML]()</center>

<details>
    <summary>Line 137</summary>

```ini
[error]Expression    : false
[error]Function      : CXml::Load
[error]File          : xrXMLParser.cpp
[error]Line          : 137
[error]Description   : XML file:text\rus\st_items_weapons.xml value: errDescr:Error reading end tag.
```

- Clarification:

- Error fixing:

</details>
