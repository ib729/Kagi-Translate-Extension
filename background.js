chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "kagi-translate",
    title: "Kagi Translate",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "kagi-translate" && info.selectionText) {
    const selectedText = encodeURIComponent(info.selectionText);
    const translateUrl = `https://translate.kagi.com/?source=&target=en&text=${selectedText}`;
    chrome.tabs.create({ url: translateUrl });
  }
});
