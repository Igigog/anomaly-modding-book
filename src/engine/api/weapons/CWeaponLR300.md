# CWeaponLR300

___

## About

LR300 Engine Class

Exported LUA class WP_LR300

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponLR300.h"
#ifndef __XR_WEAPON_LR300_H__
#define __XR_WEAPON_LR300_H__
#pragma once

#include "WeaponMagazined.h"
#include "script_export_space.h"

class CWeaponLR300 : public CWeaponMagazined
{
private:
	typedef CWeaponMagazined inherited;
public:
	/*
	virtual	void	UpdateCL			();
	virtual void	renderable_Render	();
	virtual void	spatial_move		();
	virtual void	spatial_register	();
	virtual void	spatial_unregister	();
	*/

	CWeaponLR300();
	virtual ~CWeaponLR300();

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponLR300)
#undef script_type_list
#define script_type_list save_type_list(CWeaponLR300)

#endif //__XR_WEAPON_LR300_H__
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponLR300.cpp"
#include "pch_script.h"
#include "WeaponLR300.h"

CWeaponLR300::CWeaponLR300() : CWeaponMagazined(SOUND_TYPE_WEAPON_SUBMACHINEGUN)
{
}

CWeaponLR300::~CWeaponLR300()
{
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponLR300::script_register(lua_State* L)
{
	module(L)
	[
		class_<CWeaponLR300, CGameObject>("CWeaponLR300")
		.def(constructor<>())
	];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponLR300.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponLR300.cpp)
