# Game Materials List

___

## About

This section contains a list and description of the Game Materials that are available in the `gamemtl.xr` file.

## Static Object materials

<style>
.main-table {
    width: 100%;
    border-collapse: collapse;
}

.main-table th, .main-table td {
    padding: 12px 15px;
}

.main-table th {
}

.material-row {
    transition: background-color 0.2s;
}

.material-row:hover {
    background-color: #f9f9f9;
}

.expand-btn {
    cursor: pointer;
    display: inline-block;
    width: 24px;
    height: 24px;
    text-align: center;
    margin-right: 8px;
    background-color: #e0e0e0;
    border-radius: 50%;
    color: #555;
    font-weight: bold;
    line-height: 24px;
    transition: all 0.3s;
    user-select: none;
}

.expand-btn:hover {
    background-color: #d0d0d0;
}

.expand-btn.active {
    background-color: #4CAF50;
    color: white;
}

.details-container {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #fafafa;
}

.details-container.show {
    max-height: 1500px;
    transition: max-height 0.2s ease-in;
}

.nested-table {
    width: calc(100% - 30px);
    margin: 10px 15px;
    border-collapse: collapse;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.nested-table td {
    padding: 10px 15px;
    border: 1px solid #e0e0e0;
    background-color: white;
}

.nested-table tr:first-child td {
    border-top: none;
}

.nested-table tr:last-child td {
    border-bottom: none;
}

.nested-table tr td:first-child {
    border-left: none;
    font-weight: 500;
    color: #333;
}

.nested-table tr td:last-child {
    border-right: none;
    color: #666;
}
</style>

<table class="main-table" id="StaticObjectMaterialsTable">
    <thead>
        <tr>
            <th>Path and material name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/default.html">+</span>
                default
            </td>
            <td>Standard Static Object material</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/asphalt.html">+</span>
                material\asphalt
            </td>
            <td>Asphalt</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/bricks.html">+</span>
                material\bricks
            </td>
            <td>Bricks</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/bush.html">+</span>
                material\bush
            </td>
            <td>Bush</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/bush-sux.html">+</span>
                material\bush_sux
            </td>
            <td>Dead bush</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/cloth.html">+</span>
                material\cloth
            </td>
            <td>Fabric</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/concrete.html">+</span>
                material\concrete
            </td>
            <td>Monolithic concrete</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/death.html">+</span>
                material\death
            </td>
            <td>Deadly earth (non-standard material)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/dirt.html">+</span>
                material\dirt
            </td>
            <td>Wet mud or swamp</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/earth.html">+</span>
                material\earth
            </td>
            <td>Dry or hard earth</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/earth-death.html">+</span>
                material\earth_death
            </td>
            <td>Dry solid earth (non-standard material)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/earth-slide.html">+</span>
                material\earth_slide
            </td>
            <td>Dry or hard earth</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/fake.html">+</span>
                material\fake
            </td>
            <td>Collision material</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/fake-ladders.html">+</span>
                material\fake_ladders
            </td>
            <td>Invisible ladder</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/fake-ladders-woods.html">+</span>
                material\fake_ladders_woods
            </td>
            <td>Invisible wooden ladder</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/fake-slide.html">+</span>
                material\fake_slide
            </td>
            <td></td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/flooring-tile.html">+</span>
                material\flooring_tile
            </td>
            <td>Flooring tile</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/glass.html">+</span>
                material\glass
            </td>
            <td>Glass</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/grass.html">+</span>
                material\grass
            </td>
            <td>Ground covered with grass</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/gravel.html">+</span>
                material\gravel
            </td>
            <td>Gravel</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/metal.html">+</span>
                material\metal
            </td>
            <td>Solid metal (thick piece or tank) </td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/metall-pipe.html">+</span>
                material\metall_pipe
            </td>
            <td>Metal pipe</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/metal-plate.html">+</span>
                material\metal_plate
            </td>
            <td>Metal plate</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/occ.html">+</span>
                material\occ
            </td>
            <td>Occlusion geometry material</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/sand.html">+</span>
                material\sand
            </td>
            <td>Sand</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/setka-rabica.html">+</span>
                material\setka_rabica
            </td>
            <td>Barbed wire</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/shifer.html">+</span>
                material\shifer
            </td>
            <td>Slate</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/stucco.html">+</span>
                material\stucco
            </td>
            <td>Stucco</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/tin.html">+</span>
                material\tin
            </td>
            <td>Tin or roof of houses</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/tree-trunk.html">+</span>
                material\tree_trunk
            </td>
            <td>Wood (trunk)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/water.html">+</span>
                material\water
            </td>
            <td>Water</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/water-radiation.html">+</span>
                material\water_radiation
            </td>
            <td>Radioactive water</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/wood.html">+</span>
                material\wood
            </td>
            <td>Wooden surface</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/wooden-board.html">+</span>
                material\wooden_board
            </td>
            <td>Wooden board</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>

## Dynamic Object materials

<table class="main-table" id="DynamicObjectMaterialsTable">
    <thead>
        <tr>
            <th>Path and material name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/default-object.html">+</span>
                default_object
            </td>
            <td>Standard Dynamic Object material</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/barrel.html">+</span>
                objects\barrel
            </td>
            <td>Barrel</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/bolt.html">+</span>
                objects\bolt
            </td>
            <td>Bolt</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/bottle.html">+</span>
                objects\bottle
            </td>
            <td>Bottle</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/bullet.html">+</span>
                objects\bullet
            </td>
            <td>Bullet and grenade fragment</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/car-cabine.html">+</span>
                objects\car_cabine
            </td>
            <td>Car body</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/car-wheel.html">+</span>
                objects\car_wheel
            </td>
            <td>Car wheel</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/clothes.html">+</span>
                objects\clothes
            </td>
            <td>Rag or cloth</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/concreate-box.html">+</span>
                objects\concrete_box
            </td>
            <td>Concrete block</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/fuel-can.html">+</span>
                objects\fuel_can
            </td>
            <td>Gasoline canister</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/glass.html">+</span>
                objects\glass
            </td>
            <td>Breakable glass</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/knife.html">+</span>
                objects\knife
            </td>
            <td>Knife</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/large-furnitura.html">+</span>
                objects\large_furnitura
            </td>
            <td>Large furniture (chairs, tables, cabinets)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/large-metal-trash.html">+</span>
                objects\large_metal_trash
            </td>
            <td>Large pieces of junk metal (fittings, pieces of iron)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/large-weapon.html">+</span>
                objects\large_weapon
            </td>
            <td>Heavy weapons (assault rifle, grenade launcher, rifle)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/metal-box.html">+</span>
                objects\metal_box
            </td>
            <td>Metal box</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/monster-body.html">+</span>
                objects\monster_body
            </td>
            <td>Dead mutant body</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/shell.html">+</span>
                objects\shell
            </td>
            <td>Shell</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/small-box.html">+</span>
                objects\small_box
            </td>
            <td>Small box (ammo, PDA, first aid kit)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/small-metal-trash.html">+</span>
                objects\small_metal_trash
            </td>
            <td>Small metal trash (tubes, pieces, nuts, bolts)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/small-weapon.html">+</span>
                objects\small_weapon
            </td>
            <td>Small weapon (pistol)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/tin-can.html">+</span>
                objects\tin_can
            </td>
            <td>Tin can</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/actor.html">+</span>
                creatures\actor
            </td>
            <td>Person (Actor)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/hoof.html">+</span>
                creatures\hoof
            </td>
            <td>Mutant with hooves</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/human.html">+</span>
                creatures\human
            </td>
            <td>Human (NPC)</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/human-head.html">+</span>
                creatures\human_head
            </td>
            <td>Human head</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/large.html">+</span>
                creatures\large
            </td>
            <td>Big mutant</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/medium.html">+</span>
                creatures\medium
            </td>
            <td>Medium mutant</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/phantom.html">+</span>
                creatures\phantom
            </td>
            <td>Phantom</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="dynamic/small.html">+</span>
                creatures\small
            </td>
            <td>Small mutant</td>
        </tr>
        <tr>
            <td colspan="2" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>

<script>
document.addEventListener('DOMContentLoaded', () => {
    // Обработчик для обеих таблиц
    const handleTableClick = async (event) => {
        const btn = event.target.closest('.expand-btn');
        if (!btn) return;

        const row = btn.closest('tr');
        const detailsContainer = row.nextElementSibling.querySelector('.details-container');
        const isOpening = !detailsContainer.classList.contains('show');
        // Обновляем состояние кнопки
        btn.classList.toggle('active', isOpening);
        btn.textContent = isOpening ? '−' : '+';
        if (isOpening) {
            detailsContainer.classList.add('show');
            // Загружаем данные только если они еще не загружены
            if (btn.dataset.source && !btn.dataset.loaded) {
                try {
                    const response = await fetch(btn.dataset.source);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    const html = await response.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const nestedTable = detailsContainer.querySelector('.nested-table');
                    // Очищаем перед вставкой новых данных
                    nestedTable.innerHTML = '';
                    // Безопасное извлечение таблицы
                    const sourceTable = doc.querySelector('table');
                    if (sourceTable) {
                        nestedTable.appendChild(sourceTable.cloneNode(true));
                    } else {
                        throw new Error('Таблица не найдена в ответе');
                    }
                    btn.dataset.loaded = 'true';
                } catch (error) {
                    console.error('Ошибка загрузки данных:', error);
                    detailsContainer.innerHTML = '<div class="error-message">Ошибка загрузки данных. Пожалуйста, попробуйте позже.</div>';
                }
            }
        } else {
            // Небольшая задержка для плавного закрытия
            setTimeout(() => {
                detailsContainer.classList.remove('show');
            }, 5);
        }
    };

    const staticTable = document.getElementById('StaticObjectMaterialsTable');
    const dynamicTable = document.getElementById('DynamicObjectMaterialsTable');
    if (staticTable) staticTable.addEventListener('click', handleTableClick);
    if (dynamicTable) dynamicTable.addEventListener('click', handleTableClick);
});
</script>
