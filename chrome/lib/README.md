# lib/ — Third-party Libraries

This directory must contain the following library files before the Chrome extension can be loaded.
Extract them from the original Firefox `.xpi` archive (rename it to `.zip` and unzip it):

```
lib/
├── dexie/
│   └── dexie.min.js        (IndexedDB wrapper)
├── moment/
│   ├── moment.min.js       (date/time library)
│   └── locales.min.js      (moment.js locale data)
├── jquery.js               (jQuery)
└── purify.min.js           (DOMPurify – used by content script)
```

These files are already present in the `.xpi` package under the same paths.
