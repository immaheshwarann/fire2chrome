/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

document.addEventListener("DOMContentLoaded", () => {
  // Apply i18n strings
  document.querySelectorAll("[data-i18n]").forEach(el => {
    let msg = chrome.i18n.getMessage(el.dataset.i18n);
    if (msg) { el.textContent = msg; }
  });

  document.getElementById("open-clippings-mgr").addEventListener("click", () => {
    chrome.runtime.sendMessage({msgID: "open-clippings-mgr"});
    window.close();
  });

  document.getElementById("new-clipping").addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if (tab) {
      chrome.runtime.sendMessage({msgID: "new-clipping-from-popup", tabID: tab.id});
    }
    window.close();
  });

  document.getElementById("open-prefs").addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
    window.close();
  });
});
