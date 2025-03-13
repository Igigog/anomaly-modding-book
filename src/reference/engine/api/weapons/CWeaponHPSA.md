# CWeaponHPSA

___

## About

121

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponHPSA.h"
#ifndef __XR_WEAPON_HPSA_H__
#define __XR_WEAPON_HPSA_H__

#pragma once

#include "WeaponPistol.h"
#include "script_export_space.h"

class CWeaponHPSA : public CWeaponPistol
{
private:
	typedef CWeaponPistol inherited;
protected:
public:
	CWeaponHPSA();
	virtual ~CWeaponHPSA();

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponHPSA)
#undef script_type_list
#define script_type_list save_type_list(CWeaponHPSA)

#endif //__XR_WEAPON_HPSA_H__
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponHPSA.cpp"
#include "pch_script.h"

#include "WeaponHPSA.h"

CWeaponHPSA::CWeaponHPSA() : CWeaponPistol()
{
}

CWeaponHPSA::~CWeaponHPSA()
{
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponHPSA.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponHPSA.cpp)
