browser.runtime.onMessage.addListener((message) => {
  if (message.action === "save") {
    browser.alarms.create({ delayInMinutes: 0.01667 });
    console.log("Alarm created from content script.");
  }
});

