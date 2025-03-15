# X-Ray Engine: Bone

___

## About

This page describes the X-Ray Engine: Bone panel. Some parameters from this panel are displayed only for certain joint types (Joint Type parameter)

## Location

Properties window > Bone tab

## Parameters

### Exportable

Если включён, то кость будет экспортируемой и будет сохранена при экспорте в *.object и *.ogf. Если выключен, то не будет использована во время экспорта. Обычно этот параметр нужно выключать у вспомогательных костей рига, например, у костей инверсной кинематики. Включать этот параметр нужно для деформирующих костей или для костей, которые обязательно должны быть у скелета.

### Material

Материал шейпа кости

### Length

TODO

### Shape Type

Тип шейпа

- None - без шейпа
- Box - параллелепипед
- Cylinder - цилиндр
- Sphere - сфера
- Custom - настраиваемый тип, который задаётся с помощью идентификатора в параметре Shape ID

### Shape ID

Идентификатор для Custom-шейпа

### No Pickable

TODO

### No Physics

TODO

### Remove After Break

TODO

### No Fog Collider

TODO

### Joint Type

- None - без типа
- Rigid - неподвижный
- Cloth - ткань
- Joint - шарнирное соединение
- Wheel - колесо автомобиля
- Slider - скольжение по одной оси
- Custom - настраиваемый тип, который задаётся с помощью идентификатора в параметре Joint ID

### Joint ID

Идентификатор для Custom-сустава

### Breakable

TODO

### Force

TODO

### Torque

TODO

### Friction

Трение шейпа

### Spring

Упругость шейпа

### Damping

Затухание скорости шейпа при отскакивании.

### Limit X/Y/Z: Min/Max

Пределы вращения для костей с типом Joint. Задаются с помощью минимального и максимального угла поворота.

### Limit X/Y/Z: Spring/Damping

Упругость и затухание для костей с типом Joint.

### Slide Z: Spring/Damping

Упругость и затухание во время скольжения для костей с типом Slider.

### Rotate Z: Spring/Damping

Упругость и затухание во время вращения для костей с типом Slider.

### Steer: Min/Max

Амплитуда вращения передних колёс автомобиля во время поворачивания руля. Задаётся минимальным и максимальным углом.

### Slide Z: Min/Max

Пределы скольжения для костей с типом Slider. Указывается с помощью минимального и максимального значения, которое выражено в метрах.

### Rotate Z: Min/Max

Пределы вращения для костей с типом Slider. Указывается с помощью минимального и максимального угла поворота.

### Mass

Значение массы шейпа кости в килограммах.

### Center of Mass

Координата центра массы шейпа.

## Operators

### Edit Shape

Включает режим редактирования шейпа. После запуска оператора, в сцену добавится объект шейпа, который можно трансформировать. В окне Properties во вкладке Object в панели X-Ray Engine: Edit Helper будут отображаться операторы для работы с шейпом.

### Edit Center

Включает режим редактирования центра масс. После запуска оператора, в сцену добавится объект-пустышка, который можно перемещать. В окне Properties во вкладке Object в панели X-Ray Engine: Edit Helper будут отображаться операторы для работы с центром масс

___

## Sources

[Source](https://github.com/PavelBlend/blender-xray/wiki/Panel-XRay-Engine-Bone)
