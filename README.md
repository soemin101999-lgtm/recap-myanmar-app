<!DOCTYPE html>
<html lang="my">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>RECAP MYANMAR</title>
<style>
*{box-sizing:border-box}
body{
  margin:0;
  font-family:Arial,sans-serif;
  background:#101522;
  color:white;
  padding:20px;
}
.container{max-width:500px;margin:auto}
h1{color:#36d6b0;text-align:center}
.subtitle{text-align:center;color:#bbb}
.panel{
  background:#202a3c;
  padding:20px;
  border-radius:16px;
  margin-top:20px;
}
label{display:block;margin:15px 0 8px}
input,select,button{
  width:100%;
  padding:13px;
  border-radius:10px;
  border:0;
  font-size:16px;
}
button{
  background:#20c997;
  color:#101522;
  font-weight:bold;
  margin-top:15px;
}
#status{color:#36d6b0;text-align:center}
video{width:100%;margin-top:15px;border-radius:10px}
.note{color:#bbb;font-size:13px;line-height:1.6}
</style>
</head>
<body>
<div class="container">
  <h1>🎬 RECAP MYANMAR</h1>
  <p class="subtitle">ဗီဒီယိုကို မြန်မာဘာသာဖြင့် ပြန်ဆိုရန်</p>

  <div class="panel">
    <h3>📁 ဗီဒီယိုရွေးချယ်ရန်</h3>
    <label>ဗီဒီယိုဖိုင်</label>
    <input type="file" id="videoFile" accept="video/*">
    <video id="preview" controls hidden></video>

    <label>ဘာသာပြန်မည့်ဘာသာ</label>
    <select id="language">
      <option value="my">မြန်မာဘာသာ</option>
    </select>

    <label>အသံအမျိုးအစား</label>
    <select id="voice">
      <option>အမျိုးသားအသံ</option>
      <option>အမျိုးသမီးအသံ</option>
    </select>

    <button onclick="startApp()">စတင်လုပ်ဆောင်မည်</button>
    <p id="status">ဗီဒီယိုဖိုင်ကို ရွေးချယ်ပါ။</p>
    <p class="note">
      သတိပြုရန် - ယခုအဆင့်တွင် ဗီဒီယိုရွေးချယ်ခြင်းနှင့်
      ကြည့်ရှုခြင်းကိုသာ စမ်းသပ်နိုင်ပါသည်။
      မြန်မာအသံပြောင်းရန် AI ဝန်ဆောင်မှုနှင့် Server
      ချိတ်ဆက်ရန် လိုအပ်ပါသည်။
    </p>
  </div>
</div>

<script>
const fileInput=document.getElementById("videoFile");
const preview=document.getElementById("preview");

fileInput.addEventListener("change",function(){
  const file=this.files[0];
  if(file){
    preview.src=URL.createObjectURL(file);
    preview.hidden=false;
    document.getElementById("status").textContent=
      "ဗီဒီယိုရွေးချယ်ပြီးပါပြီ။";
  }
});

function startApp(){
  if(!fileInput.files.length){
    document.getElementById("status").textContent=
      "ဗီဒီယိုဖိုင် အရင်ရွေးချယ်ပါ။";
    return;
  }
  document.getElementById("status").textContent=
    "ဗီဒီယိုကို ရွေးချယ်ပြီးပါပြီ။ AI အသံပြောင်းစနစ် ချိတ်ဆက်ရန် လိုအပ်ပါသည်။";
}
</script>
</body>
</html>
