import assert from 'node:assert/strict';
import { mkdirSync } from 'node:fs';
import { chromium } from '../symmetry-explainer/node_modules/playwright-core/index.mjs';
const base = process.env.TEST_URL || 'http://127.0.0.1:4001';
const symmetryDemos = ['tiling', 'circle', 'quarter-turns', 'permutations', 'response', 'learning'];
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox'] });
mkdirSync('test-results', { recursive: true });
const errors = [];
try {
 const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
 page.on('pageerror', e => errors.push(e.message));
 page.on('response', r => { if(r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });
 for(const width of [1440, 768, 390, 320]) {
  await page.setViewportSize({ width, height: 1000 });
  for(const path of ['/', '/blog/', '/projects/', '/blog/symmetry/', '/blog/when-traces-miss-weights-can-help/', '/blog/weight-only-adapter-screening/']) {
   await page.goto(base + path, { waitUntil: 'networkidle' });
   assert.equal(await page.locator('h1').count(), 1, `${path}: one heading`);
   assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${path}: overflow at ${width}`);
   for(const heading of await page.locator('h1,h2,h3').all()) {
    assert.ok(await heading.evaluate(el => parseFloat(getComputedStyle(el).fontSize) <= 46), 'Headings fit the site type scale');
   }
   if(width === 1440 || width === 390) await page.screenshot({ path: `test-results/${path === '/' ? 'home' : path.replaceAll('/', '-')}-${width}.png`, fullPage: true });
  }
 }
 await page.setViewportSize({ width: 1200, height: 1000 });
 await page.goto(base + '/blog/symmetry/', { waitUntil: 'networkidle' });
 const tiling = page.locator('[data-symmetry-demo="tiling"]');
 await tiling.getByRole('button', { name: 'Squares' }).click();
 assert.equal(await tiling.getByRole('button', { name: 'Squares' }).getAttribute('aria-pressed'), 'true');
 const circle = page.locator('[data-symmetry-demo="circle"]');
 await circle.getByRole('slider').press('End');
 assert.equal(await circle.locator('output').innerText(), '360°');
 const square = page.locator('[data-symmetry-demo="quarter-turns"]');
 await square.getByRole('button', { name: '↻ Clockwise', exact: true }).click();
 assert.equal(await square.locator('output').innerText(), '¼ turn clockwise');
 await square.getByRole('button', { name: '↺ Counterclockwise', exact: true }).click();
 assert.equal(await square.locator('output').innerText(), 'Starting position');
 const permutations = page.locator('[data-symmetry-demo="permutations"]');
 await permutations.getByRole('button', { name: /swap 1/i }).first().click();
 const response = page.locator('[data-symmetry-demo="response"]');
 await response.getByRole('button', { name: 'Translation' }).click();
 assert.equal(await response.getByTestId('invariant-output').innerText(), 'Triangle');
 await page.getByRole('button', { name: 'Reorder the inputs' }).click();
 for (const link of await page.locator('.article-contents a').all()) {
  assert.equal(await page.locator(await link.getAttribute('href')).count(), 1);
 }
 await page.goto(base + '/blog/', { waitUntil: 'networkidle' });
 assert.equal(await page.locator('[data-post]').count(),3);
 await page.locator('#post-search').fill('symmetry'); assert.equal(await page.locator('[data-post]:visible').count(),1);
 await page.locator('#post-search').fill('no-match'); assert.equal(await page.locator('[data-post]:visible').count(),0);
 await page.getByRole('button', { name:'Show all writing' }).click(); assert.equal(await page.locator('[data-post]:visible').count(),3);
 const noJS = await browser.newContext({ javaScriptEnabled: false });
 const staticPage = await noJS.newPage();
 await staticPage.goto(base + '/blog/symmetry/');
 assert.ok((await staticPage.locator('.prose').innerText()).includes('What makes a group?'));
 const fallbackDemos = staticPage.locator('[data-symmetry-demo]');
 assert.deepEqual(await fallbackDemos.evaluateAll(demos => demos.map(demo => demo.dataset.symmetryDemo)), symmetryDemos);
 assert.ok(await fallbackDemos.evaluateAll(demos => demos.every(demo => demo.textContent.trim())));
 assert.deepEqual(errors,[]);
 console.log('Passed: desktop/mobile layouts (320–1440px), heading sizes, contents links, six demos, blog search, static reading, and browser/asset checks.');
} finally { await browser.close(); }
