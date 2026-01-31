let words = ["Hello","Thank you","Good morning","Welcome"];
let current = words[0];

const wordEl = document.getElementById("word");
const result = document.getElementById("result");

function newWord(){
  current = words[Math.floor(Math.random()*words.length)];
  wordEl.innerText = current;
}

function play(){
  let u = new SpeechSynthesisUtterance(current);
  speechSynthesis.speak(u);
}

function record(){
  let rec = new webkitSpeechRecognition();
  rec.start();

  rec.onresult = (e)=>{
    let said = e.results[0][0].transcript;

    if(said.toLowerCase().includes(current.toLowerCase())){
      result.innerText = "✅ Correct!";
    }else{
      result.innerText = "❌ Try again";
    }

    newWord();
  }
}
