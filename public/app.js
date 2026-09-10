 const tools=[
["word","📝","Word Counter","Count words and characters.","Text"],
["case","🔤","Case Converter","Convert text case.","Text"],
["spaces","↔️","Remove Extra Spaces","Clean extra spaces.","Text"],
["reverse","🔁","Reverse Text","Reverse text instantly.","Text"],
["sort","↕️","Sort Lines","Sort lines A–Z.","Text"],
["duplicate","🧹","Remove Duplicate Lines","Remove repeated lines.","Text"],
["slug","🔗","Text to Slug","Create a URL slug.","Text"],
["trim","✂️","Trim Text","Remove spaces from the beginning and end.","Text"],
["blank","🧹","Remove Blank Lines","Remove empty lines from text.","Text"],
["linescomma","📋","Lines to Comma List","Convert lines into a comma list.","Text"],
["commalines","📋","Comma List to Lines","Convert comma-separated text into lines.","Text"],
["sortnumbers","🔢","Sort Numbers","Sort numbers from low to high.","Text"],
["emails","📧","Extract Emails","Find email addresses in text.","Text"],
["urls","🔗","Extract URLs","Find URLs in text.","Text"],
["chars","🔤","Character Counter","Count characters with and without spaces.","Text"],
["findreplace","🔎","Find & Replace","Find and replace text.","Text"],
["repeat","🔁","Repeat Text","Repeat text multiple times.","Text"],
["binary","💻","Text to Binary","Convert text to binary.","Text"],
["binarytext","💻","Binary to Text","Convert binary to text.","Text"],
["hex","🔢","Text to Hex","Convert text to hexadecimal.","Text"],
["hextext","🔢","Hex to Text","Convert hexadecimal to text.","Text"],
["stats","📊","Text Statistics","Analyze text statistics.","Text"],
["palindrome","🔄","Palindrome Checker","Check whether text is a palindrome.","Text"],
["anagram","🔤","Anagram Checker","Check whether two texts are anagrams.","Text"],
["sortwords","↕️","Sort Words","Sort words alphabetically.","Text"],
["removechars","✂️","Remove Characters","Remove selected characters.","Text"],
["linecount","📏","Line Counter","Count lines in text.","Text"],
["frequency","📊","Word Frequency","Count word frequency.","Text"],
["acronym","🔠","Acronym Generator","Generate an acronym from text.","Text"],
["initials","🔤","Initials Generator","Generate initials from a name or phrase.","Text"],
["reversewords","🔁","Reverse Word Order","Reverse the order of words.","Text"],

["base64","🔐","Base64 Encoder","Encode or decode Base64.","Developer"],
["json","{}","JSON Formatter","Format or minify JSON.","Developer"],
["url","🌐","URL Encoder","Encode or decode URLs.","Developer"],
["html","🧩","HTML Escape","Escape or unescape HTML characters.","Developer"],
["uuid","🆔","UUID Generator","Generate UUIDs.","Developer"],
["hash","🔒","SHA-256 Hash","Generate a SHA-256 hash.","Developer"],
["jsonvalid","✅","JSON Validator","Validate JSON data.","Developer"],
["timestamp","🕒","Unix Timestamp","Convert dates and Unix timestamps.","Developer"],
["jwt","🔑","JWT Decoder","Decode JWT payloads.","Developer"],
["csvjson","📊","CSV to JSON","Convert CSV data to JSON.","Developer"],
["jsoncsv","📊","JSON to CSV","Convert JSON data to CSV.","Developer"],
["htmlpreview","🌐","HTML Preview","Preview HTML code.","Developer"],
["regex","🔎","Regex Escape","Escape special regular-expression characters.","Developer"],
["unicode","🔤","Unicode Inspector","Inspect Unicode characters.","Developer"],
["datetounix","🕒","Date to Unix","Convert a date to Unix time.","Developer"],
["unixtodate","🕒","Unix to Date","Convert Unix time to a date.","Developer"],

["password","🔑","Password Generator","Generate strong passwords.","Security"],
["strength","🛡️","Password Strength","Check password strength.","Security"],

["percent","％","Percentage Calculator","Calculate percentages.","Calculators"],
["discount","🏷️","Discount Calculator","Calculate discount price.","Calculators"],
["gst","₹","GST Calculator","Calculate GST.","Calculators"],
["emi","🏦","EMI Calculator","Calculate monthly EMI.","Calculators"],
["interest","💰","Simple Interest","Calculate simple interest.","Calculators"],
["compound","💰","Compound Interest","Calculate compound interest.","Calculators"],
["age","🎂","Age Calculator","Calculate your age.","Calculators"],
["bmi","⚖️","BMI Calculator","Calculate BMI.","Calculators"],
["tip","🍽️","Tip Calculator","Calculate tip and total.","Calculators"],
["ratio","⚖️","Ratio Calculator","Calculate and simplify ratios.","Calculators"],
["average","📊","Average Calculator","Calculate the average.","Calculators"],
["median","📊","Median Calculator","Calculate the median.","Calculators"],
["gcdlcm","🔢","GCD & LCM Calculator","Calculate GCD and LCM.","Calculators"],
["factorial","❗","Factorial Calculator","Calculate factorials.","Calculators"],
["power","⚡","Power Calculator","Calculate powers.","Calculators"],
["squarecube","²","Square & Cube Calculator","Calculate square and cube values.","Calculators"],
["loaninterest","🏦","Loan Interest Calculator","Calculate total loan interest.","Calculators"],
["percentchange","📈","Percentage Change","Calculate percentage increase or decrease.","Calculators"],
["fraction","½","Fraction Calculator","Calculate fractions.","Calculators"],
["percentof","％","What Percent Is A of B?","Find what percentage one number is of another.","Calculators"],
["markup","💵","Markup Calculator","Calculate markup and selling price.","Calculators"],
["vat","₹","VAT Calculator","Calculate VAT.","Calculators"],
["breakeven","📊","Break-Even Calculator","Calculate break-even point.","Calculators"],
["fuelcost","⛽","Fuel Cost Calculator","Calculate fuel travel cost.","Calculators"],
["salaryhourly","💼","Salary to Hourly Calculator","Convert salary into hourly earnings.","Calculators"],

["unit","📏","Unit Converter","Convert common units.","Converters"],
["temp","🌡️","Temperature Converter","Convert temperatures.","Converters"],
["time","⏱️","Time Converter","Convert time units.","Converters"],
["bytes","💾","Bytes Converter","Convert data sizes.","Converters"],
["roman","🏛️","Roman Numeral Converter","Convert numbers and Roman numerals.","Converters"],
["speed","🚗","Speed Converter","Convert speed units.","Converters"],
["area","📐","Area Converter","Convert area units.","Converters"],
["volume","🧪","Volume Converter","Convert volume units.","Converters"],
["pressure","🎈","Pressure Converter","Convert pressure units.","Converters"],
["energy","⚡","Energy Converter","Convert energy units.","Converters"],
["length","📏","Length Converter","Convert length units.","Converters"],
["weight","⚖️","Weight Converter","Convert weight units.","Converters"],

["dateadd","📅","Date Add/Subtract","Add or subtract days from a date.","Date & Time"],
["datediff","📅","Date Difference","Calculate the difference between two dates.","Date & Time"],
["dayweek","📆","Day of Week","Find the day of the week for a date.","Date & Time"],
["countdown","⏳","Countdown Calculator","Calculate remaining time.","Date & Time"],
["leapyear","📅","Leap Year Checker","Check whether a year is a leap year.","Date & Time"],
["weeknumber","📅","Week Number","Find the week number of a date.","Date & Time"],

["imagecompress","🗜️","Image Compressor","Compress images in your browser.","Images"],
["imageresize","📐","Image Resizer","Resize images quickly.","Images"],
["jpgpng","🖼️","JPG ↔ PNG Converter","Convert JPG and PNG images.","Images"],
["grayscale","⚫","Grayscale Image","Make images grayscale.","Images"],
["imageinfo","ℹ️","Image Info","View image dimensions and file size.","Images"],

["random","🎲","Random Number","Generate random numbers.","Generators"],
["color","🎨","Color Picker","Pick a color.","Generators"],
["qr","▦","QR Code Generator","Create QR codes.","Generators"],
["bulkUUID","🆔","Bulk UUID Generator","Generate multiple UUIDs.","Generators"],
["lorem","📝","Lorem Ipsum Generator","Generate placeholder text.","Generators"],
["randomname","👤","Random Name Generator","Generate random names.","Generators"],
["coin","🪙","Coin Flip","Flip a virtual coin.","Generators"],
["dice","🎲","Dice Roller","Roll virtual dice.","Generators"],
["numberwords","🔢","Number to Words","Convert numbers into words.","Generators"],

["textpdf","📄","Text to PDF","Create printable PDF text.","Documents"],
["datauri","📦","Data URI Generator","Create a Data URI from text.","Documents"],
["filebase64","📁","File to Base64","Convert a file to Base64.","Documents"]
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

if(["word","case","spaces","reverse","sort","duplicate","slug","trim","blank","linescomma","commalines","sortnumbers","emails","urls","chars","findreplace","repeat","binary","binarytext","hex","hextext","stats","palindrome","anagram","sortwords","removechars","linecount","frequency","acronym","initials","reversewords"].includes(id))
return `<textarea id="txt" class="field" rows="8" placeholder="Enter your text..."></textarea>
<div class="tool-actions">
<button onclick="runText('${id}')">Run</button>
<button onclick="copyOut()">Copy</button>
</div>
<div id="result" class="result"></div>`;

if(id==="base64")
return `<textarea id="txt" class="field" rows="6"></textarea>
<div class="tool-actions">
<button onclick="b64(1)">Encode</button>
<button onclick="b64(0)">Decode</button>
</div>
<div id="result" class="result"></div>`;

if(id==="json")
return `<textarea id="txt" class="field" rows="8" placeholder='{"name":"John"}'></textarea>
<div class="tool-actions">
<button onclick="jsonTool(1)">Format</button>
<button onclick="jsonTool(0)">Minify</button>
</div>
<div id="result" class="result"></div>`;

if(id==="url")
return `<textarea id="txt" class="field" rows="5"></textarea>
<div class="tool-actions">
<button onclick="urlTool(1)">Encode</button>
<button onclick="urlTool(0)">Decode</button>
</div>
<div id="result" class="result"></div>`;

if(id==="html")
return `<textarea id="txt" class="field" rows="7"></textarea>
<div class="tool-actions">
<button onclick="htmlTool(1)">Escape</button>
<button onclick="htmlTool(0)">Unescape</button>
</div>
<div id="result" class="result"></div>`;

if(id==="uuid")
return `<button class="btn" onclick="out(crypto.randomUUID())">Generate UUID</button>
<div id="result" class="result"></div>`;

if(id==="hash")
return `<textarea id="txt" class="field" rows="6"></textarea>
<button class="btn" onclick="hashText()">SHA-256 Hash</button>
<div id="result" class="result"></div>`;

if(id==="jsonvalid")
return `<textarea id="txt" class="field" rows="8"></textarea>
<button class="btn" onclick="validateJSON()">Validate JSON</button>
<div id="result" class="result"></div>`;

if(id==="jwt")
return `<textarea id="txt" class="field" rows="6" placeholder="Paste JWT token..."></textarea>
<button class="btn" onclick="jwtDecode()">Decode JWT</button>
<div id="result" class="result"></div>`;

if(id==="csvjson")
return `<textarea id="txt" class="field" rows="8" placeholder="name,age\nJohn,25\nJane,30"></textarea>
<button class="btn" onclick="csvToJson()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="jsoncsv")
return `<textarea id="txt" class="field" rows="8" placeholder='[{"name":"John","age":25}]'></textarea>
<button class="btn" onclick="jsonToCsv()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="htmlpreview")
return `<textarea id="txt" class="field" rows="8" placeholder="<h1>Hello</h1>"></textarea>
<button class="btn" onclick="htmlPreview()">Preview</button>
<div id="result" class="result"></div>`;

if(id==="regex")
return `<textarea id="txt" class="field" rows="6"></textarea>
<button class="btn" onclick="regexEscape()">Escape Regex</button>
<div id="result" class="result"></div>`;

if(id==="unicode")
return `<textarea id="txt" class="field" rows="6"></textarea>
<button class="btn" onclick="unicodeInfo()">Inspect</button>
<div id="result" class="result"></div>`;

if(id==="datetounix")
return `<input id="date" class="field" type="datetime-local">
<button class="btn" onclick="dateToUnix()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="unixtodate")
return `${field("unix","Unix Timestamp","number")}
<button class="btn" onclick="unixToDate()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="password")
return `${field("plen","Length","number")}
<button class="btn" onclick="makePass()">Generate Password</button>
<div id="result" class="result"></div>`;

if(id==="strength")
return `${field("pass","Password","password")}
<button class="btn" onclick="strength()">Check Strength</button>
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
</div>
<div id="result" class="result"></div>`;

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

if(id==="compound")
return `${field("principal","Principal","number")}
${field("irate","Annual Rate %","number")}
${field("years","Years","number")}
${field("frequency","Compounds per Year","number")}
<button class="btn" onclick="compound()">Calculate</button>
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

if(id==="ratio")
return `${field("ratioA","First Number","number")}
${field("ratioB","Second Number","number")}
<button class="btn" onclick="ratioCalc()">Calculate Ratio</button>
<div id="result" class="result"></div>`;

if(id==="average")
return `<textarea id="txt" class="field" rows="5" placeholder="10,20,30,40"></textarea>
<button class="btn" onclick="averageCalc()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="median")
return `<textarea id="txt" class="field" rows="5" placeholder="10,20,30,40"></textarea>
<button class="btn" onclick="medianCalc()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="gcdlcm")
return `${field("numA","First Number","number")}
${field("numB","Second Number","number")}
<button class="btn" onclick="gcdLcm()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="factorial")
return `${field("fact","Number","number")}
<button class="btn" onclick="factorialCalc()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="power")
return `${field("base","Base","number")}
${field("exponent","Exponent","number")}
<button class="btn" onclick="powerCalc()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="squarecube")
return `${field("sq","Number","number")}
<button class="btn" onclick="squareCube()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="loaninterest")
return `${field("loanP","Loan Amount","number")}
${field("loanR","Interest Rate %","number")}
${field("loanY","Years","number")}
<button class="btn" onclick="loanInterest()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="percentchange")
return `${field("oldValue","Old Value","number")}
${field("newValue","New Value","number")}
<button class="btn" onclick="percentChange()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="fraction")
return `${field("fa","First Numerator","number")}
${field("fb","First Denominator","number")}
${field("fc","Second Numerator","number")}
${field("fd","Second Denominator","number")}
<button class="btn" onclick="fractionCalc()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="percentof")
return `${field("part","A","number")}
${field("whole","B","number")}
<button class="btn" onclick="percentOf()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="markup")
return `${field("cost","Cost Price","number")}
${field("markupP","Markup %","number")}
<button class="btn" onclick="markupCalc()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="vat")
return `${field("vatPrice","Amount","number")}
${field("vatP","VAT %","number")}
<button class="btn" onclick="vatCalc()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="breakeven")
return `${field("fixedCost","Fixed Cost","number")}
${field("sellingPrice","Selling Price","number")}
${field("variableCost","Variable Cost","number")}
<button class="btn" onclick="breakEven()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="fuelcost")
return `${field("distance","Distance km","number")}
${field("mileage","Mileage km/L","number")}
${field("fuelprice","Fuel Price / Litre","number")}
<button class="btn" onclick="fuelCost()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="salaryhourly")
return `${field("salary","Salary","number")}
${field("hours","Working Hours / Week","number")}
<button class="btn" onclick="salaryHourly()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="unit")
return `${field("unitv","Value","number")}
<select id="unitfrom" class="field">
<option value="m">Meters</option>
<option value="km">Kilometers</option>
<option value="cm">Centimeters</option>
<option value="ft">Feet</option>
<option value="in">Inches</option>
<option value="mi">Miles</option>
</select>
<button class="btn" onclick="unitConvert()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="temp")
return `${field("tempv","Temperature","number")}
<select id="from" class="field">
<option>Celsius</option>
<option>Fahrenheit</option>
<option>Kelvin</option>
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

if(id==="roman")
return `${field("romanv","Number / Roman Numeral")}
<button class="btn" onclick="romanConvert()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="speed")
return `${field("speedv","Value","number")}
<select id="speedunit" class="field">
<option value="kmh">km/h</option>
<option value="mph">mph</option>
<option value="ms">m/s</option>
<option value="kn">Knots</option>
</select>
<button class="btn" onclick="speedConvert()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="area")
return `${field("areav","Value","number")}
<select id="areaunit" class="field">
<option value="sqm">Square Meter</option>
<option value="sqft">Square Foot</option>
<option value="acre">Acre</option>
<option value="hectare">Hectare</option>
</select>
<button class="btn" onclick="areaConvert()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="volume")
return `${field("volv","Value","number")}
<select id="volunit" class="field">
<option value="liter">Liter</option>
<option value="ml">Milliliter</option>
<option value="gallon">Gallon</option>
<option value="cubicmeter">Cubic Meter</option>
</select>
<button class="btn" onclick="volumeConvert()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="pressure")
return `${field("pressurev","Value","number")}
<select id="pressureunit" class="field">
<option value="pa">Pascal</option>
<option value="bar">Bar</option>
<option value="atm">Atmosphere</option>
<option value="psi">PSI</option>
</select>
<button class="btn" onclick="pressureConvert()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="energy")
return `${field("energyv","Value","number")}
<select id="energyunit" class="field">
<option value="joule">Joule</option>
<option value="kj">Kilojoule</option>
<option value="cal">Calorie</option>
<option value="kcal">Kilocalorie</option>
<option value="kwh">kWh</option>
</select>
<button class="btn" onclick="energyConvert()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="length")
return `${field("lengthv","Value","number")}
<select id="lengthunit" class="field">
<option value="m">Meter</option>
<option value="km">Kilometer</option>
<option value="cm">Centimeter</option>
<option value="mm">Millimeter</option>
<option value="ft">Foot</option>
<option value="in">Inch</option>
</select>
<button class="btn" onclick="lengthConvert()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="weight")
return `${field("weightv","Value","number")}
<select id="weightunit" class="field">
<option value="kg">Kilogram</option>
<option value="g">Gram</option>
<option value="mg">Milligram</option>
<option value="lb">Pound</option>
<option value="oz">Ounce</option>
</select>
<button class="btn" onclick="weightConvert()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="dateadd")
return `${field("dateaddv","Date","date")}
${field("daysadd","Days","number")}
<button class="btn" onclick="dateAdd()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="datediff")
return `${field("date1","Start Date","date")}
${field("date2","End Date","date")}
<button class="btn" onclick="dateDiff()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="dayweek")
return `${field("daydate","Date","date")}
<button class="btn" onclick="dayOfWeek()">Find Day</button>
<div id="result" class="result"></div>`;

if(id==="countdown")
return `<input id="target" class="field" type="datetime-local">
<button class="btn" onclick="countdown()">Calculate</button>
<div id="result" class="result"></div>`;

if(id==="leapyear")
return `${field("yearv","Year","number")}
<button class="btn" onclick="leapYear()">Check</button>
<div id="result" class="result"></div>`;

if(id==="weeknumber")
return `${field("weekdate","Date","date")}
<button class="btn" onclick="weekNumber()">Calculate</button>
<div id="result" class="result"></div>`;

if(["imagecompress","imageresize","jpgpng","grayscale","imageinfo"].includes(id))
return `<input id="img" class="field" type="file" accept="image/*">
<button class="btn" onclick="imageTool('${id}')">Process Image</button>
<div id="result" class="result"></div>`;

if(id==="random")
return `${field("min","Minimum","number")}
${field("max","Maximum","number")}
<button class="btn" onclick="randomNum()">Generate</button>
<div id="result" class="result"></div>`;

if(id==="color")
return `<input id="color" type="color" value="#635bff" class="field">
<button class="btn" onclick="out(color.value)">Show HEX</button>
<div id="result" class="result"></div>`;

if(id==="qr")
return `${field("qrtext","Text or URL")}
<button class="btn" onclick="qr()">Generate QR</button>
<div id="result" class="result"></div>`;

if(id==="bulkUUID")
return `${field("uuidcount","Number of UUIDs","number")}
<button class="btn" onclick="bulkUUID()">Generate</button>
<div id="result" class="result"></div>`;

if(id==="lorem")
return `${field("loremcount","Number of paragraphs","number")}
<button class="btn" onclick="lorem()">Generate</button>
<div id="result" class="result"></div>`;

if(id==="randomname")
return `<button class="btn" onclick="randomName()">Generate Random Name</button>
<div id="result" class="result"></div>`;

if(id==="coin")
return `<button class="btn" onclick="coinFlip()">Flip Coin</button>
<div id="result" class="result"></div>`;

if(id==="dice")
return `${field("dicecount","Number of dice","number")}
<button class="btn" onclick="diceRoll()">Roll Dice</button>
<div id="result" class="result"></div>`;

if(id==="numberwords")
return `${field("numberwordv","Number","number")}
<button class="btn" onclick="numberToWords()">Convert</button>
<div id="result" class="result"></div>`;

if(id==="textpdf")
return `<textarea id="txt" class="field" rows="10"></textarea>
<button class="btn" onclick="window.print()">Print / Save as PDF</button>
<div id="result" class="result">Use your browser's Print → Save as PDF.</div>`;

if(id==="datauri")
return `<textarea id="txt" class="field" rows="7"></textarea>
<button class="btn" onclick="dataURI()">Generate Data URI</button>
<div id="result" class="result"></div>`;

if(id==="filebase64")
return `<input id="file" class="field" type="file">
<button class="btn" onclick="fileBase64()">Convert</button>
<div id="result" class="result"></div>`;

}
function out(x){
 $("#result").textContent=x;
}
// ===== PART 3A START =====

