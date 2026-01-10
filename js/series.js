// SERİLER (BURAYA EKLEYECEKSİN)
const seriesList = [
    // Örnek eklemek için:
    // { name: "Solar Night", isNew: true },
    // { name: "Dark Moon", isNew: false },
];

// ELEMENTLER
const newGrid = document.getElementById("newSeriesGrid");
const allGrid = document.getElementById("allSeriesGrid");
const noNew = document.getElementById("noNewSeries");
const noAll = document.getElementById("noAllSeries");
const searchInput = document.getElementById("searchInput");

// İLK YÜKLEME
renderSeries(seriesList);

// SERİLERİ BAS
function renderSeries(list) {
    newGrid.innerHTML = "";
    allGrid.innerHTML = "";

    const newSeries = list.filter(s => s.isNew);

    // YENİ GELEN SERİLER
    if (newSeries.length === 0) {
        noNew.style.display = "block";
    } else {
        noNew.style.display = "none";
        newSeries.forEach(s => newGrid.appendChild(createCard(s, true)));
    }

    // TÜM SERİLER
    if (list.length === 0) {
        noAll.style.display = "block";
    } else {
        noAll.style.display = "none";
        list.forEach(s => allGrid.appendChild(createCard(s)));
    }
}

// SERİ KARTI
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

// ARAMA
searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();

    const filtered = seriesList.filter(series =>
        series.name.toLowerCase().includes(value)
    );

    renderSeries(filtered);
});

// MENÜ
function toggleMenu() {
    document.getElementById("sideMenu").classList.toggle("open");
}

function toggleAllSeries() {
    document.getElementById("allSeriesSection").classList.toggle("show");
    document.getElementById("sideMenu").classList.remove("open");
}
