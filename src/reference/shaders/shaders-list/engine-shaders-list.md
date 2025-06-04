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
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="engine-shaders/static/zfill.html">+</span>
                zfill
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/static/xwindow.html">+</span>
                xwindow
            </td>
            <td>LEVEL: diffuse*base</td>
            <td>Old unused glass shader</td>
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
                <span class="expand-btn" data-source="engine-shaders/static/selflight.html">+</span>
                selflight
            </td>
            <td>LEVEL: diffuse*base</td>
            <td>Self-lighting shader</td>
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
                <span class="expand-btn" data-source="engine-shaders/static//glass.html">+</span>
                glass
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/static/friendly-indicator.html">+</span>
                friendly_indicator
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/static/font.html">+</span>
                font
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/static/default-pn-hm.html">+</span>
                default_pn_hm
            </td>
            <td>LEVEL: lmap*base (default)</td>
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
                <span class="expand-btn" data-source="engine-shaders/static/default-pn.html">+</span>
                default_pn
            </td>
            <td>LEVEL: lmap*base (default)</td>
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
                <span class="expand-btn" data-source="engine-shaders/static/default-hm.html">+</span>
                default_hm
            </td>
            <td>LEVEL: lmap*base (default)</td>
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
                <span class="expand-btn" data-source="engine-shaders/static/default.html">+</span>
                default
            </td>
            <td>LEVEL: lmap*base (default)</td>
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
                <span class="expand-btn" data-source="engine-shaders/static/clouds.html">+</span>
                clouds
            </td>
            <td>basic (simple)</td>
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

<table class="main-table" id="SkyEngineShaderTable">
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
                <span class="expand-btn" data-source="engine-shaders/particles/ufp-blend.html">+</span>
                ufp_blend
            </td>
            <td>particles</td>
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

### Sky Shaders

<table class="main-table" id="SkyEngineShaderTable">
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
                <span class="expand-btn" data-source="engine-shaders/sky/background.html">+</span>
                sky\background
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/sky/clouds.html">+</span>
                sky\clouds
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/sky/clouds-old.html">+</span>
                sky\clouds_old
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/sky/skydome.html">+</span>
                sky\skydome
            </td>
            <td>basic (simple)</td>
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

### Particles Shaders

<table class="main-table" id="ParticlesEngineShaderTable">
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
                <span class="expand-btn" data-source="engine-shaders/particles/add.html">+</span>
                particles\add
            </td>
            <td>particles</td>
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
                <span class="expand-btn" data-source="engine-shaders/particles/alpha-add.html">+</span>
                particles\alpha_add
            </td>
            <td>particles</td>
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
                <span class="expand-btn" data-source="engine-shaders/particles/blend.html">+</span>
                particles\blend
            </td>
            <td>particles</td>
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
                <span class="expand-btn" data-source="engine-shaders/particles/dark.html">+</span>
                particles\dark
            </td>
            <td>particles</td>
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
                <span class="expand-btn" data-source="engine-shaders/particles/set.html">+</span>
                particles\set
            </td>
            <td>particles</td>
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
                <span class="expand-btn" data-source="engine-shaders/particles/xadd.html">+</span>
                particles\xadd
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/particles/xblend.html">+</span>
                particles\xblend
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/particles/xdistort.html">+</span>
                particles\xdistort
            </td>
            <td>basic (simple)</td>
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
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="engine-shaders/dynamic/antigas-glass.html">+</span>
                models\antigas_glass
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/artefact.html">+</span>
                models\artefact
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/artefact2.html">+</span>
                models\artefact2
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/artifact-anim-env.html">+</span>
                models\artifact-anim-env
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/glass-stalker-refl.html">+</span>
                models\glass_stalker_refl
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/lfo-black-lens-weapons.html">+</span>
                models\lfo_black_lens_weapons
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/lfo-black-soft-lens-weapons.html">+</span>
                models\lfo_black_soft_lens_weapons
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/lfo-glass-lens-weapons.html">+</span>
                models\lfo_glass_lens_weapons
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/lfo-light-dot-weapons.html">+</span>
                models\lfo_light_dot_weapons
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/lightplanes.html">+</span>
                models\lightplanes
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/mirror.html">+</span>
                models\mirror
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/model.html">+</span>
                models\model
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/model-aref.html">+</span>
                models\model_aref
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/model-fur.html">+</span>
                models\model_fur
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/model-hm.html">+</span>
                models\model_hm
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/model-pn.html">+</span>
                models\model_pn
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/model-pn-hm.html">+</span>
                models\model_pn_hm
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/pautina.html">+</span>
                models\pautina
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/selflight.html">+</span>
                models\selflight
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/selflight-det.html">+</span>
                models\selflight_det
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/selflightl.html">+</span>
                models\selflightl
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/transparent.html">+</span>
                models\transparent
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/water.html">+</span>
                models\water
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/water-ryaska.html">+</span>
                models\water_ryaska
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/weapons.html">+</span>
                models\weapons
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/window.html">+</span>
                models\window
            </td>
            <td>MODEL: env^base</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/xanomaly.html">+</span>
                models\xanomaly
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/xdistor.html">+</span>
                models\xdistor
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/xdistorcolor.html">+</span>
                models\xdistorcolor
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/xdistorcolorl.html">+</span>
                models\xdistorcolorl
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/xdistorinv.html">+</span>
                models\xdistorinv
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/xmonolith.html">+</span>
                models\xmonolith
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/dynamic/xwindows.html">+</span>
                models\xwindows
            </td>
            <td>MODEL: Default</td>
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

