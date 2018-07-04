<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 24/06/18
 * Time: 10:20
 */

require_once 'Aluno.php';


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: *');

switch ($_SERVER["REQUEST_URI"]) {
    case "/dados":
        echo json_encode($_SERVER);
        break;
    // Verifica que esta chamando a rota de alunos
    case "/alunos":
        if($_SERVER['REQUEST_METHOD'] == "GET") {
            $dados = Alunos::listar();

            echo json_encode($dados);
            break;
        } else if ($_SERVER['REQUEST_METHOD'] == "POST") {

            $responsta['id'] = Alunos::adicionar(file_get_contents('php://input'));
            http_response_code(201);
            echo json_encode($responsta);
            break;

        } else if ($_SERVER['REQUEST_METHOD'] == "PUT") {

            Alunos::remover(file_get_contents('php://input'));

        } else {
//            http_response_code(404);
            echo "metodo invalido";
            break;

        }
         break;
    default:
        echo "URL inválida";
}