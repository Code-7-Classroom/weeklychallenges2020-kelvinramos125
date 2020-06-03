DROP DATABASE IF EXISTS veryEasy;
CREATE DATABASE veryEasy;
USE veryEasy;
CREATE TABLE topCars (make varchar(255), 
modle varchar(255), 
carYear YEAR);

INSERT INTO topCars(make, 
modle, 
carYear)
VALUES("BMW", "5 Series", 2020),
("Cadillac", "CT6", 2020),
("Chevrolet", "Camaro", 2020);

INSERT INTO topCars(make, 
modle, 
carYear)
VALUES("Toyota", "Corolla", 2020),
("Subaru", "Impreza", 2020);

SELECT * FROM topCars;
DROP TABLE topCars;
