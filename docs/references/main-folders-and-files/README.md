# Main Folders And Files

___

<table>
  <thead>
    <tr>
      <th>File | Folder</th>
      <th>Description</th>
      <th>File | Folder</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fsgame.ltx</td>
      <td>Contains paths to folders with the necessary files</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td rowSpan={5}>appdata</td>
      <td rowSpan={5} />
      <td>logs</td>
      <td>
        This is where the game logs are created and stored (log of loading
        objects, textures, etc.)
      </td>
    </tr>
    <tr>
      <td>savedgames</td>
      <td>
        This is where game saves are created and stored. Inside are files with the extensions *.scop and *.scoc.
      </td>
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
      <td>
        Contains the *.exe files of the game renders, the configuration for OpenAL and *.dll libraries
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>db</td>
      <td>
        Contains packaged game files. <br /> This folder has a higher priority of files, which means that if there is no file in the gamedata folder, the game will look for it here.
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td rowSpan={16}>gamedata</td>
      <td rowSpan={16}>Folder with game files</td>
      <td>ai</td>
      <td>
        Contains the{" "}
        <a href="../file-formats/ai/efd.md">
          *.efd
        </a>{" "}
        files needed for the AI
      </td>
    </tr>
    <tr>
      <td>anims</td>
      <td>
        Contains{" "}
        <a href="../file-formats/animations/anm.md">
          *.anm
        </a>{" "}
        files for camera animation and{" "}
        <a href="../file-formats/postprocceses/ppe.md">
          *.ppe
        </a>{" "}
        files for postprocessing
      </td>
    </tr>
    <tr>
      <td>configs</td>
      <td>
        Contains{" "}
        <a href="../file-formats/conf-script/ltx.md">
          *.ltx
        </a>{" "}
        for configuration files and{" "}
        <a href="../file-formats/conf-script/xml.md">
          *.xml
        </a>{" "}
        for text
      </td>
    </tr>
    <tr>
      <td>levels</td>
      <td>Contains necessary files for levels</td>
    </tr>
    <tr>
      <td>meshes</td>
      <td>
        Contains{" "}
        <a href="../file-formats/models/ogf.md">
          *.ogf
        </a>
        ,{" "}
        <a href="../file-formats/models/dm.md">
          *.dm
        </a>
        ,{" "}
        <a href="../file-formats/animations/omf.md">
          *.omf
        </a>{" "}
        file needed for models and skeleton animation
      </td>
    </tr>
    <tr>
      <td>scripts</td>
      <td>
        Contains{" "}
        <a href="../file-formats/conf-script/script.md">
          *.script
        </a>{" "}
        files for game scripts
      </td>
    </tr>
    <tr>
      <td>shaders</td>
      <td>Contains various files for shaders</td>
    </tr>
    <tr>
      <td>sounds</td>
      <td>
        Contains{" "}
        <a href="../file-formats/audio-video/ogg.md">
          *.ogg
        </a>{" "}
        files for various music, sounds, ambient, etc.
      </td>
    </tr>
    <tr>
      <td>spawns</td>
      <td>
        Contains a{" "}
        <a href="../file-formats/game-levels/spawn.md">
          *.spawn
        </a>{" "}
        files - it store spawn spots on locations
      </td>
    </tr>
    <tr>
      <td>textures</td>
      <td>
        Contains{" "}
        <a href="../file-formats/textures/dds.md">
          *.dds
        </a>{" "}
        textures
      </td>
    </tr>
    <tr>
      <td>gamemtl.xr</td>
      <td>
        Contains{" "}
        <a href="https://www.tablesgenerator.com/glossary/glossary.html#game-material">
          Game Materials
        </a>
      </td>
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
      <td>
        Contains settings for{" "}
        <a href="https://www.tablesgenerator.com/audio/sound-environment-list.md">
          Sound Environment
        </a>{" "}
        zones
      </td>
    </tr>
    <tr>
      <td>shaders.xr</td>
      <td>
        Contains{" "}
        <a href="https://www.tablesgenerator.com/shaders/shaders-list/engine-shaders-list.md">
          Engine Shaders
        </a>
      </td>
    </tr>
    <tr>
      <td>shaders_xrlc.xr</td>
      <td>
        Contains{" "}
        <a href="https://www.tablesgenerator.com/shaders/shaders-list/compiler-shaders-list.md">
          Compiler Shaders
        </a>
      </td>
    </tr>
    <tr>
      <td>tools</td>
      <td>
        Contains some resources for modding, like a version icon for addons, a resource converter and *.bat files for unpacking{" "}
        <a href="../file-formats/archives-resource-packs/db.md">
          *.db
        </a>{" "}
        files
      </td>
      <td>-</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
