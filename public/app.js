const tools=[
["word","📝","Word Counter","Count words and characters.","Text"],
["case","🔤","Case Converter","Convert text case.","Text"],
["spaces","↔️","Remove Extra Spaces","Clean extra spaces.","Text"],
["reverse","🔁","Reverse Text","Reverse text instantly.","Text"],
["sort","↕️","Sort Lines","Sort lines A–Z.","Text"],
["duplicate","🧹","Remove Duplicate Lines","Remove repeated lines.","Text"],
["slug","🔗","Text to Slug","Create a URL slug.","Text"],
["base64","🔐","Base64 Encoder","Encode or decode Base64.","Developer"],
["json","{}","JSON Formatter","Format JSON.","Developer"],
["url","🌐","URL Encoder","Encode or decode URLs.","Developer"],
["uuid","🆔","UUID Generator","Generate UUIDs.","Developer"],
["password","🔑","Password Generator","Generate passwords.","Security"],
["percent","％","Percentage Calculator","Calculate percentages.","Calculators"],
["discount","🏷️","Discount Calculator","Calculate discount price.","Calculators"],
["gst","₹","GST Calculator","Calculate GST.","Calculators"],
["emi","🏦","EMI Calculator","Calculate monthly EMI.","Calculators"],
["interest","💰","Simple Interest","Calculate simple interest.","Calculators"],
["age","🎂","Age Calculator","Calculate your age.","Calculators"],
["bmi","⚖️","BMI Calculator","Calculate BMI.","Calculators"],
["tip","🍽️","Tip Calculator","Calculate tip and total.","Calculators"],
["temp","🌡️","Temperature Converter","Convert temperatures.","Converters"],
["time","⏱️","Time Converter","Convert time units.","Converters"],
["bytes","💾","Bytes Converter","Convert data sizes.","Converters"],
["random","🎲","Random Number","Generate random numbers.","Generators"],
["color","🎨","Color Picker","Pick a color.","Generators"],
["qr","▦","QR Code Generator","Create QR codes.","Generators"],
["imagecompress","🗜️","Image Compressor","Compress images.","Images"],
["imageresize","📐","Image Resizer","Resize images.","Images"],
["grayscale","⚫","Grayscale Image","Make images grayscale.","Images"],
["textpdf","📄","Text to PDF","Create printable PDF text.","Documents"],
["timestamp","🕒","Unix Timestamp","Convert Unix timestamps.","Developer"],
["strength","🛡️","Password Strength","Check password strength.","Security"],
["countdown","⏳","Countdown Calculator","Calculate remaining time.","Calculators"]
];

const $=s=>document.querySelector(s);
const grid=$("#grid"),cats=$("#cats");
let active="All",query="";

function esc(x){
 return String(x??"").replace(/[&<>"']/g,m=>({
 "&":"&amp;","<":"&lt;",">":"&gt;",
 '"':"&quot;","'":"&#39;"
 }[m]));
}

function renderCats(){
 const cs=["All",...new Set(tools.map(x=>x[4]))];
 cats.innerHTML=cs.map(c=>
 `<button class="${active===c?"active":""}" onclick="active='${c}';render()">${c}</button>`
 ).join("");
}

function render(){
 const list=tools.filter(t=>
  (active==="All"||t[4]===active) &&
  (t[2]+" "+t[3]).toLowerCase().includes(query.toLowerCase())
 );
 $("#count").textContent=list.length+" tools";
 grid.innerHTML=list.map(t=>`
 <article class="tool" onclick="openTool('${t[0]}')">
   <div class="ico">${t[1]}</div>
   <h3>${t[2]}</h3>
   <p>${t[3]}</p>
   <div class="cat">${t[4]}</div>
 </article>`).join("");
 renderCats();
}

function field(id,label,type="text"){
 return `<label>${label}</label>
 <input id="${id}" class="field" type="${type}">`;
}

function openTool(id){
 const t=tools.find(x=>x[0]===id);
 $("#modalTitle").textContent=t[1]+" "+t[2];
 $("#modalDesc").textContent=t[3];
 $("#modalBody").innerHTML=ui(id);
 $("#modal").classList.remove("hidden");
}

