class Person {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName,
    this.middleName = middleName,
    this.lastName = lastName,
    this.name = firstName + " " + middleName + " " + lastName
  }
}

class Location {
  constructor(address, city, state, zipcode, country) {
    this.address = address,
    this.city = city,
    this.state = state,
    this.zipcode = zipcode,
    this.country = country
  }
}

class Job {
  constructor(title, address, dateRange, description) {
    this.title = title,
    this.address = address,
    this.dateRange = dateRange,
    this.description = description
  }
}

class Profile {
  constructor(person, location, jobs) {
    //jobs is a array of all jobs, composed of the data structure Job

    this.person = person,
    this.location = location,
    this.jobs = jobs
  }
}

export { Person, Location, Job, Profile }