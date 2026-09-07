const tools = [

  {
    id: "word-counter",
    name: "Word Counter",
    cat: "Writing",
    ico: "📝",
    desc: "Count words, characters and sentences.",
    popular: true
  },

  {
    id: "case-converter",
    name: "Case Converter",
    cat: "Writing",
    ico: "Aa",
    desc: "Convert text to UPPER, lower or Title Case."
  },

  {
    id: "remove-spaces",
    name: "Remove Extra Spaces",
    cat: "Writing",
    ico: "↔",
    desc: "Clean repeated spaces and blank lines."
  },

  {
    id: "percentage",
    name: "Percentage Calculator",
    cat: "Calculators",
    ico: "%",
    desc: "Find percentage, increase and decrease.",
    popular: true
  },

  {
    id: "age",
    name: "Age Calculator",
    cat: "Calculators",
    ico: "🎂",
    desc: "Calculate age from date of birth."
  },

  {
    id: "bmi",
    name: "BMI Calculator",
    cat: "Calculators",
    ico: "⚖️",
    desc: "Calculate body mass index."
  },

  {
    id: "password",
    name: "Password Generator",
    cat: "Security",
    ico: "🔐",
    desc: "Generate a strong random password.",
    popular: true
  },

  {
    id: "json",
    name: "JSON Formatter",
    cat: "Developer",
    ico: "{ }",
    desc: "Format and validate JSON."
  },

  {
    id: "base64",
    name: "Base64 Encoder",
    cat: "Developer",
    ico: "🔣",
    desc: "Encode or decode Base64 text."
  },

  {
    id: "image-compressor",
    name: "Image Compressor",
    cat: "Image",
    ico: "🖼️",
    desc: "Compress an image directly in your browser.",
    popular: true
  },

  {
    id: "image-resizer",
    name: "Image Resizer",
    cat: "Image",
    ico: "↗️",
    desc: "Resize images and download them."
  },

  {
    id: "text-to-slug",
    name: "Text to Slug",
    cat: "Writing",
    ico: "🔗",
    desc: "Create SEO-friendly URL slugs."
  }

];


const cats = [
  "All",
  ...new Set(tools.map(t => t.cat))
];


const toolGrid =
  document.querySelector("#toolGrid");

const popularGrid =
  document.querySelector("#popularGrid");

const filters =
  document.querySelector("#filters");

const search =
  document.querySelector("#search");


let activeCat = "All";


function card(t) {

  return `
    <article
      class="card"
      data-id="${t.id}"
    >

      <div class="ico">
        ${t.ico}
      </div>

      <h3>
        ${t.name}
      </h3>

      <p>
        ${t.desc}
      </p>

    </article>
  `;
}


function render() {

  const q =
    search.value
      .trim()
      .toLowerCase();


  const list =
    tools.filter(t =>

      (activeCat === "All" ||
        t.cat === activeCat)

      &&

      (
        !q ||

        (
          t.name +
          " " +
          t.desc +
          " " +
          t.cat
        )
        .toLowerCase()
        .includes(q)
      )

    );


  toolGrid.innerHTML =
    list.length

      ? list.map(card).join("")

      : "<p>No matching tools found.</p>";


  popularGrid.innerHTML =
    tools
      .filter(t => t.popular)
      .map(card)
      .join("");


  document
    .querySelectorAll(".card")
    .forEach(x => {

      x.onclick = () =>
        openTool(x.dataset.id);

    });

}


cats.forEach(c => {

  const b =
    document.createElement("button");

  b.textContent = c;

  b.onclick = () => {

    activeCat = c;

    render();

  };

  filters.appendChild(b);

});


search.oninput = render;


document
  .querySelectorAll("[data-jump]")
  .forEach(b => {

    b.onclick = () =>
      openTool(b.dataset.jump);

  });


render();


/* MODAL */

const modal =
  document.querySelector("#modal");

const body =
  document.querySelector("#modalBody");


document
  .querySelector("#closeModal")
  .onclick = () =>
    modal.classList.add("hidden");


modal.onclick = e => {

  if (e.target === modal) {

    modal.classList.add("hidden");

  }

};


/* OPEN TOOL */

function openTool(id) {

  const t =
    tools.find(x => x.id === id);

  if (!t) return;


  body.innerHTML = `

    <h2>
      ${t.ico} ${t.name}
    </h2>

    <p>
      ${t.desc}
    </p>

    ${toolUI(id)}

  `;


  modal.classList.remove("hidden");


  bindTool(id);

}


/* TOOL UI */