<table class="main-table" id="LevelEngineShaderTable">
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
                <span class="expand-btn" data-source="engine-shaders/level/agroprom-asfalt.html">+</span>
                levels\agroprom_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/agroprom-grass.html">+</span>
                levels\agroprom_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/agroprom-gravel.html">+</span>
                levels\agroprom_gravel
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/bar-asfalt.html">+</span>
                levels\bar_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/bar-asphalt.html">+</span>
                levels\bar_asphalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/bar-grass.html">+</span>
                levels\bar_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/bar-gravel.html">+</span>
                levels\bar_gravel
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/darkcape-asfalt.html">+</span>
                levels\darkcape_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/darkcape-grass.html">+</span>
                levels\darkcape_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/darksc-asfalt.html">+</span>
                levels\darksc_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/darksc-grass.html">+</span>
                levels\darksc_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/darkvalley-asfalt.html">+</span>
                levels\darkvalley_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/darkvalley-grass.html">+</span>
                levels\darkvalley_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/darkvalley-sand.html">+</span>
                levels\darkvalley_sand
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/dead-city-asfalt.html">+</span>
                levels\dead_city_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/dead-city-grass.html">+</span>
                levels\dead_city_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/dead-city-ground.html">+</span>
                levels\dead_city_ground
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/deadcity-asfalt.html">+</span>
                levels\deadcity_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/deadcity-earth.html">+</span>
                levels\deadcity_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/dead-city-grass.html">+</span>
                levels\dead_city_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/escape-asfalt.html">+</span>
                levels\escape_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/escape-asfalt-noblend.html">+</span>
                levels\escape_asfalt_noblend
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/escape-grass.html">+</span>
                levels\escape_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/escape-sand.html">+</span>
                levels\escape_sand
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/garbage-asfalt.html">+</span>
                levels\garbage_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/garbage-earth.html">+</span>
                levels\garbage_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/garbage-grass.html">+</span>
                levels\garbage_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/generator-asfalt.html">+</span>
                levels\generator_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/generator-earth.html">+</span>
                levels\generator_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/generators-art.html">+</span>
                levels\generators_art
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/hospital-grass.html">+</span>
                levels\hospital_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/hospital-sand.html">+</span>
                levels\hospital_sand
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/jupiter-asfal.html">+</span>
                levels\jupiter_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/jupiter-earth.html">+</span>
                levels\jupiter_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/jupiter-grass.html">+</span>
                levels\jupiter_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/jupiter-plates.html">+</span>
                levels\jupiter_plates
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/l01-escape-asfalt.html">+</span>
                levels\l01_escape_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/l01-escape-asfalt-noblend.html">+</span>
                levels\l01_escape_asfalt_noblend
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/l01-escape-detritus.html">+</span>
                levels\l01_escape_detritus
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/l01-escape-grass.html">+</span>
                levels\l01_escape_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/l01-escape-sand.html">+</span>
                levels\l01_escape_sand
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/limansk-asfalt.html">+</span>
                levels\limansk_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/limansk-earth.html">+</span>
                levels\limansk_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/limansk-grass.html">+</span>
                levels\limansk_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/maedow-asfalt.html">+</span>
                levels\maedow_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/maedow-grass.html">+</span>
                levels\maedow_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/maedow-sand.html">+</span>
                levels\maedow_sand
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/marsh-earth.html">+</span>
                levels\marsh_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/military-asfalt.html">+</span>
                levels\military_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/military-grass.html">+</span>
                levels\military_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/military-sand.html">+</span>
                levels\military_sand
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/pripyat-asfalt.html">+</span>
                levels\pripyat_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/pripyat-earth.html">+</span>
                levels\pripyat_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/pripyat-gras2.html">+</span>
                levels\pripyat_gras2
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/pripyat-grass.html">+</span>
                levels\pripyat_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/radar-asfalt.html">+</span>
                levels\radar_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/radar-grass.html">+</span>
                levels\radar_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/red-forest-asfalt.html">+</span>
                levels\red_forest_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/red-forest-earth.html">+</span>
                levels\red_forest_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/red-forest-grass.html">+</span>
                levels\red_forest_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/red-forest-leaves.html">+</span>
                levels\red_forest_leaves
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/red-forest-sand.html">+</span>
                levels\red_forest_sand
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/stancia.html">+</span>
                levels\stancia
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/stancia-asfalt.html">+</span>
                levels\stancia_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/stancia-build-kanal.html">+</span>
                levels\stancia_build_kanal
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/stancia-kanal.html">+</span>
                levels\stancia_kanal
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/truckscemetery.html">+</span>
                levels\truckscemetery
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/truckscemetery-asfalt.html">+</span>
                levels\truckscemetery_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/truckscemetery-grass.html">+</span>
                levels\truckscemetery_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/yantar-asfalt.html">+</span>
                levels\yantar_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/yantar-earth.html">+</span>
                levels\yantar_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/zaton-asfalt.html">+</span>
                levels\zaton_asfalt
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/zaton-cracked.html">+</span>
                levels\zaton_cracked
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/zaton-earth.html">+</span>
                levels\zaton_earth
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/zaton-earth-2.html">+</span>
                levels\zaton_earth_2
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/zaton-grass.html">+</span>
                levels\zaton_grass
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/zaton-pebbles.html">+</span>
                levels\zaton_pebbles
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/zaton-plates.html">+</span>
                levels\zaton_plates
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/level/zaton-sand.html">+</span>
                levels\zaton_sand
            </td>
            <td>LEVEL: Implicit**detail</td>
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
                <span class="expand-btn" data-source="engine-shaders/hud/add.html">+</span>
                hud\add
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/hud/add-alpha.html">+</span>
                hud\add-alpha
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/hud/cursor.html">+</span>
                hud\cursor
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/hud/default.html">+</span>
                hud\default
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/hud/fog-of-war.html">+</span>
                hud\fog_of_war
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/hud/hitmarker.html">+</span>
                hud\hitmarker
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/hud/p3d.html">+</span>
                hud\p3d
            </td>
            <td>MODEL: Default</td>
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
                <span class="expand-btn" data-source="engine-shaders/hud/set.html">+</span>
                hud\set
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/hud/seta.html">+</span>
                hud\seta
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/flora/leaf-wave.html">+</span>
                flora\leaf_wave
            </td>
            <td>LEVEL: trees/bushes</td>
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
                <span class="expand-btn" data-source="engine-shaders/flora/trunk-wave.html">+</span>
                flora\trunk_wave
            </td>
            <td>LEVEL: trees/bushes</td>
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

