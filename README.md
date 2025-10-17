#  Force SafeSearch Extension

A lightweight, open-source chromium browser extension that **automatically enables SafeSearch** on major search engines — including Google, Bing, DuckDuckGo, Yahoo, YouTube, and Brave Search.

This extension is designed to **force SafeSearch parameters and redirects** to prevent explicit content from appearing in search results.

---

##  Features

-  Automatically forces SafeSearch on:
  - Google (`safe=active`)
  - Bing (`safeSearch=strict`)
  - DuckDuckGo (`kp=1`)
  - Yahoo (`vm=r`)
  - YouTube (`safeSearch=1`)
  - Brave Search (`safe.search.brave.com`)
-  Supports multiple Yahoo subdomains:
  - `search.yahoo.com`
  - `ca.search.yahoo.com`
  - `images.search.yahoo.com`
  - `ca.images.search.yahoo.com`
-  Works with Chrome, Brave, Edge, and other Chromium-based browsers
-  Lightweight: No background scripts, no data collection
-  Open source — easy to customize and audit

---

##  Installation (Developer Mode)

1. **Download or clone** this repository:
   ```bash
   git clone https://github.com/yourusername/forcesafesearch-extension.git
2. Open chrome://extensions/ or brave://extensions/ in your browser.

3. Enable Developer Mode (top right corner).

4. Click “Load unpacked”.

5. Select the folder where you cloned or unzipped the extension.
