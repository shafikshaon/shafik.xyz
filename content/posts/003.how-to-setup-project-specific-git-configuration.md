---
title: "How to Setup Project Specific Git Configuration?"
description: "Sometimes we need to project-specific git user configurations. Follow the instructions to setup project
specific git configuration"
date: 2021-03-23T09:19:09+06:00
author: "Shafikur Rahman Shaon"
tags: [
"git",
]
draft: false
---

Sometimes we need to project-specific git user configurations.

How we achieve this?
Just run the following command in the project directory.

```
git config --local user.name "AuthorName" 
git config --local user.email "AuthorEmail@mail.com" 
```

Now, all commit authors will be new names and emails for the configured project.

That's all!

