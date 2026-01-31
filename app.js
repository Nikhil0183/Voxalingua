const micBtn = document.getElementById("micBtn");
const output = document.getElementById("output");

micBtn.onclick = ()=>{
  const rec = new webkitSpeechRecognition();
  rec.lang = sourceLang.value;
  rec.start();

  rec.onresult = async (e)=>{
    const original = e.results[0][0].transcript;

    const target = targetLang.value.split("-")[0];

    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${original}&langpair=auto|${target}`
    );

    const data = await res.json();
    const translated = data.responseData.translatedText;

    speak(translated, targetLang.value);

    output.innerText = translated;

    saveHistory(original, translated);
  };
};

function speak(text, lang){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  speechSynthesis.speak(u);
}


// 🔥 NEW PART (history saving)
function saveHistory(from, to){
  const history = JSON.parse(localStorage.getItem("history")) || [];

  history.push({
    from: from,
    to: to,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("history", JSON.stringify(history));
}
