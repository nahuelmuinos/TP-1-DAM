const miArray = [];
do {
    text = prompt("ingrese una cadena");
    if (text != null && text != "") {
        miArray.push(text);
    }
} while (text != null);
miArray.forEach(element => {
    console.log('-'+element);
});