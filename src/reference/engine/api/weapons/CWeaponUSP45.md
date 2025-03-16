# CWeaponUSP45

___

## About

USP45 Engine Class

Exported LUA class WP_USP45

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponUSP45.h"
#pragma once

#include "weaponpistol.h"
#include "script_export_space.h"

class CWeaponUSP45 :
	public CWeaponPistol
{
	typedef CWeaponPistol inherited;
public:
	CWeaponUSP45();
	virtual ~CWeaponUSP45();

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponUSP45)
#undef script_type_list
#define script_type_list save_type_list(CWeaponUSP45)
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponUSP45.cpp"
#include "pch_script.h"
#include "weaponusp45.h"

CWeaponUSP45::CWeaponUSP45()
{
}

CWeaponUSP45::~CWeaponUSP45()
{
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponUSP45::script_register(lua_State* L)
{
	module(L)
	[
		class_<CWeaponUSP45, CGameObject>("CWeaponUSP45")
		.def(constructor<>())
	];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponUSP45.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponUSP45.cpp)
