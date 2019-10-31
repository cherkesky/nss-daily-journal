/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/


import entryManager from "./entryComponent.js"
import API from "./data.js"

let filteredMoodArray = []

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

  filterResponses() {
    document.getElementById("amazing").addEventListener("click", function () {
      API.getJournalEntries()
        .then(jsonfiedResponse => {
          filteredMoodArray= jsonfiedResponse.filter(mood => mood.mood === "Amazing")
          console.log(filteredMoodArray)
          renderDom.renderJournalEntries(filteredMoodArray)
        })
    })
    document.getElementById("great").addEventListener("click", function () {
      API.getJournalEntries()
      .then(jsonfiedResponse => {
        filteredMoodArray= jsonfiedResponse.filter(mood => mood.mood === "Great")
        console.log(filteredMoodArray)
        renderDom.renderJournalEntries(filteredMoodArray)
      })
    })
    document.getElementById("ok").addEventListener("click", function () {
      API.getJournalEntries()
        .then(jsonfiedResponse => {
          filteredMoodArray= jsonfiedResponse.filter(mood => mood.mood === "Ok")
          console.log(filteredMoodArray)
          renderDom.renderJournalEntries(filteredMoodArray)
        })
    })
    document.getElementById("can-be-better").addEventListener("click", function () {
      API.getJournalEntries()
        .then(jsonfiedResponse => {
          filteredMoodArray= jsonfiedResponse.filter(mood => mood.mood === "Can be better")
          console.log(filteredMoodArray)
          renderDom.renderJournalEntries(filteredMoodArray)
        })
     })

  }
}

export default renderDom
