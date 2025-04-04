# Main Folders And Files

___

<table><thead>
  <tr>
    <th>File | Folder</th>
    <th>Description</th>
    <th>File | Folder</th>
    <th>Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td>fsgame.ltx</td>
    <td>Contains paths to folders with the necessary files</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="5">appdata</td>
    <td rowspan="5"></td>
    <td>logs</td>
    <td>This is where the game logs are created and stored (log of loading objects, textures, etc.)</td>
  </tr>
  <tr>
    <td>savedgames</td>
    <td>This is where game saves are created and stored. Inside are files with the extensions .scop and .scoc.</td>
  </tr>
  <tr>
    <td>screenshoots</td>
    <td>This is where game screenshots are created and stored</td>
  </tr>
  <tr>
    <td>shaders_cache</td>
    <td>This is where the game shader cache is created and stored</td>
  </tr>
  <tr>
    <td>"username".ltx</td>
    <td>This file describes the game settings</td>
  </tr>
  <tr>
    <td>bin</td>
    <td>Contains the *.exe files of the game renders, the configuration for OpenAL and *.dll libraries</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td>db</td>
    <td>Contains packaged game files. <br>This folder has a higher priority of files, which means that if there is no file in the gamedata folder, the game will look for it here.</td>
    <td>-</td>
    <td>-</td>
  </tr>
  <tr>
    <td rowspan="16">gamedata</td>
    <td rowspan="16">Folder with game files</td>
    <td>ai</td>
    <td>Contains the [*.efd](file-formats/ai/efd.md) files needed for the AI</td>
  </tr>
  <tr>
    <td>anims</td>
    <td>Contains [*.anm](file-formats/animations/anm.md) files for camera animation and [*.ppe](file-formats/particles/pe.md) files for postprocessing</td>
  </tr>
  <tr>
    <td>configs</td>
    <td>Contains [*.ltx](file-formats/conf-script/ltx.md) for configuration files and [*.xml](file-formats/conf-script/xml.md) for text</td>
  </tr>
  <tr>
    <td>levels</td>
    <td>Contains necessary files for levels</td>
  </tr>
  <tr>
    <td>meshes</td>
    <td>Contains [*.ogf](file-formats/models/ogf.md), [*.dm](file-formats/models/dm.md), [*.omf](file-formats/animations/omf.md) file needed for models and skeleton animation</td>
  </tr>
  <tr>
    <td>scripts</td>
    <td>Contains [*.script](file-formats/conf-script/script.md) files for game scripts</td>
  </tr>
  <tr>
    <td>shaders</td>
    <td>Contains various files for shaders</td>
  </tr>
  <tr>
    <td>sounds</td>
    <td>Contains [*.ogg](file-formats/audio-video/ogg.md) files for various music, sounds, ambient, etc.</td>
  </tr>
  <tr>
    <td>spawns</td>
    <td>Contains a file `all.spawn` - it store all spawn spots on locations</td>
  </tr>
  <tr>
    <td>textures</td>
    <td>Contains [*.dds](file-formats/textures/dds.md) textures</td>
  </tr>
  <tr>
    <td>gamemtl.xr</td>
    <td>Contains [game materials](../materials/materials-list.md)</td>
  </tr>
  <tr>
    <td>lanims.xr</td>
    <td>Contains animations of lights</td>
  </tr>
  <tr>
    <td>particles.xr</td>
    <td>Contains Particles</td>
  </tr>
  <tr>
    <td>senvironment.xr</td>
    <td>Contains settings for [sound environment zones](../sound/sound-environments-list.md)</td>
  </tr>
  <tr>
    <td>shaders.xr</td>
    <td>Database of the [shaders used by the graphics engine](../shaders/shaders-list/shaders-list.md)</td>
  </tr>
  <tr>
    <td>shaders_xrlc.xr</td>
    <td>Database of [shaders used by the level compiler](../shaders/shaders-list/compiler-shaders-list.md)</td>
  </tr>
  <tr>
    <td>tools</td>
    <td>Contains some resources for modding, like a version icon for addons, a resource converter and .bat files for unpacking [*.db](file-formats/archives-resource-packs/db.md) files</td>
    <td>-</td>
    <td>-</td>
  </tr>
</tbody></table>
