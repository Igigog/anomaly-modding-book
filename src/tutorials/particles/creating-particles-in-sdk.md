# Creating Particles in SDK

___

## Authors

TheParaziT

## Need to know

- How to work in [SDK Particle Editor](../../modding-tools/sdk/particle-editor/particle-editor.md)
- What is a [Particle Effect](../../glossary/glossary.html#particle-effect) and [Particle Group](../../glossary/glossary.html#particle-group)

## About

Particle Editor позволяет создавать сложные частицы и группы частиц, которые могут использоваться повсеместно в игре.

## Creating simple dust particle

Давайте создадим левитируещие частицы пыли.

Заходим в Particle Editor.

Нажимаем Add Particle и у нас создался Particle Effect.

Первым делом мы должны выставить максимально чисто частиц, которые могут быть заспавнены, а также текстуру и Engine шейдер.

В параметре Max Particles выставите нужное вам число. Я выбрал 20 частиц.

Для выбора текстры и шейдера нажмите галочку Sprite. Далее выберете нужную вам текстуру и Engine шейдер.

Для шейдеров партиклов существуют отдельные Particle Engine шейдеры (список всех engine шейдеров).

Добавляем три Actions:

- [Source](../../modding-tools/sdk/particle-editor/windows/actions/source.md) - Для спавна частиц
- [Turbulence](../../modding-tools/sdk/particle-editor/windows/actions/turbulence.md)
- [KillOld](../../modding-tools/sdk/particle-editor/windows/actions/kill-old.md) - Для удаления частиц

Для Source Action потребуется настройка домейна.

Я выбрал такие:

- Name --- Spawn Dust Particles
- Rate --- 100.000
- Domain --- Box
  - Min --- -1.000, -1.000, -1.000
  - Max --- 1.000, 1.000, 1.000,
- Velocity --- Point
  - Center --- 0, 0, 0
- Rotation --- Point
  - Center --- 0, 0, 0
- Size --- Point
  - Center --- 0, 0, 0
- Single Size --- False
- Color --- Point
  - Center --- R:255, G:255, B:255
  - Alpha --- 1.000
- Starting Age --- 0.000
- Age Sigma --- 0.500
- Parent Motion --- 0.000
- Allow Rotate --- False
- Draw --- True --- Чтобы видеть домейн
- Enabled --- True

Все это создает Box Domain прямо в центре.

Для KillOld требуется настройка времени жизни частиц, которые будут удаляться.

- Name --- Kill Dust Particles
- Age Limit --- 5.000
- Kill Less Than --- False
- Draw --- False
- Enabled --- True