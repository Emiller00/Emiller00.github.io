# Blog post content template

Copy this file into `_posts/` using the filename format `YYYY-MM-DD-short-title.md`, then fill in the front matter and sections. Remove any sections you do not need. Keep the summary to one sentence and use lowercase hyphenated IDs for contents links.

```yaml
---
layout: post
title: "Your post title"
date: YYYY-MM-DD
permalink: /blog/short-title/
published: false
post_type: Article
summary: "A one-sentence description shown in the blog archive."
tags: [research-log]
contents:
  - title: Introduction
    id: introduction
  - title: Main idea
    id: main-idea
  - title: Conclusion
    id: conclusion
---
```

## Introduction

What question, problem, or observation is this post about? Give readers enough context to understand why it matters.

## Main idea

Explain the central idea in clear steps. Define unfamiliar terms, use examples, and link to sources where useful.

## Evidence or example

Show how the idea works in practice. Include code, equations, data, or a concrete example when it helps.

## Limitations and open questions

What should readers be careful not to conclude? What remains uncertain or worth exploring?

## Conclusion

Summarize the takeaway and, if useful, point readers to a related post, project, or source.
```

## Before publishing

- Set `published: true` when the post is ready; Jekyll omits drafts when it is `false`.
- Ensure the `permalink` is unique and matches the post slug.
- Add a page in `tags/` if you use a new tag, following the existing tag page pattern.
- If you include `contents`, make every `id` match the corresponding heading anchor. For headings with punctuation or special formatting, add an explicit `{#id}` heading suffix and use that same ID in `contents`.
- Keep the article body as ordinary Markdown. Interactive embeds require a site-specific implementation and should include readable fallback text.
