function loadRandom404(){
  const check = document.getElementById("random-404");
  if(!check){
    setTimeout(loadRandom404, 50);
    return;
  }

  const container = check;

  const designs = [

    {
      html: `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:90vh;color:#0ff;font-family:monospace;text-align:center;">
        <h1 id="gltx" style="font-size:60px;">404</h1>
        <p>Halaman tidak ditemukan...</p>
        <a href="/" style="margin-top:20px;padding:10px 20px;border:1px solid #0ff;color:#0ff;text-decoration:none;">Kembali ke Beranda</a>
      </div>
      `,
      init(root){
        const el = root.querySelector("#gltx");
        let t = 0;
        el._int = setInterval(()=>{
          t++;
          el.style.textShadow =
            (Math.sin(t/2)*6|0)+"px 0 red," +
            (-(Math.sin(t/3)*6|0))+"px 0 blue";
        },120);
      }
    },

    {
      html: `
      <div style="padding:40px;font-family:'Courier New',monospace;text-align:center;">
        <h1 style="font-size:50px;">404</h1>
        <p id="typeErr" style="font-size:20px;white-space:pre;"></p>
        <a href="/" style="display:inline-block;margin-top:25px;padding:10px 20px;border:1px solid #222;text-decoration:none;">
          Back to Home
        </a>
      </div>
      `,
      init(root){
        let text = "Oops... halaman yang kamu cari tidak ada.";
        let i = 0;
        const el = root.querySelector("#typeErr");
        function run(){
          if(i < text.length){
            el.textContent += text.charAt(i++);
            setTimeout(run, 40 + (Math.random()*40|0));
          }
        }
        run();
      }
    },

    {
      html: `
      <div style="text-align:center;padding-top:80px;">
        <h1 style="font-size:70px;margin-bottom:10px;">404</h1>
        <p>Memuat halaman... gagal!</p>
        <div style="width:80%;max-width:400px;height:10px;background:#ddd;margin:20px auto;border-radius:10px;overflow:hidden;">
          <div id="bar404" style="height:100%;width:0%;background:#ff0066;"></div>
        </div>
        <a href="/" style="padding:10px 20px;border:1px solid #ff0066;color:#ff0066;text-decoration:none;">Kembali</a>
      </div>
      `,
      init(root){
        const bar = root.querySelector("#bar404");
        let w = 0;
        function run(){
          if(w <= 100){
            bar.style.width = w+"%";
            w += 5;
            setTimeout(run, 70);
          }
        }
        run();
      }
    }

  ];

  const idx = Math.floor(Math.random()*designs.length);
  container.innerHTML = designs[idx].html;

  try{ designs[idx].init(container); }catch(e){}
}

document.addEventListener("DOMContentLoaded", loadRandom404);
