# Portal (Portal Rendering)

___

## About

In computer-generated imagery and real-time 3D computer graphics, portal rendering is an algorithm for visibility determination. For example, consider a 3D computer game environment, which may contain many polygons, only a few of which may be visible on screen at a given time. By determining which polygons are currently not visible, and not rendering those objects, significant performance improvements can be achieved.

A portal system is based on using the partitioning of space to form generalizations about the visibility of objects within those spaces. Regions of map space are divided into polygonal, generally convex, areas called zones, or sometimes sectors. Adjacent zones are linked to one another via shared dividing polygons termed portals. Approaches that precompute visibility for zones are referred to as potentially visible set or PVS methods.

For example, in a computer game such as Descent, the game area might be divided into several zones. These zones would then be connected to each other by small openings such as doors or windows. These openings are referred to as portals. When the zone behind a portal needs to be drawn, the only parts that are visible are the parts that can be seen through the portal. Therefore, the zone can be clipped against the portal boundaries to remove overdraw.

The use of portals simplifies the game engine's task of determining visible areas and objects from any given point of view of the level, and simplifies rendering by allowing it to use each portal as a viewing frustum for the area it leads to. Ideally, portals are formed of confined areas (like doors or tunnels), connecting two complex areas of the scene, where each of these areas would be enclosed in such a polygonal body.

Portals are best suited for indoor scenes such as mazes. Outdoor scenes do not usually have door-like objects that would clearly separate one zone from another.

___

## Sources

[Source](https://en.wikipedia.org/wiki/Portal_rendering)
