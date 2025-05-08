# Engine Shaders List

___

## About

This section contains a list and description of the shaders that are available in the `shaders.xr` file.

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

### Shaders for static objects

<table class="main-table" id="StaticObjectEngineShaderTable">
    <thead>
        <tr>
            <th>Path and Shader Name</th>
            <th>Shader Type</th>
            <th>Description</th>
            <th>Preview</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/zfill.html">+</span>
                zfill
            </td>
            <td>basic (simple)</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/xwindow.html">+</span>
                xwindow
            </td>
            <td>LEVEL: diffuse*base</td>
            <td>Old unused glass shader</td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/xwindow.html">+</span>
                selflight
            </td>
            <td>LEVEL: diffuse*base</td>
            <td>Self-lighting shader</td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/glass.html">+</span>
                glass
            </td>
            <td>basic (simple)</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/friendly-indicator.html">+</span>
                friendly_indicator
            </td>
            <td>basic (simple)</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/font.html">+</span>
                font
            </td>
            <td>basic (simple)</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/default_pn_hm.html">+</span>
                default_pn_hm
            </td>
            <td>LEVEL: lmap*base (default)</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/default_pn.html">+</span>
                default_pn
            </td>
            <td>LEVEL: lmap*base (default)</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/default_hm.html">+</span>
                default_hm
            </td>
            <td>LEVEL: lmap*base (default)</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/default.html">+</span>
                default
            </td>
            <td>LEVEL: lmap*base (default)</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="static/clouds.html">+</span>
                clouds
            </td>
            <td>basic (simple)</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>

### ufp Shaders

| Shader name | Shader Type | Description |
|---|---|---|
| ufp_blend |  |  |

### Test Shaders

| Shader name | Shader Type | Description |
|---|---|---|
| test\aaaaaaaa__ |  |  |
| test\aass |  |  |

### Sky Shaders

| Shader name | Shader Type | Description |
|---|---|---|
| sky\background |  |  |
| sky\clouds |  |  |
| sky\clouds_old |  |  |
| sky\skydome |  |  |

### Particles Shaders

<table class="main-table" id="ParticlesEngineShaderTable">
    <thead>
        <tr>
            <th>Path and Shader Name</th>
            <th>Shader Type</th>
            <th>Description</th>
            <th>Preview</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/add.html">+</span>
                particles\add
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/alpha-add.html">+</span>
                particles\alpha_add
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/blend.html">+</span>
                particles\blend
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/dark.html">+</span>
                particles\dark
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/set.html">+</span>
                particles\set
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xadd.html">+</span>
                particles\xadd
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xblend.html">+</span>
                particles\xblend
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                particles\xdistort
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>

### Shaders for dynamic objects

<table class="main-table" id="DynamicObjectEngineShaderTable">
    <thead>
        <tr>
            <th>Path and Shader Name</th>
            <th>Shader Type</th>
            <th>Description</th>
            <th>Preview</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/add.html">+</span>
                models\antigas_glass
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/alpha-add.html">+</span>
                models\artefact
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/blend.html">+</span>
                models\artefact2
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/dark.html">+</span>
                models\artifact-anim-env
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/set.html">+</span>
                models\glass_stalker_refl
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xadd.html">+</span>
                models\lfo_black_lens_weapons
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xblend.html">+</span>
                models\lfo_black_soft_lens_weapons
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\lfo_glass_lens_weapons
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\lfo_light_dot_weapons
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\lightplanes
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\mirror
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\model
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\model_aref
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\model_fur
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\hm
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\pn
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\pn_hm
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\pautina
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\selflight
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\seftlight_det
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\selflightl
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\transparent
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\water
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\water_ryaska
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\weapons
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\window
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\xanomaly
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistor.html">+</span>
                models\xdistor
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\xdistorcolor
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\xdistorcolorl
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\xdistorinv
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\xmonolith
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="particles/xdistort.html">+</span>
                models\xwindows
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>

### Levels Shaders

