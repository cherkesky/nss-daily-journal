/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/


import entryManager from "./entryComponent.js"

const renderDom = {
  renderJournalEntries(entries) {
    let HtmlForAllEntries = ""
    entries.forEach(entry => {
      const entryHtml = entryManager.makeJournalEntryComponent(entry)
      HtmlForAllEntries += entryHtml
    })
    const logArticle = document.querySelector(".entryLog")
    logArticle.innerHTML = HtmlForAllEntries
  },

  filterResponses(){
    document.getElementById("amazing").addEventListener("click", function (){
      console.log ("Amazing", event.target.value)
    })
    document.getElementById("amazing").addEventListener("click", function (){
      console.log ("Amazing", event.target.value)
    })
     document.getElementById("amazing").addEventListener("click", function (){
      console.log ("Amazing", event.target.value)
    })
    document.getElementById("amazing").addEventListener("click", function (){
      console.log ("Amazing", event.target.value)
    })

  }
}

export default renderDom
