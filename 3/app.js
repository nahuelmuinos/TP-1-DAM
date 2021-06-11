const miArray = [];
let num;
do {
    num = prompt("ingrese un número");
    if (isNaN(num) == false) {
        if (num != null && num != "") {
            miArray.push(num);
        }
    }
    else{
        alert("Ingrese solamente números");
    }
} while (num !== null);
miArray.forEach(element => {
    num = num + parseInt(element);
});
console.log("La suma total de los números es: "+num);