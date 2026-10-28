# EcoMap

A responsive community environmental dashboard for exploring **demonstration** air quality and noise readings, comparing Mumbai neighborhoods, and saving community observations in the current browser.

## Run locally

1. Install Node.js 18 or newer.
2. Open PowerShell in this folder.
3. Run:

   ```powershell
   npm install
   npm run dev
   ```

4. Open the local address printed by Vite. To prepare a static production build, run `npm run build`; the output is in `dist/`.

The map uses OpenStreetMap tiles and needs an internet connection. All AQI and noise values are fictional demonstration data, not live measurements or health guidance. Reports and optional photos stay in this browser's LocalStorage; they are not shared with other visitors or sent to authorities.

## Publish to GitHub Pages

1. Create a GitHub repository named `EcoMap` (or another name) and leave it empty.
2. In PowerShell, open this project folder and run the following. Replace `YOUR-USERNAME` with your GitHub username. If a Git remote is already configured, skip the `git remote add` line.

   ```powershell
   git init
   git add .
   git commit -m "Build EcoMap community dashboard"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/EcoMap.git
   git push -u origin main
   ```

3. In the GitHub repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
4. Open **Actions** and wait for the “Build and deploy EcoMap” workflow to finish. It builds the site and publishes `dist/` to Pages.
5. Open the Pages link shown in the deployment run. The app uses hash-based navigation and relative asset paths for static hosting; no repository name edit is needed.

For later updates, run:

```powershell
git add .
git commit -m "Update EcoMap"
git push
```

## Prototype limitations

- Environmental readings are sample values and are not current or official.
- Reports and photos are stored separately in each browser. A shared reporting service needs a backend and appropriate privacy and access controls.
- Map tiles are provided by OpenStreetMap; attribution appears on the map.
- LocalStorage can be cleared by the visitor or browser, so prototype reports are not durable records.
