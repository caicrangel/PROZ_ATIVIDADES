create  table agencia(
	cod_agencia INT PRIMARY KEY,
  	nome_agencia VARCHAR(50) NOT NULL,
  	nome_gerente varchar(50) NOT NULL
);

create  table clientes(
	id_cliente serial PRIMARY KEY,
  	nome_cliente VARCHAR(50) NOT NULL,
  	agencia_cod INT,
  	CONSTRAINT fk_agencia
       		FOREIGN KEY (agencia_cod)
        		REFERENCES agencia (cod_agencia)
);

INSERT into agencia (cod_agencia, nome_agencia, nome_gerente) VALUES (100, 'Cash sul', 'Pedro');
INSERT into agencia (cod_agencia, nome_agencia, nome_gerente) VALUES (200, 'Cash norte', 'Felipe');
INSERT into agencia (cod_agencia, nome_agencia, nome_gerente) VALUES (300, 'Cash leste', 'Joao');

SELECT * FROM agencia;

INSERT into clientes (nome_cliente, agencia_cod) VALUES ('Maria Gorete', 100);
INSERT into clientes (nome_cliente, agencia_cod) VALUES ('Aline Soares', 300);
INSERT into clientes (nome_cliente, agencia_cod) VALUES ('Pedro Lucas', NULL);

SELECT * FROM clientes;

/*Retornando registros comuns*/
SELECT clientes.nome_cliente, agencia.cod_agencia, agencia.nome_agencia
FROM clientes
INNER JOIN agencia 
ON clientes.agencia_cod = agencia.cod_agencia;


/*Retornando registros com foco à esquerda*/
SELECT clientes.nome_cliente, agencia.cod_agencia, agencia.nome_agencia
FROM clientes
INNER JOIN agencia 
ON clientes.agencia_cod = agencia.cod_agencia;


/*Retornando registros com foco à direita*/
SELECT clientes.nome_cliente, agencia.cod_agencia, agencia.nome_agencia
FROM clientes
INNER JOIN agencia 
ON clientes.agencia_cod = agencia.cod_agencia;


/*Retornando todos os registros e unindo as tabelas*/
SELECT clientes.nome_cliente, agencia.cod_agencia, agencia.nome_agencia
FROM clientes
LEFT JOIN agencia 
ON clientes.agencia_cod = agencia.cod_agencia

UNION

SELECT clientes.nome_cliente, agencia.cod_agencia, agencia.nome_agencia
FROM clientes
RIGHT JOIN agencia 
ON clientes.agencia_cod = agencia.cod_agencia;
