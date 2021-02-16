let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.onload = function() {
        resolve(this.responseText)
    }
    xhr.onerror = function() {
        reject(`Network Error`)
    };
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',
        true)
    xhr.send()
})
promise
    .then((result) => document.writeln(result))
    .catch((error) => document.writeln(error))
document.writeln('loading ...')