function ui(id){
 if(["word","case","spaces","reverse","sort","duplicate","slug"].includes(id))
 return `<textarea id="txt" class="field" rows="8" placeholder="Enter your text..."></textarea>
 <div class="tool-actions">
 <button onclick="runText('${id}')">Run</button>
 <button onclick="copyOut()">Copy</button>
 </div><div id="result" class="result"></div>`;

 if(id==="base64")
 return `<textarea id="txt" class="field" rows="6"></textarea>
 <div class="tool-actions">
 <button onclick="b64(1)">Encode</button>
 <button onclick="b64(0)">Decode</button>
 </div><div id="result" class="result"></div>`;

 if(id==="json")
 return `<textarea id="txt" class="field" rows="8" placeholder='{"name":"John"}'></textarea>
 <div class="tool-actions">
 <button onclick="jsonTool(1)">Format</button>
 <button onclick="jsonTool(0)">Minify</button>
 </div><div id="result" class="result"></div>`;

 if(id==="url")
 return `<textarea id="txt" class="field" rows="5"></textarea>
 <div class="tool-actions">
 <button onclick="urlTool(1)">Encode</button>
 <button onclick="urlTool(0)">Decode</button>
 </div><div id="result" class="result"></div>`;

 if(id==="uuid")
 return `<button class="btn" onclick="out(crypto.randomUUID())">Generate UUID</button>
 <div id="result" class="result"></div>`;

 if(id==="password")
 return `${field("plen","Length","number")}
 <button class="btn" onclick="makePass()">Generate</button>
 <div id="result" class="result"></div>`;

 if(id==="percent")
 return `${field("a","Value","number")}
 ${field("b","Percent","number")}
 <button class="btn" onclick="out((+a.value*+b.value/100).toFixed(2))">Calculate</button>
 <div id="result" class="result"></div>`;

 if(id==="discount")
 return `${field("price","Original Price","number")}
 ${field("disc","Discount %","number")}
 <button class="btn" onclick="discount()">Calculate</button>
 <div id="result" class="result"></div>`;

 if(id==="gst")
 return `${field("price","Amount","number")}
 ${field("gstp","GST %","number")}
 <div class="tool-actions">
 <button onclick="gst(1)">Add GST</button>
 <button onclick="gst(0)">Remove GST</button>
 </div><div id="result" class="result"></div>`;

 if(id==="emi")
 return `${field("loan","Loan Amount","number")}
 ${field("rate","Annual Interest %","number")}
 ${field("months","Months","number")}
 <button class="btn" onclick="emi()">Calculate EMI</button>
 <div id="result" class="result"></div>`;

 if(id==="interest")
 return `${field("principal","Principal","number")}
 ${field("irate","Rate %","number")}
 ${field("years","Years","number")}
 <button class="btn" onclick="interest()">Calculate</button>
 <div id="result" class="result"></div>`;

 if(id==="age")
 return `${field("dob","Date of Birth","date")}
 <button class="btn" onclick="age()">Calculate Age</button>
 <div id="result" class="result"></div>`;

 if(id==="bmi")
 return `${field("weight","Weight kg","number")}
 ${field("height","Height cm","number")}
 <button class="btn" onclick="bmi()">Calculate BMI</button>
 <div id="result" class="result"></div>`;

 if(id==="tip")
 return `${field("bill","Bill Amount","number")}
 ${field("tipv","Tip %","number")}
 ${field("people","People","number")}
 <button class="btn" onclick="tip()">Calculate</button>
 <div id="result" class="result"></div>`;

 if(id==="temp")
 return `${field("tempv","Temperature","number")}
 <select id="from" class="field">
 <option>Celsius</option><option>Fahrenheit</option><option>Kelvin</option>
 </select>
 <button class="btn" onclick="temp()">Convert</button>
 <div id="result" class="result"></div>`;

 if(id==="time")
 return `${field("tv","Value","number")}
 <select id="tu" class="field">
 <option value="1">Seconds</option>
 <option value="60">Minutes</option>
 <option value="3600">Hours</option>
 <option value="86400">Days</option>
 </select>
 <button class="btn" onclick="time()">Convert</button>
 <div id="result" class="result"></div>`;

 if(id==="bytes")
 return `${field("bv","Bytes","number")}
 <button class="btn" onclick="bytes()">Convert</button>
 <div id="result" class="result"></div>`;

 if(id==="random")
 return `${field("min","Minimum","number")}
 ${field("max","Maximum","number")}
 <button class="btn" onclick="randomNum()">Generate</button>
 <div id="result" class="result"></div>`;

 if(id==="color")
 return `<input id="color" type="color" value="#635bff" class="field">
 <button class="btn" onclick="out(color.value)">Copy HEX</button>
 <div id="result" class="result"></div>`;

 if(id==="qr")
 return `${field("qrtext","Text or URL")}
 <button class="btn" onclick="qr()">Generate QR</button>
 <div id="result" class="result"></div>`;

 if(id==="timestamp")
 return `<input id="date" class="field" type="datetime-local">
 <button class="btn" onclick="timestamp()">Convert</button>
 <div id="result" class="result"></div>`;

 if(id==="strength")
 return `${field("pass","Password","password")}
 <button class="btn" onclick="strength()">Check</button>
 <div id="result" class="result"></div>`;

 if(id==="countdown")
 return `<input id="target" class="field" type="datetime-local">
 <button class="btn" onclick="countdown()">Calculate</button>
 <div id="result" class="result"></div>`;

 if(["imagecompress","imageresize","grayscale"].includes(id))
 return `<input id="img" class="field" type="file" accept="image/*">
 <button class="btn" onclick="imageTool('${id}')">Process Image</button>
 <div id="result" class="result"></div>`;

 if(id==="textpdf")
 return `<textarea id="txt" class="field" rows="10"></textarea>
 <button class="btn" onclick="window.print()">Print / Save as PDF</button>
 <div id="result" class="result">Use your browser's Print → Save as PDF.</div>`;
}

