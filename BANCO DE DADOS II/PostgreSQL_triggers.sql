create  table agencia(
	cod_agencia INT PRIMARY KEY,
  	nome_agencia VARCHAR(50) NOT NULL,
  	nome_gerente varchar(50) NOT NULL
);

create  table clientes(
	id_cliente serial PRIMARY KEY,
  	nome_cliente VARCHAR(50) NOT NULL,
  	agencia_cod INT,
  	datacadastro TIMESTAMP WITHOUT TIME ZONE,
  	dataalteracao TIMESTAMP WITHOUT TIME ZONE,
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


/*Criando a função para setar data de cadastro*/
CREATE FUNCTION data_cadastro()
RETURNS TRIGGER AS $$
BEGIN
	NEW.dataCadastro = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

/*Criando a função para setar data de alteração*/
CREATE FUNCTION data_alteracao()
RETURNS TRIGGER AS $$
BEGIN
	NEW.dataalteracao = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

/*Criando a trigger para setar a data de cadastro do cliente*/
create TRIGGER data_cadastro_novo_cliente
	BEFORE INSERT
    on clientes
    FOR EACH ROW
    EXECUTE PROCEDURE data_cadastro();

/*Criando a trigger para setar a data de alteração do cliente*/
create TRIGGER data_alteracao_cliente
	BEFORE UPDATE
    on clientes
    FOR EACH ROW
    EXECUTE PROCEDURE data_alteracao();

INSERT into clientes (nome_cliente, agencia_cod) VALUES ('Caic Rangel', 100);

UPDATE clientes SET agencia_cod = 300 WHERE nome_cliente = 'Caic Rangel';