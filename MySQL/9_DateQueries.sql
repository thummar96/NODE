select current_date();
select datediff("2022-10-20","1999-09-25");
select from_days(datediff(now(),"1999-09-25"));
select DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),"1999-09-25")),"%y year %m month %d day");
select dayname("1999-09-25");