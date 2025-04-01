# Anomaly Modding Book Style Sheet

___

## About

The formatting of articles is entirely at your discretion and will not be corrected (except for syntax corrections, errors, additions and minor edits), but it is advisable to use the following rules:

- Whenever possible, fully utilize Markdown syntax to replace HTML and CSS
  - There are some syntax limitations in mdbook
- HTML and CSS are allowed
- Underlining after a heading
- Use Markdownlint
  - Follow rules
  - Rules `MD33`, `MD13` and `MD10`(for code blocks) are disabled
- For a code block, specify the language of the code. For example:

    ```admonish example
        ```lua
        function actor_proxy:__init()
	        self.initialized = false
        end
        ```
    ```

- Files should end with a single newline character

Since the book uses additional preprocessors, the following features can be used

- For admonishments

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

Then run the local version of the book. In the Terminal there will be a message about broken links (if there are any).
