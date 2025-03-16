# CWeaponVintorez

___

## About

Vintorez Engine Class

Exported LUA class WP_VINT

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponVintorez.h"
#pragma once

#include "weaponmagazined.h"
#include "script_export_space.h"

class CWeaponVintorez :
	public CWeaponMagazined
{
	typedef CWeaponMagazined inherited;
public:
	CWeaponVintorez(void);
	virtual ~CWeaponVintorez(void);

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponVintorez)
#undef script_type_list
#define script_type_list save_type_list(CWeaponVintorez)
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponVintorez.cpp"
#include "pch_script.h"
#include "weaponvintorez.h"

CWeaponVintorez::CWeaponVintorez(void) : CWeaponMagazined(SOUND_TYPE_WEAPON_SNIPERRIFLE)
{
}

CWeaponVintorez::~CWeaponVintorez(void)
{
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponVintorez::script_register(lua_State* L)
{
	module(L)
	[
		class_<CWeaponVintorez, CGameObject>("CWeaponVintorez")
		.def(constructor<>())
	];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponVintorez.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponVintorez.cpp)
