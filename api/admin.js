// Login page - GET /api/admin
module.exports = async (req, res) => {
  const cookies = req.headers.cookie || '';
  const url = (req.url || '').split('?')[0];
  
  // Si ya esta logueado, ir al panel
  if (cookies.includes('admin_sess=ok')) {
    return res.writeHead(302, { 'Location': '/api/admin-panel' }).end();
  }
  
  // Logout
  if (url === '/logout') {
    res.setHeader('Set-Cookie', 'admin_sess=; Path=/; Max-Age=0; HttpOnly');
    return res.writeHead(302, { 'Location': '/api/admin' }).end();
  }
  
  const error = url.includes('error') ? '<div class="error">ACCESO DENEGADO</div>' : '';
  
  return res.setHeader('Content-Type', 'text/html').status(200).send(`<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>🌟 ADMIN CASTLE 🌟</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
body{
  font-family:'Press Start 2P',monospace;
  background:#5c94fc;
  color:#fff;
  min-height:100vh;
  image-rendering:pixelated;
  background-image:
    radial-gradient(circle at 10% 20%, #fff 2px, transparent 3px),
    radial-gradient(circle at 90% 80%, #fff 2px, transparent 3px),
    linear-gradient(180deg, #5c94fc 0%, #87ceeb 40%, #228b22 40%, #228b22 100%);
  background-size: 200px 200px, 300px 300px, 100% 100%;
  position:relative;
  overflow:hidden;
}
.clouds{
  position:absolute;
  width:100%;
  height:150px;
  top:50px;
  z-index:0;
}
.cloud{
  position:absolute;
  background:#fff;
  border-radius:50%;
  opacity:0.9;
}
.cloud1{width:100px;height:40px;top:20px;left:10%;border-radius:50% 50% 0 0}
.cloud2{width:80px;height:35px;top:40px;left:25%;}
.cloud3{width:120px;height:45px;top:10px;left:40%;}
.cloud4{width:90px;height:38px;top:30px;left:60%;}
.cloud5{width:110px;height:42px;top:15px;left:75%;}
.ground{
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  height:60px;
  background:#8b4513;
  border-top:4px solid #d2691e;
  z-index:0;
}
.castle{
  position:absolute;
  bottom:60px;
  left:50%;
  transform:translateX(-50%);
  width:200px;
  height:120px;
  z-index:0;
}
.castle-wall{
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  height:80px;
  background:#8b4513;
  border:4px solid #d2691e;
}
.castle-tower-left{
  position:absolute;
  bottom:80px;
  left:0;
  width:40px;
  height:50px;
  background:#8b4513;
  border:4px solid #d2691e;
  border-bottom:none;
}
.castle-tower-right{
  position:absolute;
  bottom:80px;
  right:0;
  width:40px;
  height:50px;
  background:#8b4513;
  border:4px solid #d2691e;
  border-bottom:none;
}
.castle-top{
  position:absolute;
  top:-15px;
  left:50%;
  transform:translateX(-50%);
  width:60px;
  height:20px;
  background:#ffd700;
  border:2px solid #b8860b;
}
.box{
  position:relative;
  z-index:1;
  background:#8b4513;
  border:4px solid #d2691e;
  padding:30px;
  width:340px;
  text-align:center;
  box-shadow:8px 8px 0 #5d2906;
  margin:0 auto;
  margin-top:100px;
}
.box::before{
  content:"";
  position:absolute;
  top:-20px;
  left:50%;
  transform:translateX(-50%);
  width:60px;
  height:20px;
  background:#ffd700;
  border:2px solid #b8860b;
  box-shadow:2px 2px 0 #8b6508;
}
h2{
  font-size:16px;
  color:#ffd700;
  text-shadow:3px 3px 0 #b8860b;
  letter-spacing:3px;
  margin-bottom:5px;
}
.sub{
  color:#fff;
  font-size:8px;
  margin-bottom:25px;
  text-shadow:1px 1px 0 #000;
}
input{
  width:100%;
  padding:12px;
  margin:8px 0;
  background:#000;
  border:2px solid #ffd700;
  color:#00ff00;
  font-family:'Press Start 2P',monospace;
  font-size:9px;
  outline:none;
  caret-color:#ffd700;
  text-shadow:0 0 5px #00ff00;
}
input::placeholder{
  color:#ffd700;
  font-size:7px;
}
input:focus{
  border-color:#ff69b4;
  box-shadow:0 0 10px #ff69b4;
  color:#ff69b4;
  text-shadow:0 0 5px #ff69b4;
}
button{
  width:100%;
  padding:14px;
  background:#ffd700;
  border:3px solid #8b4513;
  color:#8b4513;
  font-family:'Press Start 2P',monospace;
  font-size:10px;
  cursor:pointer;
  margin-top:15px;
  text-shadow:1px 1px 0 #fff;
  box-shadow:6px 6px 0 #5d2906;
  letter-spacing:2px;
  transition:all 0.1s;
}
button:hover{
  background:#8b4513;
  color:#ffd700;
  box-shadow:0 0 15px #ffd700;
}
button:active{
  transform:translate(3px,3px);
  box-shadow:3px 3px 0 #5d2906;
}
.error{
  color:#ff4444;
  font-size:8px;
  margin-top:10px;
  text-shadow:0 0 8px #ff4444;
}
</style></head><body>
<div class="clouds">
  <div class="cloud cloud1"></div>
  <div class="cloud cloud2"></div>
  <div class="cloud cloud3"></div>
  <div class="cloud cloud4"></div>
  <div class="cloud cloud5"></div>
</div>
<div class="ground"></div>

<div class="castle">
  <div class="castle-tower-left"></div>
  <div class="castle-tower-right"></div>
  <div class="castle-wall"></div>
  <div class="castle-top"></div>
</div>

<div class="box">
<h2>🌟 ADMIN CASTLE 🌟</h2>
<div class="sub">WELCOME TO THE MUSHROOM KINGDOM</div>
<form method="POST" action="/api/admin-auth">
<input type="text" name="user" placeholder="USERNAME" autocomplete="off">
<input type="password" name="pass" placeholder="PASSWORD">
<button type="submit">[ ENTER CASTLE ]</button>
</form>
${error}
</div></body></html>`);
};