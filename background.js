import { Profile, Person, Location, Job } from "./classes/profile.js"

//this function is meant to save a profile locally to be loaded in later.
function saveProfile(person, location, jobs) {
  let profile = new Profile("Jesus", "Villanueva-Segovia", "Jesus Villanueva-Segovia")
  browser.storage.local.set({ "Default": profile })
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

