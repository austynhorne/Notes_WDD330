let questions;
fetch('https://austynhorne.github.io/Notes_WDD330/Week_5/questions.json')
.then((response) => response.json())
.then((jsObject) => {
console.table(jsObject);
questions = jsObject["Question"];
});
function myFunction() {
let city = document.getElementById("myInput").value;
let text;

for (let i = 0; i < questions.length; i++) {
if (questions[i].location === city){
text = "Right";
break;
} else if (questions[0].location < city){
text = "Right city, wrong state.";
break;
}else {
text = "Wrong";
}
}
document.getElementById("nfl").innerHTML = text;
}
