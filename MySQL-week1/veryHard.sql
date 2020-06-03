DROP DATABASE IF EXISTS veryHard;
CREATE DATABASE veryHard;

USE veryHard;

CREATE TABLE topCars (make varchar(255), 
modle varchar(255), 
carYear YEAR);

INSERT INTO topCars(make, 
model, 
carYear)
VALUES("BMW", "5 Series", 2020),
("Cadillac", "CT6", 2020),
("Chevrolet", "Camaro", 2020);

ALTER TABLE topCars ADD COLUMN prices INT;
ALTER TABLE topCars ADD COLUMN colors VARCHAR(255);

UPDATE topCars SET prices=53900,  
colors='Black, Light Gray, Red, Midnight Blue' WHERE make = 'BMW';

UPDATE topCars SET prices=58995,  
colors='Black Raven, Red Horizon Tintcoat, Radiant Silver Metallic' WHERE make = 'Cadillac';

UPDATE topCars SET prices=25000,  
colors='Garnet Red Tintcoat, Black, Satin Steel Metallic' WHERE make = 'Chevrolet';

ALTER TABLE topCars ADD COLUMN makeModel VARCHAR(50);
UPDATE topCars SET makeModel = CONCAT(make, ' ', model);
SELECT make, COUNT(1) FROM topCars GROUP BY make; -- works but just selects
SELECT * FROM topCars;
DROP TABLE topCars;
