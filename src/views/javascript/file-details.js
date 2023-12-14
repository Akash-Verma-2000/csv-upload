// This file has all the scripts related to the file-details page


//Getting the file details table body
const tableBody = document.getElementById("records");

//Getting table rows
const tableRows = document.querySelectorAll("#records tr");

//Getting the search bar of the page
const searchBar = document.getElementById("my-search-bar");

// This is the select element where user can select how many records should be there on the page at once
const records_size = document.getElementById("records_size");


//Putting an event listener on the search bar
//This function will work each time the user types in this

searchBar.addEventListener("input", (event) => {
    // Getting search bar input and converting it into lowercase
    const searchStr = event.target.value.toLowerCase();
    tableBody.innerHTML = "";

    tableRows.forEach((tr) => {

        const tableData = tr.querySelectorAll('td');

        // Checking if the search string matches any content in the table's second column
        if (tableData[1].innerText.toLowerCase().indexOf(searchStr) > -1) {
            tableBody.appendChild(tr);
        }
    });
});




// Variables for pagination
const recordsDisplay = document.getElementById("records");
const total_records_tr = document.querySelectorAll("#records tr");
let records_per_page = 100;
let page_number = 1;
const total_records = total_records_tr.length;
let total_page = Math.ceil(total_records / records_per_page);

generatePage()
displayRecords()

// Function to display records based on the pagination
function displayRecords() {
    // Determining start and end indexes based on the current page
    let start_index = (page_number - 1) * records_per_page;
    let end_index = start_index + (records_per_page - 1);
    if (end_index >= total_records) {
        end_index = total_records - 1;
    }
    let statement = "";
    // Generating HTML for the records to be displayed on the current page
    for (let i = start_index; i <= end_index; i++) {
        statement += `<tr>${total_records_tr[i].innerHTML}</tr>`;
    }

    // Rendering records on the page
    recordsDisplay.innerHTML = statement;

    // Removing active class from pagination
    document.querySelectorAll('.dynamic-item').forEach(item => {
        item.classList.remove("active");
    });


    //Putting the actice class to the current page of the pagination
    document.getElementById(`page${page_number}`).classList.add('active');


    //Diabling the previouse button if user is on the 1st page of the pagination
    if (page_number == 1) {
        document.getElementById("prevBtn").parentElement.classList.add('disabled');
    } else {
        //Enabling the previouse button if the user is not on the 1st page
        document.getElementById("prevBtn").parentElement.classList.remove('disabled');
    }


    //Disabling the next button if the user is already on the last page of the pagination
    if (page_number == total_page) {
        document.getElementById("nextBtn").parentElement.classList.add('disabled');
    } else {
        //Enabling the next page button if the user in not on the last page of the pagination
        document.getElementById("nextBtn").parentElement.classList.remove('disabled');
    }

    // Displaying details about the current page's records
    document.getElementById("page-details").innerHTML = `Showing ${start_index + 1} to ${end_index + 1} of ${total_records}`
}


// Function to generate pagination buttons
function generatePage() {

    let prevBtn = `<li class="page-item"><a id="prevBtn" class="page-link" onclick="prevBtn()" href="javascript:void(0)">Previous</a></li>`;

    let nextBtn = `<li class="page-item"><a id="nextBtn" class="page-link" onclick="nextBtn()" href="javascript:void(0)">Next</a></li>`;

    let buttons = "";
    let activeClass = "";

    // Generating buttons for each page
    for (let i = 1; i <= total_page; i++) {

        if (i == 1) {
            activeClass = 'active';

        } else {
            activeClass = '';
        }

        buttons += `<li class="page-item dynamic-item ${activeClass}" id="page${i}"><a onclick="switchPage(${i})" class="page-link" href="javascript:void(0)">${i}</a></li>`;
    }
    // Rendering pagination buttons on the page
    document.getElementById("pagination").innerHTML = `${prevBtn} ${buttons}   ${nextBtn}`;

}

// Functions for pagination navigation
function nextBtn() {
    page_number++;
    displayRecords();
}

function prevBtn() {
    page_number--;
    displayRecords();
}

function switchPage(index) {
    page_number = parseInt(index);
    displayRecords();
}

// Event listener for changing the number of records displayed per page
records_size.addEventListener('change', function (e) {
    records_per_page = parseInt(records_size.value);
    total_page = Math.ceil(total_records / records_per_page);
    page_number = 1;
    generatePage()
    displayRecords()
})

