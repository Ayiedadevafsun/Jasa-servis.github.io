const encryptedCreatorName = "QXlp";
  function verifyCreator() {
    const storedCreator = localStorage.getItem('creatorHash');
    if (storedCreator !== encryptedCreatorName) {
      alert("Nama pembuat telah diubah! Script tidak akan berfungsi.");
      return false;
    }
    return true;
  }

  function convert() {
    if (!verifyCreator()) return;

    var ele1 = document.getElementById("somewhere");
    var replaced = ele1.value;
    replaced = replaced.replace(/&/ig, "&amp;");
    replaced = replaced.replace(/</ig, "&lt;");
    replaced = replaced.replace(/>/ig, "&gt;");
    replaced = replaced.replace(/"/ig, "&quot;");
    replaced = replaced.replace(/&#177;/ig, "&plusmn;");
    replaced = replaced.replace(/&#169;/ig, "&copy;");
    replaced = replaced.replace(/&#174;/ig, "&reg;");
    replaced = replaced.replace(/ya'll/ig, "ya'll");
    ele1.value = replaced;
  }
  // Fungsi untuk select all dan copy
  function selectAllAndCopy() {
    var textarea = document.getElementById("somewhere");
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Untuk mobile
    document.execCommand("copy");

    alert("Teks berhasil disalin!");
  }

  if (!localStorage.getItem('creatorHash')) {
    localStorage.setItem('creatorHash', encryptedCreatorName);
  }