function runText(id){
 let x=$("#txt").value;
 let r=x;

 if(id==="word"){
  let words=x.trim()?x.trim().split(/\s+/).length:0;
  r=`Words: ${words}\nCharacters: ${x.length}\nLines: ${x?x.split("\n").length:0}`;
 }

 if(id==="case"){
  r=x.toUpperCase()+"\n\n"+x.toLowerCase()+"\n\n"+
    x.replace(/\w\S*/g,w=>w[0].toUpperCase()+w.slice(1).toLowerCase());
 }

 if(id==="spaces")r=x.replace(/\s+/g," ").trim();

 if(id==="reverse")r=[...x].reverse().join("");

 if(id==="sort")r=x.split("\n").sort((a,b)=>a.localeCompare(b)).join("\n");

 if(id==="duplicate")r=[...new Set(x.split("\n"))].join("\n");

 if(id==="slug")
  r=x.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

 if(id==="trim")r=x.trim();

 if(id==="blank")
  r=x.split("\n").filter(line=>line.trim()!=="").join("\n");

 if(id==="linescomma")
  r=x.split("\n").map(v=>v.trim()).filter(Boolean).join(", ");

 if(id==="commalines")
  r=x.split(",").map(v=>v.trim()).filter(Boolean).join("\n");

 if(id==="sortnumbers"){
  let n=x.split(/[\s,]+/).filter(Boolean).map(Number);
  r=n.sort((a,b)=>a-b).join("\n");
 }

 if(id==="emails"){
  r=x.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)?.join("\n")||"No emails found";
 }

 if(id==="urls"){
  r=x.match(/https?:\/\/[^\s]+/gi)?.join("\n")||"No URLs found";
 }

 if(id==="chars"){
  let noSpaces=x.replace(/\s/g,"").length;
  r=`Characters: ${x.length}\nWithout spaces: ${noSpaces}`;
 }

 if(id==="findreplace"){
  r=x;
  out(r);
  return;
 }

 if(id==="repeat"){
  r=x;
 }

 if(id==="binary"){
  r=[...x].map(c=>c.charCodeAt(0).toString(2).padStart(8,"0")).join(" ");
 }

 if(id==="binarytext"){
  try{
   r=x.trim().split(/\s+/)
    .map(b=>String.fromCharCode(parseInt(b,2))).join("");
  }catch(e){
   r="Invalid binary";
  }
 }

 if(id==="hex"){
  r=[...x].map(c=>c.charCodeAt(0).toString(16).padStart(2,"0")).join(" ");
 }

 if(id==="hextext"){
  try{
   r=x.trim().split(/\s+/)
    .map(h=>String.fromCharCode(parseInt(h,16))).join("");
  }catch(e){
   r="Invalid hexadecimal";
  }
 }

 if(id==="stats"){
  let words=x.trim()?x.trim().split(/\s+/).length:0;
  let lines=x?x.split("\n").length:0;
  let chars=x.length;
  let noSpaces=x.replace(/\s/g,"").length;
  r=`Words: ${words}\nCharacters: ${chars}\nCharacters without spaces: ${noSpaces}\nLines: ${lines}`;
 }

 if(id==="palindrome"){
  let clean=x.toLowerCase().replace(/[^a-z0-9]/g,"");
  r=clean===clean.split("").reverse().join("")
   ?"Yes, it is a palindrome."
   :"No, it is not a palindrome.";
 }

 if(id==="anagram"){
  let parts=x.split(/\n/);
  if(parts.length<2){
   r="Enter two lines to compare.";
  }else{
   let a=parts[0].toLowerCase().replace(/[^a-z0-9]/g,"").split("").sort().join("");
   let b=parts[1].toLowerCase().replace(/[^a-z0-9]/g,"").split("").sort().join("");
   r=a===b?"Yes, they are anagrams.":"No, they are not anagrams.";
  }
 }

 if(id==="sortwords"){
  r=x.trim().split(/\s+/).filter(Boolean).sort((a,b)=>a.localeCompare(b)).join(" ");
 }

 if(id==="removechars"){
  r=x.replace(/[aeiou]/gi,"");
 }

 if(id==="linecount"){
  r=`Lines: ${x?x.split("\n").length:0}`;
 }

 if(id==="frequency"){
  let words=x.toLowerCase().match(/\b[\w']+\b/g)||[];
  let map={};
  words.forEach(w=>map[w]=(map[w]||0)+1);
  r=Object.entries(map)
   .sort((a,b)=>b[1]-a[1])
   .map(([w,n])=>`${w}: ${n}`)
   .join("\n");
 }

 if(id==="acronym"){
  r=x.trim().split(/\s+/).filter(Boolean).map(w=>w[0].toUpperCase()).join("");
 }

 if(id==="initials"){
  r=x.trim().split(/\s+/).filter(Boolean)
   .map(w=>w[0].toUpperCase()).join("");
 }

 if(id==="reversewords"){
  r=x.trim().split(/\s+/).filter(Boolean).reverse().join(" ");
 }

 out(r);
}

function htmlTool(escapeMode){
 let x=$("#txt").value;

 if(escapeMode){
  out(x.replace(/[&<>"']/g,m=>({
   "&":"&amp;",
   "<":"&lt;",
   ">":"&gt;",
   '"':"&quot;",
   "'":"&#39;"
  }[m])));
 }else{
  let el=document.createElement("textarea");
  el.innerHTML=x;
  out(el.value);
 }
}

async function hashText(){
 let data=new TextEncoder().encode($("#txt").value);
 let hash=await crypto.subtle.digest("SHA-256",data);
 out([...new Uint8Array(hash)]
  .map(b=>b.toString(16).padStart(2,"0")).join(""));
}

function validateJSON(){
 try{
  JSON.parse($("#txt").value);
  out("Valid JSON ✓");
 }catch(e){
  out("Invalid JSON ✗\n"+e.message);
 }
}

function jwtDecode(){
 try{
  let token=$("#txt").value.trim();
  let parts=token.split(".");
  if(parts.length!==3)throw new Error("Invalid JWT");

  let payload=parts[1]
   .replace(/-/g,"+")
   .replace(/_/g,"/");

  while(payload.length%4)payload+="=";

  out(JSON.stringify(JSON.parse(atob(payload)),null,2));
 }catch(e){
  out("Invalid JWT");
 }
}

function csvToJson(){
 try{
  let lines=$("#txt").value.trim().split(/\r?\n/);
  if(!lines.length)return out("No CSV data");

  let headers=lines[0].split(",").map(x=>x.trim());

  let result=lines.slice(1).map(line=>{
   let values=line.split(",");
   let obj={};
   headers.forEach((h,i)=>obj[h]=values[i]?.trim()||"");
   return obj;
  });

  out(JSON.stringify(result,null,2));
 }catch(e){
  out("Invalid CSV");
 }
}

