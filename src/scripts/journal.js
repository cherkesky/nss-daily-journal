/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import renderDom from "./entriesDOM.js"
import entryManager from "./entryComponent.js"



API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))

document.getElementById("record").addEventListener("click", function () {
    let dateValue = document.getElementById("date-input").value
    let conceptValue = document.getElementById("concept-input").value
    let entryValue = document.getElementById("entry-input").value
    let moodValue = document.getElementById("mood-input").value

    const regex = /[^A-Za-z0-9;:{entryValue}()\s]+/g
    if (conceptValue.match(regex) || entryValue.match(regex)|| dateValue==="" || entryValue==="" || conceptValue ==="" ) {
        window.alert("PLEASE REVIEW THE ENTERED INFO")
    } else {
        console.log (dateValue, conceptValue, entryValue, moodValue)
        let journalFactoryObject = entryManager.entriesFactory(dateValue, conceptValue, entryValue, moodValue)
        console.log(journalFactoryObject)
        API.postJournalEntries(journalFactoryObject)

    }
    event.preventDefault();
})



