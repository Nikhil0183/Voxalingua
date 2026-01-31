// 🌍 Master Language List (50+)

const languages = [
  ["en-US","English"],
  ["hi-IN","Hindi"],
  ["es-ES","Spanish"],
  ["fr-FR","French"],
  ["de-DE","German"],
  ["it-IT","Italian"],
  ["pt-PT","Portuguese"],
  ["ru-RU","Russian"],
  ["ar-SA","Arabic"],
  ["ja-JP","Japanese"],
  ["ko-KR","Korean"],
  ["zh-CN","Chinese"],
  ["bn-IN","Bengali"],
  ["ta-IN","Tamil"],
  ["te-IN","Telugu"],
  ["mr-IN","Marathi"],
  ["gu-IN","Gujarati"],
  ["kn-IN","Kannada"],
  ["ml-IN","Malayalam"],
  ["pa-IN","Punjabi"],
  ["ur-PK","Urdu"],
  ["th-TH","Thai"],
  ["vi-VN","Vietnamese"],
  ["tr-TR","Turkish"],
  ["id-ID","Indonesian"],
  ["ms-MY","Malay"],
  ["pl-PL","Polish"],
  ["nl-NL","Dutch"],
  ["sv-SE","Swedish"],
  ["fi-FI","Finnish"],
  ["no-NO","Norwegian"],
  ["da-DK","Danish"],
  ["el-GR","Greek"],
  ["he-IL","Hebrew"],
  ["ro-RO","Romanian"],
  ["hu-HU","Hungarian"],
  ["cs-CZ","Czech"],
  ["sk-SK","Slovak"],
  ["uk-UA","Ukrainian"],
  ["bg-BG","Bulgarian"],
  ["hr-HR","Croatian"],
  ["sr-RS","Serbian"],
  ["lt-LT","Lithuanian"],
  ["lv-LV","Latvian"],
  ["et-EE","Estonian"],
  ["fa-IR","Persian"],
  ["sw-KE","Swahili"],
  ["fil-PH","Filipino"],
  ["is-IS","Icelandic"],
  ["af-ZA","Afrikaans"]
];


// 🔹 Auto fill dropdowns (works for ALL pages)

function populateDropdowns(){

  const selects = document.querySelectorAll("select");

  selects.forEach(select=>{
    languages.forEach(lang=>{
      const option = document.createElement("option");
      option.value = lang[0];
      option.textContent = lang[1];
      select.appendChild(option);
    });
  });

}

window.onload = populateDropdowns;
