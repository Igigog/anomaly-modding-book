# CRGD5

___

## About

RGD5 Engine Class

Exported LUA class G_RGD5_S

## Code

### Header

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/RGD5.h"
#pragma once

#include "grenade.h"
#include "script_export_space.h"

class CRGD5 :
    public CGrenade
{
    typedef CGrenade inherited;
public:
    CRGD5(void);
    virtual ~CRGD5(void);

DECLARE_SCRIPT_REGISTER_FUNCTION
};

add_to_type_list(CRGD5)
#undef script_type_list
#define script_type_list save_type_list(CRGD5)
```

### Realization

```C++,icon=.devicon-cplusplus-plain,filepath="src/xrGame/RGD5.cpp"
#include "pch_script.h"
#include "rgd5.h"

CRGD5::CRGD5(void)
{
}

CRGD5::~CRGD5(void)
{
}

using namespace luabind;

#pragma optimize("s",on)
void CRGD5::script_register(lua_State* L)
{
    module(L)
    [
        class_<CRGD5, CGameObject>("CRGD5")
        .def(constructor<>())
    ];
}
```

___

## Sources

[Header file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/RGD5.h)

[Realization file](https://bitbucket.org/anomalymod/xray-monolith/src/master/src/xrGame/RGD5.cpp)
