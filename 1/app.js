const nota = prompt("ingrese su edad");
if (nota > 0) {
    if (nota < 3) {
        console.log("Muy deficiente");
    }
    else{ 
        if (nota < 5){
            console.log("Insuficiente");
        }
        else{
            if (nota < 6) {
                console.log("Suficiente");
            }
            else{
                if (nota < 7) {
                    console.log("Bien");
                }
                else{
                    if (nota < 9) {
                        console.log("Notable");
                    } 
                    else {
                        if (nota >= 9 && nota <= 10) {
                            console.log("Sobresaliente");
                        }
                        else{
                            console.log("Nota imposible");
                        }
                    }
                }
            }
        }
    }
}
else{
    console.log("Nota imposible");
}