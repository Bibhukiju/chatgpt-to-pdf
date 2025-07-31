// This script is injected into the page to generate the PDF
(async function () {
  // Load jsPDF library dynamically
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
  document.head.appendChild(script);

  script.onload = async function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get all messages
    const messages = document.querySelectorAll(".group.w-full");
    let yPosition = 20;

    // Add title
    doc.setFontSize(18);
    doc.text("ChatGPT Conversation", 105, yPosition, { align: "center" });
    yPosition += 20;

    // Add date
    doc.setFontSize(12);
    const date = new Date().toLocaleString();
    doc.text(`Generated on: ${date}`, 105, yPosition, { align: "center" });
    yPosition += 20;

    // Process each message
    doc.setFontSize(12);
    for (const message of messages) {
      const isUser = message.querySelector(".bg-gray-100") ? true : false;
      const sender = isUser ? "You" : "ChatGPT";

      // Get message text
      let text = "";
      const messageContent = message.querySelector(
        ".whitespace-pre-wrap, .markdown"
      );
      if (messageContent) {
        // For code blocks, we'll use monospace font
        const codeBlocks = messageContent.querySelectorAll("pre");
        codeBlocks.forEach((block) => {
          block.innerHTML = block.innerHTML.replace(/<[^>]*>/g, "\n").trim();
        });

        // Get all text content
        text = messageContent.innerText || messageContent.textContent;
      }

      // Split long text into multiple lines
      const splitText = doc.splitTextToSize(text, 180);

      // Add sender label
      doc.setFont("helvetica", "bold");
      doc.text(`${sender}:`, 15, yPosition);

      // Add message text
      doc.setFont("helvetica", "normal");
      yPosition += 7;
      doc.text(splitText, 20, yPosition);

      // Calculate new position
      yPosition += splitText.length * 7 + 10;

      // Add new page if needed
      if (yPosition > 260) {
        doc.addPage();
        yPosition = 20;
      }
    }

    // Save the PDF
    doc.save(`ChatGPT-Conversation-${Date.now()}.pdf`);

    // Re-enable the button
    const downloadButton = document.getElementById("pdfDownloadBtn");
    if (downloadButton) {
      downloadButton.disabled = false;
      downloadButton.innerHTML = "Download as PDF";
    }
  };
})();
