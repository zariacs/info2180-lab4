
const form = document.querySelector('form');

form.onsubmit = (event) => {
    event.preventDefault();
    // alert("clicked!");
    const xrequest = new XMLHttpRequest;
    xrequest.onreadystatechange = function () {
        // alert("we are here");
        // alert(xrequest.responseText);

        if (this.readyState == 4 && this.status == 200) {
            // alert("BLAH");
            alert(xrequest.response);
        }
    };
    xrequest.open("POST", "superheroes.php", true);
    xrequest.send();
}

// form.addEventListener('submit', function (element) {
//     element.preventDefault();
//     sendRequest();
// });

// function sendRequest() {
//     const xrequest = new XMLHttpRequest;
//     xrequest.onreadystatechange = function () {
//         // alert("we are here");
//         alert(xrequest.responseText);

//         if (this.readyState == 4 && this.status == 200) {
//             alert("BLAH");
//             alert(xrequest.responseText);
//         }
//     };
//     xrequest.open("GET", "superheroes.php", true);
//     xrequest.send();
// }

