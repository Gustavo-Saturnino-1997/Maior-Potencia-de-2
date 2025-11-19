const formulario = document.querySelector("#form");

formulario.addEventListener("submit", function (ev) {
    ev.preventDefault();

    const input = document.querySelector("#numeros");

    const input_para_string = input.value;

    const valor_do_input_em_strings_separadas = input_para_string.split(",");

    const string_para_number = valor_do_input_em_strings_separadas.map(function (numero) {
        return parseInt(numero);
    });

    const array_de_potencias_de_dois = [];

    for (const numero of string_para_number) {

        if (numero === 1) {
            array_de_potencias_de_dois.push(numero);
            continue;
        }


        if (numero % 2 === 0 && numero > 1) {
            let n = numero;

            for (; n > 1; n = n / 2) { }

            if (n === 1) {
                array_de_potencias_de_dois.push(numero);
            }
        }
    }

    let texto_para_o_usuario = "";

    if (array_de_potencias_de_dois.length === 0) {
        texto_para_o_usuario += `Não foi encontrado nenhum número que seja potência de dois`;
    }
    else {
        const maior_potencia_encontrada = Math.max(...array_de_potencias_de_dois);
        texto_para_o_usuario += `A maior Potência de 2 encontrado foi ${maior_potencia_encontrada}`;
    }

    alert(`De acordo com os valores informados: ${string_para_number}. Foi determinado que: ${texto_para_o_usuario}.`);

    input.value = '';

});

















