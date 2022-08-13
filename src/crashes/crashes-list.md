# Crashes List

## Error description

- Expression - Expression in the engine code, which gives an error
- Function - Name of the function where the error occurred
- File - File where the error occurred
- Description - Possible problem description
- Arguments - Argument causing the error

## Models

<details>
    <summary>Line 120</summary>

[error]Expression    : <no expression>

[error]Function      : CModelPool::Instance_Load

[error]File          : ..\xrRender\ModelPool.cpp

[error]Line          : 120

[error]Description   : fatal error

[error]Arguments     : Can't find model file 'actors\stalker_soldier\solder_trader.ogf'.

- Clarification: No 3D OGF model was found, in this case 'solder_trader.ogf' from the actors\stalker_soldier folder

</details>

## Particles

<details>
    <summary>Line 683</summary>

[error]Expression    : SG

[error]Function      : CRender::model_CreateParticles

[error]File          : r4.cpp

[error]Line          : 683

[error]Description   : Particle effect or group doesn't exist

[error]Arguments     : damage_fx\mod_cig_smoke

- Clarification: Particle system *mod_cig_smoke* was not found in the damage_fx directory of the particles.xr file when playing on a r4(dx11) render

</details>

<details>
    <summary>Line 521</summary>

[error]Expression    : SG

[error]Function      : CRender::model_CreateParticles

[error]File          : r2.cpp

[error]Line          : 521

[error]Description   : Particle effect or group doesn't exist

[error]Arguments     : ghost_particles\weapons\flame_eft_pistol

- Clarification: Particle system *flame_eft_pistol* was not found in the ghost_particles\weapons\ directory of the particles.xr file when playing on a r2(dx9) render

</details>

<details>
    <summary>Line 227</summary>

[error]Expression    : SG

[error]Function      : CRender::model_CreateParticles

[error]File          : FStaticRender.cpp

[error]Line          : 227

[error]Description   : Particle effect or group doesn't exist

[error]Arguments     : vehiclefx\exhaust_3

- Clarification: Particle system *exhaust_3* was not found in the vehiclefx directory of the particles.xr file when playing on a static render

</details>

## LUA

<details>
    <summary>Line 191</summary>

[error]Expression    : <no expression>

[error]Function      : CScriptEngine::lua_error

[error]File          : ..\xrServerEntities\script_engine.cpp

[error]Line          : 191

[error]Description   : fatal error

[error]Arguments     : LUA error: ...-1.5.1/bin/..\gamedata\scripts\a_arti_jamming_mcm.script:67: attempt to concatenate a nil value

- Clarification: 

</details>

<details>
    <summary>Line 467</summary>

[error]Expression    : sz < (tgt_sz - 1)

[error]Function      : IReader::r_string

[error]File          : FS.cpp

[error]Line          : 467

[error]Description   : Dest string less than needed.

- Clarification: 

</details>

## LTX files

<details>
    <summary>Line 544</summary>

[error]Expression    : <no expression>

[error]Function      : CInifile::r_section

[error]File          : Xr_ini.cpp

[error]Line          : 544

[error]Description   : fatal error

[error]Arguments     : Can't open section 'string_table'. Please attach [*.ini_log] file to your bug report

- Clarification: The engine cannot read the section *string_table*

</details>

<details>
    <summary>Line 330</summary>

[error]Expression    : <no expression>

[error]Function      : CInifile::Load

[error]File          : Xr_ini.cpp

[error]Line          : 330

[error]Description   : fatal error

[error]Arguments     : Duplicate section 'esc_m_trader_task_1' wasn't marked as an override. Override section by prefixing it with '!' (![esc_m_trader_task_1]) or give it a unique name.

- Clarification: 

</details>

<details>
    <summary>Line 305</summary>

[error]Expression    : <no expression>

[error]Function      : CInifile::Load

[error]File          : Xr_ini.cpp

[error]Line          : 305

[error]Description   : fatal error

[error]Arguments     : Duplicate section 'ammo_23x75_shrapnel' found.

- Clarification: Duplicated the specified section in the .ltx files.

</details>

<details>
    <summary>Line 915</summary>

[error]Expression : <no expression>

[error]Function : CInifile::r_section

[error] File : Xr_ini.cpp

[error] Line : 915

[error] Description : fatal error

[error]Arguments : Can't open section 'ammo_knife_6'. Please attach [*.ini_log] file to your bug report

- Clarification: The game cannot find this section

</details>

<details>
    <summary>Line 918</summary>

[error]Expression    : <no expression>

[error]Function      : CInifile::r_section

[error]File          : Xr_ini.cpp

[error]Line          : 918

[error]Description   : fatal error

[error]Arguments     : Can't open section 'flesh_01a_normal'. Please attach [*.ini_log] file to your bug report

- Clarification: The game cannot find this section

</details>

<details>
    <summary>Line 204</summary>

[error]Expression    : <no expression>

[error]Function      : CScriptEngine::lua_pcall_failed

[error]File          : ..\xrServerEntities\script_engine.cpp

[error]Line          : 204

[error]Description   : fatal error

