(function(){

  const box = document.getElementById("random-404");
  if(!box) return;

  const designs = [

    /* ========== 1. GLITCH ========== */
    {
      html: `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:90vh;color:#0ff;font-family:monospace;text-align:center;">
          <h1 id="glx" style="font-size:60px;">404</h1>
          <p>Halaman tidak ditemukan...</p>
          <a href="/" style="margin-top:20px;padding:10px 20px;border:1px solid #0ff;color:#0ff;text-decoration:none;">Kembali</a>
        </div>
      `,
      init(root){
        const h = root.querySelector("#glx");
        let t = 0;
        h._int = setInterval(()=>{
          t++;
          h.style.textShadow =
            (Math.sin(t/2)*6|0)+"px 0 red," +
            (-(Math.sin(t/3)*6|0))+"px 0 blue";
        },100);
      },
      destroy(root){
        const h = root.querySelector("#glx");
        if(h && h._int) clearInterval(h._int);
      }
    },

    /* ========== 2. TYPEWRITER ========== */
    {
      html: `
        <div style="padding:40px;font-family:'Courier New',monospace;text-align:center;">
          <h1 style="font-size:50px;">404</h1>
          <p id="typo" style="font-size:20px;white-space:pre;"></p>
          <a href="/" style="margin-top:25px;display:inline-block;padding:10px 20px;border:1px solid #222;">Back</a>
        </div>
      `,
      init(root){
        const el = root.querySelector("#typo");
        let txt = "Oops... halaman yang kamu cari tidak ada.";
        let i = 0;
        function go(){
          if(i < txt.length){
            el.textContent += txt.charAt(i++);
            setTimeout(go, 50);
          }
        }
        go();
      },
      destroy(){}
    },

    /* ========== 3. LOADING BAR ========== */
    {
      html: `
        <div style="padding-top:80px;text-align:center;">
          <h1 style="font-size:70px;">404</h1>
          <p>Memuat halaman... gagal!</p>
          <div style="width:80%;max-width:400px;height:10px;background:#ddd;margin:20px auto;border-radius:10px;overflow:hidden;">
            <div id="barx" style="height:100%;width:0%;background:#ff0066;"></div>
          </div>
          <a href="/" style="padding:10px 20px;border:1px solid #ff0066;color:#ff0066;">Kembali</a>
        </div>
      `,
      init(root){
        const b = root.querySelector("#barx");
        let w = 0;
        b._int = setInterval(()=>{
          if(w >= 100) return clearInterval(b._int);
          b.style.width = (w += 4) + "%";
        }, 80);
      },
      destroy(root){
        const b = root.querySelector("#barx");
        if(b && b._int) clearInterval(b._int);
      }
    },

    /* ========== 4. EMOJI SHAKE ========== */
    {
      html: `
        <div style="padding-top:50px;text-align:center;font-family:sans-serif;">
          <div id="emo" style="font-size:70px;">😢</div>
          <h2>404 - Halaman Ga Ketemu</h2>
          <p>Mungkin sudah dipindahkan atau dihapus...</p>
          <a href="/" style="padding:10px 20px;border:1px solid #333;">Balik</a>
        </div>
      `,
      init(root){
        const e = root.querySelector("#emo");
        e._int = setInterval(()=>{
          e.style.transform =
            "translateX(" + ((Math.random()*8-4)|0) + "px)";
        }, 120);
      },
      destroy(root){
        const e = root.querySelector("#emo");
        if(e && e._int) clearInterval(e._int);
      }
    },

    /* ========== 5. MATRIX RAIN ========== */
    {
      html: `
        <div style="height:100vh;background:black;color:#0f0;overflow:hidden;position:relative;">
          <canvas id="mx" style="width:100%;height:100%;"></canvas>
          <div style="position:absolute;top:40%;width:100%;text-align:center;">
            <h1 style="font-size:50px;color:#0f0;">404</h1>
            <p>Halaman tidak ditemukan...</p>
          </div>
        </div>
      `,
      init(root){
        const c = root.querySelector("#mx"),
              ctx = c.getContext("2d");

        c.width = window.innerWidth;
        c.height = window.innerHeight;

        const chars = "ABCDEF123456789@$%&*".split(""),
              font = 12,
              cols = Math.floor(c.width / font),
              drops = Array(cols).fill(1);

        function draw(){
          ctx.fillStyle = "rgba(0,0,0,0.06)";
          ctx.fillRect(0,0,c.width,c.height);

          ctx.fillStyle = "#0f0";
          ctx.font = font + "px monospace";

          for(let i=0;i<drops.length;i++){
            const text = chars[Math.floor(Math.random()*chars.length)];
            ctx.fillText(text, i*font, drops[i]*font);

            if(drops[i]*font > c.height && Math.random() > 0.975)
              drops[i] = 0;

            drops[i]++;
          }
          c._raf = requestAnimationFrame(draw);
        }
        draw();
      },
      destroy(root){
        const c = root.querySelector("#mx");
        if(c && c._raf) cancelAnimationFrame(c._raf);
      }
    }

  ];

  const i = Math.floor(Math.random() * designs.length);
  box.innerHTML = designs[i].html;

  try {
    designs[i].init(box);
  } catch(e){}

})();
