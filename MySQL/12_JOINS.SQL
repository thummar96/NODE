--*** Hand On Exercises Date : 09/11/2022 ***--


1.Exercises on using Having and group by calauses :

A.Print the description and total qty sold for each product.

                select p.productno,p.Description, sum(sod.QTYOREDERD) 
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                 where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        group by p.productno;

                                +-----------+--------------+---------------------+
                                | productno | Description  | sum(sod.QTYOREDERD) |
                                +-----------+--------------+---------------------+
                                | p06734    | mouse        |                   1 |
                                | p03453    | monitors     |                   2 |
                                | p07885    | CD Drive     |                   5 |
                                | p07965    | 540 HDD      |                   3 |
                                | p00001    | 1.44floppies |                  34 |
                                | p07868    | keyboards    |                   3 |
                                | p07975    | 1.44 Drive   |                   6 |
                                +-----------+--------------+---------------------+



B.Find the value of each product sold.

                select p.productno,p.Description, sum(SOD.QTYDISP) 
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                 where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        group by p.productno;


                                +-----------+--------------+------------------+
                                | productno | Description  | sum(SOD.QTYDISP) |
                                +-----------+--------------+------------------+
                                | p00001    | 1.44floppies |               19 |
                                | p07965    | 540 HDD      |                1 |
                                | p07885    | CD Drive     |                2 |
                                | p03453    | monitors     |                2 |
                                | p06734    | mouse        |                1 |
                                | p07868    | keyboards    |                3 |
                                | p07975    | 1.44 Drive   |                3 |
                                +-----------+--------------+------------------+


C.Calculate the average qty sold for each client that has a maximum order value of 15000.00.



                select c.Clientno,c.Name,avg(sod.QTYDISP) as "Avg. sales on SALES_ORDER_DETAILS",max(sod.QTYOREDERD*sod.PRODUCTRATE)
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod
                                where c.Clientno=so.Clientno and so.ORDERNO = sod.ORDERNO
                                        group by c.Clientno
                                                having max(sod.QTYOREDERD*sod.PRODUCTRATE)>15000;

                +----------+---------+-----------------------------------+-------------------------------------+
                | Clientno | Name    | Avg. sales on SALES_ORDER_DETAILS | max(sod.QTYOREDERD*sod.PRODUCTRATE) |
                +----------+---------+-----------------------------------+-------------------------------------+
                | C00001   | Ivan    |                            1.8000 |                            16800.00 |
                | C00003   | Pramada |                            4.6667 |                            15750.00 |
                +----------+---------+-----------------------------------+-------------------------------------+

D.Find out the total of all the billed orders for month of 10.

                select CLIENTNO,SALESMANNO,BILLYN,DELYDATE,ORDERSTATUS
                        from SALES_ORDER
                                where BILLYN="Y" and MONTH(ORDERDATE)=10;

                        +----------+------------+--------+------------+-------------+
                        | CLIENTNO | SALESMANNO | BILLYN | DELYDATE   | ORDERSTATUS |
                        +----------+------------+--------+------------+-------------+
                        | C00001   | S00001     | Y      | 2007-12-02 | Fulfilled   |
                        | C00003   | S00003     | Y      | 2020-09-02 | Fulfilled   |
                        +----------+------------+--------+------------+-------------+

                select MONTH(so.ORDERDATE) as "Octomber",sum(sod.QTYOREDERD) as "Total"
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                         group by so.ORDERDATE
                                                having  10=(MONTH(so.ORDERDATE));

                                                +----------+-------+
                                                | Octomber | Total |
                                                +----------+-------+
                                                |       10 |    54 |
                                                +----------+-------+

   




2.Exercises on joins and Correlation.


A. Find out the Product, which have been sold to "Ivan Bayross".

                select C.Clientno,C.Name,SOD.orderno,SOD.PRODUCTNO
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        and C.name =  "Ivan"  ; 

                                        +----------+------+---------+-----------+
                                        | Clientno | Name | orderno | PRODUCTNO |
                                        +----------+------+---------+-----------+
                                        | C00001   | Ivan | 019001  | P00001    |
                                        | C00001   | Ivan | 019001  | P07965    |
                                        | C00001   | Ivan | 019001  | P07885    |
                                        | C00001   | Ivan | 019003  | p03453    |
                                        | C00001   | Ivan | 019003  | p06734    |
                                        +----------+------+---------+-----------+


