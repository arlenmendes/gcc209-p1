var tabela = document.getElementById('tabela-diario');

var url = "http://localhost:8000";

function adicionarAluno() {
    document.getElementById('add-aluno').style.display = 'block';
}

function removerAluno() {
    document.getElementById('rm-aluno').style.display = 'block';
}

function adicionaAluno(aluno) {
    var nome = aluno.nome;
    var matricula = aluno.matricula;
    var numero = aluno.id;


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

    // document.getElementById('add-aluno').style.display = 'none';

}

document.getElementById('submit-form').onclick = function(e) {
    
    var nome = document.getElementById('nome-aluno').value;
    var matricula = document.getElementById('matricula-aluno').value;

    // var row = tabela.insertRow();
    // var celNumero = row.insertCell(0);
    // var celMatricula = row.insertCell(1);
    // var celNome = row.insertCell(2);
    //
    // celNumero.innerHTML = numero;
    // celNumero.classList.add('td-2');
    // celNumero.classList.add('numero');
    //
    // celMatricula.innerHTML = matricula;
    // celMatricula.classList.add('td-5');
    // celMatricula.colSpan = 2
    // celMatricula.classList.add('matricula');
    //
    // celNome.innerHTML = nome;
    // celNome.classList.add('alinhar-esquerda');
    // celNome.colSpan = 3
    //
    // row.insertCell(3).innerHTML = 0;
    // row.insertCell(4).innerHTML = 0;
    // row.insertCell(5).innerHTML = '-';
    // row.insertCell(6).innerHTML = '-';
    // row.insertCell(7).innerHTML = '-';
    // row.insertCell(8).innerHTML = '-';
    // row.insertCell(9).innerHTML = '-';
    // row.insertCell(10).innerHTML = '-';
    // row.insertCell(11).innerHTML = 0;
    // row.insertCell(12).innerHTML = '-';
    // row.insertCell(13).innerHTML = '-';

    document.getElementById('add-aluno').style.display = 'none';

    e.preventDefault();
    salvaAluno({nome: nome, matricula: matricula});
}

document.getElementById('submit-form-rm').onclick = function(e) {

    var num = document.getElementById('matricula-aluno-rm').value;
    removerAlunoBanco(num);
    var linhas = document.getElementsByTagName('tr');
    for(i = 4; i < linhas.length; i++ ) {
        if(linhas[i].getElementsByClassName('numero')[0].innerHTML === num) {
            document.getElementById('tabela-diario').deleteRow(i);
        }

    }

    document.getElementById('rm-aluno').style.display = 'none';
    e.preventDefault();

}


// Busca alunos na api
function getAlunos() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
            var dados;
            try {
                dados = JSON.parse(request.responseText);
            } catch(err) {
                console.log(err.message + " em " + request.responseText);
            }
            carregarAlunos(dados);
        }


    };
    request.open("GET", url + "/alunos");
    request.send();
}

function carregarAlunos(alunos) {
    for(var aluno in alunos) {

        adicionaAluno(alunos[aluno]);
    }
}

function salvaAluno(novoAluno) {

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {

        if(request.readyState === request.DONE) {
            try {
                novoAluno['id'] = JSON.parse(request.responseText).id;
                adicionaAluno(novoAluno);
            } catch(err) {
                console.log(err.message + " em " + request.responseText);
            }
        }
    };


    request.open("POST", url + "/alunos");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(novoAluno));
}

function removerAlunoBanco(id) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {

        if(request.readyState === request.DONE) {
        }
    };


    request.open("DELETE", url + "/alunos");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({id: id}));
}

getAlunos();