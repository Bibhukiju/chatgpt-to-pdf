chrome.storage.local.get("chatHtml", (result) => {
  const html = result.chatHtml || "<p>Error: No content.</p>";
  const container = document.getElementById("content");
  container.innerHTML = html;

  html2pdf()
    .set({
      margin: 0.5,
      filename: "chatgpt-conversation.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    })
    .from(container)
    .save();
});