B.Find out the products and their quantities that will have to be delivered in current month.

                select P.productno,P.Description ,SOD.QTYOREDERD,SOD.QTYDISP,SO.ORDERDATE
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        and 10=(MONTH(DELYDATE)) ; 
                                +-----------+--------------+------------+---------+------------+
                                | productno | Description  | QTYOREDERD | QTYDISP | DELYDATE   |
                                +-----------+--------------+------------+---------+------------+
                                | p00001    | 1.44floppies |          4 |       4 | 2020-10-02 |
                                | p07965    | 540 HDD      |          2 |       1 | 2020-10-02 |
                                | p07885    | CD Drive     |          2 |       1 | 2020-10-02 |
                                +-----------+--------------+------------+---------+------------+


                select P.productno,P.Description ,SOD.QTYOREDERD,SOD.QTYDISP,SO.ORDERDATE
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        and SO.ORDERDATE < "2022-10-15"; 


                                +-----------+--------------+------------+---------+------------+
                                | productno | Description  | QTYOREDERD | QTYDISP | ORDERDATE  |
                                +-----------+--------------+------------+---------+------------+
                                | p00001    | 1.44floppies |          4 |       4 | 2022-10-12 |
                                | p07965    | 540 HDD      |          2 |       1 | 2022-10-12 |
                                | p07885    | CD Drive     |          2 |       1 | 2022-10-12 |
                                | p00001    | 1.44floppies |         10 |       0 | 2022-10-12 |
                                | p03453    | monitors     |          2 |       2 | 2022-10-12 |
                                | p06734    | mouse        |          1 |       1 | 2022-10-12 |
                                | p00001    | 1.44floppies |         10 |       5 | 2022-10-12 |
                                | p07975    | 1.44 Drive   |          5 |       3 | 2022-10-12 |
                                | p07868    | keyboards    |          3 |       3 | 2022-10-12 |
                                | p07885    | CD Drive     |          3 |       1 | 2022-10-12 |
                                | p00001    | 1.44floppies |         10 |      10 | 2022-10-12 |
                                | p07965    | 540 HDD      |          1 |       0 | 2022-10-12 |
                                | p07975    | 1.44 Drive   |          1 |       0 | 2022-10-12 |
                                +-----------+--------------+------------+---------+------------+
          
                select P.productno,P.Description ,SOD.QTYOREDERD,SOD.QTYDISP,SO.ORDERDATE
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        and MONTH(CURDATE())=(MONTH(SO.ORDERDATE)) ; 


                Empty set becuase no entery today in SALES_ORDER table.


C. List the Productno and description of constantly sold(I.E rapidly moving) products.

          

                select  p.productno,p.description,sum(sod.qtyordered) 
                        from product_master p,sales_order_details sod 
                                where p.productno=sod.productno 
                                        group by p.productno 
                                                order by sum(sod.qtyordered) desc limit 1;

                                +-----------+--------------+---------------------+
                                | productno | description  | sum(sod.QTYOREDERD) |
                                +-----------+--------------+---------------------+
                                | p00001    | 1.44floppies |                  34 |
                                +-----------+--------------+---------------------+



D. Find the name of client who have purchased "Trousers";


                select c.Name,p.productno
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        and p.description = "Monitors"; 

                                        +------+-----------+
                                        | Name | productno |
                                        +------+-----------+
                                        | Ivan | p03453    |
                                        +------+-----------+



E. List the products and orders from customers who have ordered less than 5 unit of "Pull Overs".

                select p.Productno ,p.Description,c.Clientno,c.name,sod.QTYOREDERD as "keybord"
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        and  sod.QTYOREDERD<5 and P.description="Keyboards";  


                                        +-----------+-------------+----------+---------+---------+
                                        | Productno | Description | Clientno | name    | keybord |
                                        +-----------+-------------+----------+---------+---------+
                                        | p07868    | keyboards   | C00003   | Pramada |       3 |
                                        +-----------+-------------+----------+---------+---------+


F. Find the product and their quantities for the orders placed by "Iven" and "Ravi"


                select P.Productno ,P.Description,C.Clientno,C.name,SOD.QTYOREDERD 
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        and (C.name = "Ivan" or C.name = "Ravi");

                                +-----------+--------------+----------+------+------------+
                                | Productno | Description  | Clientno | name | QTYOREDERD |
                                +-----------+--------------+----------+------+------------+
                                | p00001    | 1.44floppies | C00001   | Ivan |          4 |
                                | p07965    | 540 HDD      | C00001   | Ivan |          2 |
                                | p07885    | CD Drive     | C00001   | Ivan |          2 |
                                | p03453    | monitors     | C00001   | Ivan |          2 |
                                | p06734    | mouse        | C00001   | Ivan |          1 |
                                | p00001    | 1.44floppies | C00005   | Ravi |         10 |
                                | p07975    | 1.44 Drive   | C00005   | Ravi |          5 |
                                +-----------+--------------+----------+------+------------+


