searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();

    // --- yazılırsa tüm serileri göster
    if (q === "---") {
        render(seriesList);
        return;
    }

    // boşsa da tüm serileri göster
    if (q === "") {
        render(seriesList);
        return;
    }

    render(
        seriesList.filter(s =>
            s.name.toLowerCase().includes(q)
        )
    );
});
const seriesList = [
    { name: "Solar Night", isNew: true },
    { name: "Moon Blade", isNew: false },
    { name: "Crimson Sun", isNew: true }
];

{ name: "Seri Adı", isNew: true },
const seriesList = [
    { name: "Test Seri 1", isNew: true },
    { name: "Test Seri 2", isNew: false }
];
const img = document.createElement("img");
img.src = series.cover;
img.alt = series.name;
img.className = "series-cover";

const title = document.createElement("div");
title.className = "series-title";
title.textContent = series.name;

card.appendChild(img);
card.appendChild(title);
