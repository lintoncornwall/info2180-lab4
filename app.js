// Exercise 2: Show the list of superheroes in an alert box

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("searchBtn");

    button.addEventListener("click", () => {
        fetch("superheroes.php")
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                return response.text();
            })
            .then(data => {
                alert(data);
            })
            .catch(error => {
                alert("Error fetching superhero list.");
                console.error(error);
            });
    });
});
