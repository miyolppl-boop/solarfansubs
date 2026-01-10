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
