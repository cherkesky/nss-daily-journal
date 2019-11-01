

import entryManager from "./entryComponent.js"

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
  }
}

export default renderDom
