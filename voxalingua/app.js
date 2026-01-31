const micBtn = document.getElementById("micBtn");
const output = document.getElementById("output");

let recognition = new webkitSpeechRecognition();

micBtn.onclick = ()=>{
  recognition.lang = sourceLang.value;
  recognition.start();
};

recognition.onresult = async (e)=>{
  let text = e.results[0][0].transcript;

  const target = targetLang.value.split("-")[0];

  const res = await fetch(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=auto|${target}`
  );

  const data = await res.json();
  speak(data.responseData.translatedText, targetLang.value);
};

function speak(text, lang){
  let u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  speechSynthesis.speak(u);
}
