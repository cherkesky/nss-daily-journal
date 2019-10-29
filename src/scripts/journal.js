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
.then (console.log(API.entriesFactory(entries))) /////// <---------------------------- CHECK THIS LATER



document.getElementById("record").addEventListener("click", function () {
    let conceptValue = document.getElementById("concept-input").value
    let entryValue = document.getElementById("entry-input").value
    console.log(conceptValue)
    console.log(entryValue)
    const regex=/[^A-Za-z0-9;:{}()\s]+/g
    if (conceptValue.match(regex)){
        window.alert("CONTAINS FORBIDDEN CHAR")
    }
})




