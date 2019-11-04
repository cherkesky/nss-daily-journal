import entryManager from "./entryComponent.js"
import renderDom from "./entriesDOM.js"
import API from "./data.js"
import formManager from "./formManager.js"

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
        console.log(`Please delete entry number!  ${entryToDelete}`)
        API.deleteJournalEntry(entryToDelete)
        API.getJournalEntries()
      }
    })
  },

  //*********************************************************************************************** 
  //  Event listener to the EDIT button
  //*********************************************************************************************** 
  editAnEntry() {
    document.querySelector(".entryLog").addEventListener("click", function (e) {
      console.log(e.target.id)
      if (event.target.id.startsWith("edit-button")) {
        const entryToEdit = event.target.id.split("--")[1]
        console.log(`Please edit entry number!  ${entryToEdit}`)
        // rendering a the dom with the EDIT form
        let mainFormContainer = document.getElementById("main-form-container")
        let entryLogContainer = document.querySelector(".entryLog")
        mainFormContainer.innerHTML = formManager.renderEditForm() 
        entryLogContainer.innerHTML = ""
        // fetch calling the asked journal entry
        API.getJournalEntry(entryToEdit)
          .then(jsonfiedResponse => {
            let conceptForEdit = jsonfiedResponse.concept
            let entryForEdit = jsonfiedResponse.entry
            let moodForEdit = jsonfiedResponse.mood
            let dateForEdit = jsonfiedResponse.date

            console.log(dateForEdit, conceptForEdit, entryForEdit, moodForEdit)
        // populating the edit form
            document.getElementById("edit-date-input").value = dateForEdit
            document.getElementById("edit-concept-input").value = conceptForEdit
            document.getElementById("edit-entry-input").value = entryForEdit
            document.getElementById("edit-mood-input").value = moodForEdit
        // setting the event handler to look for a click
            document.getElementById("edit-buttons").addEventListener("click", function (e) {
              console.log(e.target.id)
              if (event.target.id.startsWith("edit-button")) {
                const UpdateOrCancel = event.target.id.split("--")[1]
                if (UpdateOrCancel === "save") {
                  console.log("SAVED!")
                // grabbing the new edited data
                  let editedDate = document.getElementById("edit-date-input").value
                  let editedConcept = document.getElementById("edit-concept-input").value
                  let editedEntry = document.getElementById("edit-entry-input").value
                  let editedMood = document.getElementById("edit-mood-input").value
                // creating a new object from the edited data
                  const updatedEntry = entryManager.entriesFactory(editedDate, editedConcept, editedEntry, editedMood)
                  console.log(updatedEntry)
                // Fetch PULL with the updated data
                  API.updateJournalEntry(updatedEntry, entryToEdit)
                // User hit a Cancel button
                } else if (UpdateOrCancel === "cancel") {
                  console.log("NEVERMIND!")
                }
              }
            })
          })
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