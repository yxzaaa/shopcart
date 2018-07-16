set names utf8;
create database shopcart charset=utf8;
use shopcart;
create table cart(
    cid int primary key auto_increment,
    proid int nut null,
    count int not null
);
create table kind(
    kid int primary key auto_increment,
    kname varchar(64) not null
);
insert into kind values
    (1,"cameras"),
    (2,"accessories");
create table products(
    pid int primary key auto_increment,
    kindid int not null,
    pname varchar(64) not null,
    pavatar varchar(256) not null,
    price decimal(100,2) not null
);
insert into products values
    (null,1,"Wyze cam","../assets/img/Pan.png",12.99),
    (null,1,"Wyze cam","../assets/img/Pan.png",12.99),
    (null,2,"Wyze cam","../assets/img/Pan.png",12.99),
    (null,2,"Wyze cam","../assets/img/Pan.png",12.99);