function out(x){
 $("#result").textContent=x;
}

function copyOut(){
 navigator.clipboard.writeText($("#result").textContent);
}

function runText(id){
 let x=$("#txt").value;
 let r=x;
 if(id==="word"){
  let words=x.trim()?x.trim().split(/\s+/).length:0;
  r=`Words: ${words}\nCharacters: ${x.length}\nLines: ${x?x.split("\n").length:0}`;
 }
 if(id==="case")r=x.toUpperCase()+"\n\n"+x.toLowerCase()+"\n\n"+x.replace(/\w\S*/g,w=>w[0].toUpperCase()+w.slice(1).toLowerCase());
 if(id==="spaces")r=x.replace(/\s+/g," ").trim();
 if(id==="reverse")r=[...x].reverse().join("");
 if(id==="sort")r=x.split("\n").sort().join("\n");
 if(id==="duplicate")r=[...new Set(x.split("\n"))].join("\n");
 if(id==="slug")r=x.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
 out(r);
}

function b64(enc){
 try{out(enc?btoa(unescape(encodeURIComponent(txt.value))):decodeURIComponent(escape(atob(txt.value))))}
 catch(e){out("Invalid Base64")}
}

function jsonTool(format){
 try{let j=JSON.parse(txt.value);out(format?JSON.stringify(j,null,2):JSON.stringify(j))}
 catch(e){out("Invalid JSON")}
}

function urlTool(enc){
 try{out(enc?encodeURIComponent(txt.value):decodeURIComponent(txt.value))}
 catch(e){out("Invalid URL encoding")}
}

function makePass(){
 let n=Math.max(4,+plen.value||12),s="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%";
 let r="";
 for(let i=0;i<n;i++)r+=s[Math.floor(Math.random()*s.length)];
 out(r);
}

function discount(){
 let p=+price.value,d=+disc.value;
 out(`Savings: ${(p*d/100).toFixed(2)}\nFinal Price: ${(p-p*d/100).toFixed(2)}`);
}

function gst(add){
 let p=+price.value,g=+gstp.value;
 out(add?`GST: ${(p*g/100).toFixed(2)}\nTotal: ${(p*(1+g/100)).toFixed(2)}`:
 `Original Amount: ${(p/(1+g/100)).toFixed(2)}\nGST: ${(p-p/(1+g/100)).toFixed(2)}`);
}

function emi(){
 let P=+loan.value,R=+rate.value/1200,N=+months.value;
 let E=R?P*R*Math.pow(1+R,N)/(Math.pow(1+R,N)-1):P/N;
 out(`Monthly EMI: ${E.toFixed(2)}\nTotal Payment: ${(E*N).toFixed(2)}`);
}

function interest(){
 let p=+principal.value,r=+irate.value,t=+years.value;
 let i=p*r*t/100;
 out(`Interest: ${i.toFixed(2)}\nTotal: ${(p+i).toFixed(2)}`);
}

