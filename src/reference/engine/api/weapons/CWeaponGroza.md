# CWeaponGroza

___

## About

121

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponGroza.h"
#pragma once

#include "weaponmagazinedwgrenade.h"
#include "script_export_space.h"

class CWeaponGroza :
	public CWeaponMagazinedWGrenade
{
	typedef CWeaponMagazinedWGrenade inherited;
public:
	CWeaponGroza();
	virtual ~CWeaponGroza();

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponGroza)
#undef script_type_list
#define script_type_list save_type_list(CWeaponGroza)
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponGroza.cpp"
#include "pch_script.h"
#include "weapongroza.h"

CWeaponGroza::CWeaponGroza() : CWeaponMagazinedWGrenade(SOUND_TYPE_WEAPON_SUBMACHINEGUN)
{
}

CWeaponGroza::~CWeaponGroza()
{
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponGroza::script_register(lua_State* L)
{
	module(L)
	[
		class_<CWeaponGroza, CGameObject>("CWeaponGroza")
		.def(constructor<>())
	];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponGroza.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponGroza.cpp)
