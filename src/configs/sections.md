# Sections

_by [SaloEater](https://github.com/SaloEater)_
___

### 1. Section definition
By definition `section` is a text representation of a regular `map` type:
```ini
[section_name]
key1 = value1
key2 = value2
```

Depending on the context, values would have different requirements:

[condlists](condlists.md)
```ini
my_condlist_key = {-A -B} X, {-A +B} Y, Z
```

list of item 
```ini
my_list_key = 1,2,3
```
string, number, boolean types
```ini
[section_name]
int_key = 1
string_key = st_some_translation_value
bool_key = true
```

### 2. Section inheritance
Section inheritance allows you to basically copy values from other sections.

To inherit a section, you use `:` and list other sections:
```ini
[section_name]:parent_section1,parent_section2
```

### 3. Using a section
To use a different in your file, you have to include it relatively to your file:

`file_a.ltx`
```ini
[section_a]
key1 = value1
```
`file_b.ltx`
```ini
#include "file_a.ltx"

[section_b]:section_a
key2 = value2
```
