# Crashes List

___

## Error description

- Expression - Expression in the engine code, which gives an error
- Function - Name of the function where the error occurred
- File - File where the error occurred
- Line - Line in File where the error occurred
- Description - Possible problem description
- Arguments - Argument causing the error

___

## <center>Models</center>

### Line 120

<details>
    <summary>Line 120</summary>

[error]Expression    : \<no expression>

[error]Function      : [CModelPool::Instance_Load](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/Layers/xrRender/ModelPool.cpp#lines-100)

[error]File          : [..\xrRender\ModelPool.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/Layers/xrRender/ModelPool.cpp)

[error]Line          : [120](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/Layers/xrRender/ModelPool.cpp#lines-120)

[error]Description   : fatal error

[error]Arguments     : Can't find model file "`path and file name`".

- Clarification: No 3D .ogf model was found

- Error fixing:
  - Check that the model exists
  - Check that the paths to it are correct

</details>

___

## <center>[Animations](../main-folders-and-files/file-formats/omf.md)</center>

### Line 784

<details>
    <summary>Line 784</summary>

[error]Expression    : \<no expression>

[error]Function      : [CKinematicsAnimated::Load::<lambda_1d323dfa2c5eacee46e042904e528af6>::operator ()](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/Layers/xrRender/SkeletonAnimated.cpp#lines-769)

[error]File          : [..\xrRender\SkeletonAnimated.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/Layers/xrRender/SkeletonAnimated.cpp)

[error]Line          : [784](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/Layers/xrRender/SkeletonAnimated.cpp#lines-784)

[error]Description   : fatal error

[error]Arguments     : Can't find motion file "`path and file name`".

- Clarification: No .omf animation was found

- Error fixing:
  - Check that the animation exists
  - Check the correct paths to it in the Motions Reference of the model

</details>

___

## <center>[Animated Paths](../main-folders-and-files/file-formats/anm.md)</center>

### Line 47

<details>
    <summary>Line 47</summary>

[error]Expression    : \<no expression>

[error]Function      : [CObjectAnimator::LoadMotions](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrEngine/ObjectAnimator.cpp#lines-42)

[error]File          : [ObjectAnimator.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrEngine/ObjectAnimator.cpp)

[error]Line          : [47](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrEngine/ObjectAnimator.cpp#lines-47)

[error]Description   : fatal error

[error]Arguments     : Can't find motion file "`path and file name`".

- Clarification: No .anm file was found

- Error fixing:
  - Check that the .anm file exists
  - Check that the paths to it are correct

</details>

___

## <center>A-Life</center>

### Line 49

<details>
    <summary>Line 49</summary>

[error]Expression    : false

[error]Function      : [CPatternFunction::vfLoadEF](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/ef_pattern.cpp#lines-43)

[error]File          : [ef_pattern.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/ef_pattern.cpp)

[error]Line          : [49](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/ef_pattern.cpp#lines-49)

[error]Description   : assertion failed

- Clarification: No [.efd](../main-folders-and-files/file-formats/efd.md) file was found

- Error fixing:
  - Check that the .efd file exists

</details>

### Line 60 (<font style="color: red">This is a theoretical crash (needs checking!)</font>)

<details>
    <summary>Line 60</summary>

[error]Expression    : false

[error]Function      : [CPatternFunction::vfLoadEF](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/ef_pattern.cpp#lines-43)

[error]File          : [ef_pattern.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/ef_pattern.cpp)

[error]Line          : [60](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/ef_pattern.cpp#lines-60)

[error]Description   : assertion failed

- Clarification: Not supported version of the Evaluation Function Contructor

- Error fixing:
  - The .efd file must be generated with a supported version of the Evaluation Function Contructor (?)

</details>

___

## <center>Spawn</center>

### Line 86

<details>
    <summary>Line 86</summary>

[error]Expression    : FS.exist(file_name, "$game_spawn$", *m_spawn_name, ".spawn")

[error]Function      : [CALifeSpawnRegistry::load](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/alife_spawn_registry.cpp#lines-81)

[error]File          : [alife_spawn_registry.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/alife_spawn_registry.cpp)

[error]Line          : [86](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/alife_spawn_registry.cpp#lines-86)

[error]Description   : Can't find spawn file:

[error]Arguments     : "`file name`"

- Clarification: No .spawn file was found

- Error fixing:
  - Check that the .spawn file exists

</details>

### Line 60 (<font style="color: red">This is a theoretical crash (needs checking!)</font>)

<details>
    <summary>Line 60</summary>

[error]Expression    : R_ASSERT2(file_stream.find_chunk(SPAWN_CHUNK_DATA)

[error]Function      : [CALifeSpawnRegistry::load](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/alife_spawn_registry.cpp#lines-54)

[error]File          : [alife_spawn_registry.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/alife_spawn_registry.cpp)

[error]Line          : [60](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/alife_spawn_registry.cpp#lines-60)

[error]Description   : Cannot find chunk SPAWN_CHUNK_DATA!

- Clarification: No chunk `SPAWN_CHUNK_DATA` was found in .spawn file

- Error fixing:

</details>

### Line  111 (<font style="color: red">This is a theoretical crash (needs checking!)</font>)

<details>
    <summary>Line 111</summary>

[error]Expression    : R_ASSERT2(!save_guid || (*save_guid == header().guid()) || ignore_save_incompatibility()

[error]Function      : [CALifeSpawnRegistry::load](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/alife_spawn_registry.cpp#lines-105)

[error]File          : [alife_spawn_registry.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/alife_spawn_registry.cpp)

[error]Line          : [111](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/alife_spawn_registry.cpp#lines-111)

[error]Description   : Saved game doesn't correspond to the spawn : DELETE SAVED GAME!

- Clarification:

- Error fixing:

</details>

### Line 141 or 147 (<font style="color: red">This is a theoretical crash (needs checking!)</font>)

<details>
    <summary>Line 141 or 147</summary>

[error]Expression    : R_ASSERT2(chunk, "Spawn version mismatch - REBUILD SPAWN!"); or R_ASSERT2(m_chunk, "Spawn version mismatch - REBUILD SPAWN!");

[error]Function      : [CALifeSpawnRegistry::load](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/alife_spawn_registry.cpp#lines-105)

[error]File          : [alife_spawn_registry.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/alife_spawn_registry.cpp)

[error]Line          : [141](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/alife_spawn_registry.cpp#lines-141) or [147](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrGame/alife_spawn_registry.cpp#lines-147)

[error]Description   : Spawn version mismatch - REBUILD SPAWN!

- Clarification:

- Error fixing:

</details>

___

## <center>[LTX](../configs/ltx-files.md)</center>

### Line 96

<details>
    <summary>Line 96</summary>

[error]Expression    : FS.exist(fn, "$game_textures$", buf, ".ini")

[error]Function      : [CGameFont::Initialize](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrEngine/GameFont.cpp#lines-71)

[error]File          : [GameFont.cpp](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrEngine/GameFont.cpp)

[error]Line          : [96](https://bitbucket.org/anomalymod/xray-monolith/src/d369db0ce75b8101c8d0fe1b2fa7a84b04910a35/src/xrEngine/GameFont.cpp#lines-96)

[error]Description   : "`path and ui_font_hud_01.ini`"

- Clarification: No ui_font_hud_01.ini file was found

- Error fixing:
  - Check that the .spawn file exists

</details>
