var tabela = document.getElementById('tabela-diario');



function adicionarAluno() {
    document.getElementById('add-aluno').style.display = 'block';
}

function removerAluno() {
    document.getElementById('rm-aluno').style.display = 'block';
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
    celNumero.classList.add('numero');

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

    e.preventDefault();
}

document.getElementById('submit-form-rm').onclick = function(e) {

    var mat = document.getElementById('matricula-aluno-rm').value;
    var linhas = document.getElementsByTagName('tr');
    for(i = 4; i < linhas.length; i++ ) {
        if(linhas[i].getElementsByClassName('matricula')[0].innerHTML === mat) {
            document.getElementById('tabela-diario').deleteRow(i);

            //este loop numera as colunas novamente apos uma remoção
            var numero = 1;
            for(j = 4; j < linhas.length; j++) {
                console.log(linhas[j]);
                linhas[j].getElementsByClassName('numero')[0].innerHTML = numero;
                numero++;
            }

        }

    }

    document.getElementById('rm-aluno').style.display = 'none';
    e.preventDefault();

}