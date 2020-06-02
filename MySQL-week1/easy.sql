DROP DATABASE IF EXISTS easy;
CREATE DATABASE easy;
USE easy;
CREATE TABLE faveBook (title varchar(255), 
publishDate varchar(255), 
authorName varchar(255));

INSERT INTO topCars (title , 
publishDate , 
authorName)
VALUES("House of the Scorpion", "2002", "Nancy Farmer"),
("The Hunger Games", "September 14, 2008", "Suzanne Collins"),
("Perks of Being a Wallflower", "February 1, 1999", "Stephen Chbosky"),
("The Diary Of a Young Girl", "June 25, 1947", "Anne Frank"), 
("Moby Dick", "October 18, 1851", "Herman Melville"),
("The Heretic’s Daughter", "September 3, 2008", "Kathleen Kent");