import API from "./data.js"
import renderDom from "./entriesDOM.js"
import formManager from "./formManager.js"
import eventManager from "./eventManager.js"

console.log (`

$$$$$$\\                      
$$  __$$\                     
$$ /  \__|$$\\   $$\\ $$\\   $$\\ 
$$ |$$$$\ $$ |  $$ |$$ |  $$ |
$$ |\\_$$ |$$ |  $$ |$$ |  $$ |
$$ |  $$ |$$ |  $$ |$$ |  $$ |
\\$$$$$$  |\\$$$$$$  |\\$$$$$$$ |
 \______/  \______/  \____$$ |
                    $$\\   $$ |
                    \\$$$$$$  |
                     \______/ 
                                         

 /$$$$$$  /$$                           /$$                           /$$                
 /$$__  $$| $$                          | $$                          | $$                
| $$  \\__/| $$$$$$$   /$$$$$$   /$$$$$$ | $$   /$$  /$$$$$$   /$$$$$$$| $$   /$$ /$$   /$$
| $$      | $$__  $$ /$$__  $$ /$$__  $$| $$  /$$/ /$$__  $$ /$$_____/| $$  /$$/| $$  | $$
| $$      | $$  \\ $$| $$$$$$$$| $$  \__/| $$$$$$/ | $$$$$$$$|  $$$$$$ | $$$$$$/ | $$  | $$
| $$    $$| $$  | $$| $$_____/| $$      | $$_  $$ | $$_____/ \\____ $$| $$_  $$ | $$  | $$
|  $$$$$$/| $$  | $$|  $$$$$$$| $$      | $$ \  $$|  $$$$$$$ /$$$$$$$/| $$ \\  $$|  $$$$$$$
 \______/ |__/  |__/ \_______/|__/      |__/  \\__/ \\_______/|_______/ |__/  \\__/  \\____  $$
                                                                              /$$   | $$
                                                                             |  $$$$$$/
    
 `)



//*********************************************************************************************** 
//  Painting the initial UIs
//*********************************************************************************************** 
    document.getElementById("main-form-container").innerHTML = formManager.renderMainForm()
    document.getElementById("main-form-container").innerHTML = formManager.renderMainForm()

    API.getJournalEntries()
    .then(response => renderDom.renderJournalEntries(response)) // displaying all entries
//*********************************************************************************************** 
//  Calling the event handlers
//*********************************************************************************************** 
eventManager.recordNewEntry() // looking for new submissions
eventManager.deleteAnEntry() // looking for a deletion request
eventManager.editAnEntry() // looking for an edition request
eventManager.filterResponses() // looking for a filtering request





