var add = false;
var rm = false;
var tabela = document.getElementById('tabela-diario');



function adicionarAluno() {
    if(!add) {
        document.getElementById('add-aluno').style.display = 'block';
        add = true;
    }
}

function removerAluno() {
    if(!rm) {
        document.getElementById('rm-aluno').style.display = 'block';
        add = true;
    }
}
document.getElementById('submit-form').onclick = function(e) {
    
    var nome = document.getElementById('nome-aluno').value;
    var matricula = document.getElementById('matricula-aluno').value;
    var numero = document.getElementsByTagName('tr').length - 3;


    var row = tabela.insertRow();
    var celNumero = row.insertCell(0);
    var celMatricula = row.insertCell(1);
    var celNome = row.insertCell(2);

    celNumero.innerHTML = numero;
    celNumero.classList.add('td-2');

    celMatricula.innerHTML = matricula;
    celMatricula.classList.add('td-5');
    celMatricula.colSpan = 2
    celMatricula.classList.add('matricula');

    celNome.innerHTML = nome;
    celNome.classList.add('alinhar-esquerda');
    celNome.colSpan = 3

    row.insertCell(3).innerHTML = 0;
    row.insertCell(4).innerHTML = 0;
    row.insertCell(5).innerHTML = '-';
    row.insertCell(6).innerHTML = '-';
    row.insertCell(7).innerHTML = '-';
    row.insertCell(8).innerHTML = '-';
    row.insertCell(9).innerHTML = '-';
    row.insertCell(10).innerHTML = '-';
    row.insertCell(11).innerHTML = 0;
    row.insertCell(12).innerHTML = '-';
    row.insertCell(13).innerHTML = '-';

    document.getElementById('add-aluno').style.display = 'none';
    add = false;

    e.preventDefault();
}

document.getElementById('submit-form-rm').onclick = function(e) {

    var mat = document.getElementById('matricula-aluno-rm').value;
    var linhas = document.getElementsByTagName('tr');

    for(i = 4; i < linhas.length; i++ ) {
        console.log(linhas[i].getElementsByClassName('matricula'))
        if(linhas[i].getElementsByClassName('matricula').value === mat) {

            document.getElementById('tabela-diario').deleteRow(i);
            console.log('dasd')

        }

    }



    e.preventDefault();

}