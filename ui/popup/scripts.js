document.getElementById("savebutton").addEventListener("click", () => {
    let firstName = document.getElementById("firstname").value
    console.log(firstName)
    browser.runtime.sendMessage({ action: "save" })
})


document.getElementById("loadbutton").addEventListener("click", () => {
  browser.runtime.sendMessage({ action: "load" })
})