const API = {
  getJournalEntries () {
      return fetch("http://localhost:3000/entries")
          .then(response => response.json())
          
  },

 entriesFactory(entries) {    /////// <---------------------------- CHECK THIS LATER
  return {
    id: entries.id,
    date: entries.date,
    concept: entries.concept,
    entry: entries.entry,
    mood: entries.mood
  }
 }
}

export default API