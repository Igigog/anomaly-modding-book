# Line 111 <font style="color: red">This is a theoretical crash (needs checking!)</font>

```ini
[error]Expression    : R_ASSERT2(!save_guid || (*save_guid == header().guid()) || ignore_save_incompatibility()
[error]Function      : CALifeSpawnRegistry::load
[error]File          : alife_spawn_registry.cpp
[error]Line          : 111
[error]Description   : Saved game doesn't correspond to the spawn : DELETE SAVED GAME!
```

- Clarification:

- Error fixing:
