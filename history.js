const list = document.getElementById("historyList");

function loadHistory(){
  const data = JSON.parse(localStorage.getItem("history")) || [];

  list.innerHTML = "";

  data.reverse().forEach(item=>{
    const div = document.createElement("div");

    div.style.margin="10px 0";
    div.style.padding="10px";
    div.style.background="#151521";
    div.style.borderRadius="12px";

    div.innerHTML = `
      <b>${item.from}</b> ➜ <b>${item.to}</b><br>
      <small>${item.time}</small><br>
      <button onclick="speak('${item.to}')">🔊 Play</button>
    `;

    list.appendChild(div);
  });
}

function speak(text){
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function clearHistory(){
  localStorage.removeItem("history");
  loadHistory();
}

loadHistory();
