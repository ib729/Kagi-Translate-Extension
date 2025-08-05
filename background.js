chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "kagi-translate-standard",
    title: "Kagi Translate (Standard)",
    contexts: ["selection"]
  });
  chrome.contextMenus.create({
    id: "kagi-translate-best",
    title: "Kagi Translate (Best)",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.selectionText) {
    const selectedText = encodeURIComponent(info.selectionText);
    let translateUrl;

    if (info.menuItemId === "kagi-translate-standard") {
      translateUrl = `https://translate.kagi.com/?source=&target=en&text=${selectedText}`;
    } else if (info.menuItemId === "kagi-translate-best") {
      translateUrl = `https://translate.kagi.com/?source=&target=en&text=${selectedText}&from=auto&to=en&quality=best`;
    }

    if (translateUrl) {
      chrome.tabs.create({ url: translateUrl });
    }
  }
});