document.getElementById("savebutton").addEventListener("click", () => {
  browser.runtime.sendMessage({ action: "save" });
})


document.getElementById("loadbutton").addEventListener("click", () => {
  browser.runtime.sendMessage({ action: "load" });
})