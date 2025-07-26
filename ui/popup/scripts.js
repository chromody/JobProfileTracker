document.getElementById("savebutton").addEventListener("click", () => {
  browser.runtime.sendMessage({ action: "save" });
})