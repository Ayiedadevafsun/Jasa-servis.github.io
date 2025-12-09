// random404.js
(function(){
  var designs = [

    // ===== DESAIN 1 =====
    `
    <style>
      body { margin:0; font-family: monospace; background:#000; color:#0ff; text-align:center; }
      h1 { font-size:80px; animation:glitch 1s infinite; }
      @keyframes glitch {
        0% { text-shadow: 2px 0 red, -2px 0 blue; }
        50% { text-shadow: -2px 0 red, 2px 0 blue; }
        100% { text-shadow: 2px 0 red, -2px 0 blue; }
      }
      a { color:#0ff; text-decoration:none; border:1px solid #0ff; padding:10px 20px; display:inline-block; margin-top:20px; }
      a:hover { background:#0ff; color:#000; }
    </style>
    <div style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center;">
      <h1>404</h1>
      <p>Halaman tidak ditemukan...</p>
      <a href="/">Kembali ke Beranda</a>
    </div>
    `,

    // ===== DESAIN 2 =====
    `
    <style>
      body { margin:0; font-family: 'Courier New', monospace; text-align:center; padding-top:50px; }
      h1 { font-size:60px; }
      #typeErr { font-size:20px; white-space:pre; margin-top:10px; }
      a { display:inline-block; margin-top:25px; padding:10px 20px; border:1px solid #222; text-decoration:none; }
      a:hover { color:#007BFF; }
    </style>
    <h1>404</h1>
    <p id="typeErr"></p>
    <a href="/">Back to Home</a>
    <script>
      var txt="Oops... halaman yang kamu cari tidak ada.";
      var i=0;
      function typeRun(){ if(i<txt.length){ document.getElementById('typeErr').textContent+=txt.charAt(i++); setTimeout(typeRun,50); } }
      typeRun();
    </script>
    `,

    // ===== DESAIN 3 =====
    `
    <style>
      body { margin:0; text-align:center; padding-top:80px; font-family:sans-serif; }
      h1 { font-size:70px; margin-bottom:10px; }
      .bar-container { width:80%; max-width:400px; height:10px; background:#ddd; margin:20px auto; border-radius:10px; overflow:hidden; }
      .bar { height:100%; width:0%; background:#ff0066; }
      a { padding:10px 20px; border:1px solid #ff0066; color:#ff0066; text-decoration:none; display:inline-block; margin-top:20px; }
    </style>
    <h1>404</h1>
    <p>Memuat halaman... gagal!</p>
    <div class="bar-container"><div class="bar" id="bar404"></div></div>
    <a href="/">Kembali</a>
    <script>
      var w=0;
      function loadBar(){ var bar=document.getElementById('bar404'); if(w<=100){ bar.style.width=w+'%'; w+=5; setTimeout(loadBar,70); } }
      loadBar();
    </script>
    `
  ];

  // pilih random
  var idx = Math.floor(Math.random()*designs.length);
  document.write(designs[idx]);

})();
