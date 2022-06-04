/*1-Criar um função que recebe dois numeros com parametros,  
2-confira se os numeros soa iguais
3 confira se a soma dos numero é maior que 10 ou maior que 20
4 - retone uma string direnso os numeros num1 e num2 não/ são iguias s dua soma é some que é maior/menor que 10 e maior/menor que 20*/


function comprarNumeros(num1, num2) {
    if (!num1 || !nun2) return 'Define doir número X, X!';

    const primeiraFrase = criaPrimieraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return '${primieraFrase} ${segunraFrase}';
}

function criaPrimieraFrase(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não';
    }

    return ' Os Numero ${num1} e ${num2} ${saoIguais} são iguais.';
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return ' Sua somra é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20 ';
}
console.log(comparaNumeros(1, 2));