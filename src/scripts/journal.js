/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/

import API from "./data.js"
import renderDom from "./entriesDOM.js"



API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response))
//.then (console.log(API.entriesFactory(entries))) /////// <---------------------------- CHECK THIS LATER



document.getElementById("record").addEventListener("click", function () {
    let dateValue = document.getElementById("date-input").value
    let conceptValue = document.getElementById("concept-input").value
    let entryValue = document.getElementById("entry-input").value
    let moodValue = document.getElementById("mood-input").value

    const regex = /[^A-Za-z0-9;:{}()\s]+/g
    if (conceptValue.match(regex) || entryValue.match(regex)) {
        window.alert("CONTAINS FORBIDDEN CHARACTERS")
    } else {
        console.log (dateValue, conceptValue, entryValue, moodValue)
        let returnedObject = API.entriesFactory(dateValue, conceptValue, entryValue, moodValue)
        console.log(returnedObject)
    }
    event.preventDefault();
})



