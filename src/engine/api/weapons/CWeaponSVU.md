# CWeaponSVU

___

## About

SVU Engine Class

Exported LUA class WP_SVU

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponSVU.h"
#pragma once

#include "weaponcustompistol.h"
#include "script_export_space.h"

class CWeaponSVU :
    public CWeaponCustomPistol
{
    typedef CWeaponCustomPistol inherited;
public:
    CWeaponSVU(void);
    virtual ~CWeaponSVU(void);

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CWeaponSVU)
#undef script_type_list
#define script_type_list save_type_list(CWeaponSVU)
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/WeaponSVU.cpp"
#include "pch_script.h"
#include "weaponsvu.h"

CWeaponSVU::CWeaponSVU(void)
{
}

CWeaponSVU::~CWeaponSVU(void)
{
}

using namespace luabind;

#pragma optimize("s",on)
void CWeaponSVU::script_register(lua_State* L)
{
    module(L)
    [
        class_<CWeaponSVU, CGameObject>("CWeaponSVU")
        .def(constructor<>())
    ];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponSVU.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/WeaponSVU.cpp)
