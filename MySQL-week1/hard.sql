DROP DATABASE IF EXISTS mediumChallenge;
CREATE DATABASE mediumChallenge;
USE mediumChallenge;
CREATE TABLE topMovies (title VARCHAR(255), 
releaseDate YEAR, 
rating DECIMAL(2,1));

INSERT INTO topMovies (title , 
releaseDate , 
rating)
VALUES("Avengers: Ultron", 2015, 7.5), 
("Transcendence", 2014, 2.0),
("Godzilla: King of the Monsters", 2019, 4.2),
("Godzilla", 2014, 7.5),
("The Great Gatsby", 2013, 4.8),
("Pirates of the Caribbean: The Curse of the Black Pearl", 2003, 7.9),
("Lucy", 2014, 6.7),
("Jurassic Park 3", 2001, 4.9),
("Interstellar", 2014, 7.2),
("Joker", 2019, 8.5);

ALTER TABLE topMovies ADD COLUMN directorFirstName VARCHAR(255);
ALTER TABLE topMovies ADD COLUMN directorLastName VARCHAR(255);

UPDATE topMovies
	SET directorFirstName = 'Joss', directorLastName = 'Whedon'
	WHERE title = 'Avengers: Ultron';
UPDATE topMovies 
	SET directorFirstName = 'Wally', directorLastName = 'Pfister'
	WHERE title = 'Transcendence';
UPDATE topMovies 
	SET directorFirstName = 'Michael', directorLastName = 'Dougherty'
	WHERE title = 'Godzilla: King of the Monsters';
UPDATE topMovies 
	SET directorFirstName = 'Gareth', directorLastName = 'Edwards'
	WHERE title = 'Godzilla';
UPDATE topMovies 
	SET directorFirstName = 'Baz', directorLastName = 'Luhrmann'
	WHERE title = 'The Great Gatsby';
UPDATE topMovies 
	SET directorFirstName = 'Gore', directorLastName = 'Verbinski'
	WHERE title = 'Pirates of the Caribbean: The Curse of the Black Pearl';
UPDATE topMovies 
	SET directorFirstName = 'Luc', directorLastName = 'Besson'
	WHERE title = 'Lucy';
UPDATE topMovies 
	SET directorFirstName = 'Joe', directorLastName = 'Johnston'
	WHERE title = 'Jurassic Park 3';
UPDATE topMovies 
	SET directorFirstName = 'Christopher', directorLastName = 'Nolan'
	WHERE title = 'Interstellar';
UPDATE topMovies 
	SET directorFirstName = 'Todd', directorLastName = 'Philips'
	WHERE title = 'Joker';
    
ALTER TABLE topMovies ADD COLUMN fullName VARCHAR(50);
UPDATE topMovies SET fullName = CONCAT(directorFirstName, ' ', directorLastName);

SELECT * FROM topMovies ORDER BY fullname;

DELETE FROM topMovies WHERE REGEXP_LIKE(directorLastName, '[r-z]$');

SELECT * FROM topMovies ORDER BY fullname LIMIT 3;

SELECT * FROM topMovies;

DROP TABLE topMovies;
