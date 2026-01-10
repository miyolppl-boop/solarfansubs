const seriesList = [
    // { name: "Örnek Seri", isNew: true }
];

const newGrid = document.getElementById("newSeriesGrid");
const allGrid = document.getElementById("allSeriesGrid");
const noNew = document.getElementById("noNewSeries");
const noAll = document.getElementById("noAllSeries");

function renderSeries() {
    const newSeries = seriesList.filter(s => s.isNew);

    if (newSeries.length === 0) noNew.style.display = "block";
    else {
        noNew.style.display = "none";
        newSeries.forEach(s => newGrid.appendChild(createCard(s, true)));
    }

    if (seriesList.length === 0) noAll.style.display = "block";
    else {
        noAll.style.display = "none";
        seriesList.forEach(s => allGrid.appendChild(createCard(s)));
    }
}

function createCard(series, isNew = false) {
    const card = document.createElement("div");
    card.className = "series-card";

    if (isNew) {
        const badge = document.createElement("div");
        badge.className = "new-badge";
        badge.innerText = "NEW";
        card.appendChild(badge);
    }

    card.innerHTML += `<div>${series.name}</div>`;
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
