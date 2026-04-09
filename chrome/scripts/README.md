# scripts/ — Supporting Scripts

This directory must contain the helper scripts that are loaded by the background
service worker before `background.js` runs.  Extract them from the `.xpi` archive:

```
scripts/
├── aeConst.js
├── aeClippingSubst.js
├── aeImportExport.js
├── aeDateDiff.js
├── aePrefs.js
├── aeVersionCmp.js
├── aeUUID.js
├── aeClippings.js
├── aeCompress.js
└── aeVisual.js
```

These files are present in the original `.xpi` package under `scripts/`.
