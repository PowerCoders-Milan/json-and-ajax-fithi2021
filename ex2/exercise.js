fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.text())
  .then(data => document.body.innerHTML = data);

