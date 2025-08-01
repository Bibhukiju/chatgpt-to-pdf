chrome.storage.local.get("chatHtml", (result) => {
  const html = result.chatHtml || "<p>Error: No content.</p>";
  const container = document.getElementById("content");
  container.innerHTML = html;

  // Wait until content is rendered
  setTimeout(() => {
    const opt = {
      margin: [0.5, 0.5, 1, 0.5], // Top, Left, Bottom, Right
      filename: "chatgpt-conversation.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    const worker = html2pdf()
      .set(opt)
      .from(container)
      .toPdf()
      .get('pdf')
      .then((pdf) => {
        const totalPages = pdf.internal.getNumberOfPages();
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);

          // Page number
          pdf.setFontSize(10);
          pdf.text(`Page ${i} of ${totalPages}`, pageWidth - 50, pageHeight - 20);

          // Watermark
          pdf.setFontSize(10);
          pdf.setTextColor(150);
          pdf.text("created with <3", 10, pageHeight - 20);
        }
      })
      .save();
  }, 100); // Small delay to ensure rendering
});
