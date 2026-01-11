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
