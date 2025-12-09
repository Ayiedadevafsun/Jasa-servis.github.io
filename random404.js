(function () {

  // --- LIST HTML DESAIN DALAM BENTUK STRING ---
  var designs = [

    // ========== DESAIN 1 ==========
    `
    <div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:90vh;color:#0ff;font-family:monospace;text-align:center;'>
      <h1 id='gltx' style='font-size:60px;'>404</h1>
      <p>Halaman tidak ditemukan...</p>
      <a href='/' style='margin-top:20px;padding:10px 20px;border:1px solid #0ff;color:#0ff;text-decoration:none;'>Kembali</a>
    </div>

    <script>
      let t=0;
      setInterval(()=>{
        t++;
        const el=document.getElementById("gltx");
        if(el){
          el.style.textShadow=
            (Math.sin(t/2)*6|0)+"px 0 red,"+
            (-(Math.sin(t/3)*6|0))+"px 0 blue";
        }
      },120);
    </script>
    `,

    // ========== DESAIN 2 ==========
    `
    <div style='padding:40px;font-family:Courier New,monospace;text-align:center;'>
      <h1 style='font-size:50px;'>404</h1>
      <p id='typeErr' style='font-size:20px;white-space:pre;'></p>
      <a href='/' style='display:inline-block;margin-top:25px;padding:10px 20px;border:1px solid #222;text-decoration:none;'>
        Back to Home
      </a>
    </div>

    <script>
      let txt="Oops... halaman yang kamu cari tidak ada.";
      let i=0;
      function runType(){
        const el=document.getElementById("typeErr");
        if(!el) return setTimeout(runType,50);
        if(i < txt.length){
          el.textContent+=txt.charAt(i++);
          setTimeout(runType, 60);
        }
      }
      runType();
    </script>
    `,

    // ========== DESAIN 3 ==========
    `
    <div style='text-align:center;padding-top:80px;'>
      <h1 style='font-size:70px;margin-bottom:10px;'>404</h1>
      <p>Memuat halaman... gagal!</p>

      <div style='width:80%;max-width:400px;height:10px;background:#ddd;margin:20px auto;border-radius:10px;overflow:hidden;'>
        <div id='bar404' style='height:100%;width:0%;background:#ff0066;'></div>
      </div>

      <a href='/' style='padding:10px 20px;border:1px solid #ff0066;color:#ff0066;text-decoration:none;'>Kembali</a>
    </div>

    <script>
      let w=0;
      function loadBar(){
        const bar=document.getElementById("bar404");
        if(!bar) return setTimeout(loadBar,50);
        w+=5;
        bar.style.width=w+"%";
        if(w < 100) setTimeout(loadBar,70);
      }
      loadBar();
    </script>
    `

  ];

  // Pilih random
  var idx = Math.floor(Math.random() * designs.length);

  // Tulis langsung ke dokumen agar pasti muncul
  document.write(designs[idx]);

})();
