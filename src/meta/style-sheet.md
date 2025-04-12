# Book Style Sheet

___

## Glossary

Add only Stalker related terms, either those that cannot be found in open sources or there is little information about them and they are important to fully understand the context.

## Formatting

The formatting of articles is entirely at your discretion and will not be corrected (except for syntax corrections, errors, additions and minor edits), but it is advisable to use the following rules:

- For first level headings, use `Title Case` (All First Letters of Words Capitalized)
- For headings after the first level, use `Sentence case` (Only the first letter of the first word and proper names)
- Whenever possible, fully utilize [Markdown syntax](https://rust-lang.github.io/mdBook/format/markdown.html)
- File naming in `kebab-case`
- When referring to file formats, use the following extension syntax (if the file has an extension):

    ```admonish example
        *.ltx
    ```

- [HTML](https://en.wikipedia.org/wiki/HTML), [CSS](https://en.wikipedia.org/wiki/CSS), [JavaScript](https://en.wikipedia.org/wiki/JavaScript) and [Handlebars](https://handlebarsjs.com/) are allowed
- Underlining `___` after a heading
- Use [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - Follow rules
  - Rules `MD33`, `MD13` and `MD10` (for code blocks) are disabled
- For a code block, specify the language of the code. For example:

    ```admonish example
        ```lua
        function actor_proxy:__init()
	        self.initialized = false
        end
        ```
    ```

- Files should end with a single newline character

- To center the image when using markdown, you can specify `centered` in the alternate title. Example:

```admonish example
    ```markdown
    ![image centered](../path/to/image.png)
    ```
```

- When using svg icons, you can specify svg-icon in the alternative name so that the icon will change brightness depending on the theme (for example, in a light theme the icon will be dark, in a dark theme - light). Example:

```admonish example
    ```markdown
    ![image svg-icon](../path/to/image.svg)
    ```
```

Since the book uses additional preprocessors, the following features can be used:

- For admonishments (For more examples check [Admonish Reference Page](https://tommilligan.github.io/mdbook-admonish/reference.html))

```admonish example
    ```admonish example
    Example
    ```
```

- There is support for [Mermaid](https://mermaid.js.org/). Example:

```admonish example
    ```mermaid
    flowchart LR

    1 --> 2
    1 --> 3
    1 --> 4
    1 --> 5
    1 --> 6
    ```
```

To check markdown for broken links you can use the `mdbook-linkcheck` backend. To enable it, open the `book.toml` file and uncomment a line (remove the hash).

```toml
# [output.linkcheck]
```

Then [run the local version of the book](contributing.md#running-local-copy). In the Terminal there will be a message about broken links (if there are any).