G. Find the product and their quantities for the orders placed by  clientno = "C00001" and clientno = "C00002".


                select P.Productno ,P.Description,C.Clientno,C.name,SOD.QTYOREDERD 
                        from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                                 where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                        and (C.clientno = "C00001" or C.clientno = "C00002");
  

                                +-----------+--------------+----------+---------+------------+
                                | Productno | Description  | Clientno | name    | QTYOREDERD |
                                +-----------+--------------+----------+---------+------------+
                                | p00001    | 1.44floppies | C00001   | Ivan    |          4 |
                                | p07965    | 540 HDD      | C00001   | Ivan    |          2 |
                                | p07885    | CD Drive     | C00001   | Ivan    |          2 |
                                | p03453    | monitors     | C00001   | Ivan    |          2 |
                                | p06734    | mouse        | C00001   | Ivan    |          1 |
                                | p00001    | 1.44floppies | C00002   | Vandana |         10 |
                                +-----------+--------------+----------+---------+------------+




3. Exercises On Sub_Queries :



A. Find the productno, and description of non-moving products i.e product not bigning sold.


                select productno,description
                        from product_master
                                where productno not in (select PRODUCTNO from SALES_ORDER_DETAILS );

                                +-----------+---------------+
                                | productno | description   |
                                +-----------+---------------+
                                | p07865    | 1.22 floppies |
                                | p08865    | 1.22 Drive    |
                                +-----------+---------------+


B. List the customers name , Address1 ,Address2 , City , PinCode for the client who placed orderno = "O19001"  :

                select clientno,Name,city,pincode,state
                        from client_master
                                where clientno not in (select CLIENTNO from SALES_ORDER where orderno = "C00001");


                                +----------+---------+--------+---------+-------------+
                                | clientno | Name    | city   | pincode | state       |
                                +----------+---------+--------+---------+-------------+
                                | C00001   | Ivan    | Bombay |  400054 | Maharashtra |
                                | C00002   | Vandana | Madras |  780001 | Tamilnadu   |
                                | C00003   | Pramada | Bombay |  400057 | Maharashtra |
                                | C00004   | Basu    | Bombay |  400056 | Maharashtra |
                                | C00005   | Ravi    | Delhi  |  100001 | Delhi       |
                                +----------+---------+--------+---------+-------------+

select clientno,Name,city,pincode,state
       from client_master
          where clientno not in (select CLIENTNO from SALES_ORDER where orderno = "O00001");


c. List the client names that have placed orders before the month of May 02.

                select clientno,Name
                        from client_master
                                 where clientno in (select Clientno from SALES_ORDER where ORDERDATE < "2022-10-14");

                                +----------+---------+
                                | clientno | Name    |
                                +----------+---------+
                                | C00001   | Ivan    |
                                | C00002   | Vandana |
                                | C00003   | Pramada |
                                | C00004   | Basu    |
                                | C00005   | Ravi    |
                                +----------+---------+

D. List if the product 'Lycra Top' has been ordered by any clientand print the client_no,Name to whom it was sold.

                select clientno,Name
                        from client_master
                                where clientno in (select clientno from SALES_ORDER where orderno in (select orderno from SALES_ORDER_DETAILS where productno in  (select Productno from product_master where description = "1.44floppies")));

                                +----------+---------+
                                | clientno | Name    |
                                +----------+---------+
                                | C00001   | Ivan    |
                                | C00002   | Vandana |
                                | C00003   | Pramada |
                                | C00005   | Ravi    |
                                +----------+---------+

E. List the names of client who have placed orders wroth Rs. 10000 or more.

                select clientno,name
                        from client_master
                                where clientno in (select clientno from SALES_ORDER where orderno in (select orderno from SALES_ORDER_DETAILS where productno in  (select Productno from product_master where Sellprice >= 10000)));


    
                                +----------+------+
                                | clientno | name |
                                +----------+------+     
                                | C00001   | Ivan |
                                +----------+------+