# fire2chrome – Clippings: Firefox → Chrome Conversion

This repository contains the **Clippings** browser extension (v7.1.6 by AE Creations)
in two flavours:

| Directory   | Target browser | Manifest |
|-------------|---------------|---------|
| `firefox/`  | Mozilla Firefox (≥ 140) | Manifest V3 |
| `chrome/`   | Google Chrome / Chromium | Manifest V3 |

The original `.xpi` package is kept at the root as `clippings-7.1.6.xpi` for reference.

---

## Loading the Chrome extension (developer mode)

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (toggle in the top-right corner)
3. Click **Load unpacked** and select the `chrome/` folder from this repository
4. The Clippings toolbar button will appear in your browser toolbar

---

## Loading the Firefox extension (developer mode)

1. Open Firefox and go to `about:debugging`
2. Click **This Firefox** → **Load Temporary Add-on…**
3. Select any file inside the `firefox/` folder (e.g. `manifest.json`)

---

## What changed in the Chrome conversion

| Firefox (original)              | Chrome (converted)                     |
|---------------------------------|----------------------------------------|
| `browser.*` APIs                | `chrome.*` equivalents                 |
| `browser.menus`                 | `chrome.contextMenus`                  |
| `browser.sidebarAction.toggle()`| Opens Clippings Manager window instead |
| `browser.runtime.getBrowserInfo()` | Stubbed (not available in Chrome)   |
| `sidebar_action` manifest key   | Removed; toolbar button shows a popup  |
| `browser_specific_settings`     | Removed (Firefox-only manifest key)    |
| Background: multiple `scripts`  | Background: single `service_worker`    |
| `localStorage` in background    | In-memory `gLocalState` object         |

### Notes

- **Sidebar → Popup**: Chrome does not support Firefox-style sidebars.
  The toolbar button now opens a popup (`pages/popup.html`) that provides
  quick links to open the Clippings Manager, create a new clipping, or open
  Preferences. All functionality is preserved via the Clippings Manager window.

- **Native Messaging** (`nativeMessaging`) works in Chrome but requires the
  [Sync Clippings Helper](https://aecreations.io/clippings/index.php) native
  app to be installed and registered separately.

- **Service Worker state**: Chrome MV3 service workers can be suspended and
  restarted. The extension re-initialises correctly on each activation.
