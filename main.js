// -----Variables-----
var form = document.getElementById('add-frm');
var items = document.getElementById('items');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');
var tableDiv = document.getElementById('tbl-div');
var search = document.getElementById('srch');
var noteCount = 0;
var newNote = '';

// -----Events-----
// For page loads
window.onload = updateTable();

// For form submit
form.addEventListener('submit', addNote);

// For Remove
items.addEventListener('click', removeNote);

// For Search
search.addEventListener('keyup', searchNotes);

// -----Functions-----

// Update table
function updateTable(){
    // Display the table when notes added
    if(noteCount > 0){
        tableDiv.style.display = '';
        items.appendChild(newNote);
    }
    else{
        tableDiv.style.display = 'none';
    }
}

// Add Note
function addNote(e){
    // Stop initial behaviour
    e.preventDefault();

    // Create a new note record 

    // New tr
    var tr = document.createElement('tr');
    tr.className = 'item';

    // New td for title
    var td1 = document.createElement('td');
    td1.appendChild(document.createTextNode(ntitle.value));

    // New td for view
    var td2 = document.createElement('td');
    td2.className = 'btcellv';
    var btn1 = document.createElement('button');
    btn1.appendChild(document.createTextNode('View'));
    btn1.className = 'vw';
    td2.appendChild(btn1);

    // New td for delete
    var td3 = document.createElement('td');
    td3.className = 'btcelld';
    var btn2 = document.createElement('button');
    btn2.appendChild(document.createTextNode('Delete'));
    btn2.className = 'del';
    td3.appendChild(btn2);
    
    // Add all tds to tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // Increment note count
    noteCount++;

    // Set new note
    newNote = tr;

    // Send new note to table
    updateTable();

    // Clear inputs
    ntitle.value = '';
}

// Remove Note
function removeNote(e){
    if(e.target.classList.contains('del')){
        if(confirm("Are you sure?")){
            // Delete notes
            var tr = e.target.parentElement.parentElement;
            items.removeChild(tr);
            
            // Update table
            noteCount--;
            if(noteCount == 0){
                updateTable();
            }
        }
    }
}

// Search Notes
function searchNotes(e){
    // Text to lower case
    var searchTxt = e.target.value.toLowerCase();

    // Get list
    var list = items.getElementsByClassName('item');

    // Convert to array
    var listArr = Array.from(list);
    listArr.forEach(function(item){
        // Get title
        var noteTitle = item.firstChild.textContent;
        // Match
        if(noteTitle.toLowerCase().indexOf(searchTxt) != -1){
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }
    });
}