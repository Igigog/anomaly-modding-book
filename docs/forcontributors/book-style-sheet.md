# Book Style Sheet

___

## Glossary

Add only S.T.A.L.K.E.R. related terms, either those that cannot be found in open sources or there is little information about them and they are important to fully understand the context.

## Formatting

The formatting of articles is entirely at your discretion and will not be corrected (except for syntax corrections, errors, additions and minor edits), but it is advisable to use the following rules:

- For first level headings, use `Title Case` (All First Letters of Words Capitalized)
- For headings after the first level, use `Sentence case` (Only the first letter of the first word and proper names)
- Whenever possible, fully utilize [Markdown syntax](https://rust-lang.github.io/mdBook/format/markdown.html)
- File naming in `kebab-case`
- When referring to file formats, use the following extension syntax (if the file has an extension):

    :::info
        *.ltx
    :::

- Underlining `___` after a heading
- To link to some page in a book, it is better to use a relative link in markdown format rather than http
- Use [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - Follow rules
  - Rules `MD33`, `MD13` and `MD10` (for code blocks) are disabled
- For a code block, specify the language of the code. For example:

    :::info
        ```lua
        function actor_proxy:__init()
	        self.initialized = false
        end
        ```
    :::

- Files should end with a single newline character

- To center the image when using markdown, you can specify `centered` in the alternate title. Example:

:::info
    ```markdown
    ![image centered](../path/to/image.png)
    ```
:::

- When using svg icons, you can specify `svg-icon` in the alternative name so that the icon will change brightness depending on the theme (for example, in a light theme the icon will be dark, in a dark theme - light). Example:

:::info
    ```markdown
    ![image svg-icon](../path/to/image.svg)
    ```
:::

Since the book uses additional preprocessors, the following features can be used:

- For admonishments (For more examples check [Admonish Reference Page](https://tommilligan.github.io/mdbook-admonish/reference.html))

:::info
    ```admonish example
    Example
    ```
:::

- There is support for [Mermaid](https://mermaid.js.org/). Example:

:::info
    ```mermaid
    flowchart LR

    1 --> 2
    1 --> 3
    1 --> 4
    1 --> 5
    1 --> 6
    ```
:::
