fetch('https://austynhorne.github.io/Notes_WDD330/Week_5/questions.json')
.then((response) => response.json())
.then((jsObject) => {
  console.table(jsObject);
  const teamname = jsObject["teamname"];
  for (let i = 0; i < Teamname.length; i++) {
  }
  document.getElementById('name1').textContent = jsObject.Teamname[0].name;
});