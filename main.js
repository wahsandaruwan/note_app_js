// -----Variables-----
var form = document.getElementById('add-frm');
var items = document.getElementById('items');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');
var tableDiv = document.getElementById('tbl-div');
var noteCount = 0;

// -----Events-----
// For page loads
window.onload = updateTable();

// For form submit
form.addEventListener('submit', addNote);

// -----Functions-----

// Update table
function updateTable(newNote){
    // Display the table when notes added
    if(noteCount > 0){
        tableDiv.style.display = 'block';
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
    btn1.setAttribute('id', 'vw');
    td2.appendChild(btn1);

    // New td for delete
    var td3 = document.createElement('td');
    td3.className = 'btcelld';
    var btn2 = document.createElement('button');
    btn2.appendChild(document.createTextNode('Delete'));
    btn2.setAttribute('id', 'del');
    td3.appendChild(btn2);
    
    // Add all tds to tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // Increment note count
    noteCount++;

    // Send new note to table
    updateTable(tr);

    // Clear inputs
    ntitle.value = '';
}