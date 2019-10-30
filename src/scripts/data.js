const API = {
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
          .then(response => response.json())
          
  },

  entriesFactory (date, concept, entry, mood) {    
  return {
    date: date,
    concept: concept,
    entry: entry,
    mood: mood
  }
 }
}

export default API


