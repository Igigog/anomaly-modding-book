# Line 141 or 147 <font style="color: red">This is a theoretical crash (needs checking!)</font>

```ini
[error]Expression    : R_ASSERT2(chunk, "Spawn version mismatch - REBUILD SPAWN!"); or R_ASSERT2(m_chunk, "Spawn version mismatch - REBUILD SPAWN!");
[error]Function      : CALifeSpawnRegistry::load
[error]File          : alife_spawn_registry.cpp
[error]Line          : 141 or 147
[error]Description   : Spawn version mismatch - REBUILD SPAWN!
```

- Clarification: Wrong [*.spawn](../file-formats/game-levels/spawn.md) version?

- Error fixing: Recompile *.spawn file
