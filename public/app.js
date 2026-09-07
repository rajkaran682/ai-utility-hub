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