[error]Arguments     : LUA error: ...aly/bin/..\gamedata\scripts\release_npc_inventory.script:96: attempt to call field 'remove_extra_ammo' (a nil value)

- Clarification:

</details>

<details>
    <summary>Line 523</summary>

[error]Expression    : S && strlen(S)

[error]Function      : CInifile::r_section

[error]File          : Xr_ini.cpp

[error]Line          : 523

[error]Description   : assertion failed

- Clarification:

</details>

## XML

<details>
    <summary>Line 154</summary>

[error]Expression    : xml_doc.NavigateToNode(path,index)

[error]Function      : CUIXmlInit::InitStatic

[error]File          : ui\UIXmlInit.cpp

[error]Line          : 154

[error]Description   : XML node not found

[error]Argument 0    : equipment:cont_equ:cell_1:weight

[error]Argument 1    : ui\ui_inventory_16.xml

- Clarification: The game does not find the specified item in some .xml file

</details>

<details>
    <summary>Line 718</summary>

[error]Expression    : <no expression>

[error]Function      : CInifile::Load::<lambda_013765cd77135cd39b93c0fb9e7e180b>::operator ()

[error]File          : Xr_ini.cpp

[error]Line          : 718

[error]Description   : fatal error

[error]Arguments     : Section 'trasher' has cyclical dependencies. Ensure that sections with parents don't inherit in a loop. Check this file and its DLTX mods: d:/anomaly\gamedata\configs\items\trade\trade_stalker_flea_market.ltx

- Clarification:

</details>

<details>
    <summary>Line 63</summary>

[error]Expression    : <no expression>

[error]Function      : CBlender_default::Compile

[error]File          : BlenderDefault.cpp

[error]Line          : 63

[error]Description   : fatal error

[error]Arguments     : Not enought textures for shader, base tex: act\newloner\skadovskmedic\jackbaker_hair_d

- Clarification:

</details>

<details>
    <summary>Line 189</summary>

[error]Expression    : <no expression>

[error]Function      : CScriptEngine::lua_error

[error]File          : ..\xrServerEntities\script_engine.cpp

[error]Line          : 189

[error]Description   : fatal error

[error]Arguments     : LUA error: ...ly\anomaly\gamedata\scripts\alife_storage_manager.script:146: bad code

- Clarification:

</details>

<details>
    <summary>Line 995</summary>

[error]Expression    : 

[error]Function      : invalid_parameter_handler

[error]File          : xrDebugNew.cpp

[error]Line          : 995

[error]Description   : invalid parameter

- Clarification:

</details>

<details>
    <summary>Line 112</summary>

[error]Expression    : no_assert

[error]Function      : CXML_IdToIndex<class CPhraseDialog>::GetById

[error]File          : G:\Projects\STALKER\Anomaly2-Engine\src\xrServerEntities\xml_str_id_loader.h

[error]Line          : 112

[error]Description   : item not found, id

[error]Arguments     : rogovets_hello_1_6_army_mlr

- Clarification: The game does not find the id of some dialogue

</details>

<details>
    <summary>Line 87</summary>

[error]Expression    : false

[error]Function      : CXml::Load

[error]File          : xrXMLParser.cpp

[error]Line          : 87

[error]Description   : XML file:ui\actor_menu_16.xml value: errDescr:Error reading end tag.

- Clarification: In the specified file, in this case ui\actor_menu_16.xml, do not match the opening and closing tags.

</details>

<details>
    <summary>Line 230</summary>

[error]Expression    : fatal error

[error]Function      : X:\stalker_addon\sources\trunk\xrCore\xrDebugNew.cpp

[error]File          : X:\stalker_addon\sources\trunk\xrCore\xrDebugNew.cpp

[error]Line          : 230

[error]Description   : <no expression>

[error]Arguments     : nodefault reached

- Clarification:

</details>

<details>
    <summary>Line 520</summary>

[error]Expression    : <no expression>

[error]Function      : CInifile::r_section

[error]File          : Xr_ini.cpp

[error]Line          : 520

[error]Description   : fatal error

[error]Arguments     : Can't open section 'achievements'. Please attach [*.ini_log] file to your bug report

- Clarification: The game cannot find this section

</details>

<details>
    <summary>Line 147</summary>

[error]Expression    : <no expression>

[error]Function      : CIni_IdToIndex<1,struct COMMUNITY_DATA,class shared_str,int,class CHARACTER_COMMUNITY>::GetByIndex

[error]File          : g:\projects\stalker\anomaly2-engine\src\xrgame\ini_id_loader.h

[error]Line          : 147

[error]Description   : fatal error

[error]Arguments     : item by index not found in section game_relations, line communities

- Clarification:

</details>

<details>
    <summary>Line 703</summary>

[error]Expression    : b

[error]Function      : X:\stalker_addon\sources\trunk\xrCore\Xr_ini.cpp

[error]File          : X:\stalker_addon\sources\trunk\xrCore\Xr_ini.cpp

[error]Line          : 703

[error]Description   : name[levels\l01_escape\l01_escape_part0967] already exist in section[d:\gamesedit\stalker-uni\sdk\editors\rawdata\levels\l01_escape.level]

- Clarification:

</details>