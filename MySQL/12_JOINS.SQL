--*** Hand On Exercises Date : 09/11/2022 ***--


1.Exercises on using Having and group by calauses :

A.Print the description and total qty sold for each product.

        select p.productno , p.description ,sum(s.qtydisp)
             from SALES_ORDER_DETAILS s,product_master p
                where s.productno=p.productno
                    group by p.productno;

                +-----------+--------------+----------------+
                | productno | description  | sum(s.qtydisp) |
                +-----------+--------------+----------------+
                | p00001    | 1.44floppies |             19 |
                | p07965    | 540 HDD      |              1 |
                | p07885    | CD Drive     |              2 |
                | p07868    | keyboards    |              3 |
                | p03453    | monitors     |              2 |
                | p06734    | mouse        |              1 |
                | p07975    | 1.44 Drive   |              3 |
                +-----------+--------------+----------------+

B.Find the value of each product sold.

            select  p.productno,p.description,sum(s.qtydisp)
                from sales_order_details s,product_master p
                      where s.productno=p.productno
                             group by p.productno;

                +-----------+--------------+----------------+
                | productno | description  | sum(s.qtydisp) |
                +-----------+--------------+----------------+
                | p00001    | 1.44floppies |             19 |
                | p07965    | 540 HDD      |              1 |
                | p07885    | CD Drive     |              2 |
                | p07868    | keyboards    |              3 |
                | p03453    | monitors     |              2 |
                | p06734    | mouse        |              1 |
                | p07975    | 1.44 Drive   |              3 |
                +-----------+--------------+----------------+

C.Calculate the average qty sold for each client that has a maximum order value of 15000.00.