| Shader name | Shader Type | Description | Shader Properties |
|---|---|---|---|
| levels\agroprom_asfalt | LEVEL: implicit**detail | Agroprom asphalt terrain shader | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\agroprom_grass | LEVEL: implicit**detail | Agroprom grass terrain shader | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\agroprom_gravel | LEVEL: implicit**detail | Agroprom gravel terrain shader | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\bar_asfalt | LEVEL: implicit**detail |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\bar_asphalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\bar_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\bar_gravel |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkcape_asfalt |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkcape_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darksc_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darksc_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkvalley_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkvalley_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\darkvalley_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\dead_city_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\dead_city_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\dead_city_ground |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\deadcity_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\deadcity_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\dead_city_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\escape_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\escape_asfalt_noblend |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\escape_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\escape_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\garbage_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_earth_04 |
| levels\garbage_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_earth_04 |
| levels\garbage_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_earth_04 |
| levels\generator_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\generator_earth |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\generators_art |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\hospital_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\hospital_sand |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\jupiter_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\detail_grnd_plates |
| levels\jupiter_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\detail_grnd_plates |
| levels\jupiter_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\detail_grnd_plates |
| levels\jupiter_plates |  |  | Name = detail\detail_grnd_plates<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\detail_grnd_plates |
| levels\l01_escape_asfalt |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\l01_escape_asfalt_noblend |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_asphalt_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_asphalt_01<br> R2-A = detail\ground_asphalt_01 |
| levels\l01_escape_detritus |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\l01_escape_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\l01_escape_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\limansk_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\limansk_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\limansk_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\maedow_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\maedow_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\maedow_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\marsh_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_mud_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_marsh_01 |
| levels\military_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\military_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\military_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\pripyat_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\pripyat_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\pripyat_gras2 |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\pripyat_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\radar_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\radar_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_earth |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_grass |  |  | Name = detail\ground_grass_03<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_leaves |  |  | Name = detail\ground_earth_01<br>  R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\red_forest_sand |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\stancia |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\stancia_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\stancia_build_kanal |  |  | Name = detail\ground_earth_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\stancia_kanal |  |  | Name = detail\ground_mud_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\truckscemetery |  |  | Name = detail\ground_mud_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\truckscemetery_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\truckscemetery_grass |  |  | Name = detail\ground_grass_01<br> R2-R = detail\ground_grass_01<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_01<br> R2-A = detail\ground_mud_01 |
| levels\yantar_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_04<br> R2-A = detail\ground_mud_01 |
| levels\yantar_earth |  |  | Name = detail\ground_earth_04<br> R2-R = detail\ground_grass_03<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_04<br> R2-A = detail\ground_mud_01 |
| levels\zaton_asfalt |  |  | Name = detail\ground_asphalt_01<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_cracked |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_earth |  |  | Name = detail\ground_earth_04<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_earth_2 |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_grass |  |  | Name = detail\ground_grass_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_pebbles |  |  | Name = detail\detail_grnd_pebbles<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_plates |  |  | Name = detail\detail_grnd_plates<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |
| levels\zaton_sand |  |  | Name = detail\ground_earth_02<br> R2-R = detail\ground_grass_02<br> R2-G = detail\ground_asphalt_01<br> R2-B = detail\ground_earth_02<br> R2-A = detail\ground_mud_01 |

### HUD Shaders

<table class="main-table" id="HUDEngineShaderTable">
    <thead>
        <tr>
            <th>Path and Shader Name</th>
            <th>Shader Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/ai-nodes.html">+</span>
                hud\add
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                hud\add-alpha
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                hud\cursor
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                hud\default
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                hud\fog_of_war
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                hud\hitmarker
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                hud\p3d
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                hud\set
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                hud\seta
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>

### Flora Shaders

<table class="main-table" id="FloraEngineShaderTable">
    <thead>
        <tr>
            <th>Path and Shader Name</th>
            <th>Shader Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/ai-nodes.html">+</span>
                flora\leaf_wave
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                flora\trunk_wave
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>

### Effects Shaders

