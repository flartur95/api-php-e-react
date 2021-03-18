# api-php-e-react
Na pasta public tem a API em PHP, com a classe dos contatos e a configuração do banco.

Na src tem o display em react da função de leitura dos contatos.

A app não está completa e ainda não está funcionando. 

Primeira vez que faço uma API REST com PHP e primeira vez que utilizo mesmo o React.

Também criei um banco com nome cruddb.

Criei a tabela

CREATE TABLE IF NOT EXISTS `Contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telephone` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19;

E inseri esses registros

INSERT INTO `Contact` (`id`, `name`, `email`, `telephone`) VALUES 
(1, 'John Doe', 'johndoe@contatoseguro.com', '+55 54 99261 6161'),
(2, 'David Costa', 'sam.mraz1996@contatoseguro.com', '+55 11 98261 1161'),
(3, 'Todd Martell', 'liliane_hirt@contatoseguro.com', '+55 21 99861 6190'),
(4, 'Adela Marion', 'michael2004@contatoseguro.com', '+55 55 99761 6151'),
(5, 'Matthew Popp', 'krystel_wol7@contatoseguro.com', '+55 41 98261 6461'),
(6, 'Alan Wallin', 'neva_gutman10@contatoseguro.com', '+55 30 99261 3161'),
(7, 'Joyce Hinze', 'davonte.maye@contatoseguro.com', '+55 20 99261 2160'),
(8, 'Donna Andrews', 'joesph.quitz@contatoseguro.com','+55 51 99271 6160'),
(9, 'Andrew Best', 'jeramie_roh@contatoseguro.com', '+55 51 98261 6171'),
(10, 'Joel Ogle', 'summer_shanah@contatoseguro.com', '+55 51 99261 1111');

