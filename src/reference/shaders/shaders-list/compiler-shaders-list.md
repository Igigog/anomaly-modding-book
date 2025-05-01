# Compiler Shaders List

___

## About

This section contains a list and description of the shaders that are available in the shaders_xrlc.xr file. This file contains descriptions of the settings that are used by the Level Compiler.

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

<table class="main-table" id="CompileShaderTable">
    <thead>
        <tr>
            <th>Path and shader name</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr class="material-row">
            <td>
                <span class="expand-btn" data-source="compiler-shaders/def-ghost-vertex.html">+</span>
                def_shaders/def_ghost_vertex
            </td>
            <td>Semi-transparent vertex shader with UV optimization, shadow cast and without collision</td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-ghost.html">+</span>
                def_shaders/def_ghost
            </td>
            <td>Semi-transparent lightmap shader without collision</td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-kolizion-lm.html">+</span>
                def_shaders/def_kolizion_lm
            </td>
            <td>Invisible lightmap shader with collision</td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-kolizion-vertex.html">+</span>
                def_shaders/def_kolizion_vertex
            </td>
            <td>invisible [geometry shader](https://en.wikipedia.org/wiki/Shader#Geometry_shaders) with collision</td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-kolizion.html">+</span>
                def_shaders/def_kolizion
            </td>
            <td>[geometry shader](https://en.wikipedia.org/wiki/Shader#Geometry_shaders) with collision</td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-normals.html">+</span>
                def_shaders/def_normals
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-noshadow-pol.html">+</span>
                def_shaders/def_noshadow_pol
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-noshadow.html">+</span>
                def_shaders/def_noshadow
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-object-lod-collision.html">+</span>
                def_shaders/def_object_lod_collision
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-object-lod-visual.html">+</span>
                def_shaders/def_object_lod_visual
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-object-lod.html">+</span>
                def_shaders/def_object_lod
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-selflight.html">+</span>
                def_shaders/def_selflight
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-translucensy.html">+</span>
                def_shaders/def_translucency
            </td>
            <td>Geometry shader with translucency</td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-vertex-ghost-no-shadow.html">+</span>
                def_shaders/def_vertex_ghost_no_shadow
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-vertex-ghost.html">+</span>
                def_shaders/def_vertex_ghost
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-vertex-invinsible-castshadow.html">+</span>
                def_shaders/def_vertex_invinsible-castshadow
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-vertex-no-shadow.html">+</span>
                def_shaders/def_vertex_no_shadow
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/def-vertex.html">+</span>
                def_shaders/def_vertex
            </td>
            <td>basic [vertex shader](https://en.wikipedia.org/wiki/Shader#Vertex_shaders)</td>
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
                <span class="expand-btn" data-source="compiler-shaders/default-lm-hq.html">+</span>
                def_shaders/default_lm_hq
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/default-lm01-ghost.html">+</span>
                def_shaders/default_lm01_ghost
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/default-lm01.html">+</span>
                def_shaders/default_lm01
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/default-lm03-ghost.html">+</span>
                def_shaders/default_lm03_ghost
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/default-lm03-smooth.html">+</span>
                def_shaders/default_lm03_smooth
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/default-lm03.html">+</span>
                def_shaders/default_lm03
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/default-lm05-ghost.html">+</span>
                def_shaders/default_lm05_ghost
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/default-lm05.html">+</span>
                def_shaders/default_lm05
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/default-smooth.html">+</span>
                def_shaders/default_smooth
            </td>
            <td></td>
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
                <span class="expand-btn" data-source="compiler-shaders/default.html">+</span>
                def_shaders/default
            </td>
            <td></td>
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

    const soundTable = document.getElementById('CompileShaderTable');
    if (soundTable) soundTable.addEventListener('click', handleTableClick);
});
</script>
