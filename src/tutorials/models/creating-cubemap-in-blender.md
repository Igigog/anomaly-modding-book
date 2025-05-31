# Creating Cubemap in Blender

___

## About

In X-Ray, cubmaps are used for Sky Box and for reflective surfaces (mirrors, glass).

```admonish tip
Cubmaps can be created in different ways (addons, procedural textures or HDRi maps) and in different programs.
```

```admonish info
In X-Ray cubemap are made this way: One [*.dds](../../reference/file-formats/textures/dds.md) texture with multiple layers.

![Cubemap Example](assets/images/cubemap-example.png)
```

## Start

To give an example, let's create a simple procedural sky.

To do this, go to `Shading` or open `Shader Editor` ![alt text svg-icon](../../assets/icons/blender/shader.svg).

In `Shader Type` select `World` ![alt text svg-icon](../../assets/icons/blender/world.svg)

Find and add the [Sky Texture Node](https://docs.blender.org/manual/en/4.3/render/shader_nodes/textures/sky.html) and connect it to the [Background Node](https://docs.blender.org/manual/en/4.3/render/shader_nodes/shader/background.html) that is connected to the [World Output Node](https://docs.blender.org/manual/en/4.3/render/shader_nodes/output/world.html).

![alt text centered](assets/images/creating-cubemap-in-blender-node-example.png)

Switch Render Engine to `Cycles` in `Render Properties` ![alt text svg-icon](../../assets/icons/blender/scene.svg).

Scene should look like this.

![alt text centered](assets/images/creating-cubemap-in-blender-scene.png)