# Shader Editor

___

Used to create/edit shaders

___

## Interface

## Tools

| Button | Description |
---|---|
| File | Save<br> Reload |
| Create | Create New Shader |
| Remove | Remove Selected Shaders |
| Clone | Clone Selected Shaders |

### Engine Shader Parametres

**Shader Types**

| Name | Description |
---|---|
| \<none> |  |
| EDITOR: selection |  |
| EDITOR: wire |  |
| INTERNAL: blur |  |
| INTERNAL: gray-scale effect |  |
| INTERNAL: lighting projecting |  |
| INTERNAL: shadow projecting |  |
| LEVEL: (lmap+env\*const)*base |  |
| LEVEL: Implicit |  |
| LEVEL: Implicit**detail |  |
| LEVEL: detail objects |  |
| LEVEL: diffuse*base |  |
| LEVEL: diffuse*base.aref |  |
| LEVEL: lmap*(env^base) |  |
| LEVEL: lmap*base (default) |  |
| LEVEL: lmap*base.aref |  |
| LEVEL: trees/bushes |  |
| MODEL: Default |  |
| MODEL: env^base |  |
| basic (simple) |  |
| particles |  |

**Owner**

> Your PC Name

**Name**

> Shader Name

#### General

**Priority**

> ?

**Strict sorting**

> ?

#### Base Texture

**Name**

> base texture for test shader?

**Transform**

> ?

### Compiler Shader Parametres

**Name**

> Shader Name

**Translucency**

> Translucency of object with this shader

**Ambient**

>

**LM density**

#### Flags

**Collision**

> Enable Collision for object with this shader

**Rendering**

> An object with this shader will not render in the game world

**OptimizeUV**

> ?

**Vertex Light**

> ?

**Cast Shadow**

> Enable shadow casting for object with this shader

### Material Parametres

**Name**

> Material Name

**Desc**

> Material Description

#### Flags

**Dynamic**

> whether the object is dynamic or not

**Passable**

> passable material (no physical collision)

**Bounceable**

> Enabling bounce from this material

**Skidmark**

> whether it is possible to leave marks on this material

**Bloodmark**

> can the material be splattered with blood

**Climable**

> whether it is possible to climb the material

**Liquid**

> Is the material a liquid?

**Suppress Shadows**

> do not draw shadows on this material

**Supress Wallmarks**

> not to draw marks on this material

**Actor Obstacle**

> An actor's ability to collide with the material?

**Bullet No Ricoshet**

> Will the bullet ricochet off the material

#### Physics

**Friction**

> friction coefficient

**Damping**

> softness coefficient of the material (collision energy loss)

**Spring**

> material stiffness coefficient (spring stiffness)

**Bounce start vel**

> initial velocity at which the bounce starts to work

**Bouncing**

> bounce coefficient

#### Factors

**Bounce Damage**

> the damage that is inflicted by bouncing?

**Injurius**

> radiation exposure by contact

**Shooting (1-went through)**

> material penetrability

**Shooting MP (1-went through)**

> ?

**Transparency (1-full transp)**

> material transparency for AI

**Sound occlusion (1-full hear)**

> attenuation factor

**Flotation (1-full passable)**

> deceleration coefficient when passing through this material

**Density Factor**

> how many m/s the bullet slows down when passing 1 m of material

### Material Pair

### Sound Env

