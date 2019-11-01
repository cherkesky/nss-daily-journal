

import entryManager from "./entryComponent.js"
import API from "./data.js"

let filteredMoodArray = [] // making sure that the filtered mood array is fresh and empty

//*********************************************************************************************** 
// Display the journal elements on the DOM
//*********************************************************************************************** 
const renderDom = {
  renderJournalEntries(entries) {
    console.log(entries)
    let HtmlForAllEntries = ""
    entries.forEach(entry => {
      const entryHtml = entryManager.makeJournalEntryComponent(entry)
      HtmlForAllEntries += entryHtml
    })
    const logArticle = document.querySelector(".entryLog")
    logArticle.innerHTML = HtmlForAllEntries
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
  deleteResponse() {
    // document.getElementById("delete-button").addEventListener("click", function () {

    //   console.log("DELETE BUTTON CLICKED")
    // })
  }
}

export default renderDom
