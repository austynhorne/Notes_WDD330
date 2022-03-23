fetch('https://austynhorne.github.io/Notes_WDD330/Week_5/questions.json')
.then((response) => response.json())
.then((jsObject) => {
  console.table(jsObject);
  const business = jsObject["Business"];
  for (let i = 0; i < Business.length; i++) {
  }
  document.getElementById('name1').textContent = jsObject.Business[0].name;
});