
use saket1;

ALTER TABLE Meter DROP FOREIGN KEY meter_ibfk_1;
DROP TABLE IF EXISTS Customer;
CREATE TABLE Customer (
  cust_id int(5) primary key,
  cust_name varchar(50) ,
  address varchar(50) ,
  phone varchar(10),
  password varchar(50)
);
insert into Customer values 
(111,'Abhay','MG Road, Bangalore','8998765312','101'),
(112,'Vishnu','West Andheri, Mumbai','8811997714','122'),
(113,'Anant','Vasant Kunj, Delhi','9001221331','1222'),
(301,'Vijay','HSR, Bangalore','9111239102','249'),
(333,'Ajay','Connaught Place, Delhi','6205985141','951');


DROP TABLE IF EXISTS Meter;
CREATE TABLE Meter
(meter_id int(5) primary key,
cust_id int(5),
meter_no int(10),
ins_date date,
foreign key(cust_id) references Customer(cust_id) on delete cascade);

insert into Meter values 
(951,111,9877654,'2017-09-12'),
(952,112,9877655,'2018-11-01'),
(953,113,9877656,'2018-05-17'),
(981,301,9881011,'2020-01-19'),
(982,333,9552101,'2021-03-21');


DROP TABLE IF EXISTS Bill;
CREATE TABLE Bill
(bill_id int(5) primary key,
meter_id int(5),
cust_id int(5), 
read_date date,
prev_read int(10),
cur_read int(10),
units int(5),
rate_p_unit int(5),
total_amt decimal(10,2),
foreign key(meter_id) references Meter(meter_id) on delete cascade;
foreign key(cust_id) references Customer(cust_id) on delete cascade)

insert into Bill values 
(5097,951,'2023-12-14',9560,9568,68,8,544,111),
(5098,952,'2023-12-14',1000,1042,42,8,336,112),
(5099,953,'2023-12-15',1100,1194,94,8,752,113),
(5100,981,'2023-12-15',11000,11048,48,8,384,301),
(5101,982,'2023-12-16',15900,15999,99,8,792,333);



DROP TABLE IF EXISTS Payment;
CREATE TABLE Payment
(txn_id varchar(10) primary key,
bill_id int(5),
cust_id int(5),
txn_date date,
amt_paid decimal(10,2),
foreign key(bill_id) references Bill(bill_id) on delete cascade
foreign key(cust_id) references Customer(cust_id) on delete cascade);
 
insert into Payment values 
('220195561',5097,'2024-01-03',500,111),
('220195562',5098,'2024-01-04',336,112),
('220195563',5099,'2024-01-09',750,113),
('220195564',5100,'2024-01-07',384,301),
('220195565',5101,'2024-01-10',700,333);