CREATE TABLE clientes (
	id_cliente serial PRIMARY KEY,
  	nome_cliente VARCHAR(255),
  	data_cadastro VARCHAR(10)
);


INSERT INTO clientes (nome_cliente, data_cadastro) VALUES 
	('Caic Rangel', '2023-12-13'),
    ('Anderson Gomes', '2023-12-13'),
    ('Pedro Gonçalvez', '2023-12-13'),
    ('Luiz Ribeiro', '2023-12-13'),
    ('Ana Cristina', '2023-12-13')

INSERT INTO clientes (nome_cliente, data_cadastro) VALUES 
	('Maria Dores', '2023-12-13')
    
SELECT * FROM clientes

CREATE OR REPLACE FUNCTION contarClientesPorDia(dataCadastro DATE)
RETURNS INTEGER
AS $$
DECLARE
    totalClientes INTEGER;
BEGIN
    SELECT COUNT(*) INTO totalClientes
    FROM clientes
    WHERE CAST(data_cadastro AS DATE) = dataCadastro;

    RETURN totalClientes;
END;
$$ LANGUAGE plpgsql;


SELECT contarClientesPorDia('2023-12-13'::DATE);
