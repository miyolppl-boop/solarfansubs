const q = new URLSearchParams(location.search);
const id = q.get("id");
const c = parseInt(q.get("c"));
const ch = data[id].chapters.find(x => x.num === c);

const r = document.getElementById("reader");
ch.pages.forEach(p => {
  const img = document.createElement("img");
  img.src = p;
  r.appendChild(img);
});

function prev() {
  location.href = `chapter.html?id=${id}&c=${c-1}`;
}
function next() {
  location.href = `chapter.html?id=${id}&c=${c+1}`;
}
