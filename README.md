# LinDex website

Landing page for **LinDex**, an Android app that runs Ubuntu, Debian and Kali Linux XFCE desktops without root or Termux.

- Built with Next.js (static export), deployed to GitHub Pages by `.github/workflows/pages.yml`.
- The download button points at `releases/latest/download/LinDex.apk`, so publishing a new
  release with an asset named `LinDex.apk` updates the link automatically.

## Develop

```sh
npm install
npm run dev
```

## Publish a new APK

```sh
gh release create v1.1.0 LinDex.apk --title "LinDex 1.1.0" --notes "What changed"
```