function jsonToCsv(){
 try{
  let data=JSON.parse($("#txt").value);

  if(!Array.isArray(data)||!data.length){
   return out("JSON must be a non-empty array.");
  }

  let headers=[...new Set(data.flatMap(o=>Object.keys(o)))];

  let rows=[
   headers.join(","),
   ...data.map(o=>headers.map(h=>{
    let v=o[h]??"";
    v=String(v).replace(/"/g,'""');
    return `"${v}"`;
   }).join(","))
  ];

  out(rows.join("\n"));
 }catch(e){
  out("Invalid JSON");
 }
}

function htmlPreview(){
 let html=$("#txt").value;

 let win=window.open("","_blank");

 if(!win){
  return out("Please allow pop-ups in your browser.");
 }

 win.document.open();
 win.document.write(html);
 win.document.close();
}

function regexEscape(){
 let x=$("#txt").value;
 out(x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
}

function unicodeInfo(){
 let x=$("#txt").value;

 if(!x){
  return out("Enter some text.");
 }

 let r=[...x].map((c,i)=>{
  let cp=c.codePointAt(0);
  return `${i+1}. ${c} — U+${cp.toString(16).toUpperCase().padStart(4,"0")}`;
 }).join("\n");

 out(r);
}

function dateToUnix(){
 let d=new Date($("#date").value);

 if(isNaN(d.getTime())){
  return out("Invalid date");
 }

 out(Math.floor(d.getTime()/1000));
}

function unixToDate(){
 let n=Number($("#unix").value);

 if(!Number.isFinite(n)){
  return out("Invalid timestamp");
 }

 out(new Date(n*1000).toString());
}

// ===== PART 3A END =====
// ===== PART 3B START =====

function compound(){
 let p=+$("#principal").value;
 let r=+$("#irate").value/100;
 let t=+$("#years").value;
 let n=+$("#frequency").value||1;

 if(p<0||t<0||n<=0){
  return out("Please enter valid values.");
 }

 let amount=p*Math.pow(1+r/n,n*t);
 let interest=amount-p;

 out(`Interest: ${interest.toFixed(2)}
Total Amount: ${amount.toFixed(2)}`);
}

function ratioCalc(){
 let a=+$("#ratioA").value;
 let b=+$("#ratioB").value;

 if(!Number.isFinite(a)||!Number.isFinite(b)||b===0){
  return out("Please enter valid numbers.");
 }

 let g=gcd(Math.abs(a),Math.abs(b));

 out(`Ratio: ${a/g}:${b/g}
GCD: ${g}`);
}

function averageCalc(){
 let values=$("#txt").value
  .split(/[\s,]+/)
  .filter(Boolean)
  .map(Number);

 if(!values.length||values.some(v=>!Number.isFinite(v))){
  return out("Please enter valid numbers.");
 }

 let avg=values.reduce((a,b)=>a+b,0)/values.length;

 out(`Count: ${values.length}
Average: ${avg}`);
}

function medianCalc(){
 let values=$("#txt").value
  .split(/[\s,]+/)
  .filter(Boolean)
  .map(Number);

 if(!values.length||values.some(v=>!Number.isFinite(v))){
  return out("Please enter valid numbers.");
 }

 values.sort((a,b)=>a-b);

 let n=values.length;
 let median=n%2
  ?values[Math.floor(n/2)]
  :(values[n/2-1]+values[n/2])/2;

 out(`Sorted: ${values.join(", ")}
Median: ${median}`);
}

function gcd(a,b){
 while(b){
  let t=a%b;
  a=b;
  b=t;
 }
 return Math.abs(a);
}

function lcm(a,b){
 if(a===0||b===0)return 0;
 return Math.abs(a*b)/gcd(Math.abs(a),Math.abs(b));
}

function gcdLcm(){
 let a=+$("#numA").value;
 let b=+$("#numB").value;

 if(!Number.isFinite(a)||!Number.isFinite(b)){
  return out("Please enter valid numbers.");
 }

 a=Math.trunc(a);
 b=Math.trunc(b);

 out(`GCD: ${gcd(a,b)}
LCM: ${lcm(a,b)}`);
}

function factorialCalc(){
 let n=Math.trunc(+$("#fact").value);

 if(n<0||n>170){
  return out("Enter a whole number from 0 to 170.");
 }

 let result=1;

 for(let i=2;i<=n;i++){
  result*=i;
 }

 out(result);
}

function powerCalc(){
 let a=+$("#base").value;
 let b=+$("#exponent").value;

 if(!Number.isFinite(a)||!Number.isFinite(b)){
  return out("Please enter valid numbers.");
 }

 out(Math.pow(a,b));
}

function squareCube(){
 let n=+$("#sq").value;

 if(!Number.isFinite(n)){
  return out("Please enter a valid number.");
 }

 out(`Square: ${n*n}
Cube: ${n*n*n}`);
}

function loanInterest(){
 let p=+$("#loanP").value;
 let r=+$("#loanR").value;
 let y=+$("#loanY").value;

 if(p<0||r<0||y<0){
  return out("Please enter valid values.");
 }

 let interest=p*r*y/100;

 out(`Interest: ${interest.toFixed(2)}
Total Payment: ${(p+interest).toFixed(2)}`);
}

function percentChange(){
 let oldV=+$("#oldValue").value;
 let newV=+$("#newValue").value;

 if(oldV===0||!Number.isFinite(oldV)||!Number.isFinite(newV)){
  return out("Old value cannot be zero.");
 }

 let change=((newV-oldV)/Math.abs(oldV))*100;

 out(`Change: ${change.toFixed(2)}%
Difference: ${(newV-oldV).toFixed(2)}`);
}

function fractionCalc(){
 let a=+$("#fa").value;
 let b=+$("#fb").value;
 let c=+$("#fc").value;
 let d=+$("#fd").value;

 if(b===0||d===0){
  return out("Denominator cannot be zero.");
 }

 let numerator=a*d+c*b;
 let denominator=b*d;
 let g=gcd(Math.abs(numerator),Math.abs(denominator));

 numerator/=g;
 denominator/=g;

 out(`${numerator}/${denominator}`);
}

function percentOf(){
 let part=+$("#part").value;
 let whole=+$("#whole").value;

 if(whole===0){
  return out("B cannot be zero.");
 }

 out(`${(part/whole*100).toFixed(2)}%`);
}

function markupCalc(){
 let cost=+$("#cost").value;
 let percent=+$("#markupP").value;

 if(cost<0){
  return out("Please enter a valid cost.");
 }

 let markup=cost*percent/100;
 let selling=cost+markup;

 out(`Markup: ${markup.toFixed(2)}
Selling Price: ${selling.toFixed(2)}`);
}

function vatCalc(){
 let amount=+$("#vatPrice").value;
 let rate=+$("#vatP").value;

 let vat=amount*rate/100;

 out(`VAT: ${vat.toFixed(2)}
Total: ${(amount+vat).toFixed(2)}`);
}

function breakEven(){
 let fixed=+$("#fixedCost").value;
 let selling=+$("#sellingPrice").value;
 let variable=+$("#variableCost").value;

 let contribution=selling-variable;

 if(contribution<=0){
  return out("Selling price must be greater than variable cost.");
 }

 let units=fixed/contribution;

 out(`Break-Even Units: ${units.toFixed(2)}
Contribution per Unit: ${contribution.toFixed(2)}`);
}

function fuelCost(){
 let distance=+$("#distance").value;
 let mileage=+$("#mileage").value;
 let price=+$("#fuelprice").value;

 if(mileage<=0){
  return out("Mileage must be greater than zero.");
 }

 let fuel=distance/mileage;
 let cost=fuel*price;

 out(`Fuel Required: ${fuel.toFixed(2)} L
Fuel Cost: ${cost.toFixed(2)}`);
}

function salaryHourly(){
 let salary=+$("#salary").value;
 let hours=+$("#hours").value;

 if(hours<=0){
  return out("Working hours must be greater than zero.");
 }

 let weekly=salary/52;
 let hourly=weekly/hours;

 out(`Weekly Salary: ${weekly.toFixed(2)}
Hourly Salary: ${hourly.toFixed(2)}`);
}

function unitConvert(){
 let value=+$("#unitv").value;
 let unit=$("#unitfrom").value;

 let factors={
  m:1,
  km:1000,
  cm:.01,
  ft:.3048,
  in:.0254,
  mi:1609.344
 };

 let meters=value*factors[unit];

 out(`Meters: ${meters}
Kilometers: ${meters/1000}
Centimeters: ${meters*100}
Feet: ${meters/.3048}
Inches: ${meters/.0254}
Miles: ${meters/1609.344}`);
}

function speedConvert(){
 let value=+$("#speedv").value;
 let unit=$("#speedunit").value;

 let kmh;

 if(unit==="kmh")kmh=value;
 if(unit==="mph")kmh=value*1.609344;
 if(unit==="ms")kmh=value*3.6;
 if(unit==="kn")kmh=value*1.852;

 out(`km/h: ${kmh}
mph: ${kmh/1.609344}
m/s: ${kmh/3.6}
Knots: ${kmh/1.852}`);
}

function areaConvert(){
 let value=+$("#areav").value;
 let unit=$("#areaunit").value;

 let sqm;

 if(unit==="sqm")sqm=value;
 if(unit==="sqft")sqm=value*.09290304;
 if(unit==="acre")sqm=value*4046.8564224;
 if(unit==="hectare")sqm=value*10000;

 out(`Square Meter: ${sqm}
Square Foot: ${sqm/.09290304}
Acre: ${sqm/4046.8564224}
Hectare: ${sqm/10000}`);
}

function volumeConvert(){
 let value=+$("#volv").value;
 let unit=$("#volunit").value;

 let liter;

 if(unit==="liter")liter=value;
 if(unit==="ml")liter=value/1000;
 if(unit==="gallon")liter=value*3.785411784;
 if(unit==="cubicmeter")liter=value*1000;

 out(`Liter: ${liter}
Milliliter: ${liter*1000}
Gallon: ${liter/3.785411784}
Cubic Meter: ${liter/1000}`);
}

function pressureConvert(){
 let value=+$("#pressurev").value;
 let unit=$("#pressureunit").value;

 let pa;

 if(unit==="pa")pa=value;
 if(unit==="bar")pa=value*100000;
 if(unit==="atm")pa=value*101325;
 if(unit==="psi")pa=value*6894.757293168;

 out(`Pascal: ${pa}
Bar: ${pa/100000}
Atmosphere: ${pa/101325}
PSI: ${pa/6894.757293168}`);
}

function energyConvert(){
 let value=+$("#energyv").value;
 let unit=$("#energyunit").value;

 let joule;

 if(unit==="joule")joule=value;
 if(unit==="kj")joule=value*1000;
 if(unit==="cal")joule=value*4.184;
 if(unit==="kcal")joule=value*4184;
 if(unit==="kwh")joule=value*3600000;

 out(`Joule: ${joule}
Kilojoule: ${joule/1000}
Calorie: ${joule/4.184}
Kilocalorie: ${joule/4184}
kWh: ${joule/3600000}`);
}

function lengthConvert(){
 let value=+$("#lengthv").value;
 let unit=$("#lengthunit").value;

 let meter;

 if(unit==="m")meter=value;
 if(unit==="km")meter=value*1000;
 if(unit==="cm")meter=value/100;
 if(unit==="mm")meter=value/1000;
 if(unit==="ft")meter=value*.3048;
 if(unit==="in")meter=value*.0254;

 out(`Meters: ${meter}
Kilometers: ${meter/1000}
Centimeters: ${meter*100}
Millimeters: ${meter*1000}
Feet: ${meter/.3048}
Inches: ${meter/.0254}`);
}

function weightConvert(){
 let value=+$("#weightv").value;
 let unit=$("#weightunit").value;

 let kg;

 if(unit==="kg")kg=value;
 if(unit==="g")kg=value/1000;
 if(unit==="mg")kg=value/1000000;
 if(unit==="lb")kg=value*.45359237;
 if(unit==="oz")kg=value*.028349523125;

 out(`Kilogram: ${kg}
Gram: ${kg*1000}
Milligram: ${kg*1000000}
Pound: ${kg/.45359237}
Ounce: ${kg/.028349523125}`);
}

// ===== PART 3B END =====
// ===== PART 3C START =====

function randomPasswordAdvanced(){
 let length=Math.max(4,Math.min(128,Number($("#advPassLength").value)||16));
 let upper=$("#advUpper").checked;
 let lower=$("#advLower").checked;
 let numbers=$("#advNumbers").checked;
 let symbols=$("#advSymbols").checked;

 let chars="";
 if(upper)chars+="ABCDEFGHJKLMNPQRSTUVWXYZ";
 if(lower)chars+="abcdefghijkmnopqrstuvwxyz";
 if(numbers)chars+="23456789";
 if(symbols)chars+="!@#$%^&*()-_=+[]{}";

 if(!chars)return out("Select at least one character type.");

 let result="";
 let array=new Uint32Array(length);
 crypto.getRandomValues(array);

 for(let i=0;i<length;i++){
  result+=chars[array[i]%chars.length];
 }

 out(result);
}

function dice(){
 let sides=Math.max(2,Number($("#sides").value)||6);
 let result=Math.floor(Math.random()*sides)+1;
 out(`🎲 Result: ${result}`);
}

function coin(){
 out(Math.random()<0.5?"Heads":"Tails");
}

function randomColor(){
 let chars="0123456789ABCDEF";
 let c="#";

 for(let i=0;i<6;i++){
  c+=chars[Math.floor(Math.random()*16)];
 }

 out(c);
 $("#result").style.background=c;
 $("#result").style.color="#fff";
}

function hexToRgb(){
 let value=$("#hexInput").value.trim().replace("#","");

 if(!/^[0-9a-fA-F]{6}$/.test(value)){
  return out("Enter a valid 6-digit HEX color.");
 }

 let r=parseInt(value.substring(0,2),16);
 let g=parseInt(value.substring(2,4),16);
 let b=parseInt(value.substring(4,6),16);

 out(`RGB: rgb(${r}, ${g}, ${b})
Red: ${r}
Green: ${g}
Blue: ${b}`);
}

function rgbToHex(){
 let r=Number($("#red").value);
 let g=Number($("#green").value);
 let b=Number($("#blue").value);

 if([r,g,b].some(v=>!Number.isInteger(v)||v<0||v>255)){
  return out("RGB values must be between 0 and 255.");
 }

 let hex="#"+[r,g,b]
  .map(v=>v.toString(16).padStart(2,"0"))
  .join("")
  .toUpperCase();

 out(hex);
}

function randomInt(){
 let min=Number($("#randomMin").value);
 let max=Number($("#randomMax").value);

 if(!Number.isFinite(min)||!Number.isFinite(max)||min>max){
  return out("Enter a valid minimum and maximum.");
 }

 out(Math.floor(Math.random()*(max-min+1))+min);
}

function dateDifference(){
 let a=new Date($("#dateA").value);
 let b=new Date($("#dateB").value);

 if(isNaN(a)||isNaN(b)){
  return out("Please select both dates.");
 }

 let diff=Math.abs(b-a);
 let days=Math.floor(diff/86400000);
 let hours=Math.floor(diff/3600000);
 let minutes=Math.floor(diff/60000);

 out(`Days: ${days}
Hours: ${hours}
Minutes: ${minutes}`);
}

function addDays(){
 let d=new Date($("#startDate").value);
 let days=Number($("#addDaysValue").value);

 if(isNaN(d)||!Number.isFinite(days)){
  return out("Enter a valid date and number of days.");
 }

 d.setDate(d.getDate()+days);

 out(d.toISOString().slice(0,10));
}

function dayOfWeek(){
 let d=new Date($("#dayDate").value);

 if(isNaN(d)){
  return out("Invalid date.");
 }

 out(d.toLocaleDateString(undefined,{weekday:"long"}));
}

function leapYear(){
 let year=Math.trunc(Number($("#yearInput").value));

 if(!Number.isFinite(year)){
  return out("Enter a valid year.");
 }

 out(year%4===0&&year%100!==0||year%400===0
  ?"Leap Year"
  :"Not a Leap Year");
}

function daysInMonth(){
 let year=Math.trunc(Number($("#monthYear").value));
 let month=Math.trunc(Number($("#monthNumber").value));

 if(!Number.isFinite(year)||month<1||month>12){
  return out("Enter a valid year and month.");
 }

 let days=new Date(year,month,0).getDate();

 out(`${days} days`);
}

function unixNow(){
 out(Math.floor(Date.now()/1000));
}

function millisecondsNow(){
 out(Date.now());
}

function formatDate(){
 let d=new Date($("#formatDate").value);

 if(isNaN(d)){
  return out("Invalid date.");
 }

 out(`Local: ${d.toLocaleString()}
Date: ${d.toLocaleDateString()}
Time: ${d.toLocaleTimeString()}
ISO: ${d.toISOString()}`);
}

function imagePreview(){
 let file=$("#previewImg").files[0];

 if(!file){
  return out("Please select an image.");
 }

 let url=URL.createObjectURL(file);

 $("#result").innerHTML=`
 <img src="${url}" alt="Preview"
 style="max-width:100%;max-height:400px;border-radius:12px;">
 <p>${esc(file.name)}</p>
 `;
}

function imageInfo(){
 let file=$("#infoImg").files[0];

 if(!file){
  return out("Please select an image.");
 }

 let image=new Image();

 image.onload=()=>{
  out(`File: ${file.name}
Type: ${file.type}
Size: ${(file.size/1024).toFixed(2)} KB
Width: ${image.width}px
Height: ${image.height}px`);
 };

 image.src=URL.createObjectURL(file);
}

function downloadCanvas(canvas,name="image.jpg"){
 canvas.toBlob(blob=>{
  if(!blob)return out("Could not create image.");

  let url=URL.createObjectURL(blob);
  let a=document.createElement("a");

  a.href=url;
  a.download=name;
  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(()=>URL.revokeObjectURL(url),1000);
 },"image/jpeg",.9);
}

function imageDownload(type){
 let file=$("#imageFile").files[0];

 if(!file){
  return out("Please select an image.");
 }

 let image=new Image();

 image.onload=()=>{
  let canvas=document.createElement("canvas");
  let ctx=canvas.getContext("2d");

  canvas.width=image.width;
  canvas.height=image.height;

  ctx.drawImage(image,0,0);

  if(type==="png"){
   canvas.toBlob(blob=>{
    let url=URL.createObjectURL(blob);
    let a=document.createElement("a");

    a.href=url;
    a.download="converted-image.png";
    a.click();

    setTimeout(()=>URL.revokeObjectURL(url),1000);
   },"image/png");
  }else{
   downloadCanvas(canvas,"converted-image.jpg");
  }
 };

 image.src=URL.createObjectURL(file);
}

function textDownload(){
 let text=$("#txt").value;

 let blob=new Blob([text],{type:"text/plain;charset=utf-8"});
 let url=URL.createObjectURL(blob);
 let a=document.createElement("a");

 a.href=url;
 a.download="text-file.txt";
 a.click();

 setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function csvDownload(){
 let text=$("#result").textContent;

 if(!text){
  return out("Nothing to download.");
 }

 let blob=new Blob([text],{type:"text/csv;charset=utf-8"});
 let url=URL.createObjectURL(blob);
 let a=document.createElement("a");

 a.href=url;
 a.download="data.csv";
 a.click();

 setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function jsonDownload(){
 let text=$("#result").textContent;

 if(!text){
  return out("Nothing to download.");
 }

 let blob=new Blob([text],{type:"application/json;charset=utf-8"});
 let url=URL.createObjectURL(blob);
 let a=document.createElement("a");

 a.href=url;
 a.download="data.json";
 a.click();

 setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function copyText(text){
 if(navigator.clipboard){
  navigator.clipboard.writeText(text)
   .then(()=>out("Copied ✓"))
   .catch(()=>out("Copy failed."));
 }else{
  out("Clipboard is not supported.");
 }
}

function copyResult(){
 let result=$("#result");

 if(!result){
  return;
 }

 copyText(result.innerText||result.textContent||"");
}

function downloadTextResult(){
 let text=$("#result").innerText||$("#result").textContent||"";

 if(!text.trim()){
  return out("Nothing to download.");
 }

 let blob=new Blob([text],{type:"text/plain;charset=utf-8"});
 let url=URL.createObjectURL(blob);
 let a=document.createElement("a");

 a.href=url;
 a.download="result.txt";
 document.body.appendChild(a);
 a.click();
 a.remove();

 setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function downloadData(content,name,type){
 let blob=new Blob([content],{type});
 let url=URL.createObjectURL(blob);
 let a=document.createElement("a");

 a.href=url;
 a.download=name;
 document.body.appendChild(a);
 a.click();
 a.remove();

 setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function base64File(){
 let file=$("#fileBase64").files[0];

 if(!file){
  return out("Please select a file.");
 }

 let reader=new FileReader();

 reader.onload=()=>{
  let bytes=new Uint8Array(reader.result);
  let binary="";

  for(let i=0;i<bytes.length;i++){
   binary+=String.fromCharCode(bytes[i]);
  }

  out(btoa(binary));
 };

 reader.readAsArrayBuffer(file);
}

function dataUrlInfo(){
 let file=$("#dataFile").files[0];

 if(!file){
  return out("Please select a file.");
 }

 let reader=new FileReader();

 reader.onload=()=>{
  out(reader.result);
 };

 reader.readAsDataURL(file);
}

function textToDataUrl(){
 let text=$("#txt").value;
 let data="data:text/plain;charset=utf-8,"+encodeURIComponent(text);

 out(data);
}

function calculateAspect(){
 let w=Number($("#aspectW").value);
 let h=Number($("#aspectH").value);

 if(w<=0||h<=0){
  return out("Enter valid dimensions.");
 }

 let g=gcd(Math.round(w),Math.round(h));

 out(`Aspect Ratio: ${Math.round(w/g)}:${Math.round(h/g)}
Decimal: ${(w/h).toFixed(4)}`);
}

function resizeByWidth(){
 let w=Number($("#newWidth").value);
 let originalW=Number($("#originalWidth").value);
 let originalH=Number($("#originalHeight").value);

 if(w<=0||originalW<=0||originalH<=0){
  return out("Enter valid dimensions.");
 }

 let h=originalH*w/originalW;

 out(`Width: ${Math.round(w)} px
Height: ${Math.round(h)} px`);
}

function bmiStatus(value){
 if(value<18.5)return"Underweight";
 if(value<25)return"Normal";
 if(value<30)return"Overweight";
 return"Obesity";
}

function bmiDetailed(){
 let w=Number($("#bmiWeight").value);
 let h=Number($("#bmiHeight").value)/100;

 if(w<=0||h<=0){
  return out("Enter valid weight and height.");
 }

 let value=w/(h*h);

 out(`BMI: ${value.toFixed(2)}
Status: ${bmiStatus(value)}`);
}

function calorieEstimate(){
 let weight=Number($("#calWeight").value);
 let height=Number($("#calHeight").value);
 let age=Number($("#calAge").value);
 let gender=$("#calGender").value;
 let activity=Number($("#activity").value);

 if(weight<=0||height<=0||age<=0){
  return out("Enter valid values.");
 }

 let bmr;

 if(gender==="male"){
  bmr=10*weight+6.25*height-5*age+5;
 }else{
  bmr=10*weight+6.25*height-5*age-161;
 }

 let calories=bmr*activity;

 out(`BMR: ${Math.round(bmr)} kcal/day
Estimated daily calories: ${Math.round(calories)} kcal/day`);
}

function textStatsAdvanced(){
 let x=$("#txt").value;

 let words=x.trim()?x.trim().split(/\s+/):[];
 let sentences=x.match(/[.!?]+/g)||[];
 let paragraphs=x.split(/\n\s*\n/).filter(v=>v.trim());

 let letters=(x.match(/[A-Za-z]/g)||[]).length;
 let digits=(x.match(/[0-9]/g)||[]).length;
 let spaces=(x.match(/\s/g)||[]).length;

 out(`Words: ${words.length}
Characters: ${x.length}
Letters: ${letters}
Digits: ${digits}
Spaces: ${spaces}
Sentences: ${sentences.length}
Paragraphs: ${paragraphs.length}`);
}

// ===== PART 3C END =====
// ===== PART 3D START =====

function safeNumber(id,defaultValue=0){
 let el=document.getElementById(id);
 if(!el)return defaultValue;

 let n=Number(el.value);
 return Number.isFinite(n)?n:defaultValue;
}

function showError(message){
 let result=document.getElementById("result");
 if(result){
  result.textContent=message;
 }
}

function downloadCurrentResult(filename="result.txt"){
 let result=document.getElementById("result");

 if(!result){
  return;
 }

 let text=result.innerText||result.textContent||"";

 if(!text.trim()){
  return showError("Nothing to download.");
 }

 downloadData(
  text,
  filename,
  "text/plain;charset=utf-8"
 );
}

function copyCurrentResult(){
 let result=document.getElementById("result");

 if(!result){
  return;
 }

 let text=result.innerText||result.textContent||"";

 if(!text.trim()){
  return showError("Nothing to copy.");
 }

 if(navigator.clipboard){
  navigator.clipboard.writeText(text)
   .then(()=>showError("Copied ✓"))
   .catch(()=>showError("Copy failed. Please copy manually."));
 }else{
  showError("Clipboard is not supported.");
 }
}

function downloadImageFromCanvas(canvas,filename="processed-image.jpg"){
 canvas.toBlob(blob=>{
  if(!blob){
   return showError("Image creation failed.");
  }

  let url=URL.createObjectURL(blob);
  let a=document.createElement("a");

  a.href=url;
  a.download=filename;

  document.body.appendChild(a);
  a.click();
  a.remove();

  setTimeout(()=>{
   URL.revokeObjectURL(url);
  },1000);
 },"image/jpeg",.9);
}

function createCanvasFromImage(file,callback){
 if(!file){
  return showError("Please select an image.");
 }

 let image=new Image();
 let url=URL.createObjectURL(file);

 image.onload=()=>{
  try{
   let canvas=document.createElement("canvas");
   let ctx=canvas.getContext("2d");

   canvas.width=image.width;
   canvas.height=image.height;

   ctx.drawImage(image,0,0);

   callback(canvas,ctx,image);

  }catch(e){
   showError("Image processing failed.");
  }

  URL.revokeObjectURL(url);
 };

 image.onerror=()=>{
  URL.revokeObjectURL(url);
  showError("Could not read this image.");
 };

 image.src=url;
}

function compressSelectedImage(){
 let file=$("#imgCompressFile")?.files?.[0];

 if(!file){
  return showError("Please select an image.");
 }

 let quality=Number($("#compressQuality")?.value||60)/100;

 quality=Math.min(1,Math.max(.1,quality));

 createCanvasFromImage(file,(canvas)=>{
  downloadImageFromCanvas(canvas,"compressed-image.jpg");
 });
}

function grayscaleSelectedImage(){
 let file=$("#grayFile")?.files?.[0];

 if(!file){
  return showError("Please select an image.");
 }

 createCanvasFromImage(file,(canvas,ctx)=>{
  let data=ctx.getImageData(0,0,canvas.width,canvas.height);

  for(let i=0;i<data.data.length;i+=4){
   let r=data.data[i];
   let g=data.data[i+1];
   let b=data.data[i+2];

   let gray=.299*r+.587*g+.114*b;

   data.data[i]=gray;
   data.data[i+1]=gray;
   data.data[i+2]=gray;
  }

  ctx.putImageData(data,0,0);

  downloadImageFromCanvas(canvas,"grayscale-image.jpg");
 });
}

function flipImage(direction){
 let file=$("#flipFile")?.files?.[0];

 if(!file){
  return showError("Please select an image.");
 }

 createCanvasFromImage(file,(canvas,ctx)=>{
  ctx.clearRect(0,0,canvas.width,canvas.height);

  if(direction==="horizontal"){
   ctx.translate(canvas.width,0);
   ctx.scale(-1,1);
  }else{
   ctx.translate(0,canvas.height);
   ctx.scale(1,-1);
  }

  let image=new Image();
  let url=URL.createObjectURL(file);

  image.onload=()=>{
   ctx.drawImage(image,0,0);
   URL.revokeObjectURL(url);

   downloadImageFromCanvas(
    canvas,
    direction+"-flip-image.jpg"
   );
  };

  image.src=url;
 });
}

function rotateImage(degrees){
 let file=$("#rotateFile")?.files?.[0];

 if(!file){
  return showError("Please select an image.");
 }

 let image=new Image();
 let url=URL.createObjectURL(file);

 image.onload=()=>{
  let canvas=document.createElement("canvas");
  let ctx=canvas.getContext("2d");

  let rad=degrees*Math.PI/180;
  let swap=Math.abs(degrees)%180!==0;

  canvas.width=swap?image.height:image.width;
  canvas.height=swap?image.width:image.height;

  ctx.translate(canvas.width/2,canvas.height/2);
  ctx.rotate(rad);

  ctx.drawImage(
   image,
   -image.width/2,
   -image.height/2
  );

  URL.revokeObjectURL(url);

  downloadImageFromCanvas(
   canvas,
   `rotated-${degrees}.jpg`
  );
 };

 image.src=url;
}

function percentDifference(){
 let a=Number($("#diffA").value);
 let b=Number($("#diffB").value);

 if((a+b)===0){
  return showError("Values cannot both be zero.");
 }

 let result=Math.abs(a-b)/((Math.abs(a)+Math.abs(b))/2)*100;

 out(`Percentage Difference: ${result.toFixed(2)}%`);
}

function averageOfThree(){
 let a=Number($("#avgA").value);
 let b=Number($("#avgB").value);
 let c=Number($("#avgC").value);

 if([a,b,c].some(v=>!Number.isFinite(v))){
  return showError("Enter valid numbers.");
 }

 out(`Average: ${((a+b+c)/3).toFixed(2)}`);
}

function calculateProfit(){
 let cost=Number($("#profitCost").value);
 let selling=Number($("#profitSelling").value);

 if(cost<0||selling<0){
  return showError("Enter valid amounts.");
 }

 let profit=selling-cost;
 let percent=cost===0?0:(profit/cost)*100;

 out(`Profit/Loss: ${profit.toFixed(2)}
Percentage: ${percent.toFixed(2)}%
Type: ${profit>=0?"Profit":"Loss"}`);
}

function calculateSalary(){
 let monthly=Number($("#monthlySalary").value);

 if(monthly<0){
  return showError("Enter a valid salary.");
 }

 out(`Monthly: ${monthly.toFixed(2)}
Yearly: ${(monthly*12).toFixed(2)}
Weekly: ${(monthly*12/52).toFixed(2)}
Daily: ${(monthly*12/365).toFixed(2)}`);
}

function calculateAgeDetailed(){
 let value=$("#ageDate")?.value;

 if(!value){
  return showError("Please select your date of birth.");
 }

 let dob=new Date(value+"T00:00:00");
 let now=new Date();

 if(dob>now){
  return showError("Date of birth cannot be in the future.");
 }

 let years=now.getFullYear()-dob.getFullYear();
 let months=now.getMonth()-dob.getMonth();
 let days=now.getDate()-dob.getDate();

 if(days<0){
  months--;
  days+=new Date(
   now.getFullYear(),
   now.getMonth(),
   0
  ).getDate();
 }

 if(months<0){
  years--;
  months+=12;
 }

 out(`Age: ${years} years, ${months} months, ${days} days`);
}

function countdownLive(){
 let input=$("#liveTarget");

 if(!input||!input.value){
  return showError("Please select a target date.");
 }

 let targetTime=new Date(input.value).getTime();

 if(!Number.isFinite(targetTime)){
  return showError("Invalid target date.");
 }

 function update(){
  let diff=targetTime-Date.now();

  if(diff<=0){
   out("🎉 Time is up!");
   return;
  }

  let days=Math.floor(diff/86400000);
  let hours=Math.floor(diff%86400000/3600000);
  let minutes=Math.floor(diff%3600000/60000);
  let seconds=Math.floor(diff%60000/1000);

  out(`${days}d ${hours}h ${minutes}m ${seconds}s`);

  window._countdownTimer=setTimeout(update,1000);
 }

 clearTimeout(window._countdownTimer);
 update();
}

function generateUUIDs(){
 let count=Math.max(
  1,
  Math.min(100,Math.trunc(Number($("#uuidCount").value)||1))
 );

 let list=[];

 for(let i=0;i<count;i++){
  list.push(crypto.randomUUID());
 }

 out(list.join("\n"));
}

function generateNumbers(){
 let count=Math.max(
  1,
  Math.min(1000,Math.trunc(Number($("#numberCount").value)||10))
 );

 let min=Number($("#numberMin").value);
 let max=Number($("#numberMax").value);

 if(!Number.isFinite(min)||!Number.isFinite(max)||min>max){
  return showError("Invalid minimum or maximum.");
 }

 let list=[];

 for(let i=0;i<count;i++){
  list.push(
   Math.floor(Math.random()*(max-min+1))+min
  );
 }

 out(list.join("\n"));
}

function sortNumbersAdvanced(){
 let numbers=$("#numberText").value
  .split(/[\s,]+/)
  .filter(Boolean)
  .map(Number);

 if(!numbers.length||numbers.some(n=>!Number.isFinite(n))){
  return showError("Enter valid numbers.");
 }

 numbers.sort((a,b)=>a-b);

 out(numbers.join("\n"));
}

function removeDuplicateWords(){
 let words=$("#txt").value.split(/\s+/).filter(Boolean);
 let unique=[...new Set(words)];

 out(unique.join(" "));
}

function wordFrequency(){
 let words=$("#txt").value
  .toLowerCase()
  .match(/\b[\w']+\b/g)||[];

 let map=new Map();

 words.forEach(word=>{
  map.set(word,(map.get(word)||0)+1);
 });

 let result=[...map.entries()]
  .sort((a,b)=>b[1]-a[1])
  .map(([word,count])=>`${word}: ${count}`)
  .join("\n");

 out(result||"No words found.");
}

// ===== PART 3D END =====
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
/* =========================
   PART 4A — TEXT TOOLS
   Improved text processing
   ========================= */

function u4Text(id){
  const el = document.getElementById("toolInput");
  return el ? el.value : "";
}

function u4Result(text){
  const box = document.getElementById("output");
  if(box) box.textContent = String(text);
}

function u4NeedText(text){
  if(!text.trim()){
    u4Result("⚠️ कृपया पहले कुछ text लिखें।");
    return false;
  }
  return true;
}

function u4Words(text){
  return text.trim() ? text.trim().split(/\s+/u) : [];
}

/* Word Counter */
function u4WordCounter(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  const words = u4Words(text);
  const chars = [...text].length;
  const noSpace = [...text.replace(/\s/g,"")].length;
  const lines = text ? text.split(/\r?\n/).length : 0;

  u4Result(
`Words: ${words.length}
Characters: ${chars}
Characters without spaces: ${noSpace}
Lines: ${lines}`
  );
}

/* Character Counter */
function u4CharacterCounter(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  u4Result(
`Characters: ${[...text].length}
Without spaces: ${[...text.replace(/\s/g,"")].length}
Letters: ${(text.match(/\p{L}/gu)||[]).length}
Numbers: ${(text.match(/\p{N}/gu)||[]).length}
Spaces: ${(text.match(/\s/g)||[]).length}`
  );
}

/* Remove extra spaces */
function u4ExtraSpaces(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  u4Result(
    text
      .replace(/[ \t]+/g," ")
      .replace(/[ \t]*\n[ \t]*/g,"\n")
      .trim()
  );
}

/* Trim text */
function u4Trim(){
  const text = u4Text();
  if(!u4NeedText(text)) return;
  u4Result(text.trim());
}

/* Remove blank lines */
function u4BlankLines(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  u4Result(
    text
      .split(/\r?\n/)
      .filter(line => line.trim() !== "")
      .join("\n")
  );
}

/* Reverse text */
function u4Reverse(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  u4Result([...text].reverse().join(""));
}

/* Reverse word order */
function u4ReverseWords(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  u4Result(u4Words(text).reverse().join(" "));
}

/* Sort lines */
function u4SortLines(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  const lines = text
    .split(/\r?\n/)
    .map(x => x.trim())
    .filter(Boolean);

  lines.sort((a,b)=>
    a.localeCompare(b,undefined,{
      numeric:true,
      sensitivity:"base"
    })
  );

  u4Result(lines.join("\n"));
}

/* Sort words */
function u4SortWords(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  const words = u4Words(text);

  words.sort((a,b)=>
    a.localeCompare(b,undefined,{
      numeric:true,
      sensitivity:"base"
    })
  );

  u4Result(words.join(" "));
}

/* Remove duplicate lines */
function u4DuplicateLines(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  const seen = new Set();
  const result = [];

  for(const line of text.split(/\r?\n/)){
    const key = line.trim().toLocaleLowerCase();

    if(!seen.has(key)){
      seen.add(key);
      result.push(line);
    }
  }

  u4Result(result.join("\n"));
}

/* Lines to comma list */
function u4LinesComma(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  const result = text
    .split(/\r?\n/)
    .map(x=>x.trim())
    .filter(Boolean)
    .join(", ");

  u4Result(result);
}

/* Comma list to lines */
function u4CommaLines(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  const result = text
    .split(",")
    .map(x=>x.trim())
    .filter(Boolean)
    .join("\n");

  u4Result(result);
}

/* Sort numbers */
function u4SortNumbers(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  const nums = text
    .split(/[\s,]+/)
    .map(Number)
    .filter(Number.isFinite);

  if(!nums.length){
    u4Result("⚠️ कोई valid number नहीं मिला।");
    return;
  }

  nums.sort((a,b)=>a-b);

  u4Result(nums.join("\n"));
}

/* Extract emails */
function u4Emails(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  const matches = text.match(
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
  ) || [];

  u4Result([...new Set(matches)].join("\n") || "कोई email नहीं मिला।");
}

/* Extract URLs */
function u4URLs(){
  const text = u4Text();
  if(!u4NeedText(text)) return;

  const matches = text.match(
    /https?:\/\/[^\s<>"']+/gi
  ) || [];

  u4Result([...new Set(matches)].join("\n") || "कोई URL नहीं मिला।");
}

/* Find & Replace */
function u4FindReplace(){
  const text = u4Text();

  const find =
    document.getElementById("findText")?.value ?? "";

  const replace =
    document.getElementById("replaceText")?.value ?? "";

  if(!u4NeedText(text)) return;

  if(!find){
    u4Result("⚠️ Find वाला text डालें।");
    return;
  }

  u4Result(text.split(find).join(replace));
}

/* Repeat text */
function u4Repeat(){
  const text = u4Text();

  const count = Number(
    document.getElementById("repeatCount")?.value || 1
  );

  if(!u4NeedText(text)) return;

  if(!Number.isInteger(count) || count < 1 || count > 1000){
    u4Result("⚠️ Repeat count 1 से 1000 के बीच होना चाहिए।");
    return;
  }

  u4Result(Array(count).fill(text).join("\n"));
}

/* Palindrome */
function u4Palindrome(){
  const text = u4Text();

  if(!u4NeedText(text)) return;

  const clean = text
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}]/gu,"");

  const reversed = [...clean].reverse().join("");

  u4Result(
    clean === reversed
      ? "✅ यह Palindrome है।"
      : "❌ यह Palindrome नहीं है।"
  );
}

/* Anagram */
function u4Anagram(){
  const a = u4Text();

  const b =
    document.getElementById("anagramText")?.value ?? "";

  if(!u4NeedText(a)) return;

  if(!b.trim()){
    u4Result("⚠️ दूसरा text डालें।");
    return;
  }

  const normalize = s =>
    [...s.toLocaleLowerCase()]
      .filter(c=>/[\p{L}\p{N}]/u.test(c))
      .sort()
      .join("");

  u4Result(
    normalize(a) === normalize(b)
      ? "✅ दोनों Anagram हैं।"
      : "❌ दोनों Anagram नहीं हैं।"
  );
}

/* Line Counter */
function u4LineCounter(){
  const text = u4Text();

  if(!u4NeedText(text)) return;

  const lines = text.split(/\r?\n/);

  u4Result(
`Total lines: ${lines.length}
Non-empty lines: ${lines.filter(x=>x.trim()).length}`
  );
}

/* Word Frequency */
function u4WordFrequency(){
  const text = u4Text();

  if(!u4NeedText(text)) return;

  const words = text
    .toLocaleLowerCase()
    .match(/[\p{L}\p{N}]+/gu) || [];

  const map = new Map();

  for(const word of words){
    map.set(word,(map.get(word)||0)+1);
  }

  const result = [...map.entries()]
    .sort((a,b)=>b[1]-a[1])
    .map(([word,count])=>`${word}: ${count}`)
    .join("\n");

  u4Result(result || "कोई word नहीं मिला।");
}

/* Acronym */
function u4Acronym(){
  const text = u4Text();

  if(!u4NeedText(text)) return;

  const result = u4Words(text)
    .map(word=>[...word][0])
    .join("")
    .toUpperCase();

  u4Result(result);
}

/* Initials */
function u4Initials(){
  const text = u4Text();

  if(!u4NeedText(text)) return;

  const result = u4Words(text)
    .map(word=>[...word][0])
    .join(". ")
    .toUpperCase();

  u4Result(result);
}

/* Remove selected characters */
function u4RemoveCharacters(){
  const text = u4Text();

  const chars =
    document.getElementById("removeChars")?.value ?? "";

  if(!u4NeedText(text)) return;

  if(!chars){
    u4Result("⚠️ हटाने वाले characters डालें।");
    return;
  }

  let result = text;

  for(const ch of [...chars]){
    result = result.split(ch).join("");
  }

  u4Result(result);
}

/* Text statistics */
function u4Statistics(){
  const text = u4Text();

  if(!u4NeedText(text)) return;

  const words = u4Words(text);
  const lines = text.split(/\r?\n/);

  const sentences =
    text.match(/[.!?।]+/gu)?.length || 0;

  const paragraphs =
    text.split(/\n\s*\n/).filter(x=>x.trim()).length;

  u4Result(
`Words: ${words.length}
Characters: ${[...text].length}
Characters without spaces: ${[...text.replace(/\s/g,"")].length}
Lines: ${lines.length}
Sentences: ${sentences}
Paragraphs: ${paragraphs}`
  );
}

console.log("PART 4A TEXT TOOLS LOADED");
/* =========================
   PART 4B — DEVELOPER TOOLS
   Improved Developer Utilities
   ========================= */

function u4DevInput(){
  const el = document.getElementById("toolInput");
  return el ? el.value : "";
}

function u4DevOutput(text){
  const box = document.getElementById("output");
  if(box) box.textContent = String(text);
}

function u4DevRequired(text){
  if(!text.trim()){
    u4DevOutput("⚠️ कृपया input दर्ज करें।");
    return false;
  }
  return true;
}

/* JSON Formatter / Minifier */
function u4JSON(mode="format"){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  try{
    const data = JSON.parse(text);

    u4DevOutput(
      mode === "minify"
        ? JSON.stringify(data)
        : JSON.stringify(data,null,2)
    );
  }catch(error){
    u4DevOutput(
      "❌ Invalid JSON\n\n" + error.message
    );
  }
}

/* JSON Validator */
function u4JSONValidate(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  try{
    JSON.parse(text);
    u4DevOutput("✅ Valid JSON");
  }catch(error){
    u4DevOutput(
      "❌ Invalid JSON\n\n" + error.message
    );
  }
}

/* Base64 Encode */
function u4Base64Encode(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  try{
    const bytes = new TextEncoder().encode(text);

    let binary = "";
    bytes.forEach(b=>binary+=String.fromCharCode(b));

    u4DevOutput(btoa(binary));
  }catch(error){
    u4DevOutput("❌ Encoding failed: "+error.message);
  }
}

/* Base64 Decode */
function u4Base64Decode(){
  const text = u4DevInput().trim();

  if(!u4DevRequired(text)) return;

  try{
    const binary = atob(text);

    const bytes =
      Uint8Array.from(binary,c=>c.charCodeAt(0));

    u4DevOutput(
      new TextDecoder().decode(bytes)
    );
  }catch(error){
    u4DevOutput(
      "❌ Invalid Base64 data."
    );
  }
}

/* URL Encode */
function u4URLEncode(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  u4DevOutput(
    encodeURIComponent(text)
  );
}

/* URL Decode */
function u4URLDecode(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  try{
    u4DevOutput(
      decodeURIComponent(text)
    );
  }catch(error){
    u4DevOutput(
      "❌ Invalid encoded URL."
    );
  }
}

/* HTML Escape */
function u4HTMLEscape(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  const div = document.createElement("div");
  div.textContent = text;

  u4DevOutput(div.innerHTML);
}

/* HTML Unescape */
function u4HTMLUnescape(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  const div = document.createElement("textarea");
  div.innerHTML = text;

  u4DevOutput(div.value);
}

/* UUID */
function u4UUID(){
  try{
    if(crypto.randomUUID){
      u4DevOutput(crypto.randomUUID());
      return;
    }

    const bytes = crypto.getRandomValues(
      new Uint8Array(16)
    );

    bytes[6]=(bytes[6]&15)|64;
    bytes[8]=(bytes[8]&63)|128;

    const hex=[...bytes]
      .map(b=>b.toString(16).padStart(2,"0"))
      .join("");

    u4DevOutput(
      `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`
    );
  }catch(error){
    u4DevOutput("❌ UUID generation failed.");
  }
}

/* SHA-256 */
async function u4SHA256(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  try{
    const data =
      new TextEncoder().encode(text);

    const hash =
      await crypto.subtle.digest("SHA-256",data);

    const result =
      [...new Uint8Array(hash)]
        .map(b=>b.toString(16).padStart(2,"0"))
        .join("");

    u4DevOutput(result);
  }catch(error){
    u4DevOutput(
      "❌ SHA-256 failed: "+error.message
    );
  }
}

/* Regex Escape */
function u4RegexEscape(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  u4DevOutput(
    text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
  );
}

/* Unicode Inspector */
function u4Unicode(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  const result = [...text]
    .map((char,index)=>{
      const code = char.codePointAt(0);

      return `${index+1}. ${char} → U+${code
        .toString(16)
        .toUpperCase()
        .padStart(4,"0")}`;
    })
    .join("\n");

  u4DevOutput(result);
}

/* Date → Unix */
function u4DateToUnix(){
  const text = u4DevInput().trim();

  if(!text){
    u4DevOutput("⚠️ Date दर्ज करें।");
    return;
  }

  const date = new Date(text);

  if(Number.isNaN(date.getTime())){
    u4DevOutput("❌ Invalid date.");
    return;
  }

  u4DevOutput(
    Math.floor(date.getTime()/1000)
  );
}

/* Unix → Date */
function u4UnixToDate(){
  const text = u4DevInput().trim();

  if(!text){
    u4DevOutput("⚠️ Unix timestamp दर्ज करें।");
    return;
  }

  const number = Number(text);

  if(!Number.isFinite(number)){
    u4DevOutput("❌ Invalid Unix timestamp.");
    return;
  }

  const date =
    new Date(
      Math.abs(number) < 1e12
        ? number*1000
        : number
    );

  if(Number.isNaN(date.getTime())){
    u4DevOutput("❌ Invalid timestamp.");
    return;
  }

  u4DevOutput(
    date.toISOString()
  );
}

/* CSV → JSON */
function u4CSVToJSON(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  const lines =
    text.trim().split(/\r?\n/);

  if(lines.length < 2){
    u4DevOutput(
      "⚠️ Header और कम से कम एक data row चाहिए।"
    );
    return;
  }

  const headers =
    lines[0].split(",").map(x=>x.trim());

  const result = lines.slice(1).map(line=>{
    const values =
      line.split(",").map(x=>x.trim());

    const obj={};

    headers.forEach((header,index)=>{
      obj[header] = values[index] ?? "";
    });

    return obj;
  });

  u4DevOutput(
    JSON.stringify(result,null,2)
  );
}

/* JSON → CSV */
function u4JSONToCSV(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  try{
    const data = JSON.parse(text);

    if(!Array.isArray(data) || !data.length){
      u4DevOutput(
        "⚠️ JSON में objects की array होनी चाहिए।"
      );
      return;
    }

    const headers = [
      ...new Set(
        data.flatMap(obj=>Object.keys(obj))
      )
    ];

    const escapeCSV = value=>{
      const str =
        value === null || value === undefined
          ? ""
          : String(value);

      if(/[",\n]/.test(str)){
        return `"${str.replace(/"/g,'""')}"`;
      }

      return str;
    };

    const rows = [
      headers.join(","),
      ...data.map(obj=>
        headers
          .map(h=>escapeCSV(obj[h]))
          .join(",")
      )
    ];

    u4DevOutput(
      rows.join("\n")
    );

  }catch(error){
    u4DevOutput(
      "❌ Invalid JSON\n\n"+error.message
    );
  }
}

/* HTML Preview — safe preview */
function u4HTMLPreview(){
  const text = u4DevInput();

  if(!u4DevRequired(text)) return;

  const output =
    document.getElementById("output");

  if(!output) return;

  output.innerHTML = "";

  const iframe =
    document.createElement("iframe");

  iframe.style.width="100%";
  iframe.style.minHeight="300px";
  iframe.style.border="1px solid #ccc";
  iframe.style.borderRadius="12px";

  iframe.setAttribute(
    "sandbox",
    ""
  );

  output.appendChild(iframe);

  iframe.srcdoc=text;
}

/* JWT Decoder */
function u4JWT(){
  const token = u4DevInput().trim();

  if(!u4DevRequired(token)) return;

  const parts = token.split(".");

  if(parts.length !== 3){
    u4DevOutput(
      "❌ यह valid JWT structure नहीं है।"
    );
    return;
  }

  try{
    const payload = parts[1]
      .replace(/-/g,"+")
      .replace(/_/g,"/");

    const padded =
      payload + "=".repeat(
        (4-payload.length%4)%4
      );

    const binary = atob(padded);

    const bytes =
      Uint8Array.from(
        binary,
        c=>c.charCodeAt(0)
      );

    const decoded =
      new TextDecoder().decode(bytes);

    const data =
      JSON.parse(decoded);

    u4DevOutput(
      JSON.stringify(data,null,2)
    );

  }catch(error){
    u4DevOutput(
      "❌ JWT payload decode नहीं हो सका।"
    );
  }
}

console.log("PART 4B DEVELOPER TOOLS LOADED");
/* =========================
   PART 4C — CALCULATOR TOOLS
   Improved calculator logic
   ========================= */

function u4Num(id, fallback=0){
  const el=document.getElementById(id);
  if(!el) return fallback;

  const n=Number(el.value);
  return Number.isFinite(n) ? n : fallback;
}

function u4CalcInput(){
  const el=document.getElementById("toolInput");
  return el ? el.value.trim() : "";
}

function u4CalcOutput(text){
  const box=document.getElementById("output");
  if(box) box.textContent=String(text);
}

function u4Money(n){
  if(!Number.isFinite(n)) return "0";
  return Number(n.toFixed(2)).toLocaleString("en-IN");
}

function u4CalcRequired(){
  if(!u4CalcInput()){
    u4CalcOutput("⚠️ कृपया input दर्ज करें।");
    return false;
  }
  return true;
}

/* Percentage */
function u4Percentage(){
  const value=u4Num("percentValue");
  const percent=u4Num("percentRate");

  if(!Number.isFinite(value)||!Number.isFinite(percent)){
    u4CalcOutput("⚠️ सही numbers दर्ज करें।");
    return;
  }

  const result=value*percent/100;

  u4CalcOutput(
`Result: ${u4Money(result)}

${percent}% of ${value} = ${u4Money(result)}`
  );
}

/* Discount */
function u4Discount(){
  const price=u4Num("discountPrice");
  const percent=u4Num("discountPercent");

  if(price<0 || percent<0){
    u4CalcOutput("⚠️ Price और discount negative नहीं हो सकते।");
    return;
  }

  if(percent>100){
    u4CalcOutput("⚠️ Discount 100% से अधिक नहीं होना चाहिए।");
    return;
  }

  const discount=price*percent/100;
  const finalPrice=price-discount;

  u4CalcOutput(
`Original Price: ₹${u4Money(price)}
Discount: ₹${u4Money(discount)}
Final Price: ₹${u4Money(finalPrice)}`
  );
}

/* GST */
function u4GST(){
  const amount=u4Num("gstAmount");
  const rate=u4Num("gstRate");

  if(amount<0||rate<0){
    u4CalcOutput("⚠️ Amount और GST rate सही दर्ज करें।");
    return;
  }

  const gst=amount*rate/100;
  const total=amount+gst;

  u4CalcOutput(
`Amount: ₹${u4Money(amount)}
GST (${rate}%): ₹${u4Money(gst)}
Total: ₹${u4Money(total)}`
  );
}

/* Simple Interest */
function u4SimpleInterest(){
  const principal=u4Num("interestPrincipal");
  const rate=u4Num("interestRate");
  const years=u4Num("interestYears");

  if(principal<0||rate<0||years<0){
    u4CalcOutput("⚠️ Values negative नहीं होनी चाहिए।");
    return;
  }

  const interest=principal*rate*years/100;
  const total=principal+interest;

  u4CalcOutput(
`Principal: ₹${u4Money(principal)}
Interest: ₹${u4Money(interest)}
Total Amount: ₹${u4Money(total)}`
  );
}

/* Compound Interest */
function u4CompoundInterest(){
  const principal=u4Num("compoundPrincipal");
  const rate=u4Num("compoundRate");
  const years=u4Num("compoundYears");
  const frequency=u4Num("compoundFrequency",1);

  if(principal<0||years<0||frequency<=0){
    u4CalcOutput("⚠️ Values सही दर्ज करें।");
    return;
  }

  const amount=
    principal*
    Math.pow(
      1+rate/(100*frequency),
      frequency*years
    );

  const interest=amount-principal;

  u4CalcOutput(
`Principal: ₹${u4Money(principal)}
Compound Interest: ₹${u4Money(interest)}
Total Amount: ₹${u4Money(amount)}`
  );
}

/* EMI */
function u4EMI(){
  const principal=u4Num("emiPrincipal");
  const annualRate=u4Num("emiRate");
  const years=u4Num("emiYears");

  if(principal<=0||annualRate<0||years<=0){
    u4CalcOutput("⚠️ Loan amount, rate और tenure सही दर्ज करें।");
    return;
  }

  const months=years*12;
  const monthlyRate=annualRate/12/100;

  let emi;

  if(monthlyRate===0){
    emi=principal/months;
  }else{
    emi=
      principal*
      monthlyRate*
      Math.pow(1+monthlyRate,months)/
      (Math.pow(1+monthlyRate,months)-1);
  }

  const total=emi*months;
  const interest=total-principal;

  u4CalcOutput(
`Monthly EMI: ₹${u4Money(emi)}
Total Interest: ₹${u4Money(interest)}
Total Payment: ₹${u4Money(total)}`
  );
}

/* Age */
function u4Age(){
  const input=u4CalcInput();

  if(!input){
    u4CalcOutput("⚠️ जन्म तारीख दर्ज करें।");
    return;
  }

  const birth=new Date(input);

  if(Number.isNaN(birth.getTime())){
    u4CalcOutput("❌ Invalid date.");
    return;
  }

  const today=new Date();

  if(birth>today){
    u4CalcOutput("⚠️ जन्म तारीख future में नहीं हो सकती।");
    return;
  }

  let years=today.getFullYear()-birth.getFullYear();
  let months=today.getMonth()-birth.getMonth();
  let days=today.getDate()-birth.getDate();

  if(days<0){
    months--;
    const previousMonth=
      new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();

    days+=previousMonth;
  }

  if(months<0){
    years--;
    months+=12;
  }

  u4CalcOutput(
`Age: ${years} years, ${months} months, ${days} days`
  );
}

/* BMI */
function u4BMI(){
  const weight=u4Num("bmiWeight");
  const heightCm=u4Num("bmiHeight");

  if(weight<=0||heightCm<=0){
    u4CalcOutput("⚠️ Weight और height सही दर्ज करें।");
    return;
  }

  const height=heightCm/100;
  const bmi=weight/(height*height);

  let category;

  if(bmi<18.5) category="Underweight";
  else if(bmi<25) category="Normal";
  else if(bmi<30) category="Overweight";
  else category="Obesity";

  u4CalcOutput(
`BMI: ${bmi.toFixed(2)}
Category: ${category}`
  );
}

/* Tip */
function u4Tip(){
  const bill=u4Num("tipBill");
  const percent=u4Num("tipPercent");

  if(bill<0||percent<0){
    u4CalcOutput("⚠️ Bill और tip सही दर्ज करें।");
    return;
  }

  const tip=bill*percent/100;
  const total=bill+tip;

  u4CalcOutput(
`Bill: ₹${u4Money(bill)}
Tip: ₹${u4Money(tip)}
Total: ₹${u4Money(total)}`
  );
}

/* Ratio */
function u4Ratio(){
  const input=u4CalcInput();

  if(!input){
    u4CalcOutput("⚠️ उदाहरण: 12:18");
    return;
  }

  const parts=input.split(":").map(Number);

  if(parts.length!==2 ||
     !parts.every(Number.isFinite) ||
     parts.some(x=>x<=0)){
    u4CalcOutput("⚠️ Ratio इस तरह डालें: 12:18");
    return;
  }

  const gcd=(a,b)=>{
    while(b){
      [a,b]=[b,a%b];
    }
    return Math.abs(a);
  };

  const g=gcd(parts[0],parts[1]);

  u4CalcOutput(
`Original Ratio: ${parts[0]}:${parts[1]}
Simplified Ratio: ${parts[0]/g}:${parts[1]/g}`
  );
}

/* Average */
function u4Average(){
  const input=u4CalcInput();

  if(!input){
    u4CalcOutput("⚠️ Numbers दर्ज करें।");
    return;
  }

  const nums=input
    .split(/[\s,]+/)
    .map(Number)
    .filter(Number.isFinite);

  if(!nums.length){
    u4CalcOutput("❌ कोई valid number नहीं मिला।");
    return;
  }

  const sum=nums.reduce((a,b)=>a+b,0);
  const avg=sum/nums.length;

  u4CalcOutput(
`Count: ${nums.length}
Sum: ${u4Money(sum)}
Average: ${avg}`
  );
}

/* Median */
function u4Median(){
  const input=u4CalcInput();

  if(!input){
    u4CalcOutput("⚠️ Numbers दर्ज करें।");
    return;
  }

  const nums=input
    .split(/[\s,]+/)
    .map(Number)
    .filter(Number.isFinite)
    .sort((a,b)=>a-b);

  if(!nums.length){
    u4CalcOutput("❌ कोई valid number नहीं मिला।");
    return;
  }

  const middle=Math.floor(nums.length/2);

  const median=
    nums.length%2
      ? nums[middle]
      : (nums[middle-1]+nums[middle])/2;

  u4CalcOutput(
`Sorted: ${nums.join(", ")}
Median: ${median}`
  );
}

/* GCD */
function u4GCD(a,b){
  a=Math.abs(a);
  b=Math.abs(b);

  while(b){
    [a,b]=[b,a%b];
  }

  return a;
}

/* GCD & LCM */
function u4GCDLCM(){
  const input=u4CalcInput();

  if(!input){
    u4CalcOutput("⚠️ उदाहरण: 12,18");
    return;
  }

  const nums=input
    .split(/[\s,]+/)
    .map(Number)
    .filter(Number.isFinite);

  if(nums.length!==2){
    u4CalcOutput("⚠️ केवल दो numbers दर्ज करें।");
    return;
  }

  const gcd=u4GCD(nums[0],nums[1]);

  const lcm=
    gcd===0
      ? 0
      : Math.abs(nums[0]*nums[1])/gcd;

  u4CalcOutput(
`GCD: ${gcd}
LCM: ${lcm}`
  );
}

/* Factorial */
function u4Factorial(){
  const n=Number(u4CalcInput());

  if(!Number.isInteger(n)||n<0||n>170){
    u4CalcOutput(
      "⚠️ 0 से 170 तक का whole number दर्ज करें।"
    );
    return;
  }

  let result=1;

  for(let i=2;i<=n;i++){
    result*=i;
  }

  u4CalcOutput(
    `${n}! = ${result}`
  );
}

/* Power */
function u4Power(){
  const input=u4CalcInput();

  const parts=input
    .split(/[\s,]+/)
    .map(Number);

  if(parts.length!==2 ||
     !parts.every(Number.isFinite)){
    u4CalcOutput(
      "⚠️ उदाहरण: 2,10"
    );
    return;
  }

  const result=Math.pow(parts[0],parts[1]);

  u4CalcOutput(
`${parts[0]} ^ ${parts[1]} = ${result}`
  );
}

/* Square & Cube */
function u4SquareCube(){
  const n=Number(u4CalcInput());

  if(!Number.isFinite(n)){
    u4CalcOutput("⚠️ Valid number दर्ज करें।");
    return;
  }

  u4CalcOutput(
`Number: ${n}
Square: ${n*n}
Cube: ${n*n*n}`
  );
}

/* Percentage Change */
function u4PercentageChange(){
  const input=u4CalcInput();

  const parts=input
    .split(/[\s,]+/)
    .map(Number);

  if(parts.length!==2 ||
     !parts.every(Number.isFinite) ||
     parts[0]===0){
    u4CalcOutput(
      "⚠️ उदाहरण: 100,120"
    );
    return;
  }

  const oldValue=parts[0];
  const newValue=parts[1];

  const change=
    ((newValue-oldValue)/Math.abs(oldValue))*100;

  u4CalcOutput(
`Change: ${change.toFixed(2)}%
${change>=0 ? "📈 Increase" : "📉 Decrease"}`
  );
}

/* What percent is A of B */
function u4WhatPercent(){
  const input=u4CalcInput();

  const parts=input
    .split(/[\s,]+/)
    .map(Number);

  if(parts.length!==2 ||
     !parts.every(Number.isFinite) ||
     parts[1]===0){
    u4CalcOutput(
      "⚠️ उदाहरण: 25,100"
    );
    return;
  }

  const result=parts[0]/parts[1]*100;

  u4CalcOutput(
`${parts[0]} is ${result}% of ${parts[1]}`
  );
}

/* Markup */
function u4Markup(){
  const cost=u4Num("markupCost");
  const percent=u4Num("markupPercent");

  if(cost<0||percent<0){
    u4CalcOutput("⚠️ Values सही दर्ज करें।");
    return;
  }

  const markup=cost*percent/100;
  const selling=cost+markup;

  u4CalcOutput(
`Cost Price: ₹${u4Money(cost)}
Markup: ₹${u4Money(markup)}
Selling Price: ₹${u4Money(selling)}`
  );
}

/* VAT */
function u4VAT(){
  const amount=u4Num("vatAmount");
  const rate=u4Num("vatRate");

  if(amount<0||rate<0){
    u4CalcOutput("⚠️ Values सही दर्ज करें।");
    return;
  }

  const vat=amount*rate/100;
  const total=amount+vat;

  u4CalcOutput(
`Amount: ₹${u4Money(amount)}
VAT: ₹${u4Money(vat)}
Total: ₹${u4Money(total)}`
  );
}

/* Fuel Cost */
function u4Fuel(){
  const distance=u4Num("fuelDistance");
  const mileage=u4Num("fuelMileage");
  const price=u4Num("fuelPrice");

  if(distance<0||mileage<=0||price<0){
    u4CalcOutput(
      "⚠️ Distance, mileage और fuel price सही दर्ज करें।"
    );
    return;
  }

  const liters=distance/mileage;
  const cost=liters*price;

  u4CalcOutput(
`Distance: ${distance} km
Fuel Required: ${liters.toFixed(2)} L
Fuel Cost: ₹${u4Money(cost)}`
  );
}

/* Break-even */
function u4BreakEven(){
  const fixed=u4Num("breakFixed");
  const price=u4Num("breakPrice");
  const variable=u4Num("breakVariable");

  const contribution=price-variable;

  if(fixed<0||price<=0||variable<0||contribution<=0){
    u4CalcOutput(
      "⚠️ Fixed cost, selling price और variable cost सही दर्ज करें।"
    );
    return;
  }

  const units=fixed/contribution;

  u4CalcOutput(
`Contribution per unit: ₹${u4Money(contribution)}
Break-even units: ${units.toFixed(2)}`
  );
}

/* Salary to Hourly */
function u4SalaryHourly(){
  const salary=u4Num("salaryAmount");
  const hours=u4Num("salaryHours",2080);

  if(salary<0||hours<=0){
    u4CalcOutput("⚠️ Salary और working hours सही दर्ज करें।");
    return;
  }

  const hourly=salary/hours;

  u4CalcOutput(
`Annual Salary: ₹${u4Money(salary)}
Working Hours: ${hours}
Hourly Earnings: ₹${u4Money(hourly)}`
  );
}

console.log("PART 4C CALCULATORS LOADED");
/* =========================
   PART 4D — CONVERTERS + DATE & TIME
   ========================= */

function u4DInput(){
  const el=document.getElementById("toolInput");
  return el ? el.value.trim() : "";
}

function u4DOutput(text){
  const box=document.getElementById("output");
  if(box) box.textContent=String(text);
}

function u4DNumber(){
  const n=Number(u4DInput());

  if(!Number.isFinite(n)){
    u4DOutput("⚠️ कृपया valid number दर्ज करें।");
    return null;
  }

  return n;
}

/* Temperature */
function u4Temperature(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("tempFrom")?.value || "C";

  const to=
    document.getElementById("tempTo")?.value || "F";

  let celsius;

  if(from==="C") celsius=n;
  else if(from==="F") celsius=(n-32)*5/9;
  else if(from==="K") celsius=n-273.15;
  else{
    u4DOutput("❌ Invalid source unit.");
    return;
  }

  let result;

  if(to==="C") result=celsius;
  else if(to==="F") result=celsius*9/5+32;
  else if(to==="K") result=celsius+273.15;
  else{
    u4DOutput("❌ Invalid target unit.");
    return;
  }

  u4DOutput(
`${n} °${from} = ${result.toFixed(4)} °${to}`
  );
}

/* Time Converter */
function u4TimeConvert(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("timeFrom")?.value || "seconds";

  const to=
    document.getElementById("timeTo")?.value || "minutes";

  const units={
    milliseconds:0.001,
    seconds:1,
    minutes:60,
    hours:3600,
    days:86400,
    weeks:604800
  };

  if(!(from in units)||!(to in units)){
    u4DOutput("❌ Invalid time unit.");
    return;
  }

  const seconds=n*units[from];
  const result=seconds/units[to];

  u4DOutput(
`${n} ${from} = ${result} ${to}`
  );
}

/* Bytes Converter */
function u4Bytes(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("bytesFrom")?.value || "B";

  const to=
    document.getElementById("bytesTo")?.value || "KB";

  const units={
    B:1,
    KB:1024,
    MB:1024**2,
    GB:1024**3,
    TB:1024**4,
    PB:1024**5
  };

  if(!(from in units)||!(to in units)){
    u4DOutput("❌ Invalid data unit.");
    return;
  }

  const bytes=n*units[from];
  const result=bytes/units[to];

  u4DOutput(
`${n} ${from} = ${result} ${to}`
  );
}

/* Length Converter */
function u4Length(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("lengthFrom")?.value || "m";

  const to=
    document.getElementById("lengthTo")?.value || "km";

  const units={
    mm:0.001,
    cm:0.01,
    m:1,
    km:1000,
    in:0.0254,
    ft:0.3048,
    yd:0.9144,
    mi:1609.344
  };

  if(!(from in units)||!(to in units)){
    u4DOutput("❌ Invalid length unit.");
    return;
  }

  const meters=n*units[from];
  const result=meters/units[to];

  u4DOutput(
`${n} ${from} = ${result} ${to}`
  );
}

/* Weight Converter */
function u4Weight(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("weightFrom")?.value || "kg";

  const to=
    document.getElementById("weightTo")?.value || "g";

  const units={
    mg:0.000001,
    g:0.001,
    kg:1,
    tonne:1000,
    oz:0.028349523125,
    lb:0.45359237
  };

  if(!(from in units)||!(to in units)){
    u4DOutput("❌ Invalid weight unit.");
    return;
  }

  const kg=n*units[from];
  const result=kg/units[to];

  u4DOutput(
`${n} ${from} = ${result} ${to}`
  );
}

/* Area Converter */
function u4Area(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("areaFrom")?.value || "m2";

  const to=
    document.getElementById("areaTo")?.value || "ft2";

  const units={
    mm2:0.000001,
    cm2:0.0001,
    m2:1,
    km2:1000000,
    ft2:0.09290304,
    yd2:0.83612736,
    acre:4046.8564224,
    hectare:10000
  };

  if(!(from in units)||!(to in units)){
    u4DOutput("❌ Invalid area unit.");
    return;
  }

  const m2=n*units[from];
  const result=m2/units[to];

  u4DOutput(
`${n} ${from} = ${result} ${to}`
  );
}

/* Volume Converter */
function u4Volume(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("volumeFrom")?.value || "L";

  const to=
    document.getElementById("volumeTo")?.value || "mL";

  const units={
    mL:0.001,
    L:1,
    m3:1000,
    cm3:0.001,
    ft3:28.316846592,
    gal:3.785411784
  };

  if(!(from in units)||!(to in units)){
    u4DOutput("❌ Invalid volume unit.");
    return;
  }

  const liters=n*units[from];
  const result=liters/units[to];

  u4DOutput(
`${n} ${from} = ${result} ${to}`
  );
}

/* Speed Converter */
function u4Speed(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("speedFrom")?.value || "kmh";

  const to=
    document.getElementById("speedTo")?.value || "mph";

  const units={
    mps:1,
    kmh:0.2777777778,
    mph:0.44704,
    knot:0.5144444444
  };

  if(!(from in units)||!(to in units)){
    u4DOutput("❌ Invalid speed unit.");
    return;
  }

  const mps=n*units[from];
  const result=mps/units[to];

  u4DOutput(
`${n} ${from} = ${result} ${to}`
  );
}

/* Pressure Converter */
function u4Pressure(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("pressureFrom")?.value || "Pa";

  const to=
    document.getElementById("pressureTo")?.value || "bar";

  const units={
    Pa:1,
    kPa:1000,
    MPa:1000000,
    bar:100000,
    atm:101325,
    psi:6894.757293168
  };

  if(!(from in units)||!(to in units)){
    u4DOutput("❌ Invalid pressure unit.");
    return;
  }

  const pa=n*units[from];
  const result=pa/units[to];

  u4DOutput(
`${n} ${from} = ${result} ${to}`
  );
}

/* Energy Converter */
function u4Energy(){
  const n=u4DNumber();
  if(n===null)return;

  const from=
    document.getElementById("energyFrom")?.value || "J";

  const to=
    document.getElementById("energyTo")?.value || "kJ";

  const units={
    J:1,
    kJ:1000,
    MJ:1000000,
    Wh:3600,
    kWh:3600000,
    cal:4.184,
    kcal:4184
  };

  if(!(from in units)||!(to in units)){
    u4DOutput("❌ Invalid energy unit.");
    return;
  }

  const joules=n*units[from];
  const result=joules/units[to];

  u4DOutput(
`${n} ${from} = ${result} ${to}`
  );
}

/* Roman Numeral */
function u4ToRoman(){
  const n=Number(u4DInput());

  if(!Number.isInteger(n)||n<1||n>3999){
    u4DOutput(
      "⚠️ 1 से 3999 के बीच whole number दर्ज करें।"
    );
    return;
  }

  const values=[
    [1000,"M"],
    [900,"CM"],
    [500,"D"],
    [400,"CD"],
    [100,"C"],
    [90,"XC"],
    [50,"L"],
    [40,"XL"],
    [10,"X"],
    [9,"IX"],
    [5,"V"],
    [4,"IV"],
    [1,"I"]
  ];

  let result="";
  let value=n;

  for(const [num,symbol] of values){
    while(value>=num){
      result+=symbol;
      value-=num;
    }
  }

  u4DOutput(result);
}

/* Roman → Number */
function u4RomanToNumber(){
  const text=u4DInput().toUpperCase();

  if(!text){
    u4DOutput("⚠️ Roman numeral दर्ज करें।");
    return;
  }

  const map={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  };

  let total=0;

  for(let i=0;i<text.length;i++){
    const current=map[text[i]];
    const next=map[text[i+1]]||0;

    if(!current){
      u4DOutput("❌ Invalid Roman numeral.");
      return;
    }

    total += current<next ? -current : current;
  }

  u4DOutput(String(total));
}

/* Date Add / Subtract */
function u4DateAdd(){
  const input=u4DInput();

  if(!input){
    u4DOutput("⚠️ Date दर्ज करें।");
    return;
  }

  const date=new Date(input);

  if(Number.isNaN(date.getTime())){
    u4DOutput("❌ Invalid date.");
    return;
  }

  const days=u4Num(
    "dateDays"
  );

  if(days===null)return;

  date.setDate(date.getDate()+days);

  u4DOutput(
    date.toISOString().slice(0,10)
  );
}

/* Date Difference */
function u4DateDifference(){
  const start=
    document.getElementById("dateStart")?.value || "";

  const end=
    document.getElementById("dateEnd")?.value || "";

  if(!start||!end){
    u4DOutput("⚠️ दोनों dates दर्ज करें।");
    return;
  }

  const a=new Date(start);
  const b=new Date(end);

  if(Number.isNaN(a.getTime())||
     Number.isNaN(b.getTime())){
    u4DOutput("❌ Invalid date.");
    return;
  }

  const diff=Math.abs(b-a);

  const days=Math.floor(
    diff/86400000
  );

  const weeks=Math.floor(days/7);

  u4DOutput(
`Difference: ${days} days
Weeks: ${weeks}
Hours: ${Math.floor(diff/3600000)}`
  );
}

/* Day of Week */
function u4DayOfWeek(){
  const input=u4DInput();

  if(!input){
    u4DOutput("⚠️ Date दर्ज करें।");
    return;
  }

  const date=new Date(input);

  if(Number.isNaN(date.getTime())){
    u4DOutput("❌ Invalid date.");
    return;
  }

  u4DOutput(
    date.toLocaleDateString("en-IN",{
      weekday:"long",
      year:"numeric",
      month:"long",
      day:"numeric"
    })
  );
}

/* Leap Year */
function u4LeapYear(){
  const year=Number(u4DInput());

  if(!Number.isInteger(year)){
    u4DOutput("⚠️ Valid year दर्ज करें।");
    return;
  }

  const leap=
    year%400===0 ||
    (year%4===0 && year%100!==0);

  u4DOutput(
    leap
      ? `✅ ${year} is a Leap Year.`
      : `❌ ${year} is not a Leap Year.`
  );
}

/* ISO Week Number */
function u4WeekNumber(){
  const input=u4DInput();

  if(!input){
    u4DOutput("⚠️ Date दर्ज करें।");
    return;
  }

  const date=new Date(input);

  if(Number.isNaN(date.getTime())){
    u4DOutput("❌ Invalid date.");
    return;
  }

  const target=new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )
  );

  const dayNum=target.getUTCDay()||7;

  target.setUTCDate(
    target.getUTCDate()+4-dayNum
  );

  const yearStart=new Date(
    Date.UTC(
      target.getUTCFullYear(),
      0,
      1
    )
  );

  const week=Math.ceil(
    (
      (
        target-yearStart
      )/86400000+1
    )/7
  );

  u4DOutput(
    `ISO Week: ${week}`
  );
}

/* Countdown */
function u4Countdown(){
  const input=u4DInput();

  if(!input){
    u4DOutput(
      "⚠️ Future date/time दर्ज करें।"
    );
    return;
  }

  const target=new Date(input);

  if(Number.isNaN(target.getTime())){
    u4DOutput("❌ Invalid date/time.");
    return;
  }

  const diff=target-new Date();

  if(diff<=0){
    u4DOutput("⏰ समय समाप्त हो चुका है।");
    return;
  }

  const seconds=Math.floor(diff/1000);

  const days=Math.floor(seconds/86400);
  const hours=Math.floor((seconds%86400)/3600);
  const minutes=Math.floor((seconds%3600)/60);
  const secs=seconds%60;

  u4DOutput(
`${days} Days
${hours} Hours
${minutes} Minutes
${secs} Seconds`
  );
}

console.log("PART 4D CONVERTERS DATE TOOLS LOADED");
/* ================================
   PART 4E — IMAGES + GENERATORS + DOCUMENTS
   ================================ */

/* ---------- IMAGE TOOLS ---------- */

function u4ImageRequired(input, output){
  const el=document.getElementById(input);
  if(!el || !el.files || !el.files.length){
    if(output){
      output.textContent="कृपया पहले image file चुनें।";
    }
    return null;
  }
  return el.files[0];
}

function u4ImageOutput(text){
  const el=document.getElementById("u4-image-output");
  if(el) el.textContent=text;
}

function u4DownloadBlob(blob,name){
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download=name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}

function u4CanvasFromImage(file,callback){
  const reader=new FileReader();

  reader.onload=function(e){
    const img=new Image();

    img.onload=function(){
      callback(img);
    };

    img.onerror=function(){
      u4ImageOutput("Image पढ़ी नहीं जा सकी।");
    };

    img.src=e.target.result;
  };

  reader.onerror=function(){
    u4ImageOutput("Image file पढ़ने में समस्या हुई।");
  };

  reader.readAsDataURL(file);
}


/* IMAGE COMPRESSOR */

function u4ImageCompressor(){
  const input=document.querySelector('input[type="file"]');

  if(!input || !input.files.length){
    alert("पहले image चुनें।");
    return;
  }

  const file=input.files[0];

  u4CanvasFromImage(file,function(img){

    const canvas=document.createElement("canvas");
    const ctx=canvas.getContext("2d");

    canvas.width=img.width;
    canvas.height=img.height;

    ctx.drawImage(img,0,0);

    canvas.toBlob(function(blob){

      if(!blob){
        alert("Image compress नहीं हो सकी।");
        return;
      }

      const name=file.name.replace(/\.[^/.]+$/,"")+"_compressed.jpg";

      u4DownloadBlob(blob,name);

      u4ImageOutput(
        "Compression तैयार है। Original: "+
        Math.round(file.size/1024)+" KB | New: "+
        Math.round(blob.size/1024)+" KB"
      );

    },"image/jpeg",0.70);

  });
}


/* IMAGE RESIZER */

function u4ImageResizer(){

  const input=document.querySelector('input[type="file"]');

  if(!input || !input.files.length){
    alert("पहले image चुनें।");
    return;
  }

  const file=input.files[0];

  u4CanvasFromImage(file,function(img){

    const maxWidth=1200;

    let width=img.width;
    let height=img.height;

    if(width>maxWidth){
      height=Math.round(height*maxWidth/width);
      width=maxWidth;
    }

    const canvas=document.createElement("canvas");
    const ctx=canvas.getContext("2d");

    canvas.width=width;
    canvas.height=height;

    ctx.drawImage(img,0,0,width,height);

    canvas.toBlob(function(blob){

      const name=file.name.replace(/\.[^/.]+$/,"")+"_resized.jpg";

      u4DownloadBlob(blob,name);

      u4ImageOutput(
        "Image resized: "+width+" × "+height
      );

    },"image/jpeg",0.85);

  });
}


/* GRAYSCALE */

function u4ImageGrayscale(){

  const input=document.querySelector('input[type="file"]');

  if(!input || !input.files.length){
    alert("पहले image चुनें।");
    return;
  }

  const file=input.files[0];

  u4CanvasFromImage(file,function(img){

    const canvas=document.createElement("canvas");
    const ctx=canvas.getContext("2d");

    canvas.width=img.width;
    canvas.height=img.height;

    ctx.drawImage(img,0,0);

    const imageData=ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );

    const data=imageData.data;

    for(let i=0;i<data.length;i+=4){

      const gray=
        0.299*data[i]+
        0.587*data[i+1]+
        0.114*data[i+2];

      data[i]=gray;
      data[i+1]=gray;
      data[i+2]=gray;
    }

    ctx.putImageData(imageData,0,0);

    canvas.toBlob(function(blob){

      const name=file.name.replace(/\.[^/.]+$/,"")+"_grayscale.jpg";

      u4DownloadBlob(blob,name);

      u4ImageOutput("Grayscale image तैयार है।");

    },"image/jpeg",0.90);

  });
}


/* IMAGE INFO */

function u4ImageInfo(){

  const input=document.querySelector('input[type="file"]');

  if(!input || !input.files.length){
    alert("पहले image चुनें।");
    return;
  }

  const file=input.files[0];

  u4CanvasFromImage(file,function(img){

    const info=
      "File: "+file.name+"\n"+
      "Type: "+file.type+"\n"+
      "Size: "+Math.round(file.size/1024)+" KB\n"+
      "Width: "+img.width+" px\n"+
      "Height: "+img.height+" px\n"+
      "Aspect Ratio: "+(img.width/img.height).toFixed(2);

    u4ImageOutput(info);

  });
}


/* JPG ↔ PNG */

function u4JpgPng(){

  const input=document.querySelector('input[type="file"]');

  if(!input || !input.files.length){
    alert("पहले image चुनें।");
    return;
  }

  const file=input.files[0];

  u4CanvasFromImage(file,function(img){

    const canvas=document.createElement("canvas");
    const ctx=canvas.getContext("2d");

    canvas.width=img.width;
    canvas.height=img.height;

    ctx.drawImage(img,0,0);

    const isPng=file.type==="image/png";

    const type=isPng ? "image/jpeg" : "image/png";

    const ext=isPng ? ".jpg" : ".png";

    canvas.toBlob(function(blob){

      const name=file.name.replace(/\.[^/.]+$/,"")+"_converted"+ext;

      u4DownloadBlob(blob,name);

      u4ImageOutput(
        isPng
        ? "PNG → JPG conversion तैयार है।"
        : "JPG → PNG conversion तैयार है।"
      );

    },type,0.90);

  });
}


/* ---------- GENERATORS ---------- */


/* RANDOM NUMBER */

function u4RandomNumber(){

  const minInput=document.querySelector("#min");
  const maxInput=document.querySelector("#max");

  const min=Number(minInput?.value || 1);
  const max=Number(maxInput?.value || 100);

  if(min>max){
    alert("Minimum number, Maximum से बड़ा नहीं होना चाहिए।");
    return;
  }

  const result=
    Math.floor(Math.random()*(max-min+1))+min;

  u4CalcOutput(String(result));
}


/* COLOR PICKER */

function u4ColorPicker(){

  const color=
    document.querySelector("#color")?.value ||
    "#000000";

  const output=document.querySelector("#out");

  if(output){
    output.innerHTML=
      '<div style="font-size:40px;margin-bottom:10px;">'+
      '<span style="display:inline-block;width:80px;height:80px;background:'+
      color+
      ';border-radius:12px;border:1px solid #ccc;"></span>'+
      '</div>'+
      "<b>"+color+"</b>";
  }
}


/* QR CODE */

function u4QR(){

  const input=
    document.querySelector("#text") ||
    document.querySelector("#qrtext");

  const value=input?.value?.trim();

  if(!value){
    alert("QR Code के लिए text या URL डालें।");
    return;
  }

  const output=document.querySelector("#out");

  if(!output) return;

  const img=document.createElement("img");

  img.alt="QR Code";

  img.style.maxWidth="260px";
  img.style.display="block";
  img.style.margin="10px auto";

  img.src=
    "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data="+
    encodeURIComponent(value);

  output.innerHTML="";
  output.appendChild(img);

  const btn=document.createElement("button");

  btn.textContent="QR Code Download करें";

  btn.onclick=function(){

    const a=document.createElement("a");

    a.href=img.src;
    a.target="_blank";
    a.rel="noopener";

    a.click();
  };

  output.appendChild(btn);
}


/* BULK UUID */

function u4BulkUUID(){

  const countInput=
    document.querySelector("#count");

  let count=Number(countInput?.value || 5);

  count=Math.max(1,Math.min(count,100));

  const list=[];

  for(let i=0;i<count;i++){

    if(crypto.randomUUID){
      list.push(crypto.randomUUID());
    }else{
      list.push(
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
        .replace(/[xy]/g,function(c){
          const r=Math.random()*16|0;
          const v=c==="x"?r:(r&0x3|0x8);
          return v.toString(16);
        })
      );
    }
  }

  u4CalcOutput(list.join("\n"));
}


/* LOREM IPSUM */

function u4Lorem(){

  const countInput=
    document.querySelector("#count");

  const count=Math.max(
    1,
    Math.min(
      Number(countInput?.value || 3),
      50
    )
  );

  const words=
  "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat";

  const arr=words.split(" ");

  let result=[];

  for(let i=0;i<count*20;i++){
    result.push(arr[i%arr.length]);
  }

  let text=result.join(" ");

  text=text.charAt(0).toUpperCase()+text.slice(1)+".";

  u4CalcOutput(text);
}


/* RANDOM NAME */

function u4RandomName(){

  const first=[
    "Aarav","Vivaan","Aditya","Arjun",
    "Rohan","Kabir","Rahul","Aman",
    "Ananya","Diya","Priya","Aisha",
    "Meera","Riya","Kavya","Sara"
  ];

  const last=[
    "Sharma","Verma","Singh","Gupta",
    "Kumar","Patel","Yadav","Mishra",
    "Das","Roy","Mehta","Jain"
  ];

  const name=
    first[Math.floor(Math.random()*first.length)]+" "+
    last[Math.floor(Math.random()*last.length)];

  u4CalcOutput(name);
}


/* COIN FLIP */

function u4CoinFlip(){

  const result=
    Math.random()<0.5
    ? "🪙 Heads"
    : "🪙 Tails";

  u4CalcOutput(result);
}


/* DICE ROLLER */

function u4Dice(){

  const result=
    Math.floor(Math.random()*6)+1;

  u4CalcOutput("🎲 "+result);
}


/* NUMBER TO WORDS */

function u4NumberWords(){

  const input=
    document.querySelector("#number") ||
    document.querySelector("#num");

  const n=Number(input?.value);

  if(!Number.isFinite(n)){
    alert("कृपया सही number डालें।");
    return;
  }

  const small=[
    "Zero","One","Two","Three","Four",
    "Five","Six","Seven","Eight","Nine",
    "Ten","Eleven","Twelve","Thirteen",
    "Fourteen","Fifteen","Sixteen",
    "Seventeen","Eighteen","Nineteen"
  ];

  const tens=[
    "","","Twenty","Thirty","Forty",
    "Fifty","Sixty","Seventy","Eighty","Ninety"
  ];

  function convert(num){

    if(num<20) return small[num];

    if(num<100){
      return tens[Math.floor(num/10)] +
        (num%10 ? " "+small[num%10] : "");
    }

    if(num<1000){
      return small[Math.floor(num/100)]+" Hundred"+
        (num%100 ? " "+convert(num%100) : "");
    }

    if(num<1000000){
      return convert(Math.floor(num/1000))+
        " Thousand"+
        (num%1000 ? " "+convert(num%1000) : "");
    }

    if(num<1000000000){
      return convert(Math.floor(num/1000000))+
        " Million"+
        (num%1000000 ? " "+convert(num%1000000) : "");
    }

    return "Number too large";
  }

  if(n<0){
    u4CalcOutput("Minus "+convert(Math.abs(n)));
  }else{
    u4CalcOutput(convert(Math.floor(n)));
  }
}


/* ---------- DOCUMENT TOOLS ---------- */


/* TEXT TO PDF */

function u4TextPDF(){

  const input=
    document.querySelector("#text") ||
    document.querySelector("#input");

  const text=input?.value || "";

  if(!text.trim()){
    alert("पहले text लिखें।");
    return;
  }

  /*
     Browser में बिना external library के
     simple printable PDF workflow.
  */

  const win=window.open("","_blank");

  if(!win){
    alert("Popup blocked है। Browser में popup allow करें।");
    return;
  }

  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Text to PDF</title>
      <style>
        body{
          font-family:Arial,sans-serif;
          padding:40px;
          line-height:1.6;
          white-space:pre-wrap;
        }
      </style>
    </head>
    <body>${u4EscapeHTML(text)}</body>
    </html>
  `);

  win.document.close();

  setTimeout(function(){
    win.focus();
    win.print();
  },500);
}


/* DATA URI GENERATOR */

function u4DataURI(){

  const input=
    document.querySelector("#text") ||
    document.querySelector("#input");

  const text=input?.value || "";

  if(!text){
    alert("पहले text डालें।");
    return;
  }

  const mime="text/plain;charset=utf-8";

  const uri=
    "data:"+mime+","+encodeURIComponent(text);

  u4CalcOutput(uri);
}


/* FILE TO BASE64 */

function u4FileBase64(){

  const input=document.querySelector('input[type="file"]');

  if(!input || !input.files.length){
    alert("पहले file चुनें।");
    return;
  }

  const file=input.files[0];

  const reader=new FileReader();

  reader.onload=function(){

    u4CalcOutput(reader.result);

  };

  reader.onerror=function(){

    u4CalcOutput("File पढ़ने में समस्या हुई।");

  };

  reader.readAsDataURL(file);
}


/* SAFE HTML ESCAPE */

function u4EscapeHTML(str){

  return String(str)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}


/* COMMON DOWNLOAD TEXT */

function u4DownloadText(text,name="result.txt"){

  const blob=
    new Blob([text],{
      type:"text/plain;charset=utf-8"
    });

  u4DownloadBlob(blob,name);
}


/* GENERIC COPY */

function u4CopyResult(){

  const output=
    document.querySelector("#out") ||
    document.querySelector("#output") ||
    document.querySelector("#result");

  if(!output){
    alert("Output नहीं मिला।");
    return;
  }

  const text=output.innerText || output.textContent || "";

  navigator.clipboard.writeText(text)
    .then(()=>alert("Copy हो गया।"))
    .catch(()=>alert("Copy नहीं हो पाया।"));
}


console.log("PART 4E IMAGES GENERATORS DOCUMENTS LOADED");
/* =========================================
   PART 5 — CONNECT 109 TOOLS
   ========================================= */

(function(){

  function p5Text(fn){
    if(typeof fn==="function"){
      try{
        fn();
        return true;
      }catch(e){
        console.error(e);
      }
    }
    return false;
  }

  function p5Run(id){

    /* ---------- TEXT ---------- */

    if(id==="word" && typeof u4WordCounter==="function"){
      return p5Text(u4WordCounter);
    }

    if(id==="countchars" && typeof u4CharacterCounter==="function"){
      return p5Text(u4CharacterCounter);
    }

    if(id==="spaces" && typeof u4ExtraSpaces==="function"){
      return p5Text(u4ExtraSpaces);
    }

    if(id==="trim" && typeof u4Trim==="function"){
      return p5Text(u4Trim);
    }

    if(id==="removeblank" && typeof u4BlankLines==="function"){
      return p5Text(u4BlankLines);
    }

    if(id==="reverse" && typeof u4Reverse==="function"){
      return p5Text(u4Reverse);
    }

    if(id==="textreversewords" && typeof u4ReverseWords==="function"){
      return p5Text(u4ReverseWords);
    }

    if(id==="sort" && typeof u4SortLines==="function"){
      return p5Text(u4SortLines);
    }

    if(id==="sortwords" && typeof u4SortWords==="function"){
      return p5Text(u4SortWords);
    }

    if(id==="duplicate" && typeof u4DuplicateLines==="function"){
      return p5Text(u4DuplicateLines);
    }

    if(id==="newlinecomma" && typeof u4LinesComma==="function"){
      return p5Text(u4LinesComma);
    }

    if(id==="commanewline" && typeof u4CommaLines==="function"){
      return p5Text(u4CommaLines);
    }

    if(id==="sortnum" && typeof u4SortNumbers==="function"){
      return p5Text(u4SortNumbers);
    }

    if(id==="extractemails" && typeof u4Emails==="function"){
      return p5Text(u4Emails);
    }

    if(id==="extracturls" && typeof u4URLs==="function"){
      return p5Text(u4URLs);
    }

    if(id==="findreplace" && typeof u4FindReplace==="function"){
      return p5Text(u4FindReplace);
    }

    if(id==="repeattext" && typeof u4Repeat==="function"){
      return p5Text(u4Repeat);
    }

    if(id==="palindrome" && typeof u4Palindrome==="function"){
      return p5Text(u4Palindrome);
    }

    if(id==="anagram" && typeof u4Anagram==="function"){
      return p5Text(u4Anagram);
    }

    if(id==="linecount" && typeof u4LineCounter==="function"){
      return p5Text(u4LineCounter);
    }

    if(id==="wordfrequency" && typeof u4WordFrequency==="function"){
      return p5Text(u4WordFrequency);
    }

    if(id==="acronym" && typeof u4Acronym==="function"){
      return p5Text(u4Acronym);
    }

    if(id==="initials" && typeof u4Initials==="function"){
      return p5Text(u4Initials);
    }

    if(id==="removechars" && typeof u4RemoveCharacters==="function"){
      return p5Text(u4RemoveCharacters);
    }

    if(id==="textstats" && typeof u4Statistics==="function"){
      return p5Text(u4Statistics);
    }


    /* ---------- DEVELOPER ---------- */

    if(id==="json" && typeof u4JSON==="function"){
      return p5Text(u4JSON);
    }

    if(id==="jsonvalidate" && typeof u4JSONValidate==="function"){
      return p5Text(u4JSONValidate);
    }

    if(id==="base64" && typeof u4Base64Encode==="function"){
      return p5Text(u4Base64Encode);
    }

    if(id==="url" && typeof u4URLEncode==="function"){
      return p5Text(u4URLEncode);
    }

    if(id==="html" && typeof u4HTMLEscape==="function"){
      return p5Text(u4HTMLEscape);
    }

    if(id==="hash" && typeof u4SHA256==="function"){
      return p5Text(u4SHA256);
    }

    if(id==="regexescape" && typeof u4RegexEscape==="function"){
      return p5Text(u4RegexEscape);
    }

    if(id==="unicode" && typeof u4Unicode==="function"){
      return p5Text(u4Unicode);
    }

    if(id==="csvjson" && typeof u4CSVToJSON==="function"){
      return p5Text(u4CSVToJSON);
    }

    if(id==="jsoncsv" && typeof u4JSONToCSV==="function"){
      return p5Text(u4JSONToCSV);
    }

    if(id==="htmlpreview" && typeof u4HTMLPreview==="function"){
      return p5Text(u4HTMLPreview);
    }

    if(id==="jwtdecode" && typeof u4JWT==="function"){
      return p5Text(u4JWT);
    }


    /* ---------- CALCULATORS ---------- */

    if(id==="percent" && typeof u4Percentage==="function"){
      return p5Text(u4Percentage);
    }

    if(id==="discount" && typeof u4Discount==="function"){
      return p5Text(u4Discount);
    }

    if(id==="gst" && typeof u4GST==="function"){
      return p5Text(u4GST);
    }

    if(id==="interest" && typeof u4SimpleInterest==="function"){
      return p5Text(u4SimpleInterest);
    }

    if(id==="compound" && typeof u4CompoundInterest==="function"){
      return p5Text(u4CompoundInterest);
    }

    if(id==="emi" && typeof u4EMI==="function"){
      return p5Text(u4EMI);
    }

    if(id==="age" && typeof u4Age==="function"){
      return p5Text(u4Age);
    }

    if(id==="bmi" && typeof u4BMI==="function"){
      return p5Text(u4BMI);
    }

    if(id==="tip" && typeof u4Tip==="function"){
      return p5Text(u4Tip);
    }

    if(id==="ratio" && typeof u4Ratio==="function"){
      return p5Text(u4Ratio);
    }

    if(id==="average" && typeof u4Average==="function"){
      return p5Text(u4Average);
    }

    if(id==="median" && typeof u4Median==="function"){
      return p5Text(u4Median);
    }

    if(id==="gcd" && typeof u4GCDLCM==="function"){
      return p5Text(u4GCDLCM);
    }

    if(id==="factorial" && typeof u4Factorial==="function"){
      return p5Text(u4Factorial);
    }

    if(id==="power" && typeof u4Power==="function"){
      return p5Text(u4Power);
    }

    if(id==="squarecube" && typeof u4SquareCube==="function"){
      return p5Text(u4SquareCube);
    }

    if(id==="percentagechange" && typeof u4PercentageChange==="function"){
      return p5Text(u4PercentageChange);
    }

    if(id==="percentof" && typeof u4WhatPercent==="function"){
      return p5Text(u4WhatPercent);
    }

    if(id==="markupcalc" && typeof u4Markup==="function"){
      return p5Text(u4Markup);
    }

    if(id==="vat" && typeof u4VAT==="function"){
      return p5Text(u4VAT);
    }

    if(id==="fuel" && typeof u4Fuel==="function"){
      return p5Text(u4Fuel);
    }

    if(id==="breakEven" && typeof u4BreakEven==="function"){
      return p5Text(u4BreakEven);
    }

    if(id==="salaryhourly" && typeof u4SalaryHourly==="function"){
      return p5Text(u4SalaryHourly);
    }


    /* ---------- CONVERTERS ---------- */

    if(id==="temp" && typeof u4Temperature==="function"){
      return p5Text(u4Temperature);
    }

    if(id==="time" && typeof u4TimeConvert==="function"){
      return p5Text(u4TimeConvert);
    }

    if(id==="bytes" && typeof u4Bytes==="function"){
      return p5Text(u4Bytes);
    }

    if(id==="length" && typeof u4Length==="function"){
      return p5Text(u4Length);
    }

    if(id==="weight" && typeof u4Weight==="function"){
      return p5Text(u4Weight);
    }

    if(id==="area" && typeof u4Area==="function"){
      return p5Text(u4Area);
    }

    if(id==="volume" && typeof u4Volume==="function"){
      return p5Text(u4Volume);
    }

    if(id==="speed" && typeof u4Speed==="function"){
      return p5Text(u4Speed);
    }

    if(id==="pressure" && typeof u4Pressure==="function"){
      return p5Text(u4Pressure);
    }

    if(id==="energy" && typeof u4Energy==="function"){
      return p5Text(u4Energy);
    }

    if(id==="roman" && typeof u4ToRoman==="function"){
      return p5Text(u4ToRoman);
    }

    if(id==="dateadd" && typeof u4DateAdd==="function"){
      return p5Text(u4DateAdd);
    }

    if(id==="datedifference" && typeof u4DateDifference==="function"){
      return p5Text(u4DateDifference);
    }

    if(id==="dayofweek" && typeof u4DayOfWeek==="function"){
      return p5Text(u4DayOfWeek);
    }

    if(id==="leapyear" && typeof u4LeapYear==="function"){
      return p5Text(u4LeapYear);
    }

    if(id==="weeknumber" && typeof u4WeekNumber==="function"){
      return p5Text(u4WeekNumber);
    }

    if(id==="countdown" && typeof u4Countdown==="function"){
      return p5Text(u4Countdown);
    }


    /* ---------- IMAGES ---------- */

    if(id==="imagecompress" && typeof u4ImageCompressor==="function"){
      return p5Text(u4ImageCompressor);
    }

    if(id==="imageresize" && typeof u4ImageResizer==="function"){
      return p5Text(u4ImageResizer);
    }

    if(id==="jpgpng" && typeof u4JpgPng==="function"){
      return p5Text(u4JpgPng);
    }

    if(id==="grayscale" && typeof u4ImageGrayscale==="function"){
      return p5Text(u4ImageGrayscale);
    }

    if(id==="imageinfo" && typeof u4ImageInfo==="function"){
      return p5Text(u4ImageInfo);
    }


    /* ---------- GENERATORS ---------- */

    if(id==="random" && typeof u4RandomNumber==="function"){
      return p5Text(u4RandomNumber);
    }

    if(id==="color" && typeof u4ColorPicker==="function"){
      return p5Text(u4ColorPicker);
    }

    if(id==="qr" && typeof u4QR==="function"){
      return p5Text(u4QR);
    }

    if(id==="bulkuuid" && typeof u4BulkUUID==="function"){
      return p5Text(u4BulkUUID);
    }

    if(id==="lorem" && typeof u4Lorem==="function"){
      return p5Text(u4Lorem);
    }

    if(id==="randomname" && typeof u4RandomName==="function"){
      return p5Text(u4RandomName);
    }

    if(id==="coinflip" && typeof u4CoinFlip==="function"){
      return p5Text(u4CoinFlip);
    }

    if(id==="dice" && typeof u4Dice==="function"){
      return p5Text(u4Dice);
    }

    if(id==="numberwords" && typeof u4NumberWords==="function"){
      return p5Text(u4NumberWords);
    }


    /* ---------- DOCUMENTS ---------- */

    if(id==="textpdf" && typeof u4TextPDF==="function"){
      return p5Text(u4TextPDF);
    }

    if(id==="datauri" && typeof u4DataURI==="function"){
      return p5Text(u4DataURI);
    }

    if(id==="filebase64" && typeof u4FileBase64==="function"){
      return p5Text(u4FileBase64);
    }

    return false;
  }


  /*
     Existing openTool को सुरक्षित रखते हुए
     tool modal खुलने के बाद नया connector
     उपलब्ध रहेगा।
  */

  window.aiUtilityRun=function(id){
    return p5Run(id);
  };

  console.log("PART 5 TOOL CONNECTOR LOADED");

})();
/* =========================================
   PART 6 — TOOL RUN HOOK
   ========================================= */

document.addEventListener("click", function(e){

  const btn = e.target.closest("[data-tool-run]");
  if(!btn) return;

  const id = btn.getAttribute("data-tool-run");

  if(window.aiUtilityRun){
    const ok = window.aiUtilityRun(id);

    if(ok){
      e.preventDefault();
      e.stopPropagation();
    }
  }

});

console.log("PART 6 TOOL RUN HOOK LOADED");
/* =========================================
   PART 7 — 109 TOOLS UI CONNECTOR
   ========================================= */

(function(){

  const p7Map = {

    /* TEXT */
    word: "u4WordCounter",
    countchars: "u4CharacterCounter",
    spaces: "u4ExtraSpaces",
    trim: "u4Trim",
    removeblank: "u4BlankLines",
    reverse: "u4Reverse",
    textreversewords: "u4ReverseWords",
    sort: "u4SortLines",
    sortwords: "u4SortWords",
    duplicate: "u4DuplicateLines",
    newlinecomma: "u4LinesComma",
    commanewline: "u4CommaLines",
    sortnum: "u4SortNumbers",
    extractemails: "u4Emails",
    extracturls: "u4URLs",
    findreplace: "u4FindReplace",
    repeattext: "u4Repeat",
    palindrome: "u4Palindrome",
    anagram: "u4Anagram",
    linecount: "u4LineCounter",
    wordfrequency: "u4WordFrequency",
    acronym: "u4Acronym",
    initials: "u4Initials",
    removechars: "u4RemoveCharacters",
    textstats: "u4Statistics",

    /* DEVELOPER */
    json: "u4JSON",
    jsonvalidate: "u4JSONValidate",
    base64: "u4Base64Encode",
    url: "u4URLEncode",
    html: "u4HTMLEscape",
    hash: "u4SHA256",
    regexescape: "u4RegexEscape",
    unicode: "u4Unicode",
    datetounix: "u4DateToUnix",
    unixtodate: "u4UnixToDate",
    csvjson: "u4CSVToJSON",
    jsoncsv: "u4JSONToCSV",
    htmlpreview: "u4HTMLPreview",
    jwtdecode: "u4JWT",

    /* CALCULATORS */
    percent: "u4Percentage",
    discount: "u4Discount",
    gst: "u4GST",
    interest: "u4SimpleInterest",
    compound: "u4CompoundInterest",
    emi: "u4EMI",
    age: "u4Age",
    bmi: "u4BMI",
    tip: "u4Tip",
    ratio: "u4Ratio",
    average: "u4Average",
    median: "u4Median",
    gcd: "u4GCD",
    gcdlcm: "u4GCDLCM",
    factorial: "u4Factorial",
    power: "u4Power",
    squarecube: "u4SquareCube",
    percentagechange: "u4PercentageChange",
    whatpercent: "u4WhatPercent",
    markup: "u4Markup",
    vat: "u4VAT",
    fuel: "u4Fuel",
    breakeven: "u4BreakEven",
    salaryhourly: "u4SalaryHourly",

    /* CONVERTERS */
    temperature: "u4Temperature",
    time: "u4TimeConvert",
    bytes: "u4Bytes",
    length: "u4Length",
    weight: "u4Weight",
    area: "u4Area",
    volume: "u4Volume",
    speed: "u4Speed",
    pressure: "u4Pressure",
    energy: "u4Energy",
    roman: "u4ToRoman",
    dateadd: "u4DateAdd",
    datedifference: "u4DateDifference",
    dayofweek: "u4DayOfWeek",
    leapyear: "u4LeapYear",
    weeknumber: "u4WeekNumber",
    countdown: "u4Countdown",

    /* IMAGES */
    imagecompress: "u4ImageCompressor",
    imageresize: "u4ImageResizer",
    grayscale: "u4ImageGrayscale",
    imageinfo: "u4ImageInfo",
    jpgpng: "u4JpgPng",

    /* GENERATORS */
    random: "u4RandomNumber",
    color: "u4ColorPicker",
    qr: "u4QR",
    bulkuuid: "u4BulkUUID",
    lorem: "u4Lorem",
    randomname: "u4RandomName",
    coinflip: "u4CoinFlip",
    dice: "u4Dice",
    numberwords: "u4NumberWords",

    /* DOCUMENTS */
    textpdf: "u4TextPDF",
    datauri: "u4DataURI",
    filebase64: "u4FileBase64"

  };

  window.aiUtilityP7 = p7Map;

  console.log(
    "PART 7 TOOL MAP LOADED:",
    Object.keys(p7Map).length,
    "tools"
  );

})();