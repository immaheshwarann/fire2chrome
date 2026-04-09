# pages/ — HTML UI Pages

This directory must contain the HTML pages used by the extension.
Extract them from the `.xpi` archive:

```
pages/
├── clippingsMgr.html   (Clippings Manager window)
├── new.html            (New Clipping dialog)
├── options.html        (Preferences page)
├── popup.html          (Toolbar-button popup — Chrome replacement for Firefox sidebar)
├── sidebar.html        (original Firefox sidebar page, kept for reference)
├── backup.html
├── keyboardPaste.html
├── msgbox.html
├── pasteAs.html
├── placeholderPrompt.html
├── sidebarHelp.html
├── welcome.html
└── whatsnew.html
```

> **Note for Chrome:** The `sidebar.html` is not used in Chrome.
> The extension's toolbar button shows `popup.html` instead (see `"action"."default_popup"` in manifest.json).
