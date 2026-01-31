async function translate(text, target){
  const res = await fetch(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=auto|${target}`
  );

  const data = await res.json();
  return data.responseData.translatedText;
}

function speak(text, lang){
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  speechSynthesis.speak(u);
}

function listen(lang, callback){
  const rec = new webkitSpeechRecognition();
  rec.lang = lang;
  rec.start();

  rec.onresult = (e)=>{
    callback(e.results[0][0].transcript);
  };
}

function speakA(){
  listen(langA.value, async(text)=>{
    const translated = await translate(text, langB.value.split("-")[0]);
    speak(translated, langB.value);
  });
}

function speakB(){
  listen(langB.value, async(text)=>{
    const translated = await translate(text, langA.value.split("-")[0]);
    speak(translated, langA.value);
  });
}
