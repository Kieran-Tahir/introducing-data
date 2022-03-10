import Dexie from 'dexie'

export const db = new Dexie('myNewDatabase')
db.version(1).stores({
  sprintData: '++id, name, blurb',
  })

db.transaction("rw", db.sprintData, () => {
  db.sprintData.add({
    name: "Sprint 1",
    blurb: "Introduction to HTML and CSS",
  })
  db.sprintData.add({
    name: "Sprint 2",
    blurb: "Introduction to JavaScript",
  })
  db.sprintData.add({
    name: "Sprint 3",
    blurb: "Logic in JavaScript",
  })
  db.sprintData.add({
    name: "Sprint 4",
    blurb: "Code Readability",
  })
  db.sprintData.add({
    name: "Sprint 5",
    blurb: "Introduction to React",
  })
  db.sprintData.add({
    name: "Sprint 6",
    blurb: "State in React",
  })
})