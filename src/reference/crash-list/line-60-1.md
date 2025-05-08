# Line 60 <font style="color: red">This is a theoretical crash (needs checking!)</font>

___

```ini
[error]Expression    : R_ASSERT2(file_stream.find_chunk(SPAWN_CHUNK_DATA)
[error]Function      : CALifeSpawnRegistry::load
[error]File          : alife_spawn_registry.cpp
[error]Line          : 60
[error]Description   : Cannot find chunk SPAWN_CHUNK_DATA!
```

- Clarification: No chunk `SPAWN_CHUNK_DATA` was found in [*.spawn](../file-formats/game-levels/spawn.md) file

- Error fixing: Recompile *.spawn file
