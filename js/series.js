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
// Önceki / Sonraki Bölüm
const prevBtn = document.getElementById("prevChapter");
const nextBtn = document.getElementById("nextChapter");

if (prevBtn && nextBtn && data) {
    prevBtn.onclick = () => {
        const prev = Number(chapter) - 1;
        if (data.list[prev]) {
            location.href = `chapter.html?series=${series}&chapter=${prev}`;
        }
    };

    nextBtn.onclick = () => {
        const next = Number(chapter) + 1;
        if (data.list[next]) {
            location.href = `chapter.html?series=${series}&chapter=${next}`;
        }
    };
}

// Basit Yorum Sistemi (localStorage)
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");
const sendBtn = document.getElementById("sendComment");

const commentKey = `comments_${series}_${chapter}`;
const savedComments = JSON.parse(localStorage.getItem(commentKey)) || [];

savedComments.forEach(c => addComment(c));

sendBtn.onclick = () => {
    if (!commentInput.value.trim()) return;
    savedComments.push(commentInput.value);
    localStorage.setItem(commentKey, JSON.stringify(savedComments));
    addComment(commentInput.value);
    commentInput.value = "";
};

function addComment(text) {
    const div = document.createElement("div");
    div.textContent = text;
    commentList.appendChild(div);
}