function toolUI(id) {

  switch (id) {


    case "word-counter":

      return `

        <div class="tool-form">

          <textarea
            id="txt"
            rows="9"
            placeholder="Paste or type text..."
          ></textarea>

          <div
            id="res"
            class="result"
          >
            Words: 0 |
            Characters: 0 |
            Sentences: 0
          </div>

        </div>

      `;


    case "case-converter":

      return `

        <div class="tool-form">

          <textarea
            id="txt"
            rows="8"
          ></textarea>

          <select id="case">

            <option value="upper">
              UPPERCASE
            </option>

            <option value="lower">
              lowercase
            </option>

            <option value="title">
              Title Case
            </option>

          </select>

          <button id="run">
            Convert
          </button>

          <textarea
            id="out"
            rows="8"
            readonly
          ></textarea>

        </div>

      `;


    case "remove-spaces":

      return `

        <div class="tool-form">

          <textarea
            id="txt"
            rows="8"
          ></textarea>

          <button id="run">
            Clean text
          </button>

          <textarea
            id="out"
            rows="8"
            readonly
          ></textarea>

        </div>

      `;


    case "percentage":

      return `

        <div class="tool-form">

          <input
            id="a"
            type="number"
            placeholder="Value"
          >

          <input
            id="b"
            type="number"
            placeholder="Percent"
          >

          <button id="run">
            Calculate
          </button>

          <div
            id="res"
            class="result"
          ></div>

        </div>

      `;


    case "age":

      return `

        <div class="tool-form">

          <label>
            Date of birth
          </label>

          <input
            id="dob"
            type="date"
          >

          <button id="run">
            Calculate age
          </button>

          <div
            id="res"
            class="result"
          ></div>

        </div>

      `;


    case "bmi":

      return `

        <div class="tool-form">

          <input
            id="kg"
            type="number"
            placeholder="Weight (kg)"
          >

          <input
            id="cm"
            type="number"
            placeholder="Height (cm)"
          >

          <button id="run">
            Calculate BMI
          </button>

          <div
            id="res"
            class="result"
          ></div>

        </div>

      `;


    case "password":

      return `

        <div class="tool-form">

          <input
            id="len"
            type="number"
            value="16"
            min="6"
            max="128"
          >

          <button id="run">
            Generate
          </button>

          <input
            id="out"
            readonly
          >

          <button id="copy">
            Copy
          </button>

        </div>

      `;


    case "json":

      return `

        <div class="tool-form">

          <textarea
            id="txt"
            rows="10"
            placeholder='{"name":"Raj"}'
          ></textarea>

          <button id="run">
            Format & Validate
          </button>

          <div
            id="res"
            class="result"
          ></div>

        </div>

      `;


    case "base64":

      return `

        <div class="tool-form">

          <textarea
            id="txt"
            rows="7"
          ></textarea>

          <select id="mode">

            <option value="enc">
              Encode
            </option>

            <option value="dec">
              Decode
            </option>

          </select>

          <button id="run">
            Convert
          </button>

          <textarea
            id="out"
            rows="7"
            readonly
          ></textarea>

        </div>

      `;


    case "text-to-slug":

      return `

        <div class="tool-form">

          <textarea
            id="txt"
            rows="5"
          ></textarea>

          <button id="run">
            Create slug
          </button>

          <input
            id="out"
            readonly
          >

        </div>

      `;


    case "image-compressor":

      return `

        <div class="tool-form">

          <input
            id="file"
            type="file"
            accept="image/*"
          >

          <label>
            Quality

            <input
              id="quality"
              type="range"
              min=".2"
              max="1"
              step=".05"
              value=".75"
            >

          </label>

          <button id="run">
            Compress
          </button>

          <div
            id="res"
            class="result"
          ></div>

        </div>

      `;


    case "image-resizer":

      return `

        <div class="tool-form">

          <input
            id="file"
            type="file"
            accept="image/*"
          >

          <input
            id="width"
            type="number"
            placeholder="New width (px)"
          >

          <button id="run">
            Resize
          </button>

          <div
            id="res"
            class="result"
          ></div>

        </div>

      `;

  }

}


/* BIND TOOLS */