-- select a.clientno,avg(b.qtydisp)
--     ->  from SALES_ORDER_DETAILS  b,CLIENT_MASTER  a,SALES_ORDER c
--     -> where a.clientno=c.clientno and c.orderno=b.orderno
--     -> group by a.clientno
--     -> having max(b.QTYOREDERD * b.productrate)>15000;

        select c.Clientno,c.Name,avg(sod.QTYDISP) as "Avg. sales on SALES_ORDER_DETAILS"
            from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod
                where c.Clientno=so.Clientno and so.ORDERNO = sod.ORDERNO
                    group by c.Clientno
                        having max(sod.QTYOREDERD*sod.PRODUCTRATE)>15000;

        +----------+---------+-----------------------------------+
        | Clientno | Name    | Avg. sales on SALES_ORDER_DETAILS |
        +----------+---------+-----------------------------------+
        | C00001   | Ivan    |                            1.8000 |
        | C00003   | Pramada |                            4.6667 |
        +----------+---------+-----------------------------------+


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

            select so.ORDERDATE,sum(sod.QTYOREDERD) as "Total"
                    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                            where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                                    and 10=(MONTH(so.ORDERDATE))
                                            group by so.ORDERDATE;

                            +------------+-------+
                            | ORDERDATE  | Total |
                            +------------+-------+
                            | 2022-10-12 |    54 |
                            +------------+-------+


    -- select SALES_ORDER.ORDERDATE,sum(SALES_ORDER_DETAILS.QTYOREDERD)
    -- from (((product_master
    -- inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
    -- inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
    -- inner join client_master on  sales_order.Clientno = client_master.Clientno )
    -- where  sales_order.BILLYN="Y"
    -- group by SALES_ORDER.ORDERDATE
    -- having 10=(MONTH(sales_order.DELYDATE));


    -- select ORDERNO,CLIENTNO,SALESMANNO,BILLYN,DELYDATE,ORDERSTATUS
    -- from SALES_ORDER
    -- where  BILLYN="Y"
    -- group by CLIENTNO
    -- having 10=(MONTH(DELYDATE));






2.Exercises on joins and Correlation.


A. Find out the Product, which have been sold to "Ivan Bayross".

        select a.PRODUCTNO,b.description
                from SALES_ORDER_DETAILS a,product_master b, SALES_ORDER c,CLIENT_MASTER d
                    where b.productno=a.productno
                        and c.ORDERNO=a.ORDERNO
                            and c.CLIENTNO=c.CLIENTNO
                                 and d.name="Ivan";

        select c.Clientno,c.Name,sod.orderno,sod.PRODUCTNO,p.Description
             from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                     where c.Clientno=so.Clientno and so.ORDERNO = sod.ORDERNO
                            and c.name =  "Ivan"; 

         select client_master.Clientno,client_master.Name,SALES_ORDER_DETAILS.orderno,SALES_ORDER_DETAILS.PRODUCTNO
             from  ((client_master 
                    inner join SALES_ORDER on  client_master.Clientno= SALES_ORDER.Clientno)
                        inner join SALES_ORDER_DETAILS on SALES_ORDER.ORDERNO = SALES_ORDER_DETAILS.ORDERNO)
                            where client_master.name =  "Ivan"  ; 

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

        select product_master.productno,product_master.Description ,SALES_ORDER_DETAILS.QTYOREDERD,SALES_ORDER_DETAILS.QTYDISP,sales_order.DELYDATE 
                from  ((product_master 
                        inner join SALES_ORDER_DETAILS on product_master.productno=SALES_ORDER_DETAILS.PRODUCTNO)
                                inner join sales_order on SALES_ORDER.orderno=SALES_ORDER_DETAILS.orderno)
                                        where 10=(MONTH(DELYDATE)) ; 

                    +-----------+--------------+------------+---------+------------+
                    | productno | Description  | QTYOREDERD | QTYDISP | DELYDATE   |
                    +-----------+--------------+------------+---------+------------+
                    | p00001    | 1.44floppies |          4 |       4 | 2020-10-02 |
                    | p07965    | 540 HDD      |          2 |       1 | 2020-10-02 |
                    | p07885    | CD Drive     |          2 |       1 | 2020-10-02 |
                    +-----------+--------------+------------+---------+------------+


            select product_master.productno,product_master.Description ,SALES_ORDER_DETAILS.QTYOREDERD,SALES_ORDER_DETAILS.QTYDISP,sales_order.DELYDATE 
                    from  ((product_master 
                             inner join SALES_ORDER_DETAILS on product_master.productno=SALES_ORDER_DETAILS.PRODUCTNO)
                                    inner join sales_order on SALES_ORDER.orderno=SALES_ORDER_DETAILS.orderno)
                                            where MONTH(CURDATE())=(MONTH(DELYDATE)) ;


                Empty set becuase no entery today in SALES_ORDER table.



C. List the Productno and description of constantly sold(I.E rapidly moving) products.

            select product_master.productno,product_master.Description,SALES_ORDER_DETAILS.QTYOREDERD
                    from product_master
                            inner join SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno
                                    where SALES_ORDER_DETAILS.QTYOREDERD =(select max(QTYOREDERD) from SALES_ORDER_DETAILS); 

                            +-----------+--------------+------------+
                            | productno | Description  | QTYOREDERD |
                            +-----------+--------------+------------+
                            | p00001    | 1.44floppies |         10 |
                            | p00001    | 1.44floppies |         10 |
                            | p00001    | 1.44floppies |         10 |
                            +-----------+--------------+------------+



D. Find the name of client who have purchased "Trousers";


                select client_master.name 
                        from (((client_master
                                inner join sales_order on  sales_order.Clientno = client_master.Clientno )
                                        inner join SALES_ORDER_DETAILS on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
                                                inner join product_master on product_master.productno = SALES_ORDER_DETAILS.productno)
                                                    where product_master.description = "Trousers";


                             Empty set


                select client_master.name ,product_master.productno
                        from (((product_master
                                inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
                                        inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
                                                inner join client_master on  sales_order.Clientno = client_master.Clientno )
                                                        where product_master.description = "Trousers";

                             Empty set


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


        select product_master.Productno ,product_master.Description,client_master.Clientno,client_master.name,SALES_ORDER_DETAILS.QTYOREDERD as "Pull Over"
            from (((product_master
                inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
                    inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
                        inner join client_master on  sales_order.Clientno = client_master.Clientno )
                            where SALES_ORDER_DETAILS.QTYOREDERD<5;

                        +-----------+--------------+----------+---------+-----------+
                        | Productno | Description  | Clientno | name    | Pull Over |
                        +-----------+--------------+----------+---------+-----------+
                        | p00001    | 1.44floppies | C00001   | Ivan    |         4 |
                        | p07965    | 540 HDD      | C00001   | Ivan    |         2 |
                        | p07885    | CD Drive     | C00001   | Ivan    |         2 |
                        | p07868    | keyboards    | C00003   | Pramada |         3 |
                        | p07885    | CD Drive     | C00003   | Pramada |         3 |
                        | p03453    | monitors     | C00001   | Ivan    |         2 |
                        | p06734    | mouse        | C00001   | Ivan    |         1 |
                        | p07965    | 540 HDD      | C00004   | Basu    |         1 |
                        | p07975    | 1.44 Drive   | C00004   | Basu    |         1 |
                        +-----------+--------------+----------+---------+-----------+


F. Find the product and their quantities for the orders placed by "Iven" and "Ravi"


            select product_master.Productno ,product_master.Description,client_master.Clientno,client_master.name,SALES_ORDER_DETAILS.QTYOREDERD 
                    from (((product_master
                            inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
                                inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
                                    inner join client_master on  sales_order.Clientno = client_master.Clientno )
                                        where client_master.name = "Ivan" or client_master.name = "Mamta";

                        +-----------+--------------+----------+------+------------+
                        | Productno | Description  | Clientno | name | QTYOREDERD |
                        +-----------+--------------+----------+------+------------+
                        | p00001    | 1.44floppies | C00001   | Ivan |          4 |
                        | p07965    | 540 HDD      | C00001   | Ivan |          2 |
                        | p07885    | CD Drive     | C00001   | Ivan |          2 |
                        | p03453    | monitors     | C00001   | Ivan |          2 |
                        | p06734    | mouse        | C00001   | Ivan |          1 |
                        +-----------+--------------+----------+------+------------+

G. Find the product and their quantities for the orders placed by  clientno = "C00001" and clientno = "C00002".


            select product_master.Productno ,product_master.Description,client_master.Clientno,client_master.name,SALES_ORDER_DETAILS.QTYOREDERD 
                from (((product_master
                    inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
                        inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
                            inner join client_master on  sales_order.Clientno = client_master.Clientno )
                                where client_master.clientno = "C00001" or client_master.clientno = "C00002";


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


                select product_master.productno , product_master.description
                    from product_master
                            left join SALES_ORDER_DETAILS
                                on product_master.productno = SALES_ORDER_DETAILS.productno
                                    where product_master.productno not in (select product_master.productno from product_master inner join SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno);


                        +-----------+---------------+
                        | productno | description   |
                        +-----------+---------------+
                        | p07865    | 1.22 floppies |
                        | p08865    | 1.22 Drive    |
                        +-----------+---------------+


B. List the customers name , Address1 ,Address2 , City , PinCode for the client who placed orderno = "O19001"  :

            select client_master.clientno,client_master.Name,client_master.city,client_master.pincode,client_master.state
                    from client_master
                            inner join SALES_ORDER on  client_master.clientno = SALES_ORDER.Clientno
                                    where SALES_ORDER.orderno="O19001";


                 Empty set


c. List the client names that have placed orders before the month of May 02.

            select client_master.clientno, client_master.name
                from client_master
                    inner join SALES_ORDER on  client_master.clientno = SALES_ORDER.Clientno
                        where (to_days(SALES_ORDER.ORDERDATE)) < (to_days("2022-10-14"));

                        +----------+---------+
                        | clientno | name    |
                        +----------+---------+
                        | C00001   | Ivan    |
                        | C00002   | Vandana |
                        | C00001   | Ivan    |
                        | C00005   | Ravi    |
                        | C00003   | Pramada |
                        | C00004   | Basu    |
                        +----------+---------+

D. List if the product 'Lycra Top' has been ordered by any clientand print the client_no,Name to whom it was sold.

            select c.clientno,c.Name
                from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                     where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                            and p.description = "1.44floppies";

                        +----------+---------+
                        | clientno | Name    |
                        +----------+---------+
                        | C00001   | Ivan    |
                        | C00002   | Vandana |
                        | C00003   | Pramada |
                        | C00005   | Ravi    |
                        +----------+---------+


E. List the names of client who have placed orders wroth Rs. 10000 or more.

            select c.clientno,c.Name,sum(sod.PRODUCTRATE) as "Sum"
                from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
                    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
                        group by c.clientno
                            having (sum(sod.PRODUCTRATE))>=10000;

    
                        +----------+------+----------+
                        | clientno | Name | Sum      |
                        +----------+------+----------+
                        | C00001   | Ivan | 27225.00 |  
                        +----------+------+----------+