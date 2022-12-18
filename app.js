const form = document.querySelector('form');

form.onsubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost/Projects/info2180-lab4/superheroes.php')
        .then(response => response.text())
        .then(data => {
            alert(data)
        })
        .catch(error => {
            alert(error)
        });
}



