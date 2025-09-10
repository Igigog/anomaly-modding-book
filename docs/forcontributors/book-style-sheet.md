# Book Style Sheet

___

## Glossary

Add only S.T.A.L.K.E.R. related terms, either those that cannot be found in open sources or there is little information about them and they are important to fully understand the context.

## Formatting

The formatting of articles is entirely at your discretion and will not be corrected (except for syntax corrections, errors, additions and minor edits), but it is advisable to use the following rules:

- For first level headings, use `Title Case` (All First Letters of Words Capitalized)
- For headings after the first level, use `Sentence case` (Only the first letter of the first word and proper names)
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

- [Admonishments](https://docusaurus.io/docs/markdown-features/admonitions) support.

:::info
    :::info
    Example
    :::
:::

- [Mermaid](https://mermaid.js.org/) support.

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