| Shader name and path | Description |
|---|---|
| effects\bullet_tracer |  |
| effects\flame |  |
| effects\flare |  |
| effects\fx_refl_pod |  |
| effects\glow |  |
| effects\lightning |  |
| effects\lightplanes |  |
| effects\moon |  |
| effects\rain |  |
| effects\screen_add |  |
| effects\screen_blend |  |
| effects\screen_noise |  |
| effects\screen_set |  |
| effects\shadow |  |
| effects\shadow_blur |  |
| effects\shadow_world |  |
| effects\sun |  |
| effects\wallmark |  |
| effects\wallmarkblend |  |
| effects\wallmarkmult |  |
| effects\wallmarkset |  |
| effects\water | pure water shader |
| effects\waterryaska | crayfish shader |
| effects\waterstuden | swamp shader |
| effects\watertest |  |
| effects\watertest-1 |  |

### SDK Shaders

<table class="main-table" id="SDKEngineShaderTable">
    <thead>
        <tr>
            <th>Path and Shader Name</th>
            <th>Shader Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/ai-nodes.html">+</span>
                editor\ai_node
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                editor\do_base
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                editor\selection
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                editor\spawn_icon
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                editor\wire
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
    </tbody>
</table>

### Details Shaders

<table class="main-table" id="DetailObjectEngineShaderTable">
    <thead>
        <tr>
            <th>Path and Shader Name</th>
            <th>Shader Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/ai-nodes.html">+</span>
                details\blend
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                details\lod
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                details\set
            </td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

### Def_Shaders

| Shader name and path | Description | Preview |
|---|---|---|
| def_shaders\def_add |  | ![def_add](images/shaders-preview/def_add.png) |
| def_shaders\def_aref |  | ![def_aref](images/shaders-preview/def_aref.png) |
| def_shaders\def_aref_v |  | ![def_aref_v](images/shaders-preview/def_aref_v.png) |
| def_shaders\def_objects_lod |  | ![def_objects_lod](images/shaders-preview/def_objects_lod.png) |
| def_shaders\def_objects_lod_trans |  | ![Alt text](images/shaders-preview/def_objects_lod_trans.png) |
| def_shaders\def_refl_alpha |  | ![Alt text](images/shaders-preview/def_refl_alpha.png) |
| def_shaders\def_refl_alpha_heli |  | ![Alt text](images/shaders-preview/def_refl_alpha_heli.png) |
| def_shaders\def_refl_trans |  | ![Alt text](images/shaders-preview/def_refl_trans.png) |
| def_shaders\def_trans |  | ![Alt text](images/shaders-preview/def_trans.png) |
| def_shaders\def_trans_v |  | ![Alt text](images/shaders-preview/def_trans_v.png) |
| def_shaders\def_trans_v_tuchi |  | ![Alt text](images/shaders-preview/def_trans_v_tuchi.png) |
| def_shaders\def_vertex |  | ![Alt text](images/shaders-preview/def_vertex.png) |
| def_shaders\def_vertex_hm |  | ![Alt text](images/shaders-preview/def_vertex.png) |
| def_shaders\def_vertex_pn |  | ![Alt text](images/shaders-preview/def_vertex.png) |
| def_shaders\def_vertex_pn_hm |  | ![Alt text](images/shaders-preview/def_vertex.png) |
| def_shaders\lod |  | ![Alt text](images/shaders-preview/lod.png) |
| def_shaders\lod_old |  | ![Alt text](images/shaders-preview/lod.png) |

### Debug Shaders

<table class="main-table" id="DebugEngineShaderTable">
    <thead>
        <tr>
            <th>Path and Shader Name</th>
            <th>Shader Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/ai-nodes.html">+</span>
                debug\ai_nodes
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
                <div class="details-container">
                    <table class="nested-table">
                    </table>
                </div>
            </td>
        </tr>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="debug/wireframe.html">+</span>
                debug\wireframe
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td colspan="3" style="padding: 0;">
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

    const staticTable = document.getElementById('StaticObjectEngineShaderTable');
    if (staticTable) staticTable.addEventListener('click', handleTableClick);
});
</script>
