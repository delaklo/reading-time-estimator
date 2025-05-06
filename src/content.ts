chrome.runtime.onMessage.addListener(
  (request: { type: string }, _: unknown, sendResponse: (response: any) => void) => {
    if (request.type === "GET_READING_TIME") {
      const text = document.body.innerText || "";
      const words = text.trim().split(/\s+/).length;
      const readingTime = Math.ceil(words / 200);
      sendResponse({ minutes: readingTime });
    }
  }
);