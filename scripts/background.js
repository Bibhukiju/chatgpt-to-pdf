chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.type === "CHAT_CONTENT") {
    chrome.storage.local.set({ chatHtml: message.payload }, () => {
      chrome.tabs.create({ url: chrome.runtime.getURL("pages/pdf.html") });
    });
  }
});
