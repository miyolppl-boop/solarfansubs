const seriesList = [
    // ÖRNEK EKLEME:
    // { name: "Solar Night", isNew: true },
    // { name: "Moon Blade", isNew: false }
];

const grid = document.getElementById("seriesGrid");
const noSeries = document.getElementById("noSeries");
const searchInput = document.getElementById("searchInput");

render(seriesList);

function render(list) {
    grid.innerHTML = "";

    if (list.length === 0) {
        noSeries.style.display = "block";
        return;
    }

    noSeries.style.display = "none";

    list.forEach(series => {
        const card = document.createElement("div");
        card.className = "series-card";
        card.textContent = series.name;

        if (series.isNew) {
            const badge = document.createElement("div");
            badge.className = "new-badge";
            badge.textContent = "NEW";
            card.appendChild(badge);
        }

        grid.appendChild(card);
    });
}

searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    render(seriesList.filter(s => s.name.toLowerCase().includes(q)));
});
[11/1 00:31] R: prevBtn.onclick = () => { ... }
nextBtn.onclick = () => { ... }
[11/1 00:31] R: db.collection("comments")
[11/1 00:31] R: localStorage.setItem(`last_${series}`, chapter);
