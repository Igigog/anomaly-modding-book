# CWeaponPM

___

## About

PM Engine Class

Exported LUA class WP_PM

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponPM.h"
#ifndef __XR_WEAPON_PM_H__
#define __XR_WEAPON_PM_H__

#pragma once

#include "WeaponPistol.h"
#include "script_export_space.h"

class CWeaponPM : public CWeaponPistol
{
private:
    typedef CWeaponPistol inherited;
protected:
public:
    CWeaponPM();
    virtual ~CWeaponPM();

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponPM)
#undef script_type_list
#define script_type_list save_type_list(CWeaponPM)

#endif //__XR_WEAPON_PM_H__
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponPM.cpp"
#include "pch_script.h"
#include "WeaponPM.h"

CWeaponPM::CWeaponPM() : CWeaponPistol()
{
}

CWeaponPM::~CWeaponPM()
{
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponPM::script_register(lua_State* L)
{
    module(L)
    [
        class_<CWeaponPM, CGameObject>("CWeaponPM")
        .def(constructor<>())
    ];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponPM.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponPM.cpp)
