
const form = document.querySelector('form');

form.onsubmit = (event) => {
    event.preventDefault();
    sendRequest();
}

function sendRequest() {
    const xrequest = new XMLHttpRequest;
    xrequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            alert(xrequest.response);
        }
    };
    xrequest.open("POST", "superheroes.php", true);
    xrequest.send();
}

