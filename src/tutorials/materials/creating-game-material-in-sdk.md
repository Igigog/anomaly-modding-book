# Creating Game Material in SDK

___

## About

Игровой материал определяет физический особенности поверхности. Все параметры материалов можно посмотреть в Shader Editor. Давайте например создадим три материала.

## Создание Static Object материала

Для примера создадим материал для статического обьекта. Что значит, что материал может использоваться только для статических обьектов.

Заходим в Shader Editor.

Нажимаем Create. Выбираем Static. Создатся новый материал для статического обьекта.

Теперь можем переименовать материал. Нажмите правой кнопкой мыши на материал -> Rename.

Далее нам нужно определить нужные нам параметры материала. Я выбрал такие:

- Dynamic - False
- Passable - False
- Bounceable - False
- Skidmark - False
- Bloodmark - False
- Climable - False
- Liquid - False
- Suppress Shadows - False
- Suppress Wallmarks - False
- Actor Obstacle - False
- Bullet No Ricoshet - False
- Friction - 1.000
- Damping - 1.000
- Spring - 1.000
- Bounce start vel - 0.00
- Bouncing - 0.100
- Bounce Damage - 1.0
- Injurius - 0.00
- Shooting - 0.00
- Shooting MP - 0.00
- Transparency - 0.00
- Sound occlusion - 0.00
- Flotation - 1.00
- Density Factor - 0.00

## Создание разрушаемого материала

Разрушаемый материал обязан быть создан для Динамического Обьекта. Для создания Разрушаемого Обьекта смотрите этот туториал.

Для создания разрушаемого материала нужно лишь включить один флаг Breakable.

## Создание climbable материала

Для создания Climbable материала нужно лишь включить один флаг Climable.
