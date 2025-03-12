# CWeaponFN2000

___

## About

FN 2000 Engine Class

Exported LUA class

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponFN2000.h"
#ifndef __XR_WEAPON_FN2000_H__
#define __XR_WEAPON_FN2000_H__

#pragma once

#include "WeaponMagazined.h"
#include "script_export_space.h"

class CWeaponFN2000 : public CWeaponMagazined
{
private:
	typedef CWeaponMagazined inherited;
public:
	CWeaponFN2000();
	virtual ~CWeaponFN2000();
DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponFN2000)
#undef script_type_list
#define script_type_list save_type_list(CWeaponFN2000)

#endif //__XR_WEAPON_FN2000_H__
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponFN2000.cpp"
#include "pch_script.h"
#include "WeaponFN2000.h"

CWeaponFN2000::CWeaponFN2000() : CWeaponMagazined(SOUND_TYPE_WEAPON_SNIPERRIFLE)
{
}

CWeaponFN2000::~CWeaponFN2000()
{
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponFN2000::script_register(lua_State* L)
{
	module(L)
	[
		class_<CWeaponFN2000, CGameObject>("CWeaponFN2000")
		.def(constructor<>())
	];
}
```

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/028ccf5f5189b393396480076b11e40852ba3ecd/src/xrGame/WeaponFN2000.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/028ccf5f5189b393396480076b11e40852ba3ecd/src/xrGame/WeaponFN2000.cpp)
