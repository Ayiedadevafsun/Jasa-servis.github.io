document.addEventListener("DOMContentLoaded", function () {

  const tools = [
    "encrypt",
    "marketplace",
    "about-us",
    "contact-us",
    "privacy-policy",
    "disclaimer",
    "terms",
    "dmca",
    "box",
    "parse"
  ];

  const titles = {
    "encrypt": "Encrypt HTML",
    "marketplace": "Marketplace Generator",
    "about-us": "About Us",
    "contact-us": "Contact Us",
    "privacy-policy": "Privacy Policy",
    "disclaimer": "Disclaimer",
    "terms": "Terms & Conditions",
    "dmca": "DMCA",
    "box": "Box Copy",
    "parse": "Parse/Escape HTML"
  };

  const params = new URLSearchParams(window.location.search);
  const current = params.get("id");
  // sembunyikan semua content
  tools.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.style.display = "none";
  });

  // kalau belum pilih tool
  if(!current || !tools.includes(current)){
    
    document.getElementById("welcome-page").style.display = "block";
    document.getElementById("toolNav").style.display = "none";

    return;
  }

  // sembunyikan welcome
  document.getElementById("welcome-page").style.display = "none";

  // tampilkan content
  const active = document.getElementById(current);
  if(active){
    active.style.display = "block";
  }

  // tampilkan nav
  document.getElementById("toolNav").style.display = "flex";

  // title
  document.title = titles[current] + " - Tool";

  // index
  const index = tools.indexOf(current);

  // prev next
  const prev = tools[(index - 1 + tools.length) % tools.length];
  const next = tools[(index + 1) % tools.length];

  // tombol
  document.getElementById("prevBtn").href = "?id=" + prev;
  document.getElementById("nextBtn").href = "?id=" + next;

});