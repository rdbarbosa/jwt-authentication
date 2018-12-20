function imc(peso, altura) {
    return peso/Math.pow(altura, 2)
}

console.log(imc(40, 1.4))

function classif_imc_proesp(sexo, idade, imc) {
    let idades = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    let imc_fem = [17, 17.1, 18.2, 19.1, 20.9, 22.3, 22.6, 22, 22, 22.4, 24, 24]
    let imc_masc = [17.7, 17.8, 19.2, 19.3, 20.7, 22.1, 22.2, 22, 22.2, 23, 24, 25.4]

    let position = idades.indexOf(idade);

    if (sexo == 'F') {
        return (imc_fem[position] > imc) ? 'Zona Saudável' : 'Zona de Risco à Saúde'
    } else if (sexo == 'M') {
        return (imc_masc[position] > imc) ? 'Zona Saudável' : 'Zona de Risco à Saúde'
    }
}


console.log(classif_imc_proesp('F', 10, 21))