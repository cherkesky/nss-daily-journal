const entryManager = {

  makeJournalEntryComponent(journalEntry) {
    // Create your own HTML structure for a journal entry
    return `
      <section class="card">
        <h3 class="card-header">${journalEntry.concept}</h3>
        <div class="card-body">

        <p class="card-title"> We covered: ${journalEntry.entry}</p>
        <p class="card-text"> My mood was: ${journalEntry.mood}</p>
        <p class="card-text">Date: ${journalEntry.date}</p>

        
        </div>
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