CREATE TABLE alunos (
  id INT NOT NULL KEY AUTO_INCREMENT,
  nome VARCHAR(255),  matricula INT,
  faltas_teoricas INT ,
  faltas_praticas INT,
  notas_p1 DECIMAL(3,2) ,
  notas_p2 DECIMAL(3,2) ,
  notas_p3 DECIMAL(3,2) ,
  notas_p4 DECIMAL(3,2) ,
  notas_p5 DECIMAL(3,2) ,
  notas_p6 DECIMAL(3,2) ,
  nota_recuperacao DECIMAL(3,2) ,
  aprovado BOOLEAN
);