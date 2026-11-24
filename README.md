# Elliott C. Miller

Personal site built with Jekyll for GitHub Pages. The homepage combines About and work history, with separate Blog and Projects pages. A light blue/violet theme uses locally hosted fonts.

## Preview

```sh
bundle install
./serve.sh
```

Open http://127.0.0.1:4000. Use `bundle exec jekyll build` for a static build.

## Content

See [CONTENT_TEMPLATE.md](CONTENT_TEMPLATE.md) for the editing guide and content notes.

- `_includes/content/about.html`: homepage introduction and links; also used at `/about/`.
- `_data/experience.json`: Work history shown on the homepage.
- `_data/projects.json`: independent project descriptions.
- `_posts/`: the symmetry introduction and both Adapter Monitoring studies. Edit the Markdown directly.
- `_config.yml`: profile and contact information.
- `assets/css/style.scss`: the site theme, responsive layouts, and demo styles.
- `tags/`: add a tag page when introducing a new post tag.

## Interactive symmetry post

The supplied standalone explainer remains in `symmetry-explainer/`. Its `src/BlogDemos.tsx` entry mounts the four opening demos in the symmetry introduction. The production bundle is in `assets/symmetry/`; include it when committing changes so GitHub Pages only needs to run Jekyll. React loads on the symmetry introduction. Text and fallback descriptions work without JavaScript.

After changing interactive code:

```sh
npm ci --prefix symmetry-explainer
npm run build:blog --prefix symmetry-explainer
npm test --prefix symmetry-explainer
bundle exec jekyll build
```

Article text edits only require the Jekyll build. Avoid editing the generated JavaScript directly.

## Verification

With the local Jekyll preview running and Chrome installed:

```sh
TEST_URL=http://127.0.0.1:4000 node scripts/check-site.mjs
```

This checks layouts from 320 to 1440 pixels, blog search, contents anchors, interactive demo controls, browser errors, and reading without JavaScript. Screenshots are saved in ignored `test-results/`. Set `CHROME_PATH` to use a different Chromium executable.

## GitHub Pages

Use the default branch and repository root as the Pages source. The standalone explainer’s source and dependencies are excluded from Jekyll output; only its dedicated blog bundle is served.
