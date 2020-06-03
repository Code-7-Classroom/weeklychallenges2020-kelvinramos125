DROP DATABASE IF EXISTS easy;
CREATE DATABASE easy;
USE easy;
CREATE TABLE faveBooks (title varchar(255), 
publishDate YEAR, 
authorFirstName VARCHAR(255),
authorLastName VARCHAR(255));

INSERT INTO faveBooks (title ,
publishDate , 
authorFirstName, authorLastName)
VALUES("House of the Scorpion", 2002, "Nancy", "Farmer"),
("The Hunger Games", 2008, "Suzanne", "Collins"),
("Perks of Being a Wallflower", 1999, "Stephen", "Chbosky"),
("The Diary Of a Young Girl", 1947, "Anne", "Frank"), 
("Moby Dick", 1951, "Herman", "Melville");

DELETE FROM faveBooks ORDER BY publishDate ASC LIMIT 1;
SELECT COUNT(1) FROM faveBooks;
SELECT * FROM faveBooks;
DROP TABLE faveBooks;
