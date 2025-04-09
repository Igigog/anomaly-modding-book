# Quality of life, tips and tricks

___

## Copy in one click

If you develop your mod in a folder, D:\Editor\GT_emplacement for example, you will have to copy this folder to mods folder of Mod Organizer 2, D:\GAME\Anomaly-1.5.3\mods for example, every time you want to test new changes. You can use these batch scripts to do the copy in one click. No more navigating around the folders.

Create file copy_in_one_click.cmd and add these lines:
```batch
xcopy /y /s D:\Editor\GT_emplacement D:\GAME\Anomaly-1.5.3\mods
timeout /t 1
end
```
Keep this file somewhere easy to access, I suggest right in the folder of your WIP mod.
When you want to copy, just double click copy_in_one_click.cmd.

___

## Quickly check for code syntax errors

You can use these web sites to test your codes for syntax errors.

### LUA script
[LUA online compiler](https://www.tutorialspoint.com/compilers/online-lua-compiler.htm)

### XML
[XML validator](https://www.xmlvalidation.com/)

___

## LUA function to print debug logs with file name and line number

Add this function to your codes and use it to print debug logs. The logs will have file name and line number of where it’s called.
```lua
function DEBUG(str,...)
local func = debug.getinfo(2,"S").source
local line = debug.getinfo(2,"l").currentline
func = string.sub(func,#func - string.find(string.reverse(func),"\\") + 2,#func)
local p = {...}
if (p and (#p ~= 0)) then
    printf(string.format("[GhenTuong] %s:%s | %s",tostring(func),tostring(line),str),...)
else
    printf(string.format("[GhenTuong] %s:%s | ",tostring(func),tostring(line)) .. "%s",str)
end
end
```

### Example:
File file_name.script at line 789.
```lua
DEBUG("aaaaaaaaaa")
```
### Result:
```
[GhenTuong] file_name.script:789 | aaaaaaaaaa
```