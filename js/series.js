const seriesList = [
    // Seri ekledikçe buraya yazacaksın
    // Örnek:
    // { name: "Örnek Seri", cover: "img/ornek.jpg" }
];

const grid = document.getElementById("seriesGrid");
const noSeriesText = document.getElementById("noSeries");

function renderSeries() {
    if (seriesList.length === 0) {
        noSeriesText.style.display = "block";
        return;
    }

    noSeriesText.style.display = "none";

    seriesList.forEach(series => {
        const card = document.createElement("div");
        card.className = "series-card";

        card.innerHTML = `
            <div class="series-name">${series.name}</div>
        `;

        grid.appendChild(card);
    });
}

function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
}

function toggleSeries() {
    document.getElementById("allSeries").classList.toggle("show");
    document.getElementById("sideMenu").classList.remove("open");
}

renderSeries();
