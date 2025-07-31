# 📄 ChatGPT to PDF Chrome Extension

Easily save your ChatGPT conversations as a clean PDF with one click!

This Chrome Extension adds a **“📄 Download PDF”** button directly into the ChatGPT interface. When clicked, it extracts all visible chat messages and instantly converts them into a downloadable PDF file — all locally in your browser using [jsPDF](https://github.com/parallax/jsPDF).

---

## ✨ Features

- 🚀 One-click export of full ChatGPT conversations
- 🧩 Button is seamlessly injected into ChatGPT's UI
- 💾 Instantly downloads a readable PDF with no background scripts
- 🔒 100% client-side — no data leaves your browser
- 📦 Uses Manifest V3 and pure content scripts

---

## 📦 Installation (For Developers)

1. **Clone or download this repository**:

   ```bash
   git clone https://github.com/bibhukiju/chatgpt-to-pdf.git

2. **Open Chrome Extensions** :

    Navigate to chrome://extensions/ in your Chrome browser.

3. **Enable Developer Mode (top right corner)**

4. **Load the Extension**:
Click Load Unpacked and select the chatgpt-to-pdf/ folder.

Use the Extension:

Go to https://chatgpt.com

Wait for the 📄 Download PDF button to appear on the top right

Click it to save your current conversation as a PDF!

## Folder Structure
chatgpt-to-pdf/
├── manifest.json             # Chrome extension config (MV3)
├── content.js                # Injects the button & handles PDF logic
└── lib/
    └── jspdf.umd.min.js      # jsPDF library for client-side PDF generation


## 🛠 Technologies Used
jsPDF

Chrome Extensions (Manifest V3)

JavaScript (content script only, no background or popup needed)