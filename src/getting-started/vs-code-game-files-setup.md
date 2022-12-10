# Configuring VSCode-like programs to handle game files

___

Here will talk about setting up VSCode similar programs to work with game files.

- This article is based on [Liner's article](https://ap-pro.ru/forums/topic/3406-nastroyka-skriptov-stalkera-kak-proekt-v-visual-studio-code/) on setting up scripts as projects in VSCode
- In this article the setup will be done in VSCodium.

> Attention! Not all files can be configured because there are no extensions for their viewing, reading (for example preview .dds textures and others). Some files can only be opened with third-party applications!

___

## Step 1: Installing VSCodium

Just install [VSCodium](https://vscodium.com/)

___

## Step 2. Configuring Extension Associations with a Programming Language

In the `settings.json` file, in the `"files.associations": {` specify:

```json
"*.script": "lua",
"*.ps": "hlsl",
"*.cs": "hlsl",
"*.gs": "hlsl",
"*.vs": "hlsl",
"*.s": "lua",
"*.level": "ini",
"*.ltx": "ltx",
"*.seq": "ini",
"*.part": "ini",
"*.part1": "ini"
```

> At the moment these are all the extensions that can be opened in VSCodium

___

## Step 3: Installing extensions

You need to install the following extensions:

1. [audio-preview by sukumo28](https://marketplace.visualstudio.com/items?itemName=sukumo28.wav-preview) - provides more detailed data about the sound files. Needed for [.ogg](../main-folders-and-files/file-formats/ogg.md) files
2. [LTX Support by AziatkaVictor](https://marketplace.visualstudio.com/items?itemName=AziatkaVictor.ltx-support) - adds support for [.ltx](../main-folders-and-files/file-formats/ltx.md) files
   - extension can be configured, to do this in his settings need to specify the path to the scripts of the game
3. Two extensions for Lua. Needed for .script files:
   - [LUA by keyring](https://marketplace.visualstudio.com/items?itemName=keyring.Lua)
   - [LUA by Tencent](https://marketplace.visualstudio.com/items?itemName=yinfei.luahelper)
4. [Open in External App by YuTengjing](https://marketplace.visualstudio.com/items?itemName=YuTengjing.open-in-external-app) - ability to open the file in other applications. Needed for .ogf, [.object](../main-folders-and-files/file-formats/object.md), [.dm](../main-folders-and-files/file-formats/dm.md), [.omf](../main-folders-and-files/file-formats/omf.md), [.dds](../main-folders-and-files/file-formats/dds.md), [.thm](../main-folders-and-files/file-formats/thm.md), .ogm files
   - The extension can be configured by writing in `settings.json` in the `"openInExternalApp.openMapper": [` needed programs. Example:

   ```json
   "openInExternalApp.openMapper": [

    // 3D models (ogf, dm, object)
        {
            "extensionName": "ogf",
            "apps": "D:\\Нужное\\Modding Tools\\OGF.Editor\\OGF tool.exe"
        },
        {
            "extensionName": "object",
            "apps": "D:\\Нужное\\Modding Tools\\Object.Editor.4.35\\Object tool.exe"
        },
        {
            "extensionName": "dm",
            "apps": "D:\\Нужное\\Modding Tools\\OGF.Editor\\OGF tool.exe"
        },
    // Textures (thm, dds)
        {
            "extensionName": "thm",
            "apps": "D:\\Нужное\\Modding Tools\\THM_Editor_by_ValeroK\\THM Editor.exe"
        },
        {
            "extensionName": "dds",
            "apps": "C:\\Program Files\\paint.net\\paintdotnet.exe"
        },

    // Video
        {
            "extensionName": "ogm",
            "apps": "C:\\Program Files\\VideoLAN\\VLC\\vlc.exe"
        },
    // Animations
        {
            "extensionName": "omf",
            "apps": "D:\\Нужное\\Modding Tools\\OMF.Editor.1.2\\OMF_Editor.exe"
        },
    ],
   ```

5. HLSL support and preview for shaders:
   - [Shader languages support for VS Code by slevesque](https://marketplace.visualstudio.com/items?itemName=slevesque.shader)
   - [HLSL preview by A2K](https://marketplace.visualstudio.com/items?itemName=A2K.hlsl-preview)
6. [TGA Image Preview by lunarwtr](https://marketplace.visualstudio.com/items?itemName=lunarwtr.tga-image-preview) - Preview .tga files
