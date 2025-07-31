function addDownloadButton() {
  if (document.getElementById("chatgpt-download-btn")) return;

  const button = document.createElement("button");
  button.textContent = "📄 Download PDF";
  button.id = "chatgpt-download-btn";
  button.classList.add("downloadBtn")
  button.onclick = () => {
    const conversation = document.querySelector("main");
    if (!conversation) return alert("Conversation not found.");

    const cloned = conversation.cloneNode(true);
    const html = `
      <html>
      <head>
        <base href="${location.origin}">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tailwindcss/ui/dist/tailwind-ui.min.css">
        <style>
          body { font-family: sans-serif; padding: 20px; }
        </style>
      </head>
      <body>${cloned.innerHTML}</body>
      </html>
    `;
    chrome.runtime.sendMessage({ type: "CHAT_CONTENT", payload: html });
  };

  document.body.appendChild(button);
}

window.addEventListener("load", () => {
  setTimeout(addDownloadButton, 2000); // Wait for DOM to be ready
});
