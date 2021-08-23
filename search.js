import "mark.js"

function search() {
    let userInput = document.getElementById('searchText').value;
    let context = document.querySelectorAll("body");
    let instance = new Mark(context);
    instance.unmark(userInput);
    instance.mark(userInput);
}