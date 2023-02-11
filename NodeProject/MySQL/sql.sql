mysql -u root -p
show databases;
use kinjal;

-- //users

create table Users(id int NOT NULL AUTO_INCREMENT,
         name varchar(30),
         email varchar(30),
         passwordHash varchar(15),
         street varchar(30),
         apartment varchar(30),
         city varchar(30),
         zip numeric(6),
         country varchar(30),
         phone numeric(10),
         isAdmin Boolean,
         CONSTRAINT PK_Users PRIMARY KEY(id) 
     );

--//category

create table  Category(id int primary key AUTO_INCREMENT,
    name varchar(30),
    color varchar(30),
    icon varchar(30),
    image varchar(30)
);
