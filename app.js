const form = document.querySelector("form");
createResultDiv();
configureInputBorder(); // For styling

// Suport functions re creation and manipulation of result div
function createResultDiv() {
    let result = document.createElement("div");
    result.setAttribute("id", "result");
    let searchBar = document.getElementById("searchbar");
    searchBar.appendChild(result);
}

function clearResultDiv() {
    let result = document.getElementById("result");
    result.innerHTML = "";
}

function addToResultDiv(element) {
    let result = document.getElementById("result");
    result.appendChild(element);
}
// End of result div support

// Form submission and response management
form.onsubmit = (event) => {
    event.preventDefault();
    clearResultDiv();
    displayResultTitle();
    // Client-side form validation
    if (isValidEntry()) {
        submitSearch();
    } else {
        sendInvalidEntryMessage();
    }
}

function submitSearch() {
    fetch('http://localhost/info2180-lab4/superheroes.php', {
        method: "POST",
        body: new FormData(form)
    })
        .then(response => response.text())
        .then(data => {
            if (data) {
                let superheroInfo = JSON.parse(data);
                handleData(superheroInfo);
            }
        })
        .catch(error => {
            console.log("We recognized an error. Perhaps change URL in app.js fetch API to appropriate file path.");
        });
}
// End of form submission and response management

// Support for form submission and response management
function isValidEntry() {
    let entry = document.querySelector("input").value;
    let regex = /^[A-Za-z\s]*$/;
    return regex.test(entry);
}

function sendInvalidEntryMessage() {
    let invalidMsg = document.createElement("h4");
    invalidMsg.innerText = "Invalid Entry: Please enter only letters."
    addToResultDiv(invalidMsg);
}

function handleData(phpResponse) {
    if (phpResponse.length > 4) {
        // Form field was empty
        displayHeroList(phpResponse);
    } else if ("unFoundMessage" in phpResponse) {
        // Hero was not found
        displayunFoundMessage(phpResponse);
    } else if ("name" in phpResponse) {
        // Hero found
        displayHero(phpResponse);
    } else if ("error" in phpResponse) {
        console.log("superhero.php recognized an error. Perhaps change URL in app.js fetch API to appropriate file path.");
    }
}

function displayHero(hero) {
    let name = hero['name'];
    let alias = hero['alias'];
    let bio = hero['biography'];

    displayName = document.createElement("h3");
    displayName.innerText = name;

    displayAlias = document.createElement("h4");
    displayAlias.innerText = alias;

    displayBio = document.createElement("p");
    displayBio.innerText = bio;

    addToResultDiv(displayName);
    addToResultDiv(displayAlias);
    addToResultDiv(displayBio);
}

function displayHeroList(hList) {
    let displayedList = document.createElement("ul");

    for (let i = 0; i < hList.length; i++) {
        let newHero = document.createElement("li");
        newHero.innerText = hList[i];
        displayedList.appendChild(newHero);
    }
    addToResultDiv(displayedList);
}

function displayunFoundMessage(arrMsg) {
    // Pulls "unfound message" from array sent from superheroes.php
    let msg = Object.values(arrMsg)[0];

    let displayedMessage = document.createElement("h4");
    displayedMessage.innerText = msg;
    displayedMessage.classList.add("unfound"); // For Styling
    addToResultDiv(displayedMessage);
}

function displayResultTitle() {
    let line = document.createElement("hr");
    line.classList.add("result-line");
    addToResultDiv(line);

    let title = document.createElement("h2");
    title.innerText = "RESULT";
    title.classList.add("result-title");
    addToResultDiv(title);

    let line2 = document.createElement("hr");
    line2.classList.add("result-line");
    addToResultDiv(line2);
}

function configureInputBorder() {
    // Styling
    let field = document.querySelector("input");
    field.onchange = function (element) {
        if (field.value != '') {
            element.target.style.border = "2px solid #ffafcc";
        }
    }
}
// End of support for form submission and response management