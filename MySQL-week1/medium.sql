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

SELECT * FROM topMovies 
WHERE title LIKE '%s%' ORDER BY releaseDate ASC;
DROP TABLE topMovies;