<table class="main-table" id="EffectsEngineShaderTable">
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
                <span class="expand-btn" data-source="engine-shaders/effects/bullet-tracer.html">+</span>
                effects\bullet_tracer
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/flame.html">+</span>
                effects\flame
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/flare.html">+</span>
                effects\flare
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/fx-refl-pod.html">+</span>
                effects\fx_refl_pod
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/glow.html">+</span>
                effects\glow
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/lightning.html">+</span>
                effects\lightning
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/lightplanes.html">+</span>
                effects\lightplanes
            </td>
            <td>LEVEL: diffuse*base</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/moon.html">+</span>
                effects\moon
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/rain.html">+</span>
                effects\rain
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/screen-add.html">+</span>
                effects\screen_add
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/screen-blend.html">+</span>
                effects\screen_blend
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/screen-noise.html">+</span>
                effects\screen_noise
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/screen-set.html">+</span>
                effects\screen_set
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/shadow.html">+</span>
                effects\shadow
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/shadow-blur.html">+</span>
                effects\shadow_blur
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/shadow-world.html">+</span>
                effects\shadow_world
            </td>
            <td>INTERNAL: shadow projecting</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/sun.html">+</span>
                effects\sun
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/wallmark.html">+</span>
                effects\wallmark
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/wallmarkblend.html">+</span>
                effects\wallmarkblend
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/wallmarkmult.html">+</span>
                effects\wallmarkmult
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/wallmarkset.html">+</span>
                effects\wallmarkset
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/water.html">+</span>
                effects\water
            </td>
            <td>basic (simple)</td>
            <td>pure water shader</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/waterryaska.html">+</span>
                effects\waterryaska
            </td>
            <td>basic (simple)</td>
            <td>crayfish shader</td>
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
                <span class="expand-btn" data-source="engine-shaders/effects/waterstuden.html">+</span>
                effects\waterstuden
            </td>
            <td>basic (simple)</td>
            <td>swamp shader</td>
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
                <span class="expand-btn" data-source="engine-shaders/editors/ai-nodes.html">+</span>
                editor\ai_node
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/editors/do-base.html">+</span>
                editor\do_base
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/editors/selection.html">+</span>
                editor\selection
            </td>
            <td>EDITOR: selection</td>
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
                <span class="expand-btn" data-source="engine-shaders/editors/spawn-icon.html">+</span>
                editor\spawn_icon
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/editors/wire.html">+</span>
                editor\wire
            </td>
            <td>EDITOR: wire</td>
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
                <span class="expand-btn" data-source="engine-shaders/details/blend.html">+</span>
                details\blend
            </td>
            <td>LEVEL: detail objects</td>
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
                <span class="expand-btn" data-source="engine-shaders/details/lod.html">+</span>
                details\lod
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/details/set.html">+</span>
                details\set
            </td>
            <td>LEVEL: detail objects</td>
            <td></td>
        </tr>
    </tbody>
</table>

### Default Shaders

<table class="main-table" id="DefaultEngineShaderTable">
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
                <span class="expand-btn" data-source="engine-shaders/default/def-add.html">+</span>
                def_shaders\def_add
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-aref.html">+</span>
                def_shaders\def_aref
            </td>
            <td>LEVEL: lmap*base.aref</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-aref-v.html">+</span>
                def_shaders\def_aref_v
            </td>
            <td>LEVEL: diffuse*base.aref</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-objects-lod.html">+</span>
                def_shaders\def_objects_lod
            </td>
            <td>LEVEL: trees/bushes</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-objects-lod-trans.html">+</span>
                def_shaders\def_objects_lod_trans
            </td>
            <td>LEVEL: trees/bushes</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-refl-alpha.html">+</span>
                def_shaders\def_refl_alpha
            </td>
            <td>LEVEL: lmap*(env^base)</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-refl-alpha-heli.html">+</span>
                def_shaders\def_refl_alpha_heli
            </td>
            <td>LEVEL: lmap*(env^base)</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-refl-trans.html">+</span>
                def_shaders\def_refl_trans
            </td>
            <td>LEVEL: lmap*(env^base)</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-trans.html">+</span>
                def_shaders\def_trans
            </td>
            <td>LEVEL: lmap*base.aref</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-trans-v.html">+</span>
                def_shaders\def_trans_v
            </td>
            <td>LEVEL: diffuse*base.aref</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-trans-v-tuchi.html">+</span>
                def_shaders\def_trans_v_tuchi
            </td>
            <td>LEVEL: diffuse*base.aref</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-vertex.html">+</span>
                def_shaders\def_vertex
            </td>
            <td>LEVEL: diffuse*base</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-vertex-hm.html">+</span>
                def_shaders\def_vertex_hm
            </td>
            <td>LEVEL: diffuse*base</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-vertex-pn.html">+</span>
                def_shaders\def_vertex_pn
            </td>
            <td>LEVEL: diffuse*base</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/def-vertex-pn-hm.html">+</span>
                def_shaders\def_vertex_pn_hm
            </td>
            <td>LEVEL: diffuse*base</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/lod.html">+</span>
                def_shaders\lod
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/default/lod-old.html">+</span>
                def_shaders\lod_old
            </td>
            <td>LEVEL: diffuse*base.aref</td>
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
                <span class="expand-btn" data-source="engine-shaders/debug/ai-nodes.html">+</span>
                debug\ai_nodes
            </td>
            <td>basic (simple)</td>
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
                <span class="expand-btn" data-source="engine-shaders/debug/wireframe.html">+</span>
                debug\wireframe
            </td>
            <td>basic (simple)</td>
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

    const StaticEngineTableTable = document.getElementById('StaticObjectEngineShaderTable');
    const SkyEngineTableTable = document.getElementById('SkyEngineShaderTable');
    const ParticleEngineTable = document.getElementById('ParticlesEngineShaderTable');
    const DynamicEngineTable = document.getElementById('DynamicObjectEngineShaderTable');
    const LevelEngineTable = document.getElementById('LevelEngineShaderTable');
    const HUDEngineTable = document.getElementById('HUDEngineShaderTable');
    const FloraEngineTable = document.getElementById('FloraEngineShaderTable');
    const EffectsEngineTable = document.getElementById('EffectsEngineShaderTable');
    const SDKEngineTable = document.getElementById('SDKEngineShaderTable');
    const DetailEngineTable = document.getElementById('DetailObjectEngineShaderTable');
    const DebugEngineTable = document.getElementById('DebugEngineShaderTable');
    const DefaultEngineTable = document.getElementById('DefaultEngineShaderTable');
    if (StaticEngineTableTable) StaticEngineTableTable.addEventListener('click', handleTableClick);
    if (SkyEngineTableTable) SkyEngineTableTable.addEventListener('click', handleTableClick);
    if (ParticleEngineTable) ParticleEngineTable.addEventListener('click', handleTableClick);
    if (DynamicEngineTable) DynamicEngineTable.addEventListener('click', handleTableClick);
    if (LevelEngineTable) LevelEngineTable.addEventListener('click', handleTableClick);
    if (HUDEngineTable) HUDEngineTable.addEventListener('click', handleTableClick);
    if (FloraEngineTable) FloraEngineTable.addEventListener('click', handleTableClick);
    if (EffectsEngineTable) EffectsEngineTable.addEventListener('click', handleTableClick);
    if (SDKEngineTable) SDKEngineTable.addEventListener('click', handleTableClick);
    if (DetailEngineTable) DetailEngineTable.addEventListener('click', handleTableClick);
    if (DebugEngineTable) DebugEngineTable.addEventListener('click', handleTableClick);
    if (DefaultEngineTable) DefaultEngineTable.addEventListener('click', handleTableClick);
});
</script>
