import API from "./data.js"
import renderDom from "./entriesDOM.js"
import formManager from "./formManager.js"
import eventManager from "./eventManager.js"

//*********************************************************************************************** 
//  Painting the initial UI
//*********************************************************************************************** 
document.getElementById("form-container").innerHTML = formManager.renderMainForm()

API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response)) // displaying all entries

eventManager.recordNewEntry()
renderDom.filterResponses()
renderDom.deleteResponse()