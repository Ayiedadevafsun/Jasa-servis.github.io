// Tentukan random
var idx = Math.floor(Math.random() * 2);

// ===== Pilihan 404 =====
if(idx===0){
  // === GLITCH ===
  document.write('<style>body{margin:0;font-family:monospace;background:#000;color:#0ff;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;}h1{font-size:80px;}a{color:#0ff;text-decoration:none;border:1px solid #0ff;padding:10px 20px;margin-top:20px;}a:hover{background:#0ff;color:#000;}</style>');
  document.write('<h1 id="glitch404">404</h1><p>Halaman tidak ditemukan...</p><a href="/">Kembali ke Beranda</a>');
  var g=document.getElementById('glitch404'); var t=0;
  setInterval(function(){t++; g.style.textShadow=(Math.sin(t/2)*6|0)+'px 0 red,'+(-(Math.sin(t/3)*6|0))+'px 0 blue';},120);
}else{
  // === TYPEWRITER ===
  document.write('<style>body{margin:0;font-family:\'Courier New\',monospace;text-align:center;padding-top:50px;}h1{font-size:60px;}#typeErr{font-size:20px;white-space:pre;margin-top:10px;}a{display:inline-block;margin-top:25px;padding:10px 20px;border:1px solid #222;text-decoration:none;}a:hover{color:#007BFF;}</style>');
  document.write('<h1>404</h1><p id="typeErr"></p><a href="/">Back to Home</a>');
  var el=document.getElementById('typeErr'); var txt="Oops... halaman yang kamu cari tidak ada."; var i=0;
  (function run(){ if(i<txt.length){ el.textContent+=txt.charAt(i++); setTimeout(run,50); }})();
}
