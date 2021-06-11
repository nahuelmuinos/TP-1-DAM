const dni = prompt("ingrese su DNI");
miArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
if (dni > 0 && dni < 100000000) {
    console.log(miArray[parseInt(dni%23)])
}