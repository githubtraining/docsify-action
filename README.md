# docsify-action

## Overview

This action manages content creation in a standardized way. We serve a lot of things to GitHub Pages using Docsify and having a standard template for this process will increase the velocity at which we can create and release new stuff 😄

## Usage Examples

Using this action is simple. You need two things to get started

1. docsifyConfig.yml

This file configures the title, template and filenames for your project

**example:**

```
documentTitle: GitHub Foundations
templateVersion: lesson-plan
pageTitles:
  - create github actions
  - Some other document I want to include
```

**Template Reference Table**

_This table will be update as more templates and use cases are created_

| templateVersion | purpose                           |
| --------------- | --------------------------------- |
| lesson-plan              | Github certification lesson plans |
| blank| Blank markdown files for free-form content that get automatically added to the Docsify sidebar|

2. docsify-repo.yml workflow file

**example:**

```
name: lesson planner

on:
  push:
    branches-ignore:
      - main
    paths:
      - docsifyConfig.yml
jobs:
  run-lesson-planner:

    runs-on: ubuntu-latest
    steps:
      - name: checkout the repo
        uses: actions/checkout@v2
      - name: use lesson planner
        uses: githubtraining/docsify-action@v1
        with:
          github-token:  ${{secrets.GITHUB_TOKEN}}
```