function age(){
 let d=new Date(dob.value),n=new Date();
 let y=n.getFullYear()-d.getFullYear();
 if(n<new Date(n.getFullYear(),d.getMonth(),d.getDate()))y--;
 out(`Age: ${y} years`);
}

function bmi(){
 let w=+weight.value,h=+height.value/100;
 let b=w/(h*h);
 out(`BMI: ${b.toFixed(2)}`);
}

function tip(){
 let b=+bill.value,t=+tipv.value,p=Math.max(1,+people.value||1);
 let v=b*t/100;
 out(`Tip: ${v.toFixed(2)}\nTotal: ${(b+v).toFixed(2)}\nPer Person: ${((b+v)/p).toFixed(2)}`);
}

function temp(){
 let v=+tempv.value,r;
 if(from.value==="Celsius")r=v*9/5+32;
 if(from.value==="Fahrenheit")r=(v-32)*5/9;
 if(from.value==="Kelvin")r=v-273.15;
 out(r.toFixed(2));
}

function time(){
 let s=+tv.value*+tu.value;
 out(`${s} seconds\n${s/60} minutes\n${s/3600} hours`);
}

function bytes(){
 let b=+bv.value;
 out(`KB: ${(b/1024).toFixed(2)}\nMB: ${(b/1048576).toFixed(2)}\nGB: ${(b/1073741824).toFixed(2)}`);
}

function randomNum(){
 let a=+min.value,b=+max.value;
 out(Math.floor(Math.random()*(b-a+1))+a);
}

function qr(){
 let v=encodeURIComponent(qrtext.value);
 out("");
 $("#result").innerHTML=`<img alt="QR Code" style="max-width:250px" src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${v}">`;
}

function timestamp(){
 let d=new Date(date.value);
 out(Math.floor(d.getTime()/1000));
}

function strength(){
 let p=pass.value,s=0;
 if(p.length>=8)s++;
 if(/[A-Z]/.test(p))s++;
 if(/[a-z]/.test(p))s++;
 if(/[0-9]/.test(p))s++;
 if(/[^A-Za-z0-9]/.test(p))s++;
 out(["Very Weak","Weak","Medium","Strong","Very Strong","Excellent"][s]);
}

function countdown(){
 let d=new Date(target.value)-Date.now();
 if(d<0)return out("Date has passed");
 let days=Math.floor(d/86400000);
 let hrs=Math.floor(d%86400000/3600000);
 let min=Math.floor(d%3600000/60000);
 let sec=Math.floor(d%60000/1000);
 out(`${days} days ${hrs} hours ${min} minutes ${sec} seconds`);
}

function imageTool(type){
 let file=img.files[0];
 if(!file)return out("Please select an image");
 let image=new Image();
 image.onload=()=>{
  let c=document.createElement("canvas"),ctx=c.getContext("2d");
  c.width=image.width;
  c.height=image.height;
  ctx.drawImage(image,0,0);
  if(type==="imageresize"){
   let w=800;
   c.height=image.height*w/image.width;
   c.width=w;
   ctx.drawImage(image,0,0,w,c.height);
  }
  if(type==="grayscale"){
   let data=ctx.getImageData(0,0,c.width,c.height);
   for(let i=0;i<data.data.length;i+=4){
    let g=.299*data.data[i]+.587*data.data[i+1]+.114*data.data[i+2];
    data.data[i]=data.data[i+1]=data.data[i+2]=g;
   }
   ctx.putImageData(data,0,0);
  }
  c.toBlob(b=>{
   let a=document.createElement("a");
   a.href=URL.createObjectURL(b);
   a.download="processed-image.jpg";
   a.textContent="Download processed image";
   a.className="btn";
   $("#result").innerHTML="";
   $("#result").appendChild(a);
  },"image/jpeg",type==="imagecompress"?.6:.9);
 };
 image.src=URL.createObjectURL(file);
}

$("#search").oninput=e=>{
 query=e.target.value;
 render();
};

$("#themeBtn").onclick=()=>{
 document.body.classList.toggle("dark");
 localStorage.theme=document.body.classList.contains("dark")?"dark":"light";
};

if(localStorage.theme==="dark")document.body.classList.add("dark");

$("#close").onclick=()=>{
 $("#modal").classList.add("hidden");
};

$("#modal").onclick=e=>{
 if(e.target.id==="modal")$("#modal").classList.add("hidden");
};

$("#year").textContent=new Date().getFullYear();

render();
