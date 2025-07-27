class Profile {
  constructor(firstName, lastName, name) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.name = name
  }
}

//this function is meant to save a profile locally to be loaded in later.
function saveProfile() {
  let profile = new Profile("Jesus", "Villanueva-Segovia", "Jesus Villanueva-Segovia")
  let settingItem = browser.storage.local.set({ "Default": profile }).then(() => {console.log("Set ", profile.name)}, () => {console.log("Error setting profile")})
}

function loadProfile() {
  console.log("Loading")
  browser.storage.local.get("")
}

browser.runtime.onMessage.addListener((message) => {
  if (message.action === "save") {
    saveProfile()
  }
  if (message.action === "load") {
    loadProfile()
  }
})

