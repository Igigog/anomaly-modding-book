# CWeaponVal

___

## About

As Val Engine Class

Exported LUA class WP_VAL

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponVal.h"
#pragma once

#include "weaponmagazined.h"
#include "script_export_space.h"

class CWeaponVal :
	public CWeaponMagazined
{
	typedef CWeaponMagazined inherited;
public:
	CWeaponVal(void);
	virtual ~CWeaponVal(void);

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponVal)
#undef script_type_list
#define script_type_list save_type_list(CWeaponVal)
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponVal.cpp"
#include "pch_script.h"
#include "weaponval.h"

CWeaponVal::CWeaponVal(void) : CWeaponMagazined(SOUND_TYPE_WEAPON_SUBMACHINEGUN)
{
}

CWeaponVal::~CWeaponVal(void)
{
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponVal::script_register(lua_State* L)
{
	module(L)
	[
		class_<CWeaponVal, CGameObject>("CWeaponVal")
		.def(constructor<>())
	];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponVal.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponVal.cpp)
