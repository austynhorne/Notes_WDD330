 fetch('https://austynhorne.github.io/Notes_WDD330/Week_5/questions.json')
 .then((response) => response.json())
 .then((jsObject) => {
  console.table(jsObject);
  const question = jsObject["Question"];
  for (let i = 0; i < question.length; i++) {
  }
 });
function myFunction() {
  let letter = document.getElementById("myInput").value;
  let text;

  if (letter === "location1") {
    text = "Right";
    
  } else {
    text = "Wrong";
  }
  document.getElementById("nfl").innerHTML = text;
}
