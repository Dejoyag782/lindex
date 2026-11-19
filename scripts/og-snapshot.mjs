// Captures the hero of the built site as public/og.png-style preview (out/og.png)
// for Facebook/Twitter link cards. Run in CI after `next build`, with the
// static export served at SNAP_URL. Uses the runner's preinstalled Chrome.
import { chromium } from "playwright-core";

const url = process.env.SNAP_URL || "http://localhost:8080/";
const out = process.env.SNAP_OUT || "out/og.png";

const browser = await chromium.launch({ channel: "chrome" });
// 1600x840 CSS px at 0.75x = a 1200x630 image (the size Facebook recommends),
// wide enough that the desktop two-column hero fits.
const page = await browser.newPage({
  viewport: { width: 1600, height: 840 },
  deviceScaleFactor: 0.75,
  reducedMotion: "reduce",
});
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: out });
await browser.close();
console.log(`Saved ${out}`);
