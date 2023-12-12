CREATE TABLE compras (
	id_compras serial PRIMARY KEY,
  	produto VARCHAR(255),
  	data_compras DATE,
  	qtd_compras INT
);

insert into compras (produto, data_compras, qtd_compras) VALUES ('Camisa preta', '2023-12-11', 100);
insert into compras (produto, data_compras, qtd_compras) VALUES ('Camisa verde', '2023-12-11', 300);


SELECT * FROM compras;


CREATE OR REPLACE PROCEDURE qtd_compras_dia(anoMesDia DATE)
AS $$
DECLARE
    mensagem TEXT;
BEGIN
    SELECT CONCAT('Na data ', anoMesDia, ' foi realizada a compra de: ', COALESCE(SUM(qtd_compras), 0), ' produtos')
    INTO mensagem
    FROM compras
    WHERE data_compras = anoMesDia;

    IF mensagem IS NOT NULL THEN
        RAISE EXCEPTION '%', mensagem;
    ELSE
        RAISE EXCEPTION 'Nenhuma compra registrada na data %.', anoMesDia;
    END IF;
END;
$$ LANGUAGE plpgsql;


CALL qtd_compras_dia('2023-12-11');

