

const formManager = {
//*********************************************************************************************** 
//  Creating the MAIN form
//*********************************************************************************************** 
  renderMainForm() {
    return `
    <br>
    <h1 class=" display-4 text-center ">Daily Journal</h1>
    <br>
    <form class="form-group flex-nowrap jumbotron">
        <fieldset>
            <label for="date-input">Date of entry</label>
            <input type="date" name="date-input" id="date-input" class="form-control" required>
        </fieldset>
        <br>
    
        <fieldset>
            <label for="concept-input">Concepts covered</label>
            <input type="text" name="concept-input" id="concept-input" class="form-control" required>
        </fieldset>
        <br>
        <fieldset>
            <label for="entry-input">Journal entry</label>
            <textarea name="entry-input" id="entry-input" class="form-control" required></textarea>
        </fieldset>
        <br>
    
        <form>
        <fieldset class="dropdown form-group">
            <label for="mood-input">Mood</label>
            <select class="mood" name="mood-input" id="mood-input" class="form-control dropdown-menu required" required>
                <option value="Amazing" class="dropdown-item">Amazing</option>
                <option value="Great" class="dropdown-item">Great</option>
                <option value="Ok" class="dropdown-item">Ok</option>
                <option value="Can be better" class="dropdown-item">Can be better</option>
            </select> <br><br>
            <br>
            <button id="record" class="btn btn-danger btn-lg">Record Journal Entry</button>
            <br><br>
        </fieldset>
    </form>
    <hr>
    <form class="form-group flex-nowrap jumbotron">
            <fieldset id="mood-fields" class="form-row">
                <legend>Filter responses by mood:</legend>
                <div>
                    <input type="radio" name="mood-filter" id="all" value="all" checked="checked">
                    <label for="all">All </label>
                </div>
                <div>
                    <input type="radio" name="mood-filter" id="amazing" value="amazing">
                    <label for="amazing">Amazing </label>
                </div>
                <div> <input type="radio" name="mood-filter" id="great" value="great">
                    <label for="great">Great </label>
                </div>
                <div>
                    <input type="radio" name="mood-filter" id="ok" value="ok">
                    <label for="ok">Ok </label>
                </div>
                <div>
                    <input type="radio" name="mood-filter" id="can-be-better" value="can-be-better">
                    <label for="can be better">Can be better </label>
            </fieldset>
        </div>
    </form>
    <hr>
    
    `
  },
//*********************************************************************************************** 
//  Creating the EDIT form
//*********************************************************************************************** 
  renderEditForm(){

    // enter code here
  }
}



export default formManager
