const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section>
        <h3>${journalEntry.concept}</h3>
        <p>${journalEntry.entry}</p>
        <p>${journalEntry.mood}</p>
        <p>${journalEntry.date}</p>
        <hr>
      </section>
    `
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


export default entryManager