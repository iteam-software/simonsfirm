## <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

The commit message formatting can be added using a typical git workflow.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope**, and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **feat**: A new feature
* **content**: A change in the content that is visually displayed
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **fix**: A bug fix
* **style**: May meet one of the following criteria:
    * Changes that were only invloving style sheets (CSS, SASS, LESS, etc)
    * Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **docs**: Documentation only changes
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
* **perf**: A code change that improves performance
* **test**: Adding missing tests
  generation

### Scope
The scope could be anything specifying place of the commit change.

### Subject
The subject contains succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* Don't capitalize first letter
* No dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense.
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the words `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.