DROP DATABASE IF EXISTS veryEasy;
CREATE DATABASE veryEasy;
USE veryEasy;
CREATE TABLE topCars (make varchar(255), 
modle varchar(255), 
carYear int);

INSERT INTO topCars (make varchar, 
modle varchar, 
carYear)
VALUES("BMW", "5 Series", 2020),
("Cadillac", "CT6", 2020),
("Chevrolet", "Camaro", 2020);