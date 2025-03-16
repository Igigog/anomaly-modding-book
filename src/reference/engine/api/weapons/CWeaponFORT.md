# CWeaponFORT

___

## About

Fort (Fort-12) Engine Class

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponFORT.h"
#pragma once

#include "WeaponPistol.h"
#include "script_export_space.h"

class CWeaponFORT : public CWeaponPistol
{
private:
	typedef CWeaponPistol inherited;
protected:
public:
	CWeaponFORT();
	virtual ~CWeaponFORT();

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponFORT)
#undef script_type_list
#define script_type_list save_type_list(CWeaponFORT)
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponFORT.cpp"
#include "pch_script.h"
#include "WeaponFORT.h"

CWeaponFORT::CWeaponFORT()
{
}

CWeaponFORT::~CWeaponFORT()
{
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponFORT::script_register(lua_State* L)
{
	module(L)
	[
		class_<CWeaponFORT, CGameObject>("CWeaponFORT")
		.def(constructor<>())
	];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponFORT.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponFORT.cpp)
