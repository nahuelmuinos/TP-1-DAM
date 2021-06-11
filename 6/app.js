const num = prompt("ingrese su DNI");
for (let i = num; i >= 1; i = i-2) {
    let list = "";
    for (let j = 0; j < i; j++) {
        list = list+i;
    }
    console.log(list);
}