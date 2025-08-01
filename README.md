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
   git clone https://github.com/yourusername/chatgpt-to-pdf.git
   ```

2. **Open Chrome Extensions**:
   Navigate to `chrome://extensions/` in your Chrome browser.

3. **Enable Developer Mode** (top right corner)

4. **Load the Extension**:
   Click `Load Unpacked` and select the `chatgpt-to-pdf/` folder.

5. **Use the Extension**:
   - Go to [https://chat.openai.com](https://chat.openai.com)
   - Wait for the 📄 **Download PDF** button to appear on the top right
   - Click it to save your current conversation as a PDF!

---

## 📁 Folder Structure
## 📁 Folder Structure
```

project/
│
├── manifest.json             # Main config file for your Chrome extension
├── popup.html                # Optional popup UI (e.g. from extension icon)
│
├── images/                   # Folder for icons, logos, etc.
│   └── icon.png              # Example image file
│
├── pages/                    # Standalone extension pages (like pdf.html)
│   └── pdf.html              # Page to display saved chat HTML
│
├── scripts/                  # JavaScript files
│   ├── background.js         # Handles background tasks, listeners, etc.
│   ├── content.js            # Injected into web pages (if used)
│   └── popup.js              # Handles popup.html logic (optional)
│
├── styles/                   # CSS files
│   └── style.css             # Shared or page-specific styles
```

## 🛠 Technologies Used

- [jsPDF](https://github.com/parallax/jsPDF)
- Chrome Extensions (Manifest V3)
- JavaScript (content script only, no background or popup needed)

---

## 📄 License

MIT License

---

## 💡 Contributing

Pull requests and improvements are welcome! If you encounter any issues or have suggestions, feel free to open an issue or contribute directly.

---

Made with ❤️ to make your ChatGPT experience smoother.
