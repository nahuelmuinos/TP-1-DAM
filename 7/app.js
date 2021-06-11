for (let i = 1; i < 501; i++) {
    let line = i+'';
    if (i%4 == 0) {
        line = line+'(Múltiplo de 4)';
    }
    if (i%9 == 0) {
        line = line+'(Múltiplo de 9)';
    }
    console.log(line);
    if (i%5 == 0) {
        console.log('—————————————————————')
    }
}