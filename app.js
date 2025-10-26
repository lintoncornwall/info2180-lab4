
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("searchBtn");
    const input = document.getElementById("searchField");
    const resultDiv = document.getElementById("result");

    button.addEventListener("click", () => {
        const query = input.value.trim();
        const url = query
            ? `superheroes.php?query=${encodeURIComponent(query)}`
            : "superheroes.php";

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error("Error:", error);
                resultDiv.innerHTML = "<p>Error fetching superhero data.</p>";
            });
    });
});
