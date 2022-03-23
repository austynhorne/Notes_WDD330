fetch('https://austynhorne.github.io/Notes_WDD330/Week_5/questions.json')
.then((response) => response.json())
.then((jsObject) => {
  console.table(jsObject);
  const Questions = jsObject["Questions"];
  for (let i = 0; i < Questions.length; i++) {
  }
  document.getElementById('location1').textContent = jsObject.Questions[0].location;
});