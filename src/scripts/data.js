const API = {

//*********************************************************************************************** 
//  Fetch all entries
//*********************************************************************************************** 
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
          .then(response => response.json())
          
  },

//*********************************************************************************************** 
//  Fetch ONE entry
//*********************************************************************************************** 
getJournalEntry (entryId) {
    return fetch(`http://localhost:3000/entries/${entryId}`)
        .then(response => response.json())
        
},
//*********************************************************************************************** 
//  Post a new entry
//*********************************************************************************************** 
  postJournalEntries (newJournalEntry) {
    fetch("http://localhost:3000/entries", { 
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
        })
},

//*********************************************************************************************** 
//  Update ONE entry
//*********************************************************************************************** 
updateJournalEntry (editedJournalEntry, entryId) {
    console.log(editedJournalEntry, entryId)
    fetch(`http://localhost:3000/entries/${entryId}`, { 
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedJournalEntry)
        })
},
//*********************************************************************************************** 
//  Delete an entry
//*********************************************************************************************** 
    deleteJournalEntry (entryId) {
        fetch(`http://localhost:3000/entries/${entryId}`, { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}  


export default API


