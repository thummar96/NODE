-- CREATE TABLE MANUFACTURERS(
--     code INT,
--     Name text,
--     CONSTRAINT pk_category PRIMARY KEY(code)
-- );

-- INSERT INTO MANUFACTURERS VALUES(1,'sony');
-- INSERT INTO MANUFACTURERS VALUES(2,'Creative Labs');
-- INSERT INTO MANUFACTURERS VALUES(3,'Hewlwtt-packard');
-- INSERT INTO MANUFACTURERS VALUES(4,'Lomega');
-- INSERT INTO MANUFACTURERS VALUES(5,'Fujitsu');
-- INSERT INTO MANUFACTURERS VALUES(6,'winchester');









-- CREATE TABLE PRODUCTS(
--         code INT,
--         Name text,
--         Price real,
--         manufacturer INT,
--         CONSTRAINT pk_category PRIMARY KEY(code),
--         CONSTRAINT fk_PRODUCTS foreign key(manufacturer) references MANUFACTURERS(code)
-- );

    -- INSERT INTO PRODUCTS VALUES(1,'Hard drive',240,5);
    -- INSERT INTO PRODUCTS VALUES(2,'Memory',120,6);
    -- INSERT INTO PRODUCTS VALUES(3,'ZIP drive',150,4);
    -- INSERT INTO PRODUCTS VALUES(4,'Floopy disk',5,6);
    -- INSERT INTO PRODUCTS VALUES(5,'Monitor',240,1);
    -- INSERT INTO PRODUCTS VALUES(6,'DVD drive',180,2);
    -- INSERT INTO PRODUCTS VALUES(7,'CD drive',90,2);
    -- INSERT INTO PRODUCTS VALUES(8,'Printer',270,3);
    -- INSERT INTO PRODUCTS VALUES(9,'Toner cartridge',66,3);
    -- INSERT INTO PRODUCTS VALUES(10,'DVD burner',180,2);



-- Queries  


-- 1.1          select name  from products;
-- 1.2          select name,price  from products;
-- 1.3          select name  from products where price <=200;
-- 1.4          select *  from products where price between 60 and 120;
-- 1.5          select name,price*100 from products;
-- 1.6          select avg(price) from products;
-- 1.7          select avg(price) from products where manufacturer =2;
-- 1.8          select count(name) from products where price >=180;
-- 1.9          select name ,price from products  where price >=180 order by price;
-- 1.10
-- 1.11
-- 1.12
-- 1.13
-- 1.14
-- 1.15         select name ,price from products order by price;
-- 1.16
-- 1.17         insert into products values(11,"Loudspeakers",70,2);
-- 1.18         update  products set name='leser printer' where name=8;
-- 1.19         update products set price=(price-(price*10)/100);
-- 1.20         update products set price=(price-(price*10)/100) where price>=120;