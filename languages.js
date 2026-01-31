const languages = [
  {code:"en-US", name:"English"},
  {code:"hi-IN", name:"Hindi"},
  {code:"es-ES", name:"Spanish"},
  {code:"fr-FR", name:"French"},
  {code:"de-DE", name:"German"},
  {code:"ja-JP", name:"Japanese"},
  {code:"ko-KR", name:"Korean"},
  {code:"ar-SA", name:"Arabic"},
  {code:"ru-RU", name:"Russian"},
  {code:"pt-PT", name:"Portuguese"}
];

const src = document.getElementById("sourceLang");
const tgt = document.getElementById("targetLang");

languages.forEach(l=>{
  src.innerHTML += `<option value="${l.code}">${l.name}</option>`;
  tgt.innerHTML += `<option value="${l.code}">${l.name}</option>`;
});
