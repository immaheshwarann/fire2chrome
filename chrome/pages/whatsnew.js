/* -*- mode: javascript; tab-width: 8; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


let gWndID, gTabID;


// Page initialization
$(async () => {
  let extInfo = chrome.runtime.getManifest();
  $("#latest-ver").text(chrome.i18n.getMessage("upgrade", extInfo.name));
  $("#ver-subhead").text(chrome.i18n.getMessage("aboutExtVer", aeConst.CURR_MAJOR_VER));
  let contribCTA = chrome.i18n.getMessage("contribCTA", [extInfo.name, aeConst.DONATE_URL, aeConst.CONTRIB_URL]);
  $("#contrib-cta").html(sanitizeHTML(contribCTA));

  let hostAppName = chrome.i18n.getMessage("hostAppFx");
  $("#hostapp-compat").text(chrome.i18n.getMessage("hostAppCompat", hostAppName));
  $("#whats-new-sync").html(sanitizeHTML(chrome.i18n.getMessage("whatsNewSync", aeConst.SYNC_CLIPPINGS_DWNLD_URL)));
  
  $("#link-website > a").attr("href", extInfo.homepage_url);
  $("#link-amo > a").attr("href", aeConst.AMO_URL);
  $("#link-blog > a").attr("href", aeConst.BLOG_URL);
  $("#link-forum > a").attr("href", aeConst.FORUM_URL);

  $("#btn-close").on("click", async (aEvent) => { closePage() });

  $("a").on("click", aEvent => {
    aEvent.preventDefault();
    gotoURL(aEvent.target.href);
  });

  let [currWnd, tabs] = await Promise.all([
    chrome.windows.getCurrent(),
    chrome.tabs.query({active: true, currentWindow: true}),
  ]);
  gWndID = currWnd.id;
  gTabID = tabs[0].id;

  chrome.runtime.sendMessage({msgID: "whats-new-pg-opened"});
});


function gotoURL(aURL)
{
  chrome.tabs.create({url: aURL});
}


async function closePage()
{
  let tab = await chrome.tabs.getCurrent();
  chrome.tabs.remove(tab.id);
}


function sanitizeHTML(aHTMLStr)
{
  return DOMPurify.sanitize(aHTMLStr, {SAFE_FOR_JQUERY: true});
}


chrome.runtime.onMessage.addListener(aRequest => {
  if (aRequest.msgID == "ping-whats-new-pg") {
    let resp = {
      wndID: gWndID,
      tabID: gTabID,
    };
    return Promise.resolve(resp);
  }
});


$(window).on("contextmenu", aEvent => {
  if (aEvent.target.tagName != "INPUT" && aEvent.target.getAttribute("type") != "text") {
    aEvent.preventDefault();
  }
});