function bindTool(id) {

  const q =
    selector =>
      body.querySelector(selector);


  const run =
    q("#run");


  /* WORD COUNTER */

  if (id === "word-counter") {

    q("#txt").oninput = e => {

      let s = e.target.value;

      let w =
        s.trim()
          ? s.trim().split(/\s+/).length
          : 0;

      let sen =
        (s.match(/[.!?]+/g) || [])
          .length;


      q("#res").textContent =
        `Words: ${w} | Characters: ${s.length} | Sentences: ${sen}`;

    };

  }


  /* CASE CONVERTER */

  if (id === "case-converter") {

    run.onclick = () => {

      let s =
        q("#txt").value;

      let c =
        q("#case").value;


      q("#out").value =

        c === "upper"

          ? s.toUpperCase()

          : c === "lower"

          ? s.toLowerCase()

          : s
              .toLowerCase()
              .replace(
                /\b\w/g,
                x => x.toUpperCase()
              );

    };

  }


  /* REMOVE SPACES */

  if (id === "remove-spaces") {

    run.onclick = () => {

      q("#out").value =
        q("#txt")
          .value
          .replace(/[ \t]+/g, " ")
          .replace(/\n\s*\n+/g, "\n\n")
          .trim();

    };

  }


  /* PERCENTAGE */

  if (id === "percentage") {

    run.onclick = () => {

      let a =
        +q("#a").value;

      let b =
        +q("#b").value;


      q("#res").textContent =

        `${b}% of ${a} = ${(a*b/100).toFixed(2)}

${a} increased by ${b}% = ${(a*(1+b/100)).toFixed(2)}

${a} decreased by ${b}% = ${(a*(1-b/100)).toFixed(2)}`;

    };

  }


  /* AGE */

  if (id === "age") {

    run.onclick = () => {

      let d =
        new Date(q("#dob").value);


      if (isNaN(d)) return;


      q("#res").textContent =
        ageFrom(d);

    };

  }


  /* BMI */

  if (id === "bmi") {

    run.onclick = () => {

      let kg =
        +q("#kg").value;

      let cm =
        +q("#cm").value;


      let b =
        kg / ((cm / 100) ** 2);


      q("#res").textContent =

        isFinite(b)

          ? `BMI: ${b.toFixed(1)}

${b < 18.5
  ? "Underweight"
  : b < 25
  ? "Normal range"
  : b < 30
  ? "Overweight"
  : "Obesity"}`

          : "Enter valid values";

    };

  }


  /* PASSWORD */

  if (id === "password") {

    run.onclick = () => {

      let chars =
        "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*";


      let n =
        Math.min(
          128,
          Math.max(
            6,
            +q("#len").value || 16
          )
        );


      let s = "";


      for (
        let i = 0;
        i < n;
        i++
      ) {

        s +=
          chars[
            Math.floor(
              Math.random() * chars.length
            )
          ];

      }


      q("#out").value = s;

    };


    q("#copy").onclick = () => {

      navigator.clipboard
        ?.writeText(q("#out").value);

    };

  }


  /* JSON */

  if (id === "json") {

    run.onclick = () => {

      try {

        q("#res").textContent =
          JSON.stringify(
            JSON.parse(
              q("#txt").value
            ),
            null,
            2
          );

      }

      catch (e) {

        q("#res").textContent =
          "Invalid JSON: " +
          e.message;

      }

    };

  }


  /* BASE64 */

  if (id === "base64") {

    run.onclick = () => {

      try {

        q("#out").value =

          q("#mode").value === "enc"

            ? btoa(
                unescape(
                  encodeURIComponent(
                    q("#txt").value
                  )
                )
              )

            : decodeURIComponent(
                escape(
                  atob(
                    q("#txt").value
                  )
                )
              );

      }

      catch (e) {

        q("#out").value =
          "Invalid Base64";

      }

    };

  }


  /* SLUG */

  if (id === "text-to-slug") {

    run.onclick = () => {

      q("#out").value =

        q("#txt")
          .value
          .toLowerCase()
          .normalize("NFKD")
          .replace(/[^\w\s-]/g, "")
          .trim()
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "");

    };

  }


  /* IMAGE PROCESS */

  if (id === "image-compressor") {

    run.onclick =
      () => imageProcess(false, q);

  }


  if (id === "image-resizer") {

    run.onclick =
      () => imageProcess(true, q);

  }

}


/* AGE CALCULATOR */

function ageFrom(d) {

  let n =
    new Date();


  let y =
    n.getFullYear() -
    d.getFullYear();


  let m =
    n.getMonth() -
    d.getMonth();


  let day =
    n.getDate() -
    d.getDate();


  if (day < 0)
    m--;


  if (m < 0) {

    y--;

    m += 12;

  }


  return `Age: ${y} years, ${m} months`;

}


/* IMAGE PROCESSOR */

function imageProcess(resize, q) {

  const f =
    q("#file").files[0];


  if (!f) {

    q("#res").textContent =
      "Choose an image first.";

    return;

  }


  const img =
    new Image();


  const url =
    URL.createObjectURL(f);


  img.onload = () => {

    let scale =
      resize

        ? Math.min(
            1,
            (+q("#width").value ||
              img.width) /
              img.width
          )

        : 1;


    let c =
      document.createElement(
        "canvas"
      );


    c.width =
      Math.round(
        img.width * scale
      );


    c.height =
      Math.round(
        img.height * scale
      );


    c
      .getContext("2d")
      .drawImage(
        img,
        0,
        0,
        c.width,
        c.height
      );


    let quality =
      resize
        ? .9
        : +q("#quality").value;


    c.toBlob(
      blob => {

        let a =
          document.createElement("a");


        a.href =
          URL.createObjectURL(blob);


        a.download =
          (
            resize
              ? "resized-"
              : "compressed-"
          ) +
          f.name.replace(
            /\.[^.]+$/,
            ""
          ) +
          ".jpg";


        a.className =
          "download";


        a.textContent =
          `Download (${Math.round(
            blob.size / 1024
          )} KB)`;


        q("#res").innerHTML = "";

        q("#res").append(a);

      },

      "image/jpeg",

      quality

    );


    URL.revokeObjectURL(url);

  };


  img.src = url;

}


/* DARK MODE */

document
  .querySelector("#themeBtn")
  .onclick = () => {

    document.body
      .classList
      .toggle("dark");


    localStorage.theme =
      document.body.classList.contains("dark")
        ? "dark"
        : "light";

  };


if (
  localStorage.theme === "dark"
) {

  document.body
    .classList
    .add("dark");

}
