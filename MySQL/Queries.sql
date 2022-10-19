 open mysql shell => cli => Command Line Interface

1.\sql											[\\switching to sql mode]
2.\connect root@localhost:3309					[\\your ac]
3.admin@123									[\\password]
4.Y/N											[your pc work (Y) and other pc work (N)]
5.show databases;								[pc in show all databases list]	
6.create database name;							[create  new databases]
7.show databases;								[pc in show all databases list]
8.use databasesname;							[use your select databases]
9.show tables;									[pc in show all tables list]
10.create table table_name(colname datatype, . , . , . , .);	[create new table and columns]
11.insert into table_name values(. , . , .),(. , . , .),(. , . , .);	[insert data in table]
12.select * from table_name;						[show table]
13.describe table_name;							[structur table]
14.\quit										[exit sql]




 use skilldemo
 select * from client_master;
 select name,city from client_master;
 select *, name from client_master;
 select name 'client_name' from client_master;     --valid
 select name as 'client_name' from client_master;    --valid
 desc client_master;     or      describe  client_master;

where cluese

 select name from client_master
    -> where name='Ivan';

select name,city from client_master
    -> where baldue<1000;

select name,city from client_master
    -> where baldue>1000;

 select name,city from client_master
    -> where baldue>1000 and city!='Bombay';


                    -- client_master
                    -- select * from client_master;
                    --  select name from client_master;
                    --  select * from client_master;
                    -- --  select name,city,state from client_master;
                    --  select name,city,state from client_master
                    --     -> where city='bombay';
                    --     update client_master set city='Banglore' where clientno='C00005';
                    --     select * from client_master;
                    --     update client_master set baldue='1000' where clientno='C00001';
                    --      drop table client_master;




                    --     salesman_master
                    --     select name from  salesman_master 
                    --     -> where salamt='3000';
                    --     drop table salesman_master;



                    --     product_master
                    --     select description srom product_master;
                    --     drop table product_master;




            Exercise on retrieving records from a table
    ..........................................................

 a.   select name from client_master;

 b.    select * from client_master;

 c.     select name,city,state from client_master;

 d.    select description from  product_master;

 e.    select from client_master where city='bombay';

 f.    select salesmanname from salesman_master where salamt='3000';



                update records in table
            ...............................

 a.  update client_master set city='Banglore' where clientno='c00005';

 b.  update client_master set baldue='1000' where clientno='c00001';
                  