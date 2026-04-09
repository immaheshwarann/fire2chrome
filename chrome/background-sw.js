/* -*- mode: javascript; tab-width: 8; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Chrome Manifest V3 requires a single service worker as the background script.
// This file imports all required libraries and scripts using importScripts().

importScripts(
  "lib/dexie/dexie.min.js",
  "lib/moment/moment.min.js",
  "lib/moment/locales.min.js",
  "lib/jquery.js",
  "scripts/aeConst.js",
  "scripts/aeClippingSubst.js",
  "scripts/aeImportExport.js",
  "scripts/aeDateDiff.js",
  "scripts/aePrefs.js",
  "scripts/aeVersionCmp.js",
  "scripts/aeUUID.js",
  "scripts/aeClippings.js",
  "scripts/aeCompress.js",
  "scripts/aeVisual.js",
  "background.js"
);
