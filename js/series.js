const seriesList = [
    // ÖRNEK:
    // { name: "Solar Night", isNew: true },
    // { name: "Moon Blade", isNew: false }
];

const newGrid = document.getElementById("newSeriesGrid");
const allGrid = document.getElementById("allSeriesGrid");
const noNew = document.getElementById("noNewSeries");
const noAll = document.getElementById("noAllSeries");
const searchInput = document.getElementById("searchInput");

renderSeries(seriesList);

function renderSeries(list) {
    newGrid.innerHTML = "";
    allGrid.innerHTML = "";

    const newSeries = list.filter(s => s.isNew);

    noNew.style.display = newSeries.length ? "none" : "block";
    noAll.style.display = list.length ? "none" : "block";

    newSeries.forEach(s => newGrid.appendChild(createCard(s, true)));
    list.forEach(s => allGrid.appendChild(createCard(s)));
}

function createCard(series, isNew = false) {
    const card = document.createElement("div");
    card.className = "series-card";
    card.textContent = series.name;

    if (isNew) {
        const badge = document.createElement("div");
        badge.className = "new-badge";
        badge.textContent = "NEW";
        card.appendChild(badge);
    }
    return card;
}

searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    const filtered = seriesList.filter(s =>
        s.name.toLowerCase().includes(q)
    );
    renderSeries(filtered);
});

function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
}

function toggleAllSeries() {
    document.getElementById("allSeriesSection").classList.toggle("hidden");
    toggleMenu();
}
