import entryManager from "./entryComponent.js"
import API from "./data.js"


const eventManager = {
  recordNewEntry() {
//*********************************************************************************************** 
//  Mapping user inputs into variables and adding an event listener to the RECORD button
//*********************************************************************************************** 
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
})},


}

export default eventManager