const grid = document.getElementById("seriesGrid");
const q = new URLSearchParams(location.search);
const id = q.get("id");

if (grid) {
  for (let k in data) {
    const d = document.createElement("div");
    d.className = "card";
    d.innerHTML = data[k].title;
    d.onclick = () => location.href = `series.html?id=${k}`;
    grid.appendChild(d);
  }
}

if (id && document.getElementById("chapters")) {
  document.getElementById("title").innerText = data[id].title;
  data[id].chapters.forEach(c => {
    const a = document.createElement("a");
    a.href = `chapter.html?id=${id}&c=${c.num}`;
    a.innerText = `Bölüm ${c.num}`;
    document.getElementById("chapters").appendChild(a);
  });
}
// === THEME TOGGLE ===
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  const saved = localStorage.getItem("theme");
  if (saved === "light") document.body.classList.add("light");

  themeBtn.onclick = () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark"
    );
  };
}
// === SEARCH ===
const search = document.getElementById("search");
if (search && grid) {
  search.addEventListener("input", () => {
    grid.innerHTML = "";
    for (let k in data) {
      if (data[k].title.toLowerCase().includes(search.value.toLowerCase())) {
        const d = document.createElement("div");
        d.className = "card";
        d.innerHTML = data[k].title;
        d.onclick = () => location.href = `series.html?id=${k}`;
        grid.appendChild(d);
      }
    }
  });
}
// === SHOW LAST READ ===
if (id && document.getElementById("chapters")) {
  const last = localStorage.getItem(`last_${id}`);
  if (last) {
    const info = document.createElement("p");
    info.innerText = `Son okunan bölüm: ${last}`;
    document.getElementById("chapters").prepend(info);
  }
}
