import entryManager from "./entryComponent.js"
import renderDom from "./entriesDOM.js"
import API from "./data.js"

let filteredMoodArray = [] // making sure that the filtered mood array is fresh and empty


const eventManager = {
  //*********************************************************************************************** 
  //  Event listener to the RECORD button
  //*********************************************************************************************** 
  recordNewEntry() {

    document.getElementById("record").addEventListener("click", function () { // listen for a click <--
      let dateValue = document.getElementById("date-input").value
      let conceptValue = document.getElementById("concept-input").value
      let entryValue = document.getElementById("entry-input").value
      let moodValue = document.getElementById("mood-input").value

      const regex = /[^A-Za-z0-9;:{entryValue}()\s]+/g

      if (conceptValue.match(regex) || entryValue.match(regex) || dateValue === "" || entryValue === "" || conceptValue === "") {
        window.alert("PLEASE REVIEW THE ENTERED INFO")
      } else {
        console.log(dateValue, conceptValue, entryValue, moodValue)
        let journalFactoryObject = entryManager.entriesFactory(dateValue, conceptValue, entryValue, moodValue)

        console.log(journalFactoryObject)

        API.postJournalEntries(journalFactoryObject)
      }
      event.preventDefault();
    })
  },
  //*********************************************************************************************** 
  //  Event listener to the DELETE button
  //*********************************************************************************************** 
  deleteAnEntry() {
    document.querySelector(".entryLog").addEventListener("click", function (e) {     
    console.log(e.target.id)
    if (event.target.id.startsWith("delete-button")) {
      const entryToDelete = event.target.id.split("--")[1]
      console.log (`Please delete entry number!  ${entryToDelete}`) 
      API.deleteJournalEntry(entryToDelete)
        // .then(response => response.json())
        // .then(console.log(jsonfiedResponse))
     }
    })
},
//*********************************************************************************************** 
// Filter responses by mood
//*********************************************************************************************** 

filterResponses() {
  document.getElementById("all").addEventListener("click", function () {
    API.getJournalEntries()
      .then(jsonfiedResponse => {
        renderDom.renderJournalEntries(jsonfiedResponse)
      })
  })

  document.getElementById("amazing").addEventListener("click", function () {
    API.getJournalEntries()
      .then(jsonfiedResponse => {
        filteredMoodArray = jsonfiedResponse.filter(mood => mood.mood === "Amazing")
        console.log(filteredMoodArray)
        renderDom.renderJournalEntries(filteredMoodArray)
      })
  })

  document.getElementById("great").addEventListener("click", function () {
    API.getJournalEntries()
      .then(jsonfiedResponse => {
        filteredMoodArray = jsonfiedResponse.filter(mood => mood.mood === "Great")
        console.log(filteredMoodArray)
        renderDom.renderJournalEntries(filteredMoodArray)
      })
  })

  document.getElementById("ok").addEventListener("click", function () {
    API.getJournalEntries()
      .then(jsonfiedResponse => {
        filteredMoodArray = jsonfiedResponse.filter(mood => mood.mood === "Ok")
        console.log(filteredMoodArray)
        renderDom.renderJournalEntries(filteredMoodArray)
      })
  })

  document.getElementById("can-be-better").addEventListener("click", function () {
    API.getJournalEntries()
      .then(jsonfiedResponse => {
        filteredMoodArray = jsonfiedResponse.filter(mood => mood.mood === "Can be better")
        console.log(filteredMoodArray)
        renderDom.renderJournalEntries(filteredMoodArray)
      })
  })
},
}

export default eventManager