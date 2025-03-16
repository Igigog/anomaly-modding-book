# CWeaponSVD

___

## About

SVD Engine Class

Exported LUA class WP_SVD

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponSVD.h"
#pragma once

#include "weaponcustompistol.h"
#include "script_export_space.h"

class CWeaponSVD :
	public CWeaponCustomPistol
{
	typedef CWeaponCustomPistol inherited;
protected:
	virtual void switch2_Fire();
	virtual void OnAnimationEnd(u32 state);
public:
	CWeaponSVD(void);
	virtual ~CWeaponSVD(void);

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponSVD)
#undef script_type_list
#define script_type_list save_type_list(CWeaponSVD)
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponSVD.cpp"
#include "pch_script.h"
#include "weaponsvd.h"

CWeaponSVD::CWeaponSVD(void)
{
}

CWeaponSVD::~CWeaponSVD(void)
{
}

void CWeaponSVD::switch2_Fire()
{
	m_bFireSingleShot = true;
	bWorking = false;
	SetPending(TRUE);
	m_iShotNum = 0;
	m_bStopedAfterQueueFired = false;
}

void CWeaponSVD::OnAnimationEnd(u32 state)
{
	switch (state)
	{
	case eFire:
		{
			SetPending(FALSE);
		}
		break; // End of reload animation
	}
	inherited::OnAnimationEnd(state);
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponSVD::script_register(lua_State* L)
{
	module(L)
	[
		class_<CWeaponSVD, CGameObject>("CWeaponSVD")
		.def(constructor<>())
	];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponSVD.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponSVD.cpp)
