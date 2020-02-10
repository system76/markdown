<div align="center">
  <h1>@system76/markdown</h1>
  <h3>System76 markdown parsing for the web</h3>
  <br>
  <br>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@system76/markdown/">
    <img src="https://img.shields.io/npm/v/@system76/markdown.svg" alt="npm">
  </a>

  <a href="https://github.com/system76/markdown/actions?query=workflow%3ACI">
    <img src="https://github.com/system76/markdown/workflows/CI/badge.svg?branch=master" alt="GitHub actions">
  </a>

  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="renovate">
  </a>

  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="standard">
  </a>

  <a href="https://markdown.origin76.com/">
    <img src="https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg" alt="Storybook">
  </a>
</p>

---

This repository contains the markdown parser and plugin configuration we use for
System76 websites.

## Using

```
npm install --save @system76/markdown
```

```vue
<template>
  <article v-markdown.full>
    ## This will be parsed as markdown

    so type away!
  </article>
</template>

<script>
import { directive as markdownDirective } from '@system76/markdown'

export default {
  directives: {
    markdown: markdownDirective
  }
}
</script>
```

View [the docs](https://markdown.origin76.com) to see more examples.

## Development

1) Download the repository

2) Run `npm ci`

3) Run `npm start`

4) Start hacking

5) Run `npm test`

6) Make a commit in [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
format.

## Deployment

To [trigger a release](https://semantic-release.gitbook.io/semantic-release/#triggering-a-release),
push a commit to the `master` branch in the
[Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)
format.
