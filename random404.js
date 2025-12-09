(function(){
  var designs = [

    // ===== GLITCH =====
    function(){
      document.write('<style>body{margin:0;font-family:monospace;background:#000;color:#0ff;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;}h1{font-size:80px;}a{color:#0ff;text-decoration:none;border:1px solid #0ff;padding:10px 20px;margin-top:20px;}a:hover{background:#0ff;color:#000;}</style>');
      document.write('<h1 id="glitch404">404</h1><p>Halaman tidak ditemukan...</p><a href="/">Kembali ke Beranda</a>');
      var g = document.getElementById('glitch404');
      var t=0;
      setInterval(function(){
        t++;
        g.style.textShadow = (Math.sin(t/2)*6|0)+'px 0 red,'+(-(Math.sin(t/3)*6|0))+'px 0 blue';
      },120);
    },

    // ===== TYPEWRITER =====
    function(){
      document.write('<style>body{margin:0;font-family:\'Courier New\',monospace;text-align:center;padding-top:50px;}h1{font-size:60px;}#typeErr{font-size:20px;white-space:pre;margin-top:10px;}a{display:inline-block;margin-top:25px;padding:10px 20px;border:1px solid #222;text-decoration:none;}a:hover{color:#007BFF;}</style>');
      document.write('<h1>404</h1><p id="typeErr"></p><a href="/">Back to Home</a>');
      var el = document.getElementById('typeErr');
      var text = "Oops... halaman yang kamu cari tidak ada.";
      var i=0;
      (function typeRun(){ if(i<text.length){ el.textContent+=text.charAt(i++); setTimeout(typeRun,50); } })();
    },

    // ===== LOADING BAR =====
    function(){
      document.write('<style>body{margin:0;text-align:center;padding-top:80px;font-family:sans-serif;}h1{font-size:70px;margin-bottom:10px;}.bar-container{width:80%;max-width:400px;height:10px;background:#ddd;margin:20px auto;border-radius:10px;overflow:hidden;}.bar{height:100%;width:0%;background:#ff0066;}a{padding:10px 20px;border:1px solid #ff0066;color:#ff0066;text-decoration:none;display:inline-block;margin-top:20px;}</style>');
      document.write('<h1>404</h1><p>Memuat halaman... gagal!</p><div class="bar-container"><div class="bar" id="bar404"></div></div><a href="/">Kembali</a>');
      var bar = document.getElementById('bar404');
      var w=0;
      var intv = setInterval(function(){
        if(w>=100){ clearInterval(intv); return; }
        w+=5;
        bar.style.width=w+'%';
      },80);
    },

    // ===== EMOJI SHAKE =====
    function(){
      document.write('<style>body{margin:0;font-family:sans-serif;text-align:center;padding-top:50px;}#emo404{font-size:70px;}a{padding:10px 20px;border:1px solid #333;text-decoration:none;margin-top:20px;display:inline-block;}</style>');
      document.write('<div id="emo404">😢</div><h2>404 - Halaman Ga Ketemu</h2><p>Mungkin sudah dipindahkan atau dihapus...</p><a href="/">Balik ke Beranda</a>');
      var emo = document.getElementById('emo404');
      setInterval(function(){ emo.style.transform="translateX(" + ((Math.random()*8-4)|0) + "px)"; },120);
    },

    // ===== MATRIX RAIN =====
    function(){
      document.write('<style>body{margin:0;overflow:hidden;background:black;color:#0f0;font-family:monospace;}canvas{display:block;width:100%;height:100vh;}.matrix-text{position:absolute;top:40%;width:100%;text-align:center;color:#0f0;}.matrix-text h1{font-size:50px;}.matrix-text a{color:#0f0;text-decoration:underline;}</style>');
      document.write('<canvas id="matrix404"></canvas><div class="matrix-text"><h1>404</h1><p>Halaman tidak ditemukan...</p><a href="/">Kembali ke Beranda</a></div>');
      var c = document.getElementById('matrix404');
      var ctx = c.getContext('2d');
      c.width=window.innerWidth;c.height=window.innerHeight;
      var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&*".split('');
      var font=12; var cols=Math.floor(c.width/font); var drops=Array(cols).fill(1);
      function draw(){
        ctx.fillStyle="rgba(0,0,0,0.08)"; ctx.fillRect(0,0,c.width,c.height);
        ctx.fillStyle="#0f0"; ctx.font=font+'px monospace';
        for(var i=0;i<drops.length;i++){
          var ch=chars[Math.floor(Math.random()*chars.length)];
          ctx.fillText(ch,i*font,drops[i]*font);
          if(drops[i]*font>c.height && Math.random()>0.975)drops[i]=0;
          drops[i]++;
        }
        requestAnimationFrame(draw);
      }
      draw();
    }

  ];

  // PILIH RANDOM & JALANKAN
  designs[Math.floor(Math.random()*designs.length)]();

})();
