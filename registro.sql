create database if not exists leagueoflegend;

use leagueoflegend;

create table if not exists jugadores(
idJugador int not null auto_increment primary key,
nombre varchar (80) not null,
rango varchar (80) not null
);

insert into jugadores values 
(null, "JeanCarlos", "Oro II"),
(null, "Cleard", "Platino I"),
(null, "Clevelard", "Bronce II"),
(null, "Zorrix", "Plata I"),
(null, "Plomin", "Hierro II");

delete from jugadores where idJugador = 3;
delete from jugadores where idJugador between 4 and 7;

update jugadores set nombre = "ClasicNick", rango = "Planito I" where idJugador = 1;
drop table jugadores;
select * from jugadores;