// TÜM SERİLER BURADA TUTULUR
const seriesList = [
    // Şimdilik boş
    // Örnek:
    // { name: "Solar Night", isNew: true },
    // { name: "Dark Moon", isNew: false }
];

const newGrid = document.getElementById("newSeriesGrid");
const allGrid = document.getElementById("allSeriesGrid");

const noNewText = document.getElementById("noNewSeries");
const noAllText = document.getElementById("noAllSeries");

function renderSeries() {

    // TÜM SERİLER
    if (seriesList.length === 0) {
        noAllText.style.display = "block";
    } else {
        noAllText.style.display = "none";
    }

    // YENİ SERİLER
    const newSeries = seriesList.filter(s => s.isNew);

    if (newSeries.length === 0) {
        noNewText.style.display = "block";
    } else {
        noNewText.style.display = "none";
    }

    // TÜM SERİLERİ BAS
    seriesList.forEach(series => {
        const card = createSeriesCard(series);
        allGrid.appendChild(card);
    });

    // YENİ SERİLERİ BAS
    newSeries.forEach(series => {
        const card = createSeriesCard(series, true);
        newGrid.appendChild(card);
    });
}

function createSeriesCard(series, showNew = false) {
    const card = document.createElement("div");
    card.className = "series-card";

    if (showNew) {
        const badge = document.createElement("div");
        badge.className = "new-badge";
        badge.innerText = "NEW";
        card.appendChild(badge);
    }

    card.innerHTML += `
        <div class="series-name">${series.name}</div>
    `;

    return card;
}

function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
}

function toggleAllSeries() {
    document.getElementById("allSeriesSection").classList.toggle("show");
    document.getElementById("sideMenu").classList.remove("open");
}

renderSeries();
