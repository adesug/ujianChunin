let promise = fetch('https://jsonplaceholder.typicode.com/todos/1')
promise
    .then((response) => response.json())
    .then((json) => document.writeln(JSON.stringify(json)))
    .catch((error) => document.writeln(error))
document.writeln('loading ...')