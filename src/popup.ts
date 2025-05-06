chrome.tabs.query({ active: true, currentWindow: true }, (tabs: chrome.tabs.Tab[]) => {
  const activeTab = tabs[0];
  if (activeTab.id) {
    chrome.tabs.sendMessage(activeTab.id, { type: "GET_READING_TIME" }, (response: { minutes?: number }) => {
      const el = document.getElementById("reading-time");
      if (response?.minutes != null) {
        el!.innerText = `Estimating reading time ${response.minutes} min.`;
      } else {
        el!.innerText = "Couldn't fetch the text";
      }
    });
  }
});
