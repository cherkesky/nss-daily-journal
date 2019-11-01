const API = {

//*********************************************************************************************** 
//  Fetch all entries
//*********************************************************************************************** 
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
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
})},
//*********************************************************************************************** 
//  Delete an entry
//*********************************************************************************************** 
    deleteJournalEntry (entryId) {
        fetch(`http://localhost:3000/${entryId}`), { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
}
}}  


export default API


