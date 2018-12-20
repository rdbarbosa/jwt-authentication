function name(valor, idade) {
    var idades = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    var status = 'Fraco'
    var classif = [
        { categoria: '6M', Fraco: 0, Razoavel: 145, Bom: 160, MuitoBom: 183, Excelencia: 240 },
        { categoria: '7M', Fraco: 0, Razoavel: 164, Bom: 180, MuitoBom: 202, Excelencia: 250 },
        { categoria: '8M', Fraco: 0, Razoavel: 180, Bom: 200, MuitoBom: 225, Excelencia: 270 },
        { categoria: '9M', Fraco: 0, Razoavel: 200, Bom: 220, MuitoBom: 250, Excelencia: 300 },
        { categoria: '10M', Fraco: 0, Razoavel: 213, Bom: 240, MuitoBom: 270, Excelencia: 330 },
        { categoria: '11M', Fraco: 0, Razoavel: 238, Bom: 261, MuitoBom: 294, Excelencia: 362 },
        { categoria: '12M', Fraco: 0, Razoavel: 264, Bom: 297, MuitoBom: 330, Excelencia: 423 },
        { categoria: '13M', Fraco: 0, Razoavel: 300, Bom: 340, MuitoBom: 390, Excelencia: 500 },
        { categoria: '14M', Fraco: 0, Razoavel: 350, Bom: 400, MuitoBom: 450, Excelencia: 562 },
        { categoria: '15M', Fraco: 0, Razoavel: 400, Bom: 440, MuitoBom: 500, Excelencia: 609 },
        { categoria: '16M', Fraco: 0, Razoavel: 453, Bom: 500, MuitoBom: 553, Excelencia: 700 },
        { categoria: '17M', Fraco: 0, Razoavel: 480, Bom: 520, MuitoBom: 590, Excelencia: 690 }
    ];

    var position = idades.indexOf(idade);

    for (var i = 1; i < 6; i++) {
        var key = Object.keys(classif[position])[i]
        var value = classif[position][key]

        if (value < valor) {
            status = key
        }
    }

    if (status == 'MuitoBom') {
        status = 'Muito Bom'
    }

    console.log(status)
}

name(389, 14)