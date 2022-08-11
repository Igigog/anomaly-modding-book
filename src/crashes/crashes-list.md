# Crashes List

## Error description

- Expression - Expression in the engine code, which gives an error
- Function - Name of the function where the error occurred
- File - File where the error occurred
- Description - Possible problem description
- Arguments - Argument causing the error

## Particles

### Line 683

[error]Expression    : SG

[error]Function      : CRender::model_CreateParticles

[error]File          : r4.cpp

[error]Line          : 683

[error]Description   : Particle effect or group doesn't exist

[error]Arguments     : damage_fx\mod_cig_smoke

Clarification: Particle system *mod_cig_smoke* was not found in the damage_fx directory of the particles.xr file when playing on a r4(dx11) render

### Line 521

[error]Expression    : SG

[error]Function      : CRender::model_CreateParticles

[error]File          : r2.cpp

[error]Line          : 521

[error]Description   : Particle effect or group doesn't exist

[error]Arguments     : ghost_particles\weapons\flame_eft_pistol

Clarification: Particle system *flame_eft_pistol* was not found in the ghost_particles\weapons\ directory of the particles.xr file when playing on a r2(dx9) render

### Line 227

[error]Expression    : SG

[error]Function      : CRender::model_CreateParticles

[error]File          : FStaticRender.cpp

[error]Line          : 227

[error]Description   : Particle effect or group doesn't exist

[error]Arguments     : vehiclefx\exhaust_3

Clarification: Particle system *exhaust_3* was not found in the vehiclefx directory of the particles.xr file when playing on a static render

## LUA

### Line 191

[error]Expression    : <no expression>

[error]Function      : CScriptEngine::lua_error

[error]File          : ..\xrServerEntities\script_engine.cpp

[error]Line          : 191

[error]Description   : fatal error

[error]Arguments     : LUA error: ...-1.5.1/bin/..\gamedata\scripts\a_arti_jamming_mcm.script:67: attempt to concatenate a nil value

Clarification: 

### Line 467

[error]Expression    : sz < (tgt_sz - 1)

[error]Function      : IReader::r_string

[error]File          : FS.cpp

[error]Line          : 467

[error]Description   : Dest string less than needed.

Clarification: 

## LTX files

### Line 544

[error]Expression    : <no expression>

[error]Function      : CInifile::r_section

[error]File          : Xr_ini.cpp

[error]Line          : 544

[error]Description   : fatal error

[error]Arguments     : Can't open section 'string_table'. Please attach [*.ini_log] file to your bug report

Clarification: The engine cannot read the section *string_table*

### Line 330

[error]Expression    : <no expression>

[error]Function      : CInifile::Load

[error]File          : Xr_ini.cpp

[error]Line          : 330

[error]Description   : fatal error

[error]Arguments     : Duplicate section 'esc_m_trader_task_1' wasn't marked as an override. Override section by prefixing it with '!' (![esc_m_trader_task_1]) or give it a unique name.

Clarification: 

### Line 305

[error]Expression    : <no expression>

[error]Function      : CInifile::Load

[error]File          : Xr_ini.cpp

[error]Line          : 305

[error]Description   : fatal error

[error]Arguments     : Duplicate section 'ammo_23x75_shrapnel' found.

Clarification: Duplicated the specified section in the .ltx files.

### Line 915

[error]Expression : <no expression>

[error]Function : CInifile::r_section

[error] File : Xr_ini.cpp

[error] Line : 915

[error] Description : fatal error

[error]Arguments : Can't open section 'ammo_knife_6'. Please attach [*.ini_log] file to your bug report

Clarification: The game cannot find this section