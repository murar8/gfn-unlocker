const CHROME_OS_UA =
  "Mozilla/5.0 (X11; CrOS x86_64 13099.85.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.110 Safari/537.36";

chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    const ua = details.requestHeaders.find((header) => header.name === "User-Agent");
    ua.value = CHROME_OS_UA;
    return { requestHeaders: details.requestHeaders };
  },

  {
    urls: ["https://play.geforcenow.com/*"],
  },

  ["blocking", "requestHeaders"]
);
