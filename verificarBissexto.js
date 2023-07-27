
function isBissexto(ano) {
    if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function verificarAnoBissexto() {
    let anoNascimento = prompt("Digite o ano de nascimento:");

    anoNascimento = parseInt(anoNascimento); 

    if (isNaN(anoNascimento)) {
        alert("Ano inválido! Digite um ano válido.");
    } else {
        if (isBissexto(anoNascimento)) {
            alert(anoNascimento + " é um ano bissexto.");
        } else {
            alert(anoNascimento + " não é um ano bissexto.");
        }
    }
}
   
verificarAnoBissexto();

