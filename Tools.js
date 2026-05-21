const TOOLS = {

  "about-us": createAboutTool({
    title: "About Us Generator",
    color: "#3498db",
    button: "Generate About Us",
    result: "hasilAbout",
    action: "generateAbout()"
  }),

  "contact-us": createContactTool({
    title: "Contact Us Generator",
    color: "#e67e22",
    button: "Generate Contact Us",
    result: "hasilContact",
    action: "generateContact()"
  }),

  "terms": createTermsTool({
    title: "Terms & Conditions Generator",
    color: "#8e44ad",
    button: "Generate Terms",
    result: "hasilTerms",
    action: "generateTerms()"
  }),

  "privacy-policy": createPpTool({
    title: "Privacy Policy Generator",
    color: "#2ecc71",
    button: "Generate Privacy Policy",
    result: "hasilPP",
    action: "generatePP()"
  })

};



/* =========================
ABOUT TOOL
========================= */

function createAboutTool(data){

return `

<div class="tool-box">

<h2>${data.title}</h2>

<input type="text" id="about_nama" placeholder="Nama Situs">
<input type="text" id="about_url" placeholder="URL Situs">
<input type="text" id="about_owner" placeholder="Nama Pemilik">
<input type="email" id="about_email" placeholder="Email">

<select id="about_language">
<option value="id">🇮🇩 Indonesia</option>
<option value="en">🇺🇸 English</option>
</select>

<button
style="background:${data.color}"
onclick="${data.action}">
${data.button}
</button>

<textarea
id="${data.result}"
placeholder="Hasil generate..."
></textarea>

<button
class="copy-btn"
onclick="copyText('${data.result}')">
Copy
</button>

</div>

`;

}



/* =========================
CONTACT TOOL
========================= */

function createContactTool(data){

return `

<div class="tool-box">

<h2>${data.title}</h2>

<input type="text" id="contact_nama" placeholder="Nama Website">
<input type="text" id="contact_alamat" placeholder="Alamat">
<input type="email" id="contact_email" placeholder="Email">
<input type="text" id="contact_wa" placeholder="WhatsApp">

<select id="contact_language">
<option value="id">🇮🇩 Indonesia</option>
<option value="en">🇺🇸 English</option>
</select>

<button
style="background:${data.color}"
onclick="${data.action}">
${data.button}
</button>

<textarea
id="${data.result}"
placeholder="Hasil generate..."
></textarea>

<button
class="copy-btn"
onclick="copyText('${data.result}')">
Copy
</button>

</div>

`;

}



/* =========================
TERMS TOOL
========================= */

function createTermsTool(data){

return `

<div class="tool-box">

<h2>${data.title}</h2>

<input type="text" id="terms_nama" placeholder="Nama Website">
<input type="text" id="terms_url" placeholder="URL Website">
<input type="email" id="terms_email" placeholder="Email">

<select id="terms_language">
<option value="id">🇮🇩 Indonesia</option>
<option value="en">🇺🇸 English</option>
</select>

<button
style="background:${data.color}"
onclick="${data.action}">
${data.button}
</button>

<textarea
id="${data.result}"
placeholder="Hasil generate..."
></textarea>

<button
class="copy-btn"
onclick="copyText('${data.result}')">
Copy
</button>

</div>

`;

}



/* =========================
PRIVACY POLICY TOOL
========================= */

function createPpTool(data){

return `

<div class="tool-box">

<h2>${data.title}</h2>

<input type="text" id="pp_nama" placeholder="Nama Website">
<input type="text" id="pp_url" placeholder="URL Website">
<input type="email" id="pp_email" placeholder="Email">

<select id="pp_language">
<option value="id">🇮🇩 Indonesia</option>
<option value="en">🇺🇸 English</option>
</select>

<button
style="background:${data.color}"
onclick="${data.action}">
${data.button}
</button>

<textarea
id="${data.result}"
placeholder="Hasil generate..."
></textarea>

<button
class="copy-btn"
onclick="copyText('${data.result}')">
Copy
</button>

</div>

`;

}



/* =========================
STYLE
========================= */

const STYLE = `

<style>

.tool-box{
max-width:700px;
margin:auto;
padding:15px;
font-family:Arial,sans-serif;
}

.tool-box input,
.tool-box textarea,
.tool-box select{
width:100%;
padding:12px;
margin:8px 0;
border-radius:10px;
border:1px solid #ccc;
box-sizing:border-box;
font-size:15px;
}

.tool-box textarea{
height:260px;
resize:none;
}

.tool-box button{
width:100%;
padding:12px;
margin:5px 0;
border:none;
border-radius:10px;
background:linear-gradient(135deg,#0099ff,#00c896);
color:#fff;
cursor:pointer;
font-size:15px;
}

.tool-box button:hover{
opacity:.9;
}

</style>

`;

document.head.insertAdjacentHTML(
"beforeend",
STYLE
);



/* =========================
GENERATE ABOUT
========================= */

function generateAbout(){

const nama =
document.getElementById("about_nama").value;

const url =
document.getElementById("about_url").value;

const owner =
document.getElementById("about_owner").value;

const email =
document.getElementById("about_email").value;

const lang =
document.getElementById("about_language").value;

let hasil = "";

if(lang === "id"){

hasil = `
ABOUT US

Selamat datang di ${nama}

Website:
${url}

Dimiliki oleh:
${owner}

Kontak:
${email}

Terima kasih telah mengunjungi website kami.
`;

}else{

hasil = `
ABOUT US

Welcome to ${nama}

Website:
${url}

Owned by:
${owner}

Contact:
${email}

Thank you for visiting our website.
`;

}

document.getElementById("hasilAbout").value =
hasil;

}



/* =========================
GENERATE CONTACT
========================= */

function generateContact(){

const nama =
document.getElementById("contact_nama").value;

const alamat =
document.getElementById("contact_alamat").value;

const email =
document.getElementById("contact_email").value;

const wa =
document.getElementById("contact_wa").value;

const lang =
document.getElementById("contact_language").value;

let hasil = "";

if(lang === "id"){

hasil = `
CONTACT US

Nama Website:
${nama}

Alamat:
${alamat}

Email:
${email}

WhatsApp:
${wa}
`;

}else{

hasil = `
CONTACT US

Website:
${nama}

Address:
${alamat}

Email:
${email}

WhatsApp:
${wa}
`;

}

document.getElementById("hasilContact").value =
hasil;

}



/* =========================
GENERATE TERMS
========================= */

function generateTerms(){

const nama =
document.getElementById("terms_nama").value;

const url =
document.getElementById("terms_url").value;

const email =
document.getElementById("terms_email").value;

const lang =
document.getElementById("terms_language").value;

let hasil = "";

if(lang === "id"){

hasil = `
TERMS & CONDITIONS

Dengan menggunakan website ${nama},
Anda menyetujui semua syarat
dan ketentuan yang berlaku.

Website:
${url}

Kontak:
${email}
`;

}else{

hasil = `
TERMS & CONDITIONS

By using ${nama},
you agree to all applicable
terms and conditions.

Website:
${url}

Contact:
${email}
`;

}

document.getElementById("hasilTerms").value =
hasil;

}



/* =========================
GENERATE PRIVACY POLICY
========================= */

function generatePP(){

const nama =
document.getElementById("pp_nama").value;

const url =
document.getElementById("pp_url").value;

const email =
document.getElementById("pp_email").value;

const lang =
document.getElementById("pp_language").value;

let hasil = "";

if(lang === "id"){

hasil = `
PRIVACY POLICY

Kami menghargai privasi pengguna.

Website:
${nama}

URL:
${url}

Email:
${email}
`;

}else{

hasil = `
PRIVACY POLICY

We value user privacy.

Website:
${nama}

URL:
${url}

Email:
${email}
`;

}

document.getElementById("hasilPP").value =
hasil;

}



/* =========================
COPY TEXT
========================= */

function copyText(id){

const teks =
document.getElementById(id).value;

navigator.clipboard.writeText(teks);

alert("Berhasil di copy!");

}
