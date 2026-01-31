const micBtn = document.getElementById("micBtn");
const output = document.getElementById("output");

micBtn.onclick = () => {

  const recognition = new webkitSpeechRecognition();
  recognition.lang = sourceLang.value;   // use selected source
  recognition.start();

  recognition.onresult = async (e) => {

    const spokenText = e.results[0][0].transcript;

    // ✅ FIX: use real source + target (NOT auto)
    const source = sourceLang.value.split("-")[0];
    const target = targetLang.value.split("-")[0];

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(spokenText)}&langpair=${source}|${target}`;

    const res = await fetch(url);
    const data = await res.json();

    const translated = data.responseData.translatedText;

    speak(translated, targetLang.value);

    output.innerText = translated;

    saveHistory(spokenText, translated);
  };
};


function speak(text, lang){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  speechSynthesis.speak(u);
}


// history saving
function saveHistory(from, to){
  const history = JSON.parse(localStorage.getItem("history")) || [];

  history.push({
    from,
    to,
    time: new Date().toLocaleString()
  });

  localStorage.setItem("history", JSON.stringify(history));
}
