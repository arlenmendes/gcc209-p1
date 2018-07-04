<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 04/07/18
 * Time: 11:17
 */

class Alunos {
    public static function listar () {
        $conexao = new PDO("mysql:host=172.17.0.2;dbname=diario", "root", "admin");

        $dados = $conexao->query("select * from alunos");
        $alunos = [];
        while ($aluno = $dados->fetch(PDO::FETCH_OBJ)) {
            $alunos[] = $aluno;
        }

        return $alunos;

    }

    public static function adicionar ($dados) {
        $obj = json_decode($dados, true);
        $conexao = new PDO("mysql:host=172.17.0.2;dbname=diario", "root", "admin");

        try {


            $stmt = $conexao->prepare("INSERT INTO alunos(nome, matricula, faltas_teoricas, faltas_praticas) VALUES (?, ?, 0, 0);");

            $stmt->bindParam(1, $obj['nome']);
            $stmt->bindParam(2, $obj['matricula']);
            $stmt->execute();


            $result = $conexao->prepare("SELECT id FROM alunos ORDER BY ID DESC LIMIT 1");
            $result->execute();

            $id = $result->fetch(PDO::FETCH_OBJ);
            return $id->id;
        } catch (Exception $err) {
            print_r($err->getMessage());
            exit;
        }


    }

    public static function remover($dados) {
        $obj = json_decode($dados, true);
        $conexao = new PDO("mysql:host=172.17.0.2;dbname=diario", "root", "admin");
        $stmt = $conexao->prepare("DELETE FROM alunos WHERE id=?");

        $stmt->bindParam(1, $obj['id']);
        $stmt->execute();
    